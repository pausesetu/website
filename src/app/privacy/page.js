"use client";
import Link from "next/link";

export default function PrivacyPolicy() {
  const C = {
    bg: "#FFFFFF", bgAlt: "#F8F9FA", text: "#202124", textSub: "#5F6368",
    border: "#DADCE0", accent: "#1A73E8", accentHighlight: "#1E8E3E",
  };

  const para = {
    fontSize: 15.5, lineHeight: 1.85, color: "#3C4043",
    marginBottom: 20, textAlign: "justify", textJustify: "inter-word",
    hyphens: "auto", WebkitHyphens: "auto", msHyphens: "auto",
  };

  const h2Style = {
    fontSize: 22, fontWeight: 700, color: C.text,
    marginTop: 44, marginBottom: 18, letterSpacing: "-0.01em",
    paddingBottom: 10, borderBottom: `1px solid ${C.border}`,
  };

  const ulStyle = {
    paddingLeft: 28, marginBottom: 24, color: "#3C4043", fontSize: 15.5, lineHeight: 1.9,
  };

  const liStyle = { marginBottom: 8, textAlign: "justify" };

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Lora:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #FFFFFF;
          color: #202124;
          font-family: 'Lora', Georgia, 'Times New Roman', serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .legal-heading { font-family: 'Inter', -apple-system, sans-serif; }
        @media print {
          nav { display: none !important; }
        }
      `}</style>

      <nav style={{ borderBottom: `1px solid ${C.border}`, padding: "16px 24px", background: C.bg, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 880, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }} className="legal-heading">
            <img src="/pausesetu-icon.png" alt="PauseSetu" width={34} height={34} style={{ borderRadius: 9, objectFit: "cover" }} />
            <span style={{ fontWeight: 700, fontSize: 19, color: C.text, letterSpacing: "-0.03em" }}>
              Pause<span style={{ color: C.accentHighlight }}>Setu</span>
            </span>
          </Link>
          <Link href="/" style={{ color: C.textSub, textDecoration: "none", fontSize: 14, fontWeight: 500 }} className="legal-heading">{"\u2190"} Back to Home</Link>
        </div>
      </nav>

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "72px 32px 120px" }}>
        <div className="legal-heading" style={{ marginBottom: 56, paddingBottom: 32, borderBottom: `2px solid ${C.text}` }}>
          <p style={{ color: C.accent, fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>Legal Document</p>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 800, color: C.text, letterSpacing: "-0.035em", lineHeight: 1.1, marginBottom: 16 }}>
            Privacy Policy
          </h1>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", fontSize: 13, color: C.textSub }}>
            <span><strong style={{ color: C.text }}>Effective Date:</strong> April 16, 2026</span>
            <span><strong style={{ color: C.text }}>Version:</strong> 1.1</span>
          </div>
        </div>

        <div className="legal-heading" style={{
          padding: "20px 24px", borderLeft: `3px solid ${C.accent}`,
          background: C.bgAlt, marginBottom: 40, borderRadius: "0 8px 8px 0",
        }}>
          <p style={{ fontSize: 14, color: C.text, lineHeight: 1.7, fontStyle: "italic" }}>
            This Privacy Policy describes the policies and procedures of PauseSetu on the collection, use, and disclosure of your information when you use our service and informs you of your privacy rights under applicable Indian data protection laws.
          </p>
        </div>

        <div>
          <p style={para}>
            PauseSetu (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy and personal data of all individuals who interact with our website, platform, and services. This Privacy Policy outlines the manner in which we collect, process, store, and safeguard information obtained through your use of our subscription pause infrastructure services.
          </p>

          <p style={para}>
            By accessing or using PauseSetu, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy. If you do not agree with any provision herein, you must discontinue use of our services immediately.
          </p>

          <h2 style={h2Style} className="legal-heading">1. Information We Collect</h2>
          <p style={para}>
            In the course of providing our services, we collect various categories of information necessary to deliver, maintain, and improve the functionality and security of PauseSetu. The data collected may include personally identifiable information as well as anonymous technical data.
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}><strong>Identity Information:</strong> Full name, email address, telephone number, and company affiliation provided during registration.</li>
            <li style={liStyle}><strong>Business Information:</strong> Organization name, designation, industry sector, and merchant identification details.</li>
            <li style={liStyle}><strong>Technical Information:</strong> Internet Protocol (IP) address, browser type and version, operating system, device identifiers, and access timestamps.</li>
            <li style={liStyle}><strong>Usage Information:</strong> Pages visited, features accessed, interaction patterns, and transaction metadata necessary for service operation.</li>
          </ul>

          <h2 style={h2Style} className="legal-heading">2. Purpose of Data Collection</h2>
          <p style={para}>
            The information collected is utilized exclusively for legitimate business purposes directly related to the provision and enhancement of our services. We do not collect, process, or retain any information beyond what is reasonably necessary to fulfill these purposes.
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>To provide, operate, and maintain the PauseSetu platform and associated services.</li>
            <li style={liStyle}>To process subscription pause and resume requests on behalf of merchant clients.</li>
            <li style={liStyle}>To communicate service updates, product announcements, and critical notifications.</li>
            <li style={liStyle}>To comply with regulatory obligations, including Reserve Bank of India (RBI) mandates.</li>
            <li style={liStyle}>To detect, prevent, and address fraudulent activity, security threats, and technical issues.</li>
          </ul>

          <h2 style={h2Style} className="legal-heading">3. Data Sharing and Disclosure</h2>
          <p style={para}>
            PauseSetu does not sell, rent, trade, or otherwise transfer personally identifiable information to external parties for marketing or commercial purposes. We may, however, share information with trusted third-party service providers under strict contractual obligations, including payment gateways such as Razorpay, communication services such as MSG91, and cloud infrastructure providers. All such arrangements are governed by data protection agreements that enforce confidentiality and security standards equivalent to our own.
          </p>

          <h2 style={h2Style} className="legal-heading">4. Data Security Measures</h2>
          <p style={para}>
            We implement comprehensive administrative, technical, and physical safeguards designed to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include industry-standard encryption protocols for data at rest and in transit, multi-factor authentication for privileged access, routine security assessments, and adherence to established information security frameworks. Notwithstanding these measures, no electronic transmission or storage system can be guaranteed to be absolutely secure, and we cannot warrant the security of any information you transmit to us.
          </p>

          <h2 style={h2Style} className="legal-heading">5. Your Rights</h2>
          <p style={para}>
            In accordance with the Digital Personal Data Protection Act, 2023 and other applicable Indian data protection regulations, you are entitled to exercise the following rights with respect to your personal information:
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}><strong>Right to Access:</strong> You may request a copy of the personal data we hold about you.</li>
            <li style={liStyle}><strong>Right to Rectification:</strong> You may request correction of inaccurate or incomplete information.</li>
            <li style={liStyle}><strong>Right to Erasure:</strong> You may request deletion of your personal data, subject to our legal retention obligations.</li>
            <li style={liStyle}><strong>Right to Withdraw Consent:</strong> You may withdraw previously granted consent for data processing at any time.</li>
            <li style={liStyle}><strong>Right to Grievance Redressal:</strong> You may file a complaint regarding our data handling practices.</li>
          </ul>
          <p style={para}>
            To exercise any of these rights, please contact us at <a href="mailto:hello@pausesetu.in" style={{ color: C.accent, fontWeight: 600 }}>hello@pausesetu.in</a>. We will respond to verified requests within thirty (30) days of receipt.
          </p>

          <h2 style={h2Style} className="legal-heading">6. Cookies and Tracking Technologies</h2>
          <p style={para}>
            Our website employs cookies and similar tracking technologies to enhance user experience, analyze site traffic, and maintain session integrity. Essential cookies are required for authentication and basic functionality, while analytical cookies help us understand usage patterns. You may configure your browser to refuse cookies or alert you when cookies are being sent; however, certain portions of our service may not function correctly if cookies are disabled.
          </p>

          <h2 style={h2Style} className="legal-heading">7. Data Retention</h2>
          <p style={para}>
            We retain personal information for the duration necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by applicable law. Upon termination of your account or withdrawal of consent, we will securely delete or anonymize your personal data within a reasonable timeframe, except where retention is mandated by regulatory requirements.
          </p>

          <h2 style={h2Style} className="legal-heading">8. Amendments to This Policy</h2>
          <p style={para}>
            We reserve the right to modify this Privacy Policy at any time to reflect changes in our practices, technological developments, legal requirements, or business circumstances. Material changes will be communicated through prominent notice on our website or direct email notification to registered users. Your continued use of PauseSetu following such modifications constitutes acceptance of the revised policy.
          </p>

          <h2 style={h2Style} className="legal-heading">9. Contact Information</h2>
          <p style={para}>
            For any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact our Data Protection Officer at the coordinates provided below:
          </p>
          <div style={{
            padding: "24px 28px", background: C.bgAlt, borderRadius: 12,
            fontSize: 14.5, lineHeight: 1.9, color: C.text, marginTop: 16,
          }} className="legal-heading">
            <p style={{ marginBottom: 4 }}><strong>PauseSetu</strong></p>
            <p style={{ marginBottom: 4 }}>Email: <a href="mailto:hello@pausesetu.in" style={{ color: C.accent, fontWeight: 600 }}>hello@pausesetu.in</a></p>
            <p style={{ marginBottom: 4 }}>Website: <a href="https://pausesetu.in" style={{ color: C.accent, fontWeight: 600 }}>https://pausesetu.in</a></p>
            <p>Jurisdiction: Lakhimpur District, Assam, India</p>
          </div>
        </div>

        <div style={{ marginTop: 72, paddingTop: 32, borderTop: `1px solid ${C.border}`, textAlign: "center" }} className="legal-heading">
          <p style={{ fontSize: 12, color: C.textSub, margin: 0 }}>
            {"\u00A9"} 2026 PauseSetu. All rights reserved. | Document Version 1.1 | Last revised May 19, 2026
          </p>
        </div>
      </main>
    </div>
  );
}