---
layout: post
title: 申博 | 苗佳哲
categories: [申博]
description: 申博经验分享
keywords:  
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---

<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>博士申请经历</title>
  
  <!-- 关键CSS内联，避免阻塞渲染 -->
  <style>
    /* 基础样式 */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f9fafb; color: #1f2937; line-height: 1.6; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
    a { color: #2563eb; text-decoration: none; }
    a:hover { text-decoration: underline; }
    
    /* 导航栏样式 */
    header { background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 10; }
    .nav-container { display: flex; justify-content: space-between; align-items: center; padding: 1rem; }
    .logo { display: flex; align-items: center; gap: 0.5rem; font-weight: 600; color: #2563eb; }
    
    /* 主内容区 */
    main { padding: 2rem 0; }
    .content-wrapper { display: grid; grid-template-columns: 1fr 300px; gap: 2rem; }
    .markdown-content { background: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    
    /* 标题样式 */
    h1 { font-size: 1.8rem; margin: 1.5rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid #e5e7eb; }
    h2 { font-size: 1.5rem; margin: 1.2rem 0 0.8rem; }
    h3 { font-size: 1.2rem; margin: 1rem 0 0.6rem; }
    
    /* 列表样式 */
    ul, ol { margin: 0.8rem 0 1rem 1.5rem; }
    li { margin-bottom: 0.5rem; }
    
    /* 目录样式 */
    .toc { background: white; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); position: sticky; top: 5rem; height: fit-content; }
    .toc h3 { margin-top: 0; padding-bottom: 0.5rem; border-bottom: 1px solid #e5e7eb; }
    .toc-links { list-style: none; margin: 1rem 0 0 0; }
    .toc-links li { margin-bottom: 0.5rem; }
    
    /* 强调样式 */
    .danger { color: #dc2626; font-weight: 600; }
    .success { color: #059669; font-weight: 600; }
    blockquote { border-left: 4px solid #93c5fd; padding-left: 1rem; margin: 1rem 0; color: #4b5563; font-style: italic; }
    
    /* 图片样式 */
    .img-container { margin: 1rem 0; padding: 1rem; background: #f3f4f6; border-radius: 0.5rem; }
    img { max-width: 100%; height: auto; border-radius: 0.3rem; }
    
    /* 页脚样式 */
    footer { background: #f3f4f6; padding: 2rem 0; margin-top: 2rem; text-align: center; color: #6b7280; }
    
    /* 返回顶部按钮 */
    #back-to-top { position: fixed; bottom: 1rem; right: 1rem; background: #2563eb; color: white; width: 2.5rem; height: 2.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer; opacity: 0; visibility: hidden; transition: all 0.3s; }
    
    /* 移动端适配 */
    @media (max-width: 768px) {
      .content-wrapper { grid-template-columns: 1fr; }
      .toc { display: none; }
      .mobile-toc-btn { display: block; }
    }
    
    /* 移动端目录 */
    .mobile-toc { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 100; display: none; }
    .mobile-toc-content { background: white; width: 80%; max-width: 300px; height: 100%; padding: 1.5rem; overflow-y: auto; }
    .close-toc { text-align: right; font-size: 1.5rem; cursor: pointer; }
  </style>
  
  <!-- 异步加载外部资源，不阻塞页面渲染 -->
  <script src="https://cdn.tailwindcss.com" async></script>
  <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet" media="print" onload="this.media='all'">
  <!-- 非必要的Chart.js延迟加载 -->
  <script>
    // 页面加载完成后再加载图表库
    window.addEventListener('load', function() {
      if (document.getElementById('applicationChart')) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.8/dist/chart.umd.min.js';
        script.async = true;
        document.head.appendChild(script);
      }
    });
  </script>
</head>
<body>
  <!-- 顶部导航 -->
  <header>
    <div class="container nav-container">
      <div class="logo">
        <i class="fa fa-file-text-o"></i>
        <span>博士申请指南</span>
      </div>
      <button id="toggle-toc" class="mobile-toc-btn">
        <i class="fa fa-list-ul"></i> 目录
      </button>
    </div>
  </header>

  <div class="container">
    <div class="content-wrapper">
      <!-- 主要内容区 -->
      <main class="markdown-content">
        <!-- 时间线及总览 -->
        <section id="overview">
          <h1>时间线及总览</h1>
          <ol>
            <li>学好专业知识，发文章，考英语六级（如果条件允许，刷分，越高越好），参加比赛，完善简历。</li>
            <li>邮件联系导师（可在各个院系的官网找导师，也可根据公众号、文章通讯作者、相关学长学姐推荐找老师。</li>
            <li><span class="danger">只可报考一个院系的一个导师！！！</span>所以建议有一个老师答复后不要反复联系同一个系的其他老师。</li>
            <li>跟老师保持联系，不能让老师忘记你，最好的在科研上有持续的联系。积极主动！活跃一点！勇敢一点！</li>
            <li>博士申请系统开放，报名并按系统要求提交相关材料（报名费xxx元），里面要填大量的信息，可提前准备（个人信息、发表文章、比赛获奖情况、报考信息）。关注学院博士研究生招生网，里面会发布最新报考消息，一定要及时关注，以免错过重要信息！报完名后进入等待阶段，系统会对材料进行审核，这一环节会淘汰部分申请者。</li>
            <li>资格审查。</li>
            <li>综合考察（每个学校每个院系都不一样）收到进面通知到实际面试中间的准备时间非常短，因此需要提前准备！！（专业知识、专业英语和面试PPT）</li>
            <li>出综合考核结果，查看是否拟录取。</li>
          </ol>
        </section>

        <!-- 投简历联系老师 -->
        <section id="contact">
          <h1>投简历联系老师</h1>
          
          <h2>1. 如何找到导师邮箱</h2>
          <ul>
            <li>主要通过导师在学院的个人主页上的联系方式，因为有些老师可能不常用官网上的邮箱，也可以寻找导师作为通讯作者最新发表的文章，文章上的邮箱也可以联系到导师。</li>
          </ul>
          
          <h2>2. 首次自荐邮件模板</h2>
          <ul>
            <li><strong>邮件主题：</strong>xx年博士申请-xx大学xx专业-姓名</li>
            <li><strong>邮件内容：</strong></li>
          </ul>
          
          <blockquote>
            尊敬的xx老师：<br><br>
            您好！我叫xxx，是xx大学xx学院xx学系xx教授课题组的应届硕士毕业生，希望有机会能够报考您xxx年的博士研究生。我在硕士期间的研究方向为xxxxxx，主要的工作聚焦于xxxxxx的相关研究。目前已完成xxxxx的工作，截至目前，以第一作者身份撰写SCI文章x篇投稿至xxx，目前正在xx阶段，对您的研究方向十分感兴趣，附件为我的个人简历，希望可以到您的课题组学习（科研情况等写详细，这里只是写个例子）。<br><br>
            万分感谢您在百忙之中抽出时间阅读我的自荐，祝身体健康，工作顺利！
          </blockquote>
          
          <p><strong>附件：</strong>个人简历PDF版本</p>
          
          <h2>3. 如何保持联系</h2>
          <ul>
            <li>联系导师并不是一次性的事情，如果导师回复“欢迎报考”或者“保持联系”，可以在联系之后每半个月或者1个月邮件汇报自己的工作和学习进度。如果联系导师联系较早，也可以在正式报名之前在再询问一下导师的意见。</li>
          </ul>
          
          <div class="img-container">
            <img src="/images/posts/shenbo/1.png" alt="联系导师建议图" />
          </div>
        </section>

        <!-- 材料准备 -->
        <section id="materials">
          <h1>材料准备</h1>
          <p>材料准备时要注意报考学校的要求，是需要邮寄还是线上提交，以及注意截止时间点（特别特别需要注意系统截止时间）。可以将报考学校级一些重要时间节点写在一个word上以防忘记。每个学校的博士申请-考核要求基本都会包括以下东西：</p>
          
          <ol>
            <li>有效身份证复印/扫描材料</li>
            <li>报考登记表（每个学校不一样）</li>
            <li>最高学历、学位证书复印件</li>
            <li>毕业（在读）学校的正式成绩单原件：如果本科的成绩单没有留存原件，可以尝试联系学校档案馆出具成绩单，硕士期间的一般可以自助在校内打印。</li>
            <li>硕士学位论文：对于这一条学校一般会要求应届生提供开题之类的。</li>
            <li>个人陈述（按照学校要求准备，一般包括个人情况、教育背景、学术科研水平、未来计划）</li>
            <li>专家推荐信：一般要求两封，有些学校会要求报考导师的推荐信，不要有错别字。根据学校的要求准备纸质版或填写愿意推荐自己的导师邮箱。</li>
            <li>英语水平的成绩证明：六级或者雅思托福的扫描件，有的学校英语高水平论文可以免英语。</li>
            <li>博士研究计划</li>
            <li>证明材料（论文检索报告，比赛证书之类的）</li>
          </ol>
        </section>

        <!-- 个人申请经历 -->
        <section id="experience">
          <h1>个人申请经历</h1>
          <ol>
            <li>南京大学：未回邮件</li>
            <li>北京理工大学：未回邮件</li>
            <li>武汉理工大学：没名额</li>
            <li>中国科学技术大学：没名额</li>
            <li>西安交通大学：没名额</li>
            <li>重庆大学：没名额</li>
            <li>南开大学：卡英语</li>
            <li>西北工业大学：定向博士</li>
            <li>四川大学：放弃复试</li>
            <li>山东大学：放弃复试</li>
            <li>北京邮电大学：放弃复试</li>
            <li>武汉大学：放弃拟录取</li>
            <li class="success">华中科技大学：拟录取</li>
          </ol>
        </section>

        <!-- 申博总结 -->
        <section id="summary">
          <h1>申博总结</h1>
          <ol>
            <li>科研积累，论文是硬通货，入学后尽快确定研究方向，精读领域顶会/期刊论文，找到创新切入点；</li>
            <li>优先投递CCF或SCI期刊；</li>
            <li>主动与导师、课题组学长交流;</li>
            <li>选择与研究方向相关的赛事，通过竞赛提升动手能力;</li>
            <li>提前半年到一年调研目标院校的导师研究方向，通过论文、官网、学术报告了解其团队;</li>
            <li>通过邮件联系导师时，附个人简历、代表作及研究计划，突出与导师课题的契合点;</li>
            <li>个人陈述需清晰展现科研脉络与未来规划，避免泛泛而谈，申博是长期战，需持续积累而非临时冲刺;</li>
          </ol>
        </section>
      </main>

      <!-- 侧边栏目录 -->
      <aside class="toc">
        <h3>目录</h3>
        <ul class="toc-links">
          <li><a href="#overview">时间线及总览</a></li>
          <li><a href="#contact">投简历联系老师</a></li>
          <li><a href="#materials">材料准备</a></li>
          <li><a href="#experience">个人申请经历</a></li>
          <li><a href="#summary">申博总结</a></li>
        </ul>
      </aside>
    </div>
  </div>

  <!-- 移动端目录 -->
  <div id="mobile-toc" class="mobile-toc">
    <div class="mobile-toc-content">
      <div class="close-toc" id="close-toc">×</div>
      <h3>目录</h3>
      <ul class="toc-links">
        <li><a href="#overview">时间线及总览</a></li>
        <li><a href="#contact">投简历联系老师</a></li>
        <li><a href="#materials">材料准备</a></li>
        <li><a href="#experience">个人申请经历</a></li>
        <li><a href="#summary">申博总结</a></li>
      </ul>
    </div>
  </div>

  <!-- 页脚 -->
  <footer>
    <div class="container">
      <p>博士申请指南 &copy; 2023</p>
    </div>
  </footer>

  <!-- 返回顶部按钮 -->
  <button id="back-to-top">
    <i class="fa fa-arrow-up"></i>
  </button>

  <!-- 核心功能JavaScript -->
  <script>
    // 确保DOM加载完成
    document.addEventListener('DOMContentLoaded', function() {
      // 目录切换功能
      const toggleTocBtn = document.getElementById('toggle-toc');
      const closeTocBtn = document.getElementById('close-toc');
      const mobileToc = document.getElementById('mobile-toc');
      const tocLinks = document.querySelectorAll('.toc-links a');
      
      toggleTocBtn.addEventListener('click', () => {
        mobileToc.style.display = 'block';
      });
      
      closeTocBtn.addEventListener('click', () => {
        mobileToc.style.display = 'none';
      });
      
      // 点击目录链接关闭移动端目录并平滑滚动
      tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            // 关闭移动目录
            mobileToc.style.display = 'none';
            
            // 平滑滚动到目标位置
            window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: 'smooth'
            });
          }
        });
      });
      
      // 返回顶部按钮功能
      const backToTopButton = document.getElementById('back-to-top');
      
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTopButton.style.opacity = '1';
          backToTopButton.style.visibility = 'visible';
        } else {
          backToTopButton.style.opacity = '0';
          backToTopButton.style.visibility = 'hidden';
        }
      });
      
      backToTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    });
  </script>
</body>
</html>