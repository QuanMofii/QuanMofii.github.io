import type { Metadata } from "next";
import "./globals.css";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Saprona_Regular = localFont({
  src: "./fonts/Saprona-Regular.woff",
  display: "swap",
  variable: "--Saprona_Regular",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vitdonut.github.io/portfolio"),
  title: {
    default: "Hà Minh Quân | vitdonut | AI Engineer Portfolio",
    template: "%s | Hà Minh Quân - vitdonut",
  },
  description:
    "I'm Hà Minh Quân (vitdonut), an AI Engineer specialized in Chatbots, LLMs, AI Agents, and NLP applications. Building intelligent machines that think, speak, and connect like humans.",
  keywords: [
    "Hà Minh Quân",
    "vitdonut",
    "AI Engineer",
    "Chatbot Developer",
    "LLM Specialist",
    "AI Agent Developer",
    "NLP Engineer",
    "Frontend Design",
    "Backend Architect",
    "Deploy AI",
    "Large Language Models",
    "Conversational AI",
    "Portfolio Hà Minh Quân",
    "vitdonut Portfolio",
    "Vietnam AI Engineer",
  ],
  authors: [
    {
      name: "Hà Minh Quân",
      url: "https://vitdonut.github.io/portfolio",
    },
  ],
  creator: "Hà Minh Quân (vitdonut)",
  publisher: "Hà Minh Quân",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "vi-VN": "/vi",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vitdonut.github.io/portfolio",
    siteName: "Hà Minh Quân | AI Engineer Portfolio",
    title: "Hà Minh Quân | AI Engineer | Chatbot, LLM & AI Agent Specialist",
    description:
      "Explore the portfolio of Hà Minh Quân (vitdonut), an AI Engineer focusing on Chatbots, LLMs, NLP, and AI Agents development. Let's build the future of intelligent interaction.",
    images: [
      {
        url: "https://vitdonut.github.io/portfolio/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Hà Minh Quân - AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hà Minh Quân | AI Engineer | Chatbot, LLM & AI Agent Specialist",
    description:
      "Portfolio of Hà Minh Quân (vitdonut), AI Engineer specializing in Chatbots, LLMs, NLP, and AI-driven solutions.",
    creator: "@vitdonut_ai",
    images: ["https://vitdonut.github.io/portfolio/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,

      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ZZkPNFkZS-d1KtXlcA9ri2j9YP0WepMMkPfCln9Qcik",
    yandex: "",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hà Minh Quân",
              alternateName: "vitdonut",
              url: "https://vitdonut.github.io/portfolio",
              image: "https://vitdonut.github.io/portfolio/avatar.jpg",
              jobTitle: "AI Engineer | Chatbot Developer | LLM Specialist",
              worksFor: {
                "@type": "Organization",
                name: "vitdonut",
              },
              sameAs: [
                "https://github.com/vitdonut",
                "https://linkedin.com/in/vitdonut",
                "https://twitter.com/vitdonut_ai",
              ],
              description:
                "Hà Minh Quân (vitdonut) is an AI Engineer dedicated to developing Chatbots, LLMs, AI Agents, and NLP-driven intelligent solutions.",
            }),
          }}
        />
      </head>
      <body
        className={`${Saprona_Regular.className}  ${geistMono.className} antialiased text-black`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
