// ============================================================
// SERVICE-APP — orchestrates all service pages via PAGE_REGISTRY
// ============================================================
function ServiceApp() {
  const [pageId, setPageId] = useState(() => window.getInitialPageId("smart-contract"));
  const [switcherOpen, setSwitcherOpen] = useState(false);

  // Expose setter so nav-router can switch pages without a full reload
  useEffect(() => {
    window.__navSetPage = (id) => setPageId(id);
    return () => { window.__navSetPage = null; };
  }, []);

  // Re-trigger reveal on page change + sync URL
  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    window.setPageInUrl && window.setPageInUrl(pageId);
  }, [pageId]);

  const registry = getRegistry();
  const meta = registry.find((p) => p.id === pageId) || registry[0];

  let body;
  if (meta.template === "home") {
    body = (
      <main>
        <Hero />
        <TrustedBy />
        <Impact />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Insights />
        <CTA />
      </main>
    );
  } else if (meta.data && meta.template === "structured") {
    body = <main><StructuredServicePage data={meta.data} /></main>;
  } else if (meta.data && meta.template === "prose") {
    body = <main><ProseServicePage data={meta.data} /></main>;
  } else {
    // Fallback shouldn't happen — every entry has data
    body = (
      <main>
        <div className="bg-white py-32 text-center text-zinc-500 pt-40">
          <p className="font-mono text-sm">Page data not found for: {pageId}</p>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header activePath={`/${pageId}`} />
      {body}
      <Footer />
    </div>
  );
}

const serviceRoot = ReactDOM.createRoot(document.getElementById("root"));
serviceRoot.render(<ServiceApp />);
