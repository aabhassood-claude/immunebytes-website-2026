// ============================================================
// SERVICE PAGES — Orchestrator + Page Switcher
// All 22 services (§§5–7, 8–14 Web3 drill-downs, 15–18 Web2,
// 19–22 AI, 23–26 Consultancy) are wired here from
// service-data-1.jsx and service-data-2.jsx.
// ============================================================

// ============================================================
// PAGE ORCHESTRATORS — handle BOTH data shapes:
//   1) Legacy SCA_PAGE/BPT_PAGE shape (with .intro / .closing / .failures)
//   2) data-1/data-2 shape (.failureModes, no .intro, .prose array)
// ============================================================

function StructuredServicePage({ data }) {
  const failuresData = data.failures || data.failureModes;
  return (
    <div className="bg-white">
      <Breadcrumb items={data.breadcrumb} />
      <PageHero {...data.hero} />
      {data.intro && (
        <ProseSection data={{
          bg: data.intro.bg, label: data.intro.label, title: data.intro.title,
          paragraphs: data.intro.paragraphs,
        }} />
      )}
      {data.coverage && (data.coverage.detailed
        ? <CoverageListDetailed data={data.coverage} />
        : <CoverageList data={data.coverage} />)}
      {failuresData && <FailureModes data={failuresData} />}
      {data.process && <ProcessSection data={data.process} />}
      {data.tools && <ToolsStandards data={data.tools} />}
      {data.deliverables && <Deliverables data={data.deliverables} />}
      {data.caseStudy && <PageCaseStudy data={data.caseStudy} />}
      <CTA />
      {data.faq && <FAQAccordion data={data.faq} />}
    </div>
  );
}

function ProseServicePage({ data }) {
  // Support BOTH shapes: legacy {intro, closing} OR data-1 {prose: [...]}
  return (
    <div className="bg-white">
      <Breadcrumb items={data.breadcrumb} />
      <PageHero {...data.hero} />
      {data.intro && <ProseSection data={data.intro} />}
      {data.coverage && (data.coverage.detailed
        ? <CoverageListDetailed data={data.coverage} />
        : <CoverageList data={data.coverage} />)}
      {data.process && <ProcessSection data={data.process} />}
      {data.closing && <ProseSection data={data.closing} />}
      {data.prose && data.prose.map((section, i) => (
        <ProseSection key={i} data={section} />
      ))}
      {data.caseStudy && <PageCaseStudy data={data.caseStudy} />}
      <CTA />
      {data.faq && <FAQAccordion data={data.faq} />}
    </div>
  );
}

// ============================================================
// PAGE REGISTRY — every service page wired to its data object
// ============================================================
function buildRegistry() {
  // Defensive: data files attach to window — read at runtime so this
  // file works regardless of script load order.
  const W = window;
  return [
    { id: "home",                label: "Landing Page",                 section: "§4",  template: "home",       data: null,                  pillar: "Home" },

    // §§5–7 Smart Contract Audit
    { id: "smart-contract",      label: "Smart Contract Audit",         section: "§5",  template: "structured", data: W.PAGE_SCA,            pillar: "Web3 Security" },
    { id: "by-chain",            label: "By Chain",                     section: "§6",  template: "structured", data: W.PAGE_BY_CHAIN,       pillar: "Web3 Security" },
    { id: "by-project-type",     label: "By Project Type",              section: "§7",  template: "prose",      data: W.PAGE_BY_PROJECT_TYPE, pillar: "Web3 Security" },

    // §§8–14 Other Web3
    { id: "protocol",            label: "Protocol & Infra Audit",       section: "§8",  template: "structured", data: W.PAGE_PROTOCOL,       pillar: "Web3 Security" },
    { id: "l1-l2",               label: "L1 / L2 Audit",                section: "§9",  template: "structured", data: W.PAGE_L1_L2,          pillar: "Web3 Security" },
    { id: "consensus",           label: "Consensus Frameworks",         section: "§10", template: "structured", data: W.PAGE_CONSENSUS,      pillar: "Web3 Security" },
    { id: "tokenomics",          label: "Tokenomics Audit",             section: "§11", template: "structured", data: W.PAGE_TOKENOMICS,     pillar: "Web3 Security" },
    { id: "wallet",              label: "Wallet Security",              section: "§12", template: "structured", data: W.PAGE_WALLET,         pillar: "Web3 Security" },
    { id: "dapp-integration",    label: "Dapp Integration",             section: "§13", template: "structured", data: W.PAGE_DAPP_INTEGRATION, pillar: "Web3 Security" },
    { id: "extension",           label: "Wallet Extension Audit",       section: "§14", template: "structured", data: W.PAGE_WALLET_EXTENSION, pillar: "Web3 Security" },

    // §§15–18 Web2
    { id: "pentest",             label: "Penetration Testing",          section: "§15", template: "structured", data: W.PAGE_PENTEST,        pillar: "Web2 Security" },
    { id: "web-app",             label: "Web Application Testing",      section: "§16", template: "structured", data: W.PAGE_WEB_APP,        pillar: "Web2 Security" },
    { id: "mobile",              label: "Mobile App Testing",           section: "§17", template: "structured", data: W.PAGE_MOBILE,         pillar: "Web2 Security" },
    { id: "desktop",             label: "Desktop App Testing",          section: "§18", template: "structured", data: W.PAGE_DESKTOP,        pillar: "Web2 Security" },

    // §§19–22 AI
    { id: "ai-agent",            label: "AI Agent Audit",               section: "§19", template: "structured", data: W.PAGE_AI_AGENT,       pillar: "AI Security" },
    { id: "chatbot",             label: "Chatbot Security",             section: "§20", template: "structured", data: W.PAGE_CHATBOT,        pillar: "AI Security" },
    { id: "llm",                 label: "LLM Integration Audit",        section: "§21", template: "structured", data: W.PAGE_LLM,            pillar: "AI Security" },
    { id: "automation",          label: "Automation Workflow",          section: "§22", template: "structured", data: W.PAGE_AUTOMATION,     pillar: "AI Security" },

    // §§23–26 Consultancy
    { id: "shift-left",          label: "Shift-Left Security",          section: "§23", template: "structured", data: W.PAGE_SHIFT_LEFT,     pillar: "Consultancy" },
    { id: "test-fuzz",           label: "Test/Fuzz-Driven Dev",         section: "§24", template: "structured", data: W.PAGE_TEST_FUZZ,      pillar: "Consultancy" },
    { id: "pre-audit",           label: "Pre-Audit Dynamic Testing",    section: "§25", template: "structured", data: W.PAGE_PRE_AUDIT,      pillar: "Consultancy" },
    { id: "research",            label: "Security Research",            section: "§26", template: "structured", data: W.PAGE_RESEARCH,       pillar: "Consultancy" },
  ];
}

// Lazily-resolved registry — built first time it's accessed.
let _PAGE_REGISTRY_CACHE = null;
function getRegistry() {
  if (!_PAGE_REGISTRY_CACHE) _PAGE_REGISTRY_CACHE = buildRegistry();
  return _PAGE_REGISTRY_CACHE;
}

// ============================================================
// PAGE SWITCHER — collapsible left-rail with grouped sections
// ============================================================
function PageSwitcher({ pageId, setPageId, isOpen, setIsOpen }) {
  const registry = getRegistry();
  const current = registry.find((p) => p.id === pageId);

  // Group entries by pillar for display
  const groups = [];
  registry.forEach((p) => {
    let g = groups.find((x) => x.pillar === p.pillar);
    if (!g) { g = { pillar: p.pillar, items: [] }; groups.push(g); }
    g.items.push(p);
  });

  return (
    <>
      {/* Floating toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 left-5 z-[120] h-11 px-4 bg-zinc-900 text-white border border-zinc-700 hover:border-immune-green/50 transition-colors flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] shadow-2xl rounded-md"
        aria-label="Toggle page switcher"
      >
        <span className="text-immune-green">›</span>
        <span>{isOpen ? "hide_pages" : "view_pages"}</span>
        <span className="text-zinc-500">[{current ? current.section : "—"}]</span>
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-20 left-5 z-[120] w-[360px] max-h-[78vh] bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl flex flex-col overflow-hidden transition-all ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}`}
      >
        <div className="flex items-center justify-between px-4 h-11 border-b border-zinc-800 bg-zinc-950 shrink-0">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400">
            <span className="text-immune-green">$</span>
            <span>page_navigator</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-500">{registry.length - 1} pages</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white text-[14px]">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-1">
          {groups.map((g) => (
            <div key={g.pillar} className="py-1">
              <div className="px-4 pt-3 pb-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                {g.pillar === "Home" ? "" : g.pillar}
              </div>
              {g.items.map((p) => {
                const active = p.id === pageId;
                const hasData = p.template === "home" || !!p.data;
                return (
                  <button
                    key={p.id}
                    onClick={() => { setPageId(p.id); setIsOpen(false); window.scrollTo({ top: 0 }); }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-left transition-colors ${active ? "bg-immune-green/10" : "hover:bg-zinc-800"}`}
                  >
                    <span className={`font-mono text-[10px] w-9 shrink-0 ${active ? "text-immune-green" : "text-zinc-500"}`}>
                      {p.section}
                    </span>
                    <span className={`flex-1 font-display text-[13.5px] tracking-tight ${active ? "text-white font-medium" : "text-zinc-300"}`}>
                      {p.label}
                    </span>
                    <span className={`font-mono text-[9.5px] uppercase tracking-[0.14em] ${active ? "text-immune-green" : hasData ? "text-zinc-600" : "text-zinc-700"}`}>
                      {active ? "● live" : hasData ? "✓" : "—"}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div className="px-4 py-3 border-t border-zinc-800 bg-zinc-950 font-mono text-[10.5px] text-zinc-500 leading-[1.5] shrink-0">
          <span className="text-immune-green">›</span> All 22 service pages wired. Click any to render.
        </div>
      </div>
    </>
  );
}

Object.assign(window, {
  StructuredServicePage, ProseServicePage, PageSwitcher, getRegistry,
});
