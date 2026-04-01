/**
 * Academic Journal & Conference Lookup Application
 * CCF 7th Edition (March 2026 Update)
 */

(function () {
    'use strict';

  function normalizeCategoryText(text) {
    const value = (text || '').trim();
    if (!value) return value;

    if (value.includes('璁＄畻鏈轰綋绯')) return '计算机体系结构/并行与分布计算/存储系统';
    if (value.includes('璁＄畻鏈虹綉缁')) return '计算机网络';
    if (value.includes('缃戠粶涓庝俊鎭')) return '网络与信息安全';
    if (value.includes('杞欢宸ョ▼') || value.includes('绋嬪簭璁捐')) return '软件工程/系统软件/程序设计语言';
    if (value.includes('鏁版嵁搴') || value.includes('鏁版嵁鎸栨帢')) return '数据库/数据挖掘/内容检索';
    if (value.includes('璁＄畻鏈虹瀛') || value.includes('鐞嗚')) return '计算机科学理论';
    if (value.includes('璁＄畻鏈哄浘褰') || value.includes('澶氬獟浣')) return '计算机图形学与多媒体';
    if (value.includes('浜哄伐鏅鸿兘')) return '人工智能';
    if (value.includes('浜烘満浜や簰') || value.includes('鏅€傝绠')) return '人机交互与普适计算';
    if (value.includes('浜ゅ弶') || value.includes('鏂板叴')) return '交叉/综合/新兴';

    return value;
  }

  function sanitizeUrl(url) {
    const value = (url || '').trim();
    if (!value) return '';
    const m = value.match(/https?:\/\/[A-Za-z0-9\-._~:/?#\[\]@!$&'()*+,;=%]+/);
    return m ? m[0] : value;
  }

    // ============================================
    // Data Processing
    // ============================================

    // Fix data issues from PDF extraction
    function processData(rawData) {
        const categoryOrder = [
            "计算机体系结构/并行与分布计算/存储系统",
            "计算机网络",
            "网络与信息安全",
            "软件工程/系统软件/程序设计语言",
            "数据库/数据挖掘/内容检索",
            "计算机科学理论",
            "计算机图形学与多媒体",
            "人工智能",
            "人机交互与普适计算",
            "交叉/综合/新兴",
        ];

        let currentCategory = categoryOrder[0];
        let journalSectionIdx = 0; // Track which journal/conf section we're in

        return rawData.map((entry, idx) => {
            const e = { ...entry };

            // Fix type: detect conferences by checking fullName
            const fn = (e.fullName || '').toLowerCase();
            const ab = (e.abbr || '').toLowerCase();
            if (fn.includes('conference') || fn.includes('symposium') || fn.includes('workshop') ||
                fn.includes('meeting') || fn.includes('forum') || fn.includes('congress') ||
                fn.includes('colloquium') || fn.includes('summit')) {
                e.type = 'conference';
            }

            // DBLP URLs are reliable for venue type: /db/conf/ => conference, /db/journals/ => journal.
            const rawUrl = (e.url || '').toLowerCase();
            if (rawUrl.includes('/db/conf/')) {
              e.type = 'conference';
            } else if (rawUrl.includes('/db/journals/')) {
              e.type = 'journal';
            }
            // Also check publisher field for misplaced full names
            if (e.publisher && e.publisher.length > 30) {
                // Publisher field likely contains the full name
                const parts = e.publisher.match(/^(.+?)(ACM|IEEE|Springer|Elsevier|Wiley|USENIX|IET|CCF|IEEE\/ACM|ACM\/IEEE)$/);
                if (parts) {
                    if (!e.fullName || e.fullName.length < 5) {
                        e.fullName = parts[1].trim();
                    }
                    e.publisher = parts[2].trim();
                    if (e.fullName.toLowerCase().includes('conference') ||
                        e.fullName.toLowerCase().includes('symposium') ||
                        e.fullName.toLowerCase().includes('workshop')) {
                        e.type = 'conference';
                    }
                }
            }

            // Fix category for entries where it's null
            if (e.category) {
                currentCategory = e.category;
            } else {
                e.category = currentCategory;
            }
            e.category = normalizeCategoryText(e.category);
            currentCategory = e.category || currentCategory;

            // Clean up URLs
            if (e.url) {
              e.url = sanitizeUrl(e.url);
            }

            // Clean publisher
            if (e.publisher) {
                e.publisher = e.publisher.replace(/^(.*?)(SpringerSpringer)/, '$1Springer');
                // Remove duplicates
                e.publisher = e.publisher
                    .replace('SpringerSpringer', 'Springer')
                    .replace('USENIX\nAssociation', 'USENIX');
            }

            // Clean abbr
            if (e.abbr) {
                e.abbr = e.abbr.replace('SIG-METRICS', 'SIGMETRICS');
            }

            // If fullName is empty, try to use abbr as display name
            if (!e.fullName && e.abbr) {
                e.fullName = e.abbr;
            }
            if (!e.abbr && e.fullName) {
                e.abbr = e.fullName;
            }

            // Determine display name
            e.displayName = e.abbr || e.fullName || 'Unknown';
            e.entryKey = normalizeConfFileKey(e.abbr || e.displayName || e.fullName || String(idx));

            // Merge extra metadata
            const abbrKey = (e.abbr || '').replace(/[\s\-]/g, '');
            if (typeof EXTRA_METADATA !== 'undefined') {
                const meta = EXTRA_METADATA[e.abbr] || EXTRA_METADATA[abbrKey];
                if (meta) {
                    e.extra = meta;
                }
            }

            return e;
        }).filter(e => e.displayName && e.displayName !== 'Unknown' && e.displayName.length > 0);
    }

    // ============================================
    // State
    // ============================================

    let allData = [];
    let filteredData = [];
    let displayedCount = 0;
    const PAGE_SIZE = 30;
    let deadlineTimer = null;
    let currentModalEntry = null;
    const autoDeadlineCache = new Map();
    const autoFetchInFlight = new Map();
    const autoMissCache = new Map();
    const AUTO_CACHE_STORAGE_KEY = 'ccf_deadline_auto_cache_v2';
    const AUTO_CACHE_TTL_MS = 12 * 60 * 60 * 1000;
    const AUTO_MISS_TTL_MS = 2 * 60 * 60 * 1000;
    const REQUEST_TIMEOUT_MS = 4000;
    const CCFDDL_MIRRORS = [
      'https://raw.githubusercontent.com/ccfddl/ccf-deadlines/main',
      'https://cdn.jsdelivr.net/gh/ccfddl/ccf-deadlines@main',
    ];

    const CATEGORY_TO_CCFDDL_SUB = {
      '计算机体系结构/并行与分布计算/存储系统': 'DS',
      '计算机网络': 'NW',
      '网络与信息安全': 'SC',
      '软件工程/系统软件/程序设计语言': 'SE',
      '数据库/数据挖掘/内容检索': 'DB',
      '计算机科学理论': 'CT',
      '计算机图形学与多媒体': 'CG',
      '人工智能': 'AI',
      '人机交互与普适计算': 'HI',
      '交叉/综合/新兴': 'MX',
    };
    const ALL_CCFDDL_SUBS = [...new Set(Object.values(CATEGORY_TO_CCFDDL_SUB))];

    let currentFilters = {
        type: 'all',
        category: 'all',
        grade: 'all',
        publisher: 'all',
        search: ''
    };

    // ============================================
    // DOM Elements
    // ============================================

    const els = {
        searchInput: document.getElementById('searchInput'),
        searchClear: document.getElementById('searchClear'),
        searchStats: document.getElementById('searchStats'),
        typeTabs: document.getElementById('typeTabs'),
        categoryBtn: document.getElementById('categoryBtn'),
        categoryDropdown: document.getElementById('categoryDropdown'),
        categoryFilter: document.getElementById('categoryFilter'),
        publisherBtn: document.getElementById('publisherBtn'),
        publisherDropdown: document.getElementById('publisherDropdown'),
        publisherFilter: document.getElementById('publisherFilter'),
        gradeFilter: document.getElementById('gradeFilter'),
        resultsGrid: document.getElementById('resultsGrid'),
        emptyState: document.getElementById('emptyState'),
        loadMore: document.getElementById('loadMore'),
        loadMoreBtn: document.getElementById('loadMoreBtn'),
        modalOverlay: document.getElementById('modalOverlay'),
        detailModal: document.getElementById('detailModal'),
        modalContent: document.getElementById('modalContent'),
        modalClose: document.getElementById('modalClose'),
        countAll: document.getElementById('countAll'),
        countJournal: document.getElementById('countJournal'),
        countConference: document.getElementById('countConference'),
    };

    // ============================================
    // Initialize
    // ============================================

    async function init() {
        if (typeof CCF_DATA === 'undefined') {
            console.error('CCF_DATA not loaded!');
            return;
        }

        allData = processData(CCF_DATA);

        loadAutoCacheFromStorage();

        // Build filter options
        buildCategoryDropdown();
        buildPublisherDropdown();

        // Bind events
        bindEvents();

        // Create background particles
        createParticles();

        // Initial render
        applyFilters();

        // Warm up conference deadline cache in background so first paint is instant.
        scheduleBackgroundDeadlineWarmup();
    }

    function scheduleBackgroundDeadlineWarmup() {
      const run = () => {
        preloadInitialConferenceDeadlines().catch(() => null);
      };

      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(run, { timeout: 2000 });
      } else {
        setTimeout(run, 0);
      }
    }

    // ============================================
    // Background Particles
    // ============================================

    function createParticles() {
        const container = document.getElementById('bgParticles');
        for (let i = 0; i < 6; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = Math.random() * 4 + 2;
            p.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 15}s;
        animation-duration: ${15 + Math.random() * 10}s;
      `;
            container.appendChild(p);
        }
    }

    // ============================================
    // Dropdown Builders
    // ============================================

    function buildCategoryDropdown() {
        const categories = [...new Set(allData.map(e => e.category).filter(Boolean))];
        let html = '<div class="select-option active" data-value="all">全部领域 <span class="count">' + allData.length + '</span></div>';
        categories.forEach(cat => {
            const count = allData.filter(e => e.category === cat).length;
            // Shorten category names for display
            const shortCat = cat.length > 12 ? cat.substring(0, 12) + '…' : cat;
            html += `<div class="select-option" data-value="${cat}" title="${cat}">${shortCat} <span class="count">${count}</span></div>`;
        });
        els.categoryDropdown.innerHTML = html;
    }

    function buildPublisherDropdown() {
        const publishers = {};
        allData.forEach(e => {
            if (e.publisher) {
                const p = e.publisher.replace(/\//g, '/');
                publishers[p] = (publishers[p] || 0) + 1;
            }
        });
        const sorted = Object.entries(publishers).sort((a, b) => b[1] - a[1]);
        let html = '<div class="select-option active" data-value="all">全部出版商 <span class="count">' + allData.length + '</span></div>';
        sorted.forEach(([pub, count]) => {
            html += `<div class="select-option" data-value="${pub}">${pub} <span class="count">${count}</span></div>`;
        });
        els.publisherDropdown.innerHTML = html;
    }

    // ============================================
    // Event Binding
    // ============================================

    function bindEvents() {
        // Search
        let searchTimeout;
        els.searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                currentFilters.search = els.searchInput.value.trim();
                els.searchClear.style.display = currentFilters.search ? 'flex' : 'none';
                applyFilters();
            }, 200);
        });

        els.searchClear.addEventListener('click', () => {
            els.searchInput.value = '';
            currentFilters.search = '';
            els.searchClear.style.display = 'none';
            applyFilters();
        });

        // Type tabs
        els.typeTabs.addEventListener('click', (e) => {
            const tab = e.target.closest('.tab');
            if (!tab) return;
            els.typeTabs.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilters.type = tab.dataset.type;
            applyFilters();
        });

        // Grade filter
        els.gradeFilter.addEventListener('click', (e) => {
            const btn = e.target.closest('.grade-btn');
            if (!btn) return;
            els.gradeFilter.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilters.grade = btn.dataset.grade;
            applyFilters();
        });

        // Category dropdown
        setupDropdown(els.categoryFilter, els.categoryBtn, els.categoryDropdown, (value, label) => {
            currentFilters.category = value;
            els.categoryBtn.querySelector('span').textContent = value === 'all' ? '全部领域' : (label.length > 15 ? label.substring(0, 15) + '…' : label);
            applyFilters();
        });

        // Publisher dropdown
        setupDropdown(els.publisherFilter, els.publisherBtn, els.publisherDropdown, (value, label) => {
            currentFilters.publisher = value;
            els.publisherBtn.querySelector('span').textContent = value === 'all' ? '全部出版商' : label;
            applyFilters();
        });

        // Load more
        els.loadMoreBtn.addEventListener('click', () => {
            renderMore();
        });

        // Modal
        els.modalClose.addEventListener('click', closeModal);
        els.modalOverlay.addEventListener('click', (e) => {
            if (e.target === els.modalOverlay) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });

        els.modalContent.addEventListener('click', async (e) => {
          const btn = e.target.closest('.deadline-refresh-btn');
          if (!btn || !currentModalEntry) return;

          btn.disabled = true;
          btn.textContent = '刷新中...';

          try {
            const key = getConferenceCacheKey(currentModalEntry);
            autoDeadlineCache.delete(key);
            autoMissCache.delete(key);
            persistAutoCacheToStorage();

            if (currentModalEntry.extra) {
              delete currentModalEntry.extra.deadline;
              delete currentModalEntry.extra.extensionDeadline;
              delete currentModalEntry.extra.conferenceWebsite;
              delete currentModalEntry.extra.deadlineYear;
              delete currentModalEntry.extra.websiteYear;
            }

            await ensureConferenceAutoData(currentModalEntry, { forceNetwork: true, searchAllSubs: true });
            openModal(currentModalEntry);
          } finally {
            btn.disabled = false;
            btn.textContent = '刷新抓取';
          }
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!els.categoryFilter.contains(e.target)) {
                els.categoryFilter.classList.remove('open');
            }
            if (!els.publisherFilter.contains(e.target)) {
                els.publisherFilter.classList.remove('open');
            }
        });
    }

    function setupDropdown(container, btn, dropdown, onSelect) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Close other dropdowns
            document.querySelectorAll('.custom-select.open').forEach(s => {
                if (s !== container) s.classList.remove('open');
            });
            container.classList.toggle('open');
        });

        dropdown.addEventListener('click', (e) => {
            const option = e.target.closest('.select-option');
            if (!option) return;
            dropdown.querySelectorAll('.select-option').forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            container.classList.remove('open');
            const value = option.dataset.value;
            const label = option.textContent.trim().replace(/\d+$/, '').trim();
            onSelect(value, label);
        });
    }

    // ============================================
    // Filtering
    // ============================================

    function applyFilters() {
        const search = currentFilters.search.toLowerCase();

        filteredData = allData.filter(entry => {
            // Type filter
            if (currentFilters.type !== 'all' && entry.type !== currentFilters.type) return false;

            // Category filter
            if (currentFilters.category !== 'all' && entry.category !== currentFilters.category) return false;

            // Grade filter
            if (currentFilters.grade !== 'all' && entry.grade !== currentFilters.grade) return false;

            // Publisher filter
            if (currentFilters.publisher !== 'all' && entry.publisher !== currentFilters.publisher) return false;

            // Search filter
            if (search) {
                const abbr = (entry.abbr || '').toLowerCase();
                const fullName = (entry.fullName || '').toLowerCase();
                const publisher = (entry.publisher || '').toLowerCase();
                return abbr.includes(search) || fullName.includes(search) || publisher.includes(search);
            }

            return true;
        });

        // Update counts
        updateCounts();

        // Reset and render
        displayedCount = 0;
        els.resultsGrid.innerHTML = '';
        renderMore();

        // Update stats
        updateStats();
    }

    function updateCounts() {
        // Total counts for tabs (ignoring type filter)
        const withoutType = allData.filter(entry => {
            if (currentFilters.category !== 'all' && entry.category !== currentFilters.category) return false;
            if (currentFilters.grade !== 'all' && entry.grade !== currentFilters.grade) return false;
            if (currentFilters.publisher !== 'all' && entry.publisher !== currentFilters.publisher) return false;
            const search = currentFilters.search.toLowerCase();
            if (search) {
                const abbr = (entry.abbr || '').toLowerCase();
                const fullName = (entry.fullName || '').toLowerCase();
                return abbr.includes(search) || fullName.includes(search);
            }
            return true;
        });

        els.countAll.textContent = withoutType.length;
        els.countJournal.textContent = withoutType.filter(e => e.type === 'journal').length;
        els.countConference.textContent = withoutType.filter(e => e.type === 'conference').length;
    }

    function updateStats() {
        if (currentFilters.search) {
            els.searchStats.textContent = `找到 ${filteredData.length} 个结果`;
        } else {
            els.searchStats.textContent = `共 ${filteredData.length} 个期刊/会议`;
        }
    }

    // ============================================
    // Rendering
    // ============================================

    function renderMore() {
        const start = displayedCount;
        const end = Math.min(start + PAGE_SIZE, filteredData.length);

        const fragment = document.createDocumentFragment();

        for (let i = start; i < end; i++) {
            const entry = filteredData[i];
            const card = createCard(entry, i);
            fragment.appendChild(card);
        }

        els.resultsGrid.appendChild(fragment);
        displayedCount = end;

        // Toggle empty state
        els.emptyState.style.display = filteredData.length === 0 ? 'block' : 'none';

        // Toggle load more
        els.loadMore.style.display = displayedCount < filteredData.length ? 'block' : 'none';

        startDeadlineTimer();
        prefetchVisibleConferenceDeadlines();
    }

    function createCard(entry, index) {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.style.animationDelay = `${(index % PAGE_SIZE) * 0.03}s`;

        const typeLabel = entry.type === 'journal' ? '期刊' : '会议';
        const extra = entry.extra;

        let metaTags = '';
        metaTags += `<span class="card-tag tag-type">${typeLabel}</span>`;
        if (entry.publisher) {
            metaTags += `<span class="card-tag tag-publisher">${entry.publisher}</span>`;
        }
        if (entry.category) {
            const shortCat = entry.category.length > 10 ? entry.category.substring(0, 10) + '…' : entry.category;
            metaTags += `<span class="card-tag tag-category" title="${entry.category}">${shortCat}</span>`;
        }
        if (extra && extra.impactFactor) {
            metaTags += `<span class="card-tag tag-if">IF: ${extra.impactFactor}</span>`;
        }
        if (extra && extra.isTop) {
            metaTags += `<span class="card-tag tag-top">Top</span>`;
        }

        card.innerHTML = `
      <div class="card-header">
        <div class="card-abbr">${escapeHtml(entry.displayName)}</div>
        <span class="card-grade grade-${entry.grade}">CCF ${entry.grade}</span>
      </div>
      <div class="card-fullname" title="${escapeHtml(entry.fullName)}">${escapeHtml(entry.fullName || '')}</div>
      <div class="card-meta">${metaTags}</div>
      ${entry.type === 'conference' ? renderConferenceDeadline(entry, 'card') : ''}
    `;

        card.addEventListener('click', () => openModal(entry));

        return card;
    }

    // ============================================
    // Modal
    // ============================================

    function openModal(entry) {
      currentModalEntry = entry;
        const extra = entry.extra;

        let html = `
      <div class="modal-header">
        <div class="modal-title">
          <h2>${escapeHtml(entry.displayName)}</h2>
          <span class="card-grade grade-${entry.grade}">CCF ${entry.grade}</span>
        </div>
        <div class="modal-fullname">${escapeHtml(entry.fullName || '')}</div>
      </div>
    `;

        if (entry.type === 'conference') {
            html += `
      <div class="modal-section">
        <div class="modal-section-title">截稿状态</div>
        ${renderConferenceDeadline(entry, 'modal')}
        <button class="deadline-refresh-btn" type="button">刷新抓取</button>
      </div>
    `;
        }

        // Basic info section
        html += `
      <div class="modal-section">
        <div class="modal-section-title">基本信息</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">类型</div>
            <div class="info-value">${entry.type === 'journal' ? '📖 期刊' : '🎤 会议'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">CCF 等级</div>
            <div class="info-value highlight">${entry.grade} 类</div>
          </div>
          <div class="info-item">
            <div class="info-label">出版商</div>
            <div class="info-value">${escapeHtml(entry.publisher || '未知')}</div>
          </div>
          <div class="info-item">
            <div class="info-label">研究领域</div>
            <div class="info-value">${escapeHtml(entry.category || '未知')}</div>
          </div>
        </div>
      </div>
    `;

        // Extra metadata section (if available)
        if (extra) {
            html += `
        <div class="modal-section">
          <div class="modal-section-title">分区与影响因子</div>
          <div class="info-grid">
            ${extra.impactFactor ? `
              <div class="info-item">
                <div class="info-label">影响因子 (IF)</div>
                <div class="info-value warning">${extra.impactFactor}</div>
              </div>
            ` : ''}
            ${extra.sciZone ? `
              <div class="info-item">
                <div class="info-label">中科院SCI分区</div>
                <div class="info-value highlight">${extra.sciZone}</div>
              </div>
            ` : ''}
            ${extra.jcrZone ? `
              <div class="info-item">
                <div class="info-label">JCR分区</div>
                <div class="info-value highlight">${extra.jcrZone}</div>
              </div>
            ` : ''}
            ${extra.isTop !== undefined ? `
              <div class="info-item">
                <div class="info-label">是否Top期刊</div>
                <div class="info-value ${extra.isTop ? 'success' : ''}">${extra.isTop ? '✅ 是' : '❌ 否'}</div>
              </div>
            ` : ''}
            ${extra.isReview !== undefined ? `
              <div class="info-item">
                <div class="info-label">是否综述期刊</div>
                <div class="info-value">${extra.isReview ? '是' : '否'}</div>
              </div>
            ` : ''}
            ${extra.isWarning !== undefined ? `
              <div class="info-item">
                <div class="info-label">是否预警</div>
                <div class="info-value ${extra.isWarning ? 'danger' : 'success'}">${extra.isWarning ? '⚠️ 是' : '✅ 否'}</div>
              </div>
            ` : ''}
            ${extra.issn ? `
              <div class="info-item">
                <div class="info-label">ISSN</div>
                <div class="info-value">${extra.issn}</div>
              </div>
            ` : ''}
            ${extra.isOA !== undefined ? `
              <div class="info-item">
                <div class="info-label">是否OA开放</div>
                <div class="info-value ${extra.isOA ? 'success' : ''}">${extra.isOA ? '✅ 开放获取' : '❌ 非OA'}</div>
              </div>
            ` : ''}
          </div>
        </div>
      `;

            // Review & Publication info
            html += `
        <div class="modal-section">
          <div class="modal-section-title">投稿与审稿</div>
          <div class="info-grid">
            ${extra.avgReviewDays ? `
              <div class="info-item">
                <div class="info-label">平均审稿周期</div>
                <div class="info-value">${extra.avgReviewDays} 天</div>
              </div>
            ` : ''}
            ${extra.acceptRate ? `
              <div class="info-item">
                <div class="info-label">录用率</div>
                <div class="info-value">${extra.acceptRate}</div>
              </div>
            ` : ''}
            ${extra.annualPapers ? `
              <div class="info-item">
                <div class="info-label">年发文量</div>
                <div class="info-value">${extra.annualPapers} 篇</div>
              </div>
            ` : ''}
          </div>
        </div>
      `;

            // Research areas
            if (extra.researchAreas && extra.researchAreas.length > 0) {
                html += `
          <div class="modal-section">
            <div class="modal-section-title">涉及研究方向</div>
            <div class="modal-tags">
              ${extra.researchAreas.map(a => `<span class="modal-tag">${escapeHtml(a)}</span>`).join('')}
            </div>
          </div>
        `;
            }
        } else {
            html += `
        <div class="modal-section">
          <div class="modal-section-title">详细指标</div>
          <div class="no-extra-data">
            暂无该期刊/会议的详细分区、影响因子等数据<br>
            <span style="font-size:11px;margin-top:4px;display:inline-block">建议访问 <a href="https://www.letpub.com.cn" target="_blank" style="color:#a78bfa">LetPub</a> 或 <a href="https://jcr.clarivate.com" target="_blank" style="color:#a78bfa">JCR</a> 查询最新数据</span>
          </div>
        </div>
      `;
        }

        // Link section
        if (entry.url) {
            html += `
        <div class="modal-section">
          <div class="modal-section-title">相关链接</div>
          ${extra && extra.conferenceWebsite ? `
          <a href="${escapeHtml(extra.conferenceWebsite)}" target="_blank" rel="noopener" class="modal-link" style="background: linear-gradient(135deg, #dc2626, #f97316);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 3h7v7"/>
              <path d="M10 14L21 3"/>
              <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"/>
            </svg>
            会议官网
          </a>
          ` : ''}
          <a href="${escapeHtml(entry.url)}" target="_blank" rel="noopener" class="modal-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            DBLP 主页
          </a>
          <a href="https://www.letpub.com.cn/index.php?page=journalapp&view=search&searchname=${encodeURIComponent(entry.abbr || entry.fullName)}" target="_blank" rel="noopener" class="modal-link" style="margin-left:8px; background: linear-gradient(135deg, #059669, #10b981);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            LetPub 查询
          </a>
          <a href="https://scholar.google.com/scholar?q=${encodeURIComponent(entry.fullName || entry.abbr)}" target="_blank" rel="noopener" class="modal-link" style="margin-left:8px; background: linear-gradient(135deg, #d97706, #f59e0b);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            Google Scholar
          </a>
        </div>
      `;
        }

        els.modalContent.innerHTML = html;
        els.modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateDeadlineDisplays();

        if (entry.type === 'conference') {
          ensureConferenceAutoData(entry);
        }
    }

    function closeModal() {
        els.modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        currentModalEntry = null;
    }

    // ============================================
    // Utilities
    // ============================================

    function escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function normalizeDateInput(value) {
      if (!value) return null;

      if (value instanceof Date) {
        return Number.isNaN(value.getTime()) ? null : value;
      }

      if (typeof value === 'number') {
        const d = new Date(value);
        return Number.isNaN(d.getTime()) ? null : d;
      }

      if (typeof value === 'string') {
        let text = value.trim();
        if (!text) return null;

        if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
          text += 'T23:59:59+08:00';
        } else if (/^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}(:\d{2})?$/.test(text)) {
          text = text.replace(' ', 'T');
          if (!/(Z|[+\-]\d{2}:\d{2})$/.test(text)) {
            text += '+08:00';
          }
        }

        const d = new Date(text);
        return Number.isNaN(d.getTime()) ? null : d;
      }

      return null;
    }

    function normalizeConfFileKey(name) {
      return (name || '')
        .toLowerCase()
        .replace(/\+/g, 'plus')
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]/g, '');
    }

    function getConferenceCacheKey(entry) {
      return normalizeConfFileKey(entry.abbr || entry.displayName || entry.fullName);
    }

    function findEntryByKey(entryKey) {
      if (!entryKey) return null;
      return allData.find(e => e.entryKey === entryKey) || null;
    }

    function buildConferenceFileCandidates(entry) {
      const candidates = new Set();
      const abbr = entry.abbr || '';
      const display = entry.displayName || '';

      const fromUrl = (entry.url || '').match(/\/conf\/([^\/]+)/i);
      if (fromUrl && fromUrl[1]) {
        candidates.add(normalizeConfFileKey(fromUrl[1]));
        candidates.add(fromUrl[1].toLowerCase());
      }

      candidates.add(normalizeConfFileKey(abbr));
      candidates.add(normalizeConfFileKey(display));
      candidates.add((abbr || '').toLowerCase().replace(/\s+/g, ''));
      candidates.add((abbr || '').toLowerCase().replace(/[^a-z0-9\-]/g, ''));

      return [...candidates].filter(Boolean);
    }

    function timezoneToOffset(tz) {
      const text = (tz || '').trim();
      if (!text) return '+08:00';
      if (/^AoE$/i.test(text)) return '-12:00';

      const m = text.match(/^UTC\s*([+\-]\d{1,2})(?::(\d{2}))?$/i);
      if (m) {
        const hour = Number(m[1]);
        const minute = Number(m[2] || '0');
        const sign = hour >= 0 ? '+' : '-';
        return `${sign}${String(Math.abs(hour)).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      }

      if (/^UTC$/i.test(text)) {
        return '+00:00';
      }

      return '+08:00';
    }

    function parseDeadlineWithTimezone(deadlineText, timezoneText) {
      const text = (deadlineText || '').trim();
      if (!text || /^TBD$/i.test(text)) return null;

      if (!/^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}$/.test(text)) {
        return null;
      }

      return `${text.replace(' ', 'T')}${timezoneToOffset(timezoneText)}`;
    }

    function parseConferenceYaml(yamlText) {
      if (!yamlText || typeof yamlText !== 'string') return null;

      const confsIdx = yamlText.indexOf('confs:');
      if (confsIdx < 0) return null;

      const confsText = yamlText.slice(confsIdx);
      const blockRegex = /\n\s*-\s*year:\s*(\d{4})([\s\S]*?)(?=\n\s*-\s*year:|$)/g;
      const blocks = [];
      let match;
      while ((match = blockRegex.exec(confsText)) !== null) {
        const year = Number(match[1]);
        const block = match[2];
        const linkMatch = block.match(/\n\s*link:\s*([^\n]+)/);
        const timezoneMatch = block.match(/\n\s*timezone:\s*([^\n]+)/);

        const rawDeadlines = [];
        const deadlineRegex = /\n\s*(?:-\s*)?deadline:\s*'?([^\n']+)'?/gi;
        let dm;
        while ((dm = deadlineRegex.exec(block)) !== null) {
          rawDeadlines.push(dm[1].trim());
        }

        const timezone = timezoneMatch ? timezoneMatch[1].trim() : '';
        const parsedDeadlines = rawDeadlines
          .map(d => parseDeadlineWithTimezone(d, timezone))
          .filter(Boolean);

        blocks.push({
          year,
          block,
          link: linkMatch ? linkMatch[1].trim() : '',
          parsedDeadlines,
        });
      }

      if (blocks.length === 0) return null;

      blocks.sort((a, b) => b.year - a.year);

      // Always use the newest conference website; deadline can fallback to nearest year with concrete value.
      const latestForWebsite = blocks.find(b => b.link) || blocks[0];
      const latestForDeadline = blocks.find(b => b.parsedDeadlines.length > 0) || blocks[0];

      if (latestForDeadline.parsedDeadlines.length === 0 && !latestForWebsite.link) {
        return null;
      }

      return {
        conferenceWebsite: latestForWebsite.link || undefined,
        deadline: latestForDeadline.parsedDeadlines[0],
        extensionDeadline: latestForDeadline.parsedDeadlines[1],
        deadlineSource: 'ccfddl',
        fetchedAt: Date.now(),
        deadlineYear: latestForDeadline.year,
        websiteYear: latestForWebsite.year,
      };
    }

    function loadAutoCacheFromStorage() {
      try {
        const raw = localStorage.getItem(AUTO_CACHE_STORAGE_KEY);
        if (!raw) return;
        const saved = JSON.parse(raw);
        const now = Date.now();
        Object.entries(saved).forEach(([k, v]) => {
          if (!v || typeof v !== 'object') return;
          const ts = Number(v.fetchedAt || 0);
          if (ts > 0 && now - ts <= AUTO_CACHE_TTL_MS) {
            autoDeadlineCache.set(k, v);
          }
        });
      } catch (_err) {
        // Ignore corrupted cache data.
      }
    }

    function persistAutoCacheToStorage() {
      try {
        const obj = {};
        autoDeadlineCache.forEach((v, k) => {
          obj[k] = v;
        });
        localStorage.setItem(AUTO_CACHE_STORAGE_KEY, JSON.stringify(obj));
      } catch (_err) {
        // Ignore storage quota or disabled storage.
      }
    }

    async function fetchTextWithTimeout(url, timeoutMs, preferFresh) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const res = await fetch(url, {
          cache: preferFresh ? 'no-cache' : 'force-cache',
          signal: controller.signal,
        });
        if (!res.ok) return null;
        return await res.text();
      } catch (_err) {
        return null;
      } finally {
        clearTimeout(timer);
      }
    }

    async function fetchYamlFromMirrors(relativePath, preferFresh) {
      return await new Promise(resolve => {
        let pending = CCFDDL_MIRRORS.length;
        let resolved = false;

        CCFDDL_MIRRORS.forEach(base => {
          fetchTextWithTimeout(`${base}/${relativePath}`, REQUEST_TIMEOUT_MS, preferFresh)
            .then(text => {
              if (resolved) return;
              if (text) {
                resolved = true;
                resolve(text);
                return;
              }

              pending -= 1;
              if (pending === 0) {
                resolve(null);
              }
            })
            .catch(() => {
              pending -= 1;
              if (!resolved && pending === 0) {
                resolve(null);
              }
            });
        });
      });
    }

    async function fetchConferenceYamlFromCcfddl(entry, preferFresh, searchAllSubs) {
      const primarySub = CATEGORY_TO_CCFDDL_SUB[entry.category];
      const subs = searchAllSubs
        ? [primarySub, ...ALL_CCFDDL_SUBS.filter(s => s && s !== primarySub)].filter(Boolean)
        : (primarySub ? [primarySub] : ALL_CCFDDL_SUBS);

      const candidates = buildConferenceFileCandidates(entry);

      for (const sub of subs) {
        for (const key of candidates) {
          const relativePath = `conference/${sub}/${key}.yml`;
          const yaml = await fetchYamlFromMirrors(relativePath, preferFresh);
          if (!yaml) continue;
          const parsed = parseConferenceYaml(yaml);
          if (parsed) return parsed;
        }
      }

      return null;
    }

    function shouldRefreshCachedConference(cacheItem) {
      if (!cacheItem || typeof cacheItem !== 'object') return true;
      if (!cacheItem.websiteYear) return true;
      const nowYear = new Date().getFullYear();
      return Number(cacheItem.websiteYear) < nowYear - 1;
    }

    async function ensureConferenceAutoData(entry, options) {
      if (!entry || entry.type !== 'conference') return null;
      const forceNetwork = Boolean(options && options.forceNetwork);
      const searchAllSubs = Boolean(options && options.searchAllSubs);

      const existing = getConferenceDeadlineData(entry);
      if (!forceNetwork && existing.deadlineDate && entry.extra && entry.extra.conferenceWebsite) {
        return entry.extra;
      }

      const cacheKey = getConferenceCacheKey(entry);
      const cached = autoDeadlineCache.get(cacheKey);
      if (!forceNetwork && cached) {
        entry.extra = { ...(entry.extra || {}), ...cached };
        updateDeadlineDisplays();

        // Cache from older parser may miss newest website year, refresh in background once.
        if (shouldRefreshCachedConference(cached)) {
          ensureConferenceAutoData(entry, { forceNetwork: true }).catch(() => null);
        }
        return entry.extra;
      }

      const missTs = autoMissCache.get(cacheKey);
      if (!forceNetwork && missTs && Date.now() - missTs < AUTO_MISS_TTL_MS) {
        return null;
      }

      const inFlightKey = `${cacheKey}:${forceNetwork ? 'force' : 'normal'}:${searchAllSubs ? 'all' : 'mapped'}`;
      if (autoFetchInFlight.has(inFlightKey)) {
        return autoFetchInFlight.get(inFlightKey);
      }

      const task = (async () => {
        const parsed = await fetchConferenceYamlFromCcfddl(entry, forceNetwork, searchAllSubs);
        if (parsed) {
          autoDeadlineCache.set(cacheKey, parsed);
          autoMissCache.delete(cacheKey);
          persistAutoCacheToStorage();
          entry.extra = { ...(entry.extra || {}), ...parsed };
          updateDeadlineDisplays();
          return entry.extra;
        }
        autoMissCache.set(cacheKey, Date.now());
        return null;
      })();

      autoFetchInFlight.set(inFlightKey, task);

      try {
        return await task;
      } finally {
        autoFetchInFlight.delete(inFlightKey);
      }
    }

    async function preloadInitialConferenceDeadlines() {
      const targets = allData.filter(e => e.type === 'conference').slice(0, 16);

      const limit = 6;
      for (let i = 0; i < targets.length; i += limit) {
        const chunk = targets.slice(i, i + limit);
        await Promise.all(chunk.map(e => ensureConferenceAutoData(e).catch(() => null)));
      }
    }

    function prefetchVisibleConferenceDeadlines() {
      const visibleConfs = filteredData.slice(0, displayedCount)
        .filter(e => e.type === 'conference');

      let started = 0;
      for (const entry of visibleConfs) {
        const { deadlineDate } = getConferenceDeadlineData(entry);
        if (deadlineDate) continue;
        ensureConferenceAutoData(entry);
        started += 1;
        if (started >= 6) break;
      }
    }

    function getConferenceDeadlineData(entry) {
      const extra = entry && entry.extra ? entry.extra : {};

      const deadlineDate = normalizeDateInput(
        extra.deadline || extra.submissionDeadline || extra.ddl || extra.dueDate
      );

      const extensionDate = normalizeDateInput(
        extra.extensionDeadline || extra.extendedDeadline || extra.deadlineExtension
      );

      return {
        deadlineDate,
        extensionDate,
      };
    }

    function formatDuration(ms) {
      const total = Math.floor(Math.abs(ms) / 1000);
      const days = Math.floor(total / 86400);
      const hours = Math.floor((total % 86400) / 3600);
      const minutes = Math.floor((total % 3600) / 60);
      const seconds = total % 60;
      const pad = n => String(n).padStart(2, '0');
      return `${days}天 ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    function formatDateTime(date) {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, '0');
      const d = String(date.getDate()).padStart(2, '0');
      const h = String(date.getHours()).padStart(2, '0');
      const mm = String(date.getMinutes()).padStart(2, '0');
      const s = String(date.getSeconds()).padStart(2, '0');
      return `${y}-${m}-${d} ${h}:${mm}:${s}`;
    }

    function renderConferenceDeadline(entry, mode) {
      const { deadlineDate, extensionDate } = getConferenceDeadlineData(entry);
      const entryKey = escapeHtml(entry.entryKey || normalizeConfFileKey(entry.abbr || entry.displayName || entry.fullName));

      if (!deadlineDate && !extensionDate) {
        return `
      <div class="conference-deadline conference-deadline-${mode} js-deadline" data-entry-key="${entryKey}" data-deadline="" data-extension="">
      <div class="deadline-row">
        <span class="deadline-label">当前状态</span>
        <span class="deadline-value js-deadline-status">抓取中</span>
      </div>
      <div class="deadline-row">
        <span class="deadline-label">截稿时间</span>
        <span class="deadline-value">自动抓取会议官网截稿中...</span>
      </div>
      <div class="deadline-row">
        <span class="deadline-label js-deadline-main-label">倒计时</span>
        <span class="deadline-value js-deadline-main">--</span>
      </div>
      </div>
    `;
      }

      const deadlineTs = deadlineDate ? deadlineDate.getTime() : '';
      const extensionTs = extensionDate ? extensionDate.getTime() : '';

      return `
      <div class="conference-deadline conference-deadline-${mode} js-deadline" data-entry-key="${entryKey}" data-deadline="${deadlineTs}" data-extension="${extensionTs}">
      <div class="deadline-row">
        <span class="deadline-label">当前状态</span>
        <span class="deadline-value js-deadline-status">计算中...</span>
      </div>
      <div class="deadline-row">
        <span class="deadline-label">截稿时间</span>
        <span class="deadline-value">${deadlineDate ? formatDateTime(deadlineDate) : '未提供'}</span>
      </div>
      <div class="deadline-row">
        <span class="deadline-label js-deadline-main-label">倒计时</span>
        <span class="deadline-value js-deadline-main">计算中...</span>
      </div>
      ${extensionDate ? `
        <div class="deadline-row deadline-extension">
        <span class="deadline-label">延期到</span>
        <span class="deadline-value">${formatDateTime(extensionDate)}</span>
        </div>
        <div class="deadline-row deadline-extension">
        <span class="deadline-label js-deadline-ext-label">延期倒计时</span>
        <span class="deadline-value js-deadline-ext">计算中...</span>
        </div>
      ` : ''}
      </div>
    `;
    }

    function updateDeadlineDisplays() {
      const blocks = document.querySelectorAll('.js-deadline');
      const now = Date.now();

      blocks.forEach(block => {
        let deadlineTs = Number(block.dataset.deadline) || 0;
        let extensionTs = Number(block.dataset.extension) || 0;

        if (!deadlineTs && !extensionTs) {
          const linkedEntry = findEntryByKey(block.dataset.entryKey || '');
          if (linkedEntry) {
            const fresh = getConferenceDeadlineData(linkedEntry);
            if (fresh.deadlineDate) {
              deadlineTs = fresh.deadlineDate.getTime();
              block.dataset.deadline = String(deadlineTs);
            }
            if (fresh.extensionDate) {
              extensionTs = fresh.extensionDate.getTime();
              block.dataset.extension = String(extensionTs);
            }
          }
        }

        const effectiveTs = extensionTs || deadlineTs;

        const statusEl = block.querySelector('.js-deadline-status');
        const mainLabelEl = block.querySelector('.js-deadline-main-label');
        const mainEl = block.querySelector('.js-deadline-main');
        const extLabelEl = block.querySelector('.js-deadline-ext-label');
        const extEl = block.querySelector('.js-deadline-ext');

        if (!effectiveTs || !statusEl || !mainLabelEl || !mainEl) {
          if (statusEl) {
            statusEl.textContent = '抓取中';
            statusEl.className = 'deadline-value js-deadline-status';
          }
          if (mainEl) {
            mainEl.textContent = '--';
          }
          return;
        }

        if (now <= effectiveTs) {
          statusEl.textContent = '未截稿';
          statusEl.className = 'deadline-value js-deadline-status deadline-open';
          mainLabelEl.textContent = '截稿倒计时';
          mainEl.textContent = formatDuration(effectiveTs - now);
        } else {
          statusEl.textContent = '已截稿';
          statusEl.className = 'deadline-value js-deadline-status deadline-closed';
          mainLabelEl.textContent = '已截稿时长';
          mainEl.textContent = formatDuration(now - effectiveTs);
        }

        if (extensionTs && extLabelEl && extEl) {
          if (now <= extensionTs) {
            extLabelEl.textContent = '延期倒计时';
            extEl.textContent = formatDuration(extensionTs - now);
          } else {
            extLabelEl.textContent = '延期已过';
            extEl.textContent = formatDuration(now - extensionTs);
          }
        }
      });
    }

    function startDeadlineTimer() {
      if (deadlineTimer) {
        clearInterval(deadlineTimer);
        deadlineTimer = null;
      }

      updateDeadlineDisplays();

      if (document.querySelector('.js-deadline')) {
        deadlineTimer = setInterval(updateDeadlineDisplays, 1000);
      }
    }

    // ============================================
    // Start
    // ============================================

    document.addEventListener('DOMContentLoaded', init);
})();
