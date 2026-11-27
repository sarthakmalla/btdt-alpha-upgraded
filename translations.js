/**
 * BTDT (Been There, Done That) — Multi-Language Translation System
 * Featuring human-grade, native Ukrainian (Українська) localization
 * and full multi-language support (EN, UK, DE, ES, FR, PL, HI, IT).
 */

const BTDT_LANGUAGES = [
  { code: "uk", name: "Українська", flag: "🇺🇦", label: "Українська" },
  { code: "en", name: "English", flag: "🇬🇧", label: "English" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", label: "Deutsch" },
  { code: "es", name: "Español", flag: "🇪🇸", label: "Español" },
  { code: "fr", name: "Français", flag: "🇫🇷", label: "Français" },
  { code: "pl", name: "Polski", flag: "🇵🇱", label: "Polski" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳", label: "हिन्दी" },
  { code: "it", name: "Italiano", flag: "🇮🇹", label: "Italiano" }
];

const BTDT_TRANSLATIONS = {
  en: {
    // Navigation
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

    // Hero Section
    "hero.kicker": "Introducing BTDT",
    "hero.h1": "The peer network that’s been there before you",
    "hero.sub": "Never land alone in a new country. Get honest written answers from verified seniors who share your home country, language, and target university.",
    "hero.btnMatch": "Find Your Match",
    "hero.btnDemo": "Interactive App Demo",
    "hero.btnChecklist": "Free Arrival Checklist",

    // 3-Step Promise Strip
    "hero.strip1.tag": "01 · SHARED ROOTS",
    "hero.strip1.text": "Ask freely in your language with a senior from home",
    "hero.strip2.tag": "02 · VERIFIED PEERS",
    "hero.strip2.text": "Verified by Student ID or Enrollment Documents",
    "hero.strip3.tag": "03 · CONCRETE ANSWERS",
    "hero.strip3.text": "Personal arrival checklists and real people helping you step-by-step",

    // Section 2: Marquee
    "marquee.title": "Trusted by incoming students across 30 global universities",

    // Section 3: Benchmark Stats
    "stats.desc": "Fixed €20–€120 sessions instead of €2,000+ middleman retainers — verified answers before you fly.",
    "stats.num1": "28+",
    "stats.label1": "Verified Peers Online",
    "stats.num2": "< 2h",
    "stats.label2": "Average Reply Window",
    "stats.num3": "€20",
    "stats.label3": "Transparent Starting Rate",

    // Section 4: Problem Statement
    "problem.kicker": "THE REALITY GAP",
    "problem.h2": "Why video calls and general advice fail incoming students",
    "problem.sub": "Education consultants sell broad generalizations. Seniors who arrived six months ago know the bus lines, the housing pitfalls, and the exact paperwork.",
    "problem.card1.title": "Video calls leave no receipt",
    "problem.card1.desc": "When someone rattles off 20 German municipal terms on Zoom, you remember three. BTDT delivers verified written answers with document scans.",
    "problem.card2.title": "Agencies charge €2,000+ retainers",
    "problem.card2.desc": "Commercial middlemen bundle services you don't need. On BTDT, pay fixed €20–€120 rates directly to a student peer for what actually matters.",
    "problem.card3.title": "Generic advice ignores your background",
    "problem.card3.desc": "A student from India or Ukraine faces entirely different visa, blocked account, and transcript verification steps than a domestic applicant.",

    // Section 5: The 3-Step Journey
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

    // Interactive Demo
    "demo.kicker": "INTERACTIVE HARDWARE DEMO",
    "demo.h2": "Experience the iOS Runtime Demo",
    "demo.sub": "Interact with a simulated iPhone 18 Pro Max running the BTDT iOS experience: explore student chat, inspect PDF audits, and switch to mentor mode.",

    // Matcher
    "matcher.kicker": "PEER ROUTE FINDER",
    "matcher.h2": "Find a senior who shares your exact route",
    "matcher.fromLabel": "I am traveling from:",
    "matcher.toLabel": "My target university:",
    "matcher.btnFind": "Search Enrolled Peers",

    // Pricing
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

    // Founder Story
    "story.kicker": "FOUNDER'S NOTE",
    "story.h2": "I landed in Munich with two heavy suitcases and zero idea how to register my address.",
    "story.p1": "When I arrived as an international student, I had paid a consultant back home nearly $2,000. Yet when my flight touched down, none of their general advice told me how the S-Bahn ticketing worked, why my apartment lease was missing a vital Wohnungsgeberbestätigung, or how to get an appointment at the Kreisverwaltungsreferat.",
    "story.p2": "The person who actually saved me was a senior from my home country whom I happened to meet in the university cafeteria. In 20 minutes, they showed me three things that saved me two months of stress.",
    "story.p3": "BTDT was built so that every international student has that senior waiting for them before they ever pack their bags.",
    "story.btn": "Read Full Story",

    // Directory
    "dir.title": "Enrolled Peers Directory",
    "dir.sub": "Browse all 30 enrolled global campuses and connect with verified senior mentors.",
    "dir.filterAll": "All Campuses",
    "dir.reset": "Reset Filters",
    "dir.loadMore": "Load More Peers",

    // FAQ
    "faq.kicker": "COMMON QUESTIONS",
    "faq.h2": "Everything you need to know about BTDT",
    "faq.q1": "Does BTDT provide visas or act as an immigration agency?",
    "faq.a1": "No. BTDT is strictly a peer-to-peer student guidance network. We do not provide visas or legal counsel. We connect you with verified enrolled students who share practical tips from their own arrival experience.",
    "faq.q2": "Why is BTDT text-first instead of video calls?",
    "faq.a2": "Video calls leave no record. When moving abroad, you need exact names, addresses, links, and PDF reviews that you can check offline at border control or the city registration office.",
    "faq.q3": "How are mentors verified?",
    "faq.a3": "Every mentor must upload an official student ID card or university enrollment certificate and verify their campus institutional email before accepting students.",
    "faq.q4": "What does the +€40 Airport Meet & Greet include?",
    "faq.a4": "A verified senior meets you at the arrivals gate, assists with luggage, helps activate your local SIM and transit ticket, and guides you directly to your accommodation.",

    // Footer
    "footer.rights": "© 2026 BTDT (Been There, Done That). All rights reserved.",
    "footer.tagline": "The peer network that’s been there before you.",
    "footer.privacy": "Privacy & GDPR",

    // Corner Language Prompt
    "lang.promptTitle": "Prefer another language?",
    "lang.promptDesc": "Switch to your native language for clear, authentic guidance.",
    "lang.switchUk": "Читати українською",
    "lang.switchEn": "Switch to English",
    "lang.badge": "Language"
  },

  uk: {
    // Navigation
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

    // Hero Section
    "hero.kicker": "Знайомтеся з BTDT",
    "hero.h1": "Мережа студентів-однодумців, які вже пройшли цей шлях до тебе",
    "hero.sub": "Ніколи не прилітай у нову країну наодинці. Отримуй чесні письмові відповіді від перевірених старшокурсників, які мають спільну з тобою країну, мову та обраний університет.",
    "hero.btnMatch": "Знайти свого ментора",
    "hero.btnDemo": "Інтерактивне демо додатку",
    "hero.btnChecklist": "Безкоштовний чекліст прибуття",

    // 3-Step Promise Strip
    "hero.strip1.tag": "01 · СПІЛЬНЕ КОРІННЯ",
    "hero.strip1.text": "Спілкуйся вільно рідною мовою зі старшокурсником з твоєї країни",
    "hero.strip2.tag": "02 · ПЕРЕВІРЕНІ СТУДЕНТИ",
    "hero.strip2.text": "Верифікація за студентським квитком або документами про зарахування",
    "hero.strip3.tag": "03 · ЧІТКІ ВІДПОВІДІ",
    "hero.strip3.text": "Індивідуальні чеклісти прибуття та реальна покрокова підтримка",

    // Section 2: Marquee
    "marquee.title": "Нам довіряють майбутні студенти 30 провідних університетів світу",

    // Section 3: Benchmark Stats
    "stats.desc": "Фіксовані консультації за €20–€120 замість посередницьких комісій у €2 000+ — перевірені відповіді ще до твого вильоту.",
    "stats.num1": "28+",
    "stats.label1": "Перевірених менторів онлайн",
    "stats.num2": "< 2 год",
    "stats.label2": "Середній час відповіді",
    "stats.num3": "€20",
    "stats.label3": "Прозора початкова вартість",

    // Section 4: Problem Statement
    "problem.kicker": "РЕАЛЬНІСТЬ ПРОТИ ОБІЦЯНОК",
    "problem.h2": "Чому відеодзвінки та загальні поради не працюють для нових студентів",
    "problem.sub": "Освітні агентства продають загальні шаблони за шалені гроші. Старшокурсники, які приїхали кілька місяців тому, знають реальні маршрути, підводні камені житла та кожен крок оформлення документів.",
    "problem.card1.title": "Відеодзвінки не залишають чітких записів",
    "problem.card1.desc": "Коли хтось швидко розповідає про 20 німецьких чи польських інстанцій через Zoom, ти запам'ятовуєш лише дві. BTDT надає структуровані письмові інструкції, до яких можна повертатися будь-коли.",
    "problem.card2.title": "Агентства вимагають від €2 000+ комісії",
    "problem.card2.desc": "Комерційні посередники нав'язують послуги, які тобі не потрібні. У BTDT ти платиш фіксовані €20–€120 напряму реальному студенту за те, що дійсно має значення.",
    "problem.card3.title": "Загальні поради ігнорують твоє походження",
    "problem.card3.desc": "Студент з України чи іншої країни стикається із зовсім іншими вимогами щодо візи, блокованого рахунку, апостилів та визнання дипломів, ніж місцевий житель.",

    // Section 5: The 3-Step Journey
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

    // Interactive Demo
    "demo.kicker": "ІНТЕРАКТИВНЕ ДЕМО ДЛЯ IPHONE",
    "demo.h2": "Спробуй реальний інтерфейс додатку iOS",
    "demo.sub": "Повзаємодій з інтерактивним iPhone 18 Pro Max: випробуй чат для студентів, переглянь прикріплені PDF-файли та перемкнися на екран ментора.",

    // Matcher
    "matcher.kicker": "ПОШУК СТУДЕНТСЬКОГО МАРШРУТУ",
    "matcher.h2": "Знайди ментора, який пройшов саме твій маршрут",
    "matcher.fromLabel": "Країна, звідки я вирушаю:",
    "matcher.toLabel": "Мій обраний університет:",
    "matcher.btnFind": "Шукати студентів у мережі",

    // Pricing
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
    "pricing.t2.desc": "Детальний аналіз черги на гуртожиток, термінів подачі документів та лайфхаків реєстрації на курси.",
    "pricing.t3.name": "Детальна перевірка документів та підготовка",
    "pricing.t3.price": "€100",
    "pricing.t3.duration": "60–70 хв повної перевірки документів",
    "pricing.t3.desc": "Комплексна перевірка пакета документів, договору оренди житла та обов'язкового чекліста реєстрації в мерії.",
    "pricing.addon.title": "Зустріч в аеропорту після прибуття (+€40)",
    "pricing.addon.desc": "Твій ментор особисто зустріне тебе в зоні прильоту, допоможе з валізами, оформить першу місцеву SIM-карту і проїзний та проведе до житла.",

    // Founder Story
    "story.kicker": "СЛОВО ЗАСНОВНИКА",
    "story.h2": "Я прилетів у Мюнхен із двома важкими валізами й не мав жодного уявлення, як оформити прописку чи проїзний.",
    "story.p1": "Коли я вперше вирушив на навчання за кордон, я заплатив консультанту вдома майже $2 000. Але коли мій літак приземлився, жодна з їхніх загальних порад не пояснила, як купувати квитки на S-Bahn, чому в договорі оренди не вистачає обов'язкової довідки про проживання (Wohnungsgeberbestätigung) та як взагалі потрапити на прийом до місцевої мерії.",
    "story.p2": "Людиною, яка дійсно мене врятувала, виявився старшокурсник з моєї рідної країни, якого я випадково зустрів в університетській їдальні. За 20 хвилин він показав мені три прості речі, які заощадили мені два місяці стресу і сотні євро штрафів.",
    "story.p3": "BTDT створено для того, щоб кожен іноземний студент мав поруч такого надійного старшокурсника ще до того, як почне пакувати валізи.",
    "story.btn": "Читати повну історію",

    // Directory
    "dir.title": "Каталог верифікованих студентів",
    "dir.sub": "Переглядай 30 глобальних кампусів та зв'язуйся з перевіреними менторами-старшокурсниками.",
    "dir.filterAll": "Усі університети",
    "dir.reset": "Скинути фільтри",
    "dir.loadMore": "Показати більше студентів",

    // FAQ
    "faq.kicker": "ЧАСТІ ЗАПИТАННЯ",
    "faq.h2": "Усе, що варто знати про роботу BTDT",
    "faq.q1": "Чи відкриває BTDT візи та чи є візовим агентством?",
    "faq.a1": "Ні. BTDT — це суто студентська мережа прямих консультацій між рівними. Ми не оформлюємо візи та не надаємо юридичних послуг. Ми з'єднуємо тебе з перевіреними студентами, які діляться реальним власним досвідом переїзду та навчання.",
    "faq.q2": "Чому BTDT працює в текстовому форматі, а не через відеодзвінки?",
    "faq.a2": "Відеодзвінки швидко забуваються. Під час переїзду за кордон тобі потрібні точні назви інстанцій, адреси, посилання та перевірені PDF-документи, до яких можна звернутися офлайн на митниці чи в міській мерії.",
    "faq.q3": "Як перевіряються ментори?",
    "faq.a3": "Кожен ментор зобов'язаний завантажити дійсний студентський квиток або офіційну довідку про зарахування та підтвердити корпоративну пошту свого університету перед тим, як приймати звернення.",
    "faq.q4": "Що входить у послугу «Зустріч в аеропорту» за +€40?",
    "faq.a4": "Перевірений старшокурсник зустрічає тебе біля виходу з терміналу, допомагає з багажем, супроводжує під час купівлі місцевої SIM-карти та проїзного квитка, і допомагає дістатися гуртожитку чи квартири.",

    // Footer
    "footer.rights": "© 2026 BTDT (Been There, Done That). Усі права захищено.",
    "footer.tagline": "Мережа студентів-однодумців, які вже пройшли цей шлях до тебе.",
    "footer.privacy": "Конфіденційність та GDPR",

    // Corner Language Prompt
    "lang.promptTitle": "Бажаєте переглянути сайт українською?",
    "lang.promptDesc": "Оберіть рідну мову для точного розуміння всіх умов та порад.",
    "lang.switchUk": "Читати українською",
    "lang.switchEn": "Switch to English",
    "lang.badge": "Мова сайту"
  },

  de: {
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

  es: {
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

  fr: {
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

  pl: {
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

  hi: {
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

  it: {
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

const BTDT_ALL_LANGUAGES = [
  // Top Student & Regional Languages
  { code: 'uk', name: 'Ukrainian', native: 'Українська', flag: '🇺🇦', popular: true },
  { code: 'en', name: 'English', native: 'English (Original)', flag: '🇬🇧', popular: true },
  { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪', popular: true },
  { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸', popular: true },
  { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷', popular: true },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', popular: true },
  { code: 'pl', name: 'Polish', native: 'Polski', flag: '🇵🇱', popular: true },
  { code: 'it', name: 'Italian', native: 'Italiano', flag: '🇮🇹', popular: true },
  { code: 'zh-CN', name: 'Chinese (Simplified)', native: '简体中文', flag: '🇨🇳', popular: true },
  { code: 'zh-TW', name: 'Chinese (Traditional)', native: '繁體中文', flag: '🇹🇼', popular: true },
  { code: 'ja', name: 'Japanese', native: '日本語', flag: '🇯🇵', popular: true },
  { code: 'ko', name: 'Korean', native: '한국어', flag: '🇰🇷', popular: true },
  { code: 'pt', name: 'Portuguese', native: 'Português', flag: '🇧🇷', popular: true },
  { code: 'tr', name: 'Turkish', native: 'Türkçe', flag: '🇹🇷', popular: true },
  { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦', popular: true },
  { code: 'nl', name: 'Dutch', native: 'Nederlands', flag: '🇳🇱', popular: true },
  { code: 'vi', name: 'Vietnamese', native: 'Tiếng Việt', flag: '🇻🇳', popular: true },
  { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia', flag: '🇮🇩', popular: true },
  { code: 'ru', name: 'Russian', native: 'Русский', flag: '🌐', popular: false },
  { code: 'sv', name: 'Swedish', native: 'Svenska', flag: '🇸🇪', popular: false },
  { code: 'el', name: 'Greek', native: 'Ελληνικά', flag: '🇬🇷', popular: false },
  { code: 'he', name: 'Hebrew', native: 'עברית', flag: '🇮🇱', popular: false },
  { code: 'th', name: 'Thai', native: 'ไทย', flag: '🇹🇭', popular: false },
  { code: 'ro', name: 'Romanian', native: 'Română', flag: '🇷🇴', popular: false },
  { code: 'cs', name: 'Czech', native: 'Čeština', flag: '🇨🇿', popular: false },
  { code: 'hu', name: 'Hungarian', native: 'Magyar', flag: '🇭🇺', popular: false },
  { code: 'da', name: 'Danish', native: 'Dansk', flag: '🇩🇰', popular: false },
  { code: 'fi', name: 'Finnish', native: 'Suomi', flag: '🇫🇮', popular: false },
  { code: 'no', name: 'Norwegian', native: 'Norsk', flag: '🇳🇴', popular: false },
  { code: 'sk', name: 'Slovak', native: 'Slovenčina', flag: '🇸🇰', popular: false },
  { code: 'bg', name: 'Bulgarian', native: 'Български', flag: '🇧🇬', popular: false },
  { code: 'hr', name: 'Croatian', native: 'Hrvatski', flag: '🇭🇷', popular: false },
  { code: 'sr', name: 'Serbian', native: 'Српски', flag: '🇷🇸', popular: false },
  { code: 'ms', name: 'Malay', native: 'Bahasa Melayu', flag: '🇲🇾', popular: false },
  { code: 'tl', name: 'Tagalog / Filipino', native: 'Tagalog', flag: '🇵🇭', popular: false },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', flag: '🇧🇩', popular: false },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳', popular: false },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳', popular: false },
  { code: 'ur', name: 'Urdu', native: 'اردو', flag: '🇵🇰', popular: false },
  { code: 'fa', name: 'Persian', native: 'فارسی', flag: '🇮🇷', popular: false },
  { code: 'ca', name: 'Catalan', native: 'Català', flag: '🇪🇸', popular: false },
  { code: 'lt', name: 'Lithuanian', native: 'Lietuvių', flag: '🇱🇹', popular: false },
  { code: 'lv', name: 'Latvian', native: 'Latviešu', flag: '🇱🇻', popular: false },
  { code: 'et', name: 'Estonian', native: 'Eesti', flag: '🇪🇪', popular: false },
  { code: 'sl', name: 'Slovenian', native: 'Slovenščina', flag: '🇸🇮', popular: false },
  { code: 'sw', name: 'Swahili', native: 'Kiswahili', flag: '🇰🇪', popular: false },
  { code: 'af', name: 'Afrikaans', native: 'Afrikaans', flag: '🇿🇦', popular: false },
  { code: 'sq', name: 'Albanian', native: 'Shqip', flag: '🇦🇱', popular: false },
  { code: 'am', name: 'Amharic', native: 'አማርኛ', flag: '🇪🇹', popular: false },
  { code: 'az', name: 'Azerbaijani', native: 'Azərbaycan', flag: '🇦🇿', popular: false },
  { code: 'eu', name: 'Basque', native: 'Euskara', flag: '🇪🇸', popular: false },
  { code: 'be', name: 'Belarusian', native: 'Беларуская', flag: '🇧🇾', popular: false },
  { code: 'bs', name: 'Bosnian', native: 'Bosanski', flag: '🇧🇦', popular: false },
  { code: 'my', name: 'Burmese', native: 'မြန်မာ', flag: '🇲🇲', popular: false },
  { code: 'ka', name: 'Georgian', native: 'ქართული', flag: '🇬🇪', popular: false },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳', popular: false },
  { code: 'is', name: 'Icelandic', native: 'Íslenska', flag: '🇮🇸', popular: false },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳', popular: false },
  { code: 'kk', name: 'Kazakh', native: 'Қазақ', flag: '🇰🇿', popular: false },
  { code: 'km', name: 'Khmer', native: 'ខ្មែរ', flag: '🇰🇭', popular: false },
  { code: 'lo', name: 'Lao', native: 'ລາວ', flag: '🇱🇦', popular: false },
  { code: 'mk', name: 'Macedonian', native: 'Македонски', flag: '🇲🇰', popular: false },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳', popular: false },
  { code: 'mr', name: 'Marathi', native: 'मराठी', flag: '🇮🇳', popular: false },
  { code: 'mn', name: 'Mongolian', native: 'Монгол', flag: '🇲🇳', popular: false },
  { code: 'ne', name: 'Nepali', native: 'नेपाली', flag: '🇳🇵', popular: false },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳', popular: false },
  { code: 'si', name: 'Sinhala', native: 'සිංහල', flag: '🇱🇰', popular: false },
  { code: 'uz', name: 'Uzbek', native: 'Oʻzbek', flag: '🇺🇿', popular: false }
];

window.BTDT_LANGUAGES = BTDT_LANGUAGES;
window.BTDT_ALL_LANGUAGES = BTDT_ALL_LANGUAGES;

const BTDT_I18N = {
  currentLang: 'en',

  init() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const savedLang = localStorage.getItem('btdt_user_lang');

    // Auto-detect Ukrainian or user browser language
    const navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    let detectedLang = 'en';
    if (navLang.startsWith('uk')) detectedLang = 'uk';
    else if (navLang.startsWith('de')) detectedLang = 'de';
    else if (navLang.startsWith('es')) detectedLang = 'es';
    else if (navLang.startsWith('fr')) detectedLang = 'fr';
    else if (navLang.startsWith('pl')) detectedLang = 'pl';
    else if (navLang.startsWith('hi')) detectedLang = 'hi';
    else if (navLang.startsWith('it')) detectedLang = 'it';
    else {
      const matched = BTDT_ALL_LANGUAGES.find(l => navLang.startsWith(l.code.toLowerCase()));
      if (matched) detectedLang = matched.code;
    }

    const initialLang = urlLang || savedLang || detectedLang;
    this.setLanguage(initialLang, false);

    // Show floating corner callout unless previously dismissed
    if (!localStorage.getItem('btdt_lang_prompt_dismissed')) {
      setTimeout(() => {
        const promptEl = document.getElementById('btdtLangFloatingPrompt');
        if (promptEl) promptEl.classList.remove('hidden');
      }, 1400);
    }

    this.renderLanguageList();
  },

  t(key) {
    const dict = BTDT_TRANSLATIONS[this.currentLang] || BTDT_TRANSLATIONS.en;
    if (dict && dict[key]) return dict[key];
    const fallback = BTDT_TRANSLATIONS.en;
    return fallback[key] || key;
  },

  setLanguage(langCode, save = true) {
    if (!langCode) langCode = 'en';
    this.currentLang = langCode;
    if (save) {
      localStorage.setItem('btdt_user_lang', langCode);
    }
    document.documentElement.lang = langCode;

    // 1. Apply native curated dictionary if available
    if (BTDT_TRANSLATIONS[langCode]) {
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const trans = this.t(key);
        if (trans) el.textContent = trans;
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        const trans = this.t(key);
        if (trans) el.placeholder = trans;
      });

      const heroH1 = document.getElementById('heroH1');
      if (heroH1) {
        const headlineText = this.t('hero.h1');
        if (window.animateWordsIn) {
          window.animateWordsIn(heroH1, headlineText, 95);
        } else {
          heroH1.textContent = headlineText;
        }
      }
    } else {
      // If language has no curated dictionary, restore English base strings so Google Translate can translate from English cleanly
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const trans = BTDT_TRANSLATIONS.en[key];
        if (trans) el.textContent = trans;
      });
      const heroH1 = document.getElementById('heroH1');
      if (heroH1) heroH1.textContent = BTDT_TRANSLATIONS.en['hero.h1'];
    }

    // 2. Set Google Website Translate Cookie (External Translation Service)
    if (langCode === 'en') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + location.hostname + ';';
    } else {
      document.cookie = 'googtrans=/en/' + langCode + '; path=/;';
      document.cookie = 'googtrans=/en/' + langCode + '; path=/; domain=' + location.hostname + ';';
      if (location.hostname.includes('.')) {
        const parts = location.hostname.split('.');
        if (parts.length >= 2) {
          const domain = '.' + parts.slice(-2).join('.');
          document.cookie = 'googtrans=/en/' + langCode + '; path=/; domain=' + domain + ';';
        }
      }
    }

    // 3. Trigger Google Translate dropdown element if present
    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
      combo.value = langCode;
      combo.dispatchEvent(new Event('change'));
    }

    // 4. Update UI labels and flags
    this.updateLanguageUI();
    this.closeModal();

    // 5. Toast feedback
    if (save && window.showToast) {
      const match = BTDT_ALL_LANGUAGES.find(l => l.code === langCode);
      const name = match ? match.native : langCode.toUpperCase();
      window.showToast('Language updated: ' + name);
    }
  },

  updateLanguageUI() {
    const currentObj = BTDT_ALL_LANGUAGES.find((l) => l.code === this.currentLang) ||
                       BTDT_LANGUAGES.find((l) => l.code === this.currentLang) ||
                       { code: this.currentLang, name: this.currentLang.toUpperCase(), native: this.currentLang.toUpperCase(), flag: '🌐' };

    // Floating corner pill label
    const pillLabel = document.getElementById('btdtCurrentLangLabel');
    if (pillLabel) {
      pillLabel.innerHTML = `${currentObj.flag} ${currentObj.native || currentObj.name}`;
    }

    // Header nav button
    const navCode = document.getElementById('navLangName');
    const navFlag = document.getElementById('navLangFlag');
    if (navCode) navCode.textContent = currentObj.code.toUpperCase();
    if (navFlag) navFlag.textContent = currentObj.flag;

    // Highlight inside modal
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
    const popGrid = document.getElementById('btdtPopularLangGrid');
    const allGrid = document.getElementById('btdtAllLangGrid');

    if (popGrid) {
      const popLangs = BTDT_ALL_LANGUAGES.filter(l => l.popular);
      popGrid.innerHTML = popLangs.map(l => `
        <button onclick="BTDT_I18N.setLanguage('${l.code}')" data-lang-choice="${l.code}" class="notranslate p-2.5 rounded-[10px] border border-white/10 hover:border-crimzon/60 bg-white/[0.03] hover:bg-white/[0.08] transition-all flex items-center justify-between text-left group">
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="text-lg shrink-0">${l.flag}</span>
            <div class="min-w-0">
              <p class="text-[13px] text-white font-medium truncate leading-tight">${l.native}</p>
              <p class="text-[10.5px] text-white/50 truncate font-mono mt-0.5">${l.name}</p>
            </div>
          </div>
          <span class="font-mono text-[10px] text-white/40 uppercase group-hover:text-crimzon shrink-0">${l.code}</span>
        </button>
      `).join('');
    }

    if (allGrid) {
      allGrid.innerHTML = BTDT_ALL_LANGUAGES.map(l => `
        <button onclick="BTDT_I18N.setLanguage('${l.code}')" data-lang-choice="${l.code}" data-lang-search="${l.name.toLowerCase()} ${l.native.toLowerCase()} ${l.code.toLowerCase()}" class="notranslate p-2 rounded-[8px] border border-white/10 hover:border-crimzon/60 bg-white/[0.02] hover:bg-white/[0.07] transition-all flex items-center justify-between text-left group">
          <div class="flex items-center gap-2 min-w-0">
            <span class="text-base shrink-0">${l.flag}</span>
            <span class="text-[12px] text-white/80 group-hover:text-white truncate font-medium">${l.native}</span>
          </div>
          <span class="font-mono text-[9.5px] text-white/40 uppercase shrink-0">${l.code}</span>
        </button>
      `).join('');
    }

    this.updateLanguageUI();
  },

  filterLanguages(query) {
    const q = (query || '').trim().toLowerCase();
    const popSec = document.getElementById('btdtPopularSection');
    if (popSec) {
      popSec.style.display = q ? 'none' : 'block';
    }

    const allItems = document.querySelectorAll('#btdtAllLangGrid [data-lang-search]');
    let visibleCount = 0;
    allItems.forEach(item => {
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

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => BTDT_I18N.init());
  } else {
    BTDT_I18N.init();
  }
}
