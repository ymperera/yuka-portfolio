import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuka Perera | Product Manager & Builder",
  description: "MIT-educated product manager and co-founder of Nomad Mannequin. Building products that bridge strategy and execution.",
  openGraph: {
    title: "Yuka Perera | Product Manager & Builder",
    description: "MIT-educated product manager and co-founder of Nomad Mannequin. Building products that bridge strategy and execution.",
    images: [
      {
        url: "/images/Yuka_Headshot.png",
        width: 1200,
        height: 1200,
        alt: "Yuka Perera",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuka Perera | Product Manager & Builder",
    description: "MIT-educated product manager and co-founder of Nomad Mannequin. Building products that bridge strategy and execution.",
    images: ["/images/Yuka_Headshot.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
