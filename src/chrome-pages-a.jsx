// ============================================================
// CHROME-PAGES-A — §27 Audit Leaderboard, §28 Clientele, §29 About
// Each page: light bg over <Header>/<Footer> (dark) chrome.
// ============================================================

// =========================================================
// §27 — AUDIT LEADERBOARD
// =========================================================
function AuditLeaderboardPage() {
  const D = window.DATA_AUDIT;
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const filters = ["All", "Ethereum", "Solana", "Polygon", "BSC", "L1", "DApp", "Token", "DeFi"];

  const filtered = D.projects.filter((p) => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (filter === "All") return true;
    return p.platform === filter || p.tags.some((t) => t.replace(/\+\d+/, "").trim() === filter);
  });

  return (
    <main className="bg-white">
      <BreadcrumbBar trail={["Home", "Audit Leaderboard"]} />

      {/* §27.2 — Headline */}
      <section className="relative pt-12 md:pt-16 pb-10 bg-gradient-to-b from-zinc-50 to-white border-b border-zinc-100 overflow-hidden">
        <BinaryRainBg />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green-deep">
            <span className="w-2 h-2 rounded-full bg-immune-green" /> Live Audit Leaderboard
          </div>
          <h1 className="mt-3 font-display text-[40px] md:text-[56px] leading-[1.04] tracking-[-0.025em] font-medium text-zinc-900 max-w-4xl">
            Audit <em className="font-display italic font-light text-immune-green-deep">Leaderboard</em>
          </h1>
          <p className="mt-4 text-zinc-600 text-[16px] md:text-[17px] max-w-3xl leading-relaxed">
            Comprehensive overview of audited projects, vulnerabilities found, and platforms secured. Every entry is a real engagement — verifiable on-chain or via the published report.
          </p>
        </div>
      </section>

      {/* §27.3 — Stat row */}
      <section className="bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-5">
          {D.stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-zinc-50 ring-1 ring-zinc-200/60 p-5 hover:ring-immune-green/40 transition">
              <div className="font-display text-[36px] md:text-[42px] leading-none tracking-[-0.025em] font-medium text-zinc-900">{s.value}</div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* §27.4 — Donuts */}
      <section className="bg-zinc-50/60 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-6">
          <DonutPanel title="Vulnerability Severity Distribution" segments={D.severity} />
          <DonutPanel title="Platform Distribution" segments={D.platforms} />
        </div>
      </section>

      {/* §27.5–§27.6 — Filters + table */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green-deep">$ leaderboard --recent</div>
              <h2 className="mt-2 font-display text-[28px] md:text-[34px] tracking-[-0.02em] font-medium text-zinc-900">Recent Audits</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search project…"
                  className="h-10 w-64 rounded-lg border border-zinc-200 bg-white pl-9 pr-3 text-[13px] text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-immune-green/40 focus:border-immune-green"
                />
                <LIcon name="Search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              </div>
            </div>
          </div>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {filters.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`h-8 px-3.5 rounded-full text-[12.5px] font-medium transition ring-1 ${
                    active
                      ? "bg-immune-green-deep text-white ring-immune-green-deep"
                      : "bg-white text-zinc-700 ring-zinc-200 hover:ring-zinc-400"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          {/* Table */}
          <div className="rounded-xl ring-1 ring-zinc-200 overflow-hidden">
            <table className="w-full text-[13.5px]">
              <thead>
                <tr className="bg-zinc-50 text-zinc-500 font-mono text-[11px] uppercase tracking-[0.14em]">
                  <th className="text-left px-5 py-3 font-medium">Project</th>
                  <th className="text-left px-5 py-3 font-medium">Audit Date</th>
                  <th className="text-left px-5 py-3 font-medium">Platform</th>
                  <th className="text-left px-5 py-3 font-medium">Tags</th>
                  <th className="text-right px-5 py-3 font-medium">Report</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {filtered.map((p, i) => {
                  const tint = D.platformTints[p.platform] || { bg: "rgb(244 244 245)", text: "rgb(82 82 91)", dot: "#a1a1aa" };
                  return (
                    <tr key={i} className="bg-white hover:bg-zinc-50/60 transition">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-700 text-white grid place-items-center font-mono text-[11px] font-bold">{p.logo}</div>
                          <div className="font-display text-[14.5px] font-medium text-zinc-900">{p.name}</div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 font-mono text-[12.5px] text-zinc-600">{p.date}</td>
                      <td className="px-5 py-3.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 h-6 rounded-full text-[11.5px] font-medium" style={{ background: tint.bg, color: tint.text }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: tint.dot }} />
                          {p.platform}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex flex-wrap gap-1.5">
                          {p.tags.map((t, ti) => (
                            <span key={ti} className="inline-flex items-center px-2 h-6 rounded-md bg-zinc-100 text-zinc-700 text-[11.5px] font-medium">{t}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <a href="#" className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-immune-green-deep hover:underline">
                          View report <LIcon name="ArrowUpRight" size={13} />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-5 flex items-center justify-between text-[12.5px] text-zinc-500">
            <div>
              Showing <span className="text-zinc-800 font-medium">{filtered.length}</span> of <span className="text-zinc-800 font-medium">{D.pageMeta.rowsTotal}</span> audits
            </div>
            <div className="flex items-center gap-1">
              <PageBtn label={<LIcon name="ChevronLeft" size={14} />} disabled />
              <PageBtn label="1" active />
              <PageBtn label="2" />
              <PageBtn label="3" />
              <span className="px-1 text-zinc-400">…</span>
              <PageBtn label={String(D.pageMeta.pagesTotal)} />
              <PageBtn label={<LIcon name="ChevronRight" size={14} />} />
            </div>
          </div>
        </div>
      </section>

      {/* §27.7 — CTA strip */}
      <CtaStrip
        eyebrow="$ ./schedule_audit.sh"
        title="Ready to be on the leaderboard?"
        sub="Join 1,000+ teams that ship with auditor-grade confidence."
        cta="Schedule Your Audit"
      />
    </main>
  );
}

function DonutPanel({ title, segments }) {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-zinc-200 p-6 md:p-7">
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">// {title.toLowerCase()}</div>
      <h3 className="mt-1 font-display text-[20px] md:text-[22px] tracking-[-0.015em] font-medium text-zinc-900">{title}</h3>
      <div className="mt-5 flex items-center gap-7">
        <DonutChart segments={segments} />
        <ChartLegend segments={segments} />
      </div>
    </div>
  );
}

function PageBtn({ label, active, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`min-w-[32px] h-8 px-2.5 rounded-md text-[12.5px] font-medium transition grid place-items-center ${
        active
          ? "bg-immune-green-deep text-white"
          : disabled
          ? "text-zinc-300"
          : "text-zinc-700 hover:bg-zinc-100"
      }`}
    >
      {label}
    </button>
  );
}

function CtaStrip({ eyebrow, title, sub, cta }) {
  return (
    <section className="relative bg-zinc-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ background: "radial-gradient(circle at 30% 50%, #74BF00 0%, transparent 50%)" }} />
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
        <div>
          <div className="font-mono text-[12px] text-immune-green tracking-[0.16em]">{eyebrow}</div>
          <h2 className="mt-3 font-display text-[34px] md:text-[44px] leading-[1.05] tracking-[-0.02em] font-medium">{title}</h2>
          <p className="mt-3 text-zinc-300 text-[15.5px] max-w-xl">{sub}</p>
        </div>
        <a href="/contact" className="self-start md:self-auto inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-immune-green text-zinc-950 font-display font-semibold text-[14.5px] hover:bg-immune-green-bright transition">
          {cta} <LIcon name="ArrowRight" size={15} />
        </a>
      </div>
    </section>
  );
}

// Faint binary rain on light bg
function BinaryRainBg() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.05] font-mono text-[10px] leading-[12px] text-immune-green-deep overflow-hidden select-none">
      {Array.from({ length: 18 }).map((_, i) => (
        <div key={i} className="absolute whitespace-nowrap" style={{ left: `${(i * 6.5) % 100}%`, top: `${(i * 13) % 100}%`, transform: `rotate(${(i % 2 ? 0 : 0)}deg)` }}>
          {Array.from({ length: 80 }).map((_, j) => (j + i) % 2).join(" ")}
        </div>
      ))}
    </div>
  );
}

// =========================================================
// §28 — CLIENTELE
// =========================================================
function ClientelePage() {
  const D = window.DATA_CLIENTELE;
  return (
    <main className="bg-white">
      {/* §28.1 Hero — photo plate */}
      <PageHeroWithBackground title="Our Clientele" variant="photo" subjectHue={142} />
      <BreadcrumbBar trail={["Home", "Clientele"]} />

      {/* §28.3 Our Clients head */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 pt-14 md:pt-20 text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green-deep">$ ls -la /clients</div>
          <h2 className="mt-3 font-display text-[34px] md:text-[44px] leading-[1.05] tracking-[-0.02em] font-medium text-zinc-900">{D.ourClientsHead.title}</h2>
          <p className="mt-4 text-zinc-600 text-[15.5px] max-w-3xl mx-auto leading-relaxed">{D.ourClientsHead.sub}</p>
        </div>
      </section>

      {/* §28.4 Logo grid */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {D.clients.map((c) => <LogoCard key={c} name={c} />)}
          </div>
        </div>
      </section>

      {/* §28.5 Testimonials head */}
      <section className="bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 pt-14 md:pt-20 text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green-deep">// testimonials</div>
          <h2 className="mt-3 font-display text-[32px] md:text-[42px] leading-[1.06] tracking-[-0.02em] font-medium text-zinc-900">{D.testimonialsHead.title}</h2>
          <p className="mt-4 text-zinc-600 text-[15.5px] max-w-2xl mx-auto leading-relaxed">{D.testimonialsHead.sub}</p>
        </div>

        {/* §28.6 Video testimonials grid */}
        <div className="max-w-6xl mx-auto px-6 pt-10 md:pt-12 pb-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {D.videos.map((v, i) => <VideoTile key={i} {...v} />)}
          </div>
        </div>

        {/* §28.7 Text testimonials grid */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-5">
            {D.texts.map((t, i) => <TextTestimonial key={i} {...t} />)}
          </div>
        </div>
      </section>

      <CtaStrip
        eyebrow="$ ./join_them.sh"
        title="Build alongside teams who take security seriously."
        sub="From institutional finance to indie protocols — your project belongs in this list."
        cta="Talk to an Auditor"
      />
    </main>
  );
}

function VideoTile({ name, role, company, hue }) {
  return (
    <div className="group relative rounded-xl overflow-hidden ring-1 ring-zinc-200 bg-white hover:ring-immune-green/40 transition">
      <div
        className="aspect-[4/5] relative overflow-hidden"
        style={{
          background: `radial-gradient(circle at 40% 35%, hsl(${hue} 60% 70%) 0%, hsl(${hue} 35% 35%) 55%, hsl(${hue} 30% 18%) 100%)`,
        }}
      >
        {/* Subtle face placeholder shape */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[radial-gradient(circle_at_50%_38%,white_0%,transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Play button */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="w-14 h-14 rounded-full bg-white/95 grid place-items-center shadow-2xl group-hover:scale-110 transition">
            <LIcon name="Play" size={20} className="text-zinc-900 ml-0.5" />
          </div>
        </div>
        {/* Bottom label */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="font-display text-[14.5px] font-semibold leading-tight">{name}</div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] opacity-80 mt-0.5">{role}</div>
        </div>
      </div>
      <div className="px-3 py-2.5 border-t border-zinc-100">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-zinc-500">{company}</div>
      </div>
    </div>
  );
}

function TextTestimonial({ quote, name, role, company, initials, dark }) {
  if (dark) {
    return (
      <article className="rounded-2xl bg-zinc-950 text-white ring-1 ring-zinc-900 p-6 md:p-7">
        <LIcon name="Quote" size={22} className="text-immune-green opacity-70" />
        <p className="mt-3 text-[14.5px] leading-relaxed text-zinc-200">{quote}</p>
        <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-immune-green grid place-items-center text-zinc-950 font-mono text-[12px] font-bold">{initials}</div>
          <div>
            <div className="font-display font-semibold text-[14px]">{name}</div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-zinc-400">{role} · {company}</div>
          </div>
        </div>
      </article>
    );
  }
  return (
    <article className="rounded-2xl bg-white ring-1 ring-zinc-200 p-6 md:p-7">
      <LIcon name="Quote" size={22} className="text-immune-green-deep opacity-70" />
      <p className="mt-3 text-[14.5px] leading-relaxed text-zinc-800">{quote}</p>
      <div className="mt-5 pt-5 border-t border-zinc-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-zinc-900 grid place-items-center text-white font-mono text-[12px] font-bold">{initials}</div>
        <div>
          <div className="font-display font-semibold text-[14px] text-zinc-900">{name}</div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-zinc-500">{role} · {company}</div>
        </div>
      </div>
    </article>
  );
}

// =========================================================
// §29 — ABOUT
// =========================================================
function AboutPage() {
  const D = window.DATA_ABOUT;
  return (
    <main className="bg-white">
      {/* §29.1 Hero — pattern plate */}
      <PageHeroWithBackground title="About ImmuneBytes" variant="pattern" />
      <BreadcrumbBar trail={["Home", "About"]} />

      {/* §29.3 Intro */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-20 text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green-deep">// who_we_are</div>
          <p className="mt-4 font-display text-[20px] md:text-[24px] leading-[1.45] tracking-[-0.012em] text-zinc-800 text-pretty">
            {D.intro}
          </p>
        </div>
      </section>

      {/* §29.4 Mission + Vision */}
      <section className="bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-5">
          {[D.mission, D.vision].map((b) => (
            <div key={b.title} className="rounded-2xl bg-white ring-1 ring-zinc-200 p-7 md:p-8">
              <div className="w-12 h-12 rounded-xl bg-immune-green/10 ring-1 ring-immune-green/30 grid place-items-center">
                <LIcon name={b.icon} size={20} className="text-immune-green-deep" />
              </div>
              <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green-deep">{b.title}</div>
              <p className="mt-2 font-display text-[17px] md:text-[18.5px] leading-[1.55] tracking-[-0.005em] text-zinc-800 text-pretty">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* §29.5 Values */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green-deep">$ cat /values.md</div>
          <h2 className="mt-2 font-display text-[34px] md:text-[42px] tracking-[-0.02em] font-medium text-zinc-900 max-w-2xl">
            What we <em className="font-display italic font-light text-immune-green-deep">stand for</em>.
          </h2>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {D.values.map((v, i) => (
              <div key={v.title} className="rounded-xl ring-1 ring-zinc-200 bg-white p-5 hover:ring-immune-green/40 hover:-translate-y-0.5 transition">
                <div className="font-mono text-[10.5px] text-zinc-400">VALUE_0{i + 1}</div>
                <div className="mt-2 font-display text-[16.5px] font-semibold text-zinc-900">{v.title}</div>
                <div className="mt-1.5 text-[13.5px] text-zinc-600 leading-relaxed">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §29.6 Founder */}
      <section className="bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <div className="rounded-2xl aspect-[4/5] bg-gradient-to-br from-immune-green/30 via-zinc-800 to-zinc-950 ring-1 ring-white/10 grid place-items-center">
            <div className="w-32 h-32 rounded-full bg-immune-green grid place-items-center text-zinc-950 font-display font-bold text-[44px] tracking-tight">{D.founder.initials}</div>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green">// founder</div>
            <h2 className="mt-2 font-display text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] font-medium">{D.founder.name}</h2>
            <div className="mt-1 font-mono text-[12.5px] uppercase tracking-[0.14em] text-zinc-400">{D.founder.role}</div>
            <p className="mt-5 text-zinc-300 text-[15.5px] leading-relaxed max-w-2xl text-pretty">{D.founder.bio}</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg ring-1 ring-white/15 hover:ring-immune-green hover:bg-immune-green/10 grid place-items-center transition">
                <LIcon name="Linkedin" size={15} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg ring-1 ring-white/15 hover:ring-immune-green hover:bg-immune-green/10 grid place-items-center transition">
                <LIcon name="Twitter" size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* §29.7 Core team */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green-deep">// core_team</div>
          <h2 className="mt-2 font-display text-[34px] md:text-[42px] tracking-[-0.02em] font-medium text-zinc-900">The people behind the work.</h2>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {D.team.map((m) => (
              <div key={m.name} className="rounded-2xl ring-1 ring-zinc-200 bg-white overflow-hidden hover:ring-immune-green/40 transition">
                <div className="aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-200 grid place-items-center">
                  <div className="w-20 h-20 rounded-full bg-zinc-900 grid place-items-center text-white font-display font-semibold text-[24px]">{m.initials}</div>
                </div>
                <div className="p-5">
                  <div className="font-display text-[16.5px] font-semibold text-zinc-900">{m.name}</div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500 mt-0.5">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §29.8 Join Us */}
      <section className="relative bg-immune-green-deep text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 30%, white, transparent 50%)" }} />
        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-immune-green-bright">// careers</div>
          <h2 className="mt-3 font-display text-[34px] md:text-[44px] leading-[1.06] tracking-[-0.02em] font-medium">{D.joinTeam.title}</h2>
          <p className="mt-4 text-white/85 text-[15.5px] max-w-2xl mx-auto leading-relaxed">{D.joinTeam.sub}</p>
          <a href={D.joinTeam.href} className="mt-7 inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-white text-immune-green-deep font-display font-semibold text-[14.5px] hover:bg-zinc-100 transition">
            <LIcon name="Mail" size={15} /> {D.joinTeam.cta}
          </a>
        </div>
      </section>
    </main>
  );
}

// Export
Object.assign(window, { AuditLeaderboardPage, ClientelePage, AboutPage });
