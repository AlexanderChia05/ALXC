import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALXC — Portfolio",
  description: "Monochrome, minimal, scroll-snapped portfolio.",
  openGraph: { title: "ALXC — Portfolio", description: "Monochrome, minimal portfolio.", type: "website" },
  twitter: { card: "summary_large_image", title: "ALXC — Portfolio", description: "Monochrome, minimal portfolio." }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-net" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
