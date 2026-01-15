import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JD & Joi Wedding | March 15, 2026",
  description: "Join us in celebrating the wedding of JD and Joi. March 15, 2026 in Manila, Philippines.",
  keywords: ["wedding", "JD and Joi", "2026", "Manila", "Philippines"],
  openGraph: {
    title: "JD & Joi Wedding",
    description: "We're getting married! Join us on March 15, 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
