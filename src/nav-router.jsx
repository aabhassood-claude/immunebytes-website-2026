// ============================================================
// NAV-ROUTER — central path map + click interception so every
// link in the mega-menu / nav / footer goes to the right HTML
// file with the right page selected via ?p=<id>.
// Loaded BEFORE *-app.jsx so it patches anchors before render.
// ============================================================

// path → { file, pageId }
window.NAV_MAP = {
  // ---- Home ----
  "/":                                         { file: "Home.html",          pageId: null            },
  "/home":                                     { file: "Home.html",          pageId: null            },

  // ---- Solutions index → Service Pages, default smart-contract ----
  "/solutions":                                { file: "Service Pages.html", pageId: "smart-contract" },

  // ---- Web3 Security ----
  "/solutions/web3":                           { file: "Service Pages.html", pageId: "smart-contract"  },
  "/solutions/web3/smart-contract":            { file: "Service Pages.html", pageId: "smart-contract"  },
  "/solutions/web3/smart-contract/by-chain":   { file: "Service Pages.html", pageId: "by-chain"        },
  "/solutions/web3/smart-contract/by-project-type":{file:"Service Pages.html",pageId:"by-project-type"},
  "/solutions/web3/protocol":                  { file: "Service Pages.html", pageId: "protocol"        },
  "/solutions/web3/protocol/l1-l2":            { file: "Service Pages.html", pageId: "l1-l2"           },
  "/solutions/web3/protocol/consensus":        { file: "Service Pages.html", pageId: "consensus"       },
  "/solutions/web3/protocol/tokenomics":       { file: "Service Pages.html", pageId: "tokenomics"      },
  "/solutions/web3/wallet":                    { file: "Service Pages.html", pageId: "wallet"          },
  "/solutions/web3/wallet/dapp-integration":   { file: "Service Pages.html", pageId: "dapp-integration"},
  "/solutions/web3/wallet/extension":          { file: "Service Pages.html", pageId: "extension"       },

  // ---- Web2 Security ----
  "/solutions/web2/pentest":                   { file: "Service Pages.html", pageId: "pentest"         },
  "/solutions/web2/web-app":                   { file: "Service Pages.html", pageId: "web-app"         },
  "/solutions/web2/mobile":                    { file: "Service Pages.html", pageId: "mobile"          },
  "/solutions/web2/desktop":                   { file: "Service Pages.html", pageId: "desktop"         },

  // ---- AI Security ----
  "/solutions/ai":                             { file: "Service Pages.html", pageId: "ai-agent"        },
  "/solutions/ai/agent":                       { file: "Service Pages.html", pageId: "ai-agent"        },
  "/solutions/ai/chatbot":                     { file: "Service Pages.html", pageId: "chatbot"         },
  "/solutions/ai/llm":                         { file: "Service Pages.html", pageId: "llm"             },
  "/solutions/ai/automation":                  { file: "Service Pages.html", pageId: "automation"      },

  // ---- Consultancy ----
  "/solutions/consultancy":                    { file: "Service Pages.html", pageId: "shift-left"      },
  "/solutions/consultancy/shift-left":         { file: "Service Pages.html", pageId: "shift-left"      },
  "/solutions/consultancy/test-fuzz":          { file: "Service Pages.html", pageId: "test-fuzz"       },
  "/solutions/consultancy/pre-audit":          { file: "Service Pages.html", pageId: "pre-audit"       },
  "/solutions/consultancy/research":           { file: "Service Pages.html", pageId: "research"        },

  // ---- Top-level / chrome pages ----
  "/audits":                                   { file: "Chrome Pages.html",  pageId: "audit"      },
  "/clients":                                  { file: "Chrome Pages.html",  pageId: "clientele"  },
  "/about":                                    { file: "Chrome Pages.html",  pageId: "about"      },
  "/engagement-models":                        { file: "Chrome Pages.html",  pageId: "engagement" },
  "/pricing":                                  { file: "Chrome Pages.html",  pageId: "pricing"    },
  "/pricing-calculator":                       { file: "Chrome Pages.html",  pageId: "pricing"    },
  "/blogs":                                    { file: "Chrome Pages.html",  pageId: "blog"       },
  "/contact":                                  { file: "Chrome Pages.html",  pageId: "contact"    },

  // Soft fallbacks for not-yet-built pages — route them to the closest match.
  "/case-studies":                             { file: "Home.html",          pageId: null         },
  "/case-studies/csigma":                      { file: "Chrome Pages.html",  pageId: "clientele"  },
  "/careers":                                  { file: "Chrome Pages.html",  pageId: "about"      },
  "/legal/terms":                              { file: "Home.html",          pageId: null         },
  "/legal/privacy":                            { file: "Home.html",          pageId: null         },
  "/legal/cookies":                            { file: "Home.html",          pageId: null         },
};

// Resolve an in-app path to a real URL with ?p= query.
window.resolveNav = function(path) {
  if (!path) return null;
  // Strip query/hash for lookup
  const clean = path.split("?")[0].split("#")[0];
  const entry = window.NAV_MAP[clean];
  if (!entry) return null;
  let url = entry.file;
  if (entry.pageId) url += `?p=${encodeURIComponent(entry.pageId)}`;
  return url;
};

// Read ?p= from the current URL (used by *-app on mount).
window.getInitialPageId = function(fallback) {
  try {
    const url = new URL(window.location.href);
    return url.searchParams.get("p") || fallback;
  } catch (e) {
    return fallback;
  }
};

// Update ?p= in the URL without reloading (used when switching pages within an app).
window.setPageInUrl = function(pageId) {
  try {
    const url = new URL(window.location.href);
    if (pageId) url.searchParams.set("p", pageId);
    else url.searchParams.delete("p");
    window.history.replaceState({}, "", url.toString());
  } catch (e) {}
};

// Intercept clicks on any anchor whose href starts with "/" and rewrite.
// Runs once at load; uses event delegation so it covers React-rendered anchors too.
(function installLinkInterceptor() {
  document.addEventListener("click", (e) => {
    // Walk up to find an <a>
    let el = e.target;
    while (el && el.nodeName !== "A") el = el.parentElement;
    if (!el) return;
    const href = el.getAttribute("href");
    if (!href || !href.startsWith("/")) return;
    // Skip mailto:, tel:, anchors with target=_blank, modifier keys
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (el.target && el.target !== "_self") return;

    const resolved = window.resolveNav(href);
    if (resolved == null) return; // leave broken/unknown as-is so we notice

    e.preventDefault();
    // If we're already on the target file, just switch the page in place
    const here = window.location.pathname.split("/").pop() || "Home.html";
    const targetFile = resolved.split("?")[0];
    const targetPid = new URLSearchParams(resolved.split("?")[1] || "").get("p");

    if (decodeURIComponent(here) === targetFile && typeof window.__navSetPage === "function" && targetPid) {
      window.__navSetPage(targetPid);
      window.setPageInUrl(targetPid);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // Otherwise navigate
    window.location.href = resolved;
  }, true);
})();
