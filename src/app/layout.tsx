import type { Metadata } from "next";
import { Outfit, Montserrat, Roboto, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ThemeWrapper from "@/components/ThemeWrapper";
import Sidebar from "@/components/Sidebar";
import DynamicBackground from "@/components/DynamicBackground";
import MouseFollower from "@/components/MouseFollower";
import Header from "@/components/Header";

const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });
const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ["latin"], variable: '--font-roboto' });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: "TechNova - Future of Tech News",
  description: "Daily updates on AI, Crypto, Space, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={`${outfit.variable} ${montserrat.variable} ${roboto.variable} ${inter.variable} ${dmSans.variable} font-sans`}>
        <ThemeWrapper>
          <MouseFollower />
          <DynamicBackground />
          <Header />
          <Sidebar />
          <main className="min-h-screen pt-24 pb-12 relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
