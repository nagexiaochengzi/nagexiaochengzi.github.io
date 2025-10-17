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
<h2>论文</h2>
<h3>第一作者</h3>
<ul>
<li>The Visual Computer（一作，中科院SCI三区，已收录）题目：TDGar-Ani: temporal motion fusion model and deformation correction network for enhancing garment animation details </li>
<li>Graphical Models（一作，CCF-B期刊同时是中科院SCI三区，已收录）题目：GarTemFormer: Temporal transformer-based for optimizing virtual garment animation</li>
<li>IEEE International Conference on Multimedia and Expo（一作，CCF-B Oral，已收录）题目：SmPhy: Generating smooth and physically plausible 3D garment animations</li>
<li>Computer Graphics International（一作，CCF-C Oral，已收录）题目：GVPM: Garment Simulation from Video Based on Priori Movements</li>
<li>Transactions on Consumer Electronics（一作，中科院SCI二区Trans，二轮返修）题目：GadNet: Garment adaptive network optimization dressing human animation</li>
</ul>
<h3>合作者</h3>
<ul>
<li>Graphical Models（五作，CCF-B期刊同时是中科院SCI三区，已收录）题目：GSNet: Generating 3D garment animation via graph skinning network</li>
<li>Displays（五作，中科院 SCI 二区，已收录）题目：PGN-Cloth: Physics-based graph network model for 3D cloth animation</li>
</ul>


## 合作者发表论文

{% for skill in site.data.skills %}
### {{ skill.name }}
<div class="btn-inline">
{% for keyword in skill.keywords %}
<button class="btn btn-outline" type="button">{{ keyword }}</button>
{% endfor %}
</div>
{% endfor %}
