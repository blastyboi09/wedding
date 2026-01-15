import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JD & Joi Wedding | June 21, 2026",
  description: "Join us in celebrating our love. June 21, 2026 in Alfonso, Cavite, Philippines.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
