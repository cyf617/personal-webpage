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
  // │ ① 顶部导航栏文字(点击跳到对应板块)
  // └──────────────────────────────────────────────────────
  nav: {
    en: { about: "About", research: "Projects", education: "Education", experience: "Experience", skills: "Skills", contact: "Contact" },
    zh: { about: "关于", research: "项目", education: "教育", experience: "经历", skills: "技能", contact: "联系" },
  },

  // ┌──────────────────────────────────────────────────────
  // │ ② 首屏 Hero 区(打开网站第一眼看到的大字)
  // └──────────────────────────────────────────────────────
  hero: {
    en: {
      greet: "// welcome",                                   // 名字上面那行小字
      name: "Yifan Chen",                                    // 大标题(英文名)
      title: "AI Data Analyst · Complex Mobility Systems · Trustworthy AI",   // 一句话身份
      tagline: "Exploring AI and data science, and applying them to transportation, sports, and multimodal content scenarios.", // 详细介绍一句
      location: "Beijing · London · Zhengzhou",
      cta1: "Contact Me",                                    // 第一个按钮文字
      cta2: "Download CV",                                   // 第二个按钮文字
    },
    zh: {
      greet: "// 你好",
      name: "陈奕帆",
      title: "AI 数据分析 · 复杂交通系统 · 可信 AI",
      tagline: "探索AI与数据科学，并尝试将他们应用到交通、体育等多模态内容场景中。",
      location: "北京 · 伦敦 · 郑州",
      cta1: "联系我",
      cta2: "下载简历",
    },
  },

  // ┌──────────────────────────────────────────────────────
  // │ ③ About 板块(关于我)
  // │   body 是数组,每个字符串是一段话。想加段落?在数组里加一行字符串。
  // │   interests 是首屏底部的小标签(研究兴趣)
  // └──────────────────────────────────────────────────────
  about: {
    en: {
      heading: "About",
      body: [
        "MSc in Transport and Data Science from Imperial College London; BSc in Applied Mathematics from Xi’an Jiaotong-Liverpool University. I explore multimodal AI and data science with a focus on making AI outputs more reliable, interpretable, and actionable.",
        "My core interests are AI data analysis, trustworthy AI in complex mobility systems, and AI for sports content and event understanding. I have rich experience in turning raw spatio-temporal data, event text, commentary corpora, audio snippets into data assets that are trainable, evaluable, and explainable.",
        "Recent work spans AI clipping, automated commentary, and audio-generation data pipelines across multiple sports; diffusion-based car-following trajectory prediction; large-scale truck GPS analytics for a World Bank project; and explainable ML for transportation and emissions policy analysis.",
      ],
      interests: ["AI Data Analysis", "Complex Mobility Systems", "Trustworthy AI", "Sports AI"],
    },
    zh: {
      heading: "关于我",
      body: [
        "帝国理工学院交通与数据科学硕士、西交利物浦大学数学与应用数学本科，希望在多模态AI、数据科学等领域探索，让 AI 输出更可靠、更可解释、更能落地。",
        "目前核心方向是 AI 数据分析、可信AI在复杂交通系统的应用，以及 AI 在体育内容和赛事理解中的应用。我有丰富的将原始时空数据、文本语料数据、音频片段数据等整理成可训练、评估、解释的数据资产的经验。",
        "近期工作覆盖多体育场景下的 AI 剪辑、自动解说和音频生成数据流程，基于扩散模型的跟车轨迹预测，面向世界银行项目的大规模卡车 GPS 轨迹分析，以及可解释机器学习驱动的交通与排放政策分析等。",
      ],
      interests: ["AI 数据分析", "复杂交通系统", "可信 AI", "体育 AI"],
    },
  },

  // ┌──────────────────────────────────────────────────────
  // │ ④ 研究项目板块 ⭐ 最常改的地方
  // │
  // │ 想加一个新项目:复制下面任意一整个 { title: ..., tags: [...] } 块,
  // │ 粘贴在 items 数组里,改掉内容即可。en 和 zh 里都要加,保证索引对应。
  // │
  // │ 字段说明:
  // │   title    项目标题
  // │   role     你的角色 / 所属机构(会显示成小蓝字)
  // │   date     时间段
  // │   summary  一句话概述
  // │   bullets  成果要点(数组,每条是一行,自动加 ▹ 符号)
  // │   tags     底部的技术标签(数组)
  // └──────────────────────────────────────────────────────
  research: {
    en: {
      heading: "Selected Projects",
      subheading: "Applied AI, data analysis and research across sports, mobility and trustworthy decision support.",
      items: [
        // ─── 项目 0 ───
        // {
        //   title: "Sports AI Data & Evaluation Pipelines for Basketball and Horse Racing",
        //   role: "AI Data Analyst / Prompt Engineer · Beijing Qiji Technology",
        //   date: "Mar 2026 — Present",
        //   summary:
        //     "Built structured data and evaluation workflows for AI clipping, automatic commentary, audio generation and sports-content understanding.",
        //   bullets: [
        //     "Integrated event labels, commentary corpora, audio clips and model outputs into queryable PostgreSQL / SQLite datasets.",
        //     "Designed prompt sample libraries, evaluation cases and error taxonomies to improve generation quality, diversity and stability.",
        //     "Analysed historical match and racing commentary with Python to surface semantic style patterns for product and model iteration.",
        //   ],
        //   tags: ["Sports AI", "Data Engineering", "Prompt Evaluation", "ASR / TTS"],
        // },
        // ─── 项目 1 ───
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
        // ─── 项目 2 ───
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
        // ─── 项目 3 ───
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
        // ─── 项目 4 ───
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
        // 想加新项目?在这里粘贴一个新的 { ... }, 块,结构照抄上面任意一个
      ],
    },
    zh: {
      heading: "项目经历",
      subheading: "覆盖体育 AI、复杂交通系统、可信 AI 与数据分析的代表性项目。",
      items: [
        // ─── 项目 0 ───
        // {
        //   title: "篮球与赛马场景的体育 AI 数据与评估流程",
        //   role: "AI 数据分析师 / Prompt Engineer · 北京麒纪科技",
        //   date: "2026 年 3 月 — 至今",
        //   summary:
        //     "围绕 AI 剪辑、自动解说、音频生成和赛事理解，构建结构化数据、Prompt 样本库、评估样例和错误案例库。",
        //   bullets: [
        //     "整合赛事文本、事件标签、解说语料、音频片段和模型输出，使用 PostgreSQL / SQLite 维护可检索、可评估的数据关系。",
        //     "迭代 Prompt 样本库、评估样例与错误案例库，提升生成内容在准确性、多样性、稳定性和风格匹配上的表现。",
        //     "使用 Python 对历史赛事与解说文本进行清洗、特征提取、聚类分析和语义风格分析，为产品和算法迭代提供依据。",
        //   ],
        //   tags: ["体育 AI", "数据工程", "Prompt 评估", "ASR / TTS"],
        // },
        // ─── 项目 1(对应英文项目 1,顺序必须一致) ───
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
        // ─── 项目 2 ───
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
        // ─── 项目 3 ───
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
        // ─── 项目 4 ───
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
        // 想加新项目?在这里粘贴新的 { ... }, 块(记得英文那边也要加同样位置的一块)
      ],
    },
  },

  // ┌──────────────────────────────────────────────────────
  // │ ⑤ 教育经历(时间线样式)
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
        // ─── 学历 1(最近的写最上面) ───
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
        // ─── 学历 2 ───
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
  // │ ⑥ 实习 / 工作经历(结构和 education 一样)
  // └──────────────────────────────────────────────────────
  experience: {
    en: {
      heading: "Experience",
      items: [
        {
          company: "Beijing KNQ Technology Co., Ltd.",
          role: "AI Data Analyst / Prompt Engineer",
          date: "Mar 2026 — Present",
          location: "Beijing, China",
          detail: [
            "Built data collection, cleaning, structuring and quality-control workflows for basketball and horse-racing AI products.",
            "Maintained PostgreSQL / SQLite mappings across events, clips, commentary text, audio files and model outputs to support retrieval, analysis and model evaluation.",
            "Designed prompt libraries, evaluation samples and error casebooks for AI clipping, automatic commentary and audio generation workflows.",
            "Analysed commentary style and model outputs across accuracy, consistency, style match and usability, feeding results back to algorithm and product teams.",
          ],
        },
        {
          company: "Anhui Zhinong Shidai Information Technology Co., Ltd.",
          role: "Data Mining / Data Analyst Intern",
          date: "Jun 2024 — Sep 2024",
          location: "Zhengzhou, China",
          detail: [
            "Processed multi-source spatio-temporal agricultural data, including historical yield, satellite remote sensing, meteorological and soil datasets.",
            "Extracted crop-growth and environmental-stress features from remote-sensing imagery and weather time series.",
            "Built Random Forest / XGBoost regression models on held-out data using time-series cross-validation and hyperparameter optimisation.",
          ],
        },
        {
          company: "Ying'anxin Equity Investment Fund Management Co., Ltd.",
          role: "Business Data Analyst Intern",
          date: "Jun 2022 — Sep 2022",
          location: "Zhengzhou, China",
          detail: [
            "Cleaned and integrated order, user-behaviour, community-operator and category-sales data for community group-buying analysis.",
            "Built conversion, repurchase, average-order-value and fulfilment-cost features to support promotion and category decisions.",
            "Used Python and scikit-learn to model price sensitivity and retention, improving operational decision efficiency.",
          ],
        },
      ],
    },
    zh: {
      heading: "工作与实习经历",
      items: [
        {
          company: "北京麒纪科技有限公司",
          role: "AI 数据分析师 / Prompt Engineer",
          date: "2026 年 3 月 — 至今",
          location: "中国 · 北京",
          detail: [
            "负责篮球、赛马等项目的数据采集、清洗、结构化与质量校验，整合赛事文本、解说语料、音频片段、事件标签和模型输出。",
            "维护 PostgreSQL / SQLite 数据库中赛事、片段、解说文本、音频文件及模型结果之间的字段映射关系，提升检索、分析和模型评估效率。",
            "围绕 AI 剪辑、自动解说、音频生成等场景，设计 Prompt 样本库、评估样例与错误案例库，支持模型持续优化。",
            "结合 ASR / TTS 等模型输出，从准确性、一致性、风格匹配度和可用性等维度分析模型表现，并反馈给算法与产品团队。",
          ],
        },
        {
          company: "安徽智农时代信息科技有限公司",
          role: "数据挖掘 / 数据分析实习生",
          date: "2024 年 6 月 — 9 月",
          location: "中国 · 郑州",
          detail: [
            "处理农业产量预测中的多源时空数据，整合历史产量、多时序卫星遥感、高精度气象及土壤属性数据。",
            "基于遥感影像与气象时间序列提取作物生长阶段特征，包括关键物候期、累积降水、温度变化和高温胁迫指数。",
            "使用 Random Forest、XGBoost 等机器学习回归模型进行产量预测，通过时序交叉验证和超参数调优降低过拟合风险。",
          ],
        },
        {
          company: "珠海横琴盈安信股权投资基金管理有限公司",
          role: "商业数据分析实习生",
          date: "2022 年 6 月 — 9 月",
          location: "中国 · 郑州",
          detail: [
            "围绕订单数据、用户行为、团长运营及品类销售数据进行清洗、整合与指标构建，支持识别高复购品类与重点运营社区。",
            "构建用户转化、复购频率、客单价、履约成本、社区渗透密度和促销敏感度等分析特征。",
            "使用 Python 与 scikit-learn 建立价格敏感度和用户留存分析模型，模拟补贴与履约费策略影响，推动运营决策效率提升。",
          ],
        },
      ],
    },
  },

  // ┌──────────────────────────────────────────────────────
  // │ ⑦ 技能板块
  // │
  // │ groups 是技能分组,每组一个 { label, items } 对象。
  // │ items 里每个字符串会渲染成一个小标签。
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
  // │ ⑧ 联系方式板块
  // │   email 和 phone 会显示在页面上
  // │   github 改了会影响 GitHub 按钮链接
  // │   想加 LinkedIn / Google Scholar?告诉我帮你加
  // └──────────────────────────────────────────────────────
  contact: {
    en: {
      heading: "Get in touch",
      subheading: "Open to AI data analysis, transportation AI, trustworthy AI evaluation and sports AI opportunities.",
      email: "yifanchen0726@gmail.com",
      phone: "+86 186 3816 8007",
      github: "https://github.com/cyf617",
      cv: "CV (EN)",
      cvZh: "CV (ZH)",
    },
    zh: {
      heading: "联系我",
      subheading: "欢迎交流 AI 数据分析、交通 AI、可信 AI 和体育 AI 方向的研究、产品与岗位机会。",
      email: "yifanchen0726@gmail.com",
      phone: "+86 186 3816 8007",
      github: "https://github.com/cyf617",
      cv: "英文简历",
      cvZh: "中文简历",
    },
  },

  // ┌──────────────────────────────────────────────────────
  // │ ⑨ 底部 Footer
  // └──────────────────────────────────────────────────────
  footer: {
    en: { built: "Built with Astro & Tailwind · Dark Tech Edition", rights: "© 2026 Yifan Chen" },
    zh: { built: "使用 Astro 与 Tailwind 构建 · 深色科技主题", rights: "© 2026 陈奕帆" },
  },
};
