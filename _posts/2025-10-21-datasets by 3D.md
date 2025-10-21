---
layout: post
title: 3D生成数据集 | 苗佳哲
categories: [数据集]
description: 3D生成数据集
keywords:  
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
topmost: true
---

## 数据集基于文本生成的3D开源数据集

<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D视觉与图像数据集</title>
<script src="https://cdn.tailwindcss.com" defer></script>
<link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet" media="print" onload="this.media='all'">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#3B82F6',
                        secondary: '#10B981',
                        accent: '#8B5CF6',
                        dark: '#1E293B',
                        light: '#F8FAFC'
                    },
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                    },
                }
            }
        }
    </script>
    <style type="text/tailwindcss">
        @layer utilities {
            .card-shadow {
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }
            .card-hover {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .card-hover:hover {
                transform: translateY(-5px);
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
            .gradient-bg {
                background: linear-gradient(135deg, #f6f9fc 0%, #eef2f7 100%);
            }
        }
    </style>
</head>
<body class="gradient-bg min-h-screen">
    <!-- 页面标题 -->
    <header class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-dark mb-4">
                3D视觉与图像数据集
            </h1>
        </div>
    </header>

    <!-- 数据集卡片容器 -->
    <main class="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <!-- Pix3D 卡片 -->
            <div class="bg-white rounded-xl overflow-hidden card-shadow card-hover">
                <div class="bg-primary/10 px-6 py-4 border-b border-primary/20">
                    <h2 class="text-xl font-bold text-dark flex items-center">
                        <i class="fa fa-cube mr-3 text-primary"></i>Pix3D
                    </h2>
                </div>
                <div class="p-6">
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="flex items-center mr-4">
                            <i class="fa fa-university mr-1"></i> UC Berkeley
                        </span>
                        <span class="flex items-center mr-4">
                            <i class="fa fa-calendar mr-1"></i> 2017年
                        </span>
                        <span class="flex items-center">
                            <i class="fa fa-hdd-o mr-1"></i> 约30GB
                        </span>
                    </div>
                    <p class="text-gray-700 mb-4">
                        用于从单幅图像生成3D物体模型的数据集，包含多个物体类别的图像和相应三维模型，适用于单图像三维重建任务。
                    </p>
                    <a href="https://github.com/xingyuansun/pix3d" target="_blank" class="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                        下载地址 <i class="fa fa-external-link ml-1"></i>
                    </a>
                </div>
            </div>

            <!-- 3D-R2N2 卡片 -->
            <div class="bg-white rounded-xl overflow-hidden card-shadow card-hover">
                <div class="bg-primary/10 px-6 py-4 border-b border-primary/20">
                    <h2 class="text-xl font-bold text-dark flex items-center">
                        <i class="fa fa-cubes mr-3 text-primary"></i>3D-R2N2
                    </h2>
                </div>
                <div class="p-6">
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="flex items-center mr-4">
                            <i class="fa fa-university mr-1"></i> Princeton University
                        </span>
                        <span class="flex items-center mr-4">
                            <i class="fa fa-calendar mr-1"></i> 2016年
                        </span>
                        <span class="flex items-center">
                            <i class="fa fa-hdd-o mr-1"></i> 约40GB
                        </span>
                    </div>
                    <p class="text-gray-700 mb-4">
                        基于多视角图像生成3D物体的数据集，包含丰富3D物体模型及不同视角图像，提供深度信息，适用于多视角图像到3D模型生成。
                    </p>
                    <a href="https://cvgl.stanford.edu/3d-r2n2/" target="_blank" class="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                        下载地址 <i class="fa fa-external-link ml-1"></i>
                    </a>
                </div>
            </div>

            <!-- MV3D 卡片 -->
            <div class="bg-white rounded-xl overflow-hidden card-shadow card-hover">
                <div class="bg-primary/10 px-6 py-4 border-b border-primary/20">
                    <h2 class="text-xl font-bold text-dark flex items-center">
                        <i class="fa fa-eye mr-3 text-primary"></i>MV3D
                    </h2>
                </div>
                <div class="p-6">
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="flex items-center mr-4">
                            <i class="fa fa-university mr-1"></i> UC Berkeley
                        </span>
                        <span class="flex items-center mr-4">
                            <i class="fa fa-calendar mr-1"></i> 2017年
                        </span>
                        <span class="flex items-center">
                            <i class="fa fa-hdd-o mr-1"></i> 约50GB
                        </span>
                    </div>
                    <p class="text-gray-700 mb-4">
                        针对3D物体检测的数据集，通过多视角图像生成完整3D物体模型，包含激光雷达深度信息，适用于自动驾驶和机器人导航。
                    </p>
                    <a href="https://github.com/bostondiditeam/MV3D" target="_blank" class="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                        下载地址 <i class="fa fa-external-link ml-1"></i>
                    </a>
                </div>
            </div>

            <!-- 3D-FUTURE 卡片 -->
            <div class="bg-white rounded-xl overflow-hidden card-shadow card-hover">
                <div class="bg-secondary/10 px-6 py-4 border-b border-secondary/20">
                    <h2 class="text-xl font-bold text-dark flex items-center">
                        <i class="fa fa-home mr-3 text-secondary"></i>3D-FUTURE
                    </h2>
                </div>
                <div class="p-6">
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="flex items-center mr-4">
                            <i class="fa fa-building mr-1"></i> 阿里巴巴等
                        </span>
                        <span class="flex items-center mr-4">
                            <i class="fa fa-calendar mr-1"></i> 2021年
                        </span>
                        <span class="flex items-center">
                            <i class="fa fa-hdd-o mr-1"></i> 约100GB
                        </span>
                    </div>
                    <p class="text-gray-700 mb-4">
                        用于三维家具模型生成的大型数据集，包含20,240张逼真合成室内图像和9,992个工业级家具3D CAD模型，附带高分辨率纹理。
                    </p>
                    <a href="http://www.3d-future.com" target="_blank" class="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-colors">
                        下载地址 <i class="fa fa-external-link ml-1"></i>
                    </a>
                </div>
            </div>

            <!-- ScanNet 卡片 -->
            <div class="bg-white rounded-xl overflow-hidden card-shadow card-hover">
                <div class="bg-secondary/10 px-6 py-4 border-b border-secondary/20">
                    <h2 class="text-xl font-bold text-dark flex items-center">
                        <i class="fa fa-map mr-3 text-secondary"></i>ScanNet
                    </h2>
                </div>
                <div class="p-6">
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="flex items-center mr-4">
                            <i class="fa fa-university mr-1"></i> Stanford & UC Berkeley
                        </span>
                        <span class="flex items-center mr-4">
                            <i class="fa fa-calendar mr-1"></i> 2017年
                        </span>
                        <span class="flex items-center">
                            <i class="fa fa-hdd-o mr-1"></i> 约800GB
                        </span>
                    </div>
                    <p class="text-gray-700 mb-4">
                        大规模室内3D场景数据集，包含丰富RGB-D图像和三维重建模型，支持三维场景重建、语义分割等多种任务，标注质量高。
                    </p>
                    <a href="http://www.scan-net.org/" target="_blank" class="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-colors">
                        下载地址 <i class="fa fa-external-link ml-1"></i>
                    </a>
                </div>
            </div>

            <!-- Matterport3D 卡片 -->
            <div class="bg-white rounded-xl overflow-hidden card-shadow card-hover">
                <div class="bg-secondary/10 px-6 py-4 border-b border-secondary/20">
                    <h2 class="text-xl font-bold text-dark flex items-center">
                        <i class="fa fa-street-view mr-3 text-secondary"></i>Matterport3D
                    </h2>
                </div>
                <div class="p-6">
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="flex items-center mr-4">
                            <i class="fa fa-building mr-1"></i> Matterport, Stanford
                        </span>
                        <span class="flex items-center mr-4">
                            <i class="fa fa-calendar mr-1"></i> 2017年
                        </span>
                        <span class="flex items-center">
                            <i class="fa fa-hdd-o mr-1"></i> 约200GB
                        </span>
                    </div>
                    <p class="text-gray-700 mb-4">
                        室内空间重建数据集，提供大量Matterport相机拍摄的3D室内场景数据，包含详细3D模型、RGB图像、深度图和点云数据。
                    </p>
                    <a href="https://niessner.github.io/Matterport/" target="_blank" class="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-colors">
                        下载地址 <i class="fa fa-external-link ml-1"></i>
                    </a>
                </div>
            </div>

            <!-- ModelNet 卡片 -->
            <div class="bg-white rounded-xl overflow-hidden card-shadow card-hover">
                <div class="bg-accent/10 px-6 py-4 border-b border-accent/20">
                    <h2 class="text-xl font-bold text-dark flex items-center">
                        <i class="fa fa-database mr-3 text-accent"></i>ModelNet
                    </h2>
                </div>
                <div class="p-6">
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="flex items-center mr-4">
                            <i class="fa fa-university mr-1"></i> Princeton University
                        </span>
                        <span class="flex items-center mr-4">
                            <i class="fa fa-calendar mr-1"></i> 2015年
                        </span>
                        <span class="flex items-center">
                            <i class="fa fa-hdd-o mr-1"></i> 30GB
                        </span>
                    </div>
                    <p class="text-gray-700 mb-4">
                        大规模3D模型数据集，包含127个物体类别，ModelNet10含10类，ModelNet40含40类，适用于3D物体识别、分类和检索。
                    </p>
                    <a href="https://modelnet.cs.princeton.edu/" target="_blank" class="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors">
                        下载地址 <i class="fa fa-external-link ml-1"></i>
                    </a>
                </div>
            </div>

            <!-- Pix2Vox 卡片 -->
            <div class="bg-white rounded-xl overflow-hidden card-shadow card-hover">
                <div class="bg-accent/10 px-6 py-4 border-b border-accent/20">
                    <h2 class="text-xl font-bold text-dark flex items-center">
                        <i class="fa fa-exchange mr-3 text-accent"></i>Pix2Vox
                    </h2>
                </div>
                <div class="p-6">
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="flex items-center mr-4">
                            <i class="fa fa-university mr-1"></i> Peking University
                        </span>
                        <span class="flex items-center mr-4">
                            <i class="fa fa-calendar mr-1"></i> 2019年
                        </span>
                        <span class="flex items-center">
                            <i class="fa fa-hdd-o mr-1"></i> 约6GB
                        </span>
                    </div>
                    <p class="text-gray-700 mb-4">
                        用于图像到3D生成的数据集，包含多视角拍摄的2D图像及相应3D模型，支持基于多视角图像生成三维物体，适用于深度学习研究。
                    </p>
                    <a href="https://github.com/hzxie/Pix2Vox" target="_blank" class="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors">
                        下载地址 <i class="fa fa-external-link ml-1"></i>
                    </a>
                </div>
            </div>

            <!-- OmniObject3D-beta 卡片 -->
            <div class="bg-white rounded-xl overflow-hidden card-shadow card-hover">
                <div class="bg-accent/10 px-6 py-4 border-b border-accent/20">
                    <h2 class="text-xl font-bold text-dark flex items-center">
                        <i class="fa fa-object-group mr-3 text-accent"></i>OmniObject3D-beta
                    </h2>
                </div>
                <div class="p-6">
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span class="flex items-center mr-4">
                            <i class="fa fa-database mr-1"></i> OpenXDLab
                        </span>
                        <span class="flex items-center">
                            <i class="fa fa-cubes mr-1"></i> 6,000个模型
                        </span>
                    </div>
                    <p class="text-gray-700 mb-4">
                        大规模、多种类、高精度真实物体扫描3D数据集，支持神经渲染、表面重建等任务，包含190多个物体类别及丰富数据形式。
                    </p>
                    <a href="https://opendatalab.org.cn/OpenXDLab/OmniObject3D" target="_blank" class="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors">
                        下载地址 <i class="fa fa-external-link ml-1"></i>
                    </a>
                </div>
            </div>

        </div>
    </main>
    <!-- 简单的交互效果脚本 -->
    <script>
        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // 页面加载动画
        window.addEventListener('load', () => {
            document.body.classList.add('opacity-100');
            document.body.classList.remove('opacity-0');
        });
    </script>
</body>
</html>