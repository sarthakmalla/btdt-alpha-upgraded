(() => {
  const S = window.BTDT_SEED;

  let currentView = "landing"; // landing | directory | profile | demo
  let dirVisibleCount = 9;
  let activePeer = null;
  let preferredTier = 20;
  let pricingAirportOn = false;
  let activeWaitlistLabel = "";
  const gdprPrefs = { analytics: false, perks: false };

  const waitlistJoined = new Set();
  const demoChecklistDone = new Set(["doc-seal"]);
  const walletPasses = [
    {
      ref: "#BTDT-4821",
      mentorName: "Aarav Sharma",
      mentorId: "tum-in-0",
      uniId: "tum",
      uniShort: "TU Munich",
      homeIso: "IN",
      destIso: "DE",
      pkg: "Deep-Dive Paperwork & Prep (60–70 min)",
      total: 100,
      status: "Confirmed",
      pinnedReceipts: [
        "Transcript Registrar Seal OK (Skip extra notarization)",
        "Campus Portal Do's & Don'ts + Proof-of-Funds Checklist"
      ]
    }
  ];
  let expandedWalletRef = "#BTDT-4821";

  // Interactive App Demo State
  let demoMode = "student"; // student | mentor
  let demoScreen = "os_home"; // os_home | os_calc | os_calendar | os_mail | os_notes | splash | auth | role_gate | signup | student(match|peers|chat|arrival|wallet) | mentor(requests|chat|earnings|availability|aura)
  let demoFromCountry = "India";
  let demoDestCountry = "All";
  let demoUniId = "tum";
  let demoSelectedPeer = S.peers.find((p) => p.uniId === "tum" && p.homeCountry === "India") || S.peers[0];
  let demoTyping = false;
  let demoSheet = null; // null | notifications | attach | book | pdf | peerDetail
  let demoSheetPayload = null;
  let demoBookTier = 100;
  let demoBookMeetGreet = false;
  let demoPeerQuery = "";
  let demoShowRouteEditor = false;
  let demoOsNotice = "";
  let splashTimer = null;
  let demoAuthTab = "signup"; // signup | login
  let demoRoleIntent = "student"; // chosen on role_gate -> signup
  let demoIdScanned = false;
  let demoStudentName = "Priya Deshmukh";
  let demoMentorName = "Aarav Sharma";
  let mentorAvailable = true;
  let mentorAirportAddon = true;

  // Working Phone Utility Apps State
  let calcDisplay = "0";
  let calcAcc = null;
  let calcOp = null;
  let calcReset = false;

  let calSelectedDay = 26;
  const calEvents = {
    12: ["Campus dorm application opens"],
    18: ["BTDT chat w/ Aarav Sharma"],
    26: ["Pre-arrival checklist review"]
  };

  let mailOpenId = null;
  const mailItems = [
    { id: "m1", from: "Admissions · TUM", subj: "Official Offer & Portal Steps", time: "09:14", unread: true, body: "Welcome to Technische Universität München! Please upload your signed enrollment declaration and transcript PDF inside the portal before term starts." },
    { id: "m2", from: "BTDT Network", subj: "Your match Aarav is online", time: "Yesterday", unread: true, body: "Aarav Sharma (TUM Munich · India) replied to your Sem-5 transcript formatting scan. Open the BTDT app to save his notes to your Pass Wallet." },
    { id: "m3", from: "Student Housing Office", subj: "Hall of Residence Waitlist", time: "Nov 22", unread: false, body: "Current waiting period is 2 semesters for single dorm apartments. We recommend looking at vetted shared flats early." }
  ];

  const osNotesList = [
    "Ask Aarav about Munich student monthly pass cost (~€36/mo)",
    "Keep PDF copies of admission letter + passport + transcript together"
  ];

  const demoNotifications = [
    { id: "n1", title: "Aarav Sharma replied in < 2h", body: "Shared transcript formatting notes in chat.", time: "2m ago", unread: true, screen: "chat" },
    { id: "n2", title: "Session Pass #BTDT-4821 Active", body: "€100 Deep-Dive Paperwork & Prep pass synced.", time: "18m ago", unread: true, screen: "wallet" },
    { id: "n3", title: "Arrival Kit Early Perks", body: "Airalo & Revolut student waitlist opened for EU routes.", time: "1h ago", unread: false, screen: "arrival" }
  ];

  const mentorRequests = [
    { id: "req1", student: "Priya Deshmukh", iso: "IN", route: "Pune -> TUM Munich", tier: "€100 Deep-Dive Paperwork & Prep", euro: 100, note: "Need help organizing my academic packet & proof-of-funds formatting.", status: "pending" },
    { id: "req2", student: "Karthik Nair", iso: "IN", route: "Kochi -> TUM Munich", tier: "€20 Base Counseling", euro: 20, note: "Comparing university residence halls versus private shared flats near campus.", status: "pending" }
  ];

  const demoMessages = [
    {
      sender: "student",
      text: "Hi! I got my TU Munich admit from Pune. Attached my sem-5 transcript scan — from your experience, does it need another notarized stamp?",
      time: "14:02",
      pdfName: "Transcript_Audit_Scan.pdf",
      pdfSize: "1.4 MB · 3 pages",
      pdfSummary: "Registrar stamp visible on p.1, university grading scale attached on p.2."
    },
    {
      sender: "mentor",
      text: "Checked your scan — from my own intake, your registrar seal and grading formula on p.2 match campus requirements. Pinned your formatting notes below.",
      time: "14:04",
      receiptTitle: "Transcript Checklist Receipt",
      receiptDesc: "Registrar seal confirmed + grading formula checklist pinned."
    }
  ];

  const workspaceRecs = [
    "Drop a transcript, lease draft, or course list in chat for line-by-line notes from your senior.",
    "Book the €100–€120 Landing Pack 10 days before departure so your Week-1 setup steps are ready.",
    "Always read both positive and negative reviews — our mentors reply publicly to every critique."
  ];

  function avatarCircle(peer, sizePx = 40) {
    const src = peer.avatar || S.AVATAR_POOL[0];
    return `
      <div style="width:${sizePx}px;height:${sizePx}px;" class="rounded-full border border-white/25 bg-white/[0.06] overflow-hidden flex items-center justify-center font-mono text-[12px] text-white shrink-0">
        <img src="${src}" alt="${peer.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'" class="w-full h-full object-cover">
        <span style="display:none">${peer.initials}</span>
      </div>
    `;
  }

  function animateWordsIn(el, text, stepMs = 105) {
    if (!el) return;
    el.innerHTML = text
      .split(" ")
      .map((w, i) => `<span class="hero-word" style="animation-delay:${i * stepMs}ms">${w}</span>`)
      .join(" ");
  }

  function initHeroHeadline() {
    animateWordsIn(document.getElementById("heroH1"), "The peer network that’s been there before you", 105);
  }

  function renderCampusSurfaces() {
    const marqueeHtml = S.universities.map((u) => {
      const isWide = Boolean(S.UNI_LOGOS[u.id]?.wide);
      const logoCls = isWide ? "h-6 w-auto max-w-[112px] object-contain" : "h-8 w-8 object-contain";
      const uniFont = u.font || "var(--font-display)";
      return `
      <button onclick="openDirectoryForUni('${u.name.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-3 text-white/95 hover:text-white transition-colors shrink-0 group cursor-pointer">
        <img src="./media/unis/${u.id}.svg" alt="${u.shortName} logo" class="${logoCls} shrink-0 drop-shadow-[0_2px_8px_rgba(255,255,255,0.22)]" />
        <span style="font-family: ${uniFont};" class="text-[16.5px] font-semibold tracking-[-0.015em] whitespace-nowrap">${u.name}</span>
      </button>
    `;
    }).join("");
    document.getElementById("campusMarqueeTrack").innerHTML = marqueeHtml + marqueeHtml;

    document.getElementById("navCampusesList").innerHTML = S.universities.map((u) => `
      <button onclick="closeCampusesDropdown(); openDirectoryForUni('${u.name.replace(/'/g, "\\'")}')" class="w-full text-left px-2.5 py-2 rounded-[8px] hover:bg-white/[0.06] transition-colors flex items-center justify-between gap-2">
        <div class="flex items-center gap-2.5 min-w-0">
          <span class="min-w-7 h-7 flex items-center justify-center shrink-0">${S.getUniLogo(u, "w-6 h-6")}</span>
          <div class="min-w-0">
            <p style="font-family:${u.font || "var(--font-display)"};" class="text-[13px] font-medium text-white truncate leading-tight">${u.name}</p>
            <p class="text-[10.5px] text-white/50 truncate">${u.city} · ${u.iso}</p>
          </div>
        </div>
        <span class="font-mono text-[10px] text-white/45 shrink-0">28 peers</span>
      </button>
    `).join("");

    renderWorkspaceSidebarCampuses();
    renderDirectoryCampusPills();
  }

  function renderWorkspaceSidebarCampuses() {
    const q = (document.getElementById("workspaceCampusSearch")?.value || "").trim().toLowerCase();
    const list = S.universities.filter((u) =>
      !q ||
      u.name.toLowerCase().includes(q) ||
      u.shortName.toLowerCase().includes(q) ||
      u.city.toLowerCase().includes(q) ||
      u.iso.toLowerCase().includes(q)
    );
    const box = document.getElementById("workspaceCampusList");
    if (!box) return;
    if (list.length === 0) {
      box.innerHTML = `<p class="px-2 py-2 text-[11.5px] text-white/45">No campus matching "${q}"</p>`;
      return;
    }
    box.innerHTML = list.map((u) => `
      <button onclick="openDirectoryForUni('${u.name.replace(/'/g, "\\'")}')" class="w-full text-left px-2 py-1.5 rounded-[6px] hover:bg-white/[0.06] transition-colors flex items-center justify-between gap-2 text-[12px] text-white/75 hover:text-white">
        <span class="flex items-center gap-2 min-w-0">
          ${S.getUniLogo(u, "w-[17px] h-[17px] text-white/80")}
          <span class="truncate">${u.shortName}</span>
        </span>
        <span class="font-mono text-[9.5px] text-white/40">${u.iso}</span>
      </button>
    `).join("");
  }

  function populateAllSelects() {
    const cOpts = S.homeCountries.map((c) => `<option value="${c.name}">[${c.iso}] ${c.name}</option>`).join("");
    const uOpts = S.universities.map((u) => `<option value="${u.name}">[${u.iso}] ${u.name}</option>`).join("");
    const destCountries = Array.from(new Set(S.universities.map((u) => u.country)));
    const destOpts = `<option value="all">All Destination Countries</option>` + destCountries.map((d) => `<option value="${d}">${d}</option>`).join("");

    // Landing 3-input route matcher
    const mf = document.getElementById("matchFromCountry");
    const md = document.getElementById("matchDestCountry");
    if (mf) mf.innerHTML = cOpts;
    if (md) md.innerHTML = destOpts;
    syncMatcherUniversities();

    // Directory filters
    const fc = document.getElementById("dirFilterCountry");
    const fd = document.getElementById("dirFilterDest");
    const fu = document.getElementById("dirFilterUni");
    if (fc) fc.innerHTML = `<option value="all">All 14 Countries</option>` + cOpts;
    if (fd) fd.innerHTML = `<option value="all">All Destinations</option>` + destCountries.map((d) => `<option value="${d}">${d}</option>`).join("");
    if (fu) fu.innerHTML = `<option value="all">All ${S.universities.length} Universities</option>` + uOpts;

    // Checklist & Join Mentor modal selects
    const clC = document.getElementById("clCountry");
    const clU = document.getElementById("clUni");
    if (clC) clC.innerHTML = cOpts;
    if (clU) clU.innerHTML = uOpts;

    const jmC = document.getElementById("jmCountry");
    const jmU = document.getElementById("jmUni");
    if (jmC) jmC.innerHTML = cOpts;
    if (jmU) jmU.innerHTML = S.universities.map((u) => `<option value="${u.id}">[${u.iso}] ${u.name}</option>`).join("");
  }

  function syncMatcherUniversities() {
    const dest = document.getElementById("matchDestCountry")?.value || "all";
    const mu = document.getElementById("matchTargetUni");
    if (!mu) return;
    const prev = mu.value;
    const unis = dest === "all" ? S.universities : S.universities.filter((u) => u.country === dest);
    mu.innerHTML = unis.map((u) => `<option value="${u.name}">[${u.iso}] ${u.name}</option>`).join("");
    if (unis.some((u) => u.name === prev)) mu.value = prev;
    renderSuggestedRouteMatches();
  }

  function peerCardMarkup(p, idx = 0) {
    const uniObj = S.universities.find((u) => u.id === p.uniId) || { id: p.uniId, shortName: p.uniShort };
    const negText = p.negCount === 0 ? "0 Negative" : `${p.negCount} Negative`;
    const delay = Math.min(idx, 8) * 55;
    return `
      <article onclick="openPeerProfile('${p.id}', 'all')" class="crimzon-card crimzon-card-hover card-stagger cursor-pointer p-5 flex flex-col justify-between gap-5" style="animation-delay:${delay}ms;">
        <div class="space-y-4">
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              ${avatarCircle(p, 42)}
              <div class="min-w-0">
                <h3 class="text-[15.5px] font-medium text-white truncate">${p.name}</h3>
                <div class="flex items-center gap-1.5 mt-0.5">
                  <span class="iso-pill">${p.homeIso}</span>
                  <span class="text-[12px] text-white/60 truncate">${p.hometown}</span>
                </div>
              </div>
            </div>
            <span class="font-mono text-[10px] uppercase px-2 py-0.5 rounded border border-crimzon/35 bg-crimzon/10 text-white/90 shrink-0">${p.role === "Verified Alumni" ? "Alumni" : "BTDT Mentor"}</span>
          </div>

          <div class="flex items-center gap-2.5 px-2.5 py-2 rounded-[8px] border border-white/10 bg-white/[0.02]">
            ${S.getUniLogo(uniObj, "w-6 h-6")}
            <div class="min-w-0">
              <p style="font-family:${uniObj.font || "var(--font-display)"};" class="text-[13px] text-white font-semibold truncate">${p.university}</p>
              <p class="text-[11px] text-white/55 truncate">${p.languages.join(", ")} · ${p.homeDoc}</p>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
            <span class="px-2 py-1 rounded-[6px] border border-crimzon/45 bg-crimzon/15 text-crimzon">${p.aura}/100 Aura</span>
            <span class="px-2 py-1 rounded-[6px] border border-white/10 bg-white/[0.03] text-white/80">Replies &lt; 2h</span>
            <button onclick="event.stopPropagation(); openPeerProfile('${p.id}', 'negative')" class="px-2 py-1 rounded-[6px] border border-white/10 bg-white/[0.02] text-white/55 hover:text-white hover:border-white/30 transition-colors">${negText}</button>
          </div>
        </div>

        <div class="pt-4 border-t border-white/10 flex items-center justify-between">
          <span class="font-mono text-[12px] text-white/70">From <strong class="text-white">€20</strong></span>
          <span class="text-[13px] font-medium text-white">View Full Profile →</span>
        </div>
      </article>
    `;
  }

  function renderSuggestedRouteMatches() {
    const fromCountry = document.getElementById("matchFromCountry")?.value || "India";
    const uniName = document.getElementById("matchTargetUni")?.value || S.universities[0].name;
    const nameQ = (document.getElementById("matchPersonQuery")?.value || "").trim().toLowerCase();

    const matches = S.peers.filter((p) => {
      if (p.homeCountry !== fromCountry) return false;
      if (p.university !== uniName) return false;
      if (nameQ && !p.name.toLowerCase().includes(nameQ)) return false;
      return true;
    }).sort((a, b) => b.aura - a.aura);

    const grid = document.getElementById("suggestedRouteGrid");
    const label = document.getElementById("suggestedRouteLabel");
    if (!grid || !label) return;
    label.textContent = `Suggested For Your Route (${fromCountry} → ${uniName})`;
    if (matches.length === 0) {
      grid.innerHTML = `<div class="col-span-full border border-white/10 bg-white/[0.02] p-6 text-center text-[13px] text-white/65">No mentor named "${nameQ}" on this exact route — clear the optional person search or browse all ${S.peers.length}+ peers.</div>`;
      return;
    }
    grid.innerHTML = matches.slice(0, 3).map((p, idx) => peerCardMarkup(p, idx)).join("");
  }

  function renderDirectoryCampusPills() {
    const box = document.getElementById("dirCampusLogoPills");
    if (!box) return;
    const activeUni = document.getElementById("dirFilterUni")?.value || "all";
    box.innerHTML = `
      <button onclick="selectDirCampusPill('all')" class="px-3 py-1.5 rounded-[8px] border text-[12px] font-mono shrink-0 transition-colors ${activeUni === "all" ? "border-crimzon bg-crimzon/15 text-white" : "border-white/15 bg-white/[0.02] text-white/65 hover:text-white"}">All (${S.universities.length})</button>
    ` + S.universities.map((u) => `
      <button onclick="selectDirCampusPill('${u.name.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] border text-[12px] shrink-0 transition-colors ${activeUni === u.name ? "border-crimzon bg-crimzon/15 text-white" : "border-white/15 bg-white/[0.02] text-white/70 hover:text-white"}">
        ${S.getUniLogo(u, "w-4 h-4")}<span>${u.shortName}</span>
      </button>
    `).join("");
  }

  function renderDirectoryPeers() {
    const cVal = document.getElementById("dirFilterCountry")?.value || "all";
    const dVal = document.getElementById("dirFilterDest")?.value || "all";
    const uVal = document.getElementById("dirFilterUni")?.value || "all";
    const rVal = document.getElementById("dirFilterRole")?.value || "all";
    const q = (document.getElementById("dirFilterQuery")?.value || "").trim().toLowerCase();

    const list = S.peers.filter((p) => {
      if (cVal !== "all" && p.homeCountry !== cVal) return false;
      if (dVal !== "all" && p.destCountry !== dVal) return false;
      if (uVal !== "all" && p.university !== uVal) return false;
      if (rVal !== "all" && p.role !== rVal) return false;
      if (q) {
        const hay = `${p.name} ${p.hometown} ${p.homeCountry} ${p.homeIso} ${p.languages.join(" ")} ${p.university} ${p.uniCity} ${p.homeDoc} ${p.housing}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    }).sort((a, b) => (b.aura - a.aura) || (b.sessions - a.sessions));

    const badge = document.getElementById("dirPeerCountBadge");
    if (badge) badge.textContent = `${list.length} verified peers`;

    const heroBox = document.getElementById("dirUniHeroBanner");
    if (heroBox) {
      const uniObj = uVal !== "all" ? S.universities.find((u) => u.name === uVal) : null;
      if (uniObj) {
        heroBox.classList.remove("hidden");
        heroBox.innerHTML = `
          <div class="crimzon-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border-crimzon/40">
            <div class="flex items-start gap-4">
              <div class="min-w-12 h-12 flex items-center justify-center shrink-0">
                ${S.getUniLogo(uniObj, "w-10 h-10")}
              </div>
              <div class="space-y-1.5">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="iso-pill">${uniObj.iso}</span>
                  <span class="font-mono text-[11px] text-crimzon uppercase">${uniObj.brand || uniObj.shortName}</span>
                  <span class="font-mono text-[11px] text-white/55">· ${uniObj.city}, ${uniObj.country}</span>
                </div>
                <h2 style="font-family: ${uniObj.font || "var(--font-display)"};" class="text-[22px] md:text-[26px] font-semibold text-white leading-tight">${uniObj.name}</h2>
                <p class="text-[13px] text-white/75">${uniObj.housing} · ${uniObj.first14}</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-3 shrink-0">
              <span class="font-mono text-[11.5px] px-3 py-1.5 rounded-[8px] border border-crimzon/45 bg-crimzon/15 text-white">${list.length} Enrolled Peers</span>
              <button onclick="selectDirCampusPill('all')" class="btn-hollow border border-white/20 text-[12.5px] px-3.5 py-2">View All Campuses</button>
            </div>
          </div>
        `;
      } else {
        heroBox.classList.add("hidden");
        heroBox.innerHTML = "";
      }
    }

    const grid = document.getElementById("dirPeersGrid");
    if (!grid) return;

    if (list.length === 0) {
      grid.innerHTML = `<div class="col-span-full border border-white/10 bg-white/[0.02] p-10 text-center space-y-3"><p class="text-[15px] text-white">No peers matched these filters.</p><button onclick="resetDirectoryFilters()" class="btn-hollow border border-white/20 text-[13px]">Reset Filters</button></div>`;
      document.getElementById("dirLoadMoreBtn")?.classList.add("hidden");
      return;
    }
    grid.innerHTML = list.slice(0, dirVisibleCount).map((p, idx) => peerCardMarkup(p, idx)).join("");
    document.getElementById("dirLoadMoreBtn")?.classList.toggle("hidden", list.length <= dirVisibleCount);
  }

  function renderArrivalKitHub() {
    const grid = document.getElementById("arrivalKitGrid");
    if (!grid) return;
    grid.innerHTML = S.ARRIVAL_PERKS.map((perk) => {
      const joined = waitlistJoined.has(perk.id);
      return `
        <div class="crimzon-card p-5 flex flex-col justify-between gap-4">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between gap-2">
              <span class="font-mono text-[10px] uppercase tracking-wider text-crimzon">${perk.tag}</span>
              <span class="iso-pill">${perk.badge}</span>
            </div>
            <h4 style="font-family: var(--font-display);" class="text-[18px] font-medium text-white">${perk.title}</h4>
            <p class="font-mono text-[11px] text-white/50">${perk.partners}</p>
            <p class="crimzon-meta text-white/75 leading-relaxed">${perk.desc}</p>
          </div>
          <button onclick="toggleArrivalWaitlist('${perk.id}')" class="w-full py-2.5 px-3 rounded-[8px] border text-[12.5px] font-medium transition-colors ${joined ? "border-crimzon bg-crimzon text-white" : "border-white/20 bg-white/[0.03] text-white hover:border-white/40"}">
            ${joined ? "Perks Unlocked — Waitlist Active" : "Notify Me / Unlock Student Perks"}
          </button>
        </div>
      `;
    }).join("");
  }

  // ------------------------------------------------------------------
  // ISOLATED FRAMEWORK7 IOS SIMULATOR BRIDGE + LIVE TELEMETRY
  // ------------------------------------------------------------------
  let latestIosState = {
    currentApp: "os_home",
    btdtStage: "auth",
    role: "student",
    studentTab: "home",
    mentorTab: "queue",
    homeIso: "IN",
    uniId: "tum",
    uniName: "Technische Universität München (TUM)",
    mentorIdUploaded: false
  };
  let pendingIosAction = null;

  function withIosBridge(cb) {
    const frame = document.getElementById("iosDemoFrame");
    const bridge = frame?.contentWindow?.BTDT_IOS;
    if (bridge) {
      cb(bridge);
      return;
    }
    pendingIosAction = cb;
    if (frame && !frame.dataset.hooked) {
      frame.dataset.hooked = "1";
      frame.addEventListener("load", () => {
        if (pendingIosAction && frame.contentWindow?.BTDT_IOS) {
          const fn = pendingIosAction;
          pendingIosAction = null;
          fn(frame.contentWindow.BTDT_IOS);
        }
      });
    }
  }

  window.addEventListener("message", (ev) => {
    if (ev.data && ev.data.type === "BTDT_IOS_STATE" && ev.data.state) {
      latestIosState = { ...latestIosState, ...ev.data.state };
      renderAppDemo();
    }
  });

  function routeIosDemoScreen(screen = "os_home") {
    withIosBridge((bridge) => {
      if (screen === "os_home") bridge.bootToLockScreen();
      else if (screen === "auth") bridge.openAuth();
      else if (screen === "student" || screen === "student_home" || screen === "home") bridge.openStudentScreen("home");
      else if (screen === "peers") bridge.openStudentScreen("peers");
      else if (screen === "chat") bridge.openStudentScreen("chat");
      else if (screen === "arrival" || screen === "kit") bridge.openStudentScreen("kit");
      else if (screen === "wallet" || screen === "passes") bridge.openStudentScreen("passes");
      else if (screen === "mentor" || screen === "queue" || screen === "requests") bridge.openMentorScreen("queue");
      else if (bridge.bootAndOpen) bridge.bootAndOpen(screen);
      else bridge.bootToLockScreen();
    });
  }

  function scaleIphone18ProMax() {
    const wrap = document.getElementById("iphone18pmWrap");
    const chassis = document.getElementById("iphone18pmChassis");
    if (!wrap || !chassis) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let scale;
    if (vw >= 1024) {
      // Slightly zoomed-out crisp Pro Max size alongside program overview (comfortable margin on MacBooks)
      const availH = Math.max(460, vh - 125);
      const availW = Math.max(280, (vw * 0.39) - 24);
      scale = Math.min(0.71, availH / 1000, availW / 490);
    } else {
      const availH = Math.max(420, vh - 110);
      const availW = Math.max(260, vw - 40);
      scale = Math.min(0.68, availH / 1000, availW / 490);
    }
    wrap.style.width = `${Math.round(490 * scale)}px`;
    wrap.style.height = `${Math.round(1000 * scale)}px`;
    chassis.style.transform = `translate3d(0,0,0) scale(${scale.toFixed(4)})`;
  }
  window.addEventListener("resize", scaleIphone18ProMax, { passive: true });

  function renderAppDemo() {
    const sideInspector = document.getElementById("demoSideInspector");
    if (!sideInspector) return;

    const st = latestIosState;
    const isOsHome = st.currentApp !== "btdt";
    const isAuthStage = st.currentApp === "btdt" && ["auth", "role_gate", "student_onboard", "mentor_verify"].includes(st.btdtStage);
    const isStudentStage = st.currentApp === "btdt" && st.btdtStage === "student_app";
    const isMentorStage = st.currentApp === "btdt" && st.btdtStage === "mentor_app";

    document.querySelectorAll("[data-demo-tab]").forEach((btn) => {
      const tabTarget = btn.getAttribute("data-demo-tab");
      let active = false;
      if (tabTarget === "os_home") active = isOsHome;
      else if (tabTarget === "auth") active = isAuthStage;
      else if (tabTarget === "student_home" || tabTarget === "home") active = isStudentStage && (st.studentTab === "home");
      else if (tabTarget === "peers") active = isStudentStage && st.studentTab === "peers";
      else if (tabTarget === "chat") active = isStudentStage && st.studentTab === "chat";
      else if (tabTarget === "kit") active = isStudentStage && st.studentTab === "kit";
      else if (tabTarget === "passes") active = isStudentStage && st.studentTab === "passes";
      else if (tabTarget === "match") active = isStudentStage && (st.studentTab === "home" || st.studentTab === "peers");
      else if (tabTarget === "requests" || tabTarget === "mentor") active = isMentorStage;
      btn.className = active
        ? "px-3 py-1.5 rounded-[8px] border border-crimzon bg-crimzon/15 text-white text-[12px] font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer"
        : "px-3 py-1.5 rounded-[8px] border border-white/15 bg-white/[0.03] text-white/75 hover:text-white hover:border-white/30 text-[12px] inline-flex items-center gap-1.5 transition-colors cursor-pointer";
    });

    const activePeer = S.peers.find((p) => p.uniId === st.uniId) || demoSelectedPeer || S.peers[0];
    const badgeState = isOsHome
      ? `IOS · ${String(st.currentApp || "HOME").toUpperCase()}`
      : `BTDT · ${String(st.btdtStage || "APP").replace("_", " ").toUpperCase()}`;

    sideInspector.innerHTML = `
      <div class="crimzon-card p-4 space-y-3">
        <div class="flex items-center justify-between pb-2.5 border-b border-white/10">
          <span class="font-mono text-[10.5px] uppercase text-crimzon">Program Overview &amp; Live State</span>
          <span class="iso-pill">${badgeState}</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[12px] text-white/80">
          <p><strong class="text-white">Surface:</strong> ${st.currentApp === "os_home" ? (st.isLocked ? "Lock Screen" : "iOS 27 Home") : st.currentApp === "btdt" ? `BTDT (${st.role})` : `Apple ${st.currentApp}`}</p>
          <p><strong class="text-white">Route:</strong> ${st.homeIso} -> ${activePeer.uniShort}</p>
          <p><strong class="text-white">Senior Match:</strong> ${activePeer.name} (${activePeer.aura}/100)</p>
          <p><strong class="text-white">Campuses:</strong> ${S.universities.length} universities · ${S.peers.length}+ peers</p>
        </div>
        <div class="pt-2.5 border-t border-white/10 flex flex-wrap gap-2">
          <button onclick="openPeerProfile('${activePeer.id}', 'all')" class="btn-fill text-[12px] py-1.5 px-3.5">Open ${activePeer.name.split(" ")[0]}'s Profile</button>
          <button onclick="openDirectoryView()" class="btn-hollow border border-white/20 text-[12px] py-1.5 px-3.5">Browse ${S.peers.length}+ Peers</button>
        </div>
      </div>
    `;
  }

  // ------------------------------------------------------------------
  // VIEW SWITCHING & NAVIGATION
  // ------------------------------------------------------------------
  function hideAllViews() {
    ["landingView", "storyView", "directoryView", "mentorProfileView", "appDemoView"].forEach((id) => {
      document.getElementById(id)?.classList.add("hidden");
    });
    document.getElementById("siteFooter")?.classList.remove("hidden");
    document.querySelector("header")?.classList.remove("hidden");
    // GDPR banner intentionally disabled for now to allow full animated view
    const gb = document.getElementById("gdprBanner");
    if (gb) gb.style.display = "none";
    const pp = document.getElementById("privacyPill");
    if (pp) pp.style.display = "none";
  }

  function showLanding(scrollTop = false) {
    currentView = "landing";
    hideAllViews();
    document.getElementById("landingView").classList.remove("hidden");
    if (scrollTop) smoothScrollToY(0);
  }

  function openStoryView() {
    currentView = "story";
    hideAllViews();
    const sv = document.getElementById("storyView");
    sv.classList.remove("hidden");
    sv.classList.remove("view-enter");
    void sv.offsetWidth;
    sv.classList.add("view-enter");
    animateWordsIn(document.getElementById("storyHeadline"), "Why I’m Building BTDT", 95);
    jumpScrollTop();
  }

  function openDirectoryView() {
    currentView = "directory";
    hideAllViews();
    const dv = document.getElementById("directoryView");
    dv.classList.remove("hidden");
    dv.classList.remove("view-enter");
    void dv.offsetWidth;
    dv.classList.add("view-enter");
    animateWordsIn(document.getElementById("dirHeadline"), "Enrolled Peers Directory", 95);
    renderDirectoryCampusPills();
    renderDirectoryPeers();
    jumpScrollTop();
  }

  function openDirectoryForUni(uniName) {
    document.getElementById("dirFilterUni").value = uniName;
    document.getElementById("dirFilterCountry").value = "all";
    dirVisibleCount = 30;
    openDirectoryView();
  }

  function openDirectoryFromMatcher() {
    const fromC = document.getElementById("matchFromCountry")?.value || "all";
    const uni = document.getElementById("matchTargetUni")?.value || "all";
    document.getElementById("dirFilterCountry").value = fromC;
    document.getElementById("dirFilterUni").value = uni;
    dirVisibleCount = 14;
    openDirectoryView();
  }

  function selectDirCampusPill(uniName) {
    document.getElementById("dirFilterUni").value = uniName;
    dirVisibleCount = uniName === "all" ? 9 : 30;
    renderDirectoryCampusPills();
    renderDirectoryPeers();
  }

  function resetDirectoryFilters() {
    document.getElementById("dirFilterCountry").value = "all";
    document.getElementById("dirFilterDest").value = "all";
    document.getElementById("dirFilterUni").value = "all";
    document.getElementById("dirFilterRole").value = "all";
    document.getElementById("dirFilterQuery").value = "";
    dirVisibleCount = 9;
    renderDirectoryCampusPills();
    renderDirectoryPeers();
  }

  function openAppDemo(screen = "os_home") {
    currentView = "demo";
    hideAllViews();
    document.getElementById("siteFooter")?.classList.add("hidden");
    document.querySelector("header")?.classList.add("hidden");
    const gdpr = document.getElementById("gdprBanner");
    if (gdpr) gdpr.style.display = "none";
    const ppill = document.getElementById("privacyPill");
    if (ppill) ppill.style.display = "none";
    document.getElementById("appDemoView").classList.remove("hidden");
    scaleIphone18ProMax();
    renderAppDemo();
    routeIosDemoScreen(screen);
    jumpScrollTop();
  }

  function goToSection(id) {
    const wasLanding = currentView === "landing";
    showLanding(false);
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY;
        smoothScrollToY(y);
      }
    }, wasLanding ? 10 : 70);
  }

  // ------------------------------------------------------------------
  // FULL-PAGE MENTOR PROFILE VIEW
  // ------------------------------------------------------------------
  function openPeerProfile(id, reviewTab = "all") {
    const p = S.peers.find((x) => x.id === id);
    if (!p) return;
    activePeer = p;
    currentView = "profile";
    const uniObj = S.universities.find((u) => u.id === p.uniId) || { id: p.uniId, shortName: p.uniShort };

    hideAllViews();
    const mpv = document.getElementById("mentorProfileView");
    mpv.classList.remove("hidden", "view-enter");
    void mpv.offsetWidth;
    mpv.classList.add("view-enter");
    jumpScrollTop();

    document.getElementById("profileBreadcrumb").textContent = `${p.homeCountry} / ${p.uniShort} / ${p.name}`;
    document.getElementById("bookingMentorTitle").textContent = `Chat with ${p.name}`;
    document.getElementById("bookingMentorAura").textContent = `${p.aura}/100 Aura`;
    document.getElementById("bookLang").innerHTML = p.languages.map((l) => `<option value="${l}">${l}</option>`).join("");

    const radio = document.querySelector(`input[name="bookTier"][value="${preferredTier}"]`);
    if (radio) radio.checked = true;
    document.getElementById("bookAirportAddon").checked = pricingAirportOn;
    updateBookingTotal();

    document.getElementById("profileMainCol").innerHTML = `
      <div class="crimzon-card card-stagger p-6 md:p-7 space-y-6">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div class="flex items-center gap-4">
            ${avatarCircle(p, 64)}
            <div class="space-y-1.5">
              <div class="flex items-center gap-2.5 flex-wrap">
                <h1 id="profileHeroName" style="font-family: var(--font-display);" class="text-[26px] md:text-[30px] font-medium tracking-[-0.03em] text-white leading-tight">${p.name}</h1>
                <span class="font-mono text-[10px] uppercase px-2 py-0.5 rounded border border-white/15 bg-white/[0.05] text-white/85">${p.role}</span>
              </div>
              <div class="flex items-center gap-2 text-[13.5px] text-white/75 flex-wrap">
                <span class="iso-pill">${p.homeIso}</span>
                <span>${p.hometown}, ${p.homeCountry} · Speaks <strong class="text-white">${p.languages.join(" &amp; ")}</strong></span>
              </div>
              <div class="flex items-center gap-2.5 text-[13.5px] text-white font-medium pt-0.5">
                ${S.getUniLogo(uniObj, "w-5 h-5")}
                <span style="font-family:${uniObj.font || "var(--font-display)"};">${p.university}</span>
                <span class="text-white/55 font-normal">· ${p.program}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-start sm:items-end gap-1.5 font-mono text-[11px]">
            <span class="px-2.5 py-1 rounded-[6px] border border-white/20 bg-white/[0.04] text-white">Verified by Student ID / Enrollment Docs</span>
            <span class="text-white/60">Replies &lt; 2h · ${p.sessions} Sessions</span>
          </div>
        </div>
        <div class="pt-5 border-t border-white/10 space-y-2">
          <p class="font-mono text-[11px] uppercase tracking-wider text-crimzon">My Story</p>
          <p class="crimzon-body text-white/85">“${p.story}”</p>
        </div>
      </div>

      <div class="crimzon-card card-stagger p-6 space-y-4" style="animation-delay:110ms;">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 style="font-family: var(--font-display);" class="text-[20px] font-medium text-white">Field Receipts</h2>
          <div class="flex items-center gap-1.5 font-mono text-[11px]">
            <button onclick="switchReceiptTab('pre')" id="rtab-pre" class="rtab px-3 py-1.5 rounded-[6px] border border-crimzon/50 bg-crimzon/15 text-crimzon">Pre-Departure</button>
            <button onclick="switchReceiptTab('housing')" id="rtab-housing" class="rtab px-3 py-1.5 rounded-[6px] border border-white/10 bg-white/[0.03] text-white/65">Housing Reality</button>
            <button onclick="switchReceiptTab('first14')" id="rtab-first14" class="rtab px-3 py-1.5 rounded-[6px] border border-white/10 bg-white/[0.03] text-white/65">First 14 Days</button>
          </div>
        </div>
        <div id="receiptTabBody" class="p-4 rounded-[10px] border border-white/10 bg-white/[0.02] text-[13.5px] text-white/80 leading-relaxed"></div>
      </div>

      <div id="profileReviewsBox" class="crimzon-card card-stagger p-6 space-y-6" style="animation-delay:200ms;">
        <div class="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
          <div>
            <p class="font-mono text-[11px] uppercase text-white/50">Aura Breakdown Ledger</p>
            <p style="font-family: var(--font-display);" class="text-[36px] font-medium tracking-[-0.04em] text-white leading-none mt-1">${p.aura}<span class="text-[18px] text-crimzon">/100</span></p>
          </div>
          <div class="font-mono text-[12px] text-white/70 sm:text-right">
            <p class="text-white">${p.sessions} Completed Sessions</p>
            <p>${p.negCount} negative review${p.negCount === 1 ? "" : "s"} (public)</p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="space-y-1.5"><div class="flex justify-between font-mono text-[11px] text-white/70"><span>Accuracy</span><span class="text-white">${p.metrics.accuracy}%</span></div><div class="h-1.5 bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-crimzon" style="width:${p.metrics.accuracy}%"></div></div></div>
          <div class="space-y-1.5"><div class="flex justify-between font-mono text-[11px] text-white/70"><span>Response Speed</span><span class="text-white">${p.metrics.speed}%</span></div><div class="h-1.5 bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-crimzon" style="width:${p.metrics.speed}%"></div></div></div>
          <div class="space-y-1.5"><div class="flex justify-between font-mono text-[11px] text-white/70"><span>Clarity</span><span class="text-white">${p.metrics.clarity}%</span></div><div class="h-1.5 bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-crimzon" style="width:${p.metrics.clarity}%"></div></div></div>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
          <h3 class="text-[16px] font-medium text-white">Student Reviews</h3>
          <div class="flex items-center gap-1.5 font-mono text-[11px]">
            <button onclick="renderPeerReviews('all')" id="revf-all" class="revf px-3 py-1.5 rounded-[6px] border border-white/15">All (${p.reviews.length})</button>
            <button onclick="renderPeerReviews('positive')" id="revf-positive" class="revf px-3 py-1.5 rounded-[6px] border border-white/15">Positive</button>
            <button onclick="renderPeerReviews('negative')" id="revf-negative" class="revf px-3 py-1.5 rounded-[6px] border border-white/15">Negative (${p.negCount})</button>
          </div>
        </div>
        <div id="peerReviewsList" class="space-y-3"></div>
      </div>
    `;

    animateWordsIn(document.getElementById("profileHeroName"), p.name, 95);
    switchReceiptTab("pre");
    renderPeerReviews(reviewTab);
    if (reviewTab === "negative") {
      setTimeout(() => document.getElementById("profileReviewsBox")?.scrollIntoView({ behavior: "smooth", block: "center" }), 140);
    }
  }

  function switchReceiptTab(key) {
    if (!activePeer) return;
    document.querySelectorAll(".rtab").forEach((b) => {
      b.className = "rtab px-3 py-1.5 rounded-[6px] border border-white/10 bg-white/[0.03] text-white/65 transition-colors";
    });
    const el = document.getElementById(`rtab-${key}`);
    if (el) el.className = "rtab px-3 py-1.5 rounded-[6px] border border-crimzon/50 bg-crimzon/15 text-crimzon transition-colors";
    const body = document.getElementById("receiptTabBody");
    if (key === "pre") {
      body.innerHTML = `<p class="font-mono text-[11px] text-crimzon uppercase mb-2">${activePeer.homeCountry} Pre-Departure Do's &amp; Don'ts</p><ul class="space-y-1.5">${activePeer.homeDocsAll.map((d) => `<li>— ${d}: practical peer notes &amp; official campus checklists</li>`).join("")}</ul>`;
    } else if (key === "housing") {
      body.innerHTML = `<p class="font-mono text-[11px] text-crimzon uppercase mb-2">${activePeer.uniCity} Housing Reality</p><p>${activePeer.housing}. Includes landlord verification &amp; scam red-flag checks.</p>`;
    } else {
      body.innerHTML = `<p class="font-mono text-[11px] text-crimzon uppercase mb-2">First 14 Days in ${activePeer.uniCity}</p><p>${activePeer.first14}.</p>`;
    }
  }

  function renderPeerReviews(filter) {
    if (!activePeer) return;
    document.querySelectorAll(".revf").forEach((b) => {
      b.className = "revf px-3 py-1.5 rounded-[6px] border border-white/15 bg-white/[0.02] text-white/65 transition-colors";
    });
    const tab = document.getElementById(`revf-${filter}`);
    if (tab) tab.className = "revf px-3 py-1.5 rounded-[6px] border border-white bg-white text-black font-medium transition-colors";

    const list = activePeer.reviews.filter((r) => filter === "all" || r.type === filter);
    const box = document.getElementById("peerReviewsList");
    if (filter === "negative" && list.length === 0) {
      box.innerHTML = `<div class="p-4 rounded-[10px] border border-dashed border-white/15 text-center font-mono text-[12px] text-white/75">0 negative reviews from verified students</div>`;
      return;
    }
    box.innerHTML = list.map((r) => `
      <div class="p-4 rounded-[10px] border ${r.type === "negative" ? "border-white/20 bg-white/[0.03]" : "border-white/10 bg-white/[0.015]"} space-y-2 text-[13px]">
        <div class="flex items-center justify-between font-mono text-[11px]">
          <span class="text-white">${r.author} · ${r.date}</span>
          <span class="text-white/70">${r.type === "negative" ? "Constructive" : "Verified"} · ${r.score}</span>
        </div>
        <p class="text-white/80 leading-relaxed">“${r.text}”</p>
        ${r.reply ? `<div class="mt-2 pt-2.5 border-t border-white/10 pl-3 border-l-2 border-l-crimzon"><p class="font-mono text-[10px] uppercase text-crimzon mb-0.5">${activePeer.name}’s Public Reply</p><p class="text-[12.5px] text-white/70">${r.reply}</p></div>` : ""}
      </div>
    `).join("");
  }

  // ------------------------------------------------------------------
  // INTERACTIVE HANDLERS (Exposed globally for inline HTML hooks)
  // ------------------------------------------------------------------
  window.showLanding = showLanding;
  window.goToSection = goToSection;
  window.openStoryView = openStoryView;
  window.openDirectoryView = openDirectoryView;
  window.openDirectoryForUni = openDirectoryForUni;
  window.openDirectoryFromMatcher = openDirectoryFromMatcher;
  window.selectDirCampusPill = selectDirCampusPill;
  window.resetDirectoryFilters = resetDirectoryFilters;
  window.renderDirectoryPeers = () => { dirVisibleCount = 9; renderDirectoryCampusPills(); renderDirectoryPeers(); };
  window.loadMoreDirPeers = () => { dirVisibleCount += 9; renderDirectoryPeers(); };
  window.syncMatcherUniversities = syncMatcherUniversities;
  window.renderSuggestedRouteMatches = renderSuggestedRouteMatches;
  window.renderWorkspaceSidebarCampuses = renderWorkspaceSidebarCampuses;
  window.openPeerProfile = openPeerProfile;
  window.switchReceiptTab = switchReceiptTab;
  window.renderPeerReviews = renderPeerReviews;
  window.openAppDemo = openAppDemo;
  window.routeIosDemoScreen = routeIosDemoScreen;

  window.switchShowcaseTab = (idx) => {
    for (let i = 0; i < 3; i++) {
      const tab = document.getElementById(`stab-${i}`);
      const panel = document.getElementById(`spanel-${i}`);
      const active = i === idx;
      tab?.classList.toggle("text-crimzon", active);
      tab?.classList.toggle("text-white/80", !active);
      panel?.classList.toggle("active", active);
    }
    document.querySelectorAll(".snav-btn").forEach((btn) => {
      const active = parseInt(btn.dataset.snav, 10) === idx;
      btn.classList.toggle("bg-crimzon/15", active);
      btn.classList.toggle("text-white", active);
      btn.classList.toggle("border", active);
      btn.classList.toggle("border-crimzon/30", active);
      btn.classList.toggle("text-white/65", !active);
      const svg = btn.querySelector("svg");
      if (svg) svg.classList.toggle("text-crimzon", active);
    });
    const rec = document.getElementById("workspaceRecText");
    if (rec) rec.textContent = workspaceRecs[idx];
    const bgImg = document.getElementById("showcaseBgImg");
    if (bgImg) {
      bgImg.src = idx === 0 ? "./media/hero-bg.webp" : "./media/cta-bg.png";
    }
  };

  window.toggleArrivalWaitlist = (perkId) => {
    if (waitlistJoined.has(perkId)) waitlistJoined.delete(perkId);
    else waitlistJoined.add(perkId);
    renderArrivalKitHub();
    if (currentView === "demo") renderAppDemo();
    showToast(waitlistJoined.has(perkId) ? "Unlocked student perks waitlist." : "Removed from waitlist.");
  };

  window.switchDemoScreen = (screen) => { routeIosDemoScreen(screen); };
  window.switchStudentDemoScreen = (screen) => {
    const tabMap = { match: "peers", peers: "peers", chat: "chat", kit: "kit", wallet: "passes" };
    withIosBridge((b) => b.openStudentScreen(tabMap[screen] || "home"));
  };
  window.launchBtdtFromOS = () => { withIosBridge((b) => b.launchBtdt()); };
  window.setDemoMode = (mode) => {
    withIosBridge((b) => {
      if (mode === "mentor") b.openMentorScreen("queue");
      else b.openStudentScreen("home");
    });
  };
  window.simulateMentorPing = () => {
    withIosBridge((b) => b.triggerMentorPing());
    showToast("Simulated mentor reply sent inside the iOS app!");
  };

  window.setFontTheme = (theme) => {
    if (theme === "space") document.documentElement.removeAttribute("data-font-theme");
    else document.documentElement.setAttribute("data-font-theme", theme);
    document.querySelectorAll(".font-switch-btn").forEach((btn) => {
      const isActive = btn.dataset.fontBtn === theme;
      btn.classList.toggle("bg-crimzon/20", isActive);
      btn.classList.toggle("bg-crimzon/15", isActive);
      btn.classList.toggle("text-white", isActive);
      btn.classList.toggle("border-crimzon/50", isActive);
      btn.classList.toggle("border-crimzon", isActive);
      btn.classList.toggle("text-white/60", !isActive);
      btn.classList.toggle("border-transparent", !isActive);
    });
    showToast(`Typography switched to ${theme.charAt(0).toUpperCase() + theme.slice(1)}.`);
  };

  window.togglePricingAirport = () => {
    pricingAirportOn = !pricingAirportOn;
    document.getElementById("airportSwitch")?.setAttribute("aria-checked", String(pricingAirportOn));
    document.getElementById("pLabelLeft")?.classList.toggle("text-white", !pricingAirportOn);
    document.getElementById("pLabelLeft")?.classList.toggle("text-white/60", pricingAirportOn);
    document.getElementById("pLabelRight")?.classList.toggle("text-white", pricingAirportOn);
    document.getElementById("pLabelRight")?.classList.toggle("text-white/60", !pricingAirportOn);
    const add = pricingAirportOn ? 40 : 0;
    document.getElementById("price1").textContent = `€${20 + add}`;
    document.getElementById("price2").textContent = `€${100 + add}`;
    document.getElementById("price3").textContent = pricingAirportOn ? "€140–€160" : "€100–€120";
  };

  window.pickTierAndBrowse = (tierValue) => {
    preferredTier = tierValue;
    openDirectoryView();
    showToast(`Selected €${tierValue + (pricingAirportOn ? 40 : 0)} tier — pick a countryman to book.`);
  };

  window.updateBookingTotal = () => {
    const sel = document.querySelector('input[name="bookTier"]:checked');
    const base = sel ? parseInt(sel.value, 10) : 20;
    const add = document.getElementById("bookAirportAddon")?.checked ? 40 : 0;
    document.getElementById("bookLiveTotal").textContent = `€${base + add}`;
  };

  window.toggleCampusesDropdown = (e) => {
    e.stopPropagation();
    document.getElementById("campusesDropdownMenu")?.classList.toggle("hidden");
  };
  window.closeCampusesDropdown = () => document.getElementById("campusesDropdownMenu")?.classList.add("hidden");
  window.toggleMobileNav = () => document.getElementById("mobileNav")?.classList.toggle("hidden");
  window.toggleFaq = (el) => el.classList.toggle("open");
  window.openModal = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove("hidden");
    el.classList.add("flex");
    const box = el.firstElementChild;
    if (box) {
      box.classList.remove("modal-animate");
      void box.offsetWidth;
      box.classList.add("modal-animate");
    }
  };
  window.closeModal = (id) => { const el = document.getElementById(id); if (el) { el.classList.add("hidden"); el.classList.remove("flex"); } };
  window.openWaitlistModal = (label) => { activeWaitlistLabel = label; document.getElementById("waitlistTarget").textContent = label; window.openModal("waitlistModal"); };
  window.openGDPRModal = () => {
    document.getElementById("gdprAnalytics").checked = gdprPrefs.analytics;
    document.getElementById("gdprPerks").checked = gdprPrefs.perks;
    window.openModal("gdprModal");
  };
  window.toggleGdprLearnMore = () => {
    const body = document.getElementById("gdprLearnMoreBody");
    const chev = document.getElementById("gdprLearnChevron");
    const btn = document.getElementById("gdprLearnMoreBtn");
    if (!body) return;
    const isHidden = body.classList.toggle("hidden");
    if (chev) chev.style.transform = isHidden ? "" : "rotate(180deg)";
    if (btn) btn.setAttribute("aria-expanded", String(!isHidden));
  };
  window.saveGDPR = (mode) => {
    if (mode === "accept") { gdprPrefs.analytics = true; gdprPrefs.perks = true; }
    else if (mode === "reject") { gdprPrefs.analytics = false; gdprPrefs.perks = false; }
    else {
      gdprPrefs.analytics = document.getElementById("gdprAnalytics").checked;
      gdprPrefs.perks = document.getElementById("gdprPerks").checked;
    }
    const banner = document.getElementById("gdprBanner");
    if (banner) {
      banner.classList.add("hidden");
      banner.classList.remove("flex");
    }
    document.getElementById("privacyPill")?.classList.remove("hidden");
    window.closeModal("gdprModal");
    showToast("Privacy & consent preferences saved.");
  };

  function showToast(msg) {
    const t = document.getElementById("toast");
    document.getElementById("toastText").textContent = msg;
    t.classList.remove("hidden");
    requestAnimationFrame(() => t.classList.remove("opacity-0", "translate-y-2"));
    setTimeout(() => {
      t.classList.add("opacity-0", "translate-y-2");
      setTimeout(() => t.classList.add("hidden"), 300);
    }, 3400);
  }
  window.showToast = showToast;

  // Form bindings
  document.getElementById("profileBookingForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!activePeer) return;
    const sel = document.querySelector('input[name="bookTier"]:checked');
    const base = parseInt(sel.value, 10);
    const hasAir = document.getElementById("bookAirportAddon").checked;
    const total = base + (hasAir ? 40 : 0);
    const ref = "#BTDT-" + Math.floor(1000 + Math.random() * 9000);
    const pkgName = sel.dataset.name + (hasAir ? " + Airport Meet & Greet" : "");
    const uniObj = S.universities.find((u) => u.id === activePeer.uniId) || { id: activePeer.uniId, shortName: activePeer.uniShort };

    walletPasses.unshift({
      ref, mentorName: activePeer.name, mentorId: activePeer.id,
      uniId: activePeer.uniId, uniShort: activePeer.uniShort,
      homeIso: activePeer.homeIso, destIso: activePeer.uniIso,
      pkg: pkgName, total, status: "Confirmed",
      pinnedReceipts: [`${activePeer.homeDoc} Notes`, activePeer.first14]
    });
    expandedWalletRef = ref;

    document.getElementById("bpCrest").innerHTML = S.getUniLogo(uniObj, "w-6 h-6");
    document.getElementById("bpRef").textContent = ref;
    document.getElementById("bpMentor").textContent = activePeer.name;
    document.getElementById("bpCampus").textContent = activePeer.uniShort;
    document.getElementById("bpLang").textContent = document.getElementById("bookLang").value;
    document.getElementById("bpPkg").textContent = pkgName;
    document.getElementById("bpTotal").textContent = `€${total}`;
    window.openModal("boardingPassModal");
    showToast(`Boarding Pass ${ref} issued & synced to App Wallet.`);
  });

  document.getElementById("joinMentorForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!document.getElementById("jmPolicyAgree")?.checked) {
      showToast("Please accept the Mentor Safety & Anti-Circumvention policy first.");
      return;
    }
    const name = document.getElementById("jmName").value.trim();
    const role = document.getElementById("jmRole").value;
    const homeCountry = document.getElementById("jmCountry").value;
    const uniId = document.getElementById("jmUni").value;
    const program = document.getElementById("jmProgram").value.trim() || "MSc Candidate";
    const langsRaw = document.getElementById("jmLanguages").value.trim();
    const story = document.getElementById("jmStory").value.trim();

    const cObj = S.homeCountries.find((c) => c.name === homeCountry) || S.homeCountries[0];
    const uObj = S.universities.find((u) => u.id === uniId) || S.universities[0];
    const langs = langsRaw ? langsRaw.split(",").map((x) => x.trim()).filter(Boolean) : cObj.languages;
    const newPeer = {
      id: `custom-${Date.now()}`,
      name,
      initials: name.split(" ").slice(0, 2).map((x) => x[0]).join("").toUpperCase() || "BM",
      avatar: S.AVATAR_POOL[2],
      role, homeCountry: cObj.name, homeIso: cObj.iso, hometown: cObj.cities[0],
      primaryLang: langs[0] || "English", languages: langs,
      uniId: uObj.id, university: uObj.name, uniShort: uObj.shortName, uniCity: uObj.city,
      destCountry: uObj.country, uniIso: uObj.iso, program,
      homeDoc: cObj.docs[0], homeDocsAll: cObj.docs,
      housing: uObj.housing, first14: uObj.first14,
      aura: 95, sessions: 1, negCount: 0,
      metrics: { accuracy: 96, speed: 97, clarity: 94 },
      story: story || `Verified mentor at ${uObj.name} helping incoming students from ${cObj.name} navigate ${cObj.docs[0]} and ${uObj.first14}.`,
      reviews: [{ type: "positive", author: "BTDT Verification Team", date: "Today", score: "96/100", text: `Verified student record at ${uObj.shortName} for incoming peer chats.` }]
    };

    S.peers.unshift(newPeer);
    e.target.reset();
    window.closeModal("joinMentorModal");
    showToast(`${name} published live to the directory!`);
    openPeerProfile(newPeer.id, "all");
  });

  document.getElementById("enrollUniForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("euName").value.trim();
    const city = document.getElementById("euCity").value.trim();
    const country = document.getElementById("euCountryName").value.trim() || "Europe";
    const iso = document.getElementById("euIso").value.trim().slice(0, 2).toUpperCase() || "EU";
    const topic = document.getElementById("euTopic").value.trim() || "Student Dorms & City Registration";
    const newUni = {
      id: "uni-" + Date.now(), name, shortName: name.split(" ").slice(0, 2).join(" "),
      city, country, iso, programs: ["MSc Computer Science", "MA Global Management"],
      housing: `${city} student dorms vs. verified private flats`,
      first14: `${topic}, local SIM & student transit card`
    };
    S.universities.unshift(newUni);
    S.seedUniversityPeers(newUni, S.universities.length + 5);
    populateAllSelects();
    renderCampusSurfaces();
    e.target.reset();
    window.closeModal("enrollUniModal");
    showToast(`${name} enrolled with monogram crest & 28 verified peers.`);
    openDirectoryForUni(name);
  });

  document.getElementById("checklistForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const cName = document.getElementById("clCountry").value;
    const uName = document.getElementById("clUni").value;
    const intake = document.getElementById("clIntake").value;
    const optIn = document.getElementById("clOptIn").checked;
    const cObj = S.homeCountries.find((c) => c.name === cName);
    const uObj = S.universities.find((u) => u.name === uName);
    const res = document.getElementById("clResult");
    res.innerHTML = `<div class="p-4 rounded-[10px] border border-white/15 bg-white/[0.03] text-[12.5px] space-y-2 text-white/85"><p class="font-mono text-[11px] uppercase text-crimzon">Unlocked: [${cObj.iso}] ${cName} -> [${uObj.iso}] ${uObj.shortName} (${intake})</p><p><strong>1. Home Docs:</strong> ${cObj.docs.join(" -> ")}</p><p><strong>2. Housing:</strong> ${uObj.housing}</p><p><strong>3. First 14 Days:</strong> ${uObj.first14}</p></div>`;
    res.classList.remove("hidden");
    showToast(optIn ? "Checklist unlocked + Arrival Kit perks opted in." : "Survival checklist unlocked.");
  });

  document.getElementById("waitlistForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
    window.closeModal("waitlistModal");
    showToast(`Added to early-access waitlist for ${activeWaitlistLabel}.`);
  });

  // Safe click-outside & Esc listeners
  document.addEventListener("click", (e) => {
    if (e.target instanceof Element && !e.target.closest("#campusesDropdownGroup")) {
      window.closeCampusesDropdown();
    }
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      window.closeCampusesDropdown();
      ["boardingPassModal", "checklistModal", "enrollUniModal", "joinMentorModal", "waitlistModal", "gdprModal"].forEach(window.closeModal);
    }
  });

  // 144Hz Delta-Time Smooth Scroll Engine (works cleanly across Landing, Directory, and Profile views)
  const scrollState = {
    targetY: window.scrollY || 0,
    currentY: window.scrollY || 0,
    rafId: 0,
    lastT: 0
  };

  function maxScrollY() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  }

  function jumpScrollTop() {
    if (scrollState.rafId) { cancelAnimationFrame(scrollState.rafId); scrollState.rafId = 0; }
    scrollState.targetY = 0;
    scrollState.currentY = 0;
    window.scrollTo(0, 0);
  }

  function startScrollLoop() {
    if (scrollState.rafId) return;
    scrollState.lastT = performance.now();
    const tick = (now) => {
      const dt = Math.min(0.05, Math.max(0.002, (now - scrollState.lastT) / 1000));
      scrollState.lastT = now;
      scrollState.targetY = Math.max(0, Math.min(maxScrollY(), scrollState.targetY));
      const alpha = 1 - Math.exp(-10.5 * dt);
      scrollState.currentY += (scrollState.targetY - scrollState.currentY) * alpha;
      const diff = Math.abs(scrollState.targetY - scrollState.currentY);
      if (diff < 0.45) {
        scrollState.currentY = scrollState.targetY;
        window.scrollTo(0, Math.round(scrollState.currentY));
        scrollState.rafId = 0;
        return;
      }
      window.scrollTo(0, scrollState.currentY);
      scrollState.rafId = requestAnimationFrame(tick);
    };
    scrollState.rafId = requestAnimationFrame(tick);
  }

  function smoothScrollToY(destY) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, Math.max(0, Math.min(maxScrollY(), destY)));
      return;
    }
    scrollState.currentY = window.scrollY;
    scrollState.targetY = Math.max(0, Math.min(maxScrollY(), destY));
    startScrollLoop();
  }

  function initSmoothScrollPhysics() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    window.addEventListener("scroll", () => {
      if (!scrollState.rafId) {
        scrollState.currentY = window.scrollY;
        scrollState.targetY = window.scrollY;
      }
    }, { passive: true });

    window.addEventListener("wheel", (e) => {
      if (e.ctrlKey || e.metaKey || currentView === "demo") return;
      if (document.querySelector(".fixed.flex[data-lenis-prevent], #gdprModal.flex")) return;
      if (e.target instanceof Element && e.target.closest("[data-lenis-prevent], select, textarea, iframe, #navCampusesList, #workspaceCampusList")) return;

      const unit = e.deltaMode === 1 ? 32 : e.deltaMode === 2 ? window.innerHeight : 1;
      const dy = e.deltaY * unit;
      if (Math.abs(dy) < 0.1) return;

      e.preventDefault();
      if (!scrollState.rafId) {
        scrollState.currentY = window.scrollY;
        scrollState.targetY = window.scrollY;
      }
      scrollState.targetY = Math.max(0, Math.min(maxScrollY(), scrollState.targetY + dy));
      startScrollLoop();
    }, { passive: false });
  }

  function initHeroParallax() {
    const el = document.getElementById("heroParallax");
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let tx = 0, ty = 0, cx = 0, cy = 0, rafId = 0, lastT = performance.now();
    function tick(now) {
      const dt = Math.min(0.05, Math.max(0.004, (now - lastT) / 1000));
      lastT = now;
      const alpha = 1 - Math.exp(-5.2 * dt);
      cx += (tx - cx) * alpha;
      cy += (ty - cy) * alpha;
      el.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
      if (Math.abs(tx - cx) > 0.04 || Math.abs(ty - cy) > 0.04) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    }
    window.addEventListener("mousemove", (e) => {
      tx = ((e.clientX / window.innerWidth) - 0.5) * -22;
      ty = ((e.clientY / window.innerHeight) - 0.5) * -14;
      if (!rafId) {
        lastT = performance.now();
        rafId = requestAnimationFrame(tick);
      }
    }, { passive: true });
  }

  function initScrollReveals() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.01, rootMargin: "0px 0px 80px 0px" });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  }

  // Boot
  initHeroHeadline();
  populateAllSelects();
  renderCampusSurfaces();
  renderArrivalKitHub();
  initScrollReveals();
  initHeroParallax();
  initSmoothScrollPhysics();
})();
