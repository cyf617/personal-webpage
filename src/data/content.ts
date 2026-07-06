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
        "I am currently working as an AI Data Engineering Intern at KNQ, exploring how to build AI solutions for the sports domain. At the same time, I will soon be starting my PhD, where I will delve into the application of Large Language Models (LLMs) and Agentic AI in complex transportation systems. Previously, I earned my MSc in Transport and Data Science from Imperial College London, and a BSc in Applied Mathematics from Xi'an Jiaotong-Liverpool University.",
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
        },
        {
          title: "Big Data & AI Logistics Model for First-Last Mile — India",
          role: "Project Leader · In collaboration with World Bank Group",
          date: "May 2025 — Jul 2025",
          summary:
            "Led a team converting more than 40 million truck GPS records into interpretable event-state representations for logistics analysis.",
          bullets: [
            "Coordinated weekly reviews with the World Bank Group and delivered a final A-rated project.",
            "Combined speed, dwell time, location change, ignition state and logistics-domain rules to classify truck behaviour.",
            "Built GIS visualisations for trajectory monitoring, stop hotspots and abnormal-operation analysis.",
          ],
          tags: ["GIS", "Classification", "World Bank", "Python"],
        },
        {
          title: "ML for Policy: Reducing CO₂ Emissions in the Canadian Auto Sector",
          role: "Project Leader · Imperial College London",
          date: "Jan 2025 — Mar 2025",
          summary:
            "Built interpretable predictive models for vehicle CO2 emissions and translated model evidence into policy recommendations.",
          bullets: [
            "SHAP identified vehicle type, mileage, engine efficiency as key drivers.",
            "Connected explainability results to emission taxation, EV subsidy and high-emission-vehicle regulation strategies.",
          ],
          tags: ["SHAP", "Trustworthy AI", "Policy", "Regression"],
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
        },
        {
          title: "印度首末公里物流大数据与 AI 模型",
          role: "项目组长 · 与世界银行 (World Bank Group) 合作",
          date: "2025 年 5 月 — 7 月",
          summary:
            "带队处理 4000 万条以上印度卡车 GPS 轨迹，将原始记录转化为可解释的事件-状态数据，用于物流效率分析。",
          bullets: [
            "对接 World Bank Group 项目团队，负责需求沟通、进度汇报、任务分工与成果整合，最终项目评价为 A。",
            "结合速度、停留时长、位置变化、点火状态和物流场景规则，识别行驶、停止、怠速、装卸货和异常停留等状态。",
            "搭建 GIS 可视化工具，展示车辆轨迹、状态分布、停留热点和异常运行情况，支持监控与调度分析。",
          ],
          tags: ["GIS", "分类", "世界银行", "Python"],
        },
        {
          title: "可解释机器学习驱动的加拿大汽车行业 CO₂ 减排政策",
          role: "项目组长 · 帝国理工学院",
          date: "2025 年 1 月 — 3 月",
          summary:
            "建立可解释的 CO2 排放预测模型，并基于 SHAP 分析把模型证据转化为可执行的政策建议。",
          bullets: [
            "SHAP 分析识别出车型、行驶里程、发动机效率为关键驱动因素。",
            "为碳税、电车补贴和高排放车辆监管提供循证参考，体现可信 AI 在政策分析中的作用。",
          ],
          tags: ["SHAP", "可信 AI", "政策", "回归"],
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
            "Built data collection, cleaning, structuring and quality-control workflows for basketball and horse-racing AI products.",
            "Maintained PostgreSQL / SQLite mappings across events, clips, commentary text, audio files and model outputs to support retrieval, analysis and model evaluation.",
            "Designed prompt libraries, evaluation samples and error casebooks for AI clipping, automatic commentary and audio generation workflows.",
            "Analysed commentary style and model outputs across accuracy, consistency, style match and usability, feeding results back to algorithm and product teams.",
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
            "负责篮球、赛马等项目的数据采集、清洗、结构化与质量校验，整合赛事文本、解说语料、音频片段、事件标签和模型输出。",
            "维护 PostgreSQL / SQLite 数据库中赛事、片段、解说文本、音频文件及模型结果之间的字段映射关系，提升检索、分析和模型评估效率。",
            "围绕 AI 剪辑、自动解说、音频生成等场景，设计 Prompt 样本库、评估样例与错误案例库，支持模型持续优化。",
            "结合 ASR / TTS 等模型输出，从准确性、一致性、风格匹配度和可用性等维度分析模型表现，并反馈给算法与产品团队。",
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
        { label: "Programming", items: ["Python", "PyTorch", "scikit-learn", "NumPy", "Pandas", "R", "MATLAB", "SQL", "Java", "LaTeX"] },
        { label: "Data & Databases", items: ["PostgreSQL", "SQLite", "Data Cleaning", "Data Engineering", "Spatio-temporal Analysis", "Feature Engineering"] },
        { label: "AI & Modelling", items: ["Prompt Engineering", "Diffusion Models", "Transformers", "XGBoost", "Random Forest", "SHAP"] },
        { label: "Evaluation & Tools", items: ["ASR / TTS Evaluation", "Linux", "Git", "Docker", "Conda", "Claude Code", "Codex"] },
        { label: "Languages", items: ["English (Professional)", "Mandarin Chinese (Native)"] },
      ],
    },
    zh: {
      heading: "技能",
      groups: [
        { label: "编程与建模", items: ["Python", "PyTorch", "scikit-learn", "NumPy", "Pandas", "R", "MATLAB", "SQL", "Java", "LaTeX"] },
        { label: "数据与数据库", items: ["PostgreSQL", "SQLite", "数据清洗", "数据工程", "时空数据分析", "特征工程"] },
        { label: "AI 方法", items: ["Prompt Engineering", "扩散模型", "Transformer", "XGBoost", "Random Forest", "SHAP"] },
        { label: "评估与工具链", items: ["ASR / TTS 评估", "Linux", "Git", "Docker", "Conda", "Claude Code", "Codex"] },
        { label: "语言", items: ["英语 (专业工作级)", "普通话 (母语)"] },
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
      subheading: "I am always open to discussing new opportunities, collaborations, or research ideas related to Trustworthy AI, Intelligent Transport Systems, and Sports AI. Feel free to reach out!",
      email: "yifanchen0726@gmail.com",
      phone: "+86 186 3816 8007",
      github: "https://github.com/cyf617",
      cv: "CV (EN)",
      cvZh: "CV (ZH)",
    },
    zh: {
      heading: "联系我",
      subheading: "我对可信 AI、智能交通以及体育 AI 领域的研究、产品与岗位机会充满热情。非常欢迎交流合作或探讨新的想法，随时联系我！",
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
      liverpoolHeading: "Matchday Moments",
      albumsHeading: "Recently Listening",
      albumsCaption: "Click an album cover to play a track from it.",
      photoPlaceholder: "Matchday photo",
      albumPlaceholder: "Album cover",
    },
    zh: {
      pageHeading: "其他",
      heading: "兴趣爱好",
      body: "在工作之余，我对足球、篮球及音乐等事物也非常感兴趣。我最喜欢的足球俱乐部是利物浦，最喜欢的音乐类型是 R&B 和 Soul。下方展示了我的一些观赛瞬间以及最近在听的音乐，如果你和我有一样的兴趣爱好，也欢迎点击下方联系方式交流讨论！",
      liverpoolHeading: "观赛瞬间",
      albumsHeading: "最近在听的专辑",
      albumsCaption: "点击专辑封面即可播放该专辑的一首歌。",
      photoPlaceholder: "观赛照片",
      albumPlaceholder: "专辑封面",
    },
    // 观赛照片:空字符串=占位框,填路径=显示图片
    liverpoolPhotos: ["/matchday/matchday1.jpg", "/matchday/matchday2.jpg", "/matchday/matchday3.jpg", "/matchday/matchday4.jpg", "/matchday/matchday5.jpg", "/matchday/matchday6.jpg"],
    // 专辑:cover / audioSrc 留空 = 占位框;填路径后点击封面即可播放对应歌曲
    albums: [
      { cover: "/covers/chromakopia.jpeg", audioSrc: "/audio/like-him.mp3", title: "CHROMAKOPIA", artist: "Tyler, the Creator" },
      { cover: "/covers/channel_orange.jpeg", audioSrc: "/audio/thinkin-bout-you.mp3", title: "channel ORANGE", artist: "Frank Ocean" },
      { cover: "/covers/imok.jpg", audioSrc: "/audio/putong-pengyou.mp3", title: "I'm OK", artist: "陶喆" },
      { cover: "/covers/neverenough.jpeg", audioSrc: "/audio/toronto-2014.mp3", title: "Never Enough", artist: "Daniel Caesar" },
    ],
  },

  // ┌──────────────────────────────────────────────────────
  // │ ⑩ 底部 Footer(每个页面底部都会显示)
  // └──────────────────────────────────────────────────────
  footer: {
    en: { built: "Built with Astro & Tailwind", rights: "© 2026 Yifan Chen (Evan)" },
    zh: { built: "使用 Astro 与 Tailwind 构建", rights: "© 2026 陈奕帆" },
  },
};
