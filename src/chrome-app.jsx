// ============================================================
// CHROME-APP — orchestrates the 7 chrome / top-level pages
// behind a page-switcher (same UX as service-app).
// ============================================================

function buildChromeRegistry() {
  return [
    { id: "audit",       label: "Audit Leaderboard",   section: "§27", Comp: window.AuditLeaderboardPage },
    { id: "clientele",   label: "Clientele",           section: "§28", Comp: window.ClientelePage },
    { id: "about",       label: "About",               section: "§29", Comp: window.AboutPage },
    { id: "engagement",  label: "Engagement Models",   section: "§30", Comp: window.EngagementPage },
    { id: "pricing",     label: "Pricing Calculator",  section: "§31", Comp: window.PricingCalculatorPage },
    { id: "blog",        label: "Blog Index",          section: "§32", Comp: window.BlogPage },
    { id: "contact",     label: "Contact Us",          section: "§33", Comp: window.ContactPage },
  ];
}

function ChromePageSwitcher({ pageId, setPageId }) {
  const [open, setOpen] = useState(false);
  const reg = buildChromeRegistry();
  const current = reg.find((p) => p.id === pageId);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 left-5 z-[60] inline-flex items-center gap-2 h-11 px-4 rounded-full bg-zinc-900 text-white shadow-2xl shadow-black/40 ring-1 ring-white/10 hover:bg-zinc-800 transition"
      >
        <LIcon name="LayoutGrid" size={15} strokeWidth={2.25} />
        <span className="font-mono text-[12px]">
          <span className="text-immune-green">$</span> chrome:
        </span>
        <span className="font-display text-[13px] font-semibold">{current?.label}</span>
        <LIcon name={open ? "ChevronDown" : "ChevronUp"} size={14} className="opacity-60" />
      </button>

      {open && (
        <div className="fixed bottom-20 left-5 z-[60] w-[300px] rounded-xl bg-zinc-950 ring-1 ring-white/10 shadow-2xl shadow-black/60 overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10">
            <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">Chrome Pages</div>
            <div className="text-white text-[13px] font-display font-semibold mt-0.5">Top-level / shared pages</div>
          </div>
          <ul className="max-h-[60vh] overflow-y-auto py-1.5">
            {reg.map((p) => {
              const active = p.id === pageId;
              return (
                <li key={p.id}>
                  <button
                    onClick={() => { setPageId(p.id); setOpen(false); window.scrollTo({ top: 0 }); }}
                    className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition ${
                      active ? "bg-immune-green/10" : "hover:bg-white/5"
                    }`}
                  >
                    <span className={`font-mono text-[10px] w-9 shrink-0 ${active ? "text-immune-green" : "text-zinc-500"}`}>{p.section}</span>
                    <span className={`font-display text-[13.5px] flex-1 ${active ? "text-immune-green" : "text-zinc-200"}`}>{p.label}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-immune-green" />}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="px-4 py-2.5 border-t border-white/10 flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
            <a href="Home.html" className="hover:text-white transition">→ Home.html</a>
            <span>·</span>
            <a href="Service Pages.html" className="hover:text-white transition">→ Service Pages.html</a>
          </div>
        </div>
      )}
    </>
  );
}

function ChromeApp() {
  const [pageId, setPageId] = useState(() => window.getInitialPageId("audit"));
  const reg = buildChromeRegistry();
  const meta = reg.find((p) => p.id === pageId) || reg[0];
  const Body = meta.Comp;

  // Expose setter so nav-router can switch pages without a full reload
  useEffect(() => {
    window.__navSetPage = (id) => setPageId(id);
    return () => { window.__navSetPage = null; };
  }, []);

  // Re-arm reveal classes + sync URL
  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    window.setPageInUrl && window.setPageInUrl(pageId);
  }, [pageId]);

  return (
    <div className="min-h-screen bg-black">
      <Header activePath={`/${pageId}`} />
      {Body ? <Body /> : <main className="bg-white py-32 text-center text-zinc-500"><p className="font-mono">Page not found.</p></main>}
      <Footer />
      <ChromePageSwitcher pageId={pageId} setPageId={setPageId} />
    </div>
  );
}

const chromeRoot = ReactDOM.createRoot(document.getElementById("root"));
chromeRoot.render(<ChromeApp />);
