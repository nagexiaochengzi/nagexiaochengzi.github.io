---
layout: post
title: 多模态大模型 | 苗佳哲
categories: [多模态大模型]
description: 多模态大模型进度
keywords:  
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---

## LLaDA：从扩散视角看大模型生成范式？
研究背景：自回归范式的固有挑战
当前大语言模型（LLM）普遍采用自回归（AutoRegressive Modeling, AR）范式，其核心定义为：

pθ(x)=pθ(x1)∏i=2Lpθ(xi|x1,…,xi−1)p_{\theta}(x)= p_\theta(x^1) \prod_{i=2}^L p_\theta(x^i | x^{1}, \dots, x^{i-1})

该范式虽在商业应用中取得成功，但存在显著局限：

AR模型的序列生成特性导致计算不可并行化。生成长度为L的序列需执行L次前向传播，在长文本场景（如文档生成）计算开销呈线性增长。
AR的单向生成机制（通常从左至右）与语言的双向本质相悖。在需要逆向推理的任务中表现受限，例如诗歌补全（给定结尾补全开头）。
研究表明，LLM的核心能力（可扩展性、上下文学习、指令跟随）实质源于分布匹配目标： minθKL(pdata(x)||pθ(x))\min_{\theta} \textrm{KL}(p_{\textrm{data}}(x) || p_{\theta}(x)) 而非AR结构本身。视觉领域扩散模型（DiT）的成功佐证了非AR架构同样可实现分布逼近。
以上三点就是 LLaDA 这篇工作的 motivation，即解决 AR 模型固有的问题，探索一条新的路。

我们先看看 LLaDA 的效果：

LLaDA 实验结果
首先是Scalability。LLaDA 在 102310^{23} FLOPs 的计算预算内能有效扩展，在六项任务上与同数据训练的 ARM 基线取得了可以 pk 的成绩。
https://www.chaspark.com/chasiwu/media/v1/tinyimage/1197710023531343872.blob?state=2
看下面两张表感觉也还不错。
https://www.chaspark.com/chasiwu/media/v1/tinyimage/1197710047286935552.blob?state=2

还有针对逆向推理的诗歌补全任务。
https://www.chaspark.com/chasiwu/media/v1/tinyimage/1197710056293052416.blob?state=2


最后，论文里还给了一个推理的实例：
https://www.chaspark.com/chasiwu/media/v1/tinyimage/1197710080514211840.blob?state=2


好的，看完效果后感觉值得一读。
具体做法
LLaDA 原论文写的比较多，我这里直接按照我自己的理解，将他的算法流程简化一下
LLaDA 试图训练的是一个基于双向 Transformer 的 Mask Predictor。这一 predictor 可以从一段含有 mask 的序列中预测出被 mask 的 token。为了训练这个 Mask Predictor，LLaDA 主要分成两步：
随机 random 一个 t∈(0,1)t \in (0,1) ，对一个输入序列的每个 token 以概率 tt 决定要不要 mask。这一步我们可以获得一个被 mask 了一部分的序列。
用 Mask Predictor 去预测被 mask 的 token，并计算 loss 回传。
https://www.chaspark.com/chasiwu/media/v1/tinyimage/1197710083052711936.blob?state=2
好吧，我总感觉和 BERT 非常像。可能唯一的区别就在于 BERT 是固定概率 mask 一个序列，LLaDA 是随机的。

LLaDA 同样展示了 Pre-training，SFT 以及 Inference 的过程。预训练阶段的流程和之前说的两步一样，SFT中唯一不同的是只对 response 做 mask。值得一提的是推理过程。在推理阶段，LLaDA 先指定输出的长度 LL ，之后便将 prompt 和 LL 个被 “mask” 的 token 一起输入给模型中。每一次模型会 remask 一些 token，然后 LLaDA 再给这些刚刚被解码出的 token 以一个概率再被 mask。通过多步迭代，最终获得输出的序列。LLaDA 在原文中给了一些算法表，感兴趣的读者可以去看一看，个人觉得比较清晰。不过说实话，看完之后没有达到预期。我感觉更像是 BERT 的 scaling。另外，正统diffusion里加噪也很有讲究，目前 LLaDA 的 forward 过程并不太像 diffusion的过程。所以严格意义上来说，这种 mask 的方式并不能叫作 diffusion？但我没做过diffusion的工作，对其了解也只是一些皮毛，所以并不能肯定这一点。不过这倒是一个新坑，目前 LLM 的做法应该都可以搬运过来。期待一波真正的 diffusion LLM。
