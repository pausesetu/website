import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Refund & Cancellation Policy - PauseSetu',
  description: 'PauseSetu Refund and Cancellation Policy. All pauses are free. Pro subscription terms and refund policies.',
  openGraph: {
    title: 'Refund & Cancellation Policy - PauseSetu',
    description: 'PauseSetu Refund and Cancellation Policy. Clear terms for refunds, cancellations, and subscription management.',
    url: 'https://pausesetu.in/refund',
  },
};

export default function RefundPolicy() {
  return (
    <>
      {/* Header */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <Image src="/pausesetu-icon.png" alt="PauseSetu" width={40} height={40} />
          <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e' }}>
            Pause<span style={{ color: '#16a34a' }}>Setu</span>
          </span>
        </Link>
        <Link href="/" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem' }}>
          &larr; Back to Home
        </Link>
      </nav>

      {/* Content */}
      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem 2rem 4rem',
        textAlign: 'justify',
        WebkitHyphens: 'auto',
        MozHyphens: 'auto',
        hyphens: 'auto',
      }}>
        <p style={{ color: '#2563eb', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Legal Document
        </p>

        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '1rem', lineHeight: 1.2 }}>
          Refund &amp; Cancellation Policy
        </h1>

        <div style={{ display: 'flex', gap: '2rem', color: '#6b7280', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          <span><strong>Effective Date:</strong> June 22, 2026</span>
          <span><strong>Version:</strong> 2.0</span>
        </div>

        <hr style={{ border: 'none', borderTop: '2px solid #e5e7eb', marginBottom: '2.5rem' }} />

        <blockquote style={{
          borderLeft: '4px solid #2563eb', paddingLeft: '1.5rem', paddingTop: '1.25rem', paddingBottom: '1.25rem', paddingRight: '1.5rem',
          margin: '2rem 0 2.5rem', fontStyle: 'italic', color: '#4b5563', lineHeight: 1.7, backgroundColor: '#f8fafc', borderRadius: '0 8px 8px 0',
        }}>
          This Refund and Cancellation Policy outlines the terms governing refunds, cancellations, and subscription management for all PauseSetu services. All subscription pauses through PauseSetu are provided free of charge. This policy covers our PauseSetu Pro subscription tier and B2B merchant plans. PauseSetu is committed to transparency and compliance with applicable Indian consumer protection laws and RBI Payment Aggregator Guidelines.
        </blockquote>

        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem' }}>
          PauseSetu (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) provides subscription pause infrastructure for the Indian payment ecosystem. This policy governs all services accessed through our consumer application and B2B merchant platform. By using PauseSetu, you agree to the terms described herein.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1.05rem' }}>
          This policy should be read in conjunction with our <Link href="/terms" style={{ color: '#2563eb', textDecoration: 'underline' }}>Terms of Service</Link> and <Link href="/privacy" style={{ color: '#2563eb', textDecoration: 'underline' }}>Privacy Policy</Link>.
        </p>

        {/* Section 1 */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          1. Consumer Application — Pause Services
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem' }}>
          PauseSetu helps you pause digital subscriptions through two methods depending on what your service supports. <strong>All pauses through PauseSetu are free of charge</strong>, regardless of method or frequency. PauseSetu does not charge per-pause fees.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.75rem', fontSize: '1.05rem' }}>
          <strong>Native Pause:</strong> For services that support built-in pausing (such as Netflix, Spotify, YouTube Premium, and Audible), PauseSetu guides you directly to the service&apos;s pause page. Your subscription is paused by the service itself, and your account data remains fully intact. No charges from PauseSetu.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.75rem', fontSize: '1.05rem' }}>
          <strong>Managed Pause:</strong> For services that do not offer a native pause feature (such as Amazon Prime, Hotstar, and Zee5), PauseSetu guides you to stop charges through Google Play subscription management, UPI Autopay mandate revocation, or direct cancellation on the service&apos;s website. PauseSetu tracks your pause period and reminds you when to resubscribe. No charges from PauseSetu.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem' }}>
          Free tier users may manage up to three (3) active subscriptions. Upgrading to PauseSetu Pro removes this limit. Since all pauses are free, no refund is applicable for pause actions.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
          <strong>Important:</strong> PauseSetu is a management and guidance platform. We do not directly control third-party subscription services or payment mandates. The actual pause, cancellation, or mandate revocation is executed by you on the respective service or payment platform. PauseSetu cannot guarantee that a third-party service will process your request as expected.
        </p>

        {/* Section 2 */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          2. Consumer Application — PauseSetu Pro
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem' }}>
          PauseSetu Pro unlocks unlimited subscription tracking, advanced savings analytics, CSV data export, and priority resume reminders. The following refund terms apply:
        </p>
        <ul style={{ color: '#374151', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Monthly Plan (₹29/month):</strong> You may cancel your Pro subscription at any time. Cancellation takes effect at the end of the current billing cycle. No pro-rated refund will be issued for the remaining days of the current billing period. You will retain access to all Pro features until the end of the cycle for which you have already been charged.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Annual Plan (₹249/year):</strong> A full refund is available if cancellation is requested within seven (7) calendar days of the original purchase date, provided no Pro-exclusive features (such as CSV export or advanced analytics) have been utilised during that period. After seven (7) days, cancellation may be requested at any time, but no refund will be issued. Access to Pro features will continue until the end of the annual subscription period.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Auto-Renewal Charges:</strong> Pro subscriptions renew automatically. If you are charged for a renewal you did not intend, you may request a refund within forty-eight (48) hours of the renewal charge date by contacting us at hello@pausesetu.in. Refund requests beyond forty-eight hours after renewal will be subject to standard cancellation terms as described above.
          </li>
        </ul>

        {/* Section 3 */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          3. Pause Type Expectations &amp; Limitations
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem' }}>
          Users should understand the following differences between pause methods:
        </p>
        <ul style={{ color: '#374151', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Native Pause services:</strong> When you pause through a service&apos;s own pause feature, your subscription, account history, playlists, and preferences are preserved by that service according to its own policies. PauseSetu does not control the service&apos;s pause duration or terms.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Google Play pause:</strong> Google allows pausing subscriptions for up to three (3) months. Your subscription data is preserved by the service during the pause period.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>UPI Autopay mandate revocation:</strong> Revoking a UPI mandate stops future charges but may be treated as a cancellation by the service. Resubscription may require setting up a new mandate with fresh two-factor authentication as per RBI regulations.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Direct cancellation:</strong> Services without any pause mechanism require full cancellation. PauseSetu will remind you to resubscribe on your chosen resume date. Some services may not preserve your account data after cancellation.
          </li>
        </ul>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
          PauseSetu is not liable for any data loss, account changes, or re-authentication requirements imposed by third-party services following a Managed Pause action.
        </p>

        {/* Section 4 */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          4. Refund Processing Timeline
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem' }}>
          When a refund is approved for a PauseSetu Pro subscription, the following processing timelines shall apply:
        </p>
        <ul style={{ color: '#374151', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>Refund initiation by PauseSetu: within two (2) business days of approval.</li>
          <li style={{ marginBottom: '0.75rem' }}>Credit to your original payment method (UPI, debit card, credit card, or net banking): five (5) to seven (7) business days from the date of initiation.</li>
          <li style={{ marginBottom: '0.75rem' }}>Additional bank processing time: your financial institution may require an additional three (3) to five (5) business days to reflect the credit in your account statement.</li>
          <li style={{ marginBottom: '0.75rem' }}>All refunds are processed in Indian Rupees (INR) to the original payment method used at the time of purchase.</li>
        </ul>

        {/* Section 5 */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          5. B2B Merchant Subscriptions
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem' }}>
          The following terms apply to businesses subscribing to PauseSetu&apos;s merchant infrastructure plans (Starter, Growth, and Enterprise):
        </p>
        <ul style={{ color: '#374151', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Free Trial Period:</strong> All Starter and Growth tier subscriptions include a complimentary fourteen (14) day trial period. You may cancel at any time during the trial without incurring any charges.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Monthly Subscriptions:</strong> Merchant subscribers may cancel their plan by providing thirty (30) days written notice via email to hello@pausesetu.in. No refund will be issued for the current billing period. Access to the platform and API services will continue until the end of the current billing cycle.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Enterprise Agreements:</strong> Enterprise tier subscriptions with custom contracts are subject to the refund and cancellation terms specified in the individual service agreement.
          </li>
        </ul>

        {/* Section 6 */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          6. How to Request a Refund
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem' }}>
          To submit a refund request for a PauseSetu Pro subscription, please send an email to <a href="mailto:hello@pausesetu.in" style={{ color: '#2563eb', textDecoration: 'underline' }}>hello@pausesetu.in</a> with the subject line &ldquo;Refund Request&rdquo; and include your registered email or phone number, date and amount of the charge, and reason for the request. We will acknowledge receipt within twenty-four (24) hours and aim to resolve all inquiries within seven (7) business days.
        </p>

        {/* Section 7 */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          7. Cancellation Procedure
        </h2>
        <ul style={{ color: '#374151', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1rem', fontSize: '1.05rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Consumer App (Pro Subscription):</strong> Navigate to the Pro section within the PauseSetu application and select the cancellation option, or send an email to hello@pausesetu.in with your registered account details.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>B2B Merchant Plans:</strong> Submit a written cancellation notice to hello@pausesetu.in at least thirty (30) days prior to your next billing date.
          </li>
        </ul>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
          Upon cancellation, your access to paid features will continue until the end of the current billing period. Your account data will be retained for thirty (30) calendar days following cancellation, after which it will be permanently deleted in accordance with our <Link href="/privacy" style={{ color: '#2563eb', textDecoration: 'underline' }}>Privacy Policy</Link>.
        </p>

        {/* Section 8 */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          8. Independent Service Disclaimer
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
          PauseSetu is an independent subscription management platform. We are not affiliated with, endorsed by, or sponsored by any third-party subscription service including but not limited to Netflix, Spotify, Amazon Prime, Hotstar, Zee5, SonyLIV, JioCinema, YouTube Premium, or any other service listed within our application. All service names and trademarks referenced are the property of their respective owners and are used solely for identification purposes under nominative fair use.
        </p>

        {/* Section 9 */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          9. Governing Law
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
          This Refund and Cancellation Policy shall be governed by and construed in accordance with the laws of the Republic of India, including the Consumer Protection Act, 2019 and the Information Technology Act, 2000. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the competent courts located in Lakhimpur District, Assam, India.
        </p>

        {/* Section 10 */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          10. Contact Information
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.25rem', fontSize: '1.05rem' }}><strong>PauseSetu</strong></p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.25rem', fontSize: '1.05rem' }}>Email: <a href="mailto:hello@pausesetu.in" style={{ color: '#2563eb', textDecoration: 'underline' }}>hello@pausesetu.in</a></p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.25rem', fontSize: '1.05rem' }}>Website: <a href="https://pausesetu.in" style={{ color: '#2563eb', textDecoration: 'underline' }}>https://pausesetu.in</a></p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1.05rem' }}>Jurisdiction: Lakhimpur District, Assam, India</p>

        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '1rem' }} />
        <p style={{ color: '#9ca3af', fontSize: '0.85rem', textAlign: 'center' }}>
          &copy; 2026 PauseSetu. All rights reserved. | Document Version 2.0 | Last revised June 22, 2026
        </p>
      </main>
    </>
  );
}