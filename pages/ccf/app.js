/**
 * Academic Journal & Conference Lookup Application
 * CCF 7th Edition (March 2026 Update)
 */

(function () {
    'use strict';

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

            // Clean up URLs
            if (e.url) {
                // Remove Chinese text from URLs
                e.url = e.url.replace(/[\u4e00-\u9fff\uff08\uff09]+.*$/, '').trim();
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

            // Merge extra metadata
            const abbrKey = e.abbr.replace(/[\s\-]/g, '');
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

    function init() {
        if (typeof CCF_DATA === 'undefined') {
            console.error('CCF_DATA not loaded!');
            return;
        }

        allData = processData(CCF_DATA);

        // Build filter options
        buildCategoryDropdown();
        buildPublisherDropdown();

        // Bind events
        bindEvents();

        // Create background particles
        createParticles();

        // Initial render
        applyFilters();
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
    `;

        card.addEventListener('click', () => openModal(entry));

        return card;
    }

    // ============================================
    // Modal
    // ============================================

    function openModal(entry) {
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
    }

    function closeModal() {
        els.modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
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

    // ============================================
    // Start
    // ============================================

    document.addEventListener('DOMContentLoaded', init);
})();
