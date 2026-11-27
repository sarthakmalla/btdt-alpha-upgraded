/**
 * BTDT (Been There, Done That) — Native In-Page Multi-Language Translation System
 * Zero-banner, zero-iframe architecture. Clean luxury obsidian UI with NO Google Translate top bar.
 */

const BTDT_ALL_LANGUAGES = [
  {
    "code": "uk",
    "name": "Ukrainian",
    "native": "Українська",
    "flag": "🇺🇦",
    "popular": true
  },
  {
    "code": "zh",
    "name": "Chinese (Simplified)",
    "native": "简体中文",
    "flag": "🇨🇳",
    "popular": true
  },
  {
    "code": "en",
    "name": "English",
    "native": "English",
    "flag": "🇬🇧",
    "popular": true
  },
  {
    "code": "de",
    "name": "German",
    "native": "Deutsch",
    "flag": "🇩🇪",
    "popular": true
  },
  {
    "code": "es",
    "name": "Spanish",
    "native": "Español",
    "flag": "🇪🇸",
    "popular": true
  },
  {
    "code": "fr",
    "name": "French",
    "native": "Français",
    "flag": "🇫🇷",
    "popular": true
  },
  {
    "code": "pl",
    "name": "Polish",
    "native": "Polski",
    "flag": "🇵🇱",
    "popular": true
  },
  {
    "code": "hi",
    "name": "Hindi",
    "native": "हिन्दी",
    "flag": "🇮🇳",
    "popular": true
  },
  {
    "code": "it",
    "name": "Italian",
    "native": "Italiano",
    "flag": "🇮🇹",
    "popular": true
  },
  {
    "code": "ja",
    "name": "Japanese",
    "native": "日本語",
    "flag": "🇯🇵",
    "popular": true
  },
  {
    "code": "ko",
    "name": "Korean",
    "native": "한국어",
    "flag": "🇰🇷",
    "popular": true
  },
  {
    "code": "pt",
    "name": "Portuguese",
    "native": "Português",
    "flag": "🇧🇷",
    "popular": true
  },
  {
    "code": "tr",
    "name": "Turkish",
    "native": "Türkçe",
    "flag": "🇹🇷",
    "popular": true
  },
  {
    "code": "ar",
    "name": "Arabic",
    "native": "العربية",
    "flag": "🇸🇦",
    "popular": true
  },
  {
    "code": "nl",
    "name": "Dutch",
    "native": "Nederlands",
    "flag": "🇳🇱",
    "popular": true
  },
  {
    "code": "ru",
    "name": "Russian",
    "native": "Русский",
    "flag": "🌐",
    "popular": true
  },
  {
    "code": "vi",
    "name": "Vietnamese",
    "native": "Tiếng Việt",
    "flag": "🇻🇳",
    "popular": true
  }
];

const BTDT_TRANSLATIONS = {
  "en": {
    "nav.product": "Product",
    "nav.features": "Features",
    "nav.peers": "Peers",
    "nav.story": "Our Story",
    "nav.pricing": "Pricing",
    "nav.demo": "App Demo",
    "nav.campuses": "Campuses",
    "nav.joinMentor": "Join as a Mentor",
    "nav.arrivalKit": "Arrival Kit",
    "nav.freeChecklist": "Free Arrival Checklist",
    "nav.enrollUni": "+ Enroll Uni",
    "nav.activeCampuses": "Active Campuses (30)",
    "nav.langTitle": "Language",
    "hero.kicker": "Introducing BTDT",
    "hero.h1": "The peer network that’s been there before you",
    "hero.sub": "Never land alone in a new country. Get honest written answers from verified seniors who share your home country, language, and target university.",
    "hero.btnMatch": "Find Your Match",
    "hero.btnDemo": "Interactive App Demo",
    "hero.btnChecklist": "Free Arrival Checklist",
    "hero.strip1.tag": "01 · SHARED ROOTS",
    "hero.strip1.text": "Ask freely in your language with a senior from home",
    "hero.strip2.tag": "02 · VERIFIED PEERS",
    "hero.strip2.text": "Verified by Student ID or Enrollment Documents",
    "hero.strip3.tag": "03 · CONCRETE ANSWERS",
    "hero.strip3.text": "Personal arrival checklists and real people helping you step-by-step",
    "marquee.title": "Trusted by incoming students across 30 global universities",
    "stats.desc": "Fixed €20–€120 sessions instead of €2,000+ middleman retainers — verified answers before you fly.",
    "stats.num1": "28+",
    "stats.label1": "Verified Peers Online",
    "stats.num2": "< 2h",
    "stats.label2": "Average Reply Window",
    "stats.num3": "€20",
    "stats.label3": "Transparent Starting Rate",
    "problem.kicker": "THE REALITY GAP",
    "problem.h2": "Why video calls and general advice fail incoming students",
    "problem.sub": "Education consultants sell broad generalizations. Seniors who arrived six months ago know the bus lines, the housing pitfalls, and the exact paperwork.",
    "problem.card1.title": "Video calls leave no receipt",
    "problem.card1.desc": "When someone rattles off 20 German municipal terms on Zoom, you remember three. BTDT delivers verified written answers with document scans.",
    "problem.card2.title": "Agencies charge €2,000+ retainers",
    "problem.card2.desc": "Commercial middlemen bundle services you don't need. On BTDT, pay fixed €20–€120 rates directly to a student peer for what actually matters.",
    "problem.card3.title": "Generic advice ignores your background",
    "problem.card3.desc": "A student from India or Ukraine faces entirely different visa, blocked account, and transcript verification steps than a domestic applicant.",
    "steps.kicker": "HOW BTDT WORKS",
    "steps.h2": "From nervous admit to settled student in three clear steps",
    "steps.sub": "No agency contracts. No vague advice. Just direct written communication with verified students.",
    "steps.s1.num": "STEP 01",
    "steps.s1.title": "Match with a Senior from Your Country",
    "steps.s1.desc": "Filter by your home nation, target university, and program. Review real verified student profiles, verified courses, and Aura ratings.",
    "steps.s2.num": "STEP 02",
    "steps.s2.title": "Ask in Writing & Upload Document Scans",
    "steps.s2.desc": "Send questions in your native language. Attach PDF transcripts, housing lease drafts, or enrollment forms for an honest senior audit.",
    "steps.s3.num": "STEP 03",
    "steps.s3.title": "Receive Your Digital Boarding Pass",
    "steps.s3.desc": "Your mentor compiles action items into a clean pass saved in your BTDT Wallet, ready to reference offline at customs and city hall.",
    "demo.kicker": "INTERACTIVE HARDWARE DEMO",
    "demo.h2": "Experience the iOS Runtime Demo",
    "demo.sub": "Interact with a simulated iPhone 18 Pro Max running the BTDT iOS experience: explore student chat, inspect PDF audits, and switch to mentor mode.",
    "matcher.kicker": "PEER ROUTE FINDER",
    "matcher.h2": "Find a senior who shares your exact route",
    "matcher.fromLabel": "I am traveling from:",
    "matcher.toLabel": "My target university:",
    "matcher.btnFind": "Search Enrolled Peers",
    "pricing.kicker": "TRANSPARENT PRICING",
    "pricing.h2": "Fixed, honest peer rates. No recurring retainers.",
    "pricing.sub": "Every session is delivered in writing with verified checklist receipts.",
    "pricing.t1.name": "Base Peer Counseling",
    "pricing.t1.price": "€20",
    "pricing.t1.duration": "15–20 min written response",
    "pricing.t1.desc": "Quick reality-check on living costs, transit passes, and neighborhood safety.",
    "pricing.t2.name": "Targeted Campus Audit",
    "pricing.t2.price": "€45",
    "pricing.t2.duration": "30–40 min detailed guidance",
    "pricing.t2.desc": "Detailed review of dormitory waitlists, registration timing, and course enrollment tips.",
    "pricing.t3.name": "Deep-Dive Paperwork & Prep",
    "pricing.t3.price": "€100",
    "pricing.t3.duration": "60–70 min full checklist & doc audit",
    "pricing.t3.desc": "Comprehensive audit of your academic packet, lease contract, and municipal checklist.",
    "pricing.addon.title": "Airport Meet & Greet on Arrival (+€40)",
    "pricing.addon.desc": "Your mentor personally meets you at arrivals, assists with baggage, buys your first transit pass, and navigates you to your residence.",
    "story.kicker": "FOUNDER'S NOTE · WHY BTDT EXISTS",
    "story.quote": "“Your acceptance letter should feel like pure pride — not staring at your ceiling at 2 AM wondering who to trust before you fly. I’m building BTDT so you always have one honest senior from home waiting on the other side.”",
    "story.btnRead": "Read Our Story",
    "lang.promptTitle": "Regional Language Available",
    "lang.promptDesc": "Read BTDT in your regional language for complete peer clarity.",
    "lang.switchBtn": "Switch Language",
    "lang.keepEn": "Keep English"
  },
  "uk": {
    "nav.product": "Продукт",
    "nav.features": "Можливості",
    "nav.peers": "Студенти",
    "nav.story": "Наша історія",
    "nav.pricing": "Тарифи",
    "nav.demo": "Демо додатку",
    "nav.campuses": "Університети",
    "nav.joinMentor": "Стати ментором",
    "nav.arrivalKit": "Набір новачка",
    "nav.freeChecklist": "Безкоштовний чекліст прибуття",
    "nav.enrollUni": "+ Додати ВНЗ",
    "nav.activeCampuses": "Активні університети (30)",
    "nav.langTitle": "Мова сайту",
    "hero.kicker": "Знайомтеся з BTDT",
    "hero.h1": "Мережа студентів-однодумців, які вже пройшли цей шлях до тебе",
    "hero.sub": "Ніколи не прилітай у нову країну наодинці. Отримуй чесні письмові відповіді від перевірених старшокурсників, які мають спільну з тобою країну, мову та обраний університет.",
    "hero.btnMatch": "Знайти свого ментора",
    "hero.btnDemo": "Інтерактивне демо додатку",
    "hero.btnChecklist": "Безкоштовний чекліст прибуття",
    "hero.strip1.tag": "01 · СПІЛЬНЕ КОРІННЯ",
    "hero.strip1.text": "Спілкуйся вільно рідною мовою зі старшокурсником з твоєї країни",
    "hero.strip2.tag": "02 · ПЕРЕВІРЕНІ СТУДЕНТИ",
    "hero.strip2.text": "Верифікація за студентським квитком або документами про зарахування",
    "hero.strip3.tag": "03 · ЧІТКІ ВІДПОВІДІ",
    "hero.strip3.text": "Індивідуальні чеклісти прибуття та реальна покрокова підтримка",
    "marquee.title": "Нам довіряють майбутні студенти 30 провідних університетів світу",
    "stats.desc": "Фіксовані консультації за €20–€120 замість посередницьких комісій у €2 000+ — перевірені відповіді ще до твого вильоту.",
    "stats.num1": "28+",
    "stats.label1": "Перевірених менторів онлайн",
    "stats.num2": "< 2 год",
    "stats.label2": "Середній час відповіді",
    "stats.num3": "€20",
    "stats.label3": "Прозора початкова вартість",
    "problem.kicker": "РЕАЛЬНІСТЬ ПРОТИ ОБІЦЯНОК",
    "problem.h2": "Чому відеодзвінки та загальні поради не працюють для нових студентів",
    "problem.sub": "Освітні агентства продають загальні шаблони за шалені гроші. Старшокурсники, які приїхали кілька місяців тому, знають реальні маршрути, підводні камені житла та кожен крок оформлення документів.",
    "problem.card1.title": "Відеодзвінки не залишають чітких записів",
    "problem.card1.desc": "Коли хтось швидко розповідає про 20 німецьких чи польських інстанцій через Zoom, ти запам'ятовуєш лише дві. BTDT надає структуровані письмові інструкції, до яких можна повертатися будь-коли.",
    "problem.card2.title": "Агентства вимагають від €2 000+ комісії",
    "problem.card2.desc": "Комерційні посередники нав'язують послуги, які тобі не потрібні. У BTDT ти платиш фіксовані €20–€120 напряму реальному студенту за те, що дійсно має значення.",
    "problem.card3.title": "Загальні поради ігнорують твоє походження",
    "problem.card3.desc": "Студент з України чи іншої країни стикається із зовсім іншими вимогами щодо візи, блокованого рахунку, апостилів та визнання дипломів, ніж місцевий житель.",
    "steps.kicker": "ЯК ПРАЦЮЄ BTDT",
    "steps.h2": "Від розгубленого вступника до впевненого студента за три кроки",
    "steps.sub": "Жодних агентських контрактів. Жодних абстрактних порад. Тільки пряме письмове спілкування з реальними перевіреними студентами.",
    "steps.s1.num": "КРОК 01",
    "steps.s1.title": "Знайди старшокурсника з твоєї країни",
    "steps.s1.desc": "Обери свою рідну країну, обраний університет та спеціальність. Переглядай реальні верифіковані профілі студентів, їхній курс та рейтинг довіри (Aura).",
    "steps.s2.num": "КРОК 02",
    "steps.s2.title": "Запитуй письмово та прикріплюй скани документів",
    "steps.s2.desc": "Пиши запитання рідною мовою. Додавай скани академічних виписок, проєкти договорів оренди чи форми зарахування для детального аналізу досвідченим студентом.",
    "steps.s3.num": "КРОК 03",
    "steps.s3.title": "Отримай цифровий посадковий талон прибуття",
    "steps.s3.desc": "Ментор збирає всі перевірені кроки в акуратний посадковий талон у твоєму BTDT Wallet, який доступний офлайн на паспортному контролі та в мерії.",
    "demo.kicker": "ІНТЕРАКТИВНЕ ДЕМО ДЛЯ IPHONE",
    "demo.h2": "Спробуй реальний інтерфейс додатку iOS",
    "demo.sub": "Повзаємодій з інтерактивним iPhone 18 Pro Max: випробуй чат для студентів, переглянь прикріплені PDF-файли та перемкнися на екран ментора.",
    "matcher.kicker": "ПОШУК СТУДЕНТСЬКОГО МАРШРУТУ",
    "matcher.h2": "Знайди ментора, який пройшов саме твій маршрут",
    "matcher.fromLabel": "Країна, звідки я вирушаю:",
    "matcher.toLabel": "Мій обраний університет:",
    "matcher.btnFind": "Шукати студентів у мережі",
    "pricing.kicker": "ПРОЗОРІ ТАРИФИ",
    "pricing.h2": "Фіксовані, чесні студентські ціни. Без підписок.",
    "pricing.sub": "Кожна консультація надається в письмовому вигляді зі збереженням перевіреного чекліста дій.",
    "pricing.t1.name": "Базова студентська консультація",
    "pricing.t1.price": "€20",
    "pricing.t1.duration": "15–20 хв письмової відповіді",
    "pricing.t1.desc": "Швидкий реалістичний огляд витрат на життя, студентських проїзних та безпечних районів біля кампусу.",
    "pricing.t2.name": "Повний аудит обраного кампусу",
    "pricing.t2.price": "€45",
    "pricing.t2.duration": "30–40 хв детального розбору",
    "pricing.t2.desc": "Детальний розбір черг у гуртожитки, термінів міської реєстрації та порад щодо вибору навчальних дисциплін.",
    "pricing.t3.name": "Повний аудит документів та підготовка",
    "pricing.t3.price": "€100",
    "pricing.t3.duration": "60–70 хв повного аудиту",
    "pricing.t3.desc": "Комплексна перевірка академічного пакету документів, договору оренди житла та обов'язкових кроків у мерії.",
    "pricing.addon.title": "Зустріч в аеропорту після прибуття (+€40)",
    "pricing.addon.desc": "Твій ментор особисто зустріне тебе в зоні прибуття, допоможе з багажем, придбанням першого проїзного та проведе до житла.",
    "story.kicker": "ЗАПИСКА ЗАСНОВНИКА · ЧОМУ ІСНУЄ BTDT",
    "story.quote": "«Твій лист про зарахування має викликати лише чисту гордість — а не безсоння о другій ночі з думками, кому довіряти перед вильотом. Я створюю BTDT, щоб на іншому кінці тебе завжди чекав чесний старшокурсник з твоєї країни».",
    "story.btnRead": "Читати нашу історію",
    "lang.promptTitle": "Доступна регіональна мова",
    "lang.promptDesc": "Читайте BTDT українською (Українська), німецькою, іспанською або іншими мовами для чіткого розуміння нашої мети.",
    "lang.switchBtn": "Змінити мову",
    "lang.keepEn": "Залишити англійську"
  },
  "zh": {
    "nav.product": "产品",
    "nav.features": "功能",
    "nav.peers": "学长同行",
    "nav.story": "创办初衷",
    "nav.pricing": "透明定价",
    "nav.demo": "应用演示",
    "nav.campuses": "全球校区",
    "nav.joinMentor": "成为学长导师",
    "nav.arrivalKit": "落地锦囊",
    "nav.freeChecklist": "免费抵达清单",
    "nav.enrollUni": "+ 申报新大学",
    "nav.activeCampuses": "活跃校区 (30)",
    "nav.langTitle": "选择语言",
    "hero.kicker": "介绍 BTDT",
    "hero.h1": "在你之前就存在的同行网络",
    "hero.sub": "永远不要独自一人踏上异国他乡。从与你同乡、使用同一种语言、目标院校相同的资深人士那里获得真诚的书面解答。",
    "hero.btnMatch": "找到你的匹配",
    "hero.btnDemo": "交互式应用程序演示",
    "hero.btnChecklist": "免费抵达清单",
    "hero.strip1.tag": "01 · 共同文化根源",
    "hero.strip1.text": "用你的母语向一位在校的同乡长者自由提问",
    "hero.strip2.tag": "02 · 严格核验学长",
    "hero.strip2.text": "凭学生证或正式入学文件百分百严格核实",
    "hero.strip3.tag": "03 · 具体踏实解答",
    "hero.strip3.text": "个性化的抵达清单和学长真人逐步辅导",
    "marquee.title": "受到全球 30 所顶尖大学新生的信赖",
    "stats.desc": "固定 €20–€120 咨询费，告别中介 €2,000+ 巨额捆绑 —— 登机前获取经过核实验证的一手解答。",
    "stats.num1": "28+",
    "stats.label1": "已认证学长在线",
    "stats.num2": "< 2h",
    "stats.label2": "平均回复时效",
    "stats.num3": "€20",
    "stats.label3": "透明起步费率",
    "problem.kicker": "认知鸿沟",
    "problem.h2": "为什么视频通话和笼统建议无法真正帮助留学生",
    "problem.sub": "商业中介往往兜售泛泛而谈的模板。六个月前才落地的学长学姐，才真正清楚公交线路、租房套路以及市政登记的每一步细节。",
    "problem.card1.title": "视频通话不会留下书面凭据",
    "problem.card1.desc": "当有人在 Zoom 里滔滔不绝讲了 20 个当地市政术语时，你只能记住三个。BTDT 提供附带文件核验的书面解答，随时离线可查。",
    "problem.card2.title": "留学中介收取 €2,000+ 巨额费用",
    "problem.card2.desc": "商业中介捆绑大量你根本不需要的服务。在 BTDT，你只需支付 €20–€120 的固定费用，直接让一线学长帮你解决核心痛点。",
    "problem.card3.title": "泛泛的建议忽略了你的生源背景",
    "problem.card3.desc": "中国或乌克兰留学生在签证自保金、双认证、阻断账户及居留卡上遇到的难题，与本地学生完全不同。",
    "steps.kicker": "BTDT 运作方式",
    "steps.h2": "从忐忑的新生到从容的学子，只需三步",
    "steps.sub": "无中介合同套路，无模糊空泛建议。只有与真实在读学长的直接书面交流。",
    "steps.s1.num": "第一步",
    "steps.s1.title": "匹配来自同国的认证学长",
    "steps.s1.desc": "根据你的出发国、目标大学和专业进行筛选。查看真实的学长主页、所学课程及 Aura 真实信誉评级。",
    "steps.s2.num": "第二步",
    "steps.s2.title": "书面提问并上传文书扫描件",
    "steps.s2.desc": "用母语直接畅谈。上传成绩单扫描件、租房合同草案或注册表格，让学长逐条帮你把关避坑。",
    "steps.s3.num": "第三步",
    "steps.s3.title": "获取你的数字化专属登机通关卡",
    "steps.s3.desc": "学长将所有要点整理为一张清晰的清单卡片，存入你的 BTDT 钱包，在海关或市政大厅时可随时离线查阅。",
    "demo.kicker": "交互式硬件演示",
    "demo.h2": "体验 iOS 原生运行演示",
    "demo.sub": "与模拟的 iPhone 18 Pro Max 实时交互：探索留学生聊天、审阅 PDF 凭据并切换至学长导师模式。",
    "matcher.kicker": "学长路线匹配器",
    "matcher.h2": "寻找走过你完全相同求学路线的学长",
    "matcher.fromLabel": "我的出发地：",
    "matcher.toLabel": "我的目标大学：",
    "matcher.btnFind": "搜索在读学长",
    "pricing.kicker": "透明定价",
    "pricing.h2": "固定、透明的学长咨询费。绝无隐藏月费。",
    "pricing.sub": "每次咨询均以书面凭据形式提供，可随时离线核对。",
    "pricing.t1.name": "基础学长咨询",
    "pricing.t1.price": "€20",
    "pricing.t1.duration": "15–20 分钟书面详尽答复",
    "pricing.t1.desc": "生活成本、交通月票、安全街区以及落地避坑的快速客观评估。",
    "pricing.t2.name": "校区专项深度审核",
    "pricing.t2.price": "€45",
    "pricing.t2.duration": "30–40 分钟详细把关",
    "pricing.t2.desc": "宿舍候补排位策略、市政地址登记节点及选课避坑指南。",
    "pricing.t3.name": "行前文书与合同终审",
    "pricing.t3.price": "€100",
    "pricing.t3.duration": "60–70 分钟全面文档核查",
    "pricing.t3.desc": "逐行审核学术成绩单、租房合同条款以及第一周必备的行政办事清单。",
    "pricing.addon.title": "落地机场亲身接机 (+€40)",
    "pricing.addon.desc": "学长亲自在机场到达口接机，协助搬运行李、办理第一张交通卡并陪同护送至宿舍。",
    "story.kicker": "创始人手记 · 为什么创立 BTDT",
    "story.quote": "“拿到录取通知书的那一刻，本应只有纯粹的骄傲与喜悦 —— 而不是在凌晨两点盯着天花板，在飞往异国前不知道该信任谁。我创立 BTDT，就是为了让你在世界的另一端，永远有一位来自家乡的真诚学长在守候着你。”",
    "story.btnRead": "阅读创办故事",
    "lang.promptTitle": "提供区域语言",
    "lang.promptDesc": "阅读 BTDT 的乌克兰语 (Українська)、中文、德语、西班牙语等 100+ 种语言版本，清晰了解我们学生辅导的初衷。",
    "lang.switchBtn": "切换语言",
    "lang.keepEn": "保持英语"
  },
  "ja": {
    "nav.product": "サービス概要",
    "nav.features": "特徴",
    "nav.peers": "先輩メンター",
    "nav.story": "創立ストーリー",
    "nav.pricing": "料金",
    "nav.demo": "アプリ体験",
    "nav.campuses": "提携大学",
    "nav.joinMentor": "メンターに応募",
    "nav.arrivalKit": "渡航キット",
    "nav.freeChecklist": "無料チェックリスト",
    "nav.enrollUni": "+ 大学を追加",
    "nav.activeCampuses": "対応大学 (30)",
    "nav.langTitle": "言語選択",
    "hero.kicker": "BTDTへようこそ",
    "hero.h1": "あなたより先にその道を歩んだ先輩ネットワーク",
    "hero.sub": "見知らぬ国に一人で降り立つ不安をゼロに。母国・母語・進学先が同じ認証済み先輩から、実体験に基づいた書面アドバイスを受け取れます。",
    "hero.btnMatch": "メンターを見つける",
    "hero.btnDemo": "iOSインタラクティブ体験",
    "hero.btnChecklist": "無料渡航チェックリスト",
    "hero.strip1.tag": "01 · 同じルーツ",
    "hero.strip1.text": "母語で現地在籍の先輩に気兼ねなく質問",
    "hero.strip2.tag": "02 · 厳格な学生認証",
    "hero.strip2.text": "学生証または在学証明書による身元確認済み",
    "hero.strip3.tag": "03 · 明確な書面回答",
    "hero.strip3.text": "個別チェックリストと実践的なステップ別ガイダンス",
    "marquee.title": "世界30の一流大学に進学する留学生が信頼",
    "stats.desc": "2,000ユーロを超える高額仲介業者ではなく、20〜120ユーロの明朗定額制 — 渡航前に確かな回答を。",
    "stats.num1": "28+",
    "stats.label1": "オンライン認証メンター",
    "stats.num2": "< 2時間",
    "stats.label2": "平均回答時間",
    "stats.num3": "€20",
    "stats.label3": "安心の開始料金",
    "problem.kicker": "情報の落とし穴",
    "problem.h2": "なぜビデオ通話や一般的な助言だけでは不十分なのか",
    "problem.sub": "留学斡旋業者は誰にでも当てはまる抽象的な話を高額で販売します。半年前に渡航したばかりの先輩こそが、バス路線、住居の罠、市庁舎登録の生の手続きを知っています。",
    "story.kicker": "創業者からのメッセージ",
    "story.quote": "「合格通知を受け取った瞬間は、純粋な誇りに満ちているべきです。渡航前に夜中の2時に天井を見つめ、誰を信じればいいのか途方に暮れる必要はありません。世界の向こう側で、同じ母国の信頼できる先輩が必ず待っている — そのために私はBTDTを創りました。」",
    "story.btnRead": "ストーリーを読む",
    "lang.promptTitle": "言語切り替えが可能です",
    "lang.promptDesc": "ウクライナ語、中国語、日本語など多言語で、私たちの理念を正確にご覧いただけます。",
    "lang.switchBtn": "言語を変更",
    "lang.keepEn": "英語のまま表示"
  },
  "de": {
    "nav.product": "Produkt",
    "nav.features": "Funktionen",
    "nav.peers": "Peers",
    "nav.story": "Über uns",
    "nav.pricing": "Preise",
    "nav.demo": "App-Demo",
    "nav.campuses": "Universitäten",
    "nav.joinMentor": "Mentor werden",
    "nav.arrivalKit": "Ankunfts-Kit",
    "nav.freeChecklist": "Kostenlose Checkliste",
    "hero.kicker": "Das ist BTDT",
    "hero.h1": "Das Peer-Netzwerk, das den Weg vor dir gegangen ist",
    "hero.sub": "Komm niemals allein in einem neuen Land an. Erhalte ehrliche, schriftliche Antworten von verifizierten Studierenden deines Heimatlandes.",
    "hero.btnMatch": "Finde deinen Peer",
    "hero.btnDemo": "Interaktive App-Demo",
    "hero.btnChecklist": "Kostenlose Checkliste",
    "marquee.title": "Vertraut von Studienanfängern an 30 führenden Universitäten weltweit",
    "stats.desc": "Feste €20–€120 Sessions statt €2.000+ Agenturgebühren — verifizierte Antworten vor deinem Flug.",
    "footer.rights": "© 2026 BTDT (Been There, Done That). Alle Rechte vorbehalten.",
    "footer.tagline": "Das Peer-Netzwerk, das den Weg vor dir gegangen ist.",
    "lang.promptTitle": "In Deutsch lesen?",
    "lang.promptDesc": "Wähle deine Sprache für maximale Klarheit.",
    "lang.switchUk": "Auf Ukrainisch wechseln",
    "lang.switchEn": "Zu Englisch wechseln",
    "lang.badge": "Sprache"
  },
  "es": {
    "nav.product": "Producto",
    "nav.features": "Características",
    "nav.peers": "Mentores",
    "nav.story": "Historia",
    "nav.pricing": "Precios",
    "nav.demo": "Demo de App",
    "nav.campuses": "Universidades",
    "nav.joinMentor": "Ser Mentor",
    "nav.arrivalKit": "Kit de Llegada",
    "nav.freeChecklist": "Checklist Gratis",
    "hero.kicker": "Presentamos BTDT",
    "hero.h1": "La red de mentores que ya estuvo en tu lugar",
    "hero.sub": "Nunca llegues solo a un nuevo país. Obtén respuestas escritas y honestas de estudiantes mayores verificados de tu mismo país e idioma.",
    "hero.btnMatch": "Encuentra tu Mentor",
    "hero.btnDemo": "Demo Interactiva",
    "hero.btnChecklist": "Checklist de Llegada Gratis",
    "marquee.title": "Con la confianza de estudiantes en 30 universidades internacionales",
    "stats.desc": "Sesiones fijas de €20–€120 en lugar de agencias de €2.000+ — respuestas verificadas antes de volar.",
    "footer.rights": "© 2026 BTDT (Been There, Done That). Todos los derechos reservados.",
    "footer.tagline": "La red de mentores que ya estuvo en tu lugar.",
    "lang.promptTitle": "¿Prefieres leer en español?",
    "lang.promptDesc": "Cambia de idioma para entender cada detalle sin confusiones.",
    "lang.switchUk": "Cambiar a Ucraniano",
    "lang.switchEn": "Cambiar a Inglés",
    "lang.badge": "Idioma"
  },
  "fr": {
    "nav.product": "Produit",
    "nav.features": "Fonctionnalités",
    "nav.peers": "Mentors",
    "nav.story": "Notre histoire",
    "nav.pricing": "Tarifs",
    "nav.demo": "Démo de l'App",
    "nav.campuses": "Universités",
    "nav.joinMentor": "Devenir mentor",
    "nav.arrivalKit": "Kit d'Arrivée",
    "nav.freeChecklist": "Check-list Gratuite",
    "hero.kicker": "Voici BTDT",
    "hero.h1": "Le réseau d'étudiants qui a déjà fait le chemin avant vous",
    "hero.sub": "Ne débarquez jamais seul dans un nouveau pays. Obtenez des réponses écrites honnêtes d'étudiants vérifiés partageant votre langue et votre université.",
    "hero.btnMatch": "Trouver un mentor",
    "hero.btnDemo": "Démo Interactive",
    "hero.btnChecklist": "Check-list d'Arrivée Gratuite",
    "marquee.title": "Adopté par les étudiants de 30 universités prestigieuses",
    "stats.desc": "Consultations fixes de 20 € à 120 € au lieu des intermédiaires à 2 000 €+ — des réponses vérifiées avant votre départ.",
    "footer.rights": "© 2026 BTDT (Been There, Done That). Tous droits réservés.",
    "footer.tagline": "Le réseau d'étudiants qui a déjà fait le chemin avant vous.",
    "lang.promptTitle": "Préférez-vous le français ?",
    "lang.promptDesc": "Basculez de langue pour une parfaite clarté.",
    "lang.switchUk": "Passer en ukrainien",
    "lang.switchEn": "Passer en anglais",
    "lang.badge": "Langue"
  },
  "pl": {
    "nav.product": "Produkt",
    "nav.features": "Funkcje",
    "nav.peers": "Mentorzy",
    "nav.story": "O nas",
    "nav.pricing": "Cennik",
    "nav.demo": "Demo aplikacji",
    "nav.campuses": "Uczelnie",
    "nav.joinMentor": "Zostań mentorem",
    "nav.arrivalKit": "Zestaw powitalny",
    "nav.freeChecklist": "Darmowa lista kontrolna",
    "hero.kicker": "Przedstawiamy BTDT",
    "hero.h1": "Sieć rówieśnicza, która przeszła tę drogę przed Tobą",
    "hero.sub": "Nigdy nie ląduj sam w obcym kraju. Uzyskaj rzetelne pisemne odpowiedzi od zweryfikowanych starszych studentów z Twojego kraju i uczelni.",
    "hero.btnMatch": "Znajdź mentora",
    "hero.btnDemo": "Interaktywne demo",
    "hero.btnChecklist": "Darmowy niezbędnik przyjazdu",
    "marquee.title": "Zaufali nam studenci na 30 czołowych uczelniach świata",
    "stats.desc": "Stałe stawki €20–€120 zamiast prowizji agencyjnych €2 000+ — pewne odpowiedzi jeszcze przed wylotem.",
    "footer.rights": "© 2026 BTDT (Been There, Done That). Wszelkie prawa zastrzeżone.",
    "footer.tagline": "Sieć rówieśnicza, która przeszła tę drogę przed Tobą.",
    "lang.promptTitle": "Czy wolisz język polski?",
    "lang.promptDesc": "Zmień język, aby bez problemu zrozumieć wszystkie szczegóły.",
    "lang.switchUk": "Zmień na ukraiński",
    "lang.switchEn": "Zmień na angielski",
    "lang.badge": "Język"
  },
  "hi": {
    "nav.product": "प्रोडक्ट",
    "nav.features": "सुविधाएं",
    "nav.peers": "सीनियर मेंटर्स",
    "nav.story": "हमारी कहानी",
    "nav.pricing": "शुल्क",
    "nav.demo": "ऐप डेमो",
    "nav.campuses": "विश्वविद्यालय",
    "nav.joinMentor": "मेंटर बनें",
    "nav.arrivalKit": "अराइवल किट",
    "nav.freeChecklist": "फ्री चेकलिस्ट",
    "hero.kicker": "प्रस्तुत है BTDT",
    "hero.h1": "एक ऐसा नेटवर्क जो आपके सफर से पहले वहाँ पहुँच चुका है",
    "hero.sub": "विदेश में कभी अकेले न उतरें। अपने देश, भाषा और विश्वविद्यालय के सत्यापित सीनियर्स से सटीक लिखित सलाह पाएं।",
    "hero.btnMatch": "अपना मेंटर खोजें",
    "hero.btnDemo": "इंटरैक्टिव ऐप डेमो",
    "hero.btnChecklist": "फ्री अराइवल चेकलिस्ट",
    "marquee.title": "दुनिया के 30 शीर्ष विश्वविद्यालयों के छात्रों का भरोसा",
    "stats.desc": "2,000+ यूरो के महंगे एजेंटों के बजाय €20–€120 की फिक्स्ड फीस — उड़ान भरने से पहले पक्के जवाब।",
    "footer.rights": "© 2026 BTDT (Been There, Done That). सर्वाधिकार सुरक्षित।",
    "footer.tagline": "एक ऐसा नेटवर्क जो आपके सफर से पहले वहाँ पहुँच चुका है।",
    "lang.promptTitle": "क्या आप हिंदी में देखना चाहते हैं?",
    "lang.promptDesc": "अपनी भाषा में सटीक जानकारी प्राप्त करें।",
    "lang.switchUk": "यूक्रेनी में बदलें",
    "lang.switchEn": "अंग्रेजी में बदलें",
    "lang.badge": "भाषा"
  },
  "it": {
    "nav.product": "Prodotto",
    "nav.features": "Funzionalità",
    "nav.peers": "Mentori",
    "nav.story": "La nostra storia",
    "nav.pricing": "Tariffe",
    "nav.demo": "Demo dell'App",
    "nav.campuses": "Università",
    "nav.joinMentor": "Diventa Mentore",
    "nav.arrivalKit": "Kit di Arrivo",
    "nav.freeChecklist": "Checklist Gratuita",
    "hero.kicker": "Ecco BTDT",
    "hero.h1": "La rete di studenti che ha già vissuto il tuo percorso prima di te",
    "hero.sub": "Non atterrare mai da solo in un nuovo paese. Ricevi risposte scritte sincere da studenti senior verificati della tua stessa nazionalità e università.",
    "hero.btnMatch": "Trova il tuo mentore",
    "hero.btnDemo": "Demo Interattiva",
    "hero.btnChecklist": "Checklist di Arrivo Gratuita",
    "marquee.title": "Scelto dagli studenti di 30 università internazionali",
    "stats.desc": "Sessioni fisse da €20–€120 invece di agenzie da €2.000+ — risposte verificate prima del volo.",
    "footer.rights": "© 2026 BTDT (Been There, Done That). Tutti i diritti riservati.",
    "footer.tagline": "La rete di studenti che ha già vissuto il tuo percorso prima di te.",
    "lang.promptTitle": "Preferisci l'italiano?",
    "lang.promptDesc": "Cambia lingua per capire ogni dettaglio senza incomprensioni.",
    "lang.switchUk": "Passa all'ucraino",
    "lang.switchEn": "Passa all'inglese",
    "lang.badge": "Lingua"
  }
};

const BTDT_I18N = {
  currentLang: 'en',

  init() {
    // 1. Force purge any legacy Google Translate cookies so top bars never appear
    this.purgeGoogleTranslateArtifacts();

    // 2. Determine initial language
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const savedLang = localStorage.getItem('btdt_user_lang');

    const navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    let detectedLang = 'en';
    if (navLang.startsWith('uk')) detectedLang = 'uk';
    else if (navLang.startsWith('zh')) detectedLang = 'zh';
    else if (navLang.startsWith('de')) detectedLang = 'de';
    else if (navLang.startsWith('es')) detectedLang = 'es';
    else if (navLang.startsWith('fr')) detectedLang = 'fr';
    else if (navLang.startsWith('pl')) detectedLang = 'pl';
    else if (navLang.startsWith('hi')) detectedLang = 'hi';
    else if (navLang.startsWith('it')) detectedLang = 'it';
    else if (navLang.startsWith('ja')) detectedLang = 'ja';

    const initialLang = urlLang || savedLang || detectedLang;
    this.setLanguage(initialLang, false);

    // 3. Floating corner welcoming prompt
    if (!localStorage.getItem('btdt_lang_prompt_dismissed')) {
      setTimeout(() => {
        const promptEl = document.getElementById('btdtLangFloatingPrompt');
        if (promptEl) promptEl.classList.remove('hidden');
      }, 1400);
    }

    this.renderLanguageList();
  },

  purgeGoogleTranslateArtifacts() {
    try {
      const host = window.location.hostname || '';
      const parts = host.split('.');
      const domains = ['', host, '.' + host];
      if (parts.length >= 2) {
        domains.push('.' + parts.slice(-2).join('.'));
      }
      domains.forEach((d) => {
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;' + (d ? ' domain=' + d + ';' : '');
      });

      // Remove any injected google translate iframes or elements
      const rogue = document.querySelectorAll('iframe.goog-te-banner-frame, .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame');
      rogue.forEach((el) => el.remove());

      if (document.body) {
        document.body.style.top = '0px';
        document.body.style.position = 'static';
      }
    } catch (e) {}
  },

  t(key) {
    const dict = BTDT_TRANSLATIONS[this.currentLang] || BTDT_TRANSLATIONS.en;
    if (dict && dict[key]) return dict[key];
    const fallback = BTDT_TRANSLATIONS.en;
    return (fallback && fallback[key]) ? fallback[key] : key;
  },

  setLanguage(langCode, save = true) {
    if (!langCode) langCode = 'en';
    // Normalize aliases like zh-CN to zh
    if (langCode.startsWith('zh')) langCode = 'zh';

    if (!BTDT_TRANSLATIONS[langCode]) {
      // Fallback to English if language dictionary not yet loaded
      langCode = 'en';
    }

    this.currentLang = langCode;
    if (save) {
      localStorage.setItem('btdt_user_lang', langCode);
    }
    document.documentElement.lang = langCode;

    // Apply translations to all DOM elements marked with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const trans = this.t(key);
      if (trans) el.textContent = trans;
    });

    // Apply translations to placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const trans = this.t(key);
      if (trans) el.placeholder = trans;
    });

    // Update kinetic animated hero headline
    const heroH1 = document.getElementById('heroH1');
    if (heroH1) {
      const headlineText = this.t('hero.h1');
      if (window.animateWordsIn) {
        window.animateWordsIn(heroH1, headlineText, 95);
      } else {
        heroH1.textContent = headlineText;
      }
    }

    // Localize the corner prompt texts dynamically
    const promptTitle = document.getElementById('btdtPromptTitle');
    const promptDesc = document.getElementById('btdtPromptDesc');
    const promptSwitchBtn = document.getElementById('btdtPromptSwitchBtn');
    const promptKeepBtn = document.getElementById('btdtPromptKeepBtn');

    if (promptTitle) promptTitle.textContent = this.t('lang.promptTitle');
    if (promptDesc) promptDesc.textContent = this.t('lang.promptDesc');
    if (promptSwitchBtn) promptSwitchBtn.textContent = this.t('lang.switchBtn');
    if (promptKeepBtn) promptKeepBtn.textContent = this.t('lang.keepEn');

    // Update active badges and indicators
    this.updateLanguageUI();
    this.closeModal();

    // Clean any Google Translate attempts
    this.purgeGoogleTranslateArtifacts();

    if (save && window.showToast) {
      const match = BTDT_ALL_LANGUAGES.find((l) => l.code === langCode);
      const name = match ? match.native : langCode.toUpperCase();
      window.showToast('Language updated: ' + name);
    }
  },

  updateLanguageUI() {
    const currentObj = BTDT_ALL_LANGUAGES.find((l) => l.code === this.currentLang) ||
                       { code: this.currentLang, name: 'English', native: 'English', flag: '🇬🇧' };

    // Update floating corner pill
    const pillLabel = document.getElementById('btdtCurrentLangLabel');
    if (pillLabel) {
      pillLabel.innerHTML = `${currentObj.flag} ${currentObj.native || currentObj.name}`;
    }

    // Update header nav button
    const navCode = document.getElementById('navLangName');
    const navFlag = document.getElementById('navLangFlag');
    if (navCode) navCode.textContent = currentObj.code.toUpperCase();
    if (navFlag) navFlag.textContent = currentObj.flag;

    // Highlight selected language in modal
    document.querySelectorAll('[data-lang-choice]').forEach((btn) => {
      const code = btn.getAttribute('data-lang-choice');
      const isSelected = code === this.currentLang;
      btn.classList.toggle('border-crimzon', isSelected);
      btn.classList.toggle('bg-crimzon/20', isSelected);
      btn.classList.toggle('text-white', isSelected);
      btn.classList.toggle('border-white/10', !isSelected);
      btn.classList.toggle('text-white/75', !isSelected);
    });
  },

  openModal() {
    const modal = document.getElementById('btdtLangModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      const input = document.getElementById('btdtLangSearch');
      if (input) {
        input.value = '';
        input.focus();
        this.filterLanguages('');
      }
    }
  },

  closeModal() {
    const modal = document.getElementById('btdtLangModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  },

  dismissPrompt() {
    localStorage.setItem('btdt_lang_prompt_dismissed', '1');
    const promptEl = document.getElementById('btdtLangFloatingPrompt');
    if (promptEl) {
      promptEl.style.opacity = '0';
      promptEl.style.transform = 'translateY(10px)';
      setTimeout(() => promptEl.classList.add('hidden'), 250);
    }
  },

  renderLanguageList() {
    const allGrid = document.getElementById('btdtAllLangGrid');
    if (allGrid) {
      allGrid.innerHTML = BTDT_ALL_LANGUAGES.map((l) => `
        <button onclick="BTDT_I18N.setLanguage('${l.code}')" data-lang-choice="${l.code}" data-lang-search="${l.name.toLowerCase()} ${l.native.toLowerCase()} ${l.code.toLowerCase()}" class="notranslate p-2.5 rounded-[10px] border border-white/10 hover:border-crimzon/60 bg-white/[0.03] hover:bg-white/[0.08] transition-all flex items-center justify-between text-left group">
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="text-xl shrink-0">${l.flag}</span>
            <div class="min-w-0">
              <p class="text-[13px] text-white font-medium truncate leading-tight">${l.native}</p>
              <p class="text-[10.5px] text-white/50 truncate font-mono mt-0.5">${l.name}</p>
            </div>
          </div>
          <span class="font-mono text-[10px] text-white/40 uppercase group-hover:text-crimzon shrink-0">${l.code}</span>
        </button>
      `).join('');
    }
    this.updateLanguageUI();
  },

  filterLanguages(query) {
    const q = (query || '').trim().toLowerCase();
    const allItems = document.querySelectorAll('#btdtAllLangGrid [data-lang-search]');
    let visibleCount = 0;
    allItems.forEach((item) => {
      const text = item.getAttribute('data-lang-search') || '';
      const matches = !q || text.includes(q);
      item.style.display = matches ? 'flex' : 'none';
      if (matches) visibleCount++;
    });

    const noRes = document.getElementById('btdtLangNoResults');
    if (noRes) {
      noRes.classList.toggle('hidden', visibleCount > 0);
    }
  }
};

window.BTDT_I18N = BTDT_I18N;
window.BTDT_ALL_LANGUAGES = BTDT_ALL_LANGUAGES;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => BTDT_I18N.init());
  } else {
    BTDT_I18N.init();
  }
}
