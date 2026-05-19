import "./globals.css";
export const metadata = {
  title: "PauseSetu — The Bridge to Subscription Control",
  description: "India's first subscription pause infrastructure. Resume billing under the existing RBI mandate — zero re-authentication, zero churn.",
  keywords: "subscription pause, RBI 2FA, churn reduction, recurring payments India, Razorpay pause, mandate management, PauseSetu",
  openGraph: {
    title: "PauseSetu — India's Subscription Pause Infrastructure",
    description: "Don't let Pause become Cancel. Resume billing under the existing RBI mandate.",
    url: "https://pausesetu.in",
    siteName: "PauseSetu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PauseSetu — The Bridge to Subscription Control",
    description: "India's first subscription pause infrastructure. Zero friction. Zero churn.",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}