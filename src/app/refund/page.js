import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Refund & Cancellation Policy - PauseSetu',
  description: 'PauseSetu Refund and Cancellation Policy. Understand our refund terms for pause fees, Pro subscriptions, and merchant plans.',
  openGraph: {
    title: 'Refund & Cancellation Policy - PauseSetu',
    description: 'PauseSetu Refund and Cancellation Policy. Clear terms for refunds, cancellations, and subscription management.',
    url: 'https://pausesetu.in/refund',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PauseSetu - The Bridge to Subscription Control',
    description: 'India\'s first subscription pause infrastructure. Zero friction. Zero churn.',
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
            Pause<span style={{ color: '#2563eb' }}>Setu</span>
          </span>
        </Link>
        <Link href="/" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>
      </nav>

      {/* Content */}
      <main style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '2rem 1.5rem 4rem',
      }}>
        {/* Label */}
        <p style={{
          color: '#2563eb',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          Legal Document
        </p>

        {/* Title */}
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#1a1a2e',
          marginBottom: '1rem',
          lineHeight: 1.2,
        }}>
          Refund &amp; Cancellation Policy
        </h1>

        {/* Date and Version */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          color: '#6b7280',
          fontSize: '0.95rem',
          marginBottom: '1.5rem',
        }}>
          <span><strong>Effective Date:</strong> June 20, 2026</span>
          <span><strong>Version:</strong> 1.0</span>
        </div>

        <hr style={{ border: 'none', borderTop: '2px solid #e5e7eb', marginBottom: '2rem' }} />

        {/* Summary Blockquote */}
        <blockquote style={{
          borderLeft: '4px solid #2563eb',
          paddingLeft: '1.5rem',
          margin: '2rem 0',
          fontStyle: 'italic',
          color: '#4b5563',
          lineHeight: 1.7,
        }}>
          This Refund and Cancellation Policy outlines the terms under which refunds, cancellations, and subscription termination are handled for all PauseSetu services. This policy applies to consumer application users and B2B merchant subscribers. PauseSetu is committed to fair and transparent refund practices in full compliance with applicable Indian consumer protection laws and RBI Payment Aggregator Guidelines.
        </blockquote>

        {/* Intro */}
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
          PauseSetu (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides subscription pause infrastructure for the Indian payment ecosystem. This Refund and Cancellation Policy governs all transactions processed through our consumer application and B2B merchant platform. By using PauseSetu, you acknowledge that you have read and agree to the refund and cancellation terms described herein.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '2rem' }}>
          This policy should be read in conjunction with our <Link href="/terms" style={{ color: '#2563eb', textDecoration: 'underline' }}>Terms of Service</Link> and <Link href="/privacy" style={{ color: '#2563eb', textDecoration: 'underline' }}>Privacy Policy</Link>.
        </p>

        {/* Section 1 */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
          1. Consumer Application — Pause Fees
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
          PauseSetu offers a freemium subscription management model for individual consumers. The following refund terms apply to pause service fees:
        </p>
        <ul style={{ color: '#374151', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>First Pause (Complimentary):</strong> Your first subscription pause on the PauseSetu platform is provided at no charge. No refund is applicable as no payment is collected.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Subsequent Pauses (₹25 + ₹4 GST = ₹29 per pause):</strong> Once a pause action has been successfully executed on your subscription, the service is considered fully rendered. Pause fees are non-refundable after successful execution.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Failed Pause Actions:</strong> If a pause request fails to execute due to a technical error attributable to PauseSetu, the full fee of ₹29 will be refunded automatically to your original payment method within five (5) to seven (7) business days.
          </li>
        </ul>

        {/* Section 2 */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
          2. Consumer Application — Pro Subscription
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
          PauseSetu Pro is a premium subscription tier offering unlimited pauses, CSV export, and priority features. The following refund terms apply:
        </p>
        <ul style={{ color: '#374151', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Monthly Plan (₹99/month):</strong> You may cancel your Pro subscription at any time. Cancellation takes effect at the end of the current billing cycle. No pro-rated refund will be issued for the remaining days of the current billing period. You will retain access to all Pro features until the end of the cycle for which you have already been charged.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Annual Plan (₹899/year):</strong> A full refund is available if cancellation is requested within seven (7) calendar days of the original purchase date, provided no Pro-exclusive features (such as unlimited pauses or CSV export) have been utilised during that period. After seven (7) days, cancellation may be requested at any time, but no refund will be issued. Access to Pro features will continue until the end of the annual subscription period.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Auto-Renewal Charges:</strong> Pro subscriptions renew automatically. If you are charged for a renewal you did not intend, you may request a refund within forty-eight (48) hours of the renewal charge date by contacting us at hello@pausesetu.in. Refund requests beyond forty-eight hours after renewal will be subject to standard cancellation terms as described above.
          </li>
        </ul>

        {/* Section 3 */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
          3. B2B Merchant Subscriptions
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
          The following terms apply to businesses subscribing to PauseSetu&apos;s merchant infrastructure plans (Starter, Growth, and Enterprise):
        </p>
        <ul style={{ color: '#374151', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Free Trial Period:</strong> All Starter and Growth tier subscriptions include a complimentary fourteen (14) day trial period. You may cancel at any time during the trial without incurring any charges. No payment information is charged until the trial period concludes.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Monthly Subscriptions:</strong> Merchant subscribers may cancel their plan by providing thirty (30) days written notice via email to hello@pausesetu.in. No refund will be issued for the current billing period. Access to the platform and API services will continue until the end of the current billing cycle.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Enterprise Agreements:</strong> Enterprise tier subscriptions with custom contracts are subject to the refund and cancellation terms specified in the individual service agreement. Please refer to your signed agreement or contact your dedicated account manager.
          </li>
        </ul>

        {/* Section 4 */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
          4. Refund Processing Timeline
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
          When a refund is approved by PauseSetu, the following processing timelines shall apply:
        </p>
        <ul style={{ color: '#374151', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            Refund initiation by PauseSetu: within two (2) business days of approval.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Credit to your original payment method (UPI, debit card, credit card, or net banking): five (5) to seven (7) business days from the date of initiation.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Additional bank processing time: your financial institution may require an additional three (3) to five (5) business days to reflect the credit in your account statement.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            All refunds are processed in Indian Rupees (INR) to the original payment method used at the time of purchase. We do not issue refunds via alternative payment methods, cash, or third-party wallets.
          </li>
        </ul>

        {/* Section 5 */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
          5. Non-Refundable Items
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
          The following charges and fees are non-refundable under any circumstances:
        </p>
        <ul style={{ color: '#374151', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            Pause service fees for successfully executed pause actions (₹29 per pause).
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Pro subscription charges beyond the applicable refund window described in Section 2.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Services consumed during a free trial period (no payment is collected during trials).
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Payment gateway processing fees, where applicable, that have already been remitted to third-party payment processors.
          </li>
        </ul>

        {/* Section 6 */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
          6. Failed Transactions and Duplicate Charges
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
          If your account is debited without receiving the corresponding service, or if you are charged more than once for the same transaction, the following terms apply:
        </p>
        <ul style={{ color: '#374151', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Duplicate Charges:</strong> Any verified duplicate charge will be fully refunded within five (5) to seven (7) business days of confirmation.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Failed Transactions:</strong> If your payment method is debited but the transaction fails on our platform, the amount will be automatically reversed by your bank or payment provider within five (5) to seven (7) business days. If the reversal does not occur within this timeframe, please contact us with the transaction reference number.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Reporting Window:</strong> All failed or duplicate transaction claims must be reported within thirty (30) calendar days of the original charge date.
          </li>
        </ul>

        {/* Section 7 */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
          7. How to Request a Refund
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
          To submit a refund request, please send an email to <a href="mailto:hello@pausesetu.in" style={{ color: '#2563eb', textDecoration: 'underline' }}>hello@pausesetu.in</a> with the subject line &quot;Refund Request&quot; and include the following details:
        </p>
        <ul style={{ color: '#374151', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            Your registered email address or phone number associated with your PauseSetu account.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Date and approximate time of the transaction.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Amount charged.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Reason for the refund request.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Transaction reference number or payment receipt, if available.
          </li>
        </ul>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          We will acknowledge receipt of your refund request within twenty-four (24) hours and aim to resolve all refund inquiries within seven (7) business days of receipt.
        </p>

        {/* Section 8 */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
          8. Cancellation Procedure
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
          Users and merchants may cancel their subscriptions through the following methods:
        </p>
        <ul style={{ color: '#374151', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Consumer App (Pro Subscription):</strong> Navigate to the Pro section within the PauseSetu application and select the cancellation option, or send an email to hello@pausesetu.in with your registered account details.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>B2B Merchant Plans:</strong> Submit a written cancellation notice to hello@pausesetu.in at least thirty (30) days prior to your next billing date.
          </li>
        </ul>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Upon cancellation, your access to paid features will continue until the end of the current billing period for which payment has already been received. Your account data will be retained for thirty (30) calendar days following cancellation to facilitate reactivation, after which it will be permanently deleted in accordance with our <Link href="/privacy" style={{ color: '#2563eb', textDecoration: 'underline' }}>Privacy Policy</Link>.
        </p>

        {/* Section 9 */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
          9. Independent Service Disclaimer
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          PauseSetu is an independent subscription management platform. We are not affiliated with, endorsed by, or sponsored by any third-party subscription service including but not limited to Netflix, Spotify, Amazon Prime, Hotstar, Zee5, SonyLIV, JioCinema, YouTube Premium, or any other service listed within our application. All service names and trademarks referenced are the property of their respective owners and are used solely for identification purposes under nominative fair use.
        </p>

        {/* Section 10 */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
          10. Modifications to This Policy
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          PauseSetu reserves the right to modify, amend, or update this Refund and Cancellation Policy at any time. Material changes will be communicated through prominent notice on our website or via direct email to registered users with a minimum of thirty (30) days advance notice. Your continued use of the Service after any such modification shall constitute your acceptance of the revised policy.
        </p>

        {/* Section 11 */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
          11. Governing Law
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          This Refund and Cancellation Policy shall be governed by and construed in accordance with the laws of the Republic of India, including the Consumer Protection Act, 2019 and the Information Technology Act, 2000. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the competent courts located in Guwahati, Assam, India.
        </p>

        {/* Section 12 */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
          12. Contact Information
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem' }}>
          For any questions, concerns, or refund requests, please contact us using the information provided below:
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.25rem' }}>
          <strong>PauseSetu</strong>
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.25rem' }}>
          Email: <a href="mailto:hello@pausesetu.in" style={{ color: '#2563eb', textDecoration: 'underline' }}>hello@pausesetu.in</a>
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.25rem' }}>
          Website: <a href="https://pausesetu.in" style={{ color: '#2563eb', textDecoration: 'underline' }}>https://pausesetu.in</a>
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '2rem' }}>
          Jurisdiction: Lakhimpur District, Assam, India
        </p>

        {/* Footer */}
        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '1rem' }} />
        <p style={{ color: '#9ca3af', fontSize: '0.85rem', textAlign: 'center' }}>
          © 2026 PauseSetu. All rights reserved. | Document Version 1.0 | Last revised June 20, 2026
        </p>
      </main>
    </>
  );
}