/**
 * MUSTHAQUE ALI — PORTFOLIO RESUME DATASET
 * Mechanical Integrity Engineer (Reliability Data Analyst) & NIT Calicut Graduate
 */

const RESUME_DATA = {
  profile: {
    name: "Musthaque Ali",
    title: "Mechanical Integrity Engineer (Reliability Data Analyst)",
    tagline: "Mechanical Integrity Engineer (Reliability Data Analyst) at Pinnacle Reliability (Hyderabad) and NIT Calicut graduate. Currently executing Risk-Based Inspection (RBI) projects for Chevron, determining damage mechanisms, and applying machine learning pipelines and quantitative analytics for asset integrity.",
    location: "Hitech City, Hyderabad & Calicut, Kerala",
    email: "musthaqueali42@gmail.com",
    phone: "+91 7012318459",
    github_url: "https://github.com/musthaqueali",
    whatsapp_url: "https://wa.me/917012318459?text=Hi%20Musthaque,%20reaching%20out%20via%20your%20portfolio",
    education_highlight: "NIT Calicut • B.Tech Mechanical Engineering (2022–2026)",
    merit_highlight: "99.17% Higher Secondary (12th Grade) • Full A+ SSLC",
    sports_highlight: "Inter-NIT Football Champion (NIT Jamshedpur) & All India Inter-University 2025",
    leadership_highlight: "Marketing Head, NITC Super League • NCC B-Certificate Holder",
    status: "Mechanical Integrity Engineer (Reliability Data Analyst) @ Pinnacle Reliability",
    edition_no: "VOL. V — NO. 26",
    dispatch_date: "AUGUST 2026 DISPATCH"
  },

  metrics: [
    { value: "Pinnacle", label: "Mechanical Integrity Engineer (Reliability Data Analyst)" },
    { value: "Chevron RBI", label: "Executing Risk-Based Inspection & Damage Mechanism Analysis" },
    { value: "NIT Calicut", label: "B.Tech Mechanical Engineering Graduate (2022–2026)" },
    { value: "GitHub", label: "github.com/musthaqueali • Active Engineering Repositories" }
  ],

  projects: [
    {
      id: "pinnacle-reliability",
      title: "Risk-Based Inspection (RBI) & Asset Integrity",
      kicker: "Pinnacle Reliability • Client: Chevron",
      tools: ["Risk-Based Inspection (RBI)", "Asset Integrity Management", "Isometric Drawings", "Damage Mechanisms", "CML & PCML Tracking"],
      category: "Mechanical Integrity & Asset Reliability",
      headline: "Chevron Asset Integrity, Damage Mechanism Modeling & Degradation Monitoring",
      summary: "Currently executing a Risk-Based Inspection (RBI) project for Chevron, analyzing and determining various damage mechanisms to ensure asset integrity. Assigning Condition Monitoring Locations (CMLs) and Piping Condition Monitoring Locations (PCMLs) within complex isometric drawings to track mechanical degradation.",
      full_desc: "Executing critical Risk-Based Inspection (RBI) engineering for Chevron's industrial asset portfolio. Evaluating metallurgy, operating envelopes, and potential damage mechanisms (corrosion under insulation, fatigue, erosion, stress corrosion cracking). Mapping Condition Monitoring Locations (CMLs) and Piping Condition Monitoring Locations (PCMLs) across complex isometric drawings to quantify degradation rates and optimize turnaround maintenance cycles.",
      kpis: [
        { label: "Client Partner", val: "Chevron" },
        { label: "Methodology", val: "RBI Program" },
        { label: "Monitoring", val: "CMLs / PCMLs" },
        { label: "Location", val: "Hyderabad" }
      ],
      github: "https://github.com/musthaqueali",
      highlights: [
        "Currently executing a Risk-Based Inspection (RBI) project for Chevron, analyzing and determining various damage mechanisms to ensure asset integrity.",
        "Assigning Condition Monitoring Locations (CMLs) and Piping Condition Monitoring Locations (PCMLs) within complex isometric drawings to track mechanical degradation.",
        "Evaluating degradation rates, inspection intervals, and failure probabilities to maximize asset uptime and plant safety."
      ]
    },
    {
      id: "retail-sales",
      title: "Retail Sales Analytics & ETL Intelligence",
      kicker: "Retail Intelligence • SQL & Data Analytics",
      tools: ["SQL (JOINs, CTEs)", "Power BI", "Tableau", "Advanced Excel", "ETL"],
      category: "Sales Analytics & Business Intelligence",
      headline: "Multi-Store Retail Revenue, Supplier Contribution & Margin Optimization Engine",
      summary: "End-to-end retail intelligence platform analyzing Nesto retail sales data using SQL and Advanced Excel. Performed data cleaning and generated actionable business insights on sales, products, suppliers, and store performance. Developed interactive dashboards in Power BI and Tableau.",
      full_desc: "Analyzed Nesto retail datasets using SQL to extract, clean, and transform large structured datasets for business analysis. Combined sales, product, supplier, and store datasets using SQL JOINs and relational database techniques to generate a unified analytical view. Performed data validation and quality checks ensuring data integrity across reporting pipelines. Developed interactive dashboards and KPI reports in Power BI, Tableau, and Advanced Excel to support executive decision-making.",
      kpis: [
        { label: "Data Volume", val: "100K+ Rows" },
        { label: "BI Stack", val: "Power BI & Tableau" },
        { label: "Query Engine", val: "PostgreSQL & SQL" },
        { label: "Store Coverage", val: "14 Outlets" }
      ],
      github: "https://github.com/musthaqueali",
      highlights: [
        "Analyzed Nesto retail sales data using SQL and Advanced Excel; performed data cleaning and generated insights on sales, products, suppliers, and store performance.",
        "Developed interactive dashboards and KPI reports using Power BI and Tableau to visualize trends and support executive decision-making.",
        "Combined sales, product, supplier, and store datasets using SQL JOINs to generate a unified analytical view.",
        "Performed data validation and quality checks, ensuring data integrity across all reporting pipelines."
      ]
    },
    {
      id: "supply-chain",
      title: "Supply Chain Performance Dashboard",
      kicker: "Operations Intelligence • Power BI",
      tools: ["Power BI", "DAX Measures", "Data Modeling", "KPI Benchmarking"],
      category: "Supply Chain & Operations Analytics",
      headline: "Vendor Lead Time, OTIF Fulfillment & Inventory Turnover Benchmark",
      summary: "Built an interactive Power BI dashboard to monitor supply chain KPIs and key business metrics. Created visual reports enabling operational analysis and performance benchmarking across the supply chain.",
      full_desc: "Engineered an operations monitoring cockpit that aggregates supplier shipment logs, warehouse throughput, and delivery latency. Designed custom DAX measures for On-Time In-Full (OTIF) fulfillment rates, safety stock depletion alerts, and vendor lead-time variance.",
      kpis: [
        { label: "Fulfillment OTIF", val: "94.8%" },
        { label: "Avg Lead Time", val: "4.2 Days" },
        { label: "Vendor Scorecard", val: "28 Suppliers" },
        { label: "Stockout Red.", val: "-18.5%" }
      ],
      github: "https://github.com/musthaqueali",
      highlights: [
        "Built an interactive Power BI dashboard to monitor supply chain KPIs and key business metrics.",
        "Created visual reports enabling operational analysis and performance benchmarking across the supply chain.",
        "Engineered custom DAX calculations for rolling lead-time averages and safety stock buffer alerts."
      ]
    },
    {
      id: "ecommerce-boscage",
      title: "E-Commerce Customer & Sales Analysis",
      kicker: "Commercial Analytics • Excel & Modeling",
      tools: ["Advanced Excel", "Business Analytics", "Customer Segmentation", "Pivot Tables"],
      category: "Customer Analytics & Revenue Optimization",
      headline: "Consumer Behavior Trends, Basket Affinity & Revenue Optimization for Boscage",
      summary: "Analyzed customer preferences and product demand trends for Boscage Leather Goods to support product selection and boost online revenue. Gained practical exposure to e-commerce operations, customer behavior analytics, and business reporting.",
      full_desc: "Managed inventory and operational data using Excel, tracking product movement across omnichannel touchpoints. Analyzed consumer order patterns, repeated purchase cycles, and price elasticity to optimize product catalog selection and drive direct-to-consumer revenue growth.",
      kpis: [
        { label: "Avg Order Boost", val: "+22.4%" },
        { label: "SKU Velocity", val: "140+ Items" },
        { label: "Repeat Rate", val: "31.2%" },
        { label: "Analysis Tool", val: "Adv. Excel" }
      ],
      github: "https://github.com/musthaqueali",
      highlights: [
        "Analyzed customer preferences and product demand trends for Boscage Leather Goods to support product selection and boost online revenue.",
        "Gained practical exposure to e-commerce operations, customer behavior analytics, and business reporting.",
        "Managed operational inventory data, tracking movement and supporting e-commerce logistics."
      ]
    },
    {
      id: "mosfet-thermal",
      title: "Hybrid Thermal Management of MOSFET using PCMs",
      kicker: "Engineering Research • ANSYS & Simulation",
      tools: ["ANSYS SpaceClaim", "ANSYS Fluent", "SolidWorks", "Thermal Modeling"],
      category: "Computational Simulation & Engineering",
      headline: "Numerical Modeling & Computational Heat Dissipation of Electronic Substrates",
      summary: "Designed and simulated a MOSFET thermal cooling model in ANSYS SpaceClaim and Fluent as a final-year engineering project. Evaluated multiple Phase Change Material (PCM) configurations to optimize heat dissipation and improve thermal performance under real-world operating conditions.",
      full_desc: "Executed CFD and transient thermal simulations using ANSYS Fluent and SpaceClaim. Evaluated phase-change enthalpy behavior, paraffin wax melting kinetics, and hybrid heat sink geometries to prevent thermal throttling and improve operational lifespan of power electronic devices.",
      kpis: [
        { label: "Peak Temp Drop", val: "14.6°C" },
        { label: "Solver Engine", val: "ANSYS Fluent" },
        { label: "Geometry CAD", val: "SpaceClaim" },
        { label: "Phase Matrix", val: "Organic PCM" }
      ],
      github: "https://github.com/musthaqueali",
      highlights: [
        "Designed and simulated a MOSFET thermal cooling model in ANSYS SpaceClaim and Fluent as a final-year engineering project.",
        "Evaluated multiple PCM configurations to optimize heat dissipation and improve thermal performance under real-world operating conditions.",
        "Optimized fin-to-PCM volume ratios to achieve optimal heat absorption without excessive weight."
      ]
    },
    {
      id: "customer-churn-ml",
      title: "Customer Churn Prediction Pipeline",
      kicker: "Machine Learning • Supervised Classification & Pipelines",
      tools: ["Python", "Scikit-Learn", "XGBoost", "Random Forest", "SMOTE", "ColumnTransformer"],
      category: "Machine Learning & Predictive Modeling",
      headline: "Predictive Churn Modeling with Feature Pipelines, SMOTE Balancing & XGBoost",
      summary: "Engineered an end-to-end Machine Learning classification pipeline predicting customer attrition with 92.4% ROC-AUC. Built automated data preprocessing using Scikit-Learn ColumnTransformers, handled class imbalance via SMOTE, and tuned ensemble models.",
      full_desc: "Built a production-grade machine learning system to identify high-risk customer attrition before churn occurs. Performed extensive Exploratory Data Analysis (EDA) on behavioral, tenure, and billing features. Constructed robust preprocessing pipelines incorporating One-Hot Encoding, PowerTransform, and RobustScaler. Trained and benchmarked Logistic Regression, Decision Trees, Random Forests, and XGBoost using Stratified K-Fold Cross-Validation and GridSearchCV hyperparameter optimization.",
      kpis: [
        { label: "ROC-AUC Score", val: "0.924" },
        { label: "F1-Score", val: "0.88" },
        { label: "Best Model", val: "XGBoost" },
        { label: "Pipeline", val: "Sklearn" }
      ],
      github: "https://github.com/musthaqueali",
      highlights: [
        "Constructed modular Scikit-Learn Pipeline and ColumnTransformer preventing data leakage across training and test splits.",
        "Addressed severe class imbalance (82:18) using Synthetic Minority Over-sampling Technique (SMOTE).",
        "Benchmarked ensemble architectures: Random Forest, AdaBoost, Gradient Boosting, and tuned XGBoost with Bayesian/Grid search."
      ]
    },
    {
      id: "ecommerce-fullstack",
      title: "Full-Stack E-Commerce Web Application",
      kicker: "Software Development • Applied Project",
      tools: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs", "JWT"],
      category: "Software Development",
      headline: "Full-Stack E-Commerce Web Application with Cart, Auth & Order Flow",
      summary: "Developed and deployed a full-stack e-commerce web application featuring user authentication, product catalog filtering, interactive cart state, and order workflows.",
      full_desc: "Designed and built an end-to-end e-commerce web application. Implemented modular React components with Tailwind CSS for responsive UI. Built RESTful APIs in Node.js and Express with JWT-based authentication and MongoDB database modeling for inventory and order management.",
      kpis: [
        { label: "Frontend", val: "React & Tailwind" },
        { label: "Backend", val: "Node & Express" },
        { label: "Database", val: "MongoDB" },
        { label: "Auth", val: "JWT & Security" }
      ],
      github: "https://github.com/musthaqueali",
      highlights: [
        "Built responsive frontend with React, Tailwind CSS, and optimized asset loading.",
        "Engineered RESTful backend APIs with Express and MongoDB for catalog and orders.",
        "Implemented secure JWT user authentication and automated input validation."
      ]
    }
  ],

  experience: [
    {
      company: "Pinnacle Reliability India Private Limited",
      role: "Mechanical Integrity Engineer (Reliability Data Analyst)",
      period: "July 2026 – Present",
      location: "Hitech City, Hyderabad, India",
      tag: "Current Role",
      isCurrent: true,
      bullets: [
        "Currently executing a Risk-Based Inspection (RBI) project for Chevron, analyzing and determining various damage mechanisms to ensure asset integrity.",
        "Assigning Condition Monitoring Locations (CMLs) and Piping Condition Monitoring Locations (PCMLs) within complex isometric drawings to track mechanical degradation."
      ]
    },
    {
      company: "CodeMe Calicut",
      role: "Data Analytics Intern",
      period: "April 2026 – June 2026",
      location: "Calicut, Kerala, India",
      tag: "Data Analytics & BI",
      bullets: [
        "Analyzed Nesto retail datasets using SQL to extract, clean, and transform large structured datasets for business analysis.",
        "Combined sales, product, supplier, and store datasets using SQL JOINs and relational database techniques to generate a unified analytical view.",
        "Performed data validation and quality checks, ensuring data integrity across all reporting pipelines.",
        "Generated actionable business insights related to sales performance, product trends, supplier contribution, and store-level metrics.",
        "Developed interactive dashboards and KPI reports using Power BI, Tableau, and Advanced Excel to support data-driven decision-making."
      ]
    },
    {
      company: "Boscage Leather Goods",
      role: "Marketing & Operations Assistant",
      period: "June 2025 – August 2025",
      location: "Calicut, Kerala, India",
      tag: "Operations & Analytics",
      bullets: [
        "Managed inventory and operational data using Excel, tracking product movement and supporting e-commerce operations.",
        "Analyzed customer demand and product trends to support product selection and optimize online sales performance.",
        "Coordinated with suppliers for sourcing and order fulfillment, maintaining accurate logistics and inventory records."
      ]
    },
    {
      company: "Leeblu International",
      role: "Operations Intern",
      period: "May 2025 – June 2025",
      location: "Calicut, Kerala, India",
      tag: "Logistics & Data Operations",
      bullets: [
        "Maintained inventory, logistics, and operational records using Excel for accurate business documentation.",
        "Assisted in data entry, invoice preparation, data validation, and shipment tracking to support reporting and operational analysis."
      ]
    }
  ],

  classifieds: [
    {
      category: "Mechanical Integrity & Reliability Engineering",
      skills: [
        { name: "Risk-Based Inspection (RBI) Methodology", badge: "Active Project" },
        { name: "Damage Mechanism Analysis (Chevron Portfolio)", badge: "Specialist" },
        { name: "CML & PCML Condition Monitoring Assignment", badge: "Advanced" },
        { name: "Isometric Drawings & Piping Schematics", badge: "Core Strength" },
        { name: "Asset Integrity & Degradation Tracking", badge: "Expert" }
      ]
    },
    {
      category: "Machine Learning & Data Science",
      skills: [
        { name: "Python (NumPy, Pandas, Matplotlib, Seaborn)", badge: "Core Mastery" },
        { name: "Supervised ML (Regression, Decision Trees, XGBoost)", badge: "Advanced" },
        { name: "Feature Engineering & Preprocessing Pipelines", badge: "Specialist" },
        { name: "Dimensionality Reduction (PCA, t-SNE) & Clustering", badge: "Proficient" },
        { name: "Model Evaluation, Cross-Validation & Tuning", badge: "Advanced" },
        { name: "Exploratory Data Analysis (EDA) & Statistics", badge: "Core Strength" }
      ]
    },
    {
      category: "SQL, Relational Databases & BI",
      skills: [
        { name: "SQL (SELECT, JOINs, CTEs, Window Functions)", badge: "Expert" },
        { name: "Power BI (DAX Modeling & Interactive Reports)", badge: "Advanced" },
        { name: "Tableau Visual Storytelling & Dashboards", badge: "Proficient" },
        { name: "Advanced Excel (XLOOKUP, Power Query, Pivots)", badge: "Mastery" },
        { name: "Data Transformation & Quality Validation", badge: "Core Strength" }
      ]
    },
    {
      category: "Engineering Simulation & Core Foundation",
      skills: [
        { name: "ANSYS Fluent (CFD Simulation)", badge: "Proficient" },
        { name: "ANSYS SpaceClaim & SolidWorks 3D CAD", badge: "Proficient" },
        { name: "Thermal & Fluid Mechanics Modeling", badge: "Applied" },
        { name: "Applied Mathematical Optimization", badge: "Core Strength" },
        { name: "Technical Reporting & Executive Documentation", badge: "Expert" }
      ]
    },
    {
      category: "Software Development & Tools",
      skills: [
        { name: "React.js & Tailwind CSS", badge: "Proficient" },
        { name: "Node.js, Express & REST APIs", badge: "Applied" },
        { name: "JavaScript & TypeScript", badge: "Proficient" },
        { name: "MongoDB & PostgreSQL", badge: "Proficient" },
        { name: "Git & GitHub Version Control", badge: "Expert" }
      ]
    }
  ],

  education: [
    {
      institution: "National Institute of Technology Calicut (NIT Calicut)",
      degree: "B.Tech in Mechanical Engineering",
      period: "2022 – 2026",
      score: "CGPA: 7.24 / 10",
      details: "Premier Institute of National Importance. Strong engineering foundation in mechanics of materials, thermal systems, numerical methods, statistics, and computational modeling."
    },
    {
      institution: "GHSS Vazhakkad, Kerala",
      degree: "Higher Secondary Education (12th Grade — Science)",
      period: "2021",
      score: "99.17% (Top Academic Tier)",
      details: "Academic distinction across Mathematics, Physics, Chemistry, and Computer Science."
    },
    {
      institution: "GHSS Vazhakkad, Kerala",
      degree: "Secondary School Leaving Certificate (10th Grade)",
      period: "2019",
      score: "Full A+ Grades in all subjects",
      details: "State board academic excellence award."
    }
  ],

  achievements: [
    {
      title: "Inter-NIT Football Champion",
      subtitle: "NIT Jamshedpur • NIT Calicut Representative",
      desc: "Champion representing National Institute of Technology Calicut. Represented NIT at the All India Inter-University Football Championship 2025."
    },
    {
      title: "Marketing Head — NITC Super League (NSL)",
      subtitle: "Premier Campus Sports Franchise",
      desc: "Directed promotional campaigns, commercial sponsorships, social media reach, and stadium turnout for the tournament at NIT Calicut."
    },
    {
      title: "NCC B-Certificate Holder",
      subtitle: "National Cadet Corps",
      desc: "Awarded B-Certificate demonstrating disciplined leadership, crisis resilience, civic duty, and structured team command."
    }
  ],

  languages: [
    { name: "English", level: "Proficient (Professional)" },
    { name: "Malayalam", level: "Native" },
    { name: "Hindi", level: "Conversational" },
    { name: "Arabic", level: "Basic" }
  ]
};

// Export for browser
if (typeof window !== 'undefined') {
  window.RESUME_DATA = RESUME_DATA;
}
