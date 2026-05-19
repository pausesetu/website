"use client";
import Link from "next/link";

export default function TermsOfService() {
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
            Terms of Service
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
            These Terms of Service constitute a legally binding agreement between you and PauseSetu governing your access to and use of our platform, services, and website. Please read these Terms carefully before using our services.
          </p>
        </div>

        <div>
          <p style={para}>
            Welcome to PauseSetu. The following Terms of Service (hereinafter referred to as the &quot;Terms&quot;) govern your access to and use of the PauseSetu platform, including our website located at pausesetu.in, our application programming interfaces, software development kits, and all related services (collectively, the &quot;Service&quot;).
          </p>

          <p style={para}>
            By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms in their entirety, you must not access or use the Service.
          </p>

          <h2 style={h2Style} className="legal-heading">1. Definitions and Interpretation</h2>
          <p style={para}>
            For the purposes of these Terms, the following definitions shall apply: &quot;PauseSetu,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot; refers to the operator of this Service. &quot;User,&quot; &quot;you,&quot; or &quot;your&quot; refers to any individual or entity accessing or using the Service. &quot;Merchant&quot; refers to businesses integrating PauseSetu infrastructure into their subscription products. &quot;Subscriber&quot; refers to end users whose subscriptions are managed through the PauseSetu platform.
          </p>

          <h2 style={h2Style} className="legal-heading">2. Description of Services</h2>
          <p style={para}>
            PauseSetu provides subscription pause infrastructure for businesses operating in the Indian payment ecosystem. Our Service functions as middleware between merchant applications and payment processors, including Razorpay, Cashfree, and PhonePe, enabling pause and resume functionality for recurring subscription payments while maintaining compliance with Reserve Bank of India mandates.
          </p>

          <h2 style={h2Style} className="legal-heading">3. Eligibility Requirements</h2>
          <p style={para}>
            To use the Service, you must be at least eighteen (18) years of age and possess the legal capacity to enter into binding contracts under the laws of India. If you are accessing the Service on behalf of a business entity, you represent and warrant that you have the authority to bind such entity to these Terms.
          </p>

          <h2 style={h2Style} className="legal-heading">4. Account Registration and Security</h2>
          <p style={para}>
            In order to access certain features of the Service, you must create a registered account by providing accurate, current, and complete information as prompted during the registration process. You agree to maintain the confidentiality of your account credentials and to be solely responsible for all activities that occur under your account, whether authorized by you or not. You must notify us immediately of any unauthorized access or suspected breach of security.
          </p>

          <h2 style={h2Style} className="legal-heading">5. Subscription Plans and Billing</h2>
          <p style={para}>
            Access to certain features of the Service requires payment of subscription fees. The following terms govern our subscription and billing practices:
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>All subscription fees are billed in Indian Rupees (INR) on a recurring monthly basis unless otherwise specified.</li>
            <li style={liStyle}>A fourteen (14) day complimentary trial period is available for Starter and Growth tier subscriptions.</li>
            <li style={liStyle}>Subscriptions automatically renew at the end of each billing cycle unless cancelled by the user prior to the renewal date.</li>
            <li style={liStyle}>Refunds are evaluated on a case-by-case basis at the sole discretion of PauseSetu.</li>
            <li style={liStyle}>Price modifications will be communicated to existing subscribers with a minimum of thirty (30) days advance notice.</li>
          </ul>

          <h2 style={h2Style} className="legal-heading">6. Acceptable Use Policy</h2>
          <p style={para}>
            You agree to use the Service only for lawful purposes and in accordance with these Terms. You are expressly prohibited from engaging in any of the following activities:
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>Using the Service for any illegal, fraudulent, or unauthorized purpose whatsoever.</li>
            <li style={liStyle}>Attempting to reverse-engineer, decompile, or otherwise extract source code from our platform.</li>
            <li style={liStyle}>Transmitting malicious software, viruses, or any code designed to disrupt or damage our infrastructure.</li>
            <li style={liStyle}>Circumventing security measures or attempting unauthorized access to systems or accounts.</li>
            <li style={liStyle}>Violating any applicable laws, regulations, or third-party rights, including intellectual property rights.</li>
          </ul>

          <h2 style={h2Style} className="legal-heading">7. Regulatory Compliance</h2>
          <p style={para}>
            PauseSetu operates in full compliance with all applicable regulations of the Reserve Bank of India, including the e-mandate framework and two-factor authentication requirements that take effect in April 2026. Our Service is designed to uphold and reinforce the integrity of bank mandates, and we do not circumvent any required authentication processes mandated by regulatory authorities.
          </p>

          <h2 style={h2Style} className="legal-heading">8. Intellectual Property Rights</h2>
          <p style={para}>
            All content, code, documentation, trademarks, service marks, logos, and other intellectual property made available through the Service are the exclusive property of PauseSetu or its licensors, and are protected by applicable copyright, trademark, patent, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to access and use the Service solely in accordance with these Terms.
          </p>

          <h2 style={h2Style} className="legal-heading">9. Disclaimers and Limitation of Liability</h2>
          <p style={para}>
            The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied, including without limitation implied warranties of merchantability, fitness for a particular purpose, or non-infringement. To the maximum extent permitted by applicable law, PauseSetu shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service. Our aggregate liability for any claim shall not exceed the total amount paid by you to PauseSetu during the twelve (12) month period immediately preceding the event giving rise to such claim.
          </p>

          <h2 style={h2Style} className="legal-heading">10. Termination</h2>
          <p style={para}>
            Either party may terminate this agreement by providing thirty (30) days written notice to the other party. PauseSetu reserves the right to suspend or terminate your access to the Service immediately, without prior notice or liability, if you breach any provision of these Terms or engage in conduct that we determine, in our sole discretion, to be detrimental to the Service or other users. Upon termination, your right to use the Service will cease immediately, though provisions that by their nature should survive termination shall remain in effect.
          </p>

          <h2 style={h2Style} className="legal-heading">11. Governing Law and Jurisdiction</h2>
          <p style={para}>
            These Terms shall be governed by and construed in accordance with the laws of the Republic of India, without regard to its conflict of laws principles. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts located in Guwahati, Assam, India.
          </p>

          <h2 style={h2Style} className="legal-heading">12. Modifications to Terms</h2>
          <p style={para}>
            We reserve the right to modify, amend, or replace these Terms at any time at our sole discretion. Material changes will be communicated through prominent notice on our website or via direct email to registered users. Your continued use of the Service following the effective date of any such modifications shall constitute your acceptance of the revised Terms.
          </p>

          <h2 style={h2Style} className="legal-heading">13. Contact Information</h2>
          <p style={para}>
            For any questions, concerns, or correspondence regarding these Terms of Service, please contact us using the information provided below:
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