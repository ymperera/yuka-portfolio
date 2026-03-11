import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yuka Perera | MIT Engineer, Co-founder, Product Builder",
  description: "MIT-educated engineer and co-founder building products that solve real user problems. Strategy consultant by day, product builder by passion.",
  openGraph: {
    title: "Yuka Perera | MIT Engineer, Co-founder, Product Builder",
    description: "MIT-educated engineer and co-founder building products that solve real user problems. Strategy consultant by day, product builder by passion.",
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
    title: "Yuka Perera | MIT Engineer, Co-founder, Product Builder",
    description: "MIT-educated engineer and co-founder building products that solve real user problems. Strategy consultant by day, product builder by passion.",
    images: ["https://yukaperera.com/images/Yuka_Headshot.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
