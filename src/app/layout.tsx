import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Copilot Enterprise - Transform Your Development Workflow",
  description: "Enterprise-grade AI platform that automates complex tasks, generates production-ready code, and accelerates innovation with unparalleled security and compliance.",
  keywords: "AI, artificial intelligence, code generation, enterprise, development, automation, productivity",
  authors: [{ name: "AI Copilot Enterprise" }],
  openGraph: {
    title: "AI Copilot Enterprise - Transform Your Development Workflow",
    description: "Enterprise-grade AI platform trusted by Fortune 500 companies",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
