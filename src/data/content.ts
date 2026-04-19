export const content = {
  nav: {
    en: { about: "About", research: "Research", education: "Education", experience: "Experience", skills: "Skills", contact: "Contact" },
    zh: { about: "关于", research: "研究", education: "教育", experience: "实习经历", skills: "技能", contact: "联系" },
  },
  hero: {
    en: {
      greet: "// welcome",
      name: "Yifan Chen",
      title: "Researcher · Transport × AI · Data Science",
      tagline: "Exploring safe, trustworthy AI for autonomous driving and intelligent transportation systems.",
      location: "London · Zhengzhou",
      cta1: "Contact Me",
      cta2: "Download CV",
    },
    zh: {
      greet: "// 你好",
      name: "陈奕帆",
      title: "研究者 · 交通 × AI · 数据科学",
      tagline: "探索安全、可信的 AI 在自动驾驶与智能交通系统中的应用。",
      location: "伦敦 · 郑州",
      cta1: "联系我",
      cta2: "下载简历",
    },
  },
  about: {
    en: {
      heading: "About",
      body: [
        "MSc graduate in Transport with Data Science from Imperial College London (Merit with Distinction) and BSc in Applied Mathematics from Xi'an Jiaotong-Liverpool University (First-Class Honours).",
        "My research centres on safe and trustworthy AI, autonomous driving, and machine learning for transportation systems — with a focus on turning raw spatio-temporal data into models that are accurate, interpretable, and policy-relevant.",
        "I enjoy work that bridges rigorous mathematics, modern deep learning, and real-world impact.",
      ],
      interests: ["Safe & Trustworthy AI", "Autonomous Driving", "ML for Transportation", "Spatio-temporal Modelling"],
    },
    zh: {
      heading: "关于我",
      body: [
        "帝国理工学院「交通与数据科学」硕士（Merit with Distinction），西交利物浦大学「数学与应用数学」本科（一等荣誉学位）。",
        "研究方向聚焦于安全与可信 AI、自动驾驶以及面向交通系统的机器学习——把原始时空数据转化为既精准、可解释，又对政策有参考价值的模型。",
        "我喜欢把严谨的数学、现代深度学习与真实世界的影响结合在一起。",
      ],
      interests: ["安全可信 AI", "自动驾驶", "交通机器学习", "时空数据建模"],
    },
  },
  research: {
    en: {
      heading: "Selected Research",
      subheading: "Research projects at Imperial College London and beyond.",
      items: [
        {
          title: "Personalised Car-following Modelling using Diffusion-based Model",
          role: "MSc Dissertation · Imperial College London",
          date: "Jan 2025 — Sep 2025",
          summary:
            "Designed a Transformer-based diffusion framework for trajectory prediction that captures long-horizon interactions between leading and following vehicles under uncertainty.",
          bullets: [
            "11% improvement over baseline models on the nuPlan dataset.",
            "Ablations show map-level features reduce loss by >20%.",
            "End-to-end pipeline on Linux: preprocessing → training → evaluation.",
          ],
          tags: ["PyTorch", "Diffusion", "Transformer", "nuPlan"],
        },
        {
          title: "Big Data & AI Logistics Model for First-Last Mile — India",
          role: "Project Leader · In collaboration with World Bank Group",
          date: "May 2025 — Jul 2025",
          summary:
            "Led a team building a hybrid classification framework that converts raw truck GPS trajectories into interpretable event-state representations.",
          bullets: [
            "+23% accuracy over benchmark deep-learning methods.",
            "Rule-based classifier fusing domain knowledge with speed / dwell / POI features.",
            "Interactive GIS dashboard for real-time monitoring.",
          ],
          tags: ["GIS", "Classification", "World Bank", "Python"],
        },
        {
          title: "ML for Policy: Reducing CO₂ Emissions in the Canadian Auto Sector",
          role: "Project Leader · Imperial College London",
          date: "Jan 2025 — Mar 2025",
          summary:
            "Built interpretable predictive models for vehicle CO₂ emissions and translated SHAP-based findings into concrete policy recommendations.",
          bullets: [
            "10% higher prediction accuracy versus baseline.",
            "SHAP identified vehicle type, mileage, engine efficiency as key drivers.",
            "Informed emission taxation, EV subsidy and regulatory strategies.",
          ],
          tags: ["SHAP", "Interpretability", "Policy", "Regression"],
        },
        {
          title: "A Topological Method in Music Recognition Algorithms",
          role: "Undergraduate Final Year Project · First-Class",
          date: "Sep 2023 — Jun 2024",
          summary:
            "Applied persistent homology to spectrograms to build audio fingerprints that are robust under pitch shifts — a novel topological alternative to Shazam-style algorithms.",
          bullets: [
            "+30% accuracy vs. Shazam on pitch-shifted audio.",
            "Converted geometric/topological structure into algebraic invariants.",
            "Bridged abstract math with practical audio-recognition pipelines.",
          ],
          tags: ["Persistent Homology", "TDA", "Audio", "Mathematics"],
        },
      ],
    },
    zh: {
      heading: "研究项目",
      subheading: "在帝国理工及之前完成的研究工作。",
      items: [
        {
          title: "基于扩散模型的个性化跟车建模",
          role: "硕士毕业论文 · 帝国理工学院",
          date: "2025 年 1 月 — 9 月",
          summary:
            "设计并实现了一种基于扩散模型的 Transformer 架构,用于复杂跟车场景下的轨迹预测,并对预测的不确定性进行建模。",
          bullets: [
            "在 nuPlan 数据集上相较基线提升 11%。",
            "消融实验证明引入地图信息后位移误差损失降低 20% 以上。",
            "在 Linux 环境下完成数据预处理、训练、评估的全流程。",
          ],
          tags: ["PyTorch", "Diffusion", "Transformer", "nuPlan"],
        },
        {
          title: "印度首末公里物流大数据与 AI 模型",
          role: "项目组长 · 与世界银行 (World Bank Group) 合作",
          date: "2025 年 5 月 — 7 月",
          summary:
            "带队构建混合分类框架,将原始卡车 GPS 轨迹转化为可解释的「事件 — 状态」表示,用于实时监控与调度。",
          bullets: [
            "相较深度学习基线方法分类精度提升 23%。",
            "融合本地交通知识与速度、停留、POI 等特征的规则分类器。",
            "搭建交互式 GIS 可视化平台。",
          ],
          tags: ["GIS", "分类", "世界银行", "Python"],
        },
        {
          title: "可解释机器学习驱动的加拿大汽车行业 CO₂ 减排政策",
          role: "项目组长 · 帝国理工学院",
          date: "2025 年 1 月 — 3 月",
          summary:
            "建立可解释的 CO₂ 排放预测模型,并基于 SHAP 分析将模型洞察转化为具体的政策建议。",
          bullets: [
            "预测准确率提升 10%。",
            "SHAP 分析识别出车型、行驶里程、发动机效率为关键驱动因素。",
            "为碳税、电车补贴、监管政策提供循证参考。",
          ],
          tags: ["SHAP", "可解释性", "政策", "回归"],
        },
        {
          title: "拓扑方法在音乐识别算法中的应用",
          role: "本科毕业设计 · 一等",
          date: "2023 年 9 月 — 2024 年 6 月",
          summary:
            "用持续同调从频谱图中提取拓扑特征,构建对音高变化鲁棒的音频指纹,为音乐识别提供新颖的拓扑思路。",
          bullets: [
            "在变调音频下相较 Shazam 精度高 30% 以上。",
            "将频谱图的几何 / 拓扑结构转化为可量化的代数不变量。",
            "把抽象数学理论落地为实际工业组件。",
          ],
          tags: ["持续同调", "TDA", "音频", "数学"],
        },
      ],
    },
  },
  education: {
    en: {
      heading: "Education",
      items: [
        {
          school: "Imperial College London",
          degree: "MSc in Transport with Data Science",
          date: "Sep 2024 — Sep 2025",
          location: "London, UK",
          detail: [
            "Merit with Distinction in Taught Modules.",
            "Core: Statistical Modelling (A), Machine Learning (A*), Data Engineering, Freight Transport & Logistics (A), Intelligent & Autonomous Transport.",
            "Dissertation: Personalised Car-following Modelling using Diffusion-based Model.",
          ],
        },
        {
          school: "Xi'an Jiaotong-Liverpool University",
          degree: "BSc in Applied Mathematics",
          date: "Sep 2020 — Jul 2024",
          location: "Suzhou, China",
          detail: [
            "GPA 3.79 / 4.0 · First-Class Degree with Honours.",
            "Core: Probability & Statistics, Analysis, Algebra, PDE/ODE, Topology, Functional & Numerical Analysis, Optimisation.",
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
          date: "2024 年 9 月 — 2025 年 9 月",
          location: "英国 · 伦敦",
          detail: [
            "Merit with Distinction(优异等级).",
            "核心课程:统计建模 (A)、机器学习 (A*)、数据工程、货运与物流 (A)、智能与自动交通.",
            "毕业论文:基于扩散模型的个性化跟车建模.",
          ],
        },
        {
          school: "西交利物浦大学",
          degree: "数学与应用数学 本科",
          date: "2020 年 9 月 — 2024 年 7 月",
          location: "中国 · 苏州",
          detail: [
            "GPA 3.79 / 4.0 · First-Class Honours(一等荣誉学位).",
            "核心课程:概率统计、分析、代数、偏微分方程、拓扑、泛函与数值分析、优化理论.",
            "毕业论文:音乐识别算法中的拓扑方法(一等).",
          ],
        },
      ],
    },
  },
  experience: {
    en: {
      heading: "Experience",
      items: [
        {
          company: "Anhui Zhinong Shidai Information Technology Co., Ltd.",
          role: "Data Analyst Intern",
          date: "Jun 2024 — Sep 2024",
          location: "Zhengzhou, China",
          detail: [
            "Spatio-temporal fusion of satellite remote sensing, meteorological and historical production datasets.",
            "Dynamic feature extraction for phenological stages and cumulative environmental stress.",
            "XGBoost yield-prediction model with R² > 0.8 on held-out data.",
          ],
        },
        {
          company: "Ying'anxin Equity Investment Fund Management Co., Ltd.",
          role: "Data Analyst Intern",
          date: "Jun 2022 — Sep 2022",
          location: "Zhengzhou, China",
          detail: [
            "Data cleaning, feature analysis and visualisation on commercial datasets.",
            "Python + R analytics to support market evaluation and decision-making.",
            "Lifted operational decision efficiency by ~15%.",
          ],
        },
      ],
    },
    zh: {
      heading: "实习经历",
      items: [
        {
          company: "安徽智农时代信息科技有限公司",
          role: "数据分析实习生",
          date: "2024 年 6 月 — 9 月",
          location: "中国 · 郑州",
          detail: [
            "对卫星遥感、气象与历史产量等异构时空数据进行清洗、对齐与融合.",
            "基于时序遥感 / 气象数据提取物候期与累积环境胁迫等动态特征.",
            "构建 XGBoost 产量预测模型,测试集 R² > 0.8.",
          ],
        },
        {
          company: "珠海横琴盈安信股权投资基金管理有限公司",
          role: "商业数据分析实习生",
          date: "2022 年 6 月 — 9 月",
          location: "中国 · 郑州",
          detail: [
            "多源商业数据清洗、特征分析与可视化,构建「社区渗透密度指数」等复合指标.",
            "基于 XGBoost 的价格敏感度建模,模拟补贴与履约策略影响.",
            "所提策略被采纳,整体运营决策效率提升约 15%.",
          ],
        },
      ],
    },
  },
  skills: {
    en: {
      heading: "Skills",
      groups: [
        { label: "Programming", items: ["Python", "PyTorch", "NumPy", "Pandas", "R", "MATLAB", "SQL", "Java", "LaTeX"] },
        { label: "Data & Systems", items: ["Linux", "Git", "Spatio-temporal Analysis", "Data Engineering", "Prompt Engineering"] },
        { label: "Methods", items: ["Deep Learning", "Diffusion Models", "Transformers", "XGBoost", "SHAP", "Topological DA"] },
        { label: "Languages", items: ["English (Professional)", "Mandarin Chinese (Native)"] },
      ],
    },
    zh: {
      heading: "技能",
      groups: [
        { label: "编程语言", items: ["Python", "PyTorch", "NumPy", "Pandas", "R", "MATLAB", "SQL", "Java", "LaTeX"] },
        { label: "数据与系统", items: ["Linux", "Git", "时空数据分析", "数据工程", "Prompt Engineering"] },
        { label: "方法栈", items: ["深度学习", "扩散模型", "Transformer", "XGBoost", "SHAP", "拓扑数据分析"] },
        { label: "语言", items: ["英语 (专业工作级)", "普通话 (母语)"] },
      ],
    },
  },
  contact: {
    en: {
      heading: "Get in touch",
      subheading: "Open to research collaborations, PhD opportunities and industry roles in AI / autonomous systems.",
      email: "yifanchen0726@gmail.com",
      phone: "+86 186 3816 8007",
      github: "https://github.com/cyf617",
      cv: "Download CV (EN)",
      cvZh: "下载中文简历",
    },
    zh: {
      heading: "联系我",
      subheading: "欢迎在 AI / 自动驾驶 / 智能交通方向的研究合作、博士机会与行业职位交流。",
      email: "yifanchen0726@gmail.com",
      phone: "+86 186 3816 8007",
      github: "https://github.com/cyf617",
      cv: "下载中文简历",
      cvZh: "Download CV (EN)",
    },
  },
  footer: {
    en: { built: "Built with Astro & Tailwind · Dark Tech Edition", rights: "© 2026 Yifan Chen" },
    zh: { built: "使用 Astro 与 Tailwind 构建 · 深色科技主题", rights: "© 2026 陈奕帆" },
  },
};
