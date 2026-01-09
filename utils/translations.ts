import { Language } from '../types';

export const translations = {
  [Language.EN]: {
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      technologies: 'Technologies',
      simulation: 'VSG Simulation',
      hydro: 'Hydro Tool',
      contact: 'Contact',
      request: 'Request Proposal'
    },
    hero: {
      title: 'Reliable Green Energy Anywhere, Anytime.',
      titleHigh: 'Green Energy',
      subtitle: 'EnovoGrid transforms "Small Energy Systems" into turnkey engineering products. We ensure stable, affordable, and manageable power for islands, mines, and remote communities worldwide.',
      explore: 'Explore Solutions',
      book: 'Book a Consultation'
    },
    home: {
      valueTitle: 'Engineering Reliability',
      valueDesc: 'From feasibility to O&M, we provide lifecycle services ensuring your project moves from "Functional" to "Excellent".',
      features: {
        vsg: { title: 'VSG Control', desc: 'Virtual Synchronous Generator tech for grid-forming stability and inertia.' },
        bess: { title: 'BESS Integration', desc: 'Advanced storage strategies for peak shaving and seamless backup.' },
        hybrid: { title: 'Hybrid Optimization', desc: 'Synergy between Hydro, PV, and Diesel for lowest LCOE.' },
        om: { title: 'Lifecycle O&M', desc: 'Remote monitoring and standardized maintenance for long-term ROI.' }
      },
      scenarios: {
        imgLabel: 'Remote Mining Site Project',
        missionLabel: 'Our Mission',
        missionTitle: 'Empowering Off-Grid Communities',
        missionDesc: 'Whether it is retrofitting an old small hydro station or building a new solar-storage microgrid for an island resort, EnovoGrid focuses on the "unseen" quality of power.',
        list: [
          'High Renewable Penetration',
          'Seamless On/Off Grid Switching',
          'Diesel Savings up to 80%'
        ],
        learnMore: 'Learn about our Tech'
      }
    },
    footer: {
      desc: 'Turning "Small Energy Systems" into turnkey engineering products. We provide one-stop reliable energy solutions for the global market.',
      solutions: 'Solutions',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'Enovo Microgrid Technology Co. Ltd. All rights reserved.',
      address: 'Hangzhou, China (HQ)'
    },
    solutions: {
      title: 'Tailored Solutions',
      subtitle: 'Addressing specific energy challenges across diverse scenarios.',
      items: [
        {
          id: '1',
          title: 'Rural Electrification',
          category: 'Government / Public Utility',
          description: 'Replicable and scalable schemes for civil power supply. From feasibility to integrated O&M, ensuring long-term reliability for villages.'
        },
        {
          id: '2',
          title: 'Utility / Weak-grid Improvement',
          category: 'Grid Company',
          description: 'Making weak grids controllable. Using VSG + BESS + EMS to improve power quality, reduce line loss, and allow high renewable penetration.'
        },
        {
          id: '3',
          title: 'Islands & Eco-Resorts',
          category: 'Hospitality',
          description: 'Quiet, stable, low-fuel power. Protect brand image with blackout-free guarantees and reduced diesel noise/smell.'
        },
        {
          id: '4',
          title: 'Industrial & Mining Sites',
          category: 'Enterprise',
          description: 'Production first. High shock resistance for heavy motors. Optimization of LCOE and reduction of diesel dependency without sacrificing reliability.'
        },
        {
          id: '5',
          title: 'Small Hydro Retrofit',
          category: 'Owners',
          description: 'Upgrade old stations to "smart" plants. Improve efficiency, automate controls, and integrate into modern microgrids.'
        },
        {
          id: '6',
          title: 'Development Finance Projects',
          category: 'ADB / World Bank',
          description: 'Standardized packages + Localized O&M. Audit-ready data (MRV/KPI) for sustainable electrification funding.'
        },
        {
          id: '7',
          title: 'EPC Partnerships',
          category: 'System Integrators',
          description: 'Risk reduction buffer. Fast integration, standard interfaces, and remote commissioning support to minimize penalties.'
        },
        {
          id: '8',
          title: 'Resilience & Emergency',
          category: 'Defense / Telecom',
          description: 'Rapid deployment, black-start capability, and modular expansion for disaster relief or border posts.'
        }
      ]
    },
    technologies: {
      title: 'Core Technologies',
      subtitle: 'Our technology stack transforms reliable hardware into an intelligent, resilient system.',
      kpiLabel: 'Key Performance Indicators',
      items: [
         {
          id: 'vsg',
          title: 'VSG (Grid-Forming Control)',
          description: 'Like an "invisible flywheel". It enables weak grids to resist load shocks, maintain frequency/voltage stability, and supports black start and seamless on/off-grid switching.',
          kpis: ['Grid connection rate', 'Blackout duration', 'Availability'],
          icon: '⚡'
        },
        {
          id: 'hydro',
          title: 'Small Hydro Upgrade',
          description: 'The "Stable Base". We upgrade old governors/exciters to make hydro controllable and compatible with modern EMS. Essential for 24/7 baseload.',
          kpis: ['Availability', 'LCOE', 'Dispatchability'],
          icon: '💧'
        },
        {
          id: 'pv',
          title: 'Solar PV Integration',
          description: 'Systematic implementation. AC/DC coupling strategies with lightning protection. Focus is not just installed capacity, but absorption capacity.',
          kpis: ['Diesel replacement rate', 'LCOE', 'Absorption rate'],
          icon: '☀️'
        },
        {
          id: 'bess',
          title: 'BESS (Storage System)',
          description: 'Buffer + Stabilizer. From BMS/PCS to thermal management. The strategy is key: ensuring battery longevity while maximizing diesel savings.',
          kpis: ['Cycle life cost', 'Response time', 'Safety'],
          icon: '🔋'
        },
        {
          id: 'ems',
          title: 'EMS / Microgrid Controller',
          description: 'The "Driver". Unifies multiple sources into one strategy. Predicts load, optimizes diesel start/stop, and provides standard interfaces for expansion.',
          kpis: ['Automation level', 'O&M cost reduction', 'Fuel savings'],
          icon: '🧠'
        }
      ]
    },
    simulation: {
      title: 'VSG Stability Simulation',
      desc: 'Visualize how EnovoGrid\'s Virtual Synchronous Generator (VSG) technology maintains power quality during sudden load changes compared to traditional weak grids.',
      legendVSG: 'With Enovo VSG',
      legendNoVSG: 'Traditional / No VSG',
      regenerate: 'Regenerate Load Event',
      yAxis: 'Voltage (V)',
      xAxis: 'Time (ms)',
      eventLabel: 'Heavy Load On',
      advTitle: 'The VSG Advantage',
      advDesc: 'Mimics the inertia of a rotating machine. Voltage drops are cushioned, and recovery is smooth. This prevents sensitive electronics from tripping and ensures system stability.',
      disadvTitle: 'Without Stability Control',
      disadvDesc: 'In weak grids, sudden load changes cause deep voltage sags and oscillations. This reduces the lifespan of appliances and can lead to total system blackouts.'
    },
    hydroTool: {
      title: 'Hydro Station Site Selection Tool',
      subtitle: 'A preview of our proprietary toolkit for evaluating small hydro potential.',
      slides: [
        {
          title: 'Site Assessment',
          desc: 'Analyzing hydrology data and topological terrain to determine optimal head and flow.'
        },
        {
          title: 'Turbine Selection',
          desc: 'Matching the right turbine type (Pelton, Francis, Kaplan) to the flow duration curve.'
        },
        {
          title: 'Civil Works Planning',
          desc: 'Designing intake, penstock, and powerhouse layout for minimal environmental impact.'
        }
      ],
      step: 'Step'
    },
    contact: {
      title: 'Get a Proposal',
      subtitle: 'Tell us about your project. We\'ll engineer the reliability.',
      name: 'Full Name',
      org: 'Company / Organization',
      email: 'Email Address',
      scenario: 'Project Scenario',
      details: 'Project Details / Requirements',
      detailsPlaceholder: 'Describe load, location, and existing assets...',
      send: 'Send Request',
      scenarios: {
        default: 'Select a scenario...',
        rural: 'Rural Electrification',
        island: 'Island / Resort',
        mining: 'Mining / Industrial',
        weak: 'Weak Grid Improvement',
        hydro: 'Hydro Retrofit',
        other: 'Other'
      }
    }
  },
  [Language.ZH]: {
    nav: {
      home: '首页',
      solutions: '解决方案',
      technologies: '核心技术',
      simulation: 'VSG仿真',
      hydro: '水电选址',
      contact: '联系我们',
      request: '获取方案'
    },
    hero: {
      title: '随时随地，可靠的',
      titleHigh: '绿色能源',
      subtitle: 'EnovoGrid 将“小型能源系统”转化为交钥匙工程产品。我们确保全球岛屿、矿山和偏远社区拥有稳定、可负担且易于管理的电力。',
      explore: '探索解决方案',
      book: '预约咨询'
    },
    home: {
      valueTitle: '工程可靠性',
      valueDesc: '从可行性分析到运维，我们提供全生命周期服务，确保您的项目从“功能性”迈向“卓越性”。',
      features: {
        vsg: { title: 'VSG 控制', desc: '虚拟同步发电机技术，提供构网型稳定性和惯量支持。' },
        bess: { title: 'BESS 集成', desc: '先进的储能策略，用于削峰填谷和无缝备用电源。' },
        hybrid: { title: '混合能源优化', desc: '水电、光伏和柴油机的协同优化，实现最低平准化度电成本 (LCOE)。' },
        om: { title: '全生命周期运维', desc: '远程监控和标准化维护，确保长期投资回报。' }
      },
      scenarios: {
        imgLabel: '偏远矿区项目',
        missionLabel: '我们的使命',
        missionTitle: '赋能离网社区',
        missionDesc: '无论是改造老旧的小水电站，还是为海岛度假村建设新的光储微电网，EnovoGrid 都专注于“看不见”的电能质量。',
        list: [
          '高比例可再生能源渗透',
          '无缝并离网切换',
          '节省柴油高达 80%'
        ],
        learnMore: '了解我们的技术'
      }
    },
    footer: {
      desc: '将“小型能源系统”转化为交钥匙工程产品。我们为全球市场提供一站式可靠的能源解决方案。',
      solutions: '解决方案',
      contact: '联系方式',
      privacy: '隐私政策',
      terms: '服务条款',
      rights: 'Enovo微网科技有限公司 版权所有。',
      address: '中国 杭州 (总部)'
    },
    solutions: {
      title: '定制化解决方案',
      subtitle: '针对不同场景的特定能源挑战。',
      items: [
        {
          id: '1',
          title: '乡村电气化',
          category: '政府 / 公共事业',
          description: '可复制、可扩展的民用供电方案。从可行性到集成运维，确保村庄长期可靠用电。'
        },
        {
          id: '2',
          title: '电网薄弱点改善',
          category: '电网公司',
          description: '让弱电网变得可控。利用 VSG + BESS + EMS 改善电能质量，降低线损，并允许高比例新能源接入。'
        },
        {
          id: '3',
          title: '海岛与生态度假村',
          category: '酒店业',
          description: '安静、稳定、低燃料消耗的电力。通过零停电保证和减少柴油噪音/气味来保护品牌形象。'
        },
        {
          id: '4',
          title: '工业与矿山现场',
          category: '企业',
          description: '生产至上。针对重型电机的高抗冲击性。在不牺牲可靠性的前提下优化 LCOE 并减少对柴油的依赖。'
        },
        {
          id: '5',
          title: '小水电改造',
          category: '业主',
          description: '将老旧电站升级为“智能”电厂。提高效率，自动化控制，并集成到现代微电网中。'
        },
        {
          id: '6',
          title: '开发金融项目',
          category: '亚行 / 世界银行',
          description: '标准化方案 + 本地化运维。提供审计就绪的数据 (MRV/KPI)，用于可持续电气化资金申请。'
        },
        {
          id: '7',
          title: 'EPC 合作伙伴',
          category: '系统集成商',
          description: '风险缓冲。快速集成，标准接口，以及远程调试支持，最大限度减少罚款风险。'
        },
        {
          id: '8',
          title: '应急与国防',
          category: '国防 / 电信',
          description: '快速部署，黑启动能力，以及模块化扩展，用于救灾或边境哨所。'
        }
      ]
    },
    technologies: {
      title: '核心技术',
      subtitle: '我们的技术栈将可靠的硬件转化为智能、弹性的系统。',
      kpiLabel: '关键绩效指标 (KPI)',
      items: [
         {
          id: 'vsg',
          title: 'VSG (构网型控制)',
          description: '像一个“隐形飞轮”。它使弱电网能够抵抗负载冲击，维持频率/电压稳定，并支持黑启动和无缝并离网切换。',
          kpis: ['并网成功率', '停电时长', '可用性'],
          icon: '⚡'
        },
        {
          id: 'hydro',
          title: '小水电升级',
          description: '“稳定的基石”。我们升级老旧的调速器/励磁系统，使水电可控并兼容现代 EMS。这对 24/7 基本负荷至关重要。',
          kpis: ['可用性', '平准化度电成本 (LCOE)', '可调度性'],
          icon: '💧'
        },
        {
          id: 'pv',
          title: '光伏集成',
          description: '系统化实施。包含防雷保护的交流/直流耦合策略。重点不仅仅是装机容量，而是消纳能力。',
          kpis: ['柴油替代率', 'LCOE', '消纳率'],
          icon: '☀️'
        },
        {
          id: 'bess',
          title: 'BESS (储能系统)',
          description: '缓冲 + 稳定器。从 BMS/PCS 到热管理。策略是关键：在最大化节省柴油的同时确保电池寿命。',
          kpis: ['全生命周期成本', '响应时间', '安全性'],
          icon: '🔋'
        },
        {
          id: 'ems',
          title: 'EMS / 微网控制器',
          description: '“驾驶员”。将多种能源统一到一个策略中。预测负载，优化柴油机启停，并为扩展提供标准接口。',
          kpis: ['自动化水平', '运维成本降低', '燃料节省'],
          icon: '🧠'
        }
      ]
    },
    simulation: {
      title: 'VSG 稳定性仿真',
      desc: '可视化展示 EnovoGrid 的虚拟同步发电机 (VSG) 技术如何在突发负载变化时保持电能质量 (对比传统弱电网)。',
      legendVSG: '使用 Enovo VSG',
      legendNoVSG: '传统 / 无 VSG',
      regenerate: '重新生成负载事件',
      yAxis: '电压 (V)',
      xAxis: '时间 (ms)',
      eventLabel: '重载投入',
      advTitle: 'VSG 优势',
      advDesc: '模拟旋转电机的惯量。缓冲电压跌落，平滑恢复。这防止了敏感电子设备跳闸并确保系统稳定。',
      disadvTitle: '无稳定性控制',
      disadvDesc: '在弱电网中，突然的负载变化会导致严重的电压骤降和震荡。这会缩短电器寿命并可能导致系统彻底停电。'
    },
    hydroTool: {
      title: '水电站选址工具',
      subtitle: '预览我们用于评估小水电潜力的专有工具包。',
      slides: [
        {
          title: '站址评估',
          desc: '分析水文数据和地形地貌，以确定最佳水头和流量。'
        },
        {
          title: '水轮机选型',
          desc: '将合适的水轮机类型（冲击式、混流式、轴流式）与流量历时曲线相匹配。'
        },
        {
          title: '土建规划',
          desc: '设计进水口、压力钢管和厂房布局，以尽量减少环境影响。'
        }
      ],
      step: '步骤'
    },
    contact: {
      title: '获取方案',
      subtitle: '告诉我们您的项目。我们来设计可靠性。',
      name: '姓名',
      org: '公司 / 组织',
      email: '电子邮箱',
      scenario: '项目场景',
      details: '项目详情 / 需求',
      detailsPlaceholder: '描述负载、地点和现有资产...',
      send: '发送请求',
      scenarios: {
        default: '选择场景...',
        rural: '乡村电气化',
        island: '海岛 / 度假村',
        mining: '矿山 / 工业',
        weak: '弱电网改善',
        hydro: '水电改造',
        other: '其他'
      }
    }
  },
  [Language.FR]: {
    nav: {
      home: 'Accueil',
      solutions: 'Solutions',
      technologies: 'Technologies',
      simulation: 'Simulation VSG',
      hydro: 'Outil Hydro',
      contact: 'Contact',
      request: 'Demander une proposition'
    },
    hero: {
      title: 'Énergie verte fiable',
      titleHigh: 'partout, à tout moment',
      subtitle: 'EnovoGrid transforme les "petits systèmes énergétiques" en produits d\'ingénierie clé en main. Nous garantissons une énergie stable, abordable et gérable pour les îles, les mines et les communautés isolées du monde entier.',
      explore: 'Explorer les solutions',
      book: 'Prendre rendez-vous'
    },
    home: {
      valueTitle: 'Fiabilité technique',
      valueDesc: 'De la faisabilité à l\'O&M, nous fournissons des services tout au long du cycle de vie pour que votre projet passe de "Fonctionnel" à "Excellent".',
      features: {
        vsg: { title: 'Contrôle VSG', desc: 'Technologie de générateur synchrone virtuel pour la stabilité et l\'inertie du réseau.' },
        bess: { title: 'Intégration BESS', desc: 'Stratégies de stockage avancées pour l\'écrêtage des pointes et le secours sans faille.' },
        hybrid: { title: 'Optimisation hybride', desc: 'Synergie entre Hydro, PV et Diesel pour un LCOE le plus bas.' },
        om: { title: 'O&M Cycle de vie', desc: 'Surveillance à distance et maintenance standardisée pour un retour sur investissement à long terme.' }
      },
      scenarios: {
        imgLabel: 'Projet minier isolé',
        missionLabel: 'Notre Mission',
        missionTitle: 'Autonomiser les communautés hors réseau',
        missionDesc: 'Qu\'il s\'agisse de moderniser une ancienne petite centrale hydroélectrique ou de construire un nouveau micro-réseau solaire-stockage pour un complexe insulaire, EnovoGrid se concentre sur la qualité "invisible" de l\'énergie.',
        list: [
          'Haute pénétration des énergies renouvelables',
          'Commutation transparente réseau/hors réseau',
          'Économies de diesel jusqu\'à 80%'
        ],
        learnMore: 'En savoir plus sur notre technologie'
      }
    },
    footer: {
      desc: 'Transformer les "petits systèmes énergétiques" en produits d\'ingénierie clé en main. Nous fournissons des solutions énergétiques fiables et complètes pour le marché mondial.',
      solutions: 'Solutions',
      contact: 'Contact',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      rights: 'Enovo Microgrid Technology Co. Ltd. Tous droits réservés.',
      address: 'Hangzhou, Chine (Siège)'
    },
    solutions: {
      title: 'Solutions sur mesure',
      subtitle: 'Répondre aux défis énergétiques spécifiques à travers divers scénarios.',
      items: [
        {
          id: '1',
          title: 'Électrification rurale',
          category: 'Gouvernement / Services publics',
          description: 'Schémas reproductibles et évolutifs pour l\'alimentation électrique civile. De la faisabilité à l\'O&M intégrée, assurant une fiabilité à long terme pour les villages.'
        },
        {
          id: '2',
          title: 'Amélioration des réseaux faibles',
          category: 'Compagnie d\'électricité',
          description: 'Rendre les réseaux faibles contrôlables. Utiliser VSG + BESS + EMS pour améliorer la qualité de l\'énergie, réduire les pertes en ligne et permettre une forte pénétration des énergies renouvelables.'
        },
        {
          id: '3',
          title: 'Îles & Éco-Resorts',
          category: 'Hôtellerie',
          description: 'Une énergie silencieuse, stable et à faible consommation de carburant. Protégez l\'image de marque avec des garanties anti-coupure et une réduction du bruit/odeur de diesel.'
        },
        {
          id: '4',
          title: 'Sites industriels & miniers',
          category: 'Entreprise',
          description: 'La production d\'abord. Haute résistance aux chocs pour les moteurs lourds. Optimisation du LCOE et réduction de la dépendance au diesel sans sacrifier la fiabilité.'
        },
        {
          id: '5',
          title: 'Rénovation petite hydro',
          category: 'Propriétaires',
          description: 'Mettre à niveau les anciennes stations en centrales "intelligentes". Améliorer l\'efficacité, automatiser les contrôles et intégrer dans les micro-réseaux modernes.'
        },
        {
          id: '6',
          title: 'Projets de financement du développement',
          category: 'ADB / Banque mondiale',
          description: 'Forfaits standardisés + O&M localisée. Données prêtes pour l\'audit (MRV/KPI) pour le financement durable de l\'électrification.'
        },
        {
          id: '7',
          title: 'Partenariats EPC',
          category: 'Intégrateurs système',
          description: 'Tampon de réduction des risques. Intégration rapide, interfaces standard et support de mise en service à distance pour minimiser les pénalités.'
        },
        {
          id: '8',
          title: 'Résilience & Urgence',
          category: 'Défense / Télécom',
          description: 'Déploiement rapide, capacité de démarrage à noir et expansion modulaire pour les secours en cas de catastrophe ou les postes frontières.'
        }
      ]
    },
    technologies: {
      title: 'Technologies clés',
      subtitle: 'Notre pile technologique transforme le matériel fiable en un système intelligent et résilient.',
      kpiLabel: 'Indicateurs clés de performance (KPI)',
      items: [
         {
          id: 'vsg',
          title: 'VSG (Contrôle Grid-Forming)',
          description: 'Comme un "volant d\'inertie invisible". Il permet aux réseaux faibles de résister aux chocs de charge, de maintenir la stabilité fréquence/tension et prend en charge le démarrage à noir et la commutation transparente réseau/hors réseau.',
          kpis: ['Taux de connexion au réseau', 'Durée de panne', 'Disponibilité'],
          icon: '⚡'
        },
        {
          id: 'hydro',
          title: 'Mise à niveau petite hydro',
          description: 'La "Base Stable". Nous mettons à niveau les anciens régulateurs/excitateurs pour rendre l\'hydro contrôlable et compatible avec les EMS modernes. Essentiel pour la charge de base 24/7.',
          kpis: ['Disponibilité', 'LCOE', 'Dispatachabilité'],
          icon: '💧'
        },
        {
          id: 'pv',
          title: 'Intégration PV Solaire',
          description: 'Mise en œuvre systématique. Stratégies de couplage AC/DC avec protection contre la foudre. L\'accent n\'est pas seulement sur la capacité installée, mais sur la capacité d\'absorption.',
          kpis: ['Taux de remplacement du diesel', 'LCOE', 'Taux d\'absorption'],
          icon: '☀️'
        },
        {
          id: 'bess',
          title: 'BESS (Système de stockage)',
          description: 'Tampon + Stabilisateur. Du BMS/PCS à la gestion thermique. La stratégie est clé : assurer la longévité de la batterie tout en maximisant les économies de diesel.',
          kpis: ['Coût du cycle de vie', 'Temps de réponse', 'Sécurité'],
          icon: '🔋'
        },
        {
          id: 'ems',
          title: 'EMS / Contrôleur Microgrid',
          description: 'Le "Conducteur". Unifie plusieurs sources en une seule stratégie. Prévoit la charge, optimise le démarrage/arrêt du diesel et fournit des interfaces standard pour l\'expansion.',
          kpis: ['Niveau d\'automatisation', 'Réduction des coûts O&M', 'Économies de carburant'],
          icon: '🧠'
        }
      ]
    },
    simulation: {
      title: 'Simulation de stabilité VSG',
      desc: 'Visualisez comment la technologie de générateur synchrone virtuel (VSG) d\'EnovoGrid maintient la qualité de l\'énergie lors de changements soudains de charge par rapport aux réseaux faibles traditionnels.',
      legendVSG: 'Avec Enovo VSG',
      legendNoVSG: 'Traditionnel / Sans VSG',
      regenerate: 'Régénérer l\'événement de charge',
      yAxis: 'Tension (V)',
      xAxis: 'Temps (ms)',
      eventLabel: 'Charge lourde activée',
      advTitle: 'L\'avantage VSG',
      advDesc: 'Imite l\'inertie d\'une machine rotative. Les chutes de tension sont amorties et la récupération est fluide. Cela empêche le déclenchement des appareils électroniques sensibles et assure la stabilité du système.',
      disadvTitle: 'Sans contrôle de stabilité',
      disadvDesc: 'Dans les réseaux faibles, les changements soudains de charge provoquent de profonds creux de tension et des oscillations. Cela réduit la durée de vie des appareils et peut entraîner des pannes totales du système.'
    },
    hydroTool: {
      title: 'Outil de sélection de site hydro',
      subtitle: 'Un aperçu de notre boîte à outils propriétaire pour évaluer le potentiel de la petite hydroélectricité.',
      slides: [
        {
          title: 'Évaluation du site',
          desc: 'Analyse des données hydrologiques et du terrain topologique pour déterminer la hauteur de chute et le débit optimaux.'
        },
        {
          title: 'Sélection de la turbine',
          desc: 'Faire correspondre le bon type de turbine (Pelton, Francis, Kaplan) à la courbe des débits classés.'
        },
        {
          title: 'Planification du génie civil',
          desc: 'Conception de la prise d\'eau, de la conduite forcée et de l\'agencement de la centrale pour un impact environnemental minimal.'
        }
      ],
      step: 'Étape'
    },
    contact: {
      title: 'Obtenir une proposition',
      subtitle: 'Parlez-nous de votre projet. Nous concevons la fiabilité.',
      name: 'Nom complet',
      org: 'Entreprise / Organisation',
      email: 'Adresse e-mail',
      scenario: 'Scénario du projet',
      details: 'Détails du projet / Exigences',
      detailsPlaceholder: 'Décrivez la charge, l\'emplacement et les actifs existants...',
      send: 'Envoyer la demande',
      scenarios: {
        default: 'Sélectionnez un scénario...',
        rural: 'Électrification rurale',
        island: 'Île / Station balnéaire',
        mining: 'Minier / Industriel',
        weak: 'Amélioration du réseau faible',
        hydro: 'Rénovation hydro',
        other: 'Autre'
      }
    }
  },
  [Language.ES]: {
    nav: {
      home: 'Inicio',
      solutions: 'Soluciones',
      technologies: 'Tecnologías',
      simulation: 'Simulación VSG',
      hydro: 'Herramienta Hidro',
      contact: 'Contacto',
      request: 'Solicitar Propuesta'
    },
    hero: {
      title: 'Energía Verde Confiable',
      titleHigh: 'Donde Sea, Cuando Sea',
      subtitle: 'EnovoGrid transforma "Pequeños Sistemas de Energía" en productos de ingeniería llave en mano. Garantizamos energía estable, asequible y manejable para islas, minas y comunidades remotas en todo el mundo.',
      explore: 'Explorar Soluciones',
      book: 'Reservar Consulta'
    },
    home: {
      valueTitle: 'Ingeniería de Confiabilidad',
      valueDesc: 'Desde la viabilidad hasta O&M, brindamos servicios de ciclo de vida asegurando que su proyecto pase de "Funcional" a "Excelente".',
      features: {
        vsg: { title: 'Control VSG', desc: 'Tecnología de Generador Síncrono Virtual para estabilidad de red e inercia.' },
        bess: { title: 'Integración BESS', desc: 'Estrategias de almacenamiento avanzadas para el afeitado de picos y respaldo sin interrupciones.' },
        hybrid: { title: 'Optimización Híbrida', desc: 'Sinergia entre Hidro, PV y Diesel para el LCOE más bajo.' },
        om: { title: 'O&M Ciclo de vida', desc: 'Monitoreo remoto y mantenimiento estandarizado para un ROI a largo plazo.' }
      },
      scenarios: {
        imgLabel: 'Proyecto en Sitio Minero Remoto',
        missionLabel: 'Nuestra Misión',
        missionTitle: 'Empoderando Comunidades Aisladas',
        missionDesc: 'Ya sea modernizando una vieja estación hidroeléctrica pequeña o construyendo una nueva microrred solar con almacenamiento para un resort en una isla, EnovoGrid se enfoca en la calidad "invisible" de la energía.',
        list: [
          'Alta Penetración Renovable',
          'Conmutación Sin Interrupciones Red/Isla',
          'Ahorros de Diesel hasta 80%'
        ],
        learnMore: 'Conoce nuestra Tecnología'
      }
    },
    footer: {
      desc: 'Transformando "Pequeños Sistemas de Energía" en productos de ingeniería llave en mano. Ofrecemos soluciones energéticas confiables integrales para el mercado global.',
      solutions: 'Soluciones',
      contact: 'Contacto',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      rights: 'Enovo Microgrid Technology Co. Ltd. Todos los derechos reservados.',
      address: 'Hangzhou, China (Sede)'
    },
    solutions: {
      title: 'Soluciones a Medida',
      subtitle: 'Abordando desafíos energéticos específicos en diversos escenarios.',
      items: [
        {
          id: '1',
          title: 'Electrificación Rural',
          category: 'Gobierno / Servicios Públicos',
          description: 'Esquemas replicables y escalables para suministro eléctrico civil. Desde viabilidad hasta O&M integrado, asegurando confiabilidad a largo plazo para aldeas.'
        },
        {
          id: '2',
          title: 'Mejora de Red Débil',
          category: 'Compañía Eléctrica',
          description: 'Haciendo controlables las redes débiles. Usando VSG + BESS + EMS para mejorar la calidad de energía, reducir pérdidas de línea y permitir alta penetración renovable.'
        },
        {
          id: '3',
          title: 'Islas y Eco-Resorts',
          category: 'Hostelería',
          description: 'Energía silenciosa, estable y de bajo combustible. Proteja la imagen de marca con garantías de no apagones y reducción de ruido/olor a diesel.'
        },
        {
          id: '4',
          title: 'Sitios Industriales y Mineros',
          category: 'Empresa',
          description: 'Producción primero. Alta resistencia a choques para motores pesados. Optimización de LCOE y reducción de dependencia de diesel sin sacrificar confiabilidad.'
        },
        {
          id: '5',
          title: 'Retrofit Pequeña Hidro',
          category: 'Propietarios',
          description: 'Actualizar estaciones viejas a plantas "inteligentes". Mejorar eficiencia, automatizar controles e integrar en microrredes modernas.'
        },
        {
          id: '6',
          title: 'Proyectos de Financiación',
          category: 'ADB / Banco Mundial',
          description: 'Paquetes estandarizados + O&M localizado. Datos listos para auditoría (MRV/KPI) para financiación de electrificación sostenible.'
        },
        {
          id: '7',
          title: 'Asociaciones EPC',
          category: 'Integradores de Sistemas',
          description: 'Amortiguador de riesgos. Integración rápida, interfaces estándar y soporte de puesta en marcha remota para minimizar penalizaciones.'
        },
        {
          id: '8',
          title: 'Resiliencia y Emergencia',
          category: 'Defensa / Telecom',
          description: 'Despliegue rápido, capacidad de arranque en negro y expansión modular para ayuda en desastres o puestos fronterizos.'
        }
      ]
    },
    technologies: {
      title: 'Tecnologías Principales',
      subtitle: 'Nuestra pila tecnológica transforma hardware confiable en un sistema inteligente y resiliente.',
      kpiLabel: 'Indicadores Clave de Desempeño (KPI)',
      items: [
         {
          id: 'vsg',
          title: 'VSG (Control Grid-Forming)',
          description: 'Como un "volante de inercia invisible". Permite que las redes débiles resistan choques de carga, mantengan estabilidad de frecuencia/voltaje y soporta arranque en negro y conmutación red/isla.',
          kpis: ['Tasa de conexión a red', 'Duración de apagón', 'Disponibilidad'],
          icon: '⚡'
        },
        {
          id: 'hydro',
          title: 'Actualización Pequeña Hidro',
          description: 'La "Base Estable". Actualizamos viejos gobernadores/excitadores para hacer la hidro controlable y compatible con EMS modernos. Esencial para carga base 24/7.',
          kpis: ['Disponibilidad', 'LCOE', 'Despachabilidad'],
          icon: '💧'
        },
        {
          id: 'pv',
          title: 'Integración Solar FV',
          description: 'Implementación sistemática. Estrategias de acoplamiento AC/DC con protección contra rayos. El enfoque no es solo la capacidad instalada, sino la capacidad de absorción.',
          kpis: ['Tasa reemplazo diesel', 'LCOE', 'Tasa absorción'],
          icon: '☀️'
        },
        {
          id: 'bess',
          title: 'BESS (Sistema de Almacenamiento)',
          description: 'Búfer + Estabilizador. Desde BMS/PCS hasta gestión térmica. La estrategia es clave: asegurar longevidad de batería maximizando ahorros de diesel.',
          kpis: ['Costo ciclo vida', 'Tiempo respuesta', 'Seguridad'],
          icon: '🔋'
        },
        {
          id: 'ems',
          title: 'EMS / Controlador Microrred',
          description: 'El "Conductor". Unifica múltiples fuentes en una estrategia. Predice carga, optimiza arranque/parada de diesel y provee interfaces estándar para expansión.',
          kpis: ['Nivel automatización', 'Reducción costos O&M', 'Ahorro combustible'],
          icon: '🧠'
        }
      ]
    },
    simulation: {
      title: 'Simulación Estabilidad VSG',
      desc: 'Visualice cómo la tecnología de Generador Síncrono Virtual (VSG) de EnovoGrid mantiene la calidad de energía durante cambios repentinos de carga en comparación con redes débiles tradicionales.',
      legendVSG: 'Con Enovo VSG',
      legendNoVSG: 'Tradicional / Sin VSG',
      regenerate: 'Regenerar Evento de Carga',
      yAxis: 'Voltaje (V)',
      xAxis: 'Tiempo (ms)',
      eventLabel: 'Carga Pesada Activada',
      advTitle: 'La Ventaja VSG',
      advDesc: 'Imita la inercia de una máquina rotativa. Las caídas de voltaje son amortiguadas y la recuperación es suave. Esto previene que la electrónica sensible se dispare y asegura la estabilidad del sistema.',
      disadvTitle: 'Sin Control de Estabilidad',
      disadvDesc: 'En redes débiles, los cambios repentinos de carga causan profundas caídas de voltaje y oscilaciones. Esto reduce la vida útil de los electrodomésticos y puede llevar a apagones totales del sistema.'
    },
    hydroTool: {
      title: 'Herramienta de Selección de Sitio Hidro',
      subtitle: 'Una vista previa de nuestro kit de herramientas propietario para evaluar potencial de pequeña hidro.',
      slides: [
        {
          title: 'Evaluación del Sitio',
          desc: 'Analizando datos hidrológicos y terreno topológico para determinar caída y flujo óptimos.'
        },
        {
          title: 'Selección de Turbina',
          desc: 'Emparejando el tipo correcto de turbina (Pelton, Francis, Kaplan) a la curva de duración de flujo.'
        },
        {
          title: 'Planificación Obra Civil',
          desc: 'Diseñando toma, tubería forzada y casa de máquinas para mínimo impacto ambiental.'
        }
      ],
      step: 'Paso'
    },
    contact: {
      title: 'Obtener Propuesta',
      subtitle: 'Cuéntenos sobre su proyecto. Nosotros diseñamos la confiabilidad.',
      name: 'Nombre Completo',
      org: 'Empresa / Organización',
      email: 'Correo Electrónico',
      scenario: 'Escenario del Proyecto',
      details: 'Detalles del Proyecto / Requisitos',
      detailsPlaceholder: 'Describa carga, ubicación y activos existentes...',
      send: 'Enviar Solicitud',
      scenarios: {
        default: 'Seleccione un escenario...',
        rural: 'Electrificación Rural',
        island: 'Isla / Resort',
        mining: 'Minería / Industrial',
        weak: 'Mejora Red Débil',
        hydro: 'Retrofit Hidro',
        other: 'Otro'
      }
    }
  },
  [Language.ID]: {
    nav: {
      home: 'Beranda',
      solutions: 'Solusi',
      technologies: 'Teknologi',
      simulation: 'Simulasi VSG',
      hydro: 'Alat Hidro',
      contact: 'Kontak',
      request: 'Minta Proposal'
    },
    hero: {
      title: 'Energi Hijau Andal',
      titleHigh: 'Di Mana Saja, Kapan Saja',
      subtitle: 'EnovoGrid mengubah "Sistem Energi Kecil" menjadi produk rekayasa siap pakai. Kami memastikan daya yang stabil, terjangkau, dan dapat dikelola untuk pulau, tambang, dan komunitas terpencil di seluruh dunia.',
      explore: 'Jelajahi Solusi',
      book: 'Pesan Konsultasi'
    },
    home: {
      valueTitle: 'Keandalan Rekayasa',
      valueDesc: 'Dari kelayakan hingga O&M, kami menyediakan layanan siklus hidup yang memastikan proyek Anda bergerak dari "Fungsional" menjadi "Luar Biasa".',
      features: {
        vsg: { title: 'Kontrol VSG', desc: 'Teknologi Virtual Synchronous Generator untuk stabilitas grid-forming dan inersia.' },
        bess: { title: 'Integrasi BESS', desc: 'Strategi penyimpanan canggih untuk peak shaving dan cadangan mulus.' },
        hybrid: { title: 'Optimasi Hibrida', desc: 'Sinergi antara Hidro, PV, dan Diesel untuk LCOE terendah.' },
        om: { title: 'O&M Siklus Hidup', desc: 'Pemantauan jarak jauh dan pemeliharaan standar untuk ROI jangka panjang.' }
      },
      scenarios: {
        imgLabel: 'Proyek Situs Tambang Terpencil',
        missionLabel: 'Misi Kami',
        missionTitle: 'Memberdayakan Komunitas Off-Grid',
        missionDesc: 'Baik itu memperbaiki stasiun hidro kecil tua atau membangun microgrid surya-penyimpanan baru untuk resor pulau, EnovoGrid berfokus pada kualitas daya yang "tak terlihat".',
        list: [
          'Penetrasi Energi Terbarukan Tinggi',
          'Peralihan Grid/Off-Grid Mulus',
          'Penghematan Diesel hingga 80%'
        ],
        learnMore: 'Pelajari Teknologi kami'
      }
    },
    footer: {
      desc: 'Mengubah "Sistem Energi Kecil" menjadi produk rekayasa siap pakai. Kami menyediakan solusi energi andal satu atap untuk pasar global.',
      solutions: 'Solusi',
      contact: 'Kontak',
      privacy: 'Kebijakan Privasi',
      terms: 'Ketentuan Layanan',
      rights: 'Enovo Microgrid Technology Co. Ltd. Hak cipta dilindungi.',
      address: 'Hangzhou, Tiongkok (HQ)'
    },
    solutions: {
      title: 'Solusi yang Disesuaikan',
      subtitle: 'Menangani tantangan energi spesifik di berbagai skenario.',
      items: [
        {
          id: '1',
          title: 'Elektrifikasi Pedesaan',
          category: 'Pemerintah / Utilitas Publik',
          description: 'Skema yang dapat direplikasi dan diskalakan untuk pasokan listrik sipil. Dari kelayakan hingga O&M terintegrasi, memastikan keandalan jangka panjang untuk desa.'
        },
        {
          id: '2',
          title: 'Perbaikan Grid Lemah',
          category: 'Perusahaan Listrik',
          description: 'Membuat grid lemah dapat dikontrol. Menggunakan VSG + BESS + EMS untuk meningkatkan kualitas daya, mengurangi rugi-rugi saluran, dan memungkinkan penetrasi energi terbarukan tinggi.'
        },
        {
          id: '3',
          title: 'Pulau & Resor Ramah Lingkungan',
          category: 'Perhotelan',
          description: 'Daya yang tenang, stabil, dan hemat bahan bakar. Lindungi citra merek dengan jaminan anti padam dan pengurangan kebisingan/bau diesel.'
        },
        {
          id: '4',
          title: 'Situs Industri & Tambang',
          category: 'Perusahaan',
          description: 'Produksi utama. Ketahanan guncangan tinggi untuk motor berat. Optimasi LCOE dan pengurangan ketergantungan diesel tanpa mengorbankan keandalan.'
        },
        {
          id: '5',
          title: 'Retrofit Hidro Kecil',
          category: 'Pemilik',
          description: 'Meningkatkan stasiun tua menjadi pembangkit "pintar". Meningkatkan efisiensi, mengotomatisasi kontrol, dan mengintegrasikan ke dalam microgrid modern.'
        },
        {
          id: '6',
          title: 'Proyek Keuangan Pembangunan',
          category: 'ADB / Bank Dunia',
          description: 'Paket standar + O&M lokal. Data siap audit (MRV/KPI) untuk pendanaan elektrifikasi berkelanjutan.'
        },
        {
          id: '7',
          title: 'Kemitraan EPC',
          category: 'Integrator Sistem',
          description: 'Penyangga pengurangan risiko. Integrasi cepat, antarmuka standar, dan dukungan komisioning jarak jauh untuk meminimalkan penalti.'
        },
        {
          id: '8',
          title: 'Ketahanan & Darurat',
          category: 'Pertahanan / Telekomunikasi',
          description: 'Penyebaran cepat, kemampuan black-start, dan ekspansi modular untuk bantuan bencana atau pos perbatasan.'
        }
      ]
    },
    technologies: {
      title: 'Teknologi Inti',
      subtitle: 'Tumpukan teknologi kami mengubah perangkat keras andal menjadi sistem cerdas dan tangguh.',
      kpiLabel: 'Indikator Kinerja Utama (KPI)',
      items: [
         {
          id: 'vsg',
          title: 'VSG (Kontrol Grid-Forming)',
          description: 'Seperti "roda gila tak terlihat". Memungkinkan grid lemah menahan guncangan beban, menjaga stabilitas frekuensi/tegangan, dan mendukung black start serta peralihan grid/off-grid mulus.',
          kpis: ['Tingkat koneksi grid', 'Durasi pemadaman', 'Ketersediaan'],
          icon: '⚡'
        },
        {
          id: 'hydro',
          title: 'Peningkatan Hidro Kecil',
          description: '"Basis Stabil". Kami meningkatkan governor/exciter lama untuk membuat hidro dapat dikontrol dan kompatibel dengan EMS modern. Penting untuk beban dasar 24/7.',
          kpis: ['Ketersediaan', 'LCOE', 'Dapat didispatch'],
          icon: '💧'
        },
        {
          id: 'pv',
          title: 'Integrasi PV Surya',
          description: 'Implementasi sistematis. Strategi kopling AC/DC dengan perlindungan petir. Fokus bukan hanya kapasitas terpasang, tetapi kapasitas penyerapan.',
          kpis: ['Tingkat penggantian diesel', 'LCOE', 'Tingkat penyerapan'],
          icon: '☀️'
        },
        {
          id: 'bess',
          title: 'BESS (Sistem Penyimpanan)',
          description: 'Penyangga + Penstabil. Dari BMS/PCS hingga manajemen termal. Strategi adalah kunci: memastikan umur baterai sambil memaksimalkan penghematan diesel.',
          kpis: ['Biaya siklus hidup', 'Waktu respons', 'Keamanan'],
          icon: '🔋'
        },
        {
          id: 'ems',
          title: 'EMS / Pengontrol Microgrid',
          description: '"Pengemudi". Menyatukan berbagai sumber menjadi satu strategi. Memprediksi beban, mengoptimalkan start/stop diesel, dan menyediakan antarmuka standar untuk ekspansi.',
          kpis: ['Tingkat otomatisasi', 'Pengurangan biaya O&M', 'Penghematan bahan bakar'],
          icon: '🧠'
        }
      ]
    },
    simulation: {
      title: 'Simulasi Stabilitas VSG',
      desc: 'Visualisasikan bagaimana teknologi Virtual Synchronous Generator (VSG) EnovoGrid menjaga kualitas daya selama perubahan beban mendadak dibandingkan dengan grid lemah tradisional.',
      legendVSG: 'Dengan Enovo VSG',
      legendNoVSG: 'Tradisional / Tanpa VSG',
      regenerate: 'Buat Ulang Peristiwa Beban',
      yAxis: 'Tegangan (V)',
      xAxis: 'Waktu (ms)',
      eventLabel: 'Beban Berat Aktif',
      advTitle: 'Keunggulan VSG',
      advDesc: 'Meniru inersia mesin berputar. Penurunan tegangan diredam, dan pemulihan berjalan mulus. Ini mencegah peralatan elektronik sensitif mati dan memastikan stabilitas sistem.',
      disadvTitle: 'Tanpa Kontrol Stabilitas',
      disadvDesc: 'Di grid lemah, perubahan beban mendadak menyebabkan penurunan tegangan dalam dan osilasi. Ini mengurangi umur peralatan dan dapat menyebabkan pemadaman sistem total.'
    },
    hydroTool: {
      title: 'Alat Pemilihan Lokasi Hidro',
      subtitle: 'Pratinjau perangkat kami untuk mengevaluasi potensi hidro kecil.',
      slides: [
        {
          title: 'Penilaian Lokasi',
          desc: 'Menganalisis data hidrologi dan medan topologi untuk menentukan head dan aliran optimal.'
        },
        {
          title: 'Pemilihan Turbin',
          desc: 'Mencocokkan jenis turbin yang tepat (Pelton, Francis, Kaplan) dengan kurva durasi aliran.'
        },
        {
          title: 'Perencanaan Sipil',
          desc: 'Merancang intake, penstock, dan tata letak powerhouse untuk dampak lingkungan minimal.'
        }
      ],
      step: 'Langkah'
    },
    contact: {
      title: 'Dapatkan Proposal',
      subtitle: 'Ceritakan tentang proyek Anda. Kami merekayasa keandalannya.',
      name: 'Nama Lengkap',
      org: 'Perusahaan / Organisasi',
      email: 'Alamat Email',
      scenario: 'Skenario Proyek',
      details: 'Detail Proyek / Persyaratan',
      detailsPlaceholder: 'Jelaskan beban, lokasi, dan aset yang ada...',
      send: 'Kirim Permintaan',
      scenarios: {
        default: 'Pilih skenario...',
        rural: 'Elektrifikasi Pedesaan',
        island: 'Pulau / Resor',
        mining: 'Pertambangan / Industri',
        weak: 'Perbaikan Grid Lemah',
        hydro: 'Retrofit Hidro',
        other: 'Lainnya'
      }
    }
  },
  [Language.MS]: {
    nav: {
      home: 'Laman Utama',
      solutions: 'Penyelesaian',
      technologies: 'Teknologi',
      simulation: 'Simulasi VSG',
      hydro: 'Alat Hidro',
      contact: 'Hubungi',
      request: 'Minta Cadangan'
    },
    hero: {
      title: 'Tenaga Hijau Boleh Dipercayai',
      titleHigh: 'Di Mana Sahaja, Bila-bila Masa',
      subtitle: 'EnovoGrid mengubah "Sistem Tenaga Kecil" menjadi produk kejuruteraan siap guna. Kami memastikan kuasa yang stabil, berpatutan, dan boleh diurus untuk pulau, lombong, dan komuniti terpencil di seluruh dunia.',
      explore: 'Terokai Penyelesaian',
      book: 'Tempah Rundingan'
    },
    home: {
      valueTitle: 'Kejuruteraan Kebolehpercayaan',
      valueDesc: 'Dari kebolehlaksanaan hingga O&M, kami menyediakan perkhidmatan kitaran hayat memastikan projek anda bergerak dari "Berfungsi" kepada "Cemerlang".',
      features: {
        vsg: { title: 'Kawalan VSG', desc: 'Teknologi Penjana Segerak Maya untuk kestabilan pembentukan grid dan inersia.' },
        bess: { title: 'Integrasi BESS', desc: 'Strategi penyimpanan canggih untuk pemotongan puncak dan sandaran lancar.' },
        hybrid: { title: 'Optimasi Hibrid', desc: 'Sinergi antara Hidro, PV, dan Diesel untuk LCOE terendah.' },
        om: { title: 'O&M Kitaran Hayat', desc: 'Pemantauan jauh dan penyelenggaraan piawai untuk ROI jangka panjang.' }
      },
      scenarios: {
        imgLabel: 'Projek Tapak Lombong Terpencil',
        missionLabel: 'Misi Kami',
        missionTitle: 'Memperkasakan Komuniti Luar Grid',
        missionDesc: 'Sama ada menaik taraf stesen hidro kecil lama atau membina grid mikro solar-penyimpanan baru untuk resort pulau, EnovoGrid menumpukan pada kualiti kuasa yang "tidak kelihatan".',
        list: [
          'Penembusan Boleh Diperbaharui Tinggi',
          'Peralihan Grid/Luar Grid Lancar',
          'Penjimatan Diesel sehingga 80%'
        ],
        learnMore: 'Ketahui Teknologi kami'
      }
    },
    footer: {
      desc: 'Mengubah "Sistem Tenaga Kecil" menjadi produk kejuruteraan siap guna. Kami menyediakan penyelesaian tenaga boleh dipercayai sehenti untuk pasaran global.',
      solutions: 'Penyelesaian',
      contact: 'Hubungi',
      privacy: 'Dasar Privasi',
      terms: 'Syarat Perkhidmatan',
      rights: 'Enovo Microgrid Technology Co. Ltd. Hak cipta terpelihara.',
      address: 'Hangzhou, China (HQ)'
    },
    solutions: {
      title: 'Penyelesaian Tersuai',
      subtitle: 'Menangani cabaran tenaga khusus merentasi pelbagai senario.',
      items: [
        {
          id: '1',
          title: 'Elektrifikasi Luar Bandar',
          category: 'Kerajaan / Utiliti Awam',
          description: 'Skema boleh ditiru dan berskala untuk bekalan kuasa awam. Dari kebolehlaksanaan hingga O&M bersepadu, memastikan kebolehpercayaan jangka panjang untuk kampung.'
        },
        {
          id: '2',
          title: 'Penambahbaikan Grid Lemah',
          category: 'Syarikat Grid',
          description: 'Menjadikan grid lemah boleh dikawal. Menggunakan VSG + BESS + EMS untuk meningkatkan kualiti kuasa, mengurangkan kehilangan talian, dan membolehkan penembusan boleh diperbaharui tinggi.'
        },
        {
          id: '3',
          title: 'Pulau & Resort Eko',
          category: 'Hospitaliti',
          description: 'Kuasa senyap, stabil, dan rendah bahan api. Lindungi imej jenama dengan jaminan tiada gangguan dan pengurangan bunyi/bau diesel.'
        },
        {
          id: '4',
          title: 'Tapak Industri & Lombong',
          category: 'Perusahaan',
          description: 'Pengeluaran diutamakan. Rintangan kejutan tinggi untuk motor berat. Optimasi LCOE dan pengurangan kebergantungan diesel tanpa mengorbankan kebolehpercayaan.'
        },
        {
          id: '5',
          title: 'Retrofit Hidro Kecil',
          category: 'Pemilik',
          description: 'Menaik taraf stesen lama kepada loji "pintar". Meningkatkan kecekapan, mengautomasikan kawalan, dan mengintegrasikan ke dalam grid mikro moden.'
        },
        {
          id: '6',
          title: 'Projek Kewangan Pembangunan',
          category: 'ADB / Bank Dunia',
          description: 'Pakej piawai + O&M tempatan. Data sedia audit (MRV/KPI) untuk pembiayaan elektrifikasi mampan.'
        },
        {
          id: '7',
          title: 'Perkongsian EPC',
          category: 'Integrator Sistem',
          description: 'Penimbal pengurangan risiko. Integrasi pantas, antara muka piawai, dan sokongan pentauliahan jauh untuk meminimumkan penalti.'
        },
        {
          id: '8',
          title: 'Ketahanan & Kecemasan',
          category: 'Pertahanan / Telekom',
          description: 'Pengerahan pantas, keupayaan black-start, dan pengembangan modular untuk bantuan bencana atau pos sempadan.'
        }
      ]
    },
    technologies: {
      title: 'Teknologi Teras',
      subtitle: 'Tumpukan teknologi kami mengubah perkakasan boleh dipercayai menjadi sistem pintar dan tangguh.',
      kpiLabel: 'Petunjuk Prestasi Utama (KPI)',
      items: [
         {
          id: 'vsg',
          title: 'VSG (Kawalan Grid-Forming)',
          description: 'Seperti "roda tenaga halimunan". Membolehkan grid lemah menahan kejutan beban, mengekalkan kestabilan frekuensi/voltan, dan menyokong black start serta peralihan grid/luar grid lancar.',
          kpis: ['Kadar sambungan grid', 'Tempoh gangguan', 'Ketersediaan'],
          icon: '⚡'
        },
        {
          id: 'hydro',
          title: 'Penaiktarafan Hidro Kecil',
          description: '"Asas Stabil". Kami menaik taraf gabenor/exciters lama untuk menjadikan hidro boleh dikawal dan serasi dengan EMS moden. Penting untuk beban asas 24/7.',
          kpis: ['Ketersediaan', 'LCOE', 'Boleh didispatch'],
          icon: '💧'
        },
        {
          id: 'pv',
          title: 'Integrasi PV Solar',
          description: 'Pelaksanaan sistematik. Strategi gandingan AC/DC dengan perlindungan kilat. Fokus bukan hanya kapasiti terpasang, tetapi kapasiti penyerapan.',
          kpis: ['Kadar penggantian diesel', 'LCOE', 'Kadar penyerapan'],
          icon: '☀️'
        },
        {
          id: 'bess',
          title: 'BESS (Sistem Penyimpanan)',
          description: 'Penimbal + Penstabil. Dari BMS/PCS hingga pengurusan haba. Strategi adalah kunci: memastikan jangka hayat bateri sambil memaksimumkan penjimatan diesel.',
          kpis: ['Kos kitaran hayat', 'Masa tindak balas', 'Keselamatan'],
          icon: '🔋'
        },
        {
          id: 'ems',
          title: 'EMS / Pengawal Grid Mikro',
          description: '"Pemandu". Menyatukan pelbagai sumber menjadi satu strategi. Meramal beban, mengoptimumkan mula/henti diesel, dan menyediakan antara muka piawai untuk pengembangan.',
          kpis: ['Tahap automasi', 'Pengurangan kos O&M', 'Penjimatan bahan api'],
          icon: '🧠'
        }
      ]
    },
    simulation: {
      title: 'Simulasi Kestabilan VSG',
      desc: 'Visualisasikan bagaimana teknologi Penjana Segerak Maya (VSG) EnovoGrid mengekalkan kualiti kuasa semasa perubahan beban mengejut berbanding grid lemah tradisional.',
      legendVSG: 'Dengan Enovo VSG',
      legendNoVSG: 'Tradisional / Tanpa VSG',
      regenerate: 'Jana Semula Peristiwa Beban',
      yAxis: 'Voltan (V)',
      xAxis: 'Masa (ms)',
      eventLabel: 'Beban Berat Aktif',
      advTitle: 'Kelebihan VSG',
      advDesc: 'Meniru inersia mesin berputar. Penurunan voltan diredam, dan pemulihan berjalan lancar. Ini menghalang peralatan elektronik sensitif daripada terputus dan memastikan kestabilan sistem.',
      disadvTitle: 'Tanpa Kawalan Kestabilan',
      disadvDesc: 'Di grid lemah, perubahan beban mengejut menyebabkan penurunan voltan dalam dan ayunan. Ini mengurangkan jangka hayat peralatan dan boleh menyebabkan gangguan sistem sepenuhnya.'
    },
    hydroTool: {
      title: 'Alat Pemilihan Tapak Hidro',
      subtitle: 'Pratonton kit alat proprietari kami untuk menilai potensi hidro kecil.',
      slides: [
        {
          title: 'Penilaian Tapak',
          desc: 'Menganalisis data hidrologi dan rupa bumi topologi untuk menentukan head dan aliran optimum.'
        },
        {
          title: 'Pemilihan Turbin',
          desc: 'Memadankan jenis turbin yang betul (Pelton, Francis, Kaplan) dengan lengkung tempoh aliran.'
        },
        {
          title: 'Perancangan Sivil',
          desc: 'Mereka bentuk pengambilan, penstock, dan susun atur rumah kuasa untuk impak alam sekitar minimum.'
        }
      ],
      step: 'Langkah'
    },
    contact: {
      title: 'Dapatkan Cadangan',
      subtitle: 'Beritahu kami mengenai projek anda. Kami merekayasa kebolehpercayaannya.',
      name: 'Nama Penuh',
      org: 'Syarikat / Organisasi',
      email: 'Alamat E-mel',
      scenario: 'Senario Projek',
      details: 'Butiran Projek / Keperluan',
      detailsPlaceholder: 'Terangkan beban, lokasi, dan aset sedia ada...',
      send: 'Hantar Permintaan',
      scenarios: {
        default: 'Pilih senario...',
        rural: 'Elektrifikasi Luar Bandar',
        island: 'Pulau / Resort',
        mining: 'Perlombongan / Industri',
        weak: 'Penambahbaikan Grid Lemah',
        hydro: 'Retrofit Hidro',
        other: 'Lain-lain'
      }
    }
  }
};

export const getTranslation = (lang: Language) => {
  return translations[lang] || translations[Language.EN];
};