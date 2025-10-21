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
  <title>博士申请指南</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.8/dist/chart.umd.min.js"></script>
  
  <!-- 配置Tailwind自定义主题 -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#165DFF',
            secondary: '#36CFC9',
            accent: '#722ED1',
            neutral: '#F5F7FA',
            dark: '#1D2129',
            success: '#52C41A',
            warning: '#FAAD14',
            danger: '#FF4D4F',
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            serif: ['Georgia', 'serif'],
          },
        },
      }
    }
  </script>
  
  <style type="text/tailwindcss">
    @layer utilities {
      .content-auto {
        content-visibility: auto;
      }
      .text-shadow {
        text-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      .timeline-dot::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #165DFF;
        left: -10px;
        top: 5px;
        border: 4px solid white;
        box-shadow: 0 0 0 2px #165DFF33;
      }
      .timeline-line::before {
        content: '';
        position: absolute;
        width: 2px;
        height: 100%;
        background-color: #E5E6EB;
        left: 0;
        top: 0;
      }
      .card-hover {
        transition: all 0.3s ease;
      }
      .card-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    }
  </style>
</head>
<body class="bg-gray-50 font-sans text-dark">
  <!-- 导航栏 -->
  <header class="sticky top-0 z-50 bg-white shadow-sm transition-all duration-300" id="navbar">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center space-x-2">
          <i class="fa fa-graduation-cap text-primary text-2xl"></i>
          <h1 class="text-xl font-bold text-primary">博士申请指南</h1>
        </div>
        
        <!-- 桌面导航 -->
        <nav class="hidden md:flex space-x-8">
          <a href="#overview" class="text-gray-600 hover:text-primary transition-colors">总览</a>
          <a href="#contact" class="text-gray-600 hover:text-primary transition-colors">联系导师</a>
          <a href="#materials" class="text-gray-600 hover:text-primary transition-colors">材料准备</a>
          <a href="#experience" class="text-gray-600 hover:text-primary transition-colors">申请经历</a>
          <a href="#summary" class="text-gray-600 hover:text-primary transition-colors">总结</a>
        </nav>
        
        <!-- 移动端菜单按钮 -->
        <button id="menu-toggle" class="md:hidden text-gray-600 hover:text-primary">
          <i class="fa fa-bars text-xl"></i>
        </button>
      </div>
    </div>
    
    <!-- 移动端导航菜单 -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
      <div class="container mx-auto px-4 py-3 space-y-3">
        <a href="#overview" class="block text-gray-600 hover:text-primary transition-colors py-2">总览</a>
        <a href="#contact" class="block text-gray-600 hover:text-primary transition-colors py-2">联系导师</a>
        <a href="#materials" class="block text-gray-600 hover:text-primary transition-colors py-2">材料准备</a>
        <a href="#experience" class="block text-gray-600 hover:text-primary transition-colors py-2">申请经历</a>
        <a href="#summary" class="block text-gray-600 hover:text-primary transition-colors py-2">总结</a>
      </div>
    </div>
  </header>



  <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- 时间线及总览部分 -->
    <section id="overview" class="mb-16">
      <div class="flex items-center mb-8">
        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
          <i class="fa fa-calendar text-primary"></i>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold">时间线及总览</h2>
      </div>
      
      <div class="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
        <div class="relative timeline-line pl-8 ml-4">
          <!-- 时间线项目 -->
          <div class="relative timeline-dot mb-10 pb-10 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
            <h3 class="text-lg font-semibold text-primary mb-3" style="margin-left: 17px;">阶段一：前期准备</h3>
            <p class="text-gray-700">学好专业知识，发文章，考英语六级（如果条件允许，刷分，越高越好），参加比赛，完善简历。</p>
          </div>
          
          <div class="relative timeline-dot mb-10 pb-10 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
            <h3 class="text-lg font-semibold text-primary mb-3" style="margin-left: 17px;">阶段二：联系导师</h3>
            <p class="text-gray-700">邮件联系导师（可在各个院系的官网找导师，也可根据公众号、文章通讯作者、相关学长学姐推荐找老师。<span class="text-danger font-medium">注意：只可报考一个院系的一个导师！！！</span></p>
          </div>
          
          <div class="relative timeline-dot mb-10 pb-10 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
            <h3 class="text-lg font-semibold text-primary mb-3" style="margin-left: 17px;">阶段三：保持联系</h3>
            <p class="text-gray-700">跟老师保持联系，不能让老师忘记你，最好的在科研上有持续的联系。积极主动！活跃一点！勇敢一点！</p>
          </div>
          
          <div class="relative timeline-dot mb-10 pb-10 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
            <h3 class="text-lg font-semibold text-primary mb-3" style="margin-left: 17px;">阶段四：系统报名</h3>
            <p class="text-gray-700">博士申请系统开放，报名并按系统要求提交相关材料（报名费xxx元），里面要填大量的信息，可提前准备（个人信息、发表文章、比赛获奖情况、报考信息）。关注学院博士研究生招生网，里面会发布最新报考消息，一定要及时关注，以免错过重要信息！</p>
          </div>
          
          <div class="relative timeline-dot mb-10 pb-10 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
            <h3 class="text-lg font-semibold text-primary mb-3" style="margin-left: 17px;">阶段五：资格审查</h3>
            <p class="text-gray-700">系统会对材料进行审核，这一环节会淘汰部分申请者。</p>
          </div>
          
          <div class="relative timeline-dot mb-10 pb-10 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
            <h3 class="text-lg font-semibold text-primary mb-3" style="margin-left: 17px;">阶段六：综合考察</h3>
            <p class="text-gray-700">每个学校每个院系都不一样，收到进面通知到实际面试中间的准备时间非常短，因此需要提前准备！！（专业知识、专业英语和面试PPT）</p>
          </div>
          
          <div class="relative timeline-dot">
            <h3 class="text-lg font-semibold text-primary mb-3" style="margin-left: 17px;">阶段七：结果公布</h3>
            <p class="text-gray-700">出综合考核结果，查看是否拟录取。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 投简历联系老师部分 -->
    <section id="contact" class="mb-16">
      <div class="flex items-center mb-8">
        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
          <i class="fa fa-envelope text-primary"></i>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold">投简历联系老师</h2>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- 如何找到导师邮箱 -->
        <div class="bg-white rounded-xl shadow-md p-6 card-hover">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <i class="fa fa-search text-primary mr-2"></i>
            如何找到导师邮箱
          </h3>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <i class="fa fa-check-circle text-success mt-1 mr-2"></i>
              <span>主要通过导师在学院的个人主页上的联系方式，因为有些老师可能不常用官网上的邮箱</span>
            </li>
            <li class="flex items-start">
              <i class="fa fa-check-circle text-success mt-1 mr-2"></i>
              <span>寻找导师作为通讯作者最新发表的文章，文章上的邮箱也可以联系到导师</span>
            </li>
          </ul>
        </div>
        
        <!-- 如何保持联系 -->
        <div class="bg-white rounded-xl shadow-md p-6 card-hover">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <i class="fa fa-comments text-primary mr-2"></i>
            如何保持联系
          </h3>
          <p class="text-gray-700 mb-3">联系导师并不是一次性的事情，如果导师回复"欢迎报考"或者"保持联系"，可以：</p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <i class="fa fa-check-circle text-success mt-1 mr-2"></i>
              <span>每半个月或者1个月邮件汇报自己的工作和学习进度</span>
            </li>
            <li class="flex items-start">
              <i class="fa fa-check-circle text-success mt-1 mr-2"></i>
              <span>如果联系导师较早，在正式报名之前再次询问一下导师的意见</span>
            </li>
          </ul>
        </div>
        
        <!-- 首次自荐邮件模板 -->
        <div class="bg-white rounded-xl shadow-md p-6 md:col-span-2 card-hover">
          <h3 class="text-xl font-semibold mb-4 flex items-center">
            <i class="fa fa-file-text text-primary mr-2"></i>
            首次自荐邮件模板
          </h3>
          
          <div class="mb-4">
            <p class="font-medium text-gray-800">邮件主题：</p>
            <p class="bg-gray-50 p-3 rounded border border-gray-200 text-gray-700">xx年博士申请-xx大学xx专业-姓名</p>
          </div>
          
          <div>
            <p class="font-medium text-gray-800 mb-2">邮件内容：</p>
            <div class="bg-gray-50 p-4 rounded border border-gray-200 text-gray-700 space-y-3">
              <p>尊敬的xx老师：</p>
              <p>您好！我叫xxx，是xx大学xx学院xx学系xx教授课题组的应届硕士毕业生，希望有机会能够报考您xxx年的博士研究生。</p>
              <p>我在硕士期间的研究方向为xxxxxx，主要的工作聚焦于xxxxxx的相关研究。目前已完成xxxxx的工作，截至目前，以第一作者身份撰写SCI文章x篇投稿至xxx，目前正在xx阶段，对您的研究方向十分感兴趣。</p>
              <p>附件为我的个人简历，希望可以到您的课题组学习。</p>
              <p>万分感谢您在百忙之中抽出时间阅读我的自荐，祝身体健康，工作顺利！</p>
            </div>
            <p class="mt-3 text-gray-600 italic">附件：个人简历PDF版本</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 材料准备部分 -->
    <section id="materials" class="mb-16">
      <div class="flex items-center mb-8">
        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
          <i class="fa fa-files-o text-primary"></i>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold">材料准备</h2>
      </div>
      
      <div class="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
        <p class="text-gray-700 mb-6">材料准备时要注意报考学校的要求，是需要邮寄还是线上提交，以及注意截止时间点（特别特别需要注意系统截止时间）。可以将报考学校及一些重要时间节点写在一个word上以防忘记。</p>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- 材料列表 -->
          <div class="border border-gray-100 rounded-lg p-4 hover:border-primary transition-colors">
            <div class="flex items-center mb-2">
              <i class="fa fa-id-card text-primary mr-2"></i>
              <h3 class="font-medium">有效身份证</h3>
            </div>
            <p class="text-sm text-gray-600">复印/扫描材料</p>
          </div>
          
          <div class="border border-gray-100 rounded-lg p-4 hover:border-primary transition-colors">
            <div class="flex items-center mb-2">
              <i class="fa fa-list-alt text-primary mr-2"></i>
              <h3 class="font-medium">报考登记表</h3>
            </div>
            <p class="text-sm text-gray-600">每个学校要求不一样</p>
          </div>
          
          <div class="border border-gray-100 rounded-lg p-4 hover:border-primary transition-colors">
            <div class="flex items-center mb-2">
              <i class="fa fa-graduation-cap text-primary mr-2"></i>
              <h3 class="font-medium">学历学位证书</h3>
            </div>
            <p class="text-sm text-gray-600">最高学历、学位证书复印件</p>
          </div>
          
          <div class="border border-gray-100 rounded-lg p-4 hover:border-primary transition-colors">
            <div class="flex items-center mb-2">
              <i class="fa fa-file-text-o text-primary mr-2"></i>
              <h3 class="font-medium">成绩单</h3>
            </div>
            <p class="text-sm text-gray-600">毕业（在读）学校的正式成绩单原件</p>
          </div>
          
          <div class="border border-gray-100 rounded-lg p-4 hover:border-primary transition-colors">
            <div class="flex items-center mb-2">
              <i class="fa fa-book text-primary mr-2"></i>
              <h3 class="font-medium">硕士学位论文</h3>
            </div>
            <p class="text-sm text-gray-600">应届生一般提供开题报告</p>
          </div>
          
          <div class="border border-gray-100 rounded-lg p-4 hover:border-primary transition-colors">
            <div class="flex items-center mb-2">
              <i class="fa fa-user text-primary mr-2"></i>
              <h3 class="font-medium">个人陈述</h3>
            </div>
            <p class="text-sm text-gray-600">包括个人情况、教育背景、学术科研水平、未来计划</p>
          </div>
          
          <div class="border border-gray-100 rounded-lg p-4 hover:border-primary transition-colors">
            <div class="flex items-center mb-2">
              <i class="fa fa-thumbs-up text-primary mr-2"></i>
              <h3 class="font-medium">专家推荐信</h3>
            </div>
            <p class="text-sm text-gray-600">一般要求两封，有些学校要求报考导师的推荐信</p>
          </div>
          
          <div class="border border-gray-100 rounded-lg p-4 hover:border-primary transition-colors">
            <div class="flex items-center mb-2">
              <i class="fa fa-language text-primary mr-2"></i>
              <h3 class="font-medium">英语水平证明</h3>
            </div>
            <p class="text-sm text-gray-600">六级或者雅思托福的扫描件</p>
          </div>
          
          <div class="border border-gray-100 rounded-lg p-4 hover:border-primary transition-colors">
            <div class="flex items-center mb-2">
              <i class="fa fa-lightbulb-o text-primary mr-2"></i>
              <h3 class="font-medium">研究计划与证明</h3>
            </div>
            <p class="text-sm text-gray-600">博士研究计划、论文检索报告，比赛证书等</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 个人申请经历 -->
    <section id="experience" class="mb-16">
      <div class="flex items-center mb-8">
        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
          <i class="fa fa-history text-primary"></i>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold">个人申请经历</h2>
      </div>
      
      <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- 申请经历列表 -->
          <div class="border-l-4 border-danger pl-4 py-2">
            <h3 class="font-medium">南京大学</h3>
            <p class="text-sm text-gray-600">未回邮件</p>
          </div>
          
          <div class="border-l-4 border-danger pl-4 py-2">
            <h3 class="font-medium">北京理工大学</h3>
            <p class="text-sm text-gray-600">未回邮件</p>
          </div>
          
          <div class="border-l-4 border-warning pl-4 py-2">
            <h3 class="font-medium">武汉理工大学</h3>
            <p class="text-sm text-gray-600">没名额</p>
          </div>
          
          <div class="border-l-4 border-warning pl-4 py-2">
            <h3 class="font-medium">中国科学技术大学</h3>
            <p class="text-sm text-gray-600">没名额</p>
          </div>
          
          <div class="border-l-4 border-warning pl-4 py-2">
            <h3 class="font-medium">西安交通大学</h3>
            <p class="text-sm text-gray-600">没名额</p>
          </div>
          
          <div class="border-l-4 border-warning pl-4 py-2">
            <h3 class="font-medium">重庆大学</h3>
            <p class="text-sm text-gray-600">没名额</p>
          </div>
          
          <div class="border-l-4 border-warning pl-4 py-2">
            <h3 class="font-medium">南开大学</h3>
            <p class="text-sm text-gray-600">卡英语</p>
          </div>
          
          <div class="border-l-4 border-warning pl-4 py-2">
            <h3 class="font-medium">西北工业大学</h3>
            <p class="text-sm text-gray-600">定向博士</p>
          </div>
          
          <div class="border-l-4 border-warning pl-4 py-2">
            <h3 class="font-medium">四川大学</h3>
            <p class="text-sm text-gray-600">放弃复试</p>
          </div>
          
          <div class="border-l-4 border-warning pl-4 py-2">
            <h3 class="font-medium">山东大学</h3>
            <p class="text-sm text-gray-600">放弃复试</p>
          </div>
          
          <div class="border-l-4 border-warning pl-4 py-2">
            <h3 class="font-medium">北京邮电大学</h3>
            <p class="text-sm text-gray-600">放弃复试</p>
          </div>
          
          <div class="border-l-4 border-warning pl-4 py-2">
            <h3 class="font-medium">武汉大学</h3>
            <p class="text-sm text-gray-600">放弃拟录取</p>
          </div>
          
          <div class="border-l-4 border-success pl-4 py-2 md:col-span-2 lg:col-span-1">
            <h3 class="font-medium">华中科技大学</h3>
            <p class="text-sm text-gray-600">拟录取</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 申博总结 -->
    <section id="summary">
      <div class="flex items-center mb-8">
        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
          <i class="fa fa-check-square-o text-primary"></i>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold">申博总结</h2>
      </div>
      
      <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="flex">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                <span class="text-primary font-semibold">1</span>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">科研积累</h3>
                <p class="text-gray-700">论文是硬通货，入学后尽快确定研究方向，精读领域顶会/期刊论文，找到创新切入点</p>
              </div>
            </div>
            
            <div class="flex">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                <span class="text-primary font-semibold">2</span>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">优先投递期刊</h3>
                <p class="text-gray-700">优先投递CCF或SCI期刊</p>
              </div>
            </div>
            
            <div class="flex">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                <span class="text-primary font-semibold">3</span>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">主动交流</h3>
                <p class="text-gray-700">主动与导师、课题组学长交流</p>
              </div>
            </div>
            
            <div class="flex">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                <span class="text-primary font-semibold">4</span>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">参加竞赛</h3>
                <p class="text-gray-700">选择与研究方向相关的赛事，通过竞赛提升动手能力</p>
              </div>
            </div>
          </div>
          
          <div class="space-y-6">
            <div class="flex">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                <span class="text-primary font-semibold">5</span>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">提前调研</h3>
                <p class="text-gray-700">提前半年到一年调研目标院校的导师研究方向，通过论文、官网、学术报告了解其团队</p>
              </div>
            </div>
            
            <div class="flex">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                <span class="text-primary font-semibold">6</span>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">邮件联系技巧</h3>
                <p class="text-gray-700">通过邮件联系导师时，附个人简历、代表作及研究计划，突出与导师课题的契合点</p>
              </div>
            </div>
            
            <div class="flex">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                <span class="text-primary font-semibold">7</span>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">个人陈述要点</h3>
                <p class="text-gray-700">个人陈述需清晰展现科研脉络与未来规划，避免泛泛而谈</p>
              </div>
            </div>
            
            <div class="flex">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                <span class="text-primary font-semibold">8</span>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">长期准备</h3>
                <p class="text-gray-700">申博是长期战，需持续积累而非临时冲刺</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 总结卡片 -->
        <div class="mt-10 bg-primary/5 rounded-xl p-6 border border-primary/20">
          <h3 class="text-xl font-semibold text-primary mb-4 flex items-center">
            <i class="fa fa-lightbulb-o mr-2"></i>
            申博核心要点
          </h3>
          <p class="text-gray-700">博士申请是一个系统性的长期过程，需要早规划、早准备。核心在于科研能力的积累和展现，同时要注重与目标导师的有效沟通，充分了解其研究方向并展示自身契合度。保持积极心态，即使面临多次挫折也不放弃，最终会找到适合自己的学术道路。</p>
        </div>
      </div>
    </section>
  </main>


  <!-- 返回顶部按钮 -->
  <button id="back-to-top" class="fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center opacity-0 invisible transition-all duration-300 hover:bg-primary/90">
    <i class="fa fa-arrow-up"></i>
  </button>

  <script>
    // 移动端菜单切换
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('shadow-md');
        navbar.classList.remove('shadow-sm');
      } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.add('shadow-sm');
      }
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // 关闭移动菜单（如果打开）
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // 返回顶部按钮
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
      } else {
        backToTopButton.classList.add('opacity-0', 'invisible');
        backToTopButton.classList.remove('opacity-100', 'visible');
      }
    });
    
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // 申请结果图表
    const ctx = document.getElementById('applicationChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['未回复', '无名额', '其他原因', '拟录取'],
        datasets: [{
          label: '申请结果数量',
          data: [2, 4, 6, 1],
          backgroundColor: [
            '#FF4D4F', // 红色 - 未回复
            '#FAAD14', // 黄色 - 无名额
            '#722ED1', // 紫色 - 其他原因
            '#52C41A'  // 绿色 - 拟录取
          ],
          borderWidth: 0,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  </script>
</body>
</html>