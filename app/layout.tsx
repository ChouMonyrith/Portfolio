import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Chou Monyrith | Software Developer Portfolio",
  description:
    "Explore Chou Monyrith's software engineering portfolio showcasing SOUND CORE, Borgo, and Scheduly. Specializing in Next.js, React Native, and Laravel to build clean, responsive user interfaces.",
  keywords: [
    "Chou Monyrith",
    "Chou Monyrith Portfolio",
    "Software Developer Phnom Penh",
    "Full-Stack Developer Cambodia",
    "NextJS",
    "React Native",
    "Laravel",
    "SOUND CORE",
    "Borgo App",
    "Scheduly React Native",
  ],
  verification: {
    google: "kX3TxsjoNgG34CeYeIqaCScEkNVMBPNzGPFmL1KvcRQ",
  },
  authors: [{ name: "Chou Monyrith" }],
  openGraph: {
    title: "Chou Monyrith | Software Developer Portfolio",
    description:
      "Explore Chou Monyrith's software engineering portfolio showcasing SOUND CORE, Borgo, and Scheduly. Specializing in Next.js, React Native, and Laravel.",
    url: "https://github.com/ChouMonyrith",
    siteName: "Chou Monyrith Portfolio",
    images: [
      {
        url: "/images/project1.png",
        width: 1200,
        height: 630,
        alt: "Chou Monyrith Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chou Monyrith | Software Developer Portfolio",
    description:
      "Explore Chou Monyrith's software engineering portfolio showcasing SOUND CORE, Borgo, and Scheduly.",
    images: ["/images/project1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${plusJakartaSans.variable} font-sans bg-white text-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
