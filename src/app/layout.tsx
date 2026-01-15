import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JoiSter Wedding | June 21, 2026",
  description: "Join us in celebrating the wedding of JD and Joi. June 21, 2026 in Manila, Philippines.",
  keywords: ["wedding", "JD and Joi", "2026", "Manila", "Philippines"],
  openGraph: {
    title: "JoiSter Wedding",
    description: "We're getting married! Join us on June 21, 2026",
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
