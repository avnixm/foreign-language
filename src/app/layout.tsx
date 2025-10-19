import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppFrame from "@/components/AppFrame";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4B-EBook — Learn Japanese",
  description: "Interactive Japanese lessons and quizzes. Master Hiragana, Katakana, and Kanji with comprehensive vocabulary, grammar, and conversation practice.",
  keywords: ["Japanese learning", "Learn Japanese", "Japanese lessons", "Japanese quiz", "Hiragana", "Katakana", "Kanji", "Japanese vocabulary", "Japanese grammar"],
  authors: [{ name: "4B-EBook" }],
  creator: "4B-EBook",
  publisher: "4B-EBook",
  metadataBase: new URL('https://4b-ebook.com'),
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://4b-ebook.com',
    title: '4B-EBook — Learn Japanese',
    description: 'Interactive Japanese lessons and quizzes. Master Hiragana, Katakana, and Kanji with comprehensive vocabulary, grammar, and conversation practice.',
    siteName: '4B-EBook',
    images: [
      {
        url: '/4bclasspic.jpeg',
        width: 1200,
        height: 630,
        alt: '4B Class - Japanese Learning Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '4B-EBook — Learn Japanese',
    description: 'Interactive Japanese lessons and quizzes. Master Hiragana, Katakana, and Kanji.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <AppFrame>{children}</AppFrame>
      </body>
    </html>
  );
}
