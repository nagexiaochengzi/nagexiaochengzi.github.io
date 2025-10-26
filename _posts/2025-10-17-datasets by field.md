---
layout: post
title: 数据集 | 苗佳哲
categories: [数据集]
description: 各领域数据集
keywords:  
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
topmost: false
---

## 数据集

<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>数据集资源库 | 苗佳哲</title>
    <style>
        /* 基础样式 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
        }
        
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
        }
        
        .container {
            max-width: 100%;
            margin: 0 auto;
            padding: 20px;
        }
        
        /* 标题样式 */
        .page-header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e1e4e8;
        }
        
        .page-title {
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        .page-subtitle {
            font-size: 1.2rem;
            color: #7f8c8d;
        }
        
        /* 搜索框样式 */
        .search-container {
            margin-bottom: 30px;
            position: relative;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .search-input {
            width: 100%;
            padding: 12px 20px;
            font-size: 1rem;
            border: 1px solid #ddd;
            border-radius: 30px;
            outline: none;
            transition: all 0.3s;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .search-input:focus {
            border-color: #3498db;
            box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
        }
        
        .search-results {
            margin-top: 10px;
            color: #7f8c8d;
            font-size: 0.9rem;
        }
        
        /* 分类导航 */
        .category-nav {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin-bottom: 30px;
        }
        
        .category-btn {
            padding: 8px 16px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 0.9rem;
        }
        
        .category-btn:hover, .category-btn.active {
            background-color: #3498db;
            color: white;
            border-color: #3498db;
        }
        
        /* 数据集卡片样式 */
        .datasets-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 25px;
        }
        
        .dataset-card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            transition: transform 0.3s, box-shadow 0.3s;
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        
        .dataset-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        .dataset-header {
            margin-bottom: 15px;
        }
        
        .dataset-name {
            font-size: 1.3rem;
            color: #2c3e50;
            margin-bottom: 5px;
        }
        
        .dataset-description {
            color: #7f8c8d;
            font-size: 0.95rem;
            margin-bottom: 15px;
            flex-grow: 1;
        }
        
        .dataset-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 15px;
        }
        
        .dataset-tag {
            padding: 4px 10px;
            background-color: #ecf0f1;
            border-radius: 4px;
            font-size: 0.8rem;
            color: #34495e;
        }
        
        .dataset-access {
            margin-top: auto;
        }
        
        .access-btn {
            display: inline-block;
            padding: 8px 16px;
            background-color: #3498db;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            font-size: 0.9rem;
            transition: background-color 0.3s;
        }
        
        .access-btn:hover {
            background-color: #2980b9;
        }
        
        /* 分类标题 */
        .category-title {
            font-size: 1.8rem;
            color: #2c3e50;
            margin: 40px 0 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #3498db;
        }
        
        /* 响应式设计 */
        @media (max-width: 768px) {
            .datasets-grid {
                grid-template-columns: 1fr;
            }
            
            .page-title {
                font-size: 2rem;
            }
        }
        
        /* 无结果提示 */
        .no-results {
            text-align: center;
            padding: 40px;
            color: #7f8c8d;
            font-size: 1.1rem;
        }
        
        /* 页脚 */
        .footer {
            text-align: center;
            margin-top: 60px;
            padding: 20px;
            color: #7f8c8d;
            font-size: 0.9rem;
            border-top: 1px solid #e1e4e8;
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="page-header">
            <h1 class="page-title">数据集资源库</h1>
            <p class="page-subtitle">各领域高质量数据集集合</p>
        </header>
        
        <!-- 搜索框 -->
        <div class="search-container">
            <input type="text" class="search-input" id="searchInput" placeholder="搜索数据集名称、描述或标签...">
            <div class="search-results" id="searchResults"></div>
        </div>
        
        <!-- 分类导航 -->
        <div class="category-nav" id="categoryNav">
            <button class="category-btn active" data-category="all">全部</button>
            <button class="category-btn" data-category="comprehensive">综合性数据集</button>
            <button class="category-btn" data-category="mathematics">数学领域</button>
            <button class="category-btn" data-category="wireless">无线领域</button>
            <button class="category-btn" data-category="ai">AI领域</button>
            <button class="category-btn" data-category="materials">材料领域</button>
            <button class="category-btn" data-category="semiconductor">半导体领域</button>
            <button class="category-btn" data-category="other">其他</button>
        </div>
        
        <!-- 数据集内容 -->
        <div id="datasetsContainer">
            <!-- 综合性数据集 -->
            <h2 class="category-title">综合性数据集</h2>
            <div class="datasets-grid">
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">UCI Machine Learning Repository</h3>
                        <p class="dataset-description">UCI 机器学习库是机器学习领域常用的数据集集合，为相关研究提供丰富数据资源。经典的机器学习数据集仓库，包含677个数据集，涵盖分类、回归、聚类等多种机器学习任务。该数据集仓库是由加州大学尔湾分校的博士生大卫·阿哈（David Aha）于1987年创建的。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">综合型</span>
                        <span class="dataset-tag">数值</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">IEEE Dataport</h3>
                        <p class="dataset-description">IEEE Dataport 是 IEEE 旗下用于共享各类工程与计算机科学相关数据集的平台。IEEE提供的数据集平台，包含7500多个数据集，涵盖人工智能、图像处理、信号处理、计算机视觉、通信、传感器、物联网等多个领域。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">数值</span>
                        <span class="dataset-tag">图像</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">Huggingface</h3>
                        <p class="dataset-description">Huggingface 是专注于人工智能领域，特别是 NLP 技术，提供丰富数据集和开源工具的平台。HuggingFace平台提供超过30万个开放数据集，包含3D、音频、图像、地理空间、文本、时间序列、视频、表格等多种模态。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">文本</span>
                        <span class="dataset-tag">图像</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">Kaggle Datasets</h3>
                        <p class="dataset-description">Kaggle Datasets 是 Kaggle 平台上用于机器学习竞赛和研究的高质量数据集集合。全球最大的机器学习和数据科学社区Kaggle提供的数据仓库，涵盖计算机科学、艺术娱乐、生物学等多领域，包含 443K 个高质量公开数据集。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">表格</span>
                        <span class="dataset-tag">图像</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">KDD Cup历年竞赛数据集</h3>
                        <p class="dataset-description">KDD Cup 历年竞赛数据集是数据挖掘领域竞赛用的数据集，推动相关技术发展。KDD杯是ACM知识发现与数据挖掘特别兴趣小组（ACM SIGKDD）每年举办的数据挖掘和知识发现竞赛。本数据集包含历年KDD Cup竞赛中使用的数据集，涵盖不同领域和任务，可用于数据挖掘算法研究。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">竞赛数据</span>
                        <span class="dataset-tag">数值</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">OpenDataLab</h3>
                        <p class="dataset-description">OpenDataLab 是上海人工智能实验室旗下的开放数据平台，提供丰富 AI 相关数据集。OpenDataLab为中国大模型语料数据联盟开源数据服务指定平台，包含7700多个数据集，数据集总大小超过200TB，可用于计算机视觉、自然语言处理、多模态、音频识别等多种类型的任务。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">图像</span>
                        <span class="dataset-tag">文本</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">Amazon数据集</h3>
                        <p class="dataset-description">Amazon 数据集是与亚马逊业务相关的数据集合，可用于电商和 AI 等相关研究。Amazon数据集包含了不同领域的数据内容，例如：公共交通、生态资源、卫星图像等。同时提供了搜索功能，以帮助用户找到所需的数据集，还有各种数据集的描述信息以及用例，非常易于使用。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">结构化数据</span>
                        <span class="dataset-tag">文本</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
            </div>
            
            <!-- 数学领域数据集 -->
            <h2 class="category-title">数学领域</h2>
            <div class="datasets-grid">
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">NuminaMath-CoT</h3>
                        <p class="dataset-description">该数据集包含约86万道数学题目，每道题目的解答都采用思维链格式。数据来源包括中国高中数学练习题以及美国和国际数学奥林匹克竞赛题目。数据主要从在线考试试卷PDF和数学讨论论坛收集。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">数学问题</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">美国邀请数学考试AIME Problem Set: 1983-2024</h3>
                        <p class="dataset-description">数据集精选了从 1983 年到 2024 年的 AIME 问题和解决方案。由美国数学协会（MAA）主办并由问题解决艺术（AoPS）赞助，AIME（美国邀请数学考试）多年来一直是数学素养的重要基石。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">AIME问题</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">Deepmind/Aqua_rat代数问题解答数据集</h3>
                        <p class="dataset-description">包含约 100,000 个代数问题，解决方案使用自然语言逐步解释。该数据集包含约 100,000 个代数问题。每个问题的解决方案都使用自然语言逐步解释。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">代数问题</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">AutoMathText</h3>
                        <p class="dataset-description">包含约200GB数学文本的数据集。AutoMathText是一个包含约200GB数学文本的数据集，内容来源于多个网站、arXiv和GitHub等平台。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">数学文本</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">MathScape多模态数学问题数据集</h3>
                        <p class="dataset-description">包含1325张图像，涵盖从小学到高中的数学问题。MathScape是由南开大学、北京大学、百川公司和中国科学院大学联合开发的多模态数学问题数据集，旨在评估多模态大语言模型在数学问题解决中的应用。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">多模态数学问题</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">MathInstruct</h3>
                        <p class="dataset-description">属于指令调整数据集，由13个具有中间原理的数学数据集编译而成。MathInstruct是指令调整数据集。由13个具有中间原理的数学数据集编译而成。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">指令调整</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
            </div>
            
            <!-- 无线领域数据集 -->
            <h2 class="category-title">无线领域</h2>
            <div class="datasets-grid">
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">4G LTE数据集</h3>
                        <p class="dataset-description">爱尔兰移动运营商蜂窝 KPI 数据集。由从爱尔兰两家主要移动运营商收集的客户端蜂窝关键绩效指标（KPI）组成，涵盖不同移动模式，含135条轨迹，每条轨迹平均持续15分钟。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">通信</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">Wisense数据集</h3>
                        <p class="dataset-description">用于 Wi-Fi 信号活动识别的数据集。用于实现基于Wi-Fi信号的人类活动识别研究，用公开的通道状态信息收集工具和简单设备收集，含RSSI和CSI等信息。</p>
                    </div>
                    <div class="dataset-tags">
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">Stable WiFi RF Datasets for Device Fingerprinting</h3>
                        <p class="dataset-description">设备指纹识别的 WiFi 数据集。本Dataset提供了四个15台设备的WiFi 802.11b数据集，这些数据集是在每台设备的硬件预热期（设备激活后12分钟）之后捕获的。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">网络安全</span>
                        <span class="dataset-tag">通信</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">TeleQnA</h3>
                        <p class="dataset-description">评估大模型电信知识的问答数据集。TeleQnA由10,000个多选问答对（Multiple-choice Questions, MCQs）组成，可作为基准数据集，用于评估大语言模型所具备的电信领域的知识水平。</p>
                    </div>
                    <div class="dataset-tags">
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">TSpec-LLM</h3>
                        <p class="dataset-description">用于大语言模型训练的 3GPP 文档集。TSpec-LLM数据集包含从Release 8到Release 19的所有3GPP文档，可用于大语言模型的预训练和微调。</p>
                    </div>
                    <div class="dataset-tags">
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">Tele-Data</h3>
                        <p class="dataset-description">电信领域综合大语言模型训练集。Tele-Data是一个电信领域的综合数据集，数据总量大约25亿个tokens，包含arxiv论文、3GPP标准文稿、Wikipedia中与通信相关的论文、通信相关的网页等四类数据，可用于大语言模型的持续预训练。</p>
                    </div>
                    <div class="dataset-tags">
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
            </div>
            
            <!-- AI领域数据集 -->
            <h2 class="category-title">AI领域</h2>
            <div class="datasets-grid">
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">COCO 2017</h3>
                        <p class="dataset-description">COCO 2017 是 COCO 数据集在 2017 年的版本，用于计算机视觉研究。COCO 是一个大规模的对象检测、分割和字幕数据集。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">图像</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">MNIST手写数字数据集</h3>
                        <p class="dataset-description">MNIST 是经典的手写数字图像数据集，广泛用于手写数字识别算法测试。含6万张训练图像和1万张测试图像，用于图像识别、数字分类任务，是经典的入门数据集。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">图像</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">CIFAR-10</h3>
                        <p class="dataset-description">CIFAR-10 是小型彩色图像数据集，用于图像分类任务研究。含10个类别、6万张32x32彩色图像，用于图像分类研究，可评估模型在小尺寸图像上的泛化能力。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">图像</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">Caltech 101</h3>
                        <p class="dataset-description">Caltech 101 是包含 101 类物体图像的数据集，用于图像分类等研究。Caltech 101是一个由加州理工学院（California Institute of Technology）的Fei-Fei Li、Marco Andreetto、Marc 'Aurelio Ranzato和Pietro Perona于2003年9月创建和汇编的数字图像数据集。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">图像</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">Caltech 256 Image Dataset</h3>
                        <p class="dataset-description">Caltech 256 是含 256 类物体图像的数据集，为图像相关研究提供数据。Caltech 256 数据集被认为是其前身Caltech 101 数据集的改进版本，具有更大的类别大小、新的和更大的杂乱类别以及整体难度增加等新功能。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">图像</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">ImageNet</h3>
                        <p class="dataset-description">ImageNet 是大型图像数据集，极大推动计算机视觉领域发展。ImageNet 是一个根据 WordNet 层次结构（目前仅限于名词）组织的图片数据库，其中每个层次结构的节点都由数百到数千张图片表示。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">图像</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
            </div>
            
            <!-- 材料领域数据集 -->
            <h2 class="category-title">材料领域</h2>
            <div class="datasets-grid">
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">Materials Project</h3>
                        <p class="dataset-description">无机材料研究支持的数据集。由加州大学伯克利分校和麻省理工学院发起，涵盖超过12万种无机材料。支持材料检索、电池材料分析、晶体结构预测等。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">材料科学</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">ChemNLP</h3>
                        <p class="dataset-description">材料化学文本挖掘设计数据集。基于自然语言处理（NLP）的材料化学文本数据库。 整合了arXiv和PubChem数据集，适用于文本挖掘和材料设计。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">化学文本</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">NIST Chemistry WebBook</h3>
                        <p class="dataset-description">美研究院化合物热化学数据集。由美国国家标准与技术研究院（NIST）开发，提供超过7000种有机小分子和无机化合物的热化学数据。支持化合物检索、热化学数据查询等。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">化学</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">PubChem</h3>
                        <p class="dataset-description">美 NCBI 维护的化合物数据库集。由美国国家生物技术信息中心（NCBI）维护，涵盖超过1亿种化合物的化学数据。提供化合物的物性、毒性、光谱数据等。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">化学</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">SDBS光谱数据库</h3>
                        <p class="dataset-description">日有机化合物光谱数据集。由日本国家高等工业科学与技术研究院建立，专注于有机化合物的光谱数据。 支持化合物光谱数据的检索和下载。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">化学</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">OrChem</h3>
                        <p class="dataset-description">Oracle 开源化学搜索数据集。Oracle的开源化学搜索引擎，支持化学结构的注册、索引和快速子结构搜索。 基于化学开发工具包（CDK），支持相似性搜索和子结构验证。 (from 2009)</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">化学</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
            </div>
            
            <!-- 半导体领域数据集 -->
            <h2 class="category-title">半导体领域</h2>
            <div class="datasets-grid">
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">MixedWM38</h3>
                        <p class="dataset-description">混合模式晶圆图缺陷数据集。由Junliangwangdhu开发，混合WM38数据集（WaferMap）有超过38000个晶圆图，包括1个正常图样、8个单一缺陷图样和29个混合缺陷图样，共计38个缺陷图样。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">晶圆图缺陷</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">WM-811K</h3>
                        <p class="dataset-description">晶圆图缺陷模式识别数据集。台湾元智大学（Chuao University）的研究团队创建，专注于半导体制造领域的缺陷分析研究 。这一数据集由 许多晶圆的缺陷模式组成，其中每个晶圆被标记为正常或存在某种类型的缺陷模式。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">晶圆图缺陷</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">SECOM</h3>
                        <p class="dataset-description">半导体制造工艺的数据集。由加州大学欧文分校开发，复杂的现代半导体制造工艺通常在通过监测从传感器收集的信号/变量和或过程测量点。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">制造工艺</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">Real-IAD</h3>
                        <p class="dataset-description">大规模工业异常检测数据集。由上海交通大学开发的大规模、多视角工业异常检测数据集，用于评估多样化工业异常检测方法。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">工业异常检测</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">The OpenROAD Project</h3>
                        <p class="dataset-description">开放源代码的布局生成流程（RTL-to-GDS）数据集。由Qualcomm、Arm等共同开发。目标是开发自主开源工具链，专注于数字SoC的布局生成，特别是在RTL到GDSII阶段多种工艺节点（7nm-28nm）设计数据。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">布局生成流程</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">CHIPQA</h3>
                        <p class="dataset-description">时空芯片的无参考视频质量评估数据集。由得克萨斯大学奥斯汀分校团队开发, 提出了一种新的无参考视频质量评估（VQA）模型。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">时空芯片</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
            </div>
            
            <!-- 其他数据集 -->
            <h2 class="category-title">其他</h2>
            <div class="datasets-grid">
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">计算机硬件数据集</h3>
                        <p class="dataset-description">计算机硬件数据集是关于计算机硬件参数和性能的数据集合。相对 CPU 性能数据，以周期时间、内存大小等描述。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">数值</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">Cora数据集</h3>
                        <p class="dataset-description">Cora 是包含科学论文文本和引用关系的数据集，用于机器学习相关研究。Cora 数据集由 2708 篇科学出版物组成，这些出版物被分类为七个类别之一。引文网络由 5429 个链接组成。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">文本</span>
                        <span class="dataset-tag">图像</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">Citeseer数据集</h3>
                        <p class="dataset-description">Citeseer 是含科学文献文本和引用关系的数据集，用于相关研究。类似Cora，含科学文献及其引用关系。CiteSeer数据集由3312篇科学出版物组成，这些出版物被分类为6个类别之一。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">文本</span>
                        <span class="dataset-tag">图像</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">Caltech Mouse Social Interactions (CalMS21)</h3>
                        <p class="dataset-description">Caltech Mouse Social Interactions (CalMS21) 是用于小鼠行为分析的图像数据集。CalMS21是一个来自行为神经科学的多智能体数据集，由社会交互的轨迹数据组成。</p>
                    </div>
                    <div class="dataset-tags">
                        <span class="dataset-tag">图像</span>
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">KDD CUP 99 网络入侵检测数据集</h3>
                        <p class="dataset-description">用于第三届国际知识发现和数据挖掘工具竞赛的数据集，用于网络入侵检测研究。竞赛任务是建立一个网络入侵检测器，即：一个能够区分'坏'连接（称为入侵或攻击）和'好'正常连接的预测模型。</p>
                    </div>
                    <div class="dataset-tags">
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
                
                <div class="dataset-card">
                    <div class="dataset-header">
                        <h3 class="dataset-name">CSE-CIC-IDS2018 数据集</h3>
                        <p class="dataset-description">针对多种场景，用于网络入侵检测技术研发的数据集。由加拿大网络安全研究所收集，包括七种不同的攻击场景：暴力破解、Heartbleed、僵尸网络、拒绝服务、分布式拒绝服务、Web攻击和从内部入侵网络。</p>
                    </div>
                    <div class="dataset-tags">
                    </div>
                    <div class="dataset-access">
                        <a href="#" class="access-btn">访问数据集</a>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script>
        // 页面加载完成后执行
        document.addEventListener('DOMContentLoaded', function() {
            // 添加分类导航点击事件
            document.getElementById('categoryNav').addEventListener('click', function(e) {
                if (e.target.classList.contains('category-btn')) {
                    const categoryId = e.target.getAttribute('data-category');
                    
                    // 更新活动按钮
                    document.querySelectorAll('.category-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    e.target.classList.add('active');
                    
                    // 显示对应分类的数据集
                    if (categoryId === 'all') {
                        showAllCategories();
                    } else {
                        showCategory(categoryId);
                    }
                }
            });
            
            // 添加搜索功能
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.trim().toLowerCase();
                if (searchTerm) {
                    performSearch(searchTerm);
                } else {
                    // 如果搜索框为空，显示所有数据集
                    const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
                    if (activeCategory === 'all') {
                        showAllCategories();
                    } else {
                        showCategory(activeCategory);
                    }
                    document.getElementById('searchResults').textContent = '';
                }
            });
        });
        
        // 显示所有分类
        function showAllCategories() {
            const categories = document.querySelectorAll('.category-title, .datasets-grid');
            categories.forEach(element => {
                element.style.display = '';
            });
        }
        
        // 显示特定分类
        function showCategory(categoryId) {
            // 获取所有分类标题和数据集网格
            const categoryTitles = document.querySelectorAll('.category-title');
            const datasetGrids = document.querySelectorAll('.datasets-grid');
            
            // 隐藏所有内容
            categoryTitles.forEach(title => {
                title.style.display = 'none';
            });
            datasetGrids.forEach(grid => {
                grid.style.display = 'none';
            });
            
            // 显示指定分类的内容
            const categoryMap = {
                'comprehensive': 0,
                'mathematics': 1,
                'wireless': 2,
                'ai': 3,
                'materials': 4,
                'semiconductor': 5,
                'other': 6
            };
            
            if (categoryMap[categoryId] !== undefined) {
                categoryTitles[categoryMap[categoryId]].style.display = '';
                datasetGrids[categoryMap[categoryId]].style.display = 'grid';
            }
        }
        
        // 执行搜索
        function performSearch(searchTerm) {
            const allCards = document.querySelectorAll('.dataset-card');
            let resultsCount = 0;
            
            allCards.forEach(card => {
                const name = card.querySelector('.dataset-name').textContent.toLowerCase();
                const description = card.querySelector('.dataset-description').textContent.toLowerCase();
                const tags = Array.from(card.querySelectorAll('.dataset-tag')).map(tag => tag.textContent.toLowerCase());
                
                // 检查是否匹配
                const nameMatch = name.includes(searchTerm);
                const descriptionMatch = description.includes(searchTerm);
                const tagsMatch = tags.some(tag => tag.includes(searchTerm));
                
                if (nameMatch || descriptionMatch || tagsMatch) {
                    card.style.display = '';
                    resultsCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // 更新搜索结果信息
            const resultsInfo = document.getElementById('searchResults');
            if (resultsCount > 0) {
                resultsInfo.textContent = `找到 ${resultsCount} 个与 "${searchTerm}" 相关的结果`;
            } else {
                resultsInfo.textContent = `没有找到与 "${searchTerm}" 相关的结果`;
            }
            
            // 隐藏所有分类标题，只显示搜索结果
            const categoryTitles = document.querySelectorAll('.category-title');
            categoryTitles.forEach(title => {
                title.style.display = 'none';
            });
        }
    </script>
</body>
</html>