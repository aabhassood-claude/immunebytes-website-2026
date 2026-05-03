// ============================================================
// PRIMITIVES — buttons, section labels, headings, icons
// ============================================================

const { useState, useEffect, useRef, useCallback, useMemo } = React;

// ----- Lucide icon helper ----------------------------------
// We use the lucide UMD bundle (window.lucide). Each icon is exposed as
// lucide.icons[NamePascalCase] = [tag, attrs, children?]. We render to SVG.
function LIcon({ name, size = 16, className = "", strokeWidth = 1.75 }) {
  // lucide UMD (@0.475.0) exposes window.lucide.icons[Name] as the children
  // array directly — entries are [tag, attrs] pairs. All icons share a
  // 24x24 viewBox.
  const data = window.lucide && window.lucide.icons && window.lucide.icons[name];
  if (!data || !Array.isArray(data)) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {data.map(([tag, attrs], i) =>
        React.createElement(tag, { key: i, ...attrs })
      )}
    </svg>
  );
}

// ----- Section label ----------------------------------------
// Mono $ section_name eyebrow. Theme-aware.
function SectionLabel({ children, theme = "light", className = "" }) {
  const labelColor = theme === "dark" ? "text-zinc-500" : "text-zinc-600";
  return (
    <div className={`font-mono text-[12px] tracking-wide ${labelColor} ${className}`}>
      <span className="text-immune-green">$</span>{" "}
      <span>{children}</span>
    </div>
  );
}

// ----- Buttons ----------------------------------------------
function ButtonPrimary({ children, href = "#", className = "", icon = "ArrowRight", size = "md" }) {
  const sizes = {
    sm: "h-9 px-4 text-[13px]",
    md: "h-11 px-5 text-[14px]",
    lg: "h-12 px-6 text-[15px]",
  };
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full bg-immune-green text-black font-display font-semibold whitespace-nowrap ${sizes[size]} hover:bg-[#82d600] transition-colors ${className}`}
    >
      {children}
      {icon && <LIcon name={icon} size={16} strokeWidth={2.25} />}
    </a>
  );
}

function ButtonSecondary({ children, href = "#", className = "", theme = "dark", icon = null, size = "md" }) {
  const sizes = {
    sm: "h-9 px-4 text-[13px]",
    md: "h-11 px-5 text-[14px]",
    lg: "h-12 px-6 text-[15px]",
  };
  const themeCls = theme === "dark"
    ? "border-zinc-700 text-white hover:bg-zinc-900 hover:border-zinc-600"
    : "border-zinc-300 text-zinc-900 hover:bg-zinc-50 hover:border-zinc-400";
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border bg-transparent ${themeCls} font-display font-semibold whitespace-nowrap ${sizes[size]} transition-colors ${className}`}
    >
      {children}
      {icon && <LIcon name={icon} size={16} strokeWidth={2.25} />}
    </a>
  );
}

function ButtonGhost({ children, href = "#", className = "", theme = "light" }) {
  const cls = theme === "dark"
    ? "text-zinc-300 hover:text-white"
    : "text-zinc-700 hover:text-zinc-900";
  return (
    <a href={href} className={`group inline-flex items-center gap-1.5 font-display text-[14px] font-medium whitespace-nowrap ${cls} ${className}`}>
      {children}
      <LIcon name="ArrowRight" size={14} strokeWidth={2.25} className="card-arrow" />
    </a>
  );
}

// ----- Reveal-on-scroll wrapper -----------------------------
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  // Reveal animation disabled in this build — see Home.html / Service Pages.html
  // CSS comment. Component kept as a passthrough so callsites don't change.
  return (
    <Tag className={`reveal in ${className}`}>
      {children}
    </Tag>
  );
}

// ----- Section heading combo --------------------------------
function SectionHeading({ label, title, subhead, theme = "light", center = false, action, className = "" }) {
  const headingColor = theme === "dark" ? "text-white" : "text-zinc-900";
  const subColor = theme === "dark" ? "text-zinc-400" : "text-zinc-600";
  const align = center ? "items-center text-center" : "items-start";
  return (
    <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 ${className}`}>
      <div className={`flex flex-col ${align} max-w-[680px]`}>
        <SectionLabel theme={theme}>{label}</SectionLabel>
        <h2 className={`mt-4 font-display font-semibold tracking-tight ${headingColor} text-[34px] sm:text-[42px] md:text-[48px] leading-[1.05]`}>
          {title}
        </h2>
        {subhead && (
          <p className={`mt-5 ${subColor} text-[16px] sm:text-[17px] leading-relaxed max-w-[640px]`}>
            {subhead}
          </p>
        )}
      </div>
      {action && <div className="md:self-end shrink-0">{action}</div>}
    </div>
  );
}

Object.assign(window, {
  LIcon, SectionLabel, ButtonPrimary, ButtonSecondary, ButtonGhost, Reveal, SectionHeading
});
