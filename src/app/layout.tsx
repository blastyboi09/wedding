import type { Metadata } from "next";
import "./globals.css";
import Flowers3D from "@/components/Flower3D/Flower3D";

export const metadata: Metadata = {
  title: "JD & Joi Wedding | June 21, 2026",
  description: "Join us in celebrating our love. June 21, 2026 in Alfonso, Cavite, Philippines.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
      <Flowers3D />
      {children}
      </body>
      </html>
  );
}