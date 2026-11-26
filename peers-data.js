// BTDT Seed Dataset: 30 Universities x 14 Home Countries x 2 Peers = 840+ Verified Peers
window.BTDT_SEED = (() => {
  const UNI_LOGO_FILES = {
    tum: { src: "./media/unis/tum.svg", wide: true },
    mit: { src: "./media/unis/mit.svg", wide: true },
    stanford: { src: "./media/unis/stanford.svg", wide: false },
    ethz: { src: "./media/unis/ethz.svg", wide: true },
    epfl: { src: "./media/unis/epfl.svg", wide: true },
    columbia: { src: "./media/unis/columbia.svg", wide: false },
    berkeley: { src: "./media/unis/berkeley.svg", wide: false },
    princeton: { src: "./media/unis/princeton.svg", wide: true },
    yale: { src: "./media/unis/yale.svg", wide: false },
    lse: { src: "./media/unis/lse.svg", wide: false },
    lmu: { src: "./media/unis/lmu.svg", wide: true },
    ubc: { src: "./media/unis/ubc.svg", wide: false },
    kuleuven: { src: "./media/unis/kuleuven.svg", wide: true },
    uwr: { src: "./media/unis/uwr.svg", wide: true },
    uw: { src: "./media/unis/uw.svg", wide: false },
    unibo: { src: "./media/unis/unibo.svg", wide: false },
    tcd: { src: "./media/unis/tcd.svg", wide: false },
    uoft: { src: "./media/unis/uoft.svg", wide: true },
    manchester: { src: "./media/unis/manchester.svg", wide: false },
    rwth: { src: "./media/unis/rwth.svg", wide: true },
    uva: { src: "./media/unis/uva.svg", wide: false },
    asu: { src: "./media/unis/asu.svg", wide: true },
    oxford: { src: "./media/unis/oxford.svg", wide: false },
    cambridge: { src: "./media/unis/cambridge.svg", wide: false },
    imperial: { src: "./media/unis/imperial.svg", wide: false },
    edinburgh: { src: "./media/unis/edinburgh.svg", wide: false },
    delft: { src: "./media/unis/delft.svg", wide: false },
    mcgill: { src: "./media/unis/mcgill.svg", wide: false },
    melbourne: { src: "./media/unis/melbourne.svg", wide: false },
    harvard: { src: "./media/unis/harvard.svg", wide: false }
  };

  function getUniLogo(uni, sizeClass = "w-5 h-5") {
    const info = UNI_LOGO_FILES[uni.id];
    if (info) {
      let boxSize = sizeClass;
      if (info.wide) {
        if (sizeClass.includes("w-10") || sizeClass.includes("h-10") || sizeClass.includes("w-9") || sizeClass.includes("h-9")) {
          boxSize = "h-10 w-auto max-w-[116px]";
        } else if (sizeClass.includes("w-6") || sizeClass.includes("h-6")) {
          boxSize = "h-6 w-auto max-w-[82px]";
        } else if (sizeClass.includes("w-[18px]") || sizeClass.includes("w-[17px]") || sizeClass.includes("w-4")) {
          boxSize = "h-[18px] w-auto max-w-[58px]";
        } else {
          boxSize = "h-5 w-auto max-w-[68px]";
        }
      }
      const label = (uni.brand || uni.shortName || "University").replace(/"/g, "&quot;");
      return `<img src="${info.src}" alt="${label} logo" class="${boxSize} object-contain shrink-0 drop-shadow-[0_2px_8px_rgba(255,255,255,0.22)]" />`;
    }
    const mono = (uni.shortName || "UN").split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    return `<svg class="${sizeClass} shrink-0 text-crimzon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><text x="12" y="14.5" text-anchor="middle" fill="currentColor" stroke="none" font-size="7" font-family="JetBrains Mono, monospace">${mono}</text></svg>`;
  }

  const UNI_LOGOS = UNI_LOGO_FILES;

  const AVATAR_POOL = [
    "./media/avatar-1.jpg", "./media/avatar-2.jpg", "./media/avatar-3.jpg",
    "./media/avatar-4.jpg", "./media/avatar-5.jpg", "./media/avatar-6.jpg"
  ];

  const homeCountries = [
    { name: "India", iso: "IN", cities: ["Jammu", "Delhi", "Pune", "Bengaluru", "Hyderabad"], languages: ["Hindi", "Punjabi", "Marathi", "Tamil"], docs: ["Academic Transcript Formatting", "Pre-Departure Do's & Don'ts", "Campus Cost & Dorm Reality"], firstNames: ["Aarav", "Ananya", "Rohan", "Meera", "Kabir", "Priya"], lastNames: ["Sharma", "Nair", "Kulkarni", "Verma", "Reddy", "Singh"] },
    { name: "Nigeria", iso: "NG", cities: ["Lagos", "Abuja", "Port Harcourt", "Ibadan"], languages: ["Yoruba", "Igbo", "Hausa", "Pidgin"], docs: ["Document Prep Do's & Don'ts", "University Portal Steps", "Financial Proof Organization"], firstNames: ["Chidinma", "Tunde", "Amaka", "Babatunde", "Ngozi", "Emeka"], lastNames: ["Okafor", "Adebayo", "Nwosu", "Balogun", "Eze", "Okonkwo"] },
    { name: "Turkey", iso: "TR", cities: ["Istanbul", "Ankara", "Izmir", "Bursa"], languages: ["Turkish"], docs: ["Degree Attestation Guidance", "Housing & Deposit Safety", "Student Budgeting Prep"], firstNames: ["Emre", "Zeynep", "Kerem", "Elif", "Mert", "Selin"], lastNames: ["Yılmaz", "Kaya", "Demir", "Şahin", "Çelik", "Aydın"] },
    { name: "Brazil", iso: "BR", cities: ["São Paulo", "Rio de Janeiro", "Curitiba", "Belo Horizonte"], languages: ["Portuguese"], docs: ["Sworn Translation Guidance", "Pre-Departure Do's & Don'ts", "Arrival Checklist Prep"], firstNames: ["Camila", "Lucas", "Beatriz", "Rafael", "Mariana", "Gabriel"], lastNames: ["Silva", "Santos", "Oliveira", "Souza", "Pereira", "Costa"] },
    { name: "Vietnam", iso: "VN", cities: ["Ho Chi Minh City", "Hanoi", "Da Nang"], languages: ["Vietnamese"], docs: ["Academic Record Formatting", "Dorms vs. Private Rentals", "Week-1 Settling Guide"], firstNames: ["Minh", "Linh", "Huy", "Trang", "Tuấn", "Ngọc"], lastNames: ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Vũ"] },
    { name: "Colombia", iso: "CO", cities: ["Bogotá", "Medellín", "Cali"], languages: ["Spanish"], docs: ["Academic Legalization Tips", "Proof-of-Funds Organization", "Pre-Departure Do's & Don'ts"], firstNames: ["Santiago", "Valentina", "Mateo", "Sofía", "Sebastián", "Daniel"], lastNames: ["Rodríguez", "Gómez", "Martínez", "López", "García", "Ramírez"] },
    { name: "South Korea", iso: "KR", cities: ["Seoul", "Busan", "Incheon"], languages: ["Korean"], docs: ["Campus Onboarding Checklist", "Housing Contract Red Flags", "City Registration Prep"], firstNames: ["Jisoo", "Minjun", "Seoyeon", "Hyunwoo", "Yuna", "Jihoon"], lastNames: ["Kim", "Lee", "Park", "Choi", "Jung", "Kang"] },
    { name: "Sri Lanka", iso: "LK", cities: ["Colombo", "Kandy", "Galle"], languages: ["Sinhala", "Tamil"], docs: ["Academic Attestation Prep", "Sponsor Letter Organization", "Campus Cost Breakdown"], firstNames: ["Kavinda", "Tharushi", "Dinithi", "Shehan", "Nethmi", "Kasun"], lastNames: ["Perera", "Fernando", "Silva", "Bandara", "Jayawardena", "Wickramasinghe"] },
    { name: "Pakistan", iso: "PK", cities: ["Lahore", "Karachi", "Islamabad"], languages: ["Urdu", "Punjabi"], docs: ["Degree Attestation Do's & Don'ts", "Financial Readiness Packet", "Hostel vs. Flat Comparison"], firstNames: ["Hamza", "Ayesha", "Bilal", "Fatima", "Usman", "Zara"], lastNames: ["Khan", "Ahmed", "Malik", "Qureshi", "Raza", "Siddiqui"] },
    { name: "Bangladesh", iso: "BD", cities: ["Dhaka", "Chattogram", "Sylhet"], languages: ["Bengali"], docs: ["Academic Packet Checklist", "Student Banking Basics", "First-Week Survival Steps"], firstNames: ["Tanvir", "Nusrat", "Farhan", "Tasnim", "Rafiq", "Sadia"], lastNames: ["Rahman", "Islam", "Hossain", "Chowdhury", "Karim", "Hasan"] },
    { name: "Nepal", iso: "NP", cities: ["Kathmandu", "Pokhara", "Lalitpur"], languages: ["Nepali"], docs: ["Pre-Departure Checklist", "Academic Record Tips", "Arrival & Transit Setup"], firstNames: ["Aayush", "Srijana", "Bikash", "Prakriti", "Roshan", "Anjali"], lastNames: ["Shrestha", "Gurung", "Tamang", "Adhikari", "Thapa", "Karki"] },
    { name: "Indonesia", iso: "ID", cities: ["Jakarta", "Surabaya", "Bandung"], languages: ["Bahasa Indonesia"], docs: ["Scholarship & Self-Fund Prep", "Translation Do's & Don'ts", "Local Housing Strategy"], firstNames: ["Raka", "Putri", "Bagas", "Nadia", "Dimas", "Aulia"], lastNames: ["Pratama", "Santoso", "Wijaya", "Saputra", "Kusuma", "Hidayat"] },
    { name: "Mexico", iso: "MX", cities: ["Mexico City", "Guadalajara", "Monterrey"], languages: ["Spanish"], docs: ["Official Translation Checklist", "Course Registration Prep", "First-14-Day Settlement"], firstNames: ["Diego", "Sofía", "Alejandro", "Valeria", "Carlos", "Fernanda"], lastNames: ["Hernández", "García", "Martínez", "López", "González", "Pérez"] },
    { name: "Kenya", iso: "KE", cities: ["Nairobi", "Mombasa", "Kisumu"], languages: ["Swahili"], docs: ["Academic Document Organization", "Student Budget Reality", "Pre-Arrival Do's & Don'ts"], firstNames: ["Brian", "Wanjiku", "Kevin", "Amina", "Dennis", "Faith"], lastNames: ["Kamau", "Ochieng", "Mwangi", "Otieno", "Njoroge", "Wambui"] }
  ];

  const universities = [
    { id: "tum", name: "Technische Universität München", shortName: "TUM Munich", brand: "TUM", font: "'Plus Jakarta Sans', 'Helvetica Neue', sans-serif", city: "Munich", country: "Germany", iso: "DE", programs: ["MSc Informatics", "MSc Mechanical Engineering"], housing: "Campus residence hall waitlists vs. vetted private shared flats", first14: "Munich city registration guidance, student health cover, transit pass & local SIM" },
    { id: "oxford", name: "University of Oxford", shortName: "Oxford", brand: "Oxford", font: "'EB Garamond', Georgia, serif", city: "Oxford", country: "United Kingdom", iso: "UK", programs: ["MSc Computer Science", "BA PPE"], housing: "College accommodation guarantees vs. Jericho student flat shares", first14: "College matriculation prep, UK GP signup, railcard & student banking" },
    { id: "cambridge", name: "University of Cambridge", shortName: "Cambridge", brand: "Cambridge", font: "'EB Garamond', Georgia, serif", city: "Cambridge", country: "United Kingdom", iso: "UK", programs: ["MPhil Machine Learning", "MEng Engineering"], housing: "College hostels vs. vetted private town rentals", first14: "College onboarding, UK biometric pickup checklist, cycling pass & banking" },
    { id: "imperial", name: "Imperial College London", shortName: "Imperial London", brand: "Imperial", font: "'Inter', 'Helvetica Neue', sans-serif", city: "London", country: "United Kingdom", iso: "UK", programs: ["MSc Computing", "MSc Business Analytics"], housing: "Wood Lane halls vs. South Kensington & Earls Court shares", first14: "Oyster 18+ student discount setup, UK NHS registration & London banking" },
    { id: "edinburgh", name: "The University of Edinburgh", shortName: "Edinburgh", brand: "Edinburgh", font: "'Cormorant Garamond', Georgia, serif", city: "Edinburgh", country: "United Kingdom", iso: "UK", programs: ["MSc Artificial Intelligence", "MSc Finance"], housing: "Pollock Halls vs. Marchmont & Newington student flats", first14: "Scottish lease deposit rules, council tax exemption & Lothian bus card" },
    { id: "harvard", name: "Harvard University", shortName: "Harvard", brand: "Harvard", font: "'Crimson Pro', Georgia, serif", city: "Cambridge, MA", country: "United States", iso: "US", programs: ["SM Data Science", "MBA"], housing: "Graduate residence halls vs. Cambridge & Somerville apartments", first14: "International student check-in, US bank setup, MBTA transit pass & local SIM" },
    { id: "uoft", name: "University of Toronto", shortName: "U of T Toronto", brand: "U of T", font: "'EB Garamond', Georgia, serif", city: "Toronto", country: "Canada", iso: "CA", programs: ["MSc Applied Computing", "BCom Rotman Commerce"], housing: "Grad residence halls vs. transit-connected Toronto leases", first14: "Airport arrival pickup tips, social insurance number steps, Canadian bank & transit card" },
    { id: "mcgill", name: "McGill University", shortName: "McGill", brand: "McGill", font: "'Source Serif 4', Georgia, serif", city: "Montreal", country: "Canada", iso: "CA", programs: ["MSc Computer Science", "BCom Desautels"], housing: "Montreal student residences vs. Milton-Parc & Plateau leases", first14: "OPUS student transit card, Québec social registration & Canadian banking" },
    { id: "melbourne", name: "The University of Melbourne", shortName: "Melbourne", brand: "Melbourne", font: "'Libre Baskerville', Georgia, serif", city: "Melbourne", country: "Australia", iso: "AU", programs: ["Master of Information Technology", "Master of Commerce"], housing: "Residential colleges vs. Carlton & CBD student apartments", first14: "Myki concession card, Australian TFN/bank setup & campus orientation" },
    { id: "delft", name: "Technische Universiteit Delft", shortName: "TU Delft", brand: "TU Delft", font: "'Space Grotesk', sans-serif", city: "Delft", country: "Netherlands", iso: "NL", programs: ["MSc Aerospace Engineering", "MSc Computer Science"], housing: "DUWO student housing vs. Rotterdam/Delft private rooms", first14: "BRP municipal registration, OV-chipkaart bike/rail setup & Dutch banking" },
    { id: "uva", name: "Universiteit van Amsterdam", shortName: "UvA Amsterdam", brand: "UvA", font: "'EB Garamond', Georgia, serif", city: "Amsterdam", country: "Netherlands", iso: "NL", programs: ["MSc Communication Science", "MSc Data Science"], housing: "Student housing lottery tips & Amsterdam neighborhood studios", first14: "Municipal registration guidance, Dutch student banking & OV transit card" },
    { id: "rwth", name: "RWTH Aachen University", shortName: "RWTH Aachen", brand: "RWTH Aachen", font: "'Inter', sans-serif", city: "Aachen", country: "Germany", iso: "DE", programs: ["MSc Automotive Engineering", "MSc Computer Science"], housing: "Student residence towers vs. Pontviertel shared flats", first14: "Aachen city registration guidance, campus student card & semester transit ticket" },
    { id: "unibo", name: "Alma Mater Studiorum – Università di Bologna", shortName: "Università di Bologna", brand: "UniBo · 1088", font: "'Cinzel', 'EB Garamond', serif", city: "Bologna", country: "Italy", iso: "IT", programs: ["MSc Economics", "MA Digital Humanities"], housing: "San Donato student flats & avoiding broker deposit scams", first14: "Italian tax number guidance, regional student aid portal & bus pass" },
    { id: "tcd", name: "Trinity College Dublin, The University of Dublin", shortName: "Trinity Dublin", brand: "TCD", font: "'Libre Baskerville', Georgia, serif", city: "Dublin", country: "Ireland", iso: "IE", programs: ["MSc Computer Science", "MSc Business Analytics"], housing: "Campus halls vs. Dublin neighborhood shared rentals", first14: "Dublin local registration guidance, public service setup & Leap student card" },
    { id: "manchester", name: "The University of Manchester", shortName: "Manchester", brand: "Manchester · 1824", font: "'Source Serif 4', Georgia, serif", city: "Manchester", country: "United Kingdom", iso: "UK", programs: ["MSc Finance", "MSc Artificial Intelligence"], housing: "Fallowfield halls vs. Victoria Park student house shares", first14: "Digital enrollment check-in, local clinic GP signup & student council exemption" },
    { id: "uw", name: "Uniwersytet Warszawski", shortName: "UW Warsaw", brand: "UW", font: "'Cormorant Garamond', Georgia, serif", city: "Warsaw", country: "Poland", iso: "PL", programs: ["MA Quantitative Finance", "MSc Data Science"], housing: "Campus student halls & Mokotów private apartment rentals", first14: "Warsaw address registration tips, city transit pass & campus ID pickup" },
    { id: "uwr", name: "Uniwersytet Wrocławski", shortName: "UWr Wrocław", brand: "UWr", font: "'Libre Baskerville', Georgia, serif", city: "Wrocław", country: "Poland", iso: "PL", programs: ["MA Communication Management", "BSc Biotechnology"], housing: "University student dorms vs. central Wrocław shared apartments", first14: "Wrocław address registration guidance, local transit card & student bank setup" },
    { id: "asu", name: "Arizona State University", shortName: "ASU Tempe", brand: "ASU", font: "'Inter', 'Helvetica Neue', sans-serif", city: "Tempe, AZ", country: "United States", iso: "US", programs: ["MS Computer Science", "MS Business Analytics"], housing: "On-campus residence vs. Tempe apartment lease co-signer reality", first14: "International student check-in, campus work eligibility steps, US bank & transit pass" },
    { id: "mit", name: "Massachusetts Institute of Technology", shortName: "MIT", brand: "MIT", font: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif", city: "Cambridge, MA", country: "United States", iso: "US", programs: ["SM EECS", "MFin Finance"], housing: "Ashdown & Tang grad towers vs. Kendall Square apartment shares", first14: "International student check-in, MBTA student T pass, MIT ID & US bank setup" },
    { id: "stanford", name: "Stanford University", shortName: "Stanford", brand: "Stanford", font: "'Source Serif 4', 'Crimson Pro', Georgia, serif", city: "Stanford, CA", country: "United States", iso: "US", programs: ["MS Computer Science", "MBA"], housing: "Escondido Village grad studios vs. Palo Alto & Menlo Park shares", first14: "Caltrain Go Pass activation, campus bike registration, US bank & SSN steps" },
    { id: "columbia", name: "Columbia University", shortName: "Columbia NYC", brand: "Columbia", font: "'Cinzel', 'EB Garamond', Georgia, serif", city: "New York, NY", country: "United States", iso: "US", programs: ["MS Data Science", "MPA"], housing: "UAH Morningside apartments vs. Upper West Side lease guarantors", first14: "MTA Subway OMNY setup, NY bank account, guarantor services & CUID pickup" },
    { id: "berkeley", name: "University of California, Berkeley", shortName: "UC Berkeley", brand: "UC Berkeley", font: "'Cormorant Garamond', 'EB Garamond', Georgia, serif", city: "Berkeley, CA", country: "United States", iso: "US", programs: ["MIDS Data Science", "MEng EECS"], housing: "International House vs. Elmwood & Northside student rentals", first14: "AC Transit Class Pass, BART Clipper card, CalNet onboarding & banking" },
    { id: "princeton", name: "Princeton University", shortName: "Princeton", brand: "Princeton", font: "'EB Garamond', Georgia, serif", city: "Princeton, NJ", country: "United States", iso: "US", programs: ["MSE Computer Science", "MFin"], housing: "Graduate College & Lawrence Apartments vs. Nassau St rooms", first14: "NJ Transit campus shuttle setup, US tax forms & local Mercer County essentials" },
    { id: "yale", name: "Yale University", shortName: "Yale", brand: "Yale", font: "'Crimson Pro', Georgia, serif", city: "New Haven, CT", country: "United States", iso: "US", programs: ["MS Computer Science", "MEM"], housing: "Harkness & Whitehall grad housing vs. East Rock historic brownstones", first14: "Yale Shuttle routes, New Haven banking, international check-in & phone SIM" },
    { id: "lse", name: "The London School of Economics and Political Science", shortName: "LSE London", brand: "LSE", font: "'Plus Jakarta Sans', 'Inter', sans-serif", city: "London", country: "United Kingdom", iso: "UK", programs: ["MSc Finance & Economics", "MSc Econometrics"], housing: "Sidney Webb & Lilian Knowles halls vs. Bloomsbury flats", first14: "Oyster 18+ discount setup, UK NHS registration, NI number & student banking" },
    { id: "lmu", name: "Ludwig-Maximilians-Universität München", shortName: "LMU Munich", brand: "LMU", font: "'Inter', 'Helvetica Neue', sans-serif", city: "Munich", country: "Germany", iso: "DE", programs: ["MSc Economics", "MSc Data Science"], housing: "Studentenwerk Waitlist strategy vs. Maxvorstadt & Schwabing WG rooms", first14: "KVR Munich address registration, blocked account release & Deutschlandticket" },
    { id: "ethz", name: "ETH Zürich", shortName: "ETH Zürich", brand: "ETH Zürich", font: "'Space Grotesk', 'Inter', sans-serif", city: "Zürich", country: "Switzerland", iso: "CH", programs: ["MSc Computer Science", "MSc Robotics"], housing: "WOKO & Juwo student rooms vs. Zurich Circle sublets", first14: "Kreisbüro residence permit registration, ZVV transit pass & Swiss bank setup" },
    { id: "epfl", name: "École Polytechnique Fédérale de Lausanne", shortName: "EPFL Lausanne", brand: "EPFL", font: "'Inter', 'Helvetica Neue', sans-serif", city: "Lausanne", country: "Switzerland", iso: "CH", programs: ["MSc Data Science", "MSc Mechanical Engineering"], housing: "FMEL Vortex & Atrium residences vs. Morges shared flats", first14: "Contrôle des habitants registration, Mobilis pass, Swiss SIM & SBB half-fare" },
    { id: "ubc", name: "The University of British Columbia", shortName: "UBC Vancouver", brand: "UBC", font: "'Libre Baskerville', Georgia, serif", city: "Vancouver", country: "Canada", iso: "CA", programs: ["MDS Data Science", "MASc Engineering"], housing: "Exchange & Thunderbird grad residences vs. Kitsilano suites", first14: "Compass U-Pass transit setup, MSP health enrollment, SIN & Canadian banking" },
    { id: "kuleuven", name: "KU Leuven", shortName: "KU Leuven", brand: "KU Leuven", font: "'Plus Jakarta Sans', 'Inter', sans-serif", city: "Leuven", country: "Belgium", iso: "BE", programs: ["MSc Artificial Intelligence", "MSc Business Economics"], housing: "Official Kotwijs accredited student rooms vs. residence halls", first14: "Leuven City Hall registration, De Lijn Buzzy Pazz, mutualiteit & Belgian bank" }
  ];

  const negTemplates = [
    { text: "Replied 15 minutes late to our scheduled slot, though once we started the document walkthrough and do's/don'ts were spot-on.", reply: "Fair point — my lab ran over that day. I now lock a 20-minute buffer before every session." },
    { text: "Super clear on dorms and pre-arrival checklists, though I wished we had a few extra minutes for part-time job tips.", reply: "Appreciate the honesty! I added a dedicated student-job & local CV guide to all my future chats." }
  ];

  const peers = [];
  function seedUniversityPeers(uni, uniIdx) {
    homeCountries.forEach((c, cIdx) => {
      for (let slot = 0; slot < 2; slot++) {
        const seed = uniIdx * 43 + cIdx * 17 + slot * 11;
        const fName = c.firstNames[(seed + slot * 2) % c.firstNames.length];
        const lName = c.lastNames[(seed + cIdx + slot * 3) % c.lastNames.length];
        const name = `${fName} ${lName}`;
        const initials = (fName[0] + lName[0]).toUpperCase();
        const hometown = c.cities[seed % c.cities.length];
        const primaryLang = c.languages[(uniIdx + slot) % c.languages.length];
        const languages = primaryLang === "English" ? ["English"] : [primaryLang, "English"];
        const isAlumni = slot === 1;
        const homeDoc = c.docs[(uniIdx + slot) % c.docs.length];
        const sessions = 14 + ((seed * 5) % 42);
        const hasNeg = seed % 4 === 1;
        const negCount = hasNeg ? 1 : 0;
        const accuracy = 92 + (seed % 8);
        const speed = hasNeg ? 88 : 93 + (seed % 7);
        const clarity = 91 + ((seed + 2) % 9);
        const aura = Math.min(99, Math.max(89, Math.round((accuracy + speed + clarity) / 3)));

        const peer = {
          id: `${uni.id}-${c.iso.toLowerCase()}-${slot}`,
          name, initials,
          avatar: AVATAR_POOL[seed % AVATAR_POOL.length],
          role: isAlumni ? "Verified Alumni" : "Been There, Done That Mentor",
          homeCountry: c.name, homeIso: c.iso, hometown,
          primaryLang, languages,
          uniId: uni.id, university: uni.name, uniShort: uni.shortName, uniCity: uni.city,
          destCountry: uni.country, uniIso: uni.iso,
          program: uni.programs[slot % uni.programs.length],
          homeDoc, homeDocsAll: c.docs,
          housing: uni.housing, first14: uni.first14,
          aura, sessions, negCount,
          metrics: { accuracy, speed, clarity },
          story: isAlumni
            ? `I moved from ${hometown} to ${uni.city} for my ${uni.programs[slot % uni.programs.length]} with zero local contacts to ask. Now an alumni of ${uni.name}, I help fellow ${c.name} students prepare ${homeDoc}, find safe housing, and settle in during Week 1 in ${primaryLang} or English.`
            : `Currently studying ${uni.programs[slot % uni.programs.length]} at ${uni.name} after relocating from ${hometown}. Ask me directly about ${homeDoc}, course workload, and ${uni.housing}.`,
          reviews: [
            { type: "positive", author: `${c.firstNames[(seed + 3) % c.firstNames.length]} (${c.cities[(seed + 1) % c.cities.length]})`, date: "Oct 2026", score: `${Math.min(100, aura + 1)}/100`, text: `Saved me weeks of conflicting advice. ${name} walked me through ${homeDoc} in ${primaryLang} with clear step-by-step notes.` },
            { type: "positive", author: `Incoming Student (${c.iso})`, date: "Sep 2026", score: `${aura}/100`, text: `Zero sugarcoating about ${uni.housing}. Having the written checklist in chat made ${uni.first14} straightforward.` }
          ]
        };
        if (hasNeg) {
          const nt = negTemplates[seed % negTemplates.length];
          peer.reviews.push({ type: "negative", author: `Verified Student (${c.iso})`, date: "Aug 2026", score: "76/100", text: nt.text, reply: nt.reply });
        }
        peers.push(peer);
      }
    });
  }
  universities.forEach((u, i) => seedUniversityPeers(u, i));

  const ARRIVAL_PERKS = [
    { id: "esim", tag: "CONNECTIVITY", title: "Student eSIMs", partners: "Airalo · Saily · Holafly", desc: "Land with active 5G data at the gate so maps, Uber/Bolt, and dorm entry codes work immediately.", badge: "COMING SOON" },
    { id: "banking", tag: "BANKING & FX", title: "Cross-Border Banking", partners: "Revolut · Wise · Local Student Accounts", desc: "Zero-markup FX transfers and instant virtual IBANs matched to your target country's residence rules.", badge: "COMING SOON" },
    { id: "blocked", tag: "DOCUMENT PREP (COMING SOON)", title: "Document Walkthrough & Funds Guide", partners: "Upcoming BTDT Guided Workflow · Recognized Banks", desc: "Dedicated future service helping students walk through academic & proof-of-funds paperwork step-by-step (peer organization only — not a visa provider).", badge: "COMING SOON" },
    { id: "landing-docs", tag: "BTDT CONCIERGE", title: "Arrival Documentation & Landing Pack", partners: "BTDT Verified Mentors", desc: "A verified mentor guides you through city hall registration, tax ID, student transit cards, and Week-1 local documentation.", badge: "ACTIVE" }
  ];

  return { UNI_LOGOS, getUniLogo, AVATAR_POOL, homeCountries, universities, peers, seedUniversityPeers, ARRIVAL_PERKS };
})();
