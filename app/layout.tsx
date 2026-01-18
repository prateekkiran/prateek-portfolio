import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Prateek Kiran | Product Manager",
  description: "Senior Product Manager specializing in AI/ML products, data platforms, and driving 0-to-1 product initiatives.",
  keywords: ["Product Manager", "AI", "ML", "Data Platforms", "Product Strategy"],
  authors: [{ name: "Prateek Kiran" }],
  openGraph: {
    title: "Prateek Kiran | Product Manager",
    description: "Senior Product Manager specializing in AI/ML products and data platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} antialiased bg-background text-foreground font-medium`}
      >
        {children}
      </body>
    </html>
  );
}
