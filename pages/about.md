---
layout: page
title: 发表论文及获奖荣誉
description: 
keywords: mjz
comments: true
menu: 关于
permalink: /about/
---
家庭美满，身心健康，

## 苗佳哲
<h3>论文</h3>
<h4>第一作者</h4>
  <ul>
    <li>The Visual Computer（一作，中科院SCI三区，已收录）题目：TDGar-Ani: temporal motion fusion model and deformation correction network for enhancing garment animation details </li>
    <li>Graphical Models（一作，CCF-B期刊同时是中科院SCI三区，已收录）题目：GarTemFormer: Temporal transformer-based for optimizing virtual garment animation</li>
    <li>IEEE International Conference on Multimedia and Expo（一作，CCF-B Oral，已收录）题目：SmPhy: Generating smooth and physically plausible 3D garment animations</li>
    <li>Computer Graphics International（一作，CCF-C Oral，已收录）题目：GVPM: Garment Simulation from Video Based on Priori Movements</li>
    <li>Transactions on Consumer Electronics（一作，中科院SCI二区Trans，二轮返修）题目：GadNet: Garment adaptive network optimization dressing human animation</li>
  </ul>
<h4>合作者</h4>
  <ul>
    <li>Graphical Models（五作，CCF-B期刊同时是中科院SCI三区，已收录）题目：GSNet: Generating 3D garment animation via graph skinning network</li>
    <li>Displays（五作，中科院 SCI 二区，已收录）题目：PGN-Cloth: Physics-based graph network model for 3D cloth animation</li>
  </ul>
<h3>比赛</h3>
  <ul>
    <li>国A类赛事第十二届中国软件杯大学生软件设计大赛，全国总决赛三等奖，教育部，2023.8，队长；</li>
    <li>第十七届全国大学生软件创新大赛华南区域赛二等奖，2024.4，队长；</li>
  </ul>
<h3>软著、专利</h3>
基于AR的动态服装虚拟仿真系统（登记号：2023SR1009757，已授权）
<h3>研究生基金</h3>
  <ul>
    <li>研究生创新基金,《基于视频数据驱动的物理服装模拟技术研究》</li>
    <li>雄鹰计划</li>
  </ul>
<h3>荣誉</h3>
  <ul>
    <li>本科--国家奖学金，优秀毕业生，就业达人。</li>
    <li>研究生--获得国家奖学金，特等学业奖学金，知行论坛二等奖，挑战杯银奖，创新之星，优秀研究生，优秀研究生干部，优秀志愿者，优秀共青团干部；担任党支部副书记</li>
  </ul>
<h3>参加项目（硕士研究生）</h3>
  <ul>
    <li>跌倒检测识别：主要负责处理层，处理输入的图像数据，并训练最优的模型进行行人跌倒检测</li>
    <li>伸缩缝检测：对输入图像的增强、去噪和二值化处理后，获得对比鲜明、干扰少的图像，然后接缝特征点的提取，检测出的直线运用轨道板间隙的图像特征对直线进行有效提取,解决了直线的重叠线、斜率异常和断线情况</li>
    <li>AIGC(电路图)：从版图中提取出电路的逻辑关系，而后根据这些逻辑关系自动生成电路的逻辑图，供版图的逻辑验证</li>
    <li>基于Transformer的视频3D人体姿态估计。解决帧抖动问题</li>
    <li>结合Llama2和Stable Diffusion的电路图生成</li>
    <li>基于GAN的2D虚拟试衣</li>
    <li>基于WEB的3D医疗数据解析平台，其中包含医疗数据的导入、分割、可视化和数据分析等功能</li>
    <li>基于大小模型协同的在线编辑器设计与开发</li>
  </ul>
<h3>参加学术/h3>
  <ul>
    <li> CVM</li>
    <li> ICME</li>
    <li> Chinagraph2024</li>
    <li> CNCC2024</li>
  </ul>
## 肖美美

{% for skill in site.data.skills %}
### {{ skill.name }}
<div class="btn-inline">
{% for keyword in skill.keywords %}
<button class="btn btn-outline" type="button">{{ keyword }}</button>
{% endfor %}
</div>
{% endfor %}
