// ============================================================
// SERVICE PAGE DATA — part 2: Web3 drill-downs (§§9-11, 13-14),
// Web2 sub-services (§§15-18), AI (§§19-22), Consultancy (§§23-26)
// All use STRUCTURED template (§5) unless noted.
// ============================================================

const _STD_LOGOS = ["PortSwigger", "GitHub", "MITRE", "ATT&CK", "OWASP"];
const _STD_CAPTION = "We map findings to OWASP Top 10, SWC Registry, and our own internal checklist.";

// Helper to make a standard FAQ block
const _faq = (label, items) => ({
  label: "faq",
  title: "What You Need to Know?",
  subhead: "Frequently Asked Questions",
  items,
});

// Helper to make a standard tools block
const _tools = (coreTooling, outputs) => ({
  label: "tools",
  title: "Tools and Standards",
  coreTooling,
  outputs,
  outputsHeading: "Audit outputs",
  logos: _STD_LOGOS,
  caption: _STD_CAPTION,
});

// ====================================================================
// §9 L1/L2 Audit
// ====================================================================
const PAGE_L1_L2 = {
  slug: "l1-l2",
  template: "structured",
  pillar: "Web3 Security",
  pillarHref: "/solutions/web3",
  breadcrumb: ["Solutions", "Web3 Security", "Protocol & Infrastructure Audit", "L1/L2 Audit"],
  hero: {
    label: "l1_l2_audit",
    title: "L1/L2 Audit",
    subhead: "L1 security is about consensus and economic guarantees. L2 security is about bridges, fraud/validity assumptions, sequencing, and cross-domain messaging. We audit the truth assumptions and the escape hatches.",
  },
  coverage: {
    label: "coverage",
    title: "What we cover",
    items: [
      "L1 consensus and validator review",
      "Bridge and cross-domain messaging verification",
      "Sequencer and prover scheme review",
      "Proof / validity assumptions and fraud-proof window layouts",
      "Reorg / halt assumptions and resilience",
      "Data availability assumptions and bond recovery",
    ],
  },
  failureModes: {
    label: "failure_modes",
    title: "Common Failure Modes",
    cards: [
      { icon: "Anchor", title: "Consensus and finality gaps", body: "Reorgs deeper than the spec promises. Finality conditions an attacker can stall by withholding messages or exploiting validator quorum thresholds." },
      { icon: "GitMerge", title: "Cross-domain integrity failures", body: "Messages that survive replay across domains, withdrawal proofs that pass under malformed inputs, and sequencer trust assumptions that hide single points of failure." },
      { icon: "Zap", title: "Sequencing and MEV side effects", body: "Sequencer ordering that leaks user intent. Censorship windows long enough to extract value. MEV revenue routes attackers can claim against the protocol's stated guarantees." },
    ],
  },
  process: {
    label: "process",
    title: "How we work",
    steps: [
      { icon: "ListChecks", title: "Assumption inventory", body: "List the trust and integrity assumptions the L1/L2 design depends on." },
      { icon: "Eye", title: "Integrity review", body: "Messages, proofs, monitoring logic, and finality signaling." },
      { icon: "ShieldAlert", title: "Control-plane review", body: "Upgrades, governance, and emergency-action paths." },
      { icon: "Skull", title: "Adversarial simulation", body: "Reorg, halt, censorship, and DA-withholding scenarios under realistic adversaries." },
      { icon: "FileText", title: "Report", body: "Exploitability paths under cross-domain misuse and assumption violations." },
      { icon: "RefreshCw", title: "Retest", body: "Re-run the broken assumption against the fix. The path closes or the finding stays open." },
    ],
  },
  tools: _tools(
    ["Op-stack / Arbitrum / zkSync fork harness", "Foundry-on-fork adversarial replay", "Custom relayer/sequencer simulator", "DA-withholding rig", "Geth/Reth client-diff testing"],
    ["Assumption-violation scenarios", "Reorg/halt PoC scripts", "Bridge-message replay proofs", "Bond/recovery economic analysis", "Retest sign-off"]
  ),
  deliverables: {
    label: "deliverables",
    title: "Deliverables",
    items: [
      "High-impact assumptions that can fail in production",
      "Concrete scenarios that break safety or fund integrity",
      "Retest focused on bonding, proofs, and the control plane",
    ],
  },
  caseStudy: { name: "Vasarchain Protocol Security Ecosystem Assessment", tag: "Web3 Security · L2", weeks: "10 weeks", findings: "33 / 33 fixed", coverage: "Sequencer + bridge" },
  testimonial: 2,
  faq: _faq("faq", [
    { q: "What is the difference between L1 and L2 audit?", a: "L1 audits live in consensus, validator economics, and client software. L2 audits live in bridges, sequencer/prover trust, and fraud/validity windows. The vocabulary overlaps; the actual attacks don't." },
    { q: "Do you audit OP-stack / Arbitrum / zkSync forks?", a: "Yes. Our adversarial fork harness covers the major rollup stacks. We test the deployment-specific config, not just the upstream code — most real findings live in the customizations." },
    { q: "How long does an L2 audit take?", a: "8–14 weeks for a rollup deployment, longer for a stack with custom sequencer or DA design. We scope before we quote." },
    { q: "Do you cover the bridge?", a: "Always. The bridge is where most catastrophic L2 failures occur. We audit the L1-side contracts, the L2-side counterpart, and the relayer assumptions in between." },
    { q: "What about MEV?", a: "We model MEV as part of the threat model, not a side concern. Sequencer ordering policy, mempool privacy, and revenue routing are scoped explicitly." },
  ]),
};

// ====================================================================
// §10 Consensus Frameworks Audit
// ====================================================================
const PAGE_CONSENSUS = {
  slug: "consensus",
  template: "structured",
  pillar: "Web3 Security",
  pillarHref: "/solutions/web3",
  breadcrumb: ["Solutions", "Web3 Security", "Protocol & Infrastructure Audit", "Consensus Frameworks Audit"],
  hero: {
    label: "consensus_frameworks_audit",
    title: "Consensus Frameworks Audit",
    subhead: "Consensus is the security boundary. If it's wrong, everything built on top is exploitable. We audit safety/liveness logic, incentive alignment, and implementation edge cases that become network attacks.",
  },
  coverage: {
    label: "coverage",
    title: "What we cover",
    items: [
      "Consensus algorithm correctness assumptions",
      "Validator incentives and slashing details",
      "Finality gadgets and signaling logic",
      "Network and timing assumptions",
      "Edge cases in equivocation and chain forks",
      "Upgrade and fork paths and edge effects",
    ],
  },
  failureModes: {
    label: "failure_modes",
    title: "Common Failure Modes",
    cards: [
      { icon: "ShieldX", title: "Safety violations", body: "Conditions under which two honest validators commit conflicting blocks. The spec promises this can't happen; the implementation often disagrees on edge cases." },
      { icon: "Clock", title: "Liveness failures", body: "Network states where progress halts despite a quorum being available — leader rotation bugs, view-change loops, equivocation handling that stalls instead of slashing." },
      { icon: "Scale", title: "Incentive misalignment", body: "Validator strategies that out-game the protocol's intended Nash equilibrium. Slashing schedules an attacker would profit from. Reward curves that subsidize misbehavior." },
    ],
  },
  process: {
    label: "process",
    title: "How we work",
    steps: [
      { icon: "FileText", title: "Formalize invariants", body: "Write down what must always happen and what must never happen." },
      { icon: "Skull", title: "Attack modeling", body: "Adversarial scenarios under realistic network conditions — partitions, delays, equivocation." },
      { icon: "Eye", title: "Implementation review", body: "Where the spec meets the code. Most consensus bugs live in the gap between the two." },
      { icon: "FlaskConical", title: "Scenario validation", body: "Simulate at fault and edge boundaries. Replay historical mainnet incidents in the test rig." },
      { icon: "ClipboardCheck", title: "Report", body: "Findings tied to consensus-layer impact and economic cost-of-attack." },
      { icon: "RefreshCw", title: "Retest", body: "Re-run the broken invariant against the fix." },
    ],
  },
  tools: _tools(
    ["TLA+ / Apalache for spec verification", "Custom partition-replay rig", "Validator-strategy simulator", "Client-diff fuzzer", "Equivocation injection harness"],
    ["Spec-vs-implementation diff report", "Adversarial scenario library", "Slashing-economic analysis", "Cost-of-attack estimates", "Retest sign-off"]
  ),
  deliverables: {
    label: "deliverables",
    title: "Deliverables",
    items: [
      "Consensus-breaking bugs and incentive failures",
      "Concrete scenarios and triggering conditions",
      "Retest focused on invariant preservation",
      "Retest confirmation",
    ],
  },
  caseStudy: { name: "cSigma Finance Audit", tag: "Web3 Security · Consensus", weeks: "8 weeks", findings: "24 / 24 fixed", coverage: "12 contracts" },
  testimonial: 0,
  faq: _faq("faq", [
    { q: "What is a consensus audit?", a: "A review of the algorithm and its implementation against a written specification — looking for cases where safety or liveness can be violated, and for incentive structures an attacker would exploit." },
    { q: "Do you do formal verification?", a: "Where it pays off. TLA+/Apalache for spec verification, Coq/Lean for cryptographic primitives. Formal methods are a tool, not a deliverable — we use them when they catch what manual review can't." },
    { q: "How long does a consensus audit take?", a: "10–16 weeks. Spec formalization alone is often 3–4 weeks for a non-trivial protocol." },
    { q: "Which consensus families do you cover?", a: "BFT (HotStuff, Tendermint, IBFT), GHOST/LMD-GHOST, longest-chain Nakamoto, hybrid PoS. We turn down families where we can't audit responsibly." },
  ]),
};

// ====================================================================
// §11 Tokenomics Audit
// ====================================================================
const PAGE_TOKENOMICS = {
  slug: "tokenomics",
  template: "structured",
  pillar: "Web3 Security",
  pillarHref: "/solutions/web3",
  breadcrumb: ["Solutions", "Web3 Security", "Protocol & Infrastructure Audit", "Tokenomics Audit"],
  hero: {
    label: "tokenomics_audit",
    title: "Tokenomics Audit",
    subhead: "Bad tokenomics kills projects slowly — then suddenly. We stress-test incentives, emissions, governance capture, and reflexive 'death spiral' dynamics before they ship.",
  },
  coverage: {
    label: "coverage",
    title: "What we cover",
    items: [
      "Emission schedules and inflation logic",
      "Vesting cliffs and equity share rules",
      "Governance power distribution and capture paths",
      "Incentive curves under bull / bear conditions",
      "Liquidity-lockability simulation and propagation",
      "Recovery extent and state effects",
    ],
  },
  failureModes: {
    label: "failure_modes",
    title: "Common Failure Modes",
    cards: [
      { icon: "Crown", title: "Governance capture and control drift", body: "Vote concentrations that emerge naturally over time. Delegation patterns that produce a controlling minority. Treasury proposals that survive 'safe' parameter ranges but compound into capture." },
      { icon: "TrendingDown", title: "Unstable emissions and liquidity shocks", body: "Emission schedules that look smooth on paper and break under realistic LP behavior. Incentive cliffs that trigger withdrawal cascades. Reward curves that anti-incentivize the network state you want." },
      { icon: "Repeat", title: "Reflexive failure loops", body: "Death-spiral dynamics where price decline triggers withdrawals, withdrawals trigger more decline, and 'rational' actor behavior accelerates the collapse rather than dampening it." },
    ],
  },
  process: {
    label: "process",
    title: "How we work",
    steps: [
      { icon: "Target", title: "Define objectives", body: "What the token must do — and what would count as failure." },
      { icon: "Users", title: "Model incentives", body: "Who wins, who loses, why. Map every actor's optimal strategy." },
      { icon: "Activity", title: "Stress-test", body: "Under bull, bear, and adversarial conditions. Replay 2018, 2022, and worst-case historical scenarios." },
      { icon: "Crown", title: "Capture analysis", body: "Governance and economic capture paths over realistic time horizons." },
      { icon: "FileText", title: "Report", body: "Risk-tagged failure scenarios with parameter danger-zones." },
      { icon: "RefreshCw", title: "Retest", body: "Re-run scenarios after parameter changes. Confirm the failure path closes." },
    ],
  },
  tools: _tools(
    ["cadCAD / radCAD agent-based simulation", "Custom validator-strategy rig", "Historical-replay harness (2018/2022 conditions)", "Governance-capture timeline simulator", "Liquidity-shock scenario library"],
    ["Risk-tagged failure scenarios", "Parameter danger-zone map", "Capture-timeline analysis", "Stability-range bounds", "Retest sign-off"]
  ),
  deliverables: {
    label: "deliverables",
    title: "Deliverables",
    items: [
      "Capture risks and failure-loop scenarios",
      "Parameter 'danger zones' and stability ranges",
      "Retest on mitigation directions and design impact",
      "Follow-up validation plan if tokenomics change",
    ],
  },
  caseStudy: { name: "cSigma Finance Audit", tag: "Web3 Security · Tokenomics", weeks: "6 weeks", findings: "11 / 11 addressed", coverage: "Emission + gov" },
  testimonial: 1,
  faq: _faq("faq", [
    { q: "What is a tokenomics audit?", a: "A stress-test of your token design — emissions, governance, vesting, liquidity — under realistic and adversarial conditions. The output is a list of parameter ranges where the system stays stable, and the scenarios where it doesn't." },
    { q: "When should we get one?", a: "Before launch, ideally during whitepaper review. After launch, before any major emission or governance change. Tokenomics changes after TVL exists are inherently riskier." },
    { q: "Do you audit governance contracts too?", a: "Yes — but tokenomics audit and governance contract audit are different scopes. The contract audit checks the code; the tokenomics audit checks whether the code, even if correct, produces the outcome you want." },
    { q: "How long does it take?", a: "4–8 weeks. Simulation runtime is the binding constraint, not auditor time." },
  ]),
};

// ====================================================================
// §12 Wallet Security
// ====================================================================
const PAGE_WALLET = {
  slug: "wallet",
  template: "structured",
  pillar: "Web3 Security",
  pillarHref: "/solutions/web3",
  breadcrumb: ["Solutions", "Web3 Security", "Wallet Security"],
  hero: {
    label: "wallet_security",
    title: "Wallet Security",
    subhead: "Wallets are the front door to user funds. We audit key management, signing correctness, transaction validation, and the user-interaction points where attackers actually win.",
  },
  coverage: {
    label: "coverage",
    title: "What we cover",
    items: [
      "Key and secret handling (storage, lifecycle, signature paths)",
      "Signing flows and transaction validation",
      "Network and RPC trust assumptions",
      "Recovery mechanisms and account safety",
      "Multi-device, multi-account scenarios",
      "Monitoring and indicators of exposure conditions",
    ],
  },
  failureModes: {
    label: "failure_modes",
    title: "Common Failure Modes",
    cards: [
      { icon: "KeyRound", title: "Key compromise paths", body: "Key material persisted in places it shouldn't be. Recovery flows that leak entropy. Hardware-bridge protocols that downgrade silently to weaker primitives." },
      { icon: "FileSignature", title: "Signing and validation gaps", body: "EIP-712 domain confusion. Blind-sign flows that hide what's being authorized. Replayable signatures across chains, contracts, or sessions." },
      { icon: "Plug", title: "Integration and trust assumptions", body: "RPC providers trusted by default. dapp-injected calldata accepted without simulation. Permission scopes that grant more than the UI implies." },
    ],
  },
  process: {
    label: "process",
    title: "How we work",
    steps: [
      { icon: "Skull", title: "Threat model", body: "Phishing, malware, hostile dapps, hostile networks. Realistic attackers, realistic capabilities." },
      { icon: "Eye", title: "Flow review", body: "Sign / auth / recovery lifecycle. Where authorization actually happens vs. where the UI says it happens." },
      { icon: "Bug", title: "Abuse testing", body: "Hostile-dapp simulation, signature-replay rigs, malicious-RPC interception, and recovery-flow misuse." },
      { icon: "ShieldCheck", title: "Posture review", body: "Monitoring, approval workflows, rate limits, anomaly detection." },
      { icon: "FileText", title: "Report", body: "Exploitability and risk per category, with concrete remediation guidance." },
      { icon: "RefreshCw", title: "Retest", body: "Re-run the abuse scenario against the fix. Path closes or finding stays open." },
    ],
  },
  tools: _tools(
    ["Hostile-dapp simulator", "Signature-replay rig", "EIP-712 domain fuzzer", "RPC-MITM harness", "Recovery-flow abuse harness"],
    ["High-risk compromise paths with evidence", "Signing/validation gap repros", "Recovery-failure scenarios", "Posture-review findings", "Retest sign-off"]
  ),
  deliverables: {
    label: "deliverables",
    title: "Deliverables",
    items: [
      "High-risk compromise paths with clear evidence",
      "Signing / validation gaps with repro steps",
      "Recovery scenarios that we tested and found unsafe",
      "Retest confirmation",
    ],
  },
  caseStudy: { name: "cSigma Finance Audit", tag: "Web3 Security · Wallet", weeks: "5 weeks", findings: "16 / 16 fixed", coverage: "Wallet + dapp integration" },
  testimonial: 0,
  faq: _faq("faq", [
    { q: "Why do we need to design wallets securely?", a: "Because wallets are the highest-value target in the user-facing stack. A bug in your wallet isn't a single-protocol exploit — it's potentially every dapp the wallet integrates with." },
    { q: "Which wallet types do you audit?", a: "Browser extensions, mobile (iOS/Android), hardware-wallet companion apps, smart-contract wallets (ERC-4337, EIP-7702), and MPC wallets." },
    { q: "What is the impact of a wallet exploit?", a: "Catastrophic and irreversible. Funds drained from compromised wallets are rarely recovered. The blast radius is everyone who installed your wallet, not one protocol." },
    { q: "How long does a wallet audit take?", a: "4–8 weeks depending on scope. Smart-contract wallets and MPC designs take longer because the cryptographic surface is wider." },
  ]),
};

// ====================================================================
// §13 Dapp Integration Security
// ====================================================================
const PAGE_DAPP_INTEGRATION = {
  slug: "dapp-integration",
  template: "structured",
  pillar: "Web3 Security",
  pillarHref: "/solutions/web3",
  breadcrumb: ["Solutions", "Web3 Security", "Wallet Security", "Dapp Integration Security"],
  hero: {
    label: "dapp_integration_security",
    title: "Dapp Integration Security",
    subhead: "Where dapps and wallets meet, attackers live. Sign-typed-data spoofing, calldata injection, and ambient permission grants are how users actually lose funds — not contract bugs.",
  },
  coverage: {
    label: "coverage",
    title: "What we cover",
    items: [
      "EIP-712 domain handling and message-shape validation",
      "WalletConnect / EIP-1193 provider trust assumptions",
      "Permit-style approval flows and replay surfaces",
      "Calldata simulation and human-readable signing",
      "Session management and permission scoping",
      "Phishing-resistance and origin verification",
    ],
  },
  failureModes: {
    label: "failure_modes",
    title: "Common Failure Modes",
    cards: [
      { icon: "FileSignature", title: "Sign-typed-data spoofing", body: "Domain separators that allow cross-protocol signature reuse. EIP-712 message shapes that look harmless to the user but mean something else to the contract." },
      { icon: "Plug", title: "Provider trust assumptions", body: "Wallet integration code that trusts the page's window.ethereum without verifying origin. Provider implementations that silently swap chain IDs." },
      { icon: "ShieldAlert", title: "Permission ambient grants", body: "Permit and EIP-2612 approvals that survive across sessions. Approval flows where 'unlimited' is the default." },
    ],
  },
  process: {
    label: "process",
    title: "How we work",
    steps: [
      { icon: "Layers", title: "Map the surface", body: "Every place a wallet message crosses into the dapp and back. The full sign-and-confirm graph." },
      { icon: "Skull", title: "Threat model", body: "Phishing, malicious-dapp, compromised-RPC, and bridge-injection scenarios." },
      { icon: "Eye", title: "Manual review", body: "EIP-712 domain shapes, calldata simulation, and the gap between human-readable UI and machine-signed message." },
      { icon: "FlaskConical", title: "Abuse testing", body: "Hostile-dapp simulation, signature-replay across chains, permit-grant abuse." },
      { icon: "FileText", title: "Report", body: "Findings tied to actual user-loss scenarios." },
      { icon: "RefreshCw", title: "Retest", body: "Re-run the abuse case against the fix." },
    ],
  },
  tools: _tools(
    ["Hostile-dapp simulator", "EIP-712 domain fuzzer", "Permit-replay rig", "Calldata-simulation diff tool", "Provider-MITM harness"],
    ["Sign-spoofing repros", "Permission-grant gap report", "Phishing-resistance findings", "Cross-chain replay analysis", "Retest sign-off"]
  ),
  deliverables: {
    label: "deliverables",
    title: "Deliverables",
    items: [
      "Sign-typed-data domain failures with repro",
      "Permission-ambient grant findings with user-loss scenarios",
      "Calldata-simulation gaps tied to misleading UI",
      "Retest confirmation against fixes",
    ],
  },
  caseStudy: { name: "cSigma Finance Audit", tag: "Web3 Security · Wallet integration", weeks: "4 weeks", findings: "12 / 12 fixed", coverage: "Wallet + dapp" },
  testimonial: 1,
  faq: _faq("faq", [
    { q: "What's the most common dapp-integration bug?", a: "EIP-712 domain confusion. A signature meant for one contract is replayable on another because the domain separator wasn't validated end-to-end." },
    { q: "Do you audit WalletConnect integrations?", a: "Yes. WC's session-permission model has subtle gotchas around chain-ID changes and method scoping that many dapps get wrong." },
    { q: "How does this differ from a wallet audit?", a: "Wallet audit covers the wallet's internal flows. Dapp-integration audit covers the seam where the wallet and dapp talk. Different scope, overlapping vocabulary." },
  ]),
};

// ====================================================================
// §14 Wallet Extension Audit
// ====================================================================
const PAGE_WALLET_EXTENSION = {
  slug: "extension",
  template: "structured",
  pillar: "Web3 Security",
  pillarHref: "/solutions/web3",
  breadcrumb: ["Solutions", "Web3 Security", "Wallet Security", "Wallet Extension Audit"],
  hero: {
    label: "wallet_extension_audit",
    title: "Wallet Extension Audit",
    subhead: "Browser extensions run with privileged access to every page, every dapp, every signature. We audit the extension boundary itself — content scripts, background workers, message passing, and the manifest-level trust model.",
  },
  coverage: {
    label: "coverage",
    title: "What we cover",
    items: [
      "Manifest v3 permission model and content-script isolation",
      "Background service-worker lifecycle and message validation",
      "DOM-injection surface and cross-origin posture",
      "Storage encryption at rest and key-derivation flows",
      "Update channel integrity and code-signing posture",
      "Auto-lock, idle, and session-expiry behavior",
    ],
  },
  failureModes: {
    label: "failure_modes",
    title: "Common Failure Modes",
    cards: [
      { icon: "Puzzle", title: "Content-script isolation gaps", body: "Pages that read extension state via timing, side-channels, or shared resources. Cross-context message handlers that trust origin without verifying." },
      { icon: "Database", title: "Storage and key handling", body: "Plaintext key fragments in chrome.storage. Weak KDFs on the local password. Memory-residence patterns that survive lock." },
      { icon: "Download", title: "Update channel exposure", body: "Update mechanisms that don't verify signing. Side-loading paths that bypass the store. Telemetry that leaks address or balance state." },
    ],
  },
  process: {
    label: "process",
    title: "How we work",
    steps: [
      { icon: "Layers", title: "Manifest review", body: "Permission model, content-script matches, host-permission scope." },
      { icon: "Skull", title: "Threat model", body: "Hostile-page, hostile-extension-coexistence, compromised-update scenarios." },
      { icon: "Eye", title: "Static review", body: "Content-script isolation, message-passing validation, storage primitive use." },
      { icon: "FlaskConical", title: "Dynamic testing", body: "Hostile-page simulation, side-channel timing rig, update-channel MITM." },
      { icon: "FileText", title: "Report", body: "Findings prioritized by user-fund-loss potential." },
      { icon: "RefreshCw", title: "Retest", body: "Re-run the abuse scenario against the fix." },
    ],
  },
  tools: _tools(
    ["Manifest analyzer", "Content-script isolation tester", "Hostile-page simulator", "Storage forensic rig", "Update-channel MITM harness"],
    ["Manifest-permission findings", "Isolation-boundary repros", "Storage / key-handling gaps", "Update-channel posture report", "Retest sign-off"]
  ),
  deliverables: {
    label: "deliverables",
    title: "Deliverables",
    items: [
      "Permission-model and isolation findings",
      "Storage and key-handling gaps with repro",
      "Update-channel and signing posture report",
      "Retest confirmation against fixes",
    ],
  },
  caseStudy: { name: "cSigma Finance Audit", tag: "Web3 Security · Extension", weeks: "5 weeks", findings: "18 / 18 fixed", coverage: "Manifest + extension" },
  testimonial: 0,
  faq: _faq("faq", [
    { q: "What's unique about extension audits?", a: "The trust boundary lives in the browser's extension model, not in your code. We audit the manifest as carefully as the source — most real findings live in permission scope, not logic." },
    { q: "Do you cover Firefox / Safari?", a: "Yes. The MV3 model is mostly aligned across Chromium and Firefox; Safari diverges and gets its own threat model." },
    { q: "How long does it take?", a: "4–6 weeks. Update-channel testing is the slowest moving piece." },
  ]),
};

// ====================================================================
// §§15-18 — WEB2 (compact)
// ====================================================================

const _w2 = (slug, label, title, subhead, breadcrumb, coverage, cards, processSteps, tools, deliverables, faqItems) => ({
  slug, template: "structured", pillar: "Web2 Security", pillarHref: "/solutions/web2",
  breadcrumb,
  hero: { label, title, subhead },
  coverage: { label: "coverage", title: "What we cover", items: coverage },
  failureModes: { label: "failure_modes", title: "Common Failure Modes", cards },
  process: { label: "process", title: "How we work", steps: processSteps },
  tools: _tools(tools.core, tools.outputs),
  deliverables: { label: "deliverables", title: "Deliverables", items: deliverables },
  caseStudy: { name: "Enterprise Pen Test Engagement", tag: "Web2 Security · Pentest", weeks: "4 weeks", findings: "19 / 19 fixed", coverage: "Full app + infra" },
  testimonial: 2,
  faq: _faq("faq", faqItems),
});

const PAGE_PENTEST = _w2(
  "pentest",
  "penetration_testing",
  "Penetration Testing",
  "Real adversaries don't follow scope documents. Neither do our pen tests. We map your perimeter, chain weaknesses across systems, and prove impact with reproducible exploit narratives.",
  ["Solutions", "Web2 Security", "Penetration Testing"],
  [
    "External perimeter and exposed-service mapping",
    "Web application input handling and authentication",
    "API authorization and rate-limit posture",
    "Cloud configuration and IAM boundaries",
    "Internal lateral-movement and privilege-escalation paths",
    "Detection and response signal generation",
  ],
  [
    { icon: "Globe", title: "Perimeter exposure", body: "Forgotten subdomains, stale TLS, default-credentialed admin panels, and S3-style misconfigurations that surface internal data to the public internet." },
    { icon: "ShieldAlert", title: "Authentication and session bugs", body: "Token reuse across tenants, predictable session IDs, MFA bypass via fallback flows, and OAuth misconfiguration that produces account takeover." },
    { icon: "Network", title: "Lateral movement", body: "Privilege boundaries that hold under static review and crumble under realistic post-exploit movement. The 'we have one foothold, now what?' game." },
  ],
  [
    { icon: "Compass", title: "Recon", body: "External and internal mapping. What's exposed; what's reachable; what's drift from the architecture diagram." },
    { icon: "Skull", title: "Threat model", body: "Realistic attacker profiles and their goals — not 'OWASP says.'" },
    { icon: "Bug", title: "Manual exploitation", body: "Senior testers chaining weaknesses. The findings live in the chains, not the individual vulnerabilities." },
    { icon: "Activity", title: "Impact validation", body: "Each finding gets a reproducible PoC with concrete blast radius." },
    { icon: "FileText", title: "Report", body: "Exploit narratives, not vulnerability lists. Engineers can fix narratives." },
    { icon: "RefreshCw", title: "Retest", body: "Re-run every chain against the fix. The narrative breaks or the finding stays open." },
  ],
  {
    core: ["Burp Suite Pro + extensions", "Caido for newer collab flows", "Custom recon pipeline", "BloodHound + Impacket (internal)", "Cloud-native auditing (Prowler, ScoutSuite)"],
    outputs: ["Exploit narratives with PoCs", "Reproducible attack chains", "Severity-ranked findings", "Detection-gap analysis", "Retest sign-off"],
  },
  [
    "Reproducible exploit narratives, not vulnerability lists",
    "Severity-ranked findings tied to business impact",
    "Detection-gap analysis with logging recommendations",
    "Retest confirmation against every chain",
  ],
  [
    { q: "What's the difference between a pen test and a vuln scan?", a: "A scan finds known signatures. A pen test finds the chains scanners can't model. Both have value; only one is a pen test." },
    { q: "How long does it take?", a: "1–4 weeks for a typical engagement. We scope before we quote — duration tracks the surface, not a fixed package." },
    { q: "Do you do red-team engagements?", a: "Yes, when scoped explicitly. Red-team and pen-test are different scopes; we don't conflate them." },
  ]
);

const PAGE_WEB_APP = _w2(
  "web-app",
  "web_application_testing",
  "Web Application Testing",
  "Modern web apps are sprawling — frameworks, frontends, APIs, third-party scripts, all weaving authorization and data flow. We test the seams where logic lives and where assumptions break.",
  ["Solutions", "Web2 Security", "Web Application Testing"],
  [
    "Authentication, session, and SSO flows",
    "Authorization and IDOR/BOLA at API layer",
    "Input handling and injection (SQL, NoSQL, command, template)",
    "CSRF, SSRF, and request-smuggling surfaces",
    "Frontend-introduced vulnerabilities (XSS, supply-chain)",
    "Business-logic and workflow abuse",
  ],
  [
    { icon: "Lock", title: "Authorization gaps", body: "IDOR/BOLA, role escalation through state-machine drift, and tenant boundaries that hold for the UI but not the API." },
    { icon: "Bug", title: "Injection class bugs", body: "Modern injection lives in places ORMs were supposed to fix. Template engines, GraphQL resolvers, and second-order injection through cached state." },
    { icon: "Workflow", title: "Business-logic abuse", body: "Race conditions in checkout. Coupon-stacking. Refund flows that net positive. The bugs that pass static review and break under attacker creativity." },
  ],
  [
    { icon: "Layers", title: "Architecture review", body: "Tech stack, auth model, data flow. Where authorization actually lives." },
    { icon: "Skull", title: "Threat model", body: "Realistic attacker capabilities, not theoretical ones." },
    { icon: "Bug", title: "Manual testing", body: "Senior testers manually probing the auth/API surface. Tooling assists; people find the bugs." },
    { icon: "FlaskConical", title: "Logic abuse", body: "Race conditions, state-machine misuse, business-logic bypass." },
    { icon: "FileText", title: "Report", body: "Findings with PoCs and remediation guidance." },
    { icon: "RefreshCw", title: "Retest", body: "Re-run every PoC against the fix." },
  ],
  {
    core: ["Burp Suite Pro", "Caido", "Custom GraphQL fuzzer", "Repeater chains for race-condition testing", "Frida for client-side hardening review"],
    outputs: ["Severity-ranked findings", "Reproducible PoCs", "Auth/API surface map", "Logic-abuse scenarios", "Retest sign-off"],
  },
  [
    "Authorization and IDOR/BOLA findings with repros",
    "Business-logic abuse scenarios with concrete impact",
    "Frontend / supply-chain risk inventory",
    "Retest confirmation against fixes",
  ],
  [
    { q: "Do you cover SPAs and APIs separately?", a: "We cover them together when they're together. Modern web apps don't separate the SPA from the API — neither do we." },
    { q: "What about GraphQL?", a: "Yes. GraphQL has its own injection, authorization, and DoS surface. We have a custom fuzzer for it." },
    { q: "How long does it take?", a: "2–6 weeks depending on app size and integration surface." },
  ]
);

const PAGE_MOBILE = _w2(
  "mobile",
  "mobile_application_testing",
  "Mobile Application Testing",
  "Mobile apps run on hostile devices, talk to mutable backends, and store secrets in places attackers can read. We audit the client, the wire, and the trust assumptions in between.",
  ["Solutions", "Web2 Security", "Mobile Application Testing"],
  [
    "iOS and Android storage at rest (Keychain / Keystore use)",
    "Network posture and certificate pinning",
    "Inter-process communication and deep-link handling",
    "Authentication, session, and biometric flows",
    "Reverse-engineering surface and tamper resistance",
    "Backend authorization specific to mobile clients",
  ],
  [
    { icon: "Smartphone", title: "Local storage exposure", body: "Secrets in plist or SharedPreferences. Keychain misuse. Insecure backup posture that exposes credentials to forensic tools." },
    { icon: "Wifi", title: "Network and pinning failures", body: "Pinning that's bypassable, downgrade to weaker TLS, and developer overrides shipped to production." },
    { icon: "Plug", title: "IPC and deep-link abuse", body: "Exported activities/services that accept unauthenticated calls. Deep-link handlers that grant ambient session." },
  ],
  [
    { icon: "Layers", title: "Static analysis", body: "Binary, manifest, and entitlements review." },
    { icon: "Skull", title: "Threat model", body: "Lost-device, jailbroken/rooted, and hostile-companion-app scenarios." },
    { icon: "Bug", title: "Dynamic testing", body: "Frida instrumentation, MITM with custom CA, runtime-flow analysis." },
    { icon: "FlaskConical", title: "Backend testing", body: "Mobile-specific API surface that the web client can't reach." },
    { icon: "FileText", title: "Report", body: "Findings tied to realistic attacker capability." },
    { icon: "RefreshCw", title: "Retest", body: "Re-run every PoC against the fix." },
  ],
  {
    core: ["Frida + Objection", "MobSF", "Burp Suite Pro with mobile profile", "Custom pinning-bypass rig", "Hopper / Ghidra for binary review"],
    outputs: ["Storage and entitlement findings", "Network posture report", "IPC / deep-link abuse repros", "Backend mobile-API findings", "Retest sign-off"],
  },
  [
    "Local storage and keychain findings with repros",
    "Network and pinning posture report",
    "IPC and deep-link abuse scenarios",
    "Mobile-specific backend authorization findings",
  ],
  [
    { q: "iOS, Android, or both?", a: "Both, by default. The threat models share vocabulary but differ in practice — iOS pinning vs. Android Network Security Config aren't the same conversation." },
    { q: "Do you test on jailbroken / rooted devices?", a: "Yes. The lost-device and rooted-device threat models are part of every mobile engagement we run." },
    { q: "How long does it take?", a: "2–5 weeks depending on app surface and tamper-resistance scope." },
  ]
);

const PAGE_DESKTOP = _w2(
  "desktop",
  "desktop_application_testing",
  "Desktop Application Testing",
  "Desktop apps still run privileged code on user machines. Electron, native, packaged, sandboxed — every architecture has a different threat model and we audit the right one.",
  ["Solutions", "Web2 Security", "Desktop Application Testing"],
  [
    "Electron / native runtime and IPC posture",
    "Local file handling and update-channel integrity",
    "Privilege model and sandbox boundary verification",
    "Memory-safety class bugs (where applicable)",
    "Telemetry, logging, and side-channel exposure",
    "OS-specific permission handling (macOS / Windows / Linux)",
  ],
  [
    { icon: "Monitor", title: "Runtime and IPC exposure", body: "Electron contextBridge gaps, native-helper RPC accepting unauthenticated calls, and IPC channels that span trust boundaries." },
    { icon: "Download", title: "Update-channel integrity", body: "Updates without signing, side-loading paths, and rollback attacks that downgrade to vulnerable builds." },
    { icon: "ShieldAlert", title: "Privilege escalation", body: "Helper services that run with elevated privilege and accept inputs from non-privileged contexts. The classic local-priv-esc surface." },
  ],
  [
    { icon: "Layers", title: "Architecture review", body: "Runtime model, IPC graph, privilege boundaries." },
    { icon: "Skull", title: "Threat model", body: "Local-attacker, malicious-update, and untrusted-input scenarios." },
    { icon: "Bug", title: "Static review", body: "Native code, IPC handlers, file-handling routines." },
    { icon: "FlaskConical", title: "Dynamic testing", body: "Runtime instrumentation, fuzzing where it pays off, IPC abuse." },
    { icon: "FileText", title: "Report", body: "Findings with PoCs and concrete impact." },
    { icon: "RefreshCw", title: "Retest", body: "Re-run the PoC against the fix." },
  ],
  {
    core: ["Frida for runtime instrumentation", "WinDbg / lldb for native review", "Custom Electron-IPC fuzzer", "Update-channel MITM rig", "OS-specific privilege analyzers"],
    outputs: ["IPC and runtime findings", "Update-channel posture", "Privilege-escalation repros", "Memory-safety scan results", "Retest sign-off"],
  },
  [
    "Runtime and IPC findings with repros",
    "Update-channel and signing posture report",
    "Privilege-escalation and sandbox findings",
    "Retest confirmation against fixes",
  ],
  [
    { q: "Electron or native?", a: "Both. Electron audits look like web app + IPC. Native audits look like binary + memory safety. Same engagement, different specialists." },
    { q: "Do you cover macOS code-signing and notarization?", a: "Yes. Apple's signing posture has its own gotchas — entitlement scope, hardened runtime, and notarization gaps are scoped explicitly." },
    { q: "How long does it take?", a: "3–6 weeks depending on architecture and OS coverage." },
  ]
);

// ====================================================================
// §§19-22 — AI Security
// ====================================================================
const _ai = (slug, label, title, subhead, breadcrumb, coverage, cards, processSteps, tools, deliverables, faqItems) => ({
  slug, template: "structured", pillar: "AI Security", pillarHref: "/solutions/ai",
  breadcrumb,
  hero: { label, title, subhead },
  coverage: { label: "coverage", title: "What we cover", items: coverage },
  failureModes: { label: "failure_modes", title: "Common Failure Modes", cards },
  process: { label: "process", title: "How we work", steps: processSteps },
  tools: _tools(tools.core, tools.outputs),
  deliverables: { label: "deliverables", title: "Deliverables", items: deliverables },
  caseStudy: { name: "AI Agent Security Engagement", tag: "AI Security · Agent", weeks: "5 weeks", findings: "21 / 21 fixed", coverage: "Agent + tools" },
  testimonial: 1,
  faq: _faq("faq", faqItems),
});

const PAGE_AI_AGENT = _ai(
  "agent",
  "ai_agent_audit",
  "AI Agent Audit",
  "AI agents combine LLM reasoning with real tool access. The failure modes are new: prompt manipulation, tool boundary erosion, planning loops that escape scope. We audit the agent itself, not just the model.",
  ["Solutions", "AI Security", "AI Agent Audit"],
  [
    "Tool-call authorization and scope boundaries",
    "Prompt and instruction injection across context channels",
    "Planning loops, escape paths, and step-bound enforcement",
    "Memory and state-poisoning surfaces",
    "Tool-result injection (e.g. RAG document attacks)",
    "Cost, rate-limit, and infinite-loop posture",
  ],
  [
    { icon: "Bot", title: "Tool-boundary erosion", body: "Agents that interpret system instructions as suggestions when user instructions disagree. Tool authorization that the agent talks itself out of under social pressure." },
    { icon: "MessagesSquare", title: "Indirect prompt injection", body: "Hostile content reached via RAG, web fetch, or tool output that re-writes the agent's intended task. The model can't tell whose instructions to follow." },
    { icon: "Repeat", title: "Planning loops and scope escape", body: "Agents that retry their way out of constraints. Step bounds violated through plan reformulation. Goal substitution under self-correction." },
  ],
  [
    { icon: "Layers", title: "Architecture review", body: "Tool surface, context channels, state model. Where instructions can enter and what they can affect." },
    { icon: "Skull", title: "Threat model", body: "Hostile-user, hostile-document, hostile-tool-result, and hostile-companion-agent scenarios." },
    { icon: "FileText", title: "Prompt review", body: "System prompt, tool descriptions, and the gap between intended and actual policy." },
    { icon: "FlaskConical", title: "Adversarial testing", body: "Injection across every context channel. Step-bound abuse. Memory-poisoning rigs." },
    { icon: "ClipboardCheck", title: "Report", body: "Findings tied to concrete user-impact scenarios." },
    { icon: "RefreshCw", title: "Retest", body: "Re-run the abuse case against the fix." },
  ],
  {
    core: ["Custom adversarial harness", "PromptInjection / Garak benchmarks", "Tool-trace recording rig", "RAG-poisoning simulator", "Step-bound enforcement tester"],
    outputs: ["Tool-boundary findings with repros", "Injection-class repros across channels", "Step-bound and loop findings", "Memory-poisoning scenarios", "Retest sign-off"],
  },
  [
    "Tool-boundary erosion findings with repros",
    "Indirect-injection scenarios across every channel",
    "Planning-loop and scope-escape findings",
    "Retest confirmation against fixes",
  ],
  [
    { q: "What's an agent audit vs. an LLM audit?", a: "LLM audit reviews the model's safety and behavior in isolation. Agent audit reviews the system around the model — tools, memory, planning, real-world side effects. Different scope, overlapping vocabulary." },
    { q: "Do you cover RAG?", a: "Yes. RAG is the most common indirect-injection surface in 2026 deployments. Document-level injection is part of every agent engagement." },
    { q: "How long does it take?", a: "3–6 weeks depending on tool surface and integration depth." },
  ]
);

const PAGE_CHATBOT = _ai(
  "chatbot",
  "chatbot_security",
  "Chatbot Security",
  "Customer-facing chatbots become spokespeople for your company under pressure. We audit refusal posture, brand safety, data-leakage paths, and the prompt-injection surface through every input channel.",
  ["Solutions", "AI Security", "Chatbot Security"],
  [
    "Refusal posture and brand-safety boundaries",
    "Data leakage through context, tools, and memory",
    "Prompt and jailbreak resistance across channels",
    "Output-injection (e.g. into downstream systems)",
    "Cost and rate-limit DoS surface",
    "PII handling and compliance posture",
  ],
  [
    { icon: "MessagesSquare", title: "Brand and refusal failures", body: "Bots that promise refunds, make unauthorized commitments, or break refusal under role-play and authority-pressure attacks." },
    { icon: "Database", title: "Data leakage", body: "Context that includes secrets, system-prompt extraction, and RAG documents leaked to users who shouldn't see them." },
    { icon: "Bug", title: "Output injection", body: "Bot output rendered in HTML, executed as code, or stored as authoritative content downstream — and weaponized through the bot." },
  ],
  [
    { icon: "Layers", title: "Surface review", body: "Channels (web, app, voice), prompt structure, tool surface, downstream consumers." },
    { icon: "Skull", title: "Threat model", body: "Hostile-user, hostile-input-channel, brand-pressure, and data-extraction scenarios." },
    { icon: "Bug", title: "Adversarial testing", body: "Jailbreak rig, role-play pressure, system-prompt extraction, RAG-leakage probing." },
    { icon: "FlaskConical", title: "Output testing", body: "Where output goes, what it's rendered as, what it can affect." },
    { icon: "FileText", title: "Report", body: "Findings tied to concrete brand or user impact." },
    { icon: "RefreshCw", title: "Retest", body: "Re-run the abuse case against the fix." },
  ],
  {
    core: ["Garak adversarial harness", "Custom jailbreak corpus", "RAG-leakage simulator", "System-prompt extraction rig", "Output-injection downstream tester"],
    outputs: ["Refusal-posture findings", "Data-leakage scenarios", "Output-injection findings", "Cost/DoS posture report", "Retest sign-off"],
  },
  [
    "Refusal-posture findings with repros",
    "Data-leakage scenarios across context and tools",
    "Output-injection findings tied to downstream systems",
    "Retest confirmation against fixes",
  ],
  [
    { q: "What's the most common chatbot bug?", a: "System-prompt extraction. Most bots leak their instructions to a determined user — and the leaked instructions tell the next attacker exactly how to break refusal." },
    { q: "Do you audit voice channels?", a: "Yes. Voice chatbots add a separate threat surface — TTS hallucination, ASR errors as injection vectors, and prosody-based pressure attacks." },
    { q: "How long does it take?", a: "2–4 weeks depending on channel count and tool surface." },
  ]
);

const PAGE_LLM = _ai(
  "llm",
  "llm_integration_audit",
  "LLM Integration Audit",
  "When LLMs ship as features inside other software, the integration surface is where bugs live — not the model. We audit the seam: prompts, output handling, fallback behavior, and the trust assumptions baked into 'the model said so.'",
  ["Solutions", "AI Security", "LLM Integration Audit"],
  [
    "Prompt construction and template-injection surface",
    "Output parsing, validation, and downstream effects",
    "Fallback and degraded-mode behavior",
    "Cost, rate-limit, and timeout posture",
    "Logging and PII handling in trace data",
    "Model-swap and provider-failover safety",
  ],
  [
    { icon: "Brain", title: "Prompt-template injection", body: "User input that breaks out of the template structure and rewrites the system instruction — the LLM equivalent of SQL injection." },
    { icon: "FileCode2", title: "Output trust failures", body: "Code generated by the model executed without sandbox. JSON 'guaranteed' to validate that doesn't. Structured-output assumptions that hold 99% of the time." },
    { icon: "Activity", title: "Cost and DoS posture", body: "User inputs that drive the bill. Long-tail prompts that hit timeouts. Token-bomb patterns that bypass rate limits." },
  ],
  [
    { icon: "Layers", title: "Integration review", body: "How prompts get built, where output goes, what assumptions hold." },
    { icon: "Skull", title: "Threat model", body: "Hostile-user-input, hostile-context, and untrusted-output scenarios." },
    { icon: "Bug", title: "Injection testing", body: "Template injection, instruction-override, structured-output violation." },
    { icon: "FlaskConical", title: "Output handling", body: "What happens when the LLM returns garbage, malicious code, or PII." },
    { icon: "FileText", title: "Report", body: "Findings tied to integration-level impact." },
    { icon: "RefreshCw", title: "Retest", body: "Re-run abuse cases against the fix." },
  ],
  {
    core: ["Custom prompt-template fuzzer", "Output-injection downstream tester", "Cost/DoS load harness", "Garak baseline", "PII-leakage scanner for trace data"],
    outputs: ["Prompt-template findings", "Output-trust failure scenarios", "Cost/DoS posture report", "PII-handling findings", "Retest sign-off"],
  },
  [
    "Prompt-template injection findings with repros",
    "Output-trust failure scenarios with downstream impact",
    "Cost and rate-limit posture findings",
    "Retest confirmation against fixes",
  ],
  [
    { q: "What if we use a managed model API?", a: "The model isn't the audit target — your integration is. Even with a managed provider, the prompts, output handling, and fallback behavior are yours to get right." },
    { q: "Do you cover fine-tuned models?", a: "Yes. Fine-tuning introduces its own training-data and evaluation surface, scoped explicitly when it's in play." },
    { q: "How long does it take?", a: "2–4 weeks depending on integration complexity." },
  ]
);

const PAGE_AUTOMATION = _ai(
  "automation",
  "automation_workflow_audit",
  "Automation & Workflow Audit",
  "AI-driven workflows chain models, tools, and decisions across systems. Each link is a trust boundary; each boundary is a place to fail. We audit the chain end-to-end, not just the prompts.",
  ["Solutions", "AI Security", "Automation & Workflow Audit"],
  [
    "Trigger surface and input validation",
    "Step-to-step trust assumptions and authorization",
    "External tool / API integration safety",
    "Failure-mode and rollback behavior",
    "Audit trail, logging, and reproducibility",
    "Cost, rate-limit, and runaway-loop posture",
  ],
  [
    { icon: "Workflow", title: "Trigger and input abuse", body: "Workflows triggered by untrusted inputs (email, webhook, queue message) without proper validation. The trigger is the injection point." },
    { icon: "GitBranch", title: "Step-trust failures", body: "Each step trusting the previous step's output without verifying. Cascading errors that look like 'the AI made a mistake' but are actually trust-graph bugs." },
    { icon: "AlertTriangle", title: "Failure-mode and rollback", body: "Workflows with no defined behavior on partial failure. Idempotency assumptions that don't hold. Side effects that can't be undone." },
  ],
  [
    { icon: "Layers", title: "Workflow review", body: "Map every step, trigger, and external call. The trust graph." },
    { icon: "Skull", title: "Threat model", body: "Hostile-trigger, hostile-step-output, and partial-failure scenarios." },
    { icon: "Bug", title: "Injection testing", body: "At every input point — trigger, intermediate output, external API." },
    { icon: "FlaskConical", title: "Failure-mode testing", body: "Partial-failure scenarios, idempotency probes, rollback verification." },
    { icon: "FileText", title: "Report", body: "Findings tied to workflow-level impact." },
    { icon: "RefreshCw", title: "Retest", body: "Re-run the abuse case against the fix." },
  ],
  {
    core: ["Custom workflow tracer", "Step-output injection harness", "Partial-failure simulator", "Idempotency probe rig", "External-API MITM"],
    outputs: ["Trigger-injection findings", "Step-trust failure scenarios", "Failure-mode and rollback findings", "Audit-trail completeness report", "Retest sign-off"],
  },
  [
    "Trigger and step-injection findings with repros",
    "Failure-mode and rollback gaps with concrete impact",
    "Audit-trail and reproducibility findings",
    "Retest confirmation against fixes",
  ],
  [
    { q: "What kinds of workflows do you cover?", a: "Anything that chains AI decisions with tool actions — agent frameworks (LangChain, LlamaIndex), no-code platforms (n8n, Zapier with AI steps), and custom workflow engines." },
    { q: "Do you audit the AI steps separately?", a: "Yes. Each AI step is its own LLM-integration audit; the workflow audit covers the chain." },
    { q: "How long does it take?", a: "2–5 weeks depending on workflow count and step depth." },
  ]
);

// ====================================================================
// §§23-26 — Security Consultancy
// ====================================================================
const _con = (slug, label, title, subhead, breadcrumb, coverage, cards, processSteps, tools, deliverables, faqItems) => ({
  slug, template: "structured", pillar: "Security Consultancy", pillarHref: "/solutions/consultancy",
  breadcrumb,
  hero: { label, title, subhead },
  coverage: { label: "coverage", title: "What we cover", items: coverage },
  failureModes: { label: "failure_modes", title: "Common Failure Modes", cards },
  process: { label: "process", title: "How we work", steps: processSteps },
  tools: _tools(tools.core, tools.outputs),
  deliverables: { label: "deliverables", title: "Deliverables", items: deliverables },
  caseStudy: { name: "Embedded Security Engagement", tag: "Consultancy", weeks: "12 weeks", findings: "Continuous", coverage: "Pre-mainnet" },
  testimonial: 2,
  faq: _faq("faq", faqItems),
});

const PAGE_SHIFT_LEFT = _con(
  "shift-left",
  "shift_left_security",
  "Shift-Left Security (SSDL)",
  "The cheapest place to fix a security bug is before it's written. We embed with engineering — secure-by-design reviews, threat models tied to story points, and developer-facing tooling that makes the safe path the easy path.",
  ["Solutions", "Security Consultancy", "Shift-Left Security (SSDL)"],
  [
    "Secure-design reviews tied to your sprint cadence",
    "Threat modeling at the feature-spec level",
    "Developer-facing tool integration (CI/CD, pre-commit, IDE)",
    "Security-story authoring and acceptance criteria",
    "Code-review checklists tuned to your stack",
    "Security training delivered as office hours, not slide decks",
  ],
  [
    { icon: "Clock", title: "'Audit at the end' anti-pattern", body: "Security work scheduled after feature-complete. By then the architecture is fixed; you're patching, not designing. The cheap fixes are no longer available." },
    { icon: "ListChecks", title: "Tooling that doesn't fit", body: "Static analyzers tuned to a generic stack, generating noise. Developers learn to ignore the security column. The signal is lost in the volume." },
    { icon: "Users", title: "Security-as-other-team", body: "Security reviews delivered as gates, not collaboration. Developers route around them or build resentment. Either way, the safe path stops being the easy path." },
  ],
  [
    { icon: "Compass", title: "Posture review", body: "Where security work happens today, who owns it, what gates exist." },
    { icon: "Layers", title: "Embed", body: "Security engineer in your sprint cadence. Standup, planning, retro." },
    { icon: "FileText", title: "Threat models", body: "Per-feature, written like specs. Acceptance criteria, not slide decks." },
    { icon: "FlaskConical", title: "Tooling integration", body: "Pre-commit, CI/CD, IDE. Tuned to your stack so signal beats noise." },
    { icon: "RefreshCw", title: "Iterate", body: "Quarterly review — what's working, what's noise, what to drop." },
    { icon: "TrendingUp", title: "Hand off", body: "When your team can run it without us, we step back to advisory." },
  ],
  {
    core: ["Stack-specific Semgrep / CodeQL rule sets", "Threat-model template library", "CI/CD security-gate harness", "Pre-commit secret + dep scanning", "Developer-facing IDE plugins"],
    outputs: ["Per-feature threat models", "Tuned tooling integration", "Quarterly posture report", "Security-story library", "Office-hours session notes"],
  },
  [
    "Embedded security engineer in your sprint cadence",
    "Per-feature threat models tied to acceptance criteria",
    "Tuned tooling integration with measured signal-to-noise",
    "Quarterly posture review and metrics",
  ],
  [
    { q: "How is this different from a one-time audit?", a: "An audit is a snapshot. SSDL is the practice that makes audits boring — most findings are caught in design review, not after." },
    { q: "How embedded is 'embedded'?", a: "Configurable. Light-touch is weekly office hours. Heavy is full-time security engineer in your sprint. Most teams land in the middle." },
    { q: "How long does an engagement run?", a: "3–12 months typically, with a quarterly review and explicit hand-off criteria." },
  ]
);

const PAGE_TEST_FUZZ = _con(
  "test-fuzz",
  "test_fuzz_driven_development",
  "Test & Fuzz-Driven Development",
  "The best test suite is one your team writes themselves — but most teams don't know what to test for or how to fuzz responsibly. We coach the practice and build the harnesses, then hand it back.",
  ["Solutions", "Security Consultancy", "Test & Fuzz-Driven Development"],
  [
    "Property-based testing for invariants that matter",
    "Fuzz harnesses tuned to your stack",
    "Coverage analysis and gap identification",
    "CI integration and continuous-fuzzing posture",
    "Bug-triage and developer-facing reporting",
    "Pairing sessions to transfer the practice",
  ],
  [
    { icon: "ListChecks", title: "Test-suite illusion", body: "100% coverage, 0% adversarial. Tests that confirm the happy path and miss the bad path. The test suite says everything works; the audit says it doesn't." },
    { icon: "FlaskConical", title: "Fuzzing without invariants", body: "Fuzzers that crash on undefined behavior and ship green. Without invariants, fuzzing measures crash resistance, not correctness." },
    { icon: "Activity", title: "Fuzzing as a one-time event", body: "Fuzzing once, finding nothing, declaring victory. Continuous fuzzing finds the regressions that one-time runs never could." },
  ],
  [
    { icon: "Compass", title: "Posture review", body: "What's tested today, what's fuzzed, what isn't." },
    { icon: "FileText", title: "Invariant authoring", body: "Pair with engineers to write the properties that matter for your system." },
    { icon: "FlaskConical", title: "Harness build", body: "Property tests, fuzzing harnesses, integration into CI." },
    { icon: "Activity", title: "Continuous run", body: "Hosted continuous-fuzzing infrastructure or transfer to your CI." },
    { icon: "Bug", title: "Triage", body: "Pair on bug triage and root-cause analysis as findings come in." },
    { icon: "TrendingUp", title: "Transfer", body: "When the team owns the practice, we step back to advisory." },
  ],
  {
    core: ["Foundry property tests (Web3)", "Medusa / Echidna stateful fuzzing", "Halmos symbolic checking", "Hypothesis / proptest for backend", "Continuous-fuzzing CI templates"],
    outputs: ["Per-system invariant catalog", "Property test + fuzz-harness library", "Continuous-fuzzing CI integration", "Triage runbook", "Pairing-session notes"],
  },
  [
    "Invariant catalog written by your engineers, with us",
    "Property test and fuzz-harness library tuned to your stack",
    "Continuous-fuzzing infrastructure or CI integration",
    "Documented hand-off when your team owns the practice",
  ],
  [
    { q: "Do you write the tests for us?", a: "We pair-write them with your engineers. The point is transfer — code we write alone gets stale; code your team writes with our coaching gets maintained." },
    { q: "What's the difference between fuzzing and property testing?", a: "Property testing checks invariants on generated inputs. Fuzzing finds inputs that crash. They overlap — the best harnesses do both." },
    { q: "How long does an engagement run?", a: "2–6 months with a defined hand-off plan." },
  ]
);

const PAGE_PRE_AUDIT = _con(
  "pre-audit",
  "pre_audit_dynamic_testing",
  "Pre-Audit Dynamic Testing",
  "The point of the audit is to find your worst bugs. The point of pre-audit testing is to find them before the audit clock starts — so the audit covers depth, not low-hanging fruit.",
  ["Solutions", "Security Consultancy", "Pre-Audit Dynamic Testing"],
  [
    "Dynamic testing at build-stage, before the formal audit",
    "Fuzz-harness build with stack-appropriate tooling",
    "Property-test authoring for known critical invariants",
    "Triage and remediation pairing for findings",
    "Audit-readiness posture review",
    "Hand-off into the formal audit engagement",
  ],
  [
    { icon: "Clock", title: "Audit-clock waste", body: "Formal audits that spend week one finding bugs that fuzz testing would have caught in an afternoon. Expensive auditor hours on cheap findings." },
    { icon: "AlertTriangle", title: "Late-stage architecture findings", body: "Findings that turn out to require architecture changes — discovered when there's no time to architect. Pre-audit catches these earlier, when they're still fixable." },
    { icon: "Bug", title: "Regression risk during audit", body: "Code changing during the audit window. Each change is a re-scoping conversation. Pre-audit testing stabilizes the codebase before the formal engagement starts." },
  ],
  [
    { icon: "Compass", title: "Scope review", body: "What's being audited, what invariants matter, what's been tested." },
    { icon: "FlaskConical", title: "Harness build", body: "Stack-appropriate fuzz harnesses and property tests." },
    { icon: "Activity", title: "Run + triage", body: "Continuous run for the pre-audit window. Pair on triage as findings come in." },
    { icon: "Bug", title: "Remediation pairing", body: "Engineering-side fix work with security review at the diff level." },
    { icon: "ClipboardCheck", title: "Audit-readiness review", body: "Clean baseline, frozen scope, clear documentation hand-off." },
    { icon: "TrendingUp", title: "Hand off", body: "Audit kicks off against a stable, fuzz-validated codebase." },
  ],
  {
    core: ["Foundry / Medusa / Echidna (Web3)", "Stack-specific property test scaffolding", "Continuous-fuzzing run for the pre-audit window", "Triage runbook", "Audit-readiness checklist"],
    outputs: ["Pre-audit findings catalog", "Fuzz-harness deliverable", "Remediation diff history", "Audit-readiness posture report", "Hand-off documentation"],
  },
  [
    "Findings caught before the audit clock starts",
    "Stack-appropriate fuzz harness for your team to keep",
    "Audit-readiness posture report",
    "Clean hand-off into the formal audit",
  ],
  [
    { q: "Why not just run the audit?", a: "Because the audit clock is expensive and it's better spent on depth than on bugs that any fuzz harness would catch. Pre-audit testing pays for itself in audit-hour savings." },
    { q: "Who runs the audit afterwards?", a: "Either us or another firm — we don't gate the audit on having done the pre-audit. The harnesses are yours either way." },
    { q: "How long does it take?", a: "2–4 weeks before the formal audit." },
  ]
);

const PAGE_RESEARCH = _con(
  "research",
  "security_research_engineering",
  "Security Research & Engineering",
  "Some questions don't fit an audit shape. New cryptography. Novel consensus. AI-attack research. We take on bespoke research engagements where the scope is 'what would actually break this?'",
  ["Solutions", "Security Consultancy", "Security Research & Engineering"],
  [
    "Cryptographic protocol design review",
    "Novel-consensus and adversarial-economics research",
    "AI-attack and defense research engagements",
    "Custom tooling and detector development",
    "Conference / paper authorship support",
    "Co-disclosed research with publication agreements",
  ],
  [
    { icon: "Microscope", title: "Question doesn't fit an audit", body: "The thing being asked is research, not a checklist run. 'Is this protocol safe' before the protocol exists. 'Does this attack work' before it's been demonstrated." },
    { icon: "Brain", title: "Novel surface, no playbook", body: "AI-driven attack and defense. ZK-circuit failure modes. New consensus families. The auditor's playbook hasn't been written yet — that's why you're calling us." },
    { icon: "FileText", title: "Output is a paper, not a PDF", body: "Research engagements often need a paper, a CVE, a coordinated disclosure. The deliverable shape doesn't match a normal audit deliverable." },
  ],
  [
    { icon: "Compass", title: "Scope shape", body: "Together: what's the actual question, what would the answer look like, who needs to read the output." },
    { icon: "Layers", title: "Background", body: "Literature review, prior-art mapping, existing-tooling survey." },
    { icon: "FlaskConical", title: "Hands-on", body: "Build the harness, prove the attack, characterize the failure." },
    { icon: "FileText", title: "Write-up", body: "In whatever shape the audience needs — paper, advisory, internal memo, talk." },
    { icon: "Users", title: "Disclosure", body: "Coordinated disclosure, embargoes, co-authoring with affected parties." },
    { icon: "TrendingUp", title: "Transfer", body: "Findings, harnesses, and tooling delivered for the team to keep." },
  ],
  {
    core: ["Custom research harness per engagement", "ZK-tooling (circom, Halo2, Plonky2 as relevant)", "Adversarial-ML harness (Garak / custom)", "Formal-methods tooling (TLA+, Coq, Lean as relevant)", "Tooling we build during the engagement"],
    outputs: ["Research write-up in the right shape for the audience", "Custom tooling delivered for reuse", "Coordinated-disclosure support", "Conference / paper authorship support", "Hand-off documentation"],
  },
  [
    "Research output in the right shape for your audience",
    "Custom tooling and harnesses delivered for reuse",
    "Coordinated-disclosure support where required",
    "Conference and paper authorship support",
  ],
  [
    { q: "What kinds of questions fit?", a: "Anything where the answer requires building something to find out. New cryptographic constructions, novel consensus designs, AI-attack research, ZK-circuit reviews — the engagements where 'audit' is the wrong word." },
    { q: "Do you publish?", a: "When the engagement allows. We co-author with affected parties under coordinated-disclosure agreements when appropriate." },
    { q: "How long does an engagement run?", a: "Weeks to quarters. The shape of the question drives the timeline, not a fixed package." },
  ]
);

Object.assign(window, {
  PAGE_L1_L2, PAGE_CONSENSUS, PAGE_TOKENOMICS, PAGE_WALLET,
  PAGE_DAPP_INTEGRATION, PAGE_WALLET_EXTENSION,
  PAGE_PENTEST, PAGE_WEB_APP, PAGE_MOBILE, PAGE_DESKTOP,
  PAGE_AI_AGENT, PAGE_CHATBOT, PAGE_LLM, PAGE_AUTOMATION,
  PAGE_SHIFT_LEFT, PAGE_TEST_FUZZ, PAGE_PRE_AUDIT, PAGE_RESEARCH,
});
