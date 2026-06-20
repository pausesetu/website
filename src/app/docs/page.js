import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'API Documentation - PauseSetu',
  description: 'PauseSetu API Documentation. Integrate subscription pause infrastructure into your application in under 10 minutes.',
  openGraph: {
    title: 'API Documentation - PauseSetu',
    description: 'Developer documentation for PauseSetu — India\'s first subscription pause infrastructure API.',
    url: 'https://pausesetu.in/docs',
  },
};

const codeBlock = {
  backgroundColor: '#1a1a2e',
  color: '#e2e8f0',
  padding: '1.25rem 1.5rem',
  borderRadius: '8px',
  fontSize: '0.9rem',
  fontFamily: "'Courier New', Consolas, monospace",
  lineHeight: 1.7,
  overflowX: 'auto',
  margin: '1rem 0 1.5rem',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-all',
};

const keyColor = '#7dd3fc';
const strColor = '#86efac';
const commentColor = '#64748b';
const numColor = '#fbbf24';

export default function DocsPage() {
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
          ← Back to Home
        </Link>
      </nav>

      {/* Content */}
      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem 2rem 4rem',
      }}>
        {/* Label */}
        <p style={{
          color: '#16a34a',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          Developer Documentation
        </p>

        {/* Title */}
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#1a1a2e',
          marginBottom: '0.75rem',
          lineHeight: 1.2,
        }}>
          PauseSetu API
        </h1>

        <p style={{
          color: '#6b7280',
          fontSize: '1.1rem',
          marginBottom: '2rem',
          lineHeight: 1.6,
        }}>
          Integrate subscription pause infrastructure into your application. Keep mandates alive while billing sleeps.
        </p>

        <hr style={{ border: 'none', borderTop: '2px solid #e5e7eb', marginBottom: '2.5rem' }} />

        {/* Quick Info Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}>
          <div style={{
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
          }}>
            <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0 0 0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Base URL</p>
            <p style={{ fontSize: '0.85rem', color: '#1a1a2e', margin: 0, fontFamily: "'Courier New', monospace", fontWeight: 600 }}>pausesetu-api.onrender.com</p>
          </div>
          <div style={{
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            backgroundColor: '#eff6ff',
            border: '1px solid #bfdbfe',
          }}>
            <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0 0 0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Protocol</p>
            <p style={{ fontSize: '0.85rem', color: '#1a1a2e', margin: 0, fontWeight: 600 }}>REST + JSON</p>
          </div>
          <div style={{
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            backgroundColor: '#fefce8',
            border: '1px solid #fde68a',
          }}>
            <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0 0 0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Auth</p>
            <p style={{ fontSize: '0.85rem', color: '#1a1a2e', margin: 0, fontWeight: 600 }}>API Key + HMAC</p>
          </div>
        </div>

        {/* Overview */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Overview
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem', textAlign: 'justify' }}>
          PauseSetu is middleware infrastructure that sits between your application and payment gateways (Razorpay, Cashfree, PhonePe). When a subscriber wants to take a break, PauseSetu pauses their recurring charge while keeping the underlying bank mandate active. When the pause period ends, billing resumes automatically — no new 2FA, no re-signup, no friction.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem', textAlign: 'justify' }}>
          The API follows REST conventions. All requests and responses use JSON. Authentication is via SHA-256 hashed API keys for server-to-server calls, and HMAC-SHA256 signed webhooks for event notifications.
        </p>

        {/* Authentication */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Authentication
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem', textAlign: 'justify' }}>
          All API requests require authentication via your API key. Include it in the <span style={{ fontFamily: "'Courier New', monospace", backgroundColor: '#f1f5f9', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.9rem' }}>X-API-Key</span> header. Keys are SHA-256 hashed before storage — PauseSetu never stores your raw key.
        </p>

        <div style={codeBlock}>
          <span style={{ color: commentColor }}>{'# Include your API key in every request'}</span>{'\n'}
          <span style={{ color: keyColor }}>curl</span> -X GET https://pausesetu-api.onrender.com/api/v1/merchant/subscriptions \{'\n'}
          {'  '}-H <span style={{ color: strColor }}>{'"X-API-Key: your_api_key_here"'}</span> \{'\n'}
          {'  '}-H <span style={{ color: strColor }}>{'"Content-Type: application/json"'}</span>
        </div>

        {/* Core Endpoints */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Core Endpoints
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem', textAlign: 'justify' }}>
          The PauseSetu API provides endpoints for managing subscriptions, executing pauses and resumes, handling Pro tier upgrades, and retrieving analytics. All endpoints are prefixed with <span style={{ fontFamily: "'Courier New', monospace", backgroundColor: '#f1f5f9', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.9rem' }}>/api/v1</span>.
        </p>

        {/* Endpoints Table */}
        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8fafc', textAlign: 'left' }}>
                <th style={{ padding: '0.75rem 1rem', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#475569' }}>Method</th>
                <th style={{ padding: '0.75rem 1rem', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#475569' }}>Endpoint</th>
                <th style={{ padding: '0.75rem 1rem', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#475569' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['POST', '/subscriptions', 'Create a new subscription'],
                ['GET', '/subscriptions', 'List all subscriptions'],
                ['GET', '/subscriptions/{id}', 'Get subscription details'],
                ['PUT', '/subscriptions/{id}', 'Update a subscription'],
                ['DELETE', '/subscriptions/{id}', 'Delete a subscription'],
                ['POST', '/subscriptions/{id}/pause', 'Pause a subscription'],
                ['POST', '/subscriptions/{id}/resume', 'Resume a paused subscription'],
                ['POST', '/pro/subscribe', 'Subscribe to Pro tier'],
                ['GET', '/pro/status', 'Check Pro subscription status'],
                ['GET', '/analytics/summary', 'Get spending analytics'],
                ['GET', '/analytics/export/csv', 'Export data as CSV (Pro)'],
                ['POST', '/merchant/webhooks', 'Register a webhook endpoint'],
                ['POST', '/ai/parse-date', 'Parse natural language dates'],
              ].map(([method, endpoint, desc], i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '0.6rem 1rem' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      fontFamily: "'Courier New', monospace",
                      backgroundColor: method === 'GET' ? '#dbeafe' : method === 'POST' ? '#dcfce7' : method === 'PUT' ? '#fef3c7' : '#fecaca',
                      color: method === 'GET' ? '#1d4ed8' : method === 'POST' ? '#15803d' : method === 'PUT' ? '#a16207' : '#dc2626',
                    }}>{method}</span>
                  </td>
                  <td style={{ padding: '0.6rem 1rem', fontFamily: "'Courier New', monospace", fontSize: '0.85rem', color: '#374151' }}>{endpoint}</td>
                  <td style={{ padding: '0.6rem 1rem', color: '#6b7280' }}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pause Flow */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Pause a Subscription
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem', textAlign: 'justify' }}>
          The pause endpoint transitions a subscription through a five-state machine: <span style={{ fontFamily: "'Courier New', monospace", backgroundColor: '#f1f5f9', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.85rem' }}>ACTIVE → PAUSE_REQUESTED → PAUSED → RESUME_SCHEDULED → ACTIVE</span>. The bank mandate remains active throughout the pause period. When the resume date arrives, billing restarts automatically without requiring new 2FA from the subscriber.
        </p>

        <div style={codeBlock}>
          <span style={{ color: commentColor }}>{'# Pause a subscription for 30 days'}</span>{'\n'}
          <span style={{ color: keyColor }}>curl</span> -X POST https://pausesetu-api.onrender.com/api/v1/subscriptions/{'{'}<span style={{ color: numColor }}>id</span>{'}'}/pause \{'\n'}
          {'  '}-H <span style={{ color: strColor }}>{'"X-API-Key: your_api_key_here"'}</span> \{'\n'}
          {'  '}-H <span style={{ color: strColor }}>{'"Content-Type: application/json"'}</span> \{'\n'}
          {'  '}-d <span style={{ color: strColor }}>{'\'{"pause_days": 30, "reason": "vacation"}\''}
          </span>
        </div>

        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem', fontSize: '1.05rem' }}>
          <strong>Response:</strong>
        </p>
        <div style={codeBlock}>
          {'{\n'}
          {'  '}<span style={{ color: keyColor }}>{'"status"'}</span>: <span style={{ color: strColor }}>{'"paused"'}</span>,{'\n'}
          {'  '}<span style={{ color: keyColor }}>{'"pause_start"'}</span>: <span style={{ color: strColor }}>{'"2026-06-21T00:00:00Z"'}</span>,{'\n'}
          {'  '}<span style={{ color: keyColor }}>{'"resume_date"'}</span>: <span style={{ color: strColor }}>{'"2026-07-21T00:00:00Z"'}</span>,{'\n'}
          {'  '}<span style={{ color: keyColor }}>{'"mandate_status"'}</span>: <span style={{ color: strColor }}>{'"active"'}</span>,{'\n'}
          {'  '}<span style={{ color: keyColor }}>{'"charge"'}</span>: <span style={{ color: numColor }}>0</span>,{'\n'}
          {'  '}<span style={{ color: keyColor }}>{'"message"'}</span>: <span style={{ color: strColor }}>{'"Subscription paused successfully"'}</span>{'\n'}
          {'}'}
        </div>

        {/* Webhooks */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Webhooks
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem', textAlign: 'justify' }}>
          PauseSetu sends real-time event notifications to your registered webhook URL. All webhook payloads are signed with HMAC-SHA256 using your webhook secret. Verify the <span style={{ fontFamily: "'Courier New', monospace", backgroundColor: '#f1f5f9', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.9rem' }}>X-PauseSetu-Signature</span> header to ensure payload authenticity.
        </p>

        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem', fontSize: '1.05rem' }}>
          <strong>Supported events:</strong>
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 2rem', marginBottom: '1.5rem', paddingLeft: '0.5rem' }}>
          {[
            'subscription.created',
            'subscription.paused',
            'subscription.resumed',
            'subscription.cancelled',
            'pause.requested',
            'pause.auto_resumed',
            'pro.subscribed',
            'pro.expired',
          ].map((evt, i) => (
            <p key={i} style={{
              margin: '0.25rem 0',
              fontFamily: "'Courier New', monospace",
              fontSize: '0.85rem',
              color: '#374151',
              padding: '0.3rem 0.5rem',
              backgroundColor: i % 2 === 0 ? '#f8fafc' : 'transparent',
              borderRadius: '4px',
            }}>{evt}</p>
          ))}
        </div>

        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem', fontSize: '1.05rem' }}>
          <strong>Verifying webhook signatures (Python):</strong>
        </p>
        <div style={codeBlock}>
          <span style={{ color: keyColor }}>import</span> hmac, hashlib{'\n\n'}
          <span style={{ color: keyColor }}>def</span> <span style={{ color: '#c084fc' }}>verify_signature</span>(payload, signature, secret):{'\n'}
          {'    '}expected = hmac.new({'\n'}
          {'        '}secret.encode(),{'\n'}
          {'        '}payload.encode(),{'\n'}
          {'        '}hashlib.sha256{'\n'}
          {'    '}).hexdigest(){'\n'}
          {'    '}<span style={{ color: keyColor }}>return</span> hmac.compare_digest(expected, signature)
        </div>

        {/* AI Date Parsing */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          AI Date Parsing
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem', textAlign: 'justify' }}>
          PauseSetu includes a built-in natural language date parser powered by a two-layer system: local regex for common patterns, with Gemini 2.0 Flash as an intelligent fallback. Supports English, Hindi, and Hinglish inputs — your subscribers can say &quot;pause for 2 weeks&quot; or &quot;15 din ke liye rok do&quot; and PauseSetu will resolve the correct resume date.
        </p>
        <div style={codeBlock}>
          <span style={{ color: commentColor }}>{'# Parse a natural language date'}</span>{'\n'}
          <span style={{ color: keyColor }}>curl</span> -X POST https://pausesetu-api.onrender.com/api/v1/ai/parse-date \{'\n'}
          {'  '}-H <span style={{ color: strColor }}>{'"Content-Type: application/json"'}</span> \{'\n'}
          {'  '}-d <span style={{ color: strColor }}>{'\'{"text": "pause for 2 weeks", "language": "en"}\''}</span>{'\n\n'}
          <span style={{ color: commentColor }}>{'# Response'}</span>{'\n'}
          {'{ '}<span style={{ color: keyColor }}>{'"parsed_date"'}</span>: <span style={{ color: strColor }}>{'"2026-07-05"'}</span>, <span style={{ color: keyColor }}>{'"confidence"'}</span>: <span style={{ color: numColor }}>0.95</span>, <span style={{ color: keyColor }}>{'"parser"'}</span>: <span style={{ color: strColor }}>{'"regex"'}</span> {'}'}
        </div>

        {/* Error Codes */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Error Codes
        </h2>
        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8fafc', textAlign: 'left' }}>
                <th style={{ padding: '0.75rem 1rem', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#475569' }}>Code</th>
                <th style={{ padding: '0.75rem 1rem', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#475569' }}>Meaning</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['200', 'Request successful'],
                ['201', 'Resource created successfully'],
                ['400', 'Bad request — check your request body'],
                ['401', 'Unauthorized — invalid or missing API key'],
                ['403', 'Forbidden — insufficient permissions or Pro feature required'],
                ['404', 'Resource not found'],
                ['409', 'Conflict — subscription already in requested state'],
                ['422', 'Validation error — check field requirements'],
                ['429', 'Rate limited — too many requests'],
                ['500', 'Server error — contact support'],
              ].map(([code, meaning], i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{
                    padding: '0.6rem 1rem',
                    fontFamily: "'Courier New', monospace",
                    fontWeight: 700,
                    color: code.startsWith('2') ? '#15803d' : code.startsWith('4') ? '#a16207' : '#dc2626',
                  }}>{code}</td>
                  <td style={{ padding: '0.6rem 1rem', color: '#374151' }}>{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Rate Limits */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Rate Limits
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem', textAlign: 'justify' }}>
          API requests are rate limited per API key. Starter plans allow 100 requests per minute. Growth and Enterprise plans have higher limits based on your agreement. When rate limited, the API returns HTTP 429 with a <span style={{ fontFamily: "'Courier New', monospace", backgroundColor: '#f1f5f9', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.9rem' }}>Retry-After</span> header indicating how many seconds to wait before retrying.
        </p>

        {/* Integration */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1a1a2e', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Quick Integration
        </h2>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem', fontSize: '1.05rem', textAlign: 'justify' }}>
          <strong>Step 1.</strong> Sign up for early access and receive your API key.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem', fontSize: '1.05rem', textAlign: 'justify' }}>
          <strong>Step 2.</strong> Connect your Razorpay, Cashfree, or PhonePe account.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '0.5rem', fontSize: '1.05rem', textAlign: 'justify' }}>
          <strong>Step 3.</strong> Add a &quot;Pause&quot; button in your subscriber dashboard that calls our pause endpoint.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem', textAlign: 'justify' }}>
          <strong>Step 4.</strong> Register your webhook URL to receive real-time pause and resume notifications.
        </p>

        {/* Support CTA */}
        <div style={{
          marginTop: '2.5rem',
          padding: '2rem',
          backgroundColor: '#f0fdf4',
          borderRadius: '12px',
          border: '1px solid #bbf7d0',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '1.15rem', fontWeight: 600, color: '#1a1a2e', margin: '0 0 0.5rem' }}>
            Ready to integrate?
          </p>
          <p style={{ color: '#374151', margin: '0 0 1.25rem', lineHeight: 1.6 }}>
            Join the waitlist for early access and your API key. We&apos;ll have you live in under 10 minutes.
          </p>
          <a href="/#waitlist" style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            backgroundColor: '#16a34a',
            color: '#ffffff',
            borderRadius: '100px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
          }}>
            Join the Waitlist
          </a>
        </div>

        {/* Contact */}
        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
            Questions about integration? Email us at{' '}
            <a href="mailto:hello@pausesetu.in" style={{ color: '#2563eb', textDecoration: 'underline' }}>hello@pausesetu.in</a>
          </p>
        </div>

        {/* Footer */}
        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '2.5rem', marginBottom: '1rem' }} />
        <p style={{ color: '#9ca3af', fontSize: '0.85rem', textAlign: 'center' }}>
          © 2026 PauseSetu. All rights reserved. | API Version 2.1.0 | Built in Assam, India
        </p>
      </main>
    </>
  );
}