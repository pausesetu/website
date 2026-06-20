"use client";
import { useState, useEffect, useRef } from "react";

const TALLY_URL = "https://tally.so/r/J9JyWX";

/* === HOOKS === */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold, rootMargin: "30px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s`,
    }}>{children}</div>
  );
}

/* === DESIGN TOKENS === */
const C = {
  bg: "#FFFFFF", bgAlt: "#F8F9FA", bgCard: "#FFFFFF",
  text: "#202124", textSub: "#5F6368", textMuted: "#80868B",
  border: "#DADCE0", borderLight: "#F1F3F4",
  accent: "#1A73E8", accentHover: "#1558D6", accentText: "#FFFFFF",
  accentHighlight: "#1E8E3E", accentLabel: "#1A73E8",
  accentBg: "#E8F0FE", accentBorder: "#D2E3FC",
  amber: "#EA8600", amberBg: "#FEF7E0", amberBorder: "#FCE8B2",
  red: "#D93025", redBg: "#FCE8E6", blue: "#1A73E8",
};

const shadow = "0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)";
const shadowLg = "0 4px 6px -1px rgba(60,64,67,0.3), 0 2px 4px -1px rgba(60,64,67,0.15)";
const shadowXl = "0 10px 25px -5px rgba(60,64,67,0.2), 0 8px 10px -6px rgba(60,64,67,0.1)";
const wrap = { maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" };
const pillRadius = 100;

/* === BRAND LOGO COMPONENT === */
const BrandLogo = ({ size = 50, scale = 1 }) => (
  <div style={{ width: size, height: size, borderRadius: size > 20 ? 10 : 4, overflow: "hidden", flexShrink: 0 }}>
    <img src="/pausesetu-icon.png" alt="PauseSetu" width={size * scale} height={size * scale} style={{ objectFit: "cover", marginLeft: -(size * (scale - 1)) / 2, marginTop: -(size * (scale - 1)) / 2 }} />
  </div>
);

/* === ICONS === */
const I = {
  pause: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>,
  play: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  x: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  check: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  arrow: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  shield: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  zap: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  code: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  bot: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg>,
  cal: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  alert: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  chevron: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>,
  sparkle: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"/></svg>,
};

const PRICING = [
  {
    tier: "Starter", price: "1,999", period: "/mo",
    desc: "For early-stage startups testing pause as a retention feature.",
    features: ["Up to 1,000 subscribers", "Pause + Resume API", "Razorpay integration", "Email notifications", "Basic analytics", "Community support"],
    cta: "Start Free Trial", pop: false,
  },
  {
    tier: "Growth", price: "8,999", period: "/mo",
    desc: "For scaling companies reducing involuntary churn at scale.",
    features: ["Up to 5,000 subscribers", "Everything in Starter", "Multi-gateway support", "Webhooks & Slack alerts", "Churn prediction insights", "AI pause recommendations", "Priority support"],
    cta: "Start Free Trial", pop: true,
  },
  {
    tier: "Enterprise", price: "24,999", period: "/mo",
    desc: "For platforms needing custom mandate logic, SLAs, and white-label.",
    features: ["Unlimited subscribers", "Everything in Growth", "Custom rules engine", "Dedicated account manager", "99.9% SLA guarantee", "White-label portal", "On-premise option"],
    cta: "Contact Sales", pop: false,
  },
];

/* === TOP BAR === */
function TopBar() {
  return (
    <div style={{ background: C.amberBg, borderBottom: `1px solid ${C.amberBorder}`, padding: "10px 24px", position: "relative", zIndex: 101 }}>
      <div style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap", textAlign: "center" }}>
        <span style={{ color: C.amber, flexShrink: 0 }}>{I.alert}</span>
        <p style={{ fontSize: 13, color: C.text, margin: 0, lineHeight: 1.5 }}>
          <strong>After April 2026, every new payment requires 2FA.</strong>{" "}
          <span style={{ color: C.textSub }}>PauseSetu resumes within your existing mandate {"\u2014"} zero friction.</span>
        </p>
      </div>
    </div>
  );
}

/* === NAV === */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { l: "Problem", h: "#problem" }, { l: "Solution", h: "#solution" },
    { l: "How It Works", h: "#how" }, { l: "Pricing", h: "#pricing" },
  ];

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.95)" : C.bg,
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
      transition: "all 0.3s ease",
    }}>
      <div style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <BrandLogo size={36} />
          <span style={{ fontWeight: 700, fontSize: 20, color: C.text, letterSpacing: "-0.03em" }}>
            Pause<span style={{ color: C.accentHighlight }}>Setu</span>
          </span>
        </a>

        <div className="desk-nav" style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {links.map(l => (
            <a key={l.h} href={l.h} style={{ color: C.textSub, textDecoration: "none", fontSize: 14, fontWeight: 500 }}>{l.l}</a>
          ))}
          <a href="#waitlist" style={{
            padding: "10px 24px", borderRadius: pillRadius, fontWeight: 600, fontSize: 13.5,
            background: C.accent, color: C.accentText, textDecoration: "none",
            transition: "background 0.15s",
          }}>Join Waitlist</a>
        </div>

        <button className="mob-btn" onClick={() => setOpen(!open)} style={{
          display: "none", background: "none", border: "none", color: C.text, cursor: "pointer", padding: 6,
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> :
              <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="mob-menu" style={{ padding: "0 24px 20px", display: "flex", flexDirection: "column", gap: 4, background: C.bg }}>
          {links.map(l => (
            <a key={l.h} href={l.h} onClick={() => setOpen(false)} style={{
              color: C.text, textDecoration: "none", fontSize: 15, fontWeight: 500, padding: "10px 0",
              borderBottom: `1px solid ${C.borderLight}`,
            }}>{l.l}</a>
          ))}
          <a href="#waitlist" onClick={() => setOpen(false)} style={{
            marginTop: 8, padding: "12px", borderRadius: pillRadius, fontWeight: 600, fontSize: 15,
            background: C.accent, color: C.accentText, textDecoration: "none", textAlign: "center",
          }}>Join Waitlist</a>
        </div>
      )}
    </nav>
  );
}

/* === HERO with VISUAL === */
function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(true); }, []);
  const f = (d) => ({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${d}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${d}s`,
  });

  return (
    <section style={{ background: C.bg, paddingTop: 64, paddingBottom: 96, position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,115,232,0.04), transparent 70%)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -150, left: -150, width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(30,142,62,0.04), transparent 70%)", pointerEvents: "none",
      }} />

      <div style={{ ...wrap, position: "relative" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={f(0.05)}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 14px 6px 8px", borderRadius: 100,
                background: C.accentBg, border: `1px solid ${C.accentBorder}`, marginBottom: 24,
              }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: C.accentHighlight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: C.accentLabel }}>
                  India{"\u2019"}s first subscription pause infrastructure
                </span>
              </div>
            </div>

            <div style={f(0.15)}>
              <h1 style={{
                fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 800,
                lineHeight: 1.08, letterSpacing: "-0.035em",
                color: C.text, margin: "0 0 20px",
              }}>
                Stop losing subscribers to a missing{" "}
                <span style={{ color: C.accentHighlight }}>pause button</span>
              </h1>
            </div>

            <div style={f(0.3)}>
              <p style={{
                fontSize: "clamp(15px, 1.4vw, 17px)", color: C.textSub,
                lineHeight: 1.7, margin: "0 0 32px",
              }}>
                In India{"\u2019"}s payment stack, subscribers can only <strong style={{ color: C.text }}>pay or cancel</strong>. There{"\u2019"}s no middle ground. PauseSetu adds the missing pause layer {"\u2014"} keeping mandates alive while billing sleeps.
              </p>
            </div>

            <div style={f(0.45)}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
                <a href="#waitlist" style={{
                  padding: "14px 32px", borderRadius: pillRadius, fontWeight: 600, fontSize: 15,
                  background: C.accent, color: C.accentText, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: 8, boxShadow: shadow,
                }}>
                  Join the Waitlist {I.arrow}
                </a>
                <a href="#how" style={{
                  padding: "14px 32px", borderRadius: pillRadius, fontWeight: 600, fontSize: 15,
                  background: C.bgCard, color: C.text, textDecoration: "none",
                  border: `1px solid ${C.border}`,
                }}>See How It Works</a>
              </div>
            </div>

            <div style={f(0.55)}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
                <div style={{ display: "flex" }}>
                  {[0, 1, 2, 3].map(i => (
                    <div key={i} style={{
                      width: 28, height: 28, borderRadius: "50%", background: ["#FFE0B2","#C8E6C9","#BBDEFB","#F8BBD0"][i],
                      border: "2px solid #fff", marginLeft: i > 0 ? -8 : 0, display: "flex",
                      alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: C.text,
                    }}>{["A","M","R","S"][i]}</div>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: C.textSub, margin: 0 }}>
                  <strong style={{ color: C.text }}>50+ founders</strong> already on the waitlist
                </p>
              </div>
            </div>
          </div>

          {/* Right: Hero Visual - Streamly Phone Mockup */}
          <div style={f(0.4)} className="hero-visual">
            <div style={{ position: "relative", maxWidth: 420, margin: "0 auto" }}>
              <div style={{
                position: "absolute", inset: -40, borderRadius: 40,
                background: "linear-gradient(135deg, rgba(26,115,232,0.12), rgba(30,142,62,0.08))",
                filter: "blur(40px)", zIndex: 0,
              }} />

              <div style={{
                position: "relative", zIndex: 1,
                background: C.bgCard, borderRadius: 24, padding: 28,
                boxShadow: shadowXl, border: `1px solid ${C.borderLight}`,
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: "linear-gradient(135deg, #6C5CE7, #A29BFE)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff",
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 700, color: C.text, margin: 0 }}>Streamly</p>
                      <p style={{ fontSize: 11, color: C.textMuted, margin: 0 }}>Premium Plan</p>
                    </div>
                  </div>
                  <div style={{ padding: "4px 12px", borderRadius: 100, background: "#E6F4EA", fontSize: 10, fontWeight: 700, color: C.accentHighlight, letterSpacing: "0.05em" }}>
                    ACTIVE
                  </div>
                </div>

                <div style={{
                  padding: "14px 16px", background: C.bgAlt, borderRadius: 12, marginBottom: 16,
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <div>
                    <p style={{ fontSize: 10, color: C.textMuted, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Next billing</p>
                    <p style={{ fontSize: 15, fontWeight: 700, color: C.text, margin: 0 }}>{"\u20B9"}649 <span style={{ fontSize: 12, fontWeight: 400, color: C.textMuted }}>on May 16</span></p>
                  </div>
                  <div style={{ color: C.textMuted }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
                  </div>
                </div>

                <div style={{
                  padding: 20, borderRadius: 16,
                  background: "linear-gradient(135deg, #E8F0FE, #F0F7FF)",
                  border: `2px solid ${C.accent}`, marginBottom: 12,
                  position: "relative", cursor: "pointer",
                }}>
                  <div style={{
                    position: "absolute", top: -10, right: 14,
                    padding: "3px 10px", background: C.accent, color: "#fff",
                    borderRadius: 100, fontSize: 9, fontWeight: 800, letterSpacing: "0.1em",
                  }}>NEW</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <BrandLogo size={44} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: C.text, margin: "0 0 2px" }}>Pause for 30 days</p>
                      <p style={{ fontSize: 12, color: C.textSub, margin: 0 }}>Resume automatically on Jun 15</p>
                    </div>
                  </div>
                </div>

                <div style={{
                  padding: "12px 16px", borderRadius: 12,
                  border: `1px solid ${C.borderLight}`, opacity: 0.45,
                  display: "flex", alignItems: "center", gap: 12,
                }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: C.bgAlt, color: C.textMuted, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {I.x}
                  </div>
                  <p style={{ fontSize: 13, color: C.textMuted, margin: 0 }}>Cancel subscription</p>
                </div>

                {/* Powered by PauseSetu */}
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid ${C.borderLight}`, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  <p style={{ fontSize: 10, color: C.textMuted, margin: 0 }}>Powered by</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <BrandLogo size={14} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>Pause<span style={{ color: C.accentHighlight }}>Setu</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-visual { order: 2; }
        }
      `}</style>
    </section>
  );
}

/* === TRUST STRIP === */
function TrustStrip() {
  return (
    <section style={{ background: C.bgAlt, padding: "40px 0", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
      <div style={wrap}>
        <Reveal>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 700, color: C.textMuted, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 28 }}>
            Built to integrate with India{"\u2019"}s leading payment infrastructure
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 48, alignItems: "center" }}>
            {["Razorpay", "Cashfree", "PhonePe", "Paytm", "MSG91"].map((name, i) => (
              <div key={i} style={{
                fontSize: 18, fontWeight: 700, color: C.textSub, letterSpacing: "-0.02em",
                opacity: 0.7, transition: "opacity 0.2s",
              }}>{name}</div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* === PROBLEM === */
function Problem() {
  return (
    <section id="problem" style={{ background: C.bg, padding: "100px 0" }}>
      <div style={wrap}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 60px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: C.accentLabel, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>The Problem</p>
            <h2 style={{ fontSize: "clamp(28px, 3.8vw, 44px)", fontWeight: 800, color: C.text, lineHeight: 1.15, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
              Your subscribers have two choices.<br />Neither is good.
            </h2>
            <p style={{ fontSize: 16.5, color: C.textSub, lineHeight: 1.7, margin: 0 }}>
              When life happens {"\u2014"} a vacation, a job change, a tight month {"\u2014"} your users are forced into a binary: keep paying or cancel everything.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 16,
            flexWrap: "wrap", marginBottom: 56, padding: "44px 24px",
            background: C.bgCard, borderRadius: 20, boxShadow: shadow,
          }}>
            <div style={{ textAlign: "center", padding: "24px 32px", borderRadius: 16, background: "#E6F4EA", minWidth: 180 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: "#CEEAD6", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", color: C.accentHighlight }}>{I.play}</div>
              <p style={{ fontWeight: 800, fontSize: 20, color: C.accentHighlight, margin: "0 0 4px" }}>ACTIVE</p>
              <p style={{ fontSize: 13, color: C.textMuted, margin: 0 }}>Paying every month</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "0 12px" }}>
              <div style={{ width: 64, height: 2, background: C.border, position: "relative" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: C.bgCard, padding: "2px 6px", borderRadius: 4 }}>
                  <span style={{ color: C.textMuted }}>{I.x}</span>
                </div>
              </div>
              <span style={{ fontSize: 10, color: C.textMuted, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>No middle ground</span>
            </div>

            <div style={{ textAlign: "center", padding: "24px 32px", borderRadius: 16, background: C.redBg, minWidth: 180 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: "#F5C6CB", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", color: C.red }}>{I.x}</div>
              <p style={{ fontWeight: 800, fontSize: 20, color: C.red, margin: "0 0 4px" }}>CANCELLED</p>
              <p style={{ fontSize: 13, color: C.textMuted, margin: 0 }}>Lost + needs new 2FA</p>
            </div>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {[
            { val: "15\u201325%", label: "of cancellations are users who just wanted a temporary break", icon: I.pause, color: C.accentHighlight },
            { val: "\u20B98,000 Cr", label: "annual revenue lost by Indian subscription businesses to avoidable churn", icon: I.alert, color: C.amber },
            { val: "3\u00D7", label: "higher re-subscription rate when pause is offered versus cancel-only", icon: I.zap, color: C.blue },
          ].map((s, i) => (
            <Reveal key={i} delay={0.15 + i * 0.08}>
              <div style={{ padding: "32px 28px", borderRadius: 18, background: C.bgCard, boxShadow: shadow, height: "100%" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.bgAlt, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, marginBottom: 20 }}>{s.icon}</div>
                <p style={{ fontSize: 38, fontWeight: 800, color: C.text, letterSpacing: "-0.04em", margin: "0 0 8px", lineHeight: 1 }}>{s.val}</p>
                <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.6, margin: 0 }}>{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* === SOLUTION === */
function Solution() {
  const steps = [
    { icon: I.code, num: "01", title: "Integrate the SDK", desc: "Drop in our lightweight SDK or use the REST API. Connect your Razorpay, Cashfree, or PhonePe account in under 10 minutes." },
    { icon: I.bot, num: "02", title: "User pauses via button or AI", desc: "Your subscribers tap \u201CPause\u201D in your app or tell your AI chatbot. PauseSetu captures intent, duration, and reason." },
    { icon: I.cal, num: "03", title: "Auto-resume on chosen date", desc: "When the pause period ends, billing restarts automatically under the existing bank mandate. No 2FA. No re-signup." },
  ];

  return (
    <section id="solution" style={{ background: C.bgAlt, padding: "100px 0" }}>
      <div style={wrap}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 60px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: C.accentLabel, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>The Solution</p>
            <h2 style={{ fontSize: "clamp(28px, 3.8vw, 44px)", fontWeight: 800, color: C.text, lineHeight: 1.15, letterSpacing: "-0.03em" }}>
              Three steps to zero churn
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{
                padding: "36px 28px", borderRadius: 20, position: "relative",
                background: C.bgCard, border: `1px solid ${C.borderLight}`, boxShadow: shadow,
                height: "100%", display: "flex", flexDirection: "column",
              }}>
                <span style={{ position: "absolute", top: 24, right: 24, fontSize: 48, fontWeight: 900, color: C.borderLight, lineHeight: 1 }}>{s.num}</span>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: C.accentBg, border: `1px solid ${C.accentBorder}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.accent, marginBottom: 24 }}>{s.icon}</div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: C.text, margin: "0 0 10px" }}>{s.title}</h3>
                <p style={{ fontSize: 14.5, color: C.textSub, lineHeight: 1.65, margin: 0, flex: 1 }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* === HOW IT WORKS === */
function HowItWorks() {
  const Box = ({ emoji, label, sub, accent }) => (
    <div style={{
      textAlign: "center", padding: "20px 16px", minWidth: 120,
      background: accent ? C.accentBg : C.bgCard,
      border: accent ? `2px solid ${C.accent}` : `1px solid ${C.border}`,
      borderRadius: 16, boxShadow: accent ? shadowLg : shadow,
    }}>
      <div style={{ fontSize: 32, marginBottom: 8 }}>{emoji}</div>
      <p style={{ fontWeight: 700, fontSize: 13, color: accent ? C.accent : C.text, margin: "0 0 2px" }}>{label}</p>
      <p style={{ fontSize: 11, color: C.textMuted, margin: 0 }}>{sub}</p>
    </div>
  );

  const Arrow = () => (
    <div style={{ display: "flex", alignItems: "center", padding: "0 4px", color: C.textMuted, flexShrink: 0 }}>
      {I.chevron}
    </div>
  );

  return (
    <section id="how" style={{ background: C.bg, padding: "100px 0" }}>
      <div style={wrap}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 56px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: C.accentLabel, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>Architecture</p>
            <h2 style={{ fontSize: "clamp(28px, 3.8vw, 44px)", fontWeight: 800, color: C.text, lineHeight: 1.15, letterSpacing: "-0.03em" }}>How PauseSetu works</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ padding: "48px 32px", borderRadius: 24, background: C.bgAlt, boxShadow: shadow, overflowX: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, minWidth: 640 }}>
              <Box emoji={"\uD83D\uDCF1"} label="Your App" sub="SDK / API" />
              <Arrow />
              <div style={{
                textAlign: "center", padding: "20px 16px", minWidth: 120,
                background: C.accentBg, border: `2px solid ${C.accent}`,
                borderRadius: 16, boxShadow: shadowLg,
              }}>
                <div style={{ margin: "0 auto 8px", display: "flex", justifyContent: "center" }}>
                  <BrandLogo size={40} />
                </div>
                <p style={{ fontWeight: 700, fontSize: 13, color: C.accent, margin: "0 0 2px" }}>PauseSetu</p>
                <p style={{ fontSize: 11, color: C.textMuted, margin: 0 }}>Middleware</p>
              </div>
              <Arrow />
              <Box emoji={"\uD83D\uDCB3"} label="Razorpay" sub="Gateway" />
              <Arrow />
              <Box emoji={"\uD83C\uDFE6"} label="Bank" sub="Mandate" />
            </div>

            <div style={{ textAlign: "center", marginTop: 32 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "10px 20px", borderRadius: 100,
                background: "#E6F4EA", border: "1px solid #CEEAD6",
              }}>
                <span style={{ color: C.accentHighlight }}>{I.shield}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.accentHighlight }}>Bank mandate stays ACTIVE throughout the pause</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p style={{ textAlign: "center", fontSize: 15, color: C.textSub, lineHeight: 1.7, maxWidth: 540, margin: "32px auto 0" }}>
            The bank mandate stays <strong style={{ color: C.text }}>active</strong> the entire time. When the pause ends, PauseSetu instructs the gateway to resume {"\u2014"} no new 2FA needed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* === SOCIAL PROOF === */
function SocialProof() {
  return (
    <section style={{ background: C.bgAlt, padding: "80px 0" }}>
      <div style={wrap}>
        <Reveal>
          <div style={{
            maxWidth: 800, margin: "0 auto", padding: "56px 48px",
            borderRadius: 24, background: C.bgCard, boxShadow: shadowLg,
            textAlign: "center",
          }}>
            <div style={{ fontSize: 48, color: C.borderLight, marginBottom: 16, lineHeight: 1 }}>{"\u201C"}</div>
            <p style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: C.text, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 12px" }}>
              <span style={{ color: C.accentHighlight }}>12%</span> churn rate
            </p>
            <p style={{ fontSize: 18, color: C.textSub, margin: "0 0 24px", lineHeight: 1.6 }}>
              achieved by Cult.fit after introducing pause functionality
            </p>
            <div style={{ width: 48, height: 2, background: C.border, margin: "0 auto 16px" }} />
            <p style={{ fontSize: 13, color: C.textMuted, margin: 0 }}>
              vs. industry average of 30{"\u2013"}40% for subscription fitness apps in India
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* === PRICING === */
function Pricing() {
  return (
    <section id="pricing" style={{ background: C.bg, padding: "100px 0" }}>
      <div style={wrap}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 500, margin: "0 auto 64px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: C.accentLabel, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>Pricing</p>
            <h2 style={{ fontSize: "clamp(28px, 3.8vw, 44px)", fontWeight: 800, color: C.text, lineHeight: 1.15, letterSpacing: "-0.03em", margin: "0 0 12px" }}>
              Simple, transparent pricing
            </h2>
            <p style={{ fontSize: 16, color: C.textSub, margin: 0 }}>30-day free trial. No credit card required.</p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 20, alignItems: "stretch" }}>
          {PRICING.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{
                padding: "36px 28px", borderRadius: 22, position: "relative",
                background: C.bgCard,
                border: p.pop ? `2px solid ${C.accent}` : `1px solid ${C.borderLight}`,
                boxShadow: p.pop ? shadowLg : shadow,
                height: "100%", display: "flex", flexDirection: "column",
                transform: p.pop ? "scale(1.02)" : "none",
              }}>
                {p.pop && (
                  <div style={{
                    position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)",
                    padding: "5px 16px", borderRadius: 100,
                    background: C.accent, fontSize: 11, fontWeight: 700, color: C.accentText,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                  }}>Most Popular</div>
                )}
                <p style={{ fontSize: 13, fontWeight: 700, color: C.textMuted, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>{p.tier}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                  <span style={{ fontSize: 44, fontWeight: 800, color: C.text, letterSpacing: "-0.04em" }}>{"\u20B9"}{p.price}</span>
                  <span style={{ fontSize: 15, color: C.textMuted, fontWeight: 500 }}>{p.period}</span>
                </div>
                <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.55, marginBottom: 28 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32, flex: 1 }}>
                  {p.features.map((feat, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ color: C.accentHighlight, flexShrink: 0, marginTop: 2 }}>{I.check}</span>
                      <span style={{ fontSize: 14, color: C.textSub }}>{feat}</span>
                    </div>
                  ))}
                </div>
                <a href="#waitlist" style={{
                  display: "block", textAlign: "center", padding: "14px 24px", borderRadius: pillRadius,
                  fontWeight: 600, fontSize: 14, textDecoration: "none",
                  background: p.pop ? C.accent : C.bgAlt,
                  color: p.pop ? C.accentText : C.text,
                  border: p.pop ? "none" : `1px solid ${C.border}`,
                }}>{p.cta}</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* === WAITLIST === */
function Waitlist() {
  return (
    <section id="waitlist" style={{ background: C.bgAlt, padding: "100px 0" }}>
      <div style={{ ...wrap, maxWidth: 720 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: C.accentLabel, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>Early Access</p>
            <h2 style={{ fontSize: "clamp(28px, 3.8vw, 44px)", fontWeight: 800, color: C.text, lineHeight: 1.15, letterSpacing: "-0.03em", margin: "0 0 12px" }}>
              Be first in line
            </h2>
            <p style={{ fontSize: 16, color: C.textSub, lineHeight: 1.7, maxWidth: 460, margin: "0 auto" }}>
              Join the waitlist for early access and founding-member pricing.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div style={{
            borderRadius: 20, overflow: "hidden",
            border: `1px solid ${C.border}`,
            background: C.bgCard, boxShadow: shadow,
          }}>
            <iframe
              src={TALLY_URL + "?transparentBackground=1&hideTitle=1"}
              width="100%"
              height="520"
              frameBorder="0"
              title="PauseSetu Waitlist"
              style={{ display: "block" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* === FOOTER === */
function Footer() {
  const fLink = { color: C.textSub, fontSize: 13.5, textDecoration: "none" };
  return (
    <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: "56px 0 40px" }}>
      <div style={wrap}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40, marginBottom: 48 }}>
          <div style={{ maxWidth: 280 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14 }}>
              <BrandLogo size={30} />
              <span style={{ fontWeight: 700, fontSize: 17, color: C.text }}>Pause<span style={{ color: C.accentHighlight }}>Setu</span></span>
            </div>
            <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>
              {"India\u2019s first subscription pause infrastructure. The bridge to subscription control."}
            </p>
          </div>

          <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: C.textMuted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Product</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="#how" style={fLink}>How It Works</a>
                <a href="#pricing" style={fLink}>Pricing</a>
                <a href="https:///docs" style={fLink}>API Docs</a>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: C.textMuted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Legal</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="/privacy" style={fLink}>Privacy Policy</a>
                <a href="/terms" style={fLink}>Terms of Service</a>
              <a href="/refund" style={fLink}>Refund Policy</a>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: C.textMuted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Connect</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="mailto:hello@pausesetu.in" style={fLink}>hello@pausesetu.in</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <p style={{ fontSize: 12, color: C.textMuted, margin: 0 }}>{"\u00A9"} 2026 PauseSetu. All rights reserved.</p>
          <p style={{ fontSize: 12, color: C.textMuted, margin: 0 }}>Built in Assam, India {"\uD83C\uDDEE\uD83C\uDDF3"}</p>
        </div>
      </div>
    </footer>
  );
}

/* === MAIN === */
export default function Home() {
  return (
    <div style={{
      background: C.bg, color: C.text,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #FFFFFF; -webkit-font-smoothing: antialiased; }
        a:hover { opacity: 0.85; }
        ::selection { background: rgba(26,115,232,0.15); color: #202124; }
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .mob-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mob-btn { display: none !important; }
          .mob-menu { display: none !important; }
        }
      `}</style>
      <TopBar />
      <Nav />
      <Hero />
      <TrustStrip />
      <Problem />
      <Solution />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <Waitlist />
      <Footer />
    </div>
  );
}