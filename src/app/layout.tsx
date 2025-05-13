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

const MarlinGeoSQ_Regular = localFont({
  src: "./fonts/MarlinGeoSQ-Regular.woff",
  display: "swap",
  variable: "--MarlinGeoSQ_Regular",
});
const MarlinGeoSQ_Medium = localFont({
  src: "./fonts/MarlinGeoSQ-Medium.woff",
  display: "swap",
  variable: "--MarlinGeoSQ-Medium",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://lilducks.github.io/portfolio"),
  title: {
    default: "LilDucks | Ha Minh Quan ",
    template: "%s | LilDucks",
  },
  description:
    "Portfolio of Ha Minh Quan (a.k.a LilDucks), AI/NLP engineer specializing in LLMs and conversational AI, with projects in chatbot and language tech.",
  keywords: [
    "Hà Minh Quân",
    "Ha Minh Quan",
    "lilducks",
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
    "Portfolio Ha Minh Quan",
    "LilDucks Portfolio",
    "Vietnam AI Engineer",
  ],
  authors: [
    {
      name: "LilDucks",
      url: "https://lilducks.github.io/portfolio",
    },
  ],
  creator: "LilDucks",
  publisher: "LilDucks",
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
    url: "https://lilducks.github.io/portfolio",
    siteName: "LilDucks | Ha Minh Quan  Portfolio",
    title: "LilDucks | Ha Minh Quan  Portfolio",
    description:
      "Portfolio of Ha Minh Quan (a.k.a LilDucks), AI engineer in NLP, LLMs, and chatbots.",
    images: [
      {
        url: "https://lilducks.github.io/portfolio/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Hà Minh Quân - AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hà Minh Quân | AI Engineer",
    description:
      "Portfolio of Ha Minh Quan (a.k.a LilDucks), AI engineer in NLP, LLMs, and chatbots.",
    creator: "@lilducks",
    images: ["https://lilducks.github.io/portfolio/avatar.jpg"],
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
    icon: "/portfolio/favicon.ico",
    shortcut: "/portfolio/favicon-16x16.png",
    apple: "/portfolio/apple-touch-icon.png",
    other: [{ rel: "mask-icon", url: "/portfolio/safari-pinned-tab.svg" }],
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
              name: "Ha Minh Quan",
              alternateName: "JellyMofii",
              url: "https://JellyMofii.github.io/",
              image: "https://JellyMofii.github.io/avatar.jpg",
              jobTitle: "AI Engineer | Chatbot Developer | LLM Specialist",
              worksFor: {
                "@type": "Organization",
                name: "JellyMofii",
              },
              sameAs: [
                "https://github.com/JellyMofii",
                "https://www.linkedin.com/in/ha-minh-quan-b10717294/",
                "https://x.com/JellyMofii",
              ],
              description:
                "JellyMoffi also known as Ha Minh Quan is an AI Engineer dedicated to developing Chatbots, LLMs, AI Agents, and NLP-driven intelligent solutions.",
            }),
          }}
        />
      </head>
      <body
        className={`${MarlinGeoSQ_Regular.className} ${geistMono.className} ${MarlinGeoSQ_Medium.variable}  antialiased text-black `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
