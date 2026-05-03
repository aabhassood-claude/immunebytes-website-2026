// ============================================================
// SERVICE PAGE DATA — Web3 sub-services (§§5, 6, 8–14)
// Each entry conforms to the SCA structured template (§5),
// except §7 which uses the prose template.
// ============================================================

const STD_TOOLS_LOGOS = ["PortSwigger", "GitHub", "MITRE", "ATT&CK", "OWASP"];
const STD_TOOLS_CAPTION = "We map findings to OWASP Top 10, SWC Registry, and our own internal checklist.";

// ---------- §5 Smart Contract Audit ----------
const PAGE_SCA = {
  slug: "smart-contract",
  template: "structured",
  pillar: "Web3 Security",
  pillarHref: "/solutions/web3",
  breadcrumb: ["Solutions", "Web3 Security", "Smart Contract Audit"],
  hero: {
    label: "smart_contract_audit",
    title: "Smart Contract Audit",
    subhead:
      "Smart contracts are immutable by default and exploitable by nature. Once value is live, attackers don't 'report bugs,' they devour your TVL. We prioritize real bad paths and economic abuses, not cosmetic linting.",
  },
  coverage: {
    label: "coverage",
    title: "What we cover",
    items: [
      "Access control and privilege boundaries",
      "State transitions, invariants, and asset accounting",
      "External call, reentrancy, and replay surfaces",
      "Upgradeability, initialization, and governance amendments",
      "Oracle/price dependencies and MEV exposure",
      "Inflation/multipliers, fee logic, and economic redirects",
    ],
  },
  failureModes: {
    label: "failure_modes",
    title: "Common Failure Modes",
    cards: [
      {
        icon: "Wallet",
        title: "Asset loss and accounting breaks",
        body: "Share-math drift, fee-rounding leakage, and inflation/multiplier bugs that silently bleed user funds while passing every linter and unit test.",
      },
      {
        icon: "KeyRound",
        title: "Control-plane compromise",
        body: "Initializer races, missing access modifiers, governance amendments that can be replayed or front-run, and upgrade slots that an attacker can quietly seize.",
      },
      {
        icon: "Workflow",
        title: "Reentrancy and external-call traps",
        body: "Cross-function and cross-contract reentrancy, callback-driven state corruption, and flash-loan-amplified pathways that turn a small primitive into a draining loop.",
      },
    ],
  },
  process: {
    label: "process",
    title: "How we work",
    steps: [
      { icon: "FileText", title: "Spec first", body: "Document invariants, trust properties, and what the protocol promises before reading a single line of code." },
      { icon: "Eye", title: "Manual review", body: "Logic, environments, and trust boundaries. The senior auditor's read of how value moves and where authority lives." },
      { icon: "Skull", title: "Adversarial testing", body: "How could it fail? What's the worst case? We model attackers with realistic capabilities, not theoretical ones." },
      { icon: "Wand2", title: "Property checks", body: "Fuzzing and symbolic checks at edge points. Foundry, Medusa, Halmos. Catch what manual review and unit tests miss." },
      { icon: "ClipboardCheck", title: "Report + extract", body: "Each finding verified, reproducible, and tied to the invariant it violates. No noise — only what matters." },
      { icon: "RefreshCw", title: "Retest", body: "We retest every fix against the original repro. The path closes, or the finding stays open. No 'looks good.'" },
    ],
  },
  tools: {
    label: "tools",
    title: "Tools and Standards",
    coreTooling: ["Foundry (test, fuzz, invariant)", "Medusa property fuzzer", "Halmos symbolic checker", "Slither + Aderyn detectors", "Echidna for stateful fuzzing", "Tenderly + Anvil for fork-mode replay"],
    outputs: ["Severity-rated findings PDF", "Reproducible PoC tests", "Invariant-violation map", "Remediation playbook", "Retest sign-off letter"],
    outputsHeading: "Audit outputs",
    logos: STD_TOOLS_LOGOS,
    caption: STD_TOOLS_CAPTION,
  },
  deliverables: {
    label: "deliverables",
    title: "Deliverables",
    items: [
      "Findings prioritized by real potential and exploitability",
      "Proofs / tests / transactions for critical issues",
      "Clear invariants violated + conditions required",
      "Retest notes confirming fixes close the path",
    ],
  },
  caseStudy: { name: "Ethernity Project Audit", tag: "Web3 Security · Smart Contract", weeks: "6 weeks", findings: "31 / 31 fixed", coverage: "9 contracts" },
  testimonial: 1, // index into TESTIMONIALS
  faq: {
    label: "faq",
    title: "What You Need to Know?",
    subhead: "Frequently Asked Questions",
    items: [
      { q: "What is a smart contract audit?", a: "A code-and-economic review of your contracts where senior auditors model how an attacker would extract value, then verify each finding with a reproducible proof. The goal isn't 'no bugs found' — it's a documented, defensible understanding of where your protocol can fail." },
      { q: "Why audit before mainnet?", a: "Because mainnet is immutable and adversarial. Bugs found pre-deploy cost engineering time. Bugs found post-deploy cost TVL. The window between deploy and first incident is usually measured in days, not months." },
      { q: "What conditions do you fail?", a: "We fail engagements where the spec is undocumented and the team can't articulate their invariants — auditing without invariants is just guessing. We also fail when scope is set so tightly that real attack paths are out of bounds." },
      { q: "Automation is more useful, what's the difference?", a: "Slither and friends find what they were taught to find. Senior auditors find what the protocol's specific design makes possible. We use both — automation as a baseline, manual adversarial review as the actual product." },
      { q: "How long does it take?", a: "A typical SCA runs 2–6 weeks depending on contract count, complexity, and integration surface. We scope before we quote." },
      { q: "How much does it cost?", a: "Pricing is by complexity-week, not LOC. A simple staking contract is days; a lending protocol with custom oracles is weeks. Use the pricing calculator for an estimate." },
      { q: "What about the report?", a: "Severity-rated findings, reproducible PoCs, invariant map, and remediation guidance. Every fix gets a retest. The report is yours; we don't gate it behind public disclosure." },
      { q: "How do I share questions / How do I reach out?", a: "Send the repo, the spec (or a thread describing it), and your timeline to team@immunebytes.com. We respond within one business day with scoping questions and a draft engagement." },
    ],
  },
};

// ---------- §6 By Chain ----------
const PAGE_BY_CHAIN = {
  slug: "by-chain",
  template: "structured",
  pillar: "Web3 Security",
  pillarHref: "/solutions/web3",
  breadcrumb: ["Solutions", "Web3 Security", "Smart Contract Audit", "By Chain"],
  hero: {
    label: "by_chain",
    title: "By Chain",
    subhead:
      "EVM, Solana/Sealevel, and Move-family chains have different security models. A generic audit misses chain-specific footguns. We adjust the audit to the chain's runtime, account model, and tooling.",
  },
  coverage: {
    label: "coverage",
    title: "What we cover",
    items: [
      "Tradeoffs and transaction model differences",
      "Account/storage schemes and balancing patterns",
      "Program-runtime upgrade and deployment flows",
      "Cross-chain messaging, bridges, and relays",
      "Token standards and edge behaviors",
      "Monitoring and operational security assumptions",
    ],
  },
  failureModes: {
    label: "failure_modes",
    title: "Common Failure Modes",
    cards: [
      {
        icon: "Diamond",
        title: "EVM-family chain specifics",
        body: "Upgradeability misconfigurations and initializer issues. Delegatecall storage-layout traps. MEV exposure and fee/queue assumptions baked into protocol design.",
      },
      {
        icon: "TrainTrack",
        title: "Solana / Sealevel specifics",
        body: "Anchor CPI account-validation gaps. PDA derivation misuse and signer rules. CPI flow handling and program-state checks under parallel execution.",
      },
      {
        icon: "Boxes",
        title: "Move-family specifics",
        body: "Capability and resource storage assumptions. Object-ownership semantics and authentication gaps. Module/script design and string/numeric handling edges.",
      },
    ],
  },
  process: {
    label: "process",
    title: "How we work",
    steps: [
      { icon: "Layers", title: "Chain model", body: "Define what 'authority' and 'key' mean on this specific chain — the mental model an attacker would use." },
      { icon: "Skull", title: "Threat model", body: "Chain-native abuse paths and recovery expectations. What does the runtime let attackers do that the spec doesn't?" },
      { icon: "Eye", title: "Manual review", body: "Logic, environments, trust boundaries — chain-aware. Reading the code with the right runtime lens." },
      { icon: "FlaskConical", title: "Chain-native testing", body: "Fork-mode testing or chain-relevant simulation. Foundry forks for EVM; localnet replay for Solana; Move test harnesses for Aptos/Sui." },
      { icon: "FileText", title: "Report", body: "Findings tied to chain-specific exploitability, not generic CWE categories." },
      { icon: "RefreshCw", title: "Retest", body: "Fix verification against the chain-specific repro. We retest on the same runtime that produced the finding." },
    ],
  },
  tools: {
    label: "tools",
    title: "Tools and Standards",
    coreTooling: ["Foundry + Anvil (EVM)", "Anchor + Solana CLI (Sealevel)", "Aptos / Sui CLI (Move)", "Tenderly trace replay", "Slither + Aderyn", "Custom chain-specific detectors"],
    outputs: ["Severity-rated findings tied to chain runtime", "Chain-native PoC repros", "Invariant-violation map", "Chain-specific remediation guide", "Retest sign-off"],
    outputsHeading: "Supported chains",
    logos: STD_TOOLS_LOGOS,
    caption: STD_TOOLS_CAPTION,
  },
  deliverables: {
    label: "deliverables",
    title: "Deliverables",
    items: [
      "Chain-specific invariant list + violations",
      "Attack scenarios that matter on this chain in reality",
      "Retest focused on authority constraints",
      "Retest validation",
    ],
  },
  caseStudy: { name: "Ethernity Project Audit", tag: "Web3 Security · Multi-chain", weeks: "7 weeks", findings: "22 / 22 fixed", coverage: "EVM + Solana" },
  testimonial: 1,
  faq: {
    label: "faq",
    title: "What You Need to Know?",
    subhead: "Frequently Asked Questions",
    items: [
      { q: "How do contracts differ across EVM and custom chains?", a: "EVM is account-based with global state and a single execution thread per block. Solana is parallel with explicit account references; Move is resource-oriented with object-level ownership. The same business logic compiles to very different attack surfaces." },
      { q: "How do runtime differences break security testing?", a: "A reentrancy test that catches everything on EVM tells you nothing about Solana, where 'reentrancy' looks like CPI re-entry through a different program. Tests must be authored for the runtime they're checking." },
      { q: "Which chains do you specialize in?", a: "Deep coverage on EVM (Ethereum, Base, Arbitrum, Optimism, Polygon, BSC, Avalanche), Solana, Sui, Aptos. Working coverage on Starknet, zkSync, Cosmos. We turn down chains where we can't audit responsibly." },
      { q: "Do you do cross-chain protocol audits?", a: "Yes. Cross-chain is where most catastrophic failures happen — bridges, messaging layers, wrapped-asset accounting. Our cross-chain engagements include both endpoints and the relayer/oracle assumptions in between." },
      { q: "What kinds of tests do you do that are chain-specific?", a: "EVM: fork-mode adversarial replay, MEV simulation, upgrade-storage-layout checks. Solana: PDA derivation fuzzing, CPI graph analysis. Move: resource lifecycle property tests, capability-flow analysis." },
    ],
  },
};

// ---------- §7 By Project Type — PROSE TEMPLATE ----------
const PAGE_BY_PROJECT_TYPE = {
  slug: "by-project-type",
  template: "prose",
  pillar: "Web3 Security",
  pillarHref: "/solutions/web3",
  breadcrumb: ["Solutions", "Web3 Security", "Smart Contract Audit", "By Project Type"],
  hero: {
    label: "by_project_type",
    title: "By Project Type",
    subhead:
      "A DeFi lending protocol has different failure modes than an NFT marketplace. A wallet contract can't be tested like a GameFi rewards system. We don't run the same checklist on every contract and call it done — we shift our threat model to match what actually breaks in your project type.",
  },
  coverage: {
    label: "coverage",
    title: "What we cover",
    detailed: true,
    items: [
      { name: "DeFi protocols", body: "Most DeFi exploits are economic, not technical. We look for oracle manipulation, MEV extraction paths, share math that drifts under load, and governance attacks that make stealing profitable. Your invariants matter more than your linter warnings." },
      { name: "RWA (Real World Assets)", body: "The risk lives at the seams: where on-chain state meets off-chain custody, where compliance can be replayed, where governance can silently rewrite backing assumptions. We audit the full trust chain — not just the contract code." },
      { name: "NFT projects", body: "Minting rules, transfer restrictions, marketplace logic. The failure modes are specific: unauthorized duplication, ownership state desyncs, allowlist bypasses, royalty enforcement gaps. Standard reentrancy checks don't catch these." },
      { name: "GameFi economies", body: "It's an economy with game mechanics on top. We test for reward loops, emission exploits, anti-farming bypasses, and marketplace manipulation. If there is a way to print infinite value through 'normal' gameplay, we will find it." },
      { name: "Wallet contracts", body: "These fail catastrophically. One signature validation bug, one replay vector, one recovery logic mistake — and user funds are gone or permanently locked. We review authorization like an attacker: what can I sign once and replay forever?" },
    ],
  },
  prose: [
    {
      label: "how_we_adjust",
      title: "How we adjust",
      bg: "dark-green",
      paragraphs: [
        ['Different projects need different attack scenarios. ', { mono: "Flash loan testing" }, ' makes sense for DeFi, not for NFTs. ', { mono: "Signature replay" }, ' matters for wallets, not for lending pools. We build our test harnesses around what actually threatens your specific project type.'],
        ['The invariants change too. DeFi needs ', { mono: '"no free money"' }, ' guarantees. RWAs need ', { mono: '"supply always matches backing"' }, '. NFTs need ', { mono: '"no unauthorized minting"' }, '. GameFi needs ', { mono: '"rewards stay bounded"' }, '. Wallets need ', { mono: '"only authorized signers execute"' }, '. Generic audits miss this.'],
      ],
    },
    {
      label: "tools_and_approach",
      title: "Tools and approach",
      bg: "light",
      paragraphs: [
        ['We use ', { mono: 'Foundry' }, ' for testing across all types, but the test scenarios change completely. ', { mono: 'Medusa' }, ' and ', { mono: 'Halmos' }, ' for property checking when the invariants are clear. ', { mono: 'Certora' }, ' for formal verification on critical paths. The tooling is less important than knowing what to test for.'],
      ],
    },
    {
      label: "what_you_get",
      title: "What you get",
      bg: "dark-grid",
      titleGreen: true,
      paragraphs: [
        ['Reports that match your risk profile. DeFi clients get profit-path findings with economic impact. RWA projects get trust-chain analysis. NFT teams get concrete duplication scenarios. GameFi gets economy-collapse reproduction. Wallet projects get authorization-failure proofs. Fixes that actually work for your project type. Not copy-paste remediation advice — specific guidance on restoring the invariants that matter for what you\u2019re building.'],
        { closing: 'We test what breaks for your type of project, not what breaks in general.' },
      ],
    },
  ],
  caseStudy: { name: "cSigma Finance Audit", tag: "Web3 Security · DeFi", weeks: "8 weeks", findings: "24 / 24 fixed", coverage: "12 contracts" },
  testimonial: 1,
  faq: {
    label: "faq",
    title: "What You Need to Know?",
    subhead: "Frequently Asked Questions",
    items: [
      { q: "Why can't you use the same checklist for DeFi and NFTs?", a: "Because they fail differently. DeFi breaks when economic incentives are misaligned — oracle manipulation, MEV extraction, liquidity drains. NFTs break when ownership rules are inconsistent — unauthorized minting, transfer bypasses, supply cap violations. Same underlying tech, completely different attack surfaces." },
      { q: "What makes wallet audits unique?", a: "The blast radius. A bug in a wallet contract isn't an exploit on a single protocol — it's potentially every dapp the wallet integrates with. We audit signing flows, recovery logic, and EIP-712 message handling with that radius in mind." },
      { q: "How does GameFi auditing differ from DeFi?", a: "GameFi adds a meta-layer: 'normal' gameplay can be the exploit. We model both contract-level and game-mechanic-level abuse — reward loops, anti-farming bypass, marketplace manipulation, in-game item duplication. DeFi audits don't think about gameplay because they don't have to." },
      { q: "What drives cost differences between project types?", a: "Test-harness build cost. A DeFi protocol needs economic simulation; an NFT collection needs marketplace state modeling; a wallet needs signature-replay scaffolding. The contract-LOC matters less than the harness it requires to test responsibly." },
      { q: "When does complexity actually impact timeline and cost?", a: "When integrations expand — oracles, bridges, third-party protocols you compose with. A 500-LOC contract with three external dependencies takes longer than a 2,000-LOC monolith. The dependency graph is the timeline, not the line count." },
      { q: "What are the most common NFT vulnerabilities you find?", a: "Allowlist bypass via signature reuse, unauthorized minting through delegatecall paths, royalty enforcement gaps in custom marketplaces, and ownership desync between marketplaces and the underlying ERC-721 state. Reentrancy is rarely the issue — logic correctness is." },
      { q: "When should we choose project-type-specific auditing?", a: "Always, when the project type has well-known failure modes that generic audits miss. If you're building a DeFi protocol, an NFT marketplace, a wallet, or a GameFi economy, the type-specific scope catches what a CWE-driven checklist won't." },
    ],
  },
};

// ---------- §8 Protocol & Infrastructure Audit ----------
const PAGE_PROTOCOL = {
  slug: "protocol",
  template: "structured",
  pillar: "Web3 Security",
  pillarHref: "/solutions/web3",
  breadcrumb: ["Solutions", "Web3 Security", "Protocol & Infrastructure Audit"],
  hero: {
    label: "protocol_infrastructure_audit",
    title: "Protocol & Infrastructure Audit",
    subhead:
      "This is the 'core that cannot fail' — L1s, L2s, bridges, core APIs. We test consensus assumptions, cryptographic invariants, and economic alignment — because security isn't just one well-audited contract.",
  },
  coverage: {
    label: "coverage",
    title: "What we cover",
    items: [
      "Consensus and finality consistency under operation",
      "Validator incentives and slashing conditions",
      "Bridge message-passing integrity",
      "Cryptographic primitive usage and divergence",
      "Client software and upgradability",
      "Monitoring and operational threat models",
    ],
  },
  failureModes: {
    label: "failure_modes",
    title: "Common Failure Modes",
    cards: [
      { icon: "Network", title: "Integrity and consensus breaks", body: "Safety violations under realistic network partitions, finality regressions under validator collusion thresholds, and edge-case forks the spec didn't anticipate." },
      { icon: "GitMerge", title: "Bridge and messaging compromise", body: "Replayable messages, signature-set drift, relayer-trust assumptions baked in silently, and asset accounting that survives the wrap but not the unwrap." },
      { icon: "Scale", title: "Economic and incentive attacks", body: "Slashing schedules an attacker would profit from, validator strategies that out-game the protocol's intended Nash equilibrium, and bond economics that break under adversarial conditions." },
    ],
  },
  process: {
    label: "process",
    title: "How we work",
    steps: [
      { icon: "Layers", title: "Model the system", body: "Invariants, actors, and action definitions written down in language an attacker would use." },
      { icon: "Skull", title: "Threat model", body: "Technical and economic abuse capabilities, with concrete cost-of-attack ranges." },
      { icon: "Eye", title: "Deep review", body: "Clients, proofs, economics, upgrade paths. Senior auditors with protocol-engineering backgrounds." },
      { icon: "FlaskConical", title: "Simulation / validation", body: "Where it could fail under realistic conditions — adversarial fork scenarios, network-partition replays." },
      { icon: "FileText", title: "Report", body: "Findings tied to systemic exploitability, not isolated CWE categories." },
      { icon: "RefreshCw", title: "Retest", body: "We re-run the failure conditions after fixes land. The path closes, or the finding stays open." },
    ],
  },
  tools: {
    label: "tools",
    title: "Tools and Standards",
    coreTooling: ["Geth/Reth/Erigon for client diff testing", "Custom adversarial fork harness", "Hyperfine + signal-driven fault injection", "Relayer/oracle replay rig", "Slashing-condition simulator"],
    outputs: ["Systemic-risk findings with blast radius", "Reproducible failure scenarios", "Economic-attack cost analysis", "Upgrade-path remediation plan", "Retest sign-off"],
    outputsHeading: "Audit outputs",
    logos: STD_TOOLS_LOGOS,
    caption: STD_TOOLS_CAPTION,
  },
  deliverables: {
    label: "deliverables",
    title: "Deliverables",
    items: [
      "Systemic risk findings with clear blast radius",
      "Concrete failure scenarios and conditions",
      "Retest focused on invariants and incentives",
      "Retest validation at bond-level economic conditions",
    ],
  },
  caseStudy: { name: "Vasarchain Protocol Security Ecosystem Assessment", tag: "Web3 Security · Protocol", weeks: "12 weeks", findings: "47 / 47 fixed", coverage: "L1 + bridge + relayer" },
  testimonial: 2,
  faq: {
    label: "faq",
    title: "What You Need to Know?",
    subhead: "Frequently Asked Questions",
    items: [
      { q: "What is a protocol audit?", a: "A review of the systems beneath the contracts — consensus, validator incentives, bridges, oracles, client software. The blast radius of a finding here is 'every contract on the chain,' not 'one protocol.'" },
      { q: "How is this different from a smart contract audit?", a: "SCA scopes to a contract suite. Protocol audit scopes to a chain or chain-component. The threat models share vocabulary but target completely different abstraction layers." },
      { q: "Do you audit consensus implementations?", a: "Yes — see Consensus Frameworks Audit. We review safety/liveness logic, equivocation handling, fork-choice implementation, and incentive alignment." },
      { q: "How long does it take?", a: "Protocol audits run 8–16 weeks. The simulation and adversarial-replay phases can't be compressed responsibly." },
      { q: "What about ongoing monitoring?", a: "Standard engagements include 30 days of post-deploy monitoring with on-call escalation. Extended engagements available for L1s and major bridges." },
    ],
  },
};

Object.assign(window, {
  PAGE_SCA, PAGE_BY_CHAIN, PAGE_BY_PROJECT_TYPE, PAGE_PROTOCOL,
});
