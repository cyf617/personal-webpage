/* ============================================================
 *  网站所有文字内容都在这个文件里,修改这里 = 修改网站
 * ============================================================
 *
 *  ✅ 基本规则(超简单)
 *  1. 只改 **双引号里的文字**,其他符号(逗号、冒号、方括号)千万别删
 *  2. 每个板块都有 `en:`(英文)和 `zh:`(中文)两份,要改通常两份都改
 *  3. 想加一项 → 复制一整块(用 { } 包起来那段),粘贴在下面,改文字
 *  4. 想删一项 → 把整块 { ... }, 删掉(连同最后那个逗号)
 *  5. 改完保存文件,浏览器会自动刷新;想上线 → 终端跑 `git add . && git commit -m "更新内容" && git push`
 *
 *  ⚠️ 常见坑
 *  - 不要少写逗号,也不要多写逗号在 } 前面
 *  - 不要把双引号 " 改成中文引号 " "
 *  - 如果页面显示空白或报错,看终端里的提示,通常就是括号没配对
 * ============================================================ */

export const content = {

  // ┌──────────────────────────────────────────────────────
  // │ ① 顶部导航栏文字(点击跳到对应页面)
  // └──────────────────────────────────────────────────────
  nav: {
    en: { about: "About", research: "Projects", education: "Education", experience: "Experience", skills: "Skills", contact: "Contact" },
    zh: { about: "关于", research: "项目", education: "教育", experience: "经历", skills: "技能", contact: "联系" },
  },

  // ┌──────────────────────────────────────────────────────
  // │ ② 首页(Home) — 简洁名片,第一眼看到的内容
  // └──────────────────────────────────────────────────────
  home: {
    en: {
      name: "Yifan Chen (Evan)",                                     
      title: "AI Data Science & Development · Intelligent Transport Systems · Trustworthy AI",   
      tagline: "I am passionate about exploring the frontiers of AI and data science, dedicated to building reliable, intelligent AI solutions for real-world scenarios like transportation and sports.",
      cta: "Get in touch",                                     
      downloadCV: "CV (EN)",                                   
      downloadCVZh: "CV (ZH)",                                 
    },
    zh: {
      name: "陈奕帆",
      title: "AI 数据科学与开发 · 智能交通系统 · 可信 AI",
      tagline: "我热衷于探索人工智能与数据科学的前沿方向，致力于为交通和体育等真实场景构建可靠、智能的 AI 解决方案。",
      cta: "联系我",
      downloadCV: "英文简历",
      downloadCVZh: "中文简历",
    },
  },

  // ┌──────────────────────────────────────────────────────
  // │ ③ About 板块(关于我)
  // │   body 是数组,每个字符串是一段话。想加段落?在数组里加一行字符串。
  // │   interests 是首页底部的兴趣标签(显示在 Home 页)
  // └──────────────────────────────────────────────────────
  about: {
    en: {
      heading: "About",
      body: [
        "I am currently working as an AI Data Engineering Intern at KNQ, exploring how to build AI solutions for the sports domain. At the same time, I will soon be starting my PhD, where I will delve into the application of Large Language Models (LLMs) and Agentic AI in complex transportation systems. Previously, I earned my MSc in Transport with Data Science from Imperial College London, and a BSc in Applied Mathematics from Xi'an Jiaotong-Liverpool University.",
        "My core research interests include Trustworthy AI, GenAI for Transport, Intelligent Transport Systems (ITS), and AI for Sports. I have extensive experience transforming complex, real-world data—ranging from spatio-temporal trajectories to multimodal sports audio-visual and commentary data—into high-quality, evaluable data assets that power intelligent models.",
        "Recently, my work has spanned several diverse applications. I have developed data pipelines for AI-driven sports clipping and automated commentary, engineered diffusion-based models for car-following trajectory prediction, and conducted large-scale GPS analytics for a World Bank logistics project. Across these domains, my goal is to bridge the gap between advanced machine learning and real-world decision-making.",
      ],
      interests: ["Trustworthy AI", "GenAI for Transport", "Intelligent Transport System", "AI for Sports"],
    },
    zh: {
      heading: "关于我",
      body: [
        "我目前在麒纪科技（KNQ）担任 AI 数据工程实习生，探索如何搭建体育方向的 AI 解决方案。同时即将成为一名博士生，在博士阶段我将深入研究大语言模型（LLMs）与智能体（Agentic AI）在复杂交通系统中的应用。此前，我分别在帝国理工学院（Imperial College London）和西交利物浦大学获得了交通与数据科学硕士学位及数学与应用数学学士学位。",
        "我的核心研究兴趣包括可信 AI (Trustworthy AI)、生成式 AI 与交通 (GenAI for Transport)、智能交通系统 (Intelligent Transport Systems) 以及体育 AI (AI for Sports)。我擅长处理复杂多源的现实数据——从时空轨迹到多模态体育音视频及解说语料数据，并拥有丰富的经验将它们转化为可训练、可评估的高质量数据资产。",
        "在近期的项目中，我参与了多个富有挑战性的落地工作，包括：搭建多体育场景下的 AI 剪辑与自动解说数据管线，设计基于扩散模型的车辆轨迹预测架构，以及为世界银行项目处理和分析千万级的大规模卡车 GPS 轨迹。在这些实践中，我始终致力于在先进的机器学习算法与现实业务决策之间搭建桥梁。",
      ],
      interests: ["可信 AI", "生成式 AI 与交通", "智能交通系统", "体育 AI"],
    },
  },

  // ┌──────────────────────────────────────────────────────
  // │ ④ 研究项目板块(Research 页)
  // │
  // │ 想加一个新项目:复制下面任意一整个 { title: ..., tags: [...] } 块,
  // │ 粘贴在 items 数组里,改掉内容即可。en 和 zh 里都要加,保证索引对应。
  // │
  // │ 字段说明:
  // │   title    项目标题
  // │   role     你的角色 / 所属机构(会显示成小蓝字)
  // │   date     时间段
  // │   summary  一句话概述
  // │   bullets  成果要点(数组,每条是一行)
  // │   tags     底部的技术标签(数组)
  // └──────────────────────────────────────────────────────
  research: {
    en: {
      heading: "Selected Projects",
      subheading: "Applied AI, data analysis and research across sports, mobility and trustworthy decision support.",
      items: [
        {
          title: "Personalised Car-following Modelling using Diffusion-based Model",
          role: "MSc Dissertation · Imperial College London",
          date: "Jan 2025 — Sep 2025",
          summary:
            "Designed a Transformer-based diffusion framework for personalised trajectory prediction in complex car-following scenarios.",
          bullets: [
            "Built modelling datasets from highD / nuPlan, including trajectory cleaning, vehicle-pair matching and dynamic feature extraction.",
            "Modelled long-horizon leader-follower interactions and future-driving uncertainty through Transformer + Diffusion architecture.",
            "Ablations showed map-context features reduced validation displacement-error loss by over 20%.",
          ],
          tags: ["PyTorch", "Diffusion", "Transformer", "nuPlan"],
          images: ["/projects/Disser1.png", "/projects/Disser2.png", "/projects/Disser3.png"],
        },
        {
          title: "Big Data & AI Logistics Model for First-Last Mile — India",
          role: "Core Contributor · In collaboration with World Bank Group",
          date: "May 2025 — Jul 2025",
          summary:
            "Led a team converting more than 40 million truck GPS records into interpretable event-state representations for logistics analysis.",
          bullets: [
            "Coordinated weekly reviews with the World Bank Group and delivered a final A-rated project.",
            "Combined speed, dwell time, location change, ignition state and logistics-domain rules to classify truck behaviour.",
            "Built GIS visualisations for trajectory monitoring, stop hotspots and abnormal-operation analysis.",
          ],
          tags: ["GIS", "Classification", "World Bank", "Python"],
          images: ["/projects/GPS1.png", "/projects/GPS4.png", "/projects/GPS5.png", "/projects/GPS2.png"],
        },
        {
          title: "ML for Policy: Reducing CO₂ Emissions in the Canadian Auto Sector",
          role: "Core Contributor · Imperial College London",
          date: "Jan 2025 — Mar 2025",
          summary:
            "Built interpretable predictive models for vehicle CO2 emissions and translated model evidence into policy recommendations.",
          bullets: [
            "SHAP identified vehicle type, mileage, engine efficiency as key drivers.",
            "Connected explainability results to emission taxation, EV subsidy and high-emission-vehicle regulation strategies.",
          ],
          tags: ["SHAP", "Trustworthy AI", "Policy", "Regression"],
          images: ["/projects/Shap1.png", "/projects/Shap2.png"],
        },
        {
          title: "A Topological Method in Music Recognition Algorithms",
          role: "Undergraduate Final Year Project · First-Class",
          date: "Sep 2023 — Jun 2024",
          summary:
            "Applied persistent homology to spectrograms to build robust audio fingerprints under pitch shifts and rhythm perturbations.",
          bullets: [
            "+30% accuracy vs. Shazam on pitch-shifted audio.",
            "Converted geometric/topological structure into algebraic invariants.",
            "Connected abstract mathematical structure with practical media-recognition algorithms.",
          ],
          tags: ["Persistent Homology", "TDA", "Audio", "Mathematics"],
          hidden: true,
        },
      ],
    },
    zh: {
      heading: "项目经历",
      subheading: "覆盖体育 AI、复杂交通系统、可信 AI 与数据分析的代表性项目。",
      items: [
        {
          title: "基于扩散模型的个性化跟车建模",
          role: "硕士毕业论文 · 帝国理工学院",
          date: "2025 年 1 月 — 9 月",
          summary:
            "面向复杂跟车场景，设计并实现 Transformer + Diffusion 轨迹预测框架，用于刻画车辆交互和未来驾驶行为不确定性。",
          bullets: [
            "基于 highD / nuPlan 数据构建车辆交互建模数据集，完成轨迹清洗、前后车匹配、时间切片和动态特征提取。",
            "利用 Transformer 捕捉前后车长期交互依赖，并通过扩散模型生成多模态未来轨迹。",
            "引入车道线、道路边界、交通规则等地图上下文后，验证集位移误差损失降低 20% 以上。",
          ],
          tags: ["PyTorch", "Diffusion", "Transformer", "nuPlan"],
          images: ["/projects/Disser1.png", "/projects/Disser2.png", "/projects/Disser3.png"],
        },
        {
          title: "印度首末公里物流大数据与 AI 模型",
          role: "核心贡献者 · 与世界银行 (World Bank Group) 合作",
          date: "2025 年 5 月 — 7 月",
          summary:
            "带队处理 4000 万条以上印度卡车 GPS 轨迹，将原始记录转化为可解释的事件-状态数据，用于物流效率分析。",
          bullets: [
            "对接 World Bank Group 项目团队，负责需求沟通、进度汇报、任务分工与成果整合，最终项目评价为 A。",
            "结合速度、停留时长、位置变化、点火状态和物流场景规则，识别行驶、停止、怠速、装卸货和异常停留等状态。",
            "搭建 GIS 可视化工具，展示车辆轨迹、状态分布、停留热点和异常运行情况，支持监控与调度分析。",
          ],
          tags: ["GIS", "分类", "世界银行", "Python"],
          images: ["/projects/GPS1.png", "/projects/GPS4.png", "/projects/GPS5.png", "/projects/GPS2.png"],
        },
        {
          title: "可解释机器学习驱动的加拿大汽车行业 CO₂ 减排政策",
          role: "核心贡献者 · 帝国理工学院",
          date: "2025 年 1 月 — 3 月",
          summary:
            "建立可解释的 CO2 排放预测模型，并基于 SHAP 分析把模型证据转化为可执行的政策建议。",
          bullets: [
            "SHAP 分析识别出车型、行驶里程、发动机效率为关键驱动因素。",
            "为碳税、电车补贴和高排放车辆监管提供循证参考，体现可信 AI 在政策分析中的作用。",
          ],
          tags: ["SHAP", "可信 AI", "政策", "回归"],
          images: ["/projects/Shap1.png", "/projects/Shap2.png"],
        },
        {
          title: "拓扑方法在音乐识别算法中的应用",
          role: "本科毕业设计 · 一等",
          date: "2023 年 9 月 — 2024 年 6 月",
          summary:
            "用持续同调从频谱图中提取拓扑特征，构建对音高变化和节奏扰动更鲁棒的音频指纹。",
          bullets: [
            "在变调音频下相较 Shazam 精度高 30% 以上。",
            "将频谱图的几何 / 拓扑结构转化为可量化的代数不变量。",
            "把抽象数学理论转化为实际媒体识别算法组件。",
          ],
          tags: ["持续同调", "TDA", "音频", "数学"],
          hidden: true,
        },
      ],
    },
  },

  // ┌──────────────────────────────────────────────────────
  // │ ⑤ 教育经历(Education 页 — 时间线样式)
  // │
  // │ 字段:
  // │   school    学校名
  // │   degree    学位 / 专业
  // │   date      时间段
  // │   location  地点
  // │   detail    要点(数组,每条一行)
  // └──────────────────────────────────────────────────────
  education: {
    en: {
      heading: "Education",
      items: [
        {
          school: "Imperial College London",
          degree: "MSc in Transport with Data Science",
          date: "Sep 2024 — Nov 2025",
          location: "London, UK",
          detail: [
            "GPA 3.7 / 4.0 · Merit.",
            "Core: Statistical Modelling (A), Machine Learning (A*), Data Engineering, Intelligent & Autonomous Transport, Sustainable Transport, Optimisation and Routing Algorithms.",
            "Dissertation: Personalised Car-following Modelling using Diffusion-based Model.",
          ],
        },
        {
          school: "Xi'an Jiaotong-Liverpool University",
          degree: "BSc in Applied Mathematics",
          date: "Sep 2020 — Aug 2024",
          location: "Suzhou, China",
          detail: [
            "GPA 3.79 / 4.0 · First-Class Degree with Honours.",
            "Core: Probability & Statistics, Analysis, Linear Algebra, Dynamic Modelling, ODE/PDE, Topology, Functional Analysis, Convex Optimisation, Java.",
            "FYP: A Topological Method in Music Recognition Algorithms (First-Class).",
          ],
        },
      ],
    },
    zh: {
      heading: "教育经历",
      items: [
        {
          school: "帝国理工学院 (Imperial College London)",
          degree: "交通与数据科学 硕士",
          date: "2024 年 9 月 — 2025 年 11 月",
          location: "英国 · 伦敦",
          detail: [
            "GPA 3.7 / 4.0 · Merit.",
            "核心课程:统计建模 (A)、机器学习 (A*)、数据工程、智能与自动交通系统、可持续运输、优化与路径算法.",
            "毕业论文:基于扩散模型的个性化跟车建模.",
          ],
        },
        {
          school: "西交利物浦大学",
          degree: "数学与应用数学 本科",
          date: "2020 年 9 月 — 2024 年 8 月",
          location: "中国 · 苏州",
          detail: [
            "GPA 3.79 / 4.0 · First-Class Honours(一等荣誉学位).",
            "核心课程:概率统计、分析、线性代数、动态建模、离散数学、常微分方程、偏微分方程、拓扑、泛函分析、凸优化、Java.",
            "毕业论文:音乐识别算法中的拓扑方法(一等).",
          ],
        },
      ],
    },
  },

  // ┌──────────────────────────────────────────────────────
  // │ ⑥ 实习 / 工作经历(Experience 页 — 和 Education 相同时间线样式)
  // └──────────────────────────────────────────────────────
  experience: {
    en: {
      heading: "Internship Experience",
      items: [
        {
          company: "KNQ",
          role: "AI Data Engineer",
          date: "Mar 2026 — Present",
          location: "Beijing, China",
          detail: [
            "Handled multimodal data collection, cleaning, and structured validation for basketball, pickleball, and horse trackwork (training) events, aligning video feeds, commentaries, and temporal events.",
            "Prepared structured training sets for sports event recognition, highlight level grading, and training status classification of racehorses.",
            "Maintained PostgreSQL / SQLite schemas mapping sports events, video clips, generated commentary text, and model outputs to facilitate fast retrieval and evaluation.",
            "Constructed sports jargon dictionaries and automatic spelling-to-pronunciation error correction models, significantly boosting TTS pronunciation accuracy for player names and horse racing terms.",
            "Developed evaluation frameworks scoring generated commentary quality across fluency, emotive expressiveness, and style consistency, supplying algorithm teams with critical defect logs.",
            "Designed prompt templates, golden evaluation sets, and error logs for automated highlight clipping, commentary generation, and audio synthesis pipelines.",
            "Wrote Python and SQL automation scripts for raw log preprocessing and database ingestion, greatly simplifying workflow complexity and enhancing daily iteration efficiency."
          ],
        },
      ],
    },
    zh: {
      heading: "实习经历",
      items: [
        {
          company: "北京麒纪智能科技有限公司",
          role: "AI 数据工程师",
          date: "2026 年 3 月 — 至今",
          location: "中国 · 北京",
          detail: [
            "负责篮球、匹克球及赛马晨操等项目的数据采集、清洗与结构化校验，深度整合赛事视频、解说文本、音频片段与时空事件标签。",
            "提取赛事关键多模态特征，用于支撑运动事件识别、精彩程度评估以及马匹训练状态分类等算法的训练与精调。",
            "设计并维护 PostgreSQL / SQLite 数据库，建立赛事、音视频片段、多语言解说词与模型预测结果之间的字段映射，确保高效数据检索与快速模型回溯。",
            "构建体育垂直领域专用词典（覆盖球员姓名、赛马行话等专业术语），并参与设计自动纠错规则模型，使 TTS 模型朗读的专有名词准确率得到显著提升。",
            "建立多维度解说音频质量评估指标（如流畅度、情绪拟真度及风格符合度），对大模型生成内容进行质检打分，为 ASR/TTS 模型的迭代反馈关键缺陷数据。",
            "针对 AI 视频智能剪辑、赛事自动解说与配音生成，构建并迭代 Prompt 模版库、精选评估数据集以及典型错误案例集。",
            "编写基于 Python 和 SQL 的自动化数据清洗、特征提取及入库管道，极大简化了多源异构赛事数据的处理流程，提升日常模型评估效率。"
          ],
        },
      ],
    },
  },

  // ┌──────────────────────────────────────────────────────
  // │ ⑦ 技能板块(显示在 About 页)
  // │
  // │ groups 是技能分组,每组一个 { label, items } 对象。
  // │ items 里每个字符串会展示在页面上。
  // │ 想加分组 → 在 groups 数组里加新对象。
  // │ 想加某项技能 → 在 items 数组里加字符串。
  // └──────────────────────────────────────────────────────
  skills: {
    en: {
      heading: "Skills",
      groups: [
        { label: "Programming Languages", items: ["Python (PyTorch, NumPy, Pandas, scikit-learn)", "TypeScript", "Go", "R", "SQL", "Java", "MATLAB"] },
        { label: "Development Tools & Databases", items: ["PostgreSQL", "SQLite", "Git", "Linux", "Docker"] },
        { label: "Languages", items: ["English (Professional Working)", "Mandarin Chinese (Native)"] },
      ],
    },
    zh: {
      heading: "技术栈",
      groups: [
        { label: "编程语言", items: ["Python (PyTorch, NumPy, Pandas, scikit-learn)", "TypeScript", "Go", "R", "SQL", "Java", "MATLAB"] },
        { label: "开发工具与数据库", items: ["PostgreSQL", "SQLite", "Git", "Linux", "Docker"] },
        { label: "语言能力", items: ["英语 (专业工作级)", "普通话 (母语)"] },
      ],
    },
  },

  // ┌──────────────────────────────────────────────────────
  // │ ⑧ 联系方式板块(显示在 About 页底部)
  // │   email 和 phone 会显示在页面上
  // │   github 改了会影响 GitHub 按钮链接
  // │   想加 LinkedIn / Google Scholar?告诉我帮你加
  // └──────────────────────────────────────────────────────
  contact: {
    en: {
      heading: "Get in touch",
      subheading: "I am highly passionate about research, product development, and collaboration opportunities in Trustworthy AI, Intelligent Transportation Systems, and Sports AI. Meanwhile, I also share a great interest in sports, music, movies, and other exciting experiences. I warmly welcome collaborations or discussions of new ideas, whether for professional topics or casual chat, please feel free to reach out!",
      email: "yifanchen0726@gmail.com",
      phone: "+86 186 3816 8007",
      github: "https://github.com/cyf617",
      cv: "CV (EN)",
      cvZh: "CV (ZH)",
    },
    zh: {
      heading: "联系我",
      subheading: "我对可信 AI、智能交通以及体育 AI 等领域的研究、产品与合作机会充满热情。同时，也对体育、音乐、电影等新鲜事物有着极大的兴趣。非常欢迎交流合作或探讨新的想法，无论是专业探讨还是日常交流，请随时联系我！",
      email: "yifanchen0726@gmail.com",
      phone: "+86 186 3816 8007",
      github: "https://github.com/cyf617",
      cv: "英文简历",
      cvZh: "中文简历",
    },
  },

  // ┌──────────────────────────────────────────────────────
  // │ ⑨ 兴趣爱好 / 其他页(Others 页)
  // │
  // │   pageHeading    页面大标题
  // │   heading        兴趣爱好小标题
  // │   body           兴趣爱好正文(一段话)
  // │   liverpoolHeading  观赛照片小标题
  // │   albumsHeading     专辑小标题
  // │   albumsCaption     专辑说明(提示点击可播放)
  // │   photoPlaceholder / albumPlaceholder  占位框里显示的文字
  // │
  // │   liverpoolPhotos  观赛照片数组(语言无关,放在 en/zh 之外)
  // │     - 空字符串 ""        → 显示占位框
  // │     - "/matchday1.jpg"   → 显示该图片(文件放 public/ 下)
  // │
  // │   albums  专辑数组(语言无关,放在 en/zh 之外),每项是一个对象:
  // │     - cover     封面图路径,空字符串 "" → 显示占位框;"/covers/xxx.jpg" → 显示封面
  // │     - audioSrc  音频路径,空字符串 "" → 不能播放;"/audio/xxx.mp3" → 点击播放(文件放 public/ 下)
  // │     - title     歌曲名(显示在封面上)
  // │     - artist    艺人名(显示在封面上)
  // │   想加更多专辑?在数组里加一个 { cover, audioSrc, title, artist } 对象即可。
  // └──────────────────────────────────────────────────────
  hobbies: {
    en: {
      pageHeading: "Others",
      heading: "Hobbies & Interests",
      body: "Outside of work, I'm also passionate about football, basketball, and music. My favourite football club is Liverpool FC, and the genres I love most are R&B and Soul. Below are some of my matchday moments and the music I've been listening to lately. If you share any of these interests, feel free to reach out via the contact below!",
      liverpoolHeading: "My Matchday Moments",
      albumsHeading: "Recently Listening",
      albumsCaption: "Click the vinyl record to randomly explore a music snippet.",
      photoPlaceholder: "Matchday photo",
      albumPlaceholder: "Album cover",
    },
    zh: {
      pageHeading: "其他",
      heading: "兴趣爱好",
      body: "在工作之余，我对足球、篮球及音乐等事物也非常感兴趣。我最喜欢的足球俱乐部是利物浦，最喜欢的音乐类型是 R&B 和 Soul。下方展示了我的一些观赛瞬间以及最近在听的音乐，如果你和我有一样的兴趣爱好，也欢迎点击下方联系方式交流讨论！",
      liverpoolHeading: "我的观赛瞬间",
      albumsHeading: "最近在听的专辑",
      albumsCaption: "点击黑胶唱片随机探索一段音乐片段。",
      photoPlaceholder: "观赛照片",
      albumPlaceholder: "专辑封面",
    },
    // 观赛照片:空字符串=占位框,填路径=显示图片
    liverpoolPhotos: ["/matchday/matchday1.jpg", "/matchday/matchday2.jpg", "/matchday/matchday3.jpg", "/matchday/matchday4.jpg", "/matchday/matchday5.jpg", "/matchday/matchday6.jpg"],
    // 专辑:cover / audioSrc 留空 = 占位框;填路径后点击封面即可播放对应歌曲
    albums: [
      {
        cover: "/covers/chromakopia.jpeg",
        audioSrc: "/audio/like-him.mp3",
        title: "CHROMAKOPIA",
        artist: "Tyler, the Creator",
        song: "Like Him",
        year: "2024",
        genreEN: "Alternative R&B / Soul",
        genreZH: "另类 R&B / 灵魂乐",
        descEN: "A deeply emotional track exploring Tyler's complex feelings about his absent father and his mother's reflections. It blends lush synths, piano chords, and haunting vocals to capture vulnerability and identity.",
        descZH: "一首探讨 Tyler 对缺位父亲的复杂情感及母亲反思的深情之作。歌曲将丰富的合成器、钢琴和声与令人动容的人声交织，展现了关于自我身份认同的脆弱一面。"
      },
      {
        cover: "/covers/channel_orange.jpeg",
        audioSrc: "/audio/thinkin-bout-you.mp3",
        title: "channel ORANGE",
        artist: "Frank Ocean",
        song: "Thinkin Bout You",
        year: "2012",
        genreEN: "Neo-Soul / Contemporary R&B",
        genreZH: "新灵魂乐 / 现代 R&B",
        descEN: "Frank Ocean's iconic R&B masterpiece, famed for its stunning falsetto hook. It's a melancholic, atmospheric reflection on unrequited love and longing, blending raw vulnerability with smooth neo-soul vibes.",
        descZH: "Frank Ocean 标志性的 R&B 杰作，以惊艳的假音副歌闻名。歌曲通过迷幻的编曲深情诉说着对单恋和思念的忧郁反思，将真实的脆弱感融入丝滑的新灵魂乐中。"
      },
      {
        cover: "/covers/imok.jpg",
        audioSrc: "/audio/putong-pengyou.mp3",
        title: "I'm OK",
        artist: "陶喆",
        song: "普通朋友",
        year: "1999",
        genreEN: "Mandarin R&B / Soul",
        genreZH: "华语 R&B / 灵魂乐",
        descEN: "A timeless R&B classic. Starting with the legendary acoustic guitar intro, David Tao delivers a soulful narration of the painful 'friend zone' with smooth vocals and expressive ad-libs.",
        descZH: "华语流行乐坛不可磨灭的 R&B 经典之作。从经典的木吉他前奏拉开序幕，陶喆用丝滑的唱腔与真挚的即兴转音，细腻诠释了身处“友情以上，恋人未满”的无奈与心酸。"
      },
      {
        cover: "/covers/neverenough.jpeg",
        audioSrc: "/audio/toronto-2014.mp3",
        title: "Never Enough",
        artist: "Daniel Caesar",
        song: "Toronto 2014",
        year: "2023",
        genreEN: "Contemporary R&B / Neo-Soul",
        genreZH: "现代 R&B / 灵魂乐",
        descEN: "A nostalgic and warm track looking back at Daniel Caesar's pre-fame days in Toronto. It features Mustafa, blending warm harmonies, minimalist guitar, and a bittersweet sense of homecoming.",
        descZH: "一首充满怀旧温情之作，回望了 Daniel Caesar 成名前在多伦多的青葱岁月。歌曲携手 Mustafa，融入温暖的和声与极简的吉他伴奏，透露出苦甜参半的乡愁与归属感。"
      },
    ],
  },

  // ┌──────────────────────────────────────────────────────
  // │ ⑨.⑤ 足迹页面数据 (Travel page data)
  // └──────────────────────────────────────────────────────
  travel: {
    en: {
      pageHeading: "Travel Map",
      subheading: "Every city is a chapter of my life.",
    },
    zh: {
      pageHeading: "我的足迹",
      subheading: "每一个城市都是人生的一段章节。",
    },
    cities: [
      // 求学/工作主要城市
      { nameEn: "London, UK", nameZh: "伦敦，英国", coords: [51.5074, -0.1278] },
      { nameEn: "Suzhou, China", nameZh: "苏州，中国", coords: [31.2990, 120.6190] },
      { nameEn: "Beijing, China", nameZh: "北京，中国", coords: [39.9042, 116.4074] },
      // 中国大陆城市
      { nameEn: "Zhengzhou, China", nameZh: "郑州，中国", coords: [34.7579, 113.6654] },
      { nameEn: "Xi'an, China", nameZh: "西安，中国", coords: [34.3416, 108.9398] },
      { nameEn: "Shenzhen, China", nameZh: "深圳，中国", coords: [22.5431, 114.0579] },
      { nameEn: "Guangzhou, China", nameZh: "广州，中国", coords: [23.1291, 113.2644] },
      { nameEn: "Qingdao, China", nameZh: "青岛，中国", coords: [36.0671, 120.3826] },
      { nameEn: "Yantai, China", nameZh: "烟台，中国", coords: [37.4638, 121.4479] },
      { nameEn: "Shanghai, China", nameZh: "上海，中国", coords: [31.2304, 121.4737] },
      { nameEn: "Wuxi, China", nameZh: "无锡，中国", coords: [31.4912, 120.3119] },
      { nameEn: "Luoyang, China", nameZh: "洛阳，中国", coords: [34.6197, 112.4542] },
      { nameEn: "Kaifeng, China", nameZh: "开封，中国", coords: [34.7973, 114.3076] },
      { nameEn: "Wuhan, China", nameZh: "武汉，中国", coords: [30.5928, 114.3055] },
      { nameEn: "Nanjing, China", nameZh: "南京，中国", coords: [32.0603, 118.7969] },
      { nameEn: "Hangzhou, China", nameZh: "杭州，中国", coords: [30.2741, 120.1551] },
      { nameEn: "Chengdu, China", nameZh: "成都，中国", coords: [30.5728, 104.0665] },
      { nameEn: "Haikou, China", nameZh: "海口，中国", coords: [20.0174, 110.3492] },
      { nameEn: "Sanya, China", nameZh: "三亚，中国", coords: [18.2528, 109.5119] },
      // 特别行政区
      { nameEn: "Hong Kong, China", nameZh: "香港，中国特别行政区", coords: [22.3193, 114.1694] },
      { nameEn: "Macao, China", nameZh: "澳门，中国特别行政区", coords: [22.1987, 113.5439] },
      // 日本
      { nameEn: "Tokyo, Japan", nameZh: "东京，日本", coords: [35.6762, 139.6503] },
      // 欧洲
      { nameEn: "Paris, France", nameZh: "巴黎，法国", coords: [48.8566, 2.3522] },
      { nameEn: "Luxembourg", nameZh: "卢森堡", coords: [49.6116, 6.1319] },
      { nameEn: "Geneva, Switzerland", nameZh: "日内瓦，瑞士", coords: [46.2044, 6.1432] },
      { nameEn: "Zurich, Switzerland", nameZh: "苏黎世，瑞士", coords: [47.3769, 8.5417] },
      { nameEn: "Lausanne, Switzerland", nameZh: "洛桑，瑞士", coords: [46.5197, 6.6323] },
      { nameEn: "Rome, Italy", nameZh: "罗马，意大利", coords: [41.9028, 12.4964] },
      { nameEn: "Milan, Italy", nameZh: "米兰，意大利", coords: [45.4642, 9.1900] },
      { nameEn: "Florence, Italy", nameZh: "佛罗伦萨，意大利", coords: [43.7696, 11.2558] },
      { nameEn: "Brussels, Belgium", nameZh: "布鲁塞尔，比利时", coords: [50.8503, 4.3517] },
      { nameEn: "Frankfurt, Germany", nameZh: "法兰克福，德国", coords: [50.1109, 8.6821] },
      { nameEn: "Manchester, UK", nameZh: "曼彻斯特，英国", coords: [53.4808, -2.2426] },
      { nameEn: "Liverpool, UK", nameZh: "利物浦，英国", coords: [53.4084, -2.9916] },
      // 美国
      { nameEn: "Honolulu, USA", nameZh: "檀香山，美国", coords: [21.3069, -157.8583] }
    ]
  },

  // ┌──────────────────────────────────────────────────────
  // │ ⑩ 底部 Footer(每个页面底部都会显示)
  // └──────────────────────────────────────────────────────
  footer: {
    en: { built: "Built with Astro & Tailwind", rights: "© 2026 Yifan Chen (Evan)" },
    zh: { built: "使用 Astro 与 Tailwind 构建", rights: "© 2026 陈奕帆" },
  },
};
