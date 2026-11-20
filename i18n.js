const I18N = {
  en: {
    dir: "ltr",
    cv: "Ameer-Blaibel-CV-EN.pdf",
    t: {
      "doc.title": "Ameer Blaibel — Software Developer",
      "name": "Ameer Blaibel",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.education": "Education",
      "nav.contact": "Contact",
      "lang.switch": "العربية",
      "hero.eyebrow": "Software Developer · Baghdad, Iraq",
      "hero.lead": "I build secure, data-driven web systems for institutions — from licensing platforms to content dashboards — with <strong>ASP.NET Core</strong>, <strong>C#</strong> and <strong>SQL Server</strong>.",
      "hero.cta": "Get in touch",
      "hero.cv": "Download CV",
      "stat.projects": "projects delivered",
      "stat.software": "years in software",
      "stat.banking": "years in banking",
      "about.title": "About",
      "about.p1": "I'm a software developer in the IT Unit of the <strong>Iraqi Pharmacists Association</strong>, where I design and build the internal systems that pharmacists and staff rely on every day: license renewals, a public reporting platform, and a media publishing dashboard.",
      "about.p2": "Before moving into software, I spent three years in the letters-of-guarantee department at <strong>Iraqi Islamic Bank</strong>. That work taught me how regulated, document-heavy processes really run — and it shapes how I build: clear workflows, careful validation, strong access control, and reports people can actually use.",
      "about.p3": "I hold a BSc in Computer Science from the <strong>University of Baghdad</strong> and completed Harvard's <strong>CS50x</strong>.",
      "about.focus": "Focus",
      "exp.title": "Experience",
      "proj.title": "Selected Projects",
      "skills.title": "Skills",
      "edu.title": "Education & Certifications",
      "contact.title": "Contact",
      "contact.lead": "Open to new opportunities and collaborations. The fastest way to reach me is by email.",
      "contact.cv": "Download CV",
      "footer.location": "Baghdad, Iraq",
      "code.status": "Build succeeded · 0 errors · 0 warnings"
    },
    roles: ["Backend Developer", "ASP.NET Core Developer", "Database Designer", "API Security Builder"],
    focus: [
      "Backend development with ASP.NET Core",
      "SQL Server database design & reporting",
      "Authentication, roles & API security",
      "Workflow & approval systems"
    ],
    experience: [
      {
        date: "Nov 2024 — Present",
        title: "Assistant Programmer, IT Unit",
        org: "Iraqi Pharmacists Association · Baghdad",
        points: [
          "Build backend systems and REST APIs with C# and ASP.NET Core, covering the full lifecycle from analysis and design to maintenance.",
          "Design and develop SQL Server databases, write complex T-SQL queries, and produce exportable reports that support decision-making.",
          "Apply security best practices: JWT Bearer authentication, ASP.NET Core Identity, role-based access control, and OWASP Top 10 mitigations.",
          "Develop responsive front-end interfaces with HTML, CSS and JavaScript, and mobile features with Flutter and Dart."
        ]
      },
      {
        date: "Oct 2021 — Nov 2024",
        title: "Letters of Guarantee Officer",
        org: "Iraqi Islamic Bank · Baghdad",
        points: [
          "Reviewed, issued, extended and cancelled letters of guarantee on the bank's core banking system.",
          "Registered guarantees and printed electronic bonds on the Central Bank of Iraq platform.",
          "Redesigned the letter-of-guarantee form to match Central Bank instructions and remove redundant steps.",
          "Archived records in Laserfiche and provided technical support to the department."
        ]
      }
    ],
    projects: [
      {
        featured: true,
        date: "Oct 2026",
        org: "Iraqi Pharmacists Association",
        title: "Media Unit Posts Dashboard",
        desc: "A publishing dashboard for the Association's media unit with role-based permissions, a multi-step approval workflow, scheduled publishing and an image gallery. Also identified and fixed security vulnerabilities in the API.",
        tags: ["ASP.NET Core 9", "EF Core", "SQL Server", "Azure Blob Storage"]
      },
      {
        featured: true,
        date: "Apr 2026",
        org: "Iraqi Pharmacists Association",
        title: "Pharmaceutical Violations Reporting Platform",
        desc: "A public platform for reporting social-media pages that illegally promote pharmaceutical products, with a review dashboard and export of approved cases to judicial authorities as PDF and Excel reports.",
        tags: ["ASP.NET Core MVC", "SQL Server", "PDF & Excel"]
      },
      {
        date: "Nov 2025",
        org: "Iraqi Pharmacists Association",
        title: "Drug Warehouse License Renewal System",
        desc: "An online system to review, manage and approve license renewals for private pharmaceutical warehouses, integrated with the Association's internal management system.",
        tags: ["ASP.NET MVC", "SQL Server"]
      },
      {
        date: "Sep 2024",
        org: "Iraqi Islamic Bank",
        title: "Letter of Guarantee Form Redesign",
        desc: "Rebuilt the letter-of-guarantee form around Central Bank of Iraq instructions, removing duplicated steps so transactions could be reviewed and completed faster.",
        tags: ["Process Design", "Banking Compliance"]
      },
      {
        date: "Jul 2021",
        org: "University of Baghdad",
        title: "Smartwatch Health Monitoring",
        desc: "Graduation project that analyzes smartwatch health data, gives the patient recommendations, and sends emergency notifications when readings become critical.",
        tags: ["Visual Basic", "Health Data"]
      }
    ],
    skills: [
      { title: "Backend", tags: ["C#", "ASP.NET Core MVC", "ASP.NET Core Web API", "ASP.NET MVC", "Entity Framework Core", "REST APIs"] },
      { title: "Data", tags: ["SQL Server", "T-SQL", "Database Design", "Reporting", "Excel"] },
      { title: "Security", tags: ["JWT Bearer", "ASP.NET Core Identity", "RBAC", "OWASP Top 10"] },
      { title: "Frontend & Mobile", tags: ["HTML", "CSS", "JavaScript", "Flutter", "Dart"] },
      { title: "Cloud & Tools", tags: ["Microsoft Azure", "Azure Blob Storage", "SmarterASP.NET", "Git & GitHub", "Visual Studio", "VS Code"] },
      { title: "Languages", tags: ["Arabic — Native", "English — Intermediate"] }
    ],
    education: [
      { date: "2021", title: "BSc in Computer Science", org: "University of Baghdad · College of Science" },
      { date: "2024 — 2025", title: "CS50x: Introduction to Computer Science", org: "Harvard University · American University of Iraq, Baghdad · COMPUTIQ" }
    ],
    certs: [
      { year: "2025", text: "Cybersecurity Training — Iraqi Pharmacists Association" },
      { year: "2024", text: "Microsoft SQL Server Databases — Culture Center" },
      { year: "2024", text: "Anti-Money Laundering & Counter-Terrorist Financing — Iraqi Islamic Bank" },
      { year: "2023", text: "Banking Compliance — Baghdad Academy" },
      { year: "2022", text: "Front-End Development: HTML, CSS, JavaScript — W3Schools" },
      { year: "2022", text: "Letters of Guarantee & Documentary Credits" }
    ]
  },

  ar: {
    dir: "rtl",
    cv: "Ameer-Blaibel-CV-AR.pdf",
    t: {
      "doc.title": "أمير بليبل — مطوّر برمجيات",
      "name": "أمير بليبل",
      "nav.about": "نبذة",
      "nav.experience": "الخبرات",
      "nav.projects": "المشاريع",
      "nav.skills": "المهارات",
      "nav.education": "التعليم",
      "nav.contact": "تواصل",
      "lang.switch": "English",
      "hero.eyebrow": "مطوّر برمجيات · بغداد، العراق",
      "hero.lead": "أبني أنظمة ويب آمنة قائمة على البيانات للمؤسسات — من منصات تجديد الإجازات إلى لوحات إدارة المحتوى — باستخدام <strong><bdi>ASP.NET Core</bdi></strong> و<strong><bdi>C#</bdi></strong> و<strong><bdi>SQL Server</bdi></strong>.",
      "hero.cta": "تواصل معي",
      "hero.cv": "تحميل السيرة الذاتية",
      "stat.projects": "مشاريع منجزة",
      "stat.software": "سنوات في البرمجة",
      "stat.banking": "سنوات في القطاع المصرفي",
      "about.title": "نبذة عني",
      "about.p1": "أعمل مساعد مبرمج في وحدة تقنية المعلومات في <strong>نقابة صيادلة العراق</strong>، حيث أصمّم وأبني الأنظمة الداخلية التي يعتمد عليها الصيادلة والموظفون يومياً: تجديد الإجازات، ومنصة الإبلاغ العامة، ولوحة النشر الإعلامي.",
      "about.p2": "قبل انتقالي إلى البرمجة، عملت ثلاث سنوات في قسم خطابات الضمان في <strong>المصرف العراقي الإسلامي</strong>. علّمني هذا العمل كيف تسير الإجراءات الرسمية المعتمدة على المستندات فعلياً، وهذا ينعكس على طريقة بنائي للأنظمة: سير عمل واضح، وتحقق دقيق من البيانات، وصلاحيات محكمة، وتقارير مفيدة فعلاً.",
      "about.p3": "حاصل على بكالوريوس علوم الحاسوب من <strong>جامعة بغداد</strong>، وأكملت دورة <strong><bdi>CS50x</bdi></strong> من جامعة هارفارد.",
      "about.focus": "مجالات التركيز",
      "exp.title": "الخبرات",
      "proj.title": "أبرز المشاريع",
      "skills.title": "المهارات",
      "edu.title": "التعليم والشهادات",
      "contact.title": "تواصل",
      "contact.lead": "متاح للفرص الجديدة والتعاون. أسرع طريقة للتواصل معي هي البريد الإلكتروني.",
      "contact.cv": "تحميل السيرة الذاتية",
      "footer.location": "بغداد، العراق",
      "code.status": "تم البناء بنجاح · 0 أخطاء · 0 تحذيرات"
    },
    roles: ["مطوّر أنظمة خلفية", "مطوّر ASP.NET Core", "مصمم قواعد بيانات", "باني واجهات API آمنة"],
    focus: [
      "التطوير الخلفي باستخدام ASP.NET Core",
      "تصميم قواعد بيانات SQL Server والتقارير",
      "المصادقة والصلاحيات وأمن الـ API",
      "أنظمة سير العمل والموافقات"
    ],
    experience: [
      {
        date: "تشرين الثاني 2024 — الآن",
        title: "مساعد مبرمج، وحدة تقنية المعلومات",
        org: "نقابة صيادلة العراق · بغداد",
        points: [
          "بناء الأنظمة الخلفية وواجهات REST API باستخدام C# وASP.NET Core، عبر دورة حياة التطوير كاملة من التحليل والتصميم إلى الصيانة.",
          "تصميم وتطوير قواعد بيانات SQL Server، وكتابة استعلامات T-SQL معقدة، واستخراج تقارير قابلة للتصدير تدعم اتخاذ القرار.",
          "تطبيق أفضل ممارسات الأمان: مصادقة JWT Bearer، وASP.NET Core Identity، والصلاحيات حسب الأدوار، ومعالجة ثغرات OWASP Top 10.",
          "تطوير واجهات أمامية متجاوبة باستخدام HTML وCSS وJavaScript، وميزات تطبيقات الهاتف باستخدام Flutter وDart."
        ]
      },
      {
        date: "تشرين الأول 2021 — تشرين الثاني 2024",
        title: "موظف قسم خطابات الضمان",
        org: "المصرف العراقي الإسلامي · بغداد",
        points: [
          "تدقيق وإصدار وتمديد وإلغاء خطابات الضمان على النظام المصرفي.",
          "ترويج خطابات الضمان وطباعة السندات الإلكترونية على منصة البنك المركزي العراقي.",
          "إعادة تصميم استمارة خطاب الضمان وفق تعليمات البنك المركزي واختصار الإجراءات المكررة.",
          "أرشفة المعاملات على برنامج Laserfiche وتقديم الدعم الفني للقسم."
        ]
      }
    ],
    projects: [
      {
        featured: true,
        date: "تشرين الأول 2026",
        org: "نقابة صيادلة العراق",
        title: "لوحة إدارة منشورات وحدة الإعلام",
        desc: "لوحة نشر لوحدة الإعلام في النقابة تتضمن صلاحيات حسب الأدوار، ودورة موافقة متعددة المراحل، وجدولة النشر، ومعرض صور، مع اكتشاف ومعالجة ثغرات أمنية في الـ API.",
        tags: ["ASP.NET Core 9", "EF Core", "SQL Server", "Azure Blob Storage"]
      },
      {
        featured: true,
        date: "نيسان 2026",
        org: "نقابة صيادلة العراق",
        title: "منصة الإبلاغ عن المخالفات الصيدلانية",
        desc: "منصة عامة للإبلاغ عن صفحات التواصل الاجتماعي التي تروّج للمنتجات الدوائية بشكل غير قانوني، مع لوحة لتدقيق البلاغات وتصدير المعتمد منها إلى الجهات القضائية بتقارير PDF وExcel.",
        tags: ["ASP.NET Core MVC", "SQL Server", "PDF & Excel"]
      },
      {
        date: "تشرين الثاني 2025",
        org: "نقابة صيادلة العراق",
        title: "نظام تجديد ممارسة المهنة للمذاخر الأهلية",
        desc: "نظام إلكتروني لتدقيق وإدارة والموافقة على طلبات تجديد المذاخر الأهلية، مربوط بنظام الإدارة الداخلية للنقابة.",
        tags: ["ASP.NET MVC", "SQL Server"]
      },
      {
        date: "أيلول 2024",
        org: "المصرف العراقي الإسلامي",
        title: "إعادة تصميم استمارة خطاب الضمان",
        desc: "إعادة بناء استمارة خطاب الضمان وفق تعليمات البنك المركزي العراقي، واختصار الخطوات المكررة لتسريع تدقيق المعاملات وإنجازها.",
        tags: ["تصميم الإجراءات", "الامتثال المصرفي"]
      },
      {
        date: "تموز 2021",
        org: "جامعة بغداد",
        title: "المراقبة الصحية عبر الساعة الذكية",
        desc: "مشروع التخرج: يحلل البيانات الصحية للساعة الذكية، ويقدّم توصيات للمريض، ويرسل إشعارات طوارئ عند وصول القراءات إلى مستوى حرج.",
        tags: ["Visual Basic", "بيانات صحية"]
      }
    ],
    skills: [
      { title: "التطوير الخلفي", tags: ["C#", "ASP.NET Core MVC", "ASP.NET Core Web API", "ASP.NET MVC", "Entity Framework Core", "REST APIs"] },
      { title: "البيانات", tags: ["SQL Server", "T-SQL", "تصميم قواعد البيانات", "التقارير", "Excel"] },
      { title: "الأمان", tags: ["JWT Bearer", "ASP.NET Core Identity", "RBAC", "OWASP Top 10"] },
      { title: "الواجهات والتطبيقات", tags: ["HTML", "CSS", "JavaScript", "Flutter", "Dart"] },
      { title: "السحابة والأدوات", tags: ["Microsoft Azure", "Azure Blob Storage", "SmarterASP.NET", "Git & GitHub", "Visual Studio", "VS Code"] },
      { title: "اللغات", tags: ["العربية — اللغة الأم", "الإنجليزية — متوسط"] }
    ],
    education: [
      { date: "2021", title: "بكالوريوس علوم الحاسوب", org: "جامعة بغداد · كلية العلوم" },
      { date: "2024 — 2025", title: "CS50x: مقدمة في علوم الحاسوب", org: "جامعة هارفارد · الجامعة الأمريكية في بغداد · COMPUTIQ" }
    ],
    certs: [
      { year: "2025", text: "دورة الأمن السيبراني — نقابة صيادلة العراق" },
      { year: "2024", text: "قواعد بيانات Microsoft SQL Server — المركز الثقافي" },
      { year: "2024", text: "مكافحة غسل الأموال وتمويل الإرهاب — المصرف العراقي الإسلامي" },
      { year: "2023", text: "الامتثال المصرفي — أكاديمية بغداد التعليمية" },
      { year: "2022", text: "تطوير الواجهات الأمامية: HTML وCSS وJavaScript — W3Schools" },
      { year: "2022", text: "خطابات الضمان والاعتمادات المستندية" }
    ]
  }
};
