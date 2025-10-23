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
topmost: true
---

## 数据集

<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>数据集资源库</title>
    <style>
        /* 基础样式 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Microsoft YaHei", sans-serif;
        }
        
        body {
            background-color: #f5f7fa;
            color: #333;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
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
    </style>
</head>
<body>
    <div class="container">
        <header class="page-header">
            <h1 class="page-title">数据集资源库</h1>
            <p class="page-subtitle">汇集各领域高质量数据集，助力科研与开发</p>
        </header>
        
        <!-- 搜索框 -->
        <div class="search-container">
            <input type="text" class="search-input" id="searchInput" placeholder="搜索数据集名称、描述或标签...">
            <div class="search-results" id="searchResults"></div>
        </div>
        
        <div class="category-nav" id="categoryNav">
            <!-- 分类导航将通过JavaScript动态生成 -->
        </div>
        
        <div id="datasetsContainer">
            <!-- 数据集内容将通过JavaScript动态生成 -->
        </div>
    </div>

    <script>
        // 数据集分类数据
        const categories = [
            { id: 'comprehensive', name: '综合性数据集' },
            { id: 'mathematics', name: '数学领域' },
            { id: 'wireless', name: '无线领域' },
            { id: 'ai', name: 'AI领域' },
            { id: 'materials', name: '材料领域' },
            { id: 'semiconductor', name: '半导体领域' },
            { id: 'other', name: '其他' }
        ];
        
        // 数据集数据
        const datasets = [
            // 综合性数据集
            {
                name: "UCI Machine Learning Repository",
                description: "UCI 机器学习库是机器学习领域常用的数据集集合，为相关研究提供丰富数据资源。经典的机器学习数据集仓库，包含677个数据集，涵盖分类、回归、聚类等多种机器学习任务。该数据集仓库是由加州大学尔湾分校的博士生大卫·阿哈（David Aha）于1987年创建的。从那时起，它就被世界各地的学生、教育工作者和研究人员广泛用作机器学习数据集的主要来源。",
                tags: ["综合型", "数值"],
                category: "comprehensive",
                accessLink: "#"
            },
            {
                name: "IEEE Dataport",
                description: "IEEE Dataport 是 IEEE 旗下用于共享各类工程与计算机科学相关数据集的平台。IEEE提供的数据集平台，包含7500多个数据集，涵盖人工智能、图像处理、信号处理、计算机视觉、通信、传感器、物联网等多个领域。",
                tags: ["数值", "图像"],
                category: "comprehensive",
                accessLink: "#"
            },
            {
                name: "Huggingface",
                description: "Huggingface 是专注于人工智能领域，特别是 NLP 技术，提供丰富数据集和开源工具的平台。HuggingFace平台提供超过30万个开放数据集，包含3D、音频、图像、地理空间、文本、时间序列、视频、表格等多种模态。",
                tags: ["文本", "图像"],
                category: "comprehensive",
                accessLink: "#"
            },
            {
                name: "Kaggle Datasets",
                description: "Kaggle Datasets 是 Kaggle 平台上用于机器学习竞赛和研究的高质量数据集集合。全球最大的机器学习和数据科学社区Kaggle提供的数据仓库，涵盖计算机科学、艺术娱乐、生物学等多领域，包含 443K 个高质量公开数据集。",
                tags: ["表格", "图像"],
                category: "comprehensive",
                accessLink: "#"
            },
            {
                name: "KDD Cup历年竞赛数据集",
                description: "KDD Cup 历年竞赛数据集是数据挖掘领域竞赛用的数据集，推动相关技术发展。KDD杯是ACM知识发现与数据挖掘特别兴趣小组（ACM SIGKDD）每年举办的数据挖掘和知识发现竞赛。本数据集包含历年KDD Cup竞赛中使用的数据集，涵盖不同领域和任务，可用于数据挖掘算法研究。",
                tags: ["竞赛数据", "数值"],
                category: "comprehensive",
                accessLink: "#"
            },
            {
                name: "OpenDataLab",
                description: "OpenDataLab 是上海人工智能实验室旗下的开放数据平台，提供丰富 AI 相关数据集。OpenDataLab为中国大模型语料数据联盟开源数据服务指定平台，包含7700多个数据集，数据集总大小超过200TB，可用于计算机视觉、自然语言处理、多模态、音频识别等多种类型的任务。",
                tags: ["图像", "文本"],
                category: "comprehensive",
                accessLink: "#"
            },
            {
                name: "Amazon数据集",
                description: "Amazon 数据集是与亚马逊业务相关的数据集合，可用于电商和 AI 等相关研究。Amazon数据集包含了不同领域的数据内容，例如：公共交通、生态资源、卫星图像等。同时提供了搜索功能，以帮助用户找到所需的数据集，还有各种数据集的描述信息以及用例，非常易于使用。",
                tags: ["结构化数据", "文本"],
                category: "comprehensive",
                accessLink: "#"
            },
            
            // 数学领域数据集
            {
                name: "NuminaMath-CoT",
                description: "该数据集包含约86万道数学题目，每道题目的解答都采用思维链格式。数据来源包括中国高中数学练习题以及美国和国际数学奥林匹克竞赛题目。数据主要从在线考试试卷PDF和数学讨论论坛收集。处理步骤包括从原始PDF中进行OCR识别、分割成问题-解答对、翻译成英文、重新对齐以生成CoT推理格式，以及最终答案格式化。",
                tags: ["数学问题"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "美国邀请数学考试AIME Problem Set: 1983-2024",
                description: "数据集精选了从 1983 年到 2024 年的 AIME 问题和解决方案。由美国数学协会（MAA）主办并由问题解决艺术（AoPS）赞助，AIME（美国邀请数学考试）多年来一直是数学素养的重要基石。这个数据集精选了从 1983 年到 2024 年的 AIME 问题，每个问题都附有解决方案，使学生、教育工作者和爱好者都能参与数学发现的艺术。",
                tags: ["AIME问题"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "Deepmind/Aqua_rat代数问题解答数据集",
                description: "包含约 100,000 个代数问题，解决方案使用自然语言逐步解释。该数据集包含约 100,000 个代数问题。每个问题的解决方案都使用自然语言逐步解释。这些数据用于训练程序生成模型，该模型学习生成解释，同时生成解决该问题的程序。",
                tags: ["代数问题"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "AutoMathText",
                description: "包含约200GB数学文本的数据集。AutoMathText是一个包含约200GB数学文本的数据集，内容来源于多个网站、arXiv和GitHub等平台。数据集通过先进的开源语言模型Qwen-72B自动筛选和标注，每条内容都有一个lm_q1q2_score评分，用于评估其在数学智能领域的相关性、质量和教育价值。",
                tags: ["数学文本"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "MathScape多模态数学问题数据集",
                description: "包含1325张图像，涵盖从小学到高中的数学问题。MathScape是由南开大学、北京大学、百川公司和中国科学院大学联合开发的多模态数学问题数据集，旨在评估多模态大语言模型在数学问题解决中的应用。该数据集包含1325张图像，涵盖从小学到高中的数学问题，难度从易到难，涉及多种题型和知识领域。",
                tags: ["多模态数学问题"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "MathInstruct",
                description: "属于指令调整数据集，由13个具有中间原理的数学数据集编译而成。MathInstruct是指令调整数据集。由13个具有中间原理的数学数据集编译而成。它拥有思维链（CoT）和思维计划（PoT）基本原理的混合，并且还确保了数学不同领域的广泛覆盖。 CoT 和 PoT 的混合不仅可以释放工具使用的潜力，还可以针对不同的数学问题提供不同的思维过程。",
                tags: ["指令调整"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "Mathematics Dataset",
                description: "该数据集包含数学问题和答案。该数据集包含数学问题和答案对，从大约学校水平的难度范围的各种问题类型中生成。目的是为了测试学习模型的数学学习和代数推理能力。",
                tags: ["数学问题"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "Math23K for Math Word Problem Solving",
                description: "为解决数学单词问题而创建的数据集。Math23K 是为解决数学单词问题而创建的数据集，包含从互联网上爬取的中文问题。",
                tags: ["数学单词问题"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "D4ve-R/gsm-1k-de 数学问题解答数据集",
                description: "GSM8K数据集前1000个项目的德语翻译子集。GSM-1k-de是GSM8K数据集前1000个项目的德语翻译子集。数据集中的文本为德语，每个实例包含一个小学水平的数学问题字符串和一个包含多步推理和计算器注释的答案字符串。数据集是通过DeepL的API进行翻译的。",
                tags: ["数学问题"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "NuminaMath",
                description: "包含86万对竞赛数学问题和解决方案的综合集合。NuminaMath数据集是一个包含86万对竞赛数学问题和解决方案的综合集合。该数据集旨在增强大型语言模型（LLMs）的数学推理能力，包括从高中水平到高级竞赛水平的问题，所有问题都经过精心注释，并附有思维链记录。",
                tags: ["GSM8K"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "DART-Math-Hard",
                description: "用于数学推理的指令调优数据集。DART-Math-Hard数据集是一个用于数学推理的指令调优数据集，包含约585k个数学问答对样本。",
                tags: ["数学推理", "指令调优"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "AQuA-RAT with Calculator",
                description: "AQuA-RAT数据集的一个实例，扩展了 sympy 计算器的上下文调用。该数据集是AQuA-RAT数据集的一个实例，扩展了 sympy 计算器的上下文调用。该数据集旨在训练能够使用外部工具来增强其回答事实性的链式推理模型。数据集提供了上下文场景，在这些场景中，模型可以将推理链中的计算外包给计算器。",
                tags: ["AQuA-RAT"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "MATH数学问题解答数据集",
                description: "包含12,500个具有挑战性的竞赛数学问题的全新数据集。MATH是一个包含12,500个具有挑战性的竞赛数学问题的全新数据集。MATH中的每个问题都有完整的逐步解决方案，可用于训练模型生成答案推导和解释。",
                tags: ["数学竞赛问题"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "International Mathematical Olympiad (IMO) Scores",
                description: "数据集包含1984年至2017年国际数学奥林匹克竞赛题。国际数学奥林匹克竞赛首次于1959年举办，是一项每年为全球顶尖高中生举办的数学竞赛。比赛由六道题目组成，分为两天进行：每天参赛者有4.5小时的时间解决三道题目。此数据集包含1984年至2017年国际数学奥林匹克竞赛的得分。由于1959年至1984年的数据并不总是记录每道题目的得分，因此这些年份的数据被省略。",
                tags: ["数学竞赛问题"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "IPACA_JP_MATH",
                description: "基于Stanford Alpaca和mistralai/Mixtral-8x22B-Instruct-v0.1模型生成的合成数据集。lpaca_jp_math是一个基于Stanford Alpaca和mistralai/Mixtral-8x22B-Instruct-v0.1模型生成的合成数据集，主要用于数学任务。数据集包含多个版本，每个版本都经过精查，确保Python计算结果与文本计算结果一致。",
                tags: ["数学任务"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "Worded Math数据集",
                description: "包含100万个基于单词的数学问题示例。Worded Math数据集包含100万个基于单词的数学问题示例，这些问题以英文表示，并带有数字结果。数据集通过随机选择数字和算术操作生成，并将数字转换为单词形式。数据集分为训练数据和测试数据，并分别保存为JSON文件。",
                tags: ["基于单词数学问题"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "Omni-MATH",
                description: "专注于数学，包含 4428 个竞赛级问题。Omni-MATH数据集专注于数学，包含 4428 个竞赛级问题。这些问题被精心分类为 33 个（可能更多）子领域，并跨越 10 个不同的难度级别，从而可以对模型在各种数学学科和复杂性级别上的性能进行细致的分析。",
                tags: ["数学竞赛问题"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "DAPO-Math-17K数据集",
                description: "包含17,000个数学问题及其整数答案的数据集。DAPO-Math-17K是一个包含17,000个数学问题及其整数答案的数据集，专为大规模LLM强化学习设计，经过精心转换以确保准确的奖励信号。",
                tags: ["数学问题"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "MV-MATH",
                description: "中科院自动化所推出的多模态数学推理基准数据集。MV-MATH数据集是中科院自动化所推出的多模态数学推理基准数据集，旨在评估多模态大语言模型在多视觉场景中的数学推理能力。该数据集包含2009个高质量的数学问题，涵盖11个数学领域和3个难度级别，适用于智能辅导系统和多模态学习研究。",
                tags: ["多模态数学"],
                category: "mathematics",
                accessLink: "#"
            },
            {
                name: "MathPile：10B数学预训练语料库",
                description: "一个多样化和高质量的以数学为中心的语料库。MathPile是一个多样化和高质量的以数学为中心的语料库，包含约95亿个标记。",
                tags: ["数学语料库"],
                category: "mathematics",
                accessLink: "#"
            },
            
            // 无线领域数据集
            {
                name: "4G LTE数据集",
                description: "爱尔兰移动运营商蜂窝 KPI 数据集。由从爱尔兰两家主要移动运营商收集的客户端蜂窝关键绩效指标（KPI）组成，涵盖不同移动模式，含135条轨迹，每条轨迹平均持续15分钟。",
                tags: ["通信"],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "Wisense数据集",
                description: "用于 Wi-Fi 信号活动识别的数据集。用于实现基于Wi-Fi信号的人类活动识别研究，用公开的通道状态信息收集工具和简单设备收集，含RSSI和CSI等信息。",
                tags: [],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "Stable WiFi RF Datasets for Device Fingerprinting",
                description: "设备指纹识别的 WiFi 数据集。本Dataset提供了四个15台设备的WiFi 802.11b数据集，这些数据集是在每台设备的硬件预热期（设备激活后12分钟）之后捕获的。",
                tags: ["网络安全", "通信"],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "TeleQnA",
                description: "评估大模型电信知识的问答数据集。TeleQnA由10,000个多选问答对（Multiple-choice Questions, MCQs）组成，可作为基准数据集，用于评估大语言模型所具备的电信领域的知识水平。该数据集的10,000个问题涉及电信领域的术语和定义、研究总览、研究论文、标准总览、标准规范等。",
                tags: [],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "TSpec-LLM",
                description: "用于大语言模型训练的 3GPP 文档集。TSpec-LLM数据集包含从Release 8到Release 19的所有3GPP文档，可用于大语言模型的预训练和微调。",
                tags: [],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "Tele-Data",
                description: "电信领域综合大语言模型训练集。Tele-Data是一个电信领域的综合数据集，数据总量大约25亿个tokens，包含arxiv论文、3GPP标准文稿、Wikipedia中与通信相关的论文、通信相关的网页等四类数据，可用于大语言模型的持续预训练。",
                tags: [],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "Dataset for multi-server multi-user offloading problem",
                description: "用于多服务器多用户场景下计算卸载问题求解的数据集。该数据集用于多服务器多用户场景下计算卸载问题的求解，该类问题用于最小化所有任务的总能量消耗和时延。",
                tags: ["计算机网络"],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "WiFo",
                description: "用于无线信道预测的数据集。WiFo是一个无线领域的基础模型，该模型最初在大量广泛多样的CSI数据集上进行预训练；然后可以在各种CSI配置下立即用于信道预测，而无需任何微调。为了充分发挥其预测能力，研究者构建了一个大规模异构的CSI模拟数据集，包含160K个CSI样本用于预训练。",
                tags: [],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "DeepMIMO",
                description: "毫米波和Massive MIMO系统通用的深度学习数据集。DeepMIMO是一个适用于毫米波/大规模MIMO信道的通用数据集。DeepMIMO信道基于Remcom Wireless InSite提供的精确射线追踪数据构建，并且是通用的/参数化的，研究人员可灵活配置场景和参数，以针对目标任务定制生成所须的数据集。",
                tags: [],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "Real-world Wireless Communication Dataset",
                description: "包含三种典型无线通信系统真实RF信号的数据集，用于多种任务。该数据集包含Wi-Fi（IEEE 802.11ax）、LTE 和 5G 的真实 RF 信号数据。这些信号在各种条件下被采集，以确保真实场景的广泛代表性，包括不同的调制方案、信道条件和数据速率。潜在的应用范围包括信号处理、干扰抑制、信号分类等算法的开发。",
                tags: [],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "Wireless Intelligence",
                description: "用于多种基于AI的无线通信任务的综合性数据集。Wireless-Intelligence 是一个为基于人工智能的无线通信研究提供的数据仓库，其中每个数据集包含数百和数千个不同形式信道样本，可用于基于AI的CSI反馈、信道估计、定位、波束管理等任务。",
                tags: [],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "RadarComm Dataset",
                description: "包含雷达和通信波形的数据集。RadarComm Dataset是由ANDRO的MR Lab发布的无线信号数据集，包含雷达和通信波形，旨在帮助研究社区推进基于机器学习的无线通信研究。",
                tags: [],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "RF-Fingerprinting-BT-IoT",
                description: "来自物联网设备的真实世界蓝牙数据集，用于射频指纹识别。该数据集包括来自10个COTS IoT发射器（2台笔记本电脑和8个商业芯片）的信号数据，这些数据由配备UBX160子板和VERT2450天线的National Instruments Ettus USRP X300设备采集。这是在具有挑战性和多样性的室内实验室环境中对蓝牙发射器进行指纹识别的首个数据集。",
                tags: [],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "ViWi-BT Competition Test Dataset",
                description: "2020年视觉辅助的毫米波波束跟踪竞赛数据集。该测试数据集由一组大小相等的集合组成，每个集合包含 8 对连续图像和波束索引。由于该数据集用于评估，因此这 8 对图像和波束都是观察到的图像和波束，用于预测未来的波束索引。",
                tags: [],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "6G信道估计数据集",
                description: "利用Matlab 5G工具箱生成的数据，用于训练基于深度学习的信道估计模型。本数据集是通过MATLAB 5G工具箱中的参考示例生成的，可用于卷积神经网络 (CNN) 进行信道估计。工具箱中的参考示例可生成256个训练数据集，即传输/接收信号256次，每个数据集由8568个数据点组成，即612个子载波、14个OFDM 符号、1个天线。",
                tags: [],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "SynthSoM",
                description: "通信与多模态感知智能融合数据集。该数据集旨在支持感知-通信集成研究，包含多种空地协作场景和数据模态，如RF通道数据、mmWave雷达数据以及非RF感知数据（如RGB图像和LiDAR点云）",
                tags: ["通信"],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "5G通感一体化数据集",
                description: "基于5G空口的通感一体化实测数据集。该数据集利用5G NR信号在sub-6 GHz频段采集，包含2场景×2模式的8组数据，提供30秒8通道信道信息（含目标及背景）。采用2D-DFT分析时延/多普勒谱，并提出IDFT方法消除非理想因素验证数据有效性",
                tags: ["通感一体化"],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "WiFo信道预测数据集",
                description: "大规模异构CSI仿真数据集。大规模异构CSI仿真数据集用于预训练，包含 16 种不同配置（时间采样、子载波、天线），共 16 万条训练样本",
                tags: ["CSI仿真"],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "Widar 3.0无线感知数据集",
                description: "基于 WiFi 的活动识别数据集。Widar3.0 是由清华 MobiSense Group 提供的 Wi-Fi 手势识别数据集。它包含从商用 Wi-Fi 卡收集的信道状态信息 （CSI），以及相应的多普勒频移 （DFS） 和体坐标速度曲线 （BVP）。该数据集由 258K 个手势实例组成，总采集时间为 8620 分钟，来自 75 种不同的用户、环境和设备放置组合",
                tags: ["活动识别"],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "XRF55: A Radio Frequency Dataset for Human Indoor Action Analysis",
                description: "XRF55，用于室内人体行为分析的大规模多射频数据集。XRF55 包含 23 个 922.38MHz 的 RFID 标签、9 个 5.64GHz 的 Wi-Fi 链路、一个 60-64GHz 的毫米波雷达和一个带有 RGB+D+IR 传感器的 Azure Kinect。XRF55 包括 42.9K 样本和 55 个动作类，包括从 39 名受试者那里收集的人机交互、人机交互、健身、身体动作和人机指令",
                tags: ["室内人体行为"],
                category: "wireless",
                accessLink: "#"
            },
            {
                name: "DeepSense 6G",
                description: "一个面向6G深度学习研究的大规模真实世界多模态感知与通信数据集。DeepSense 6G 是一个真实世界的多模态数据集，包含在真实无线环境中收集的多模态感知和通信数据，例如毫米波无线通信、摄像头、GPS 数据、激光雷达和雷达。",
                tags: ["6G"],
                category: "wireless",
                accessLink: "#"
            },
            
            // AI领域数据集
            {
                name: "COCO 2017",
                description: "COCO 2017 是 COCO 数据集在 2017 年的版本，用于计算机视觉研究。COCO 是一个大规模的对象检测、分割和字幕数据集。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "MNIST手写数字数据集",
                description: "MNIST 是经典的手写数字图像数据集，广泛用于手写数字识别算法测试。含6万张训练图像和1万张测试图像，用于图像识别、数字分类任务，是经典的入门数据集。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "CIFAR-10",
                description: "CIFAR-10 是小型彩色图像数据集，用于图像分类任务研究。含10个类别、6万张32x32彩色图像，用于图像分类研究，可评估模型在小尺寸图像上的泛化能力。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Caltech 101",
                description: "Caltech 101 是包含 101 类物体图像的数据集，用于图像分类等研究。Caltech 101是一个由加州理工学院（California Institute of Technology）的Fei-Fei Li、Marco Andreetto、Marc 'Aurelio Ranzato和Pietro Perona于2003年9月创建和汇编的数字图像数据集。它旨在促进计算机视觉研究和技术的开发，最适用于涉及图像识别、分类和分类的技术。Caltech 101包含总共9,146张图像，分为101个不同的对象类别（人脸、手表、蚂蚁、钢琴等）和一个背景类别。图像提供了一组描述每个图像轮廓的注释，以及一个用于查看的Matlab脚本。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Caltech 256 Image Dataset",
                description: "Caltech 256 是含 256 类物体图像的数据集，为图像相关研究提供数据。Caltech 256 数据集被认为是其前身Caltech 101 数据集的改进版本，具有更大的类别大小、新的和更大的杂乱类别以及整体难度增加等新功能。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "ImageNet",
                description: "ImageNet 是大型图像数据集，极大推动计算机视觉领域发展。ImageNet 是一个根据 WordNet 层次结构（目前仅限于名词）组织的图片数据库，其中每个层次结构的节点都由数百到数千张图片表示。该项目在推动计算机视觉和深度学习研究方面发挥了重要作用。该数据集免费提供给研究人员用于非商业用途。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "COCO（Common Objects in Context）",
                description: "COCO 是用于计算机视觉中目标检测等任务的图像数据集，标注丰富。用于目标检测、分割和字幕生成，含91类物体实例、82,783张训练图像和40,504张验证图像。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Large Movie Review数据集",
                description: "Large Movie Review 是用于电影评论情感分析的文本数据集。二元情感分类数据集，包含 25,000 个高度极化的电影评论用于训练，25,000 个用于测试。还有额外的未标记数据可供使用。",
                tags: ["文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "20 Newsgroups数据集",
                description: "20 Newsgroups 是用于自然语言处理研究的新闻文本数据集。约2万个新闻组文档，分20个类别，用于文本分类、文本挖掘和信息检索研究",
                tags: ["文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Wikipedia语料库",
                description: "Wikipedia 语料库是基于维基百科的文本数据，富含知识信息。提取自维基百科文章，用于语言模型训练、文本生成和知识图谱构建",
                tags: ["文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "AG News",
                description: "AG News 是用于文本分类的新闻文本数据集。AG新闻（AG新闻语料库）是AG新闻语料库的一个子数据集，由AG新闻语料库中4个最大类别（'世界'、'体育'、'商业'、'科学/技术'）的文章标题和描述字段组成。AG新闻包含每个类别的30,000个训练样本和1,900个测试样本。",
                tags: ["文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "鸢尾花数据集",
                description: "鸢尾花数据集是经典的用于分类任务的数据集。经典分类数据集，含4个属性和3种鸢尾花类别，用于分类算法的开发和测试",
                tags: ["数值"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "IMDb电影数据集",
                description: "IMDb 电影数据集包含丰富电影信息，可用于多领域电影相关研究。含电影元数据和用户评论，用于电影推荐系统、情感分析和数据挖掘",
                tags: ["文本", "数值"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "豆瓣电影数据集 Moviedata-10M",
                description: "豆瓣电影数据集 Moviedata - 10M 是豆瓣电影相关数据集合，用于电影相关研究。本数据集采集于豆瓣电影，电影与明星数据收集于2019年8月上旬，影评数据(用户、评分、评论)收集于2019年9月初，共945万数据，其中包含14万部电影，7万演员，63万用户，416万条电影评分，442万条影评，该数据集正好弥补下国内公开电影​数据集的空缺。数据已经过初步清洗，可用于推荐系统、情感分析、QA问答、知识图谱等多个领域。",
                tags: ["文本", "数值"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "豆瓣电影评分数据集",
                description: "豆瓣电影评分数据集专注于豆瓣电影的评分，用于相关分析。该数据集为网友爬取的豆瓣电影数据集，该数据包含8708条包含电影名称，电影评分，评价人数，上映时间，演员信息的电影数据。",
                tags: ["数值"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Douban Movie Short Comments Dataset",
                description: "Douban Movie Short Comments Dataset 是豆瓣电影短评论数据集，用于情感分析等。该数据集包含豆瓣电影网站28部电影的200多万条短评。它可以应用于文本分类、文本聚类、情感分析、语义网构建等与Web挖掘或NLP（中文lol）相关的领域。",
                tags: ["文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "MovieLens",
                description: "MovieLens 是用于推荐系统研究的电影相关数据集。MovieLens 32M电影评分。稳定的基准测试数据集。200,948个用户为87,585部电影提供了3200万个评分和200万个标签应用。",
                tags: ["数值", "文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "MNIST Fashion数据集",
                description: "MNIST Fashion 是用于图像分类的时尚物品图像数据集。类似MNIST，含10类时尚物品图像，用于图像分类和深度学习研究。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "GDELT全球事件数据库",
                description: "GDELT 是全球事件相关的数据库，为社会科学等研究提供数据。记录全球范围内的新闻事件，含丰富信息，用于社会科学研究、舆情分析等。",
                tags: ["数值", "文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "WikiText数据集",
                description: "WikiText 是用于自然语言处理的维基百科文本数据集。WikiText 语言建模数据集是从 Wikipedia 上经过验证的 Good 和 Featured 文章集中提取的超过 1 亿个标记的集合。",
                tags: ["文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "AI Challenger 2017",
                description: "AI Challenger 2017 是包含多任务的人工智能数据集，用于相关研究和竞赛。一个名为 AIC（AI Challenger）的大规模数据集，包含三个子数据集，人类关键点检测（HKD）、大规模属性数据集（LAD）和图像中文字幕（ICC）。在这个数据集中，标注了类标签（LAD）、关键点坐标（HKD）、边界框（HKD和LAD）、属性（LAD）和标题（ICC）。",
                tags: ["图像", "文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "GQA",
                description: "GQA 是将图像与自然语言问题结合的数据集，用于跨领域研究。GQA 数据集是一个大规模的视觉问答数据集，包含来自视觉基因组数据集的真实图像和平衡的问答对。每个训练和验证图像还与描述场景中这些对象的类和属性以及它们的成对关系的场景图注释相关联。除了图像和问答对，GQA 数据集还为每张图像提供两种类型的预提取视觉特征——从在 ImageNet 上训练的 ResNet-101 网络中提取的大小为 7×7×2048 的卷积网格特征，以及对象检测来自 Faster R-CNN 检测器的大小为 Ndet×2048 的特征（其中 Ndet 是每张图像中检测到的对象的数量，每张图像最多 100 个）。",
                tags: ["图像", "文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Reuters-21578数据集",
                description: "Reuters - 21578 是用于自然语言处理的新闻文本数据集。含路透社新闻文章，用于文本分类、信息检索等研究。",
                tags: ["文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "IMDB-WIKI人脸数据集",
                description: "IMDB - WIKI 是用于人脸识别的人脸图像数据集。用于人脸识别和年龄估计，含约52.4万张人脸图像。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "CelebA人脸属性数据集",
                description: "CelebA 是含名人脸图像及属性标注的数据集，用于人脸分析研究。CelebFaces Attributes Dataset (CelebA) 是一个包含超过 200K 名人图像的大型面部属性数据集，每张图像都有 40 个属性注释。CelebA具有多样性、大量数据和丰富的注释，包括：10,177 个身份，202,599 张面部图像，5 个地标位置，每张图像有 40 个二元属性注释。该数据集可以用于以下计算机视觉任务的训练和测试集：面部属性识别、面部识别、面部检测、地标（或面部部分）定位以及面部编辑与合成。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "COCO-Stuff",
                description: "COCO - Stuff 是 COCO 扩展数据集，用于图像场景理解等研究。在COCO基础上增加了171个stuff类别标注，用于场景解析和语义分割。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Open Images Dataset (V7)",
                description: "Open Images Dataset (V7) 是用于计算机视觉的图像数据集，标注丰富。谷歌发布，含约900万张图像、600多个类别标注，用于目标检测、视觉关系检测等。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Cityscapes数据集",
                description: "Cityscapes 是用于城市场景分析的图像数据集，助力自动驾驶等研究。该数据集包含来自 50 个城市的街道场景中录制的多样化立体视频序列，包括 5000 帧高质量像素级注释和 20000 帧弱注释。因此，该数据集比以前的类似尝试大了一个数量级。有关注释类别的详细信息和注释示例可在网页上找到。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "PASCAL VOC2007/VOC2012数据集",
                description: "PASCAL VOC 是经典的用于计算机视觉任务的图像数据集。用于目标检测、分割和分类任务，在计算机视觉领域应用广泛。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "KITTI-360视觉基准数据集",
                description: "KITTI - 360 是用于自动驾驶视觉算法研究的数据集。该数据集记录了德国卡尔斯鲁厄的几个郊区，对应于 73.7 公里驾驶距离内的 320,000 多张图像和 100,000 个激光扫描。对静态和动态 3D 场景元素进行了粗略的边界框注释，并将这些信息转移到图像域，从而为 3D 点云和 2D 图像提供了密集的语义和实例注释。",
                tags: ["图像", "点云数据"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "YouTube-8M视频数据集",
                description: "YouTube - 8M 是用于视频相关研究的 YouTube 视频数据集。YouTube-8M 是一个大型标注视频数据集，包含数百万个 YouTube 视频 ID，具有高质量的机器生成注释，涵盖 3800 多个视觉实体。",
                tags: ["视频"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Caltech-UCSD Birds-200-2011",
                description: "Caltech - UCSD Birds - 200 - 2011 是用于鸟类识别的图像数据集。加州理工学院-加州大学圣地亚哥分校鸟类-200-2011 (CUB-200-2011) 是 CUB-200 数据集的扩展版本，每个类别的图像数量大约增加了一倍，并新增了部分位置注释。类别数量：200；图像数量：11,788；每张图像的注释：15 个部分位置，312 个二元属性，1 个边界框。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Caltech Camera Traps",
                description: "Caltech Camera Traps 是用于动物监测的图像数据集。这个数据集包含来自美国西南部 140 个摄像头位置的 243,100 张图像，其中包含 21 个动物类别的标签（包括空标签），主要是在物种级别（例如，最常见的标签是负鼠、浣熊和郊狼），以及大约 66,000 个边界框注释。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Caltech 10k Web Faces",
                description: "Caltech 10k Web Faces 是用于人脸识别的人脸图像数据集。该数据集包含通过在 Google 图像搜索中输入常见姓名从网上收集的人像图像，共包括10,524 张不同分辨率和不同场景的人脸图像。图像的平均分辨率为 304x312 像素。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Caltech Pedestrians",
                description: "Caltech Pedestrians 是用于行人检测的图像数据集。该数据集包含从移动车辆录制的丰富的注释视频，具有低分辨率和被遮挡的人物的挑战性图像。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Places2数据集",
                description: "Places2 是用于场景分类的图像数据集。Places 数据集包含超过 1000 万张图像，涵盖 400 多个独特的场景类别。该数据集每个类别的训练图像数量为 5000 到 30000 张，与现实世界中的出现频率一致。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Omniglot数据集",
                description: "Omniglot 是用于少样本学习的手写字符图像数据集。含1623个手写字符类别，用于小样本学习和字符识别研究。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "SVHN街景门牌号数据集",
                description: "SVHN 是用于数字识别的街景门牌号图像数据集。SVHN 是一个真实世界的图像数据集，用于开发机器学习和目标识别算法，对数据预处理和格式化的要求最低。它与 MNIST 类似（例如，图像是小的裁剪数字），但包含更多的标注数据（超过 600,000 张数字图像），并且来自一个更难解决的真实世界问题（在自然场景图像中识别数字和数字）。SVHN 从 Google Street View 图像的房屋编号中获取。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "FER2013面部表情数据集",
                description: "FER2013 是用于面部表情识别的图像数据集。含35,887张人脸图像及7种表情标注，用于面部表情识别研究。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "UCF101动作识别数据集",
                description: "UCF101 是用于动作识别的视频数据集。含13,320个视频，涵盖101类动作，用于动作识别和行为分析研究。",
                tags: ["视频"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "UCF50动作识别数据集",
                description: "UCF50 是用于动作识别的视频数据集。UCF50是一个包含50个动作类别的动作识别数据集，由从YouTube上采集的真实视频组成。该数据集是YouTube动作数据集（UCF11）的扩展，UCF11包含11个动作类别。",
                tags: ["视频"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "UCF Sports Action Data Set",
                description: "UCF Sports Action Data Set 是用于体育动作分析的视频数据集。UCF Sports数据集包含从各种体育运动中收集的一系列动作，这些动作通常出现在BBC和ESPN等广播电视台上。视频序列是从BBC Motion Gallery和GettyImages等广泛的库存视频网站上获得的。",
                tags: ["视频"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "UCF-ARG Data Set",
                description: "UCF - ARG Data Set 是用于动作关系分析的视频数据集。UCF-ARG数据集是一个多视角人体动作数据集。UCF-ARG 由 12 名演员执行的 10 个动作组成，这些动作由地面摄像机、100 英尺高的屋顶摄像机和安装在 13 英尺长的金枪鱼气球（Kingfisher Aerostat）氦气球载荷平台上的空中摄像机录制。",
                tags: ["视频"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "UCF-iPhone Data Set",
                description: "UCF - iPhone Data Set 是用 iPhone 拍摄的用于动作识别的视频数据集。使用苹果iPhone 4智能手机的惯性测量单元（IMU）记录受试者的有氧运动。IMU包括3D加速度计、陀螺仪和磁力计。每个样本以60Hz采样，然后手动修剪为500个样本（8.33秒），以消除开始和停止运动。",
                tags: ["视频"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Crowd Counting Data Set",
                description: "Crowd Counting Data Set 是用于人群计数的图像数据集。这个数据集包含极其密集的人群图像。这些图像主要从FLICKR收集。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "UCF-QNRF",
                description: "UCF - QNRF 是用于人群密度估计的图像数据集。该数据集用于训练和评估人群计数和定位方法。它包含1535张图像，分为1201张训练图像和334张测试图像。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "PNNL_Parking lot",
                description: "PNNL_Parking lot 是用于停车场管理的图像数据集。PNNL_Parking lot 1 序列是一个相对拥挤的场景，包括成群的行人排队行走。该序列由 1000 帧相对拥挤的场景组成，最多有 14 个行人。该数据集的帧分辨率为 1920 X 1080，帧率为 29 fps。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Google Street View",
                description: "Google Street View 是谷歌街景图像数据集，用于多领域研究。Google 街景数据集包含 62,058 张高质量的 Google 街景图像。图像覆盖了宾夕法尼亚州匹兹堡市中心和周边地区；佛罗里达州奥兰多市和纽约市曼哈顿部分地区。同时，数据集也提供了图像的准确 GPS 坐标和罗盘方向。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "HMDB51动作识别数据集",
                description: "HMDB51 是用于动作识别的视频数据集。含6,766个视频，涵盖51类动作，用于动作识别算法评估。",
                tags: ["视频"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "BioASQ数据集",
                description: "BioASQ 是用于生物医学领域的文本数据集。用于生物医学问答系统研究，含大量医学问题和答案。",
                tags: ["文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "MS MARCO",
                description: "MS MARCO 是自然语言处理领域用于模型训练和评估的大规模多任务文本数据集。微软发布的用于机器阅读理解和信息检索的数据集，包含大量问题、答案和文档。",
                tags: ["文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "SQuAD（Stanford Question Answering Dataset）",
                description: "SQuAD 是推动机器阅读理解发展的大规模高质量文本数据集。斯坦福问答数据集（SQuAD）是一个阅读理解数据集，由众包工作者在维基百科文章上提出问题，每个问题的答案都是对应阅读段落中的一段文本，或者问题可能无法回答。SQuAD2.0 将 SQuAD1.1 中的 100,000 个问题与超过 50,000 个由众包工人以对抗性方式编写的无法回答的问题结合起来，这些无法回答的问题看起来与可回答的问题相似。",
                tags: ["文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "CNN & Daily Mail",
                description: "CNN & Daily Mail 是用于文本摘要研究的新闻文章数据集。赫尔曼等人（2015）使用新闻文章创建了两个数据集，用于问答研究。每个数据集包含许多文档（两个数据集分别包含90,000和197,000个文档），每个文档平均包含4个问题。每个问题都是一个句子，其中缺少一个单词/短语，可以从伴随的文档/上下文中找到。",
                tags: ["文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Tatoeba多语言平行语料库",
                description: "Tatoeba 是促进语言学习和文化交流的多语言平行语料库。Tatoeba是一个保存海量句子和译文的数据库，包含多种语言的句子及其翻译，用于多语言学习和翻译研究。",
                tags: ["多语言文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Europarl平行语料库",
                description: "欧盟议会多语言平行文本的机器翻译素材。含欧盟议会会议记录的多语言平行文本，用于机器翻译训练。",
                tags: ["多语言文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Gigaword语料库",
                description: "语言数据联盟的新闻稿文本综合档案。English Gigaword 第五版是语言数据联盟（LDC）多年来收集的新闻稿文本数据的综合档案。第五版包括英语 Gigaword 第四版（LDC2009T13）的所有内容，以及涵盖 2009 年 1 月至 2010 年 12 月 24 个月的新数据。",
                tags: ["文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "ACL Anthology",
                description: "收纳计算语言学等研究论文的数据集。ACL Anthology目前收录了105850篇关于计算语言学和自然语言处理的研究论文，用于自然语言处理领域的研究和分析。",
                tags: ["文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "TREC数据集",
                description: "文本检索会议产生的多用途数据集。TREC即The Text Retrieval Conference。在过去的三十多年里，TREC 已经产生了数十个数据集，并为其开发了测量过程和工具。",
                tags: ["文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Labelme",
                description: "带注释的用于图像研究的数据集。带注释的大型图像数据集。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "CLEVR",
                description: "一个合成的图像问答数据集，专注于测试模型的推理能力，如计数、比较、逻辑关系等。CLEVR数据集是一个诊断数据集，该数据集包含测试一系列视觉推理能力。它包含最小的偏差，并且具有详细的描述每个问题所需的推理类型的注释。可以使用此数据集来分析各种现代视觉推理系统，提供对其能力和限制。",
                tags: ["诊断"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Visual Genome",
                description: "Visual Genome 是一个数据集、一个知识库，是将结构化图像概念与语言联系起来的持续努力。Visual Genome收集了每张图像中物体、属性和关系的密集注释。具体来说，该数据集包含超过108,000张图像，每张图像平均包含35个物体，26个属性，以及21个物体之间的成对关系。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Pangea",
                description: "Pangea是支持39种语言的完全开放多语言多模态大语言模型，包含与其相关的数据集。Pangea-7B，这是一种完全开放的多语言多模态语言模型 （MLLM），旨在弥合视觉理解任务中的多语言和多文化差距。 Pangea-7B 在 PangeaIns 上进行训练，PangeaIns 是一个跨越 39 种语言的多样化 6M 指令数据集。 Pangea-7B 在 PangeaBench 上进行评估，PangeaBench 是一个整体评估套件，包含 14 个数据集，涵盖 47 种语言。",
                tags: ["多语言多模态"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "MultiCaRe",
                description: "MultiCaRe数据集是一个开源临床病例数据集，用于医学图像分类和多模态 AI 应用程序。该数据集包含了来自超过75,000份开放获取且去标识化的病例报告的多模态数据，包括元数据、临床案例、图像说明以及超过130,000张图像。这些图像和临床案例涵盖了不同的医学专业领域，如肿瘤学、心脏病学、外科和病理学。数据集的结构使得图像与其对应的文章元数据、临床案例、说明和图像标签能够轻松映射。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Touch-Vision-Language Dataset",
                description: "触觉视觉语言 （TVL） 数据集，它将成对的触觉和视觉观察与人工注释和 VLM 生成的触觉语义标签相结合。作者使用手持式 3D 打印采集设备收集数据。 使用 DIGIT 传感器收集触觉数据：一种紧凑的开源触觉传感器，以可变形内表面的 RGB 图像形式提供观察结果。 图像数据来自 Logitech BRIO 网络摄像头，其位置使触觉传感器和接触点在其视野内。 然后，对收集的数据进行时间同步，并用触觉的语言描述进行标记，以生成对齐的触觉-视觉-语言示例数据集。",
                tags: ["触觉", "视觉"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "WIT 多模态(Multimodal)",
                description: "基于 Wikipedia 的图像文本 （WIT） 数据集是一个大型多模态数据集多语言数据集。WIT 由一组精选的3760万个实体组成 丰富的图像文本示例，在108个维基百科中具有1150 万张唯一图像语言。它的大小使 WIT 可以用作 多模态机器学习模型。",
                tags: ["图像", "文本"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "悟空数据集",
                description: "Noah-Wukong 数据集是一个大规模的多模态中文数据集。数据集包含 1 亿<图像、文本>对，数据集中的图像根据大小（两个尺寸> 200px）和纵横比（1/3 ~ 3）进行过滤，数据集中的文本根据其语言、长度和频率进行筛选，隐私和敏感词也被考虑在内。",
                tags: ["多模态"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "MINT-1T",
                description: "MINT-1T 是一个开源的M终极模态INTerleaved 数据集。MINT-1T 是一个开源的 M终极模态 INTerleaved 数据集，具有 1 万亿个文本标记和34亿张图像，比现有开源数据集扩展了约10倍。",
                tags: ["M终极"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "WuDaoCorpora Text文本预训练数据集",
                description: "WuDaoCorpora是北京智源人工智能研究院（智源研究院）构建的大规模、高质量数据集，用于支撑大模型训练研究。该数据集目前由文本、对话、图文对、视频文本对四部分组成，分别致力于构建微型语言世界、提炼对话核心规律、打破图文模态壁垒、建立视频文字关联，为大模型训练提供坚实的数据支撑。自2021年3月20日WuDaoCorpora首次发布后，获业界瞩目。目前已有450+'产、学、研'单位的研发团队下载使用。",
                tags: ["大模型"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Conceptual Captions",
                description: "Conceptual Captions 包含设计的 （image-URL，caption） 对用于机器学习图像描述系统的训练和评估。谷歌的概念描述数据集则拥有超过300万张图像，每张图像都配有自然语言描述。Conceptual Captions中的图像及其原始描述是从网络上收集的，因此代表了更广泛的风格多样性。这些原始描述来源于与网络图像关联的Alt-text HTML属性。",
                tags: ["自然语言"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "SBU Captions Dataset",
                description: "一种用于进行自动图像描述的大规模带标题照片数据集。一种利用大规模带标题照片集进行自动图像描述的方法。其中一项贡献在于为自动收集这一新数据集所采用的技术——通过执行大量Flickr查询，随后将杂乱无章的结果筛选至包含100万张图像及其视觉相关标题的集合。这样的数据集使我们能够采用相对简单的非参数方法，应对极具挑战性的描述生成问题，并取得了令人惊讶的有效成果。",
                tags: ["图像"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "MiniGPT-4",
                description: "一个高质量的图文对数据集。用于MiniGPT-4模型的第二阶段微调，包含高质量的图文对数据。",
                tags: ["图文"],
                category: "ai",
                accessLink: "#"
            },
            {
                name: "Ego-Exo4D",
                description: "Ego-Exo4D是三种精心同步的自然与视频配对的语言数据集。Ego-Exo4D 呈现三种精心同步的自然 与视频配对的语言数据集。（1） 专家评论， 揭示细微的技能。（2） 参与者提供 Narrate-and-act 描述。(3) 支持浏览的一句话原子作描述， 挖掘数据集，并解决 视频语言学习。",
                tags: ["语言"],
                category: "ai",
                accessLink: "#"
            },
            
            // 材料领域数据集
            {
                name: "Materials Project",
                description: "无机材料研究支持的数据集。由加州大学伯克利分校和麻省理工学院发起，涵盖超过12万种无机材料。支持材料检索、电池材料分析、晶体结构预测等。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "ChemNLP",
                description: "材料化学文本挖掘设计数据集。基于自然语言处理（NLP）的材料化学文本数据库。 整合了arXiv和PubChem数据集，适用于文本挖掘和材料设计。",
                tags: ["化学文本"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "NIST Chemistry WebBook",
                description: "美研究院化合物热化学数据集。由美国国家标准与技术研究院（NIST）开发，提供超过7000种有机小分子和无机化合物的热化学数据。支持化合物检索、热化学数据查询等。",
                tags: ["化学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "PubChem",
                description: "美 NCBI 维护的化合物数据库集。由美国国家生物技术信息中心（NCBI）维护，涵盖超过1亿种化合物的化学数据。提供化合物的物性、毒性、光谱数据等。",
                tags: ["化学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "SDBS光谱数据库",
                description: "日有机化合物光谱数据集。由日本国家高等工业科学与技术研究院建立，专注于有机化合物的光谱数据。 支持化合物光谱数据的检索和下载。",
                tags: ["化学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "OrChem",
                description: "Oracle 开源化学搜索数据集。Oracle的开源化学搜索引擎，支持化学结构的注册、索引和快速子结构搜索。 基于化学开发工具包（CDK），支持相似性搜索和子结构验证。 (from 2009)",
                tags: ["化学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "CCCBDB",
                description: "NIST 的量子化学基准数据集。由NIST开发，提供量子化学计算结果的比较和基准数据。支持分子属性计算结果的对比和分析。",
                tags: ["化学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Open Catalyst Project",
                description: "Meta 的催化剂研究开源数据集。由 Meta 发布的开源数据库，旨在加速催化剂的发现和开发。包含了超过 140 万个催化剂-吸附物反应的密度泛函理论 (DFT) 计算结果。不仅提供 DFT 计算数据，还提供了一些用于机器学习模型训练和评估的工具，例如数据预处理工具、模型评估指标等",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Atomly",
                description: "中国免费的材料计算数据集。中国首个世界级材料计算数据库，数据质量、数量达标世界级数据库，对我国用户全免费开放。包含 14 万 + 无机晶体材料、14 万 + 能带和 DOS 等数据。快捷搜索 & 可视化晶体结构、高计算精度及物性推演、键能、形成能、热力学稳定性、XRD、化学反应能、磁性、电子结构信息、用户提交结构计算、新材料不断扩充等。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "MatAi",
                description: "国内金属材料性能数据集。国内最大、全球领先的金属材料牌号标准性能数据库，汇集全球 22 个国家，超过 80 类标准体系的 20 万种金属材料性能参考数据。还涵盖晶体结构、相图等数据。材料数据管理、分析和应用，数据采集、检索、筛选与可视化，实验室智能管理，材料知识系统等。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "晓材 Matmole",
                description: "专业材料科学大数据集。专业的全球材料科学大数据平台，将材料科学领域专业知识与大数据技术深度结合，数据体量达 150 万条。金属材料、纳米材料、焊接材料、相图、材料性能、材料腐蚀等数据库的多维度检索和可视化展示。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "MatWeb",
                description: "免费材料性能数据输出集。免费公开的材料数据库，拥有超过 14 万种材料的性能数据，涵盖金属、塑料、陶瓷和化合物。材料物化性质、牌号等数据的检索，还具备 ANSYS、Solid Works 等 CAD / CAM 软件的数据输出功能。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "MatNavi",
                description: "日本助力新材料的数据集。由日本国立材料科学研究院组建，涵盖多种材料数据库，助力新材料的开发与选材。提供金属、无机非金属、高分子、超导等材料相图、性能等数据的检索，还提供复合材料设计与性能预测系统等应用程序。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Total Materia",
                description: "全球金属材料性能数据集。全球最大的金属材料数据库之一，收录了超过 74 个国家及国际标准和 700 个生厂商的大约 35 万种金属材料和 10 万种非金属材料的超 1000 万条性能数据。材料性能数据的检索和图表查看等。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Springer Materials",
                description: "材料性质数值型数据集。全球最大的关于材料性质的高质量数值型数据库之一，提供 290000 余种材料和 3000 余种性质的相关信息。材料相图、物化性质、晶体结构等数据的检索和分析。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "AFLOW",
                description: "自动化材料计算发现数据集。自动化材料发现平台。高通量材料计算与发现。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Nomad CoE Database",
                description: "开源材料性质检索数据集。开源材料科学数据平台。材料性质数据检索。",
                tags: [],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "OQMD",
                description: "开放量子材料计算数据集。开放量子材料数据库。第一性原理计算数据。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "LIQCRYST",
                description: "热致液晶生命周期数据集。LIQCRYST是热致液晶的数据库，包含约600个LCI数据集，涵盖关键材料和化学品、能源载体、运输和废物管理等领域。提供液晶材料的LCI数据，支持生命周期评估（LCA）研究。",
                tags: ["材料科学", "化学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Zemax玻璃库",
                description: "Zemax 中的光学材料数据集。集成在Zemax光学设计软件中的资源，为光学设计师提供了一个全面的光学材料数据库。包含了折射率、阿贝数、色散曲线、透射率等重要光学参数，以及玻璃的机械和热特性数据。设计师可以通过直观的界面快速检索所需材料，并可以对材料性能进行比较分析。还具有高度的灵活性，允许用户添加自定义材料。",
                tags: ["光学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "肖特光学玻璃数据库",
                description: "肖特公司的玻璃数据集。肖特公司提供的光学玻璃数据表和下载资源。提供光学玻璃的详细数据表，包括折射率、阿贝数、透射率等光学参数，以及玻璃的机械和热特性数据。数据表以PDF和Excel格式提供，方便用户下载和使用。",
                tags: ["光学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "UCI Machine Learning Repository: Glass Identification",
                description: "用于玻璃分类的样本数据集。该数据集包含214个玻璃样本的化学成分和类型信息，用于玻璃类型的分类任务。数据集包含214个样本，每个样本有9个特征属性，涵盖了玻璃的主要化学成分，还提供了每个样本的分类标签，用于区分玻璃的类型，如建筑玻璃、车辆玻璃等。",
                tags: ["玻璃分类"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "SciGlass",
                description: "开源玻璃性质计算数据集。开源玻璃性质数据及其计算的国际标准数据库。提供玻璃的物理和化学性质数据，以及相关的计算工具。",
                tags: ["材料科学", "光学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "ICSD",
                description: "无机晶体结构数据集。无机晶体数据库。提供无机晶体结构数据。",
                tags: ["晶体学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "CCDC",
                description: "有机无机晶体检索数据集。剑桥晶体数据库。有机无机化合物晶体结构数据检索。",
                tags: ["晶体学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "COD",
                description: "开放晶体结构共享数据集。开放晶体结构数据库。晶体结构数据共享。",
                tags: ["晶体学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "NREL Materials Database",
                description: "NREL Materials Database 是专注于可再生能源材料的数据检索库，助力相关领域研究与应用。可再生能源材料数据库。能源材料数据检索。",
                tags: ["实验数据", "计算数据"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "AMCSD",
                description: "AMCSD 是受专业协会监管，集多期刊数据，且具交互功能的矿物质晶体结构数据库。美国矿物质晶体数据库。矿物质晶体结构数据。",
                tags: ["晶体结构数据"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "NIMS",
                description: "蠕变、腐蚀、疲劳及宇宙用材料强度数据集。NIMS数据库由日本国立材料研究所开发，专注于材料科学数据包含蠕变、腐蚀、疲劳及宇宙用材料强度数据等实验数据。支持材料科学研究、设备强度设计及材料寿命评估。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "材料基因工程数据库",
                description: "材料数据挖掘系统及数据集。由北京科技大学开发及维护, 提供材料数据挖掘系统及相关软件工具, 高通量第一性原理, 材料设计工具 及高通量实验数据处理软件包等。",
                tags: ["材料数据"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "MatMind",
                description: "结构数据大模型和材料数据集。由中国科学院硅酸盐研究所开发，提供超过1000万篇论文, 150万篇专利及20个科学结构数据的材料及科学工程大模型。支持数据库(数据收集), 智能体 (机器学习算法、细分领域模型、智能计算、智能实验) 及 科研助手(文献阅读) 等功能。",
                tags: ["结构数据"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "钙钛矿大模型",
                description: "钙钛矿材料大模型及数据集。由香港科技大学(广州)开发，自动化知识图谱构建工从大量科学文献中提取实体和关系,结构化的知识图谱。",
                tags: ["材料大模型"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "MatChat AI",
                description: "材料科学AI智能体及材料数据集。由松山湖材料实验室开发，专注于材料科学AI智能体。 基于28万+专业论文的智能问答引擎.",
                tags: ["AI智能体"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "MatPilot",
                description: "自然语言交互式人机协作材料预测模型及数据集。由国防科技大学开发, MatPilot的自然语言交互式人机协作，结合人类独特的认知能力和经验和，与AI智能体的高级抽象、复杂知识存储和高维信息处理能力。生成科学的假设和实验方案，并使用预测模型和优化算法, 驱动自动化实验平台进行实验。",
                tags: ["材料预测模型"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "MatterGen",
                description: "无机材料的生成模型及数据集。由微软人工智能科学研究院发起, MatterGen是一个跨周期表设计无机材料的生成模型，可以微调以引导生成广泛的属性约束。专为无机材料设计的生成式 AI模型，能够在元素周期表范围内生成高稳定性、多样化的材料，并支持微调以满足特定的化学、电子、磁性和机械性能需求。",
                tags: ["无机材料"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Darwin",
                description: "自然语言模型材料性能高效预测模型及数据集。由澳州新南威尔斯AI4Science团队及GreenDynamicsAI团队开发,Darwin致力于在科学文献和数据集上对LLaMA模型进行预训练和微调，采用自然语言指令输入材料信息，增强任务整合与实验适用性，仅凭化学成分即可高效预测, 在带隙预测上超越 PBE、HSE 等计算方法适用于高通量筛选。预训练增强机制进一步优化分类与回归任务表现。",
                tags: ["材料性能"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Open Materials 2024 (OMat24)",
                description: "材料基态稳定性数据集。由Meta公司负责开发，能预测材料基态稳定性。对非平衡结构的处理能力,预测在动力学和远离平衡的材料特性, 如新材料的稳定性。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "DeepH",
                description: "材料密度泛函理论数据集。由清华大学物理系开发，DeepH-pack将深度神经网络应用于基于局部坐标和基变换的密度泛函理论（DFT）哈密顿矩阵预测的软件包。支持ABACUS、OpenMX、FHI-aims或SISTA做出的DFT结果。",
                tags: ["材料密度"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "OpenDFM",
                description: "化学材料开源对话大模型。由苏州实验室建立，提供多个工具包括化学和分子科学的开源对话基础模型ChemDFM 。",
                tags: ["化学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "ChemLLM-7B-Chat",
                description: "化学和分子科学语言模型及数据集。由上海人工智能实验室开发,基于InternLM-2构建的第一个化学和分子科学的开源大型语言模型。从公开资料收集大量化学数据, 覆盖多种任务。ternLM-2构建的第一个化学和分子科学的开源大型语言模型。从公开资料收集大量化学数据, 覆盖多种任务.",
                tags: ["分子科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "DPA-2",
                description: "大型原子模型数据集。由北京智能科学研究院开发, 提供大型原子模型的多任务学习器. 提供材料数据挖掘系统, 高通量第一性原理, 材料设计工具 及高通量实验数据处理软件包等",
                tags: ["原子模型"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Materials Discovery: GNoME",
                description: "无机晶体数据集数据集。由Google Deepmind开发。GNoME分享381,000种新型稳定材料的发现，总共有超过52万种材料。已成功预测 220 万种晶体结构，其中 38 万种被认为稳定。其主动学习机制结合 DFT计算，不断优化模型，使预测准确率从50% 提升至 80%。",
                tags: ["无机晶体"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "白玉兰科学大模型",
                description: "化学合成数据集。由上海白玉兰开源开放研究院开发，化学合成（BAI-Chem）依托于大模型训练技术，利用生成式人工智能技术赋能化学合成研究，是首个具备反应条件生成与'人在环路'反馈优化能力的化学大模型，加速从分子设计、反应设计、到条件生成、反应检验等化学合成全链条。",
                tags: ["化学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "polyBERT",
                description: "聚合物属性数据集。由美国佐治亚理工学院Ramprasad课题组组建立，polyBERT通过 PSMILES（聚合物 SMILES）字符串学习聚合物的化学特性，实现端到端的机器驱动筛选，大幅提升自动化程度和计算效率。该模型可预测 36 种关键聚合物属性，涵盖机械、热学、电学等 性能，并在超过1亿个假设聚合物数据集上训练。",
                tags: ["化学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "MatSciBERT",
                description: "化学成分、晶体结构及实验方法数据集。由印度理工学院开发, MatSciBERT 是一种专为材料科学领域设计的预训练语言模型。MatSciBERT 能够精准识别化学成分、晶体结构、实验方法等材料科学领域的相关信息，并能自动归类论文，从而显着提高信息检索和数据管理的效率 。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "A-Lab",
                description: "材料合成, 表征及分析数据集。由美国加州大学伯克利分校Ceder团队开发, （A-Lab）通过（1）合成实验和表征过程的机器人执行，（2）表征数据的机器学习解释，（3）人工智能支持的决策的自动化来加速材料设计和开发的工具 。",
                tags: ["材料合成"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Uni-Mol",
                description: "材料性质数据集。Uni-Mol是由深势科技开发的第一个通用的大规模三维分子表示学习（MRL）框架。可以预测材料的性质，例如MOF材料的气体吸附性能和OLED分子的光学性质。",
                tags: ["材料性质"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "M3GNet",
                description: "材料图神经网络架构IAP及数据集。由美国加州大学圣地亚哥分校开发，M3GNet是一种新的材料图神经网络架构IAP，融合了三体交互。可通过对在材料项目中执行的松弛进行训练，在整个元素周期表中工作。M3GNet可以用于开发属性预测的代理模型。",
                tags: ["神经网络"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "AtomWork-Adv",
                description: "无机材料数据集。AtomWork-Adv无机材料数据集由日本NIMS开发,包含从科学文献中提取的无机材料的晶体结构、X射线衍射、性质和状态图数据的数据库。",
                tags: ["无机材料"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Jarvis",
                description: "材料计算模拟数据集。JARVIS由美国国家标准与技术研究院（NIST）开发，专注于材料科学的计算模拟数据，提供结构、电子、光学、热力学等丰富的材料属性数据。",
                tags: ["材料计算"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "mpds",
                description: "综合性材料数据集。MPDS 是一个综合性的材料数据库支持材料科学研究、数据分析及模型开发，助力高性能计算领域。收录近两百万条记录：物理性质、晶体结构、相图等信息",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Alexandria",
                description: "晶体及钙钛矿数据集。Alexandria由德国鲁尔大学波鸿分校（RUB）维护，提供材料科学数据和工具，与AiiDA平台集成，支持工作流程管理和数据溯源。支持高性能计算和数据驱动的材料科学研究与模型开发。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Materials Cloud",
                description: "三维晶体数据库。Materials Cloud由瑞士联邦理工学院（EPFL）维护，提供材料科学数据和工具，与AiiDA平台集成，支持工作流程管理和数据溯源。三维晶体数据库（MC3D）收录了数万种已知无机化合物的实验晶体结构及其计算性质（如电子结构、热力学参数），用于高通量筛选 。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Pymatgen (Python Material Genomics)",
                description: "材料分析Python数据集。美国加州大学圣地亚哥分校的Shyue Ping Ong教授团队开发， 开源Python数据库用于材料分析，并提到其主要功能包括元素、站点、分子和结构对象的表示类。广泛的输入/输出支持，包括对VASP、ABINIT、CIF、Gaussian、XYZ和许多其他文件格式的支持。",
                tags: ["材料科学", "Python"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "LAMMPS",
                description: "原子/分子动力学模拟数据集。LAMMPS由Sandia Corporation开发,用于经典分子动力学模拟的软件包。LAMMPS采用了并行计算技术，旨在在大规模并行计算机上高效运行。",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "ChemCrow",
                description: "有机合成、药物发现和材料设计数据集。由洛桑联邦理工学院（EPFL）和罗切斯特大学的研究人员共同开发，旨在完成有机合成、材料设计等任务 。通过整合13种专家设计的工具，提升了 LLM 在化学领域的表现.",
                tags: ["材料科学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "PubChem",
                description: "化合物性质数据集。PubChem 是由美国国家生物技术信息中心（NCBI）维护的全球最大免费化学信息数据库之一，旨在整合化学物质、生物活性及相关文献数据，支持药物发现、材料科学和基础化学。",
                tags: ["化合物性质"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "摩熵化学MolAid",
                description: "化学材料数据集。摩熵化学是由摩熵数科与碳氢数科（成都）合作推出的，平台整合了大量化学数据，包括化合物、反应、谱图等信息，目的是为新材料等领域提供数据支持.",
                tags: ["化学材料"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Molbase",
                description: "化合物中间体数据集。Molbase 是服务于中科院的研究型数据平台。其商用版网站摩贝（MOLBASE.cn）于2013年9月上线，Molbase 目前已收录了1400万种化合物中间体的详细信息， 並提供定制化的数据服务。",
                tags: ["化合物中间体"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Promethium",
                description: "无机材料的生成模型及数据集。量子化学SaaS平台（支持GPU加速计算）材料量子计算模拟。其核心数据集来源于高精度量子化学计算,能够生成大规模、高保真度的分子和材料特性数据。涵盖分子轨道、能量势垒、电子结构等关键参数，专门用于材料科学和化学反应模拟等。",
                tags: ["无机材料"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "ICSD",
                description: "无机晶体及层状材料数据集。由德国Leibniz研究所团队开发, 21万+无机晶体结构数据，含层状材料（如石墨烯、hBN）的实验表征结果。",
                tags: ["无机晶体", "层状材料"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "范德华挤压二维金属数据",
                description: "二维金属数据集。由中科院物理所开发，提供的铋、锡、铅、铟、镓等二维金属的制备工艺、电学及稳定性数据。",
                tags: ["二维金属"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "OCx24",
                description: "Meta OCx24催化剂数据集。Meta与多伦多大学和VSParticle的合作开放催化剂项目，旨在使用AI建模和发现新的催化剂。数据集共有525种催化剂，6.85亿次AI模拟分析，包含电催化剂（CO2RR、HER等）的合成、表征与测试数据。",
                tags: ["催化剂"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "NIST纳米材料数据库",
                description: "纳米材料数据集。美国国家标准与技术局(NIST)物性数据库。覆盖纳米颗粒尺寸、毒性、光学/电学性能等标准数据 。覆盖多种常见纳米材料（如TiO2、Ag NPs），实验测量与标准化测试（SEM/TEM、DLS等）",
                tags: ["纳米材料"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "MGED",
                description: "材料基因工程数据库。由北京科技大学负责建设，基于材料基因工程的思想和理念开发。除数据库外,平台还拥有第一原理在线计算引擎、原子势函数库、在线数据挖掘系统等众多功能以核材料、特种合金、催化材料和能源材料为主.",
                tags: ["材料基因"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "ASM International数据库",
                description: "合金相图数据集。由 ASM International（美国材料信息学会） 维护,涵盖聚合物基复合材料的相平衡数据。包含来自 9,000个合金体系 的 40,300个二元和三元合金相图，覆盖金属材料的主要组合形式（如铁基、铝基、钛基等）",
                tags: ["合金相图"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "ANSYS",
                description: "材料信息资源数据集。Ansys Granta 材料数据库起源于Granta Design(剑桥大学的分支机构),于2016年被被Ansys收购。包含聚合物、复合材料等数据，支持材料选择与仿真分析。旨在帮助工程师和材料科学家进行材料选择和优化。",
                tags: ["材料信息"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "CAMPUS",
                description: "CAMPUS 塑料数据集。全称为Computer Aided Material Preselection by Uniform Standards, 是国际领先的塑料材料数据系统.由欧洲塑料供应商与标准化组织合作开发，提供塑料产品的详细物性数据，适用于材料选择与对比。.",
                tags: ["塑料"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "PLGA",
                description: "PLGA 微颗粒数据集。多伦多大学发布的PLGA微颗粒释放数据，相关数据集主要由文献整理构建，包含321个实验数据点。",
                tags: ["微颗粒"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "聚合物生物降解数据集",
                description: "聚合物生物降解数据集。由美国MIT Olesn团队开發,旨在帮助确定聚合物是否可生物降解。该数据集通过高通量聚合物合成和高通量聚合物生物降解方法生成，涵盖了642种化学上不同的聚酯和聚碳酸酯的生物降解数据.",
                tags: ["生物降解"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "RESSET",
                description: "建筑建材数据集。Resset是注于建筑与建材行业的专业数据平台。包含超过 14,000条建筑建材行业专属指标，涵盖水泥、玻璃、陶瓷、钢材、木材等关键材料.",
                tags: ["建筑建材"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "USPTO",
                description: "化学反应数据集。Daniel Lowe 的美国专利 (1976-Sep2016) 中化学反应的子集和预处理版本。它包括 50K 随机选择的反应，用于训练和测试预测化学反应的机器学习模型，特别是逆合成预测任务。",
                tags: ["化学反应"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "离子型稀土矿柱浸堆浸数据集",
                description: "柱浸堆浸数据集。由离子型稀土资源与环境重点实验室开发的柱浸堆浸实验数据集. 包含稀土回收率、浸矿剂残留、浸矿液和顶水用量等。",
                tags: ["柱浸堆浸"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "MSI Eureka",
                description: "相图数据集。MSI Eureka 数据集是由 Materials Science Information (MSI) 创建，专注于高质量评价的相图及相关组成数据 。这个数据库自1894年以来收集了62,500个无机材料的相图、相反应及热力学数据，为材料科学、冶金、化学、物理学、工程学等领域的研发提供了优秀的基础科学研究信息。",
                tags: ["相图"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Pauling File",
                description: "无机材料数据集。Pauling File数据集专注于无机材料的相图(包含约66,243个相图)、晶体结构(收录423,749个晶体结构条目)和物理性质数据。",
                tags: ["无机材料"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "药智数据",
                description: "有机合成经典反应数据集。该数据库来源于介绍有机合成经典反应的中/英文资料，并进行了分类加工处理。用户可以通过反应物、生成物的英文名称、反应条件、催化剂等来检索相关反应。数据库还提供化合物的详细合成路线图及相关附件。",
                tags: ["合成化学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Thieme SoS",
                description: "合成化学数据集。由德国Thieme出版社推出的合成化学领域综合数据库。内容涵盖了超过300种从19世纪早期至今的各类有机化学及有机金属化学的合成方法，提供已被验证的制备化合物的详细方法步骤。",
                tags: ["合成化学"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "COCONUT",
                description: "化合物数据库。由由德国耶拿大学的Maria Sorokina和Christoph Steinbeck团队整理，全球最大的开放天然产物数据库，收录超40万种化合物结构及数据。",
                tags: ["化合物"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Uni-Electrolyte",
                description: "电解液数据集。由清华大学陈翔课题组库开发, 基于图论算法构建的大型溶剂分子数据库，包含54种溶剂和17种盐的电解液性能数据（如还原稳定性、LUMO能级）。 结合第一性原理计算与机器学习，揭示离子-溶剂结构的化学规律，支持电解液设计优化",
                tags: ["电解液"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "电解液CE数据集",
                description: "电解液库伦效率(CE)数据集。由斯坦福大学崔屹团队开发, 包含150种Li/Cu电池电解液的库伦效率（CE）数据（80%~99.5%），涵盖普通、高浓度、氟化电解液等。 数据驱动方法预测电解液性能。",
                tags: ["电解液", "库伦效率"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "CALCE",
                description: "电池循环数据集。由马里兰大学先进生命周期工程中心（Center for Advanced Life Cycle Engineering, CALCE）提供，包含了大量有关锂离子电池的实验测试数据。这些数据包括但不限于连续的全循环和部分循环、存储、动态驾驶配置文件、开路电压测量和阻抗测量。电池形式涵盖圆柱形、软包和棱柱形，化学成分包括钴酸锂（LCO）、磷酸铁锂（LFP）和镍钴锰三元材料（NMC）。",
                tags: ["电池循环"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "电解液数据集",
                description: "电解液数据集。由美国阿贡国家实验室开发的公开电解液数据集，含1M水分的LiFSI-PMpipFSI电解液在NMC532/Li电池中的氧化还原稳定性数据。",
                tags: ["电解液"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "SrTiO₃数据集",
                description: "武汉理工大学SrTiO₃数据集。由武汉理工大学开发, 包含200条SrTiO₃掺杂数据（介电常数、损耗与掺杂比例的关系）。 小样本数据集，通过深度学习预测性能，准确率高于传统方法。",
                tags: ["SrTiO₃掺杂数据"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Elastic Tensor数据集",
                description: "弹性常数数据集。Elastic Tensor数据集为Matminer下材料数据挖掘的开源工具包。该数据集包含了超过 1000 种材料的弹性常数数据，可用于训练预测材料弹性性能的回归模型 .",
                tags: ["弹性常数"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "The Perovskite Database",
                description: "钙钛矿器件数据集。由德国Helmholtz Zentrum Berlin实验室开发的钙钛矿器件数据库. 包含包含2020年2月前发表的16,000+篇钙钛矿论文。提供零代码交互工具集，支持：多维数据探索，智能筛选过滤，可视化分析等",
                tags: ["钙钛矿器件"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "SPEAG",
                description: "SPEAG介电材料数据集。由 瑞士Speag 公司开发，专注于高频介电特性（最高至67GHz），包含生物组织、液体及复合材料的宽带介电参数。数据集适用于电磁仿真和射频器件设计。",
                tags: ["SPEAG介电材料"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "AgTlI2导热数据集",
                description: "无机材料导热数据集。由香港大学Zezhu Zeng团队开发的无机晶体导热数据集, 包含多个无机晶体的导热数据,为开发高性能热电材料和隔热材料提供了新思路。",
                tags: ["无机材料", "导热"],
                category: "materials",
                accessLink: "#"
            },
            {
                name: "Starrydata",
                description: "图像和图表数据集。Starrydata是一个开源数据库项目，旨在从已发表论文的图像和图表中提取实验数据，涵盖功能无机材料（如热电材料、磁性材料等）的实验结果。覆盖超过 13,000篇论文的数据来源；包含 82,000余个物理样本的实验数据；提取的曲线数据超过 194,000。",
                tags: ["无机材料"],
                category: "materials",
                accessLink: "#"
            },
            
            // 半导体领域数据集
            {
                name: "MixedWM38",
                description: "混合模式晶圆图缺陷数据集。由Junliangwangdhu开发，混合WM38数据集（WaferMap）有超过38000个晶圆图，包括1个正常图样、8个单一缺陷图样和29个混合缺陷图样，共计38个缺陷图样。用于识别混合模式晶圆图缺陷，并辅助晶圆制造工艺中缺陷成因的研究",
                tags: ["晶圆图缺陷"],
                category: "semiconductor",
                accessLink: "#"
            },
            {
                name: "WM-811K",
                description: "晶圆图缺陷模式识别数据集。台湾元智大学（Chuao University）的研究团队创建，专注于半导体制造领域的缺陷分析研究 。这一数据集由 许多晶圆的缺陷模式组成，其中每个晶圆被标记为正常或存在某种类型的缺陷模式。研究人员和从业者可以利用该数据集来开发和评估机 器学习和深度学习算法α，以自动化地检测和识别晶圆上的缺陷模式。",
                tags: ["晶圆图缺陷"],
                category: "semiconductor",
                accessLink: "#"
            },
            {
                name: "SECOM",
                description: "半导体制造工艺的数据集。由加州大学欧文分校开发，复杂的现代半导体制造工艺通常在通过监测从传感器收集的信号/变量和或过程测量点。然而，并非所有这些信号都具有同等价值在特定的监控系统中。可以应用特征选择来识别最相关信号，工艺工程师可以使用这些信号来确定关键在工艺过程中导致产量偏离的因素。这将提高进程吞吐量，减少学习时间，并减少单位生产成本。",
                tags: ["制造工艺"],
                category: "semiconductor",
                accessLink: "#"
            },
            {
                name: "Real-IAD",
                description: "大规模工业异常检测数据集。由上海交通大学开发的大规模、多视角工业异常检测数据集，用于评估多样化工业异常检测方法。数据集包含30种不同物体的150K高分辨率图像，比现有数据集大一个数量级，具有更大范围的缺陷面积和比例，更具挑战性。还提出了一种新的完全无监督工业异常检测（FUIAD）设置。。",
                tags: ["工业异常检测"],
                category: "semiconductor",
                accessLink: "#"
            },
            {
                name: "The OpenROAD Project",
                description: "开放源代码的布局生成流程（RTL-to-GDS）数据集。由Qualcomm、Arm等共同开发。目标是开发自主开源工具链，专注于数字SoC的布局生成，特别是在RTL到GDSII阶段多种工艺节点（7nm-28nm）设计数据 ,EDA工具验证、芯片布局布线优化等。",
                tags: ["布局生成流程"],
                category: "semiconductor",
                accessLink: "#"
            },
            {
                name: "CHIPQA",
                description: "时空芯片的无参考视频质量评估数据集。由得克萨斯大学奥斯汀分校团队开发, 提出了一种新的无参考视频质量评估（VQA）模型。时空芯片(ST Chips)是沿着隐式捕捉运动的方向的视频数据的局部切割。我们使用感知驱动的带通和归一化模型首先处理视频数据，然后根据它们与自然视频统计的参数模型的拟合程度来选择定向ST芯片。。",
                tags: ["时空芯片"],
                category: "semiconductor",
                accessLink: "#"
            },
            {
                name: "DeepPCB",
                description: "PCB缺陷检测数据集。由上海交通大学图像处理与模式识别研究所创建的首个公开PCB缺陷检测数据集。数据集包含1,500对图像，每对包括一个无缺陷的模板图像和一个测试图像，两者对齐并标注了六种常见缺陷的位置，如开路、短路等。",
                tags: ["PCB缺陷检测"],
                category: "semiconductor",
                accessLink: "#"
            },
            {
                name: "Alldatasheet",
                description: "电子元器件及集成电路数据集。Alldatasheet来源主要包括全球各大电子元器件制造商和供应商，提供IC集成电路、分立器件、传感器、可编程逻辑器件等详细数据手册，支持工程师做出全面而稳定的器件选型决定。",
                tags: ["电子元器件", "集成电路"],
                category: "semiconductor",
                accessLink: "#"
            },
            {
                name: "PDF-4/Axiom 2025",
                description: "化学半导体物相鉴定、晶体结构分析大模型。PDF-4/Axiom 2025是为相位识别和量化而设计的。PDF-4/Axiom提供79,500+条目，其中包含I/Ic值，用于通过参考强度比进行定量相位分析。PDF-4/Axiom可用于常规的相位识别和定量（通过Rietveld和RIR方法）。",
                tags: ["化学半导体", "晶体结构"],
                category: "semiconductor",
                accessLink: "#"
            },
            {
                name: "KROGER",
                description: "晶体缺陷研究数据集。由University of Utah开发,用计算固体中点缺陷完全和部分平衡的程序。目的是扩展缺陷浓度的计算，给定热化学和计算的点缺陷形成能。.",
                tags: ["晶体缺陷"],
                category: "semiconductor",
                accessLink: "#"
            },
            {
                name: "CircuitNET",
                description: "大规模的开源AI4EDA数据集。由北京大学开发, CircuitNET是一个大型开源数据集，10000+样品(14nm 工艺)专门用于芯片设计的电子设计自动化（EDA）中的机器学习（ML）应用。可布线性预测,时序分析,电压降序预测",
                tags: ["开源AI4EDA"],
                category: "semiconductor",
                accessLink: "#"
            },
            {
                name: "Chipgpt-FT",
                description: "框架微调芯片设计数据集。由智源社区开发。通过自动设计数据增强框架微调芯片设计LLM。具200+ EDA脚本及Verilog修复数据",
                tags: ["芯片设计"],
                category: "semiconductor",
                accessLink: "#"
            },
            {
                name: "OpenABC-D",
                description: "逻辑合成数据集。由美国纽约大学开发，OpenABC-D是一个通过合成开源硬件IP生成的大规模标注数据集。含870,000 个 And-Inverter-Graphs (AIG) 用于 机器学习辅助芯片逻辑合成优化.该数据集可用于芯片设计中的各种图级预测问题.",
                tags: ["逻辑合成"],
                category: "semiconductor",
                accessLink: "#"
            },
            {
                name: "NEU-DET钢材表面缺陷数据集",
                description: "钢材表面缺陷的检测与识别数据集。集由东北大学团队制作，专注于钢材表面缺陷的检测与识别。数据集包含了1800张图片，涵盖了六种常见的钢材表面缺陷类型，分别是：1. Crazing（裂纹）2. Inclusion（夹杂物）3. Patches（斑点）4. Pitted Surface（麻面）5. Rolled-in Scale（轧入氧化皮）6. Scratches（划痕）。",
                tags: ["钢材表面缺陷"],
                category: "semiconductor",
                accessLink: "#"
            },
            
            // 其他数据集
            {
                name: "计算机硬件数据集",
                description: "计算机硬件数据集是关于计算机硬件参数和性能的数据集合。相对 CPU 性能数据，以周期时间、内存大小等描述。",
                tags: ["数值"],
                category: "other",
                accessLink: "#"
            },
            {
                name: "Cora数据集",
                description: "Cora 是包含科学论文文本和引用关系的数据集，用于机器学习相关研究。Cora 数据集由 2708 篇科学出版物组成，这些出版物被分类为七个类别之一。引文网络由 5429 个链接组成。数据集中的每篇出版物都由一个 0/1 值的单词向量描述，该向量指示字典中相应单词的缺失/存在。字典由 1433 个唯一单词组成。",
                tags: ["文本", "图像"],
                category: "other",
                accessLink: "#"
            },
            {
                name: "Citeseer数据集",
                description: "Citeseer 是含科学文献文本和引用关系的数据集，用于相关研究。类似Cora，含科学文献及其引用关系。CiteSeer数据集由3312篇科学出版物组成，这些出版物被分类为6个类别之一。引文网络由4732个链接组成。数据集中的每篇出版物都由一个0/1值单词向量描述，该向量指示字典中相应单词的缺失/存在。字典由3703个唯一单词组成。",
                tags: ["文本", "图像"],
                category: "other",
                accessLink: "#"
            },
            {
                name: "Caltech Mouse Social Interactions (CalMS21)",
                description: "Caltech Mouse Social Interactions (CalMS21) 是用于小鼠行为分析的图像数据集。CalMS21是一个来自行为神经科学的多智能体数据集，由社会交互的轨迹数据组成，这些数据是从自由行为小鼠的标准居民入侵实验视频中记录的。该数据集包括600万帧未标记的交互小鼠的跟踪姿势，以及超过100万帧带有跟踪姿势和相应帧级行为注释的帧。",
                tags: ["图像"],
                category: "other",
                accessLink: "#"
            },
            {
                name: "KDD CUP 99 网络入侵检测数据集",
                description: "用于第三届国际知识发现和数据挖掘工具竞赛的数据集，用于网络入侵检测研究。竞赛任务是建立一个网络入侵检测器，即：一个能够区分'坏'连接（称为入侵或攻击）和'好'正常连接的预测模型。该数据集包含一组标准数据，有41个特征和2类标记，涵盖多种网络攻击类型，样本量超490万条。",
                tags: [],
                category: "other",
                accessLink: "#"
            },
            {
                name: "CSE-CIC-IDS2018 数据集",
                description: "针对多种场景，用于网络入侵检测技术研发的数据集。由加拿大网络安全研究所收集，包括七种不同的攻击场景：暴力破解、Heartbleed、僵尸网络、拒绝服务、分布式拒绝服务、Web攻击和从内部入侵网络。用于网络入侵检测系统评估和开发。",
                tags: [],
                category: "other",
                accessLink: "#"
            }
        ];
        
        // 初始化页面
        document.addEventListener('DOMContentLoaded', function() {
            renderCategoryNav();
            renderAllDatasets();
            
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
                        renderAllDatasets();
                    } else {
                        renderDatasetsByCategory(categoryId);
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
                        renderAllDatasets();
                    } else {
                        renderDatasetsByCategory(activeCategory);
                    }
                    document.getElementById('searchResults').textContent = '';
                }
            });
        });
        
        // 渲染分类导航
        function renderCategoryNav() {
            const navContainer = document.getElementById('categoryNav');
            
            // 添加"全部"按钮
            const allButton = document.createElement('button');
            allButton.className = 'category-btn active';
            allButton.setAttribute('data-category', 'all');
            allButton.textContent = '全部';
            navContainer.appendChild(allButton);
            
            // 添加各分类按钮
            categories.forEach(category => {
                const button = document.createElement('button');
                button.className = 'category-btn';
                button.setAttribute('data-category', category.id);
                button.textContent = category.name;
                navContainer.appendChild(button);
            });
        }
        
        // 渲染所有数据集
        function renderAllDatasets() {
            const container = document.getElementById('datasetsContainer');
            container.innerHTML = '';
            
            categories.forEach(category => {
                const categoryDatasets = datasets.filter(dataset => dataset.category === category.id);
                
                if (categoryDatasets.length > 0) {
                    // 添加分类标题
                    const categoryTitle = document.createElement('h2');
                    categoryTitle.className = 'category-title';
                    categoryTitle.textContent = category.name;
                    container.appendChild(categoryTitle);
                    
                    // 添加数据集网格
                    const grid = document.createElement('div');
                    grid.className = 'datasets-grid';
                    
                    categoryDatasets.forEach(dataset => {
                        grid.appendChild(createDatasetCard(dataset));
                    });
                    
                    container.appendChild(grid);
                }
            });
        }
        
        // 按分类渲染数据集
        function renderDatasetsByCategory(categoryId) {
            const container = document.getElementById('datasetsContainer');
            container.innerHTML = '';
            
            const category = categories.find(cat => cat.id === categoryId);
            const categoryDatasets = datasets.filter(dataset => dataset.category === categoryId);
            
            if (categoryDatasets.length > 0) {
                // 添加分类标题
                const categoryTitle = document.createElement('h2');
                categoryTitle.className = 'category-title';
                categoryTitle.textContent = category.name;
                container.appendChild(categoryTitle);
                
                // 添加数据集网格
                const grid = document.createElement('div');
                grid.className = 'datasets-grid';
                
                categoryDatasets.forEach(dataset => {
                    grid.appendChild(createDatasetCard(dataset));
                });
                
                container.appendChild(grid);
            } else {
                container.innerHTML = '<p>该分类下暂无数据集。</p>';
            }
        }
        
        // 创建数据集卡片
        function createDatasetCard(dataset) {
            const card = document.createElement('div');
            card.className = 'dataset-card';
            
            const header = document.createElement('div');
            header.className = 'dataset-header';
            
            const name = document.createElement('h3');
            name.className = 'dataset-name';
            name.textContent = dataset.name;
            
            const description = document.createElement('p');
            description.className = 'dataset-description';
            description.textContent = dataset.description;
            
            header.appendChild(name);
            header.appendChild(description);
            
            const tags = document.createElement('div');
            tags.className = 'dataset-tags';
            
            dataset.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'dataset-tag';
                tagElement.textContent = tag;
                tags.appendChild(tagElement);
            });
            
            const access = document.createElement('div');
            access.className = 'dataset-access';
            
            const accessLink = document.createElement('a');
            accessLink.className = 'access-btn';
            accessLink.href = dataset.accessLink;
            accessLink.textContent = '访问数据集';
            accessLink.target = '_blank';
            
            access.appendChild(accessLink);
            
            card.appendChild(header);
            card.appendChild(tags);
            card.appendChild(access);
            
            return card;
        }
        
        // 执行搜索
        function performSearch(searchTerm) {
            const searchResults = datasets.filter(dataset => {
                // 在名称、描述和标签中搜索
                const nameMatch = dataset.name.toLowerCase().includes(searchTerm);
                const descriptionMatch = dataset.description.toLowerCase().includes(searchTerm);
                const tagsMatch = dataset.tags.some(tag => tag.toLowerCase().includes(searchTerm));
                
                return nameMatch || descriptionMatch || tagsMatch;
            });
            
            // 显示搜索结果
            displaySearchResults(searchResults, searchTerm);
        }
        
        // 显示搜索结果
        function displaySearchResults(results, searchTerm) {
            const container = document.getElementById('datasetsContainer');
            const resultsInfo = document.getElementById('searchResults');
            
            container.innerHTML = '';
            
            if (results.length > 0) {
                resultsInfo.textContent = `找到 ${results.length} 个与 "${searchTerm}" 相关的结果`;
                
                // 按分类分组显示结果
                const resultsByCategory = {};
                
                results.forEach(dataset => {
                    if (!resultsByCategory[dataset.category]) {
                        resultsByCategory[dataset.category] = [];
                    }
                    resultsByCategory[dataset.category].push(dataset);
                });
                
                // 显示每个分类的结果
                Object.keys(resultsByCategory).forEach(categoryId => {
                    const category = categories.find(cat => cat.id === categoryId);
                    const categoryDatasets = resultsByCategory[categoryId];
                    
                    // 添加分类标题
                    const categoryTitle = document.createElement('h2');
                    categoryTitle.className = 'category-title';
                    categoryTitle.textContent = category.name;
                    container.appendChild(categoryTitle);
                    
                    // 添加数据集网格
                    const grid = document.createElement('div');
                    grid.className = 'datasets-grid';
                    
                    categoryDatasets.forEach(dataset => {
                        grid.appendChild(createDatasetCard(dataset));
                    });
                    
                    container.appendChild(grid);
                });
            } else {
                resultsInfo.textContent = `没有找到与 "${searchTerm}" 相关的结果`;
                container.innerHTML = '<div class="no-results">没有找到匹配的数据集，请尝试其他关键词</div>';
            }
        }
    </script>
</body>
</html>
