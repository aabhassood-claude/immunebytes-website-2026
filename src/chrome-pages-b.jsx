// ============================================================
// CHROME-PAGES-B — §30 Engagement, §31 Pricing Calculator,
//                  §32 Blog Index, §33 Contact
// ============================================================

// =========================================================
// §30 — ENGAGEMENT MODELS
// =========================================================
function EngagementPage() {
  const cards = window.DATA_ENGAGEMENT;
  const help = window.DATA_ENGAGEMENT_HELP;
  return (
    <main className="bg-white">
      <PlainPageHeader
        title={<>Pick the engagement <em className="font-display italic font-light text-immune-green-deep">that fits</em>.</>}
        trail={["Home", "Engagement Models"]}
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <div className="grid md:grid-cols-3 gap-5">
            {cards.map((c) => <EngagementCard key={c.title} card={c} />)}
          </div>
        </div>
      </section>

      {/* §30.5 Need help deciding */}
      <section className="bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <div className="rounded-2xl bg-zinc-950 text-white p-8 md:p-12 ring-1 ring-zinc-900 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-immune-green/15 blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-8">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green">// help</div>
                <h2 className="mt-2 font-display text-[28px] md:text-[36px] leading-[1.06] tracking-[-0.02em] font-medium">{help.title}?</h2>
                <p className="mt-3 text-zinc-300 text-[15px] max-w-2xl leading-relaxed">{help.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {help.bestFor.map((b) => (
                    <span key={b} className="inline-flex items-center gap-2 px-3 h-8 rounded-full bg-white/5 ring-1 ring-white/10 text-[12.5px] text-zinc-200">
                      <LIcon name="Check" size={12} className="text-immune-green" /> {b}
                    </span>
                  ))}
                </div>
              </div>
              <a href={help.href} className="self-start inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-immune-green text-zinc-950 font-display font-semibold text-[14.5px] hover:bg-immune-green-bright transition">
                <LIcon name="Calculator" size={15} /> {help.cta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function EngagementCard({ card }) {
  return (
    <article className="group rounded-2xl bg-white ring-1 ring-zinc-200 hover:ring-immune-green/40 hover:-translate-y-1 transition p-7 md:p-8 flex flex-col">
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green-deep">// model</div>
      <h3 className="mt-2 font-display text-[24px] md:text-[26px] tracking-[-0.018em] font-medium text-zinc-900">{card.title}</h3>
      <p className="mt-3 text-[14.5px] text-zinc-600 leading-relaxed">{card.desc}</p>

      <div className="mt-6 pt-6 border-t border-zinc-100">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-zinc-500 mb-3">Best for</div>
        <ul className="space-y-2">
          {card.bestFor.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-zinc-800">
              <LIcon name="Check" size={14} className="text-immune-green-deep mt-0.5 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <a href={card.href} className="mt-7 inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-zinc-950 text-white font-display font-semibold text-[13.5px] hover:bg-immune-green-deep transition">
        {card.cta} <LIcon name="ArrowRight" size={14} />
      </a>
    </article>
  );
}

// =========================================================
// §31 — PRICING CALCULATOR
// =========================================================
function PricingCalculatorPage() {
  const D = window.DATA_CALCULATOR;
  const [step, setStep] = useState(0);
  const [service, setService] = useState(null);
  const [subService, setSubService] = useState(null);
  const [complexity, setComplexity] = useState(D.complexity[1]);
  const [linesOfCode, setLinesOfCode] = useState(2500);
  const [depth, setDepth] = useState("blackbox");
  const [docs, setDocs] = useState("partial");
  const [history, setHistory] = useState("first");
  const [comms, setComms] = useState("Email");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const next = () => setStep((s) => Math.min(s + 1, D.steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <main className="bg-white">
      <PlainPageHeader
        title={<>Pricing <em className="font-display italic font-light text-immune-green-deep">Calculator</em>.</>}
        trail={["Home", "Pricing Calculator"]}
      />

      <section className="bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-10 md:py-14">
          <WizardStepper steps={D.steps} current={step} />

          <div className="mt-8 rounded-2xl bg-white ring-1 ring-zinc-200 p-6 md:p-8">
            {/* Step 1 — Service */}
            {step === 0 && (
              <div>
                <h2 className="font-display text-[22px] md:text-[26px] tracking-[-0.018em] font-medium text-zinc-900">Choose your service category</h2>
                <p className="mt-1 text-[13.5px] text-zinc-500">Pick what you want priced. We'll narrow down the questions in the next steps.</p>
                <div className="mt-6 grid md:grid-cols-3 gap-3">
                  {D.services.map((s) => (
                    <RadioCard
                      key={s.id}
                      icon={<LIcon name={s.icon} size={18} />}
                      title={s.title}
                      desc={s.desc}
                      selected={service === s.id}
                      onClick={() => { setService(s.id); setSubService(null); }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 — Scope (sub-service) */}
            {step === 1 && (
              <div>
                <h2 className="font-display text-[22px] md:text-[26px] tracking-[-0.018em] font-medium text-zinc-900">Refine your scope</h2>
                <p className="mt-1 text-[13.5px] text-zinc-500">What specifically should we estimate?</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {(D.subServiceMap[service] || []).map((s) => (
                    <RadioCard key={s} title={s} selected={subService === s} onClick={() => setSubService(s)} size="sm" />
                  ))}
                </div>
              </div>
            )}

            {/* Step 3 — Details */}
            {step === 2 && (
              <div className="space-y-5">
                <h2 className="font-display text-[22px] md:text-[26px] tracking-[-0.018em] font-medium text-zinc-900">Project details</h2>

                <FormFieldGroup title="Application complexity">
                  <SegmentedSelect options={D.complexity} value={complexity} onChange={setComplexity} />
                </FormFieldGroup>

                <FormFieldGroup title="Lines of code (estimated)" optional>
                  <div className="flex items-center gap-4">
                    <RangeSlider value={linesOfCode} onChange={setLinesOfCode} min={500} max={20000} />
                    <div className="font-mono text-[13px] text-zinc-700 min-w-[80px] text-right">{linesOfCode.toLocaleString()}</div>
                  </div>
                </FormFieldGroup>

                <FormFieldGroup title="Testing depth">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {D.testingDepth.map((o) => (
                      <RadioCard key={o.id} title={o.title} hint={o.hint} selected={depth === o.id} onClick={() => setDepth(o.id)} size="sm" />
                    ))}
                  </div>
                </FormFieldGroup>

                <FormFieldGroup title="Documentation status">
                  <div className="grid md:grid-cols-3 gap-3">
                    {D.documentationOptions.map((o) => (
                      <RadioCard key={o.id} title={o.title} hint={o.hint} tone={o.tone} selected={docs === o.id} onClick={() => setDocs(o.id)} size="sm" />
                    ))}
                  </div>
                </FormFieldGroup>

                <FormFieldGroup title="Audit history">
                  <div className="grid md:grid-cols-3 gap-3">
                    {D.auditHistoryOptions.map((o) => (
                      <RadioCard key={o.id} title={o.title} hint={o.hint} tone={o.tone} selected={history === o.id} onClick={() => setHistory(o.id)} size="sm" />
                    ))}
                  </div>
                </FormFieldGroup>
              </div>
            )}

            {/* Step 4 — Estimate */}
            {step === 3 && (
              <EstimateView
                service={service} subService={subService} complexity={complexity} linesOfCode={linesOfCode}
                depth={depth} docs={docs} history={history} comms={comms} setComms={setComms}
                name={name} setName={setName} email={email} setEmail={setEmail} D={D}
              />
            )}

            {/* Nav */}
            <div className="mt-8 flex items-center justify-between pt-6 border-t border-zinc-100">
              <button
                onClick={back}
                disabled={step === 0}
                className="inline-flex items-center gap-1.5 h-10 px-4 rounded-lg ring-1 ring-zinc-200 text-zinc-700 font-display text-[13.5px] font-medium disabled:opacity-40 hover:bg-zinc-50"
              >
                <LIcon name="ArrowLeft" size={14} /> Back
              </button>
              {step < D.steps.length - 1 ? (
                <button
                  onClick={next}
                  className="inline-flex items-center gap-1.5 h-10 px-5 rounded-lg bg-immune-green-deep text-white font-display text-[13.5px] font-semibold hover:bg-immune-green-bright hover:text-zinc-950 transition"
                >
                  Continue <LIcon name="ArrowRight" size={14} />
                </button>
              ) : (
                <button className="inline-flex items-center gap-1.5 h-10 px-5 rounded-lg bg-immune-green-deep text-white font-display text-[13.5px] font-semibold hover:bg-immune-green-bright hover:text-zinc-950 transition">
                  Submit Inquiry <LIcon name="Send" size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function EstimateView({ service, subService, complexity, linesOfCode, depth, docs, history, comms, setComms, name, setName, email, setEmail, D }) {
  // Trivial demo math — base rate by service, multiplied by complexity index, modified by docs/history.
  const base = service === "web3" ? 18000 : service === "ai" ? 16000 : 9500;
  const cIdx = Math.max(0, D.complexity.indexOf(complexity));
  const cMult = 1 + cIdx * 0.18;
  const docMult = docs === "comprehensive" ? 0.95 : docs === "limited" ? 1.10 : 1.00;
  const histMult = history === "loyal" ? 0.70 : history === "reaudit" ? 0.85 : 1.00;
  const depthMult = depth === "blackbox-arch" ? 1.20 : 1.00;
  const locMult = 1 + Math.max(0, (linesOfCode - 1500)) / 25000;

  const lo = Math.round(base * cMult * docMult * histMult * depthMult * locMult);
  const hi = Math.round(lo * 1.45);
  const days = 8 + cIdx * 4 + (depth === "blackbox-arch" ? 4 : 0);

  return (
    <div>
      <div className="grid md:grid-cols-[1fr_320px] gap-6">
        {/* Estimate */}
        <div className="rounded-xl bg-zinc-950 text-white p-6 md:p-7 relative overflow-hidden ring-1 ring-zinc-900">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-immune-green/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green">// estimate</div>
            <div className="mt-3 font-display text-[40px] md:text-[52px] leading-none tracking-[-0.025em] font-medium">
              ${(lo / 1000).toFixed(1)}k <span className="text-zinc-500">–</span> ${(hi / 1000).toFixed(1)}k
            </div>
            <div className="mt-2 font-mono text-[12px] text-zinc-400">USD · approx. {days} business days</div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-[12.5px]">
              <RecapRow k="Service"     v={service ? D.services.find((s) => s.id === service)?.title : "—"} />
              <RecapRow k="Scope"       v={subService || "—"} />
              <RecapRow k="Complexity"  v={complexity} />
              <RecapRow k="LOC"         v={linesOfCode.toLocaleString()} />
              <RecapRow k="Depth"       v={depth === "blackbox-arch" ? "+ Architecture" : "Black-box"} />
              <RecapRow k="History"     v={history === "loyal" ? "Loyalty −30%" : history === "reaudit" ? "Re-audit −15%" : "First-time"} />
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-5 md:p-6">
          <h3 className="font-display text-[16px] font-semibold text-zinc-900">Lock in this quote</h3>
          <p className="mt-1 text-[12.5px] text-zinc-500">We'll review your inputs and get back within one business day.</p>
          <div className="mt-4 space-y-3">
            <TextInput label="Your name" required placeholder="Jane Cho" value={name} onChange={setName} />
            <TextInput label="Email" type="email" required placeholder="jane@example.com" value={email} onChange={setEmail} />
            <SelectInput label="Preferred contact" options={D.commsOptions} value={comms} onChange={setComms} />
          </div>
        </div>
      </div>
    </div>
  );
}

function RecapRow({ k, v }) {
  return (
    <div className="rounded-md bg-white/5 ring-1 ring-white/10 px-3 py-2">
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{k}</div>
      <div className="font-display font-medium text-[13px] text-white truncate">{v}</div>
    </div>
  );
}

// =========================================================
// §32 — BLOG INDEX
// =========================================================
function BlogPage() {
  const D = window.DATA_BLOG;
  const [cat, setCat] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = D.posts.filter((p) => {
    if (cat !== "All" && p.category !== cat) return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <main className="bg-white">
      <PlainPageHeader
        title={<>Field notes from the <em className="font-display italic font-light text-immune-green-deep">audit floor</em>.</>}
        trail={["Home", "Blog"]}
      />

      <section className="bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category chips */}
            <div className="flex flex-wrap items-center gap-2">
              {D.categories.map((c) => {
                const active = c === cat;
                return (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`h-8 px-3.5 rounded-full text-[12.5px] font-medium transition ring-1 ${
                      active ? "bg-immune-green-deep text-white ring-immune-green-deep" : "bg-white text-zinc-700 ring-zinc-200 hover:ring-zinc-400"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
            {/* Search */}
            <div className="relative">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search posts…"
                className="h-10 w-72 rounded-lg border border-zinc-200 bg-white pl-9 pr-3 text-[13px] text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-immune-green/40 focus:border-immune-green"
              />
              <LIcon name="Search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-16">
            <FeaturedPost post={featured} />
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p, i) => <PostCard key={i} post={p} />)}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex items-center justify-center gap-1">
            <PageBtn label={<LIcon name="ChevronLeft" size={14} />} />
            <PageBtn label="1" active />
            <PageBtn label="2" />
            <PageBtn label="3" />
            <PageBtn label={String(D.pagesTotal)} />
            <PageBtn label={<LIcon name="ChevronRight" size={14} />} />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeaturedPost({ post }) {
  return (
    <article className="grid md:grid-cols-[1.4fr_1fr] gap-8 rounded-2xl ring-1 ring-zinc-200 overflow-hidden bg-white hover:ring-immune-green/40 transition">
      <PostHeroArt topic={post.topic} large />
      <div className="p-7 md:p-9 flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 h-6 rounded-full bg-immune-green/10 text-immune-green-deep text-[11px] font-medium uppercase tracking-[0.12em]">{post.category}</span>
          <span className="font-mono text-[11px] text-zinc-500">{post.date}</span>
        </div>
        <h2 className="mt-4 font-display text-[28px] md:text-[34px] leading-[1.08] tracking-[-0.02em] font-medium text-zinc-900 text-balance">{post.title}</h2>
        <p className="mt-3 text-[14.5px] text-zinc-600 leading-relaxed">{post.excerpt}</p>
        <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-immune-green-deep hover:underline">
          Read article <LIcon name="ArrowRight" size={14} />
        </a>
      </div>
    </article>
  );
}

function PostCard({ post }) {
  return (
    <article className="group rounded-2xl ring-1 ring-zinc-200 bg-white overflow-hidden hover:ring-immune-green/40 hover:-translate-y-0.5 transition flex flex-col">
      <PostHeroArt topic={post.topic} />
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 h-5 rounded-full bg-zinc-100 text-zinc-700 text-[10.5px] font-medium uppercase tracking-[0.12em]">{post.category}</span>
          <span className="font-mono text-[10.5px] text-zinc-500">{post.date}</span>
        </div>
        <h3 className="mt-3 font-display text-[18px] leading-[1.18] tracking-[-0.012em] font-semibold text-zinc-900 text-balance line-clamp-3">{post.title}</h3>
        <p className="mt-2 text-[13px] text-zinc-600 leading-relaxed line-clamp-3">{post.excerpt}</p>
        <a href="#" className="mt-auto pt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-immune-green-deep hover:underline">
          Read more <LIcon name="ArrowRight" size={13} />
        </a>
      </div>
    </article>
  );
}

// Generative cover art (deterministic based on topic) — avoids AI-slop image placeholders.
function PostHeroArt({ topic, large }) {
  // Hash topic to pick a palette and pattern
  const hash = topic.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const palettes = [
    ["#0a3d24", "#74BF00", "#F5C518"],
    ["#1a1a2e", "#74BF00", "#3b82f6"],
    ["#2D1B4E", "#a78bfa", "#74BF00"],
    ["#0a1f24", "#06b6d4", "#74BF00"],
    ["#1f1411", "#fb923c", "#F5C518"],
  ];
  const p = palettes[hash % palettes.length];
  const variant = hash % 4;

  return (
    <div className={`relative overflow-hidden ${large ? "min-h-[280px] md:min-h-[100%]" : "aspect-[16/10]"}`} style={{ background: p[0] }}>
      {/* Variant patterns */}
      {variant === 0 && <CircuitPattern colors={p} />}
      {variant === 1 && <RingsPattern colors={p} />}
      {variant === 2 && <GridPattern colors={p} />}
      {variant === 3 && <NoiseBars colors={p} />}

      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
        <span className="inline-flex items-center px-2.5 h-6 rounded-md bg-black/40 backdrop-blur text-white text-[10.5px] font-mono uppercase tracking-[0.16em] ring-1 ring-white/15">
          {topic}
        </span>
        <span className="font-mono text-[10.5px] text-white/70">// 0x{(hash * 91).toString(16).slice(0, 6).toUpperCase()}</span>
      </div>
    </div>
  );
}
function CircuitPattern({ colors }) {
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 240">
      <g stroke={colors[1]} strokeWidth="1.2" fill="none" opacity="0.55">
        {Array.from({ length: 8 }).map((_, i) => (
          <path key={i} d={`M${i * 50} 0 L${i * 50} ${60 + i * 10} L${i * 50 + 40} ${60 + i * 10} L${i * 50 + 40} 240`} />
        ))}
      </g>
      <g fill={colors[2]}>
        {Array.from({ length: 12 }).map((_, i) => (
          <circle key={i} cx={(i * 33) % 400} cy={((i * 47) % 220) + 10} r={2} opacity="0.7" />
        ))}
      </g>
    </svg>
  );
}
function RingsPattern({ colors }) {
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 240">
      <g fill="none" stroke={colors[1]} strokeWidth="1" opacity="0.55">
        {Array.from({ length: 14 }).map((_, i) => (<circle key={i} cx="320" cy="60" r={20 + i * 18} />))}
      </g>
      <circle cx="320" cy="60" r="10" fill={colors[2]} opacity="0.85" />
    </svg>
  );
}
function GridPattern({ colors }) {
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 240">
      <defs>
        <pattern id="gp" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0 L0 0 0 20" stroke={colors[1]} strokeWidth="0.7" fill="none" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="400" height="240" fill="url(#gp)" />
      <rect x="60" y="60" width="120" height="120" fill={colors[2]} opacity="0.18" />
      <rect x="200" y="40" width="80" height="80" fill={colors[1]} opacity="0.22" />
    </svg>
  );
}
function NoiseBars({ colors }) {
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 240">
      {Array.from({ length: 60 }).map((_, i) => (
        <rect key={i} x={i * 7} y={120 - ((i * 13) % 100)} width="3" height={((i * 17) % 110) + 20} fill={i % 3 ? colors[1] : colors[2]} opacity="0.7" />
      ))}
    </svg>
  );
}

// =========================================================
// §33 — CONTACT
// =========================================================
function ContactPage() {
  const D = window.DATA_CONTACT;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <main className="bg-white">
      <PlainPageHeader
        title={<>Talk to a <em className="font-display italic font-light text-immune-green-deep">human auditor</em>.</>}
        trail={["Home", "Contact"]}
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-start">
          {/* Left — get in touch panel */}
          <div className="rounded-2xl bg-zinc-950 text-white p-8 md:p-10 ring-1 ring-zinc-900 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-immune-green/15 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green">$ ./contact --start</div>
              <h2 className="mt-3 font-display text-[30px] md:text-[36px] leading-[1.06] tracking-[-0.02em] font-medium">{D.getInTouch.title}</h2>
              <p className="mt-3 text-zinc-300 text-[15px] leading-relaxed max-w-xl">{D.getInTouch.sub}</p>

              <div className="mt-8 space-y-4">
                <ContactRow icon="Building2" label="Company"  value={D.getInTouch.company} />
                <ContactRow icon="MapPin"    label="HQ"       value={D.getInTouch.address} />
                <ContactRow icon="Mail"      label="Email"    value={D.getInTouch.email} link={`mailto:${D.getInTouch.email}`} />
                <ContactRow icon="Phone"     label="Phone"    value={D.getInTouch.phone} link={`tel:${D.getInTouch.phone.replace(/\s+/g, "")}`} />
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-3">
                {["Linkedin","Twitter","Github","Youtube"].map((s) => (
                  <a key={s} href="#" className="w-10 h-10 rounded-lg ring-1 ring-white/15 hover:ring-immune-green hover:bg-immune-green/10 grid place-items-center transition">
                    <LIcon name={s} size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-2xl ring-1 ring-zinc-200 bg-white p-7 md:p-9">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green-deep">// query.form</div>
            <h2 className="mt-2 font-display text-[26px] md:text-[30px] tracking-[-0.018em] font-medium text-zinc-900">{D.form.title}</h2>
            <p className="mt-1 text-[14px] text-zinc-500">{D.form.sub}</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <TextInput label="Name" required placeholder="Jane Cho" value={name} onChange={setName} />
              <TextInput label="Email" type="email" required placeholder="jane@protocol.xyz" value={email} onChange={setEmail} />
              <TextInput label="Company" placeholder="Protocol Inc." value={company} onChange={setCompany} />
              <SelectInput label="Category" required placeholder="Select…" options={D.form.categories} value={category} onChange={setCategory} />
              <div className="sm:col-span-2">
                <TextArea label="Tell us about your project" required placeholder="A few words on what you're building, codebase size, and what you'd like reviewed…" rows={6} value={msg} onChange={setMsg} />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="font-mono text-[11px] text-zinc-500">We respond within 1 business day.</div>
              <button className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-immune-green-deep text-white font-display font-semibold text-[13.5px] hover:bg-immune-green-bright hover:text-zinc-950 transition">
                Send Message <LIcon name="Send" size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactRow({ icon, label, value, link }) {
  const Body = (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-immune-green/10 ring-1 ring-immune-green/30 grid place-items-center shrink-0">
        <LIcon name={icon} size={16} className="text-immune-green" />
      </div>
      <div>
        <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-zinc-500">{label}</div>
        <div className="font-display text-[15px] text-white mt-0.5">{value}</div>
      </div>
    </div>
  );
  return link ? <a href={link} className="block hover:opacity-80 transition">{Body}</a> : Body;
}

// Export
Object.assign(window, { EngagementPage, PricingCalculatorPage, BlogPage, ContactPage });
