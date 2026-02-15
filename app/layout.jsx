import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Happy Valentine's Day ❤️",
    template: "%s | For My Love",
  },
  description:
    "A special Valentine's Day gift made with love, just for you. Every line of code written with you in mind. ❤️",
  keywords: [
    "Valentine's Day",
    "Love",
    "Romance",
    "Special Gift",
    "For My Girlfriend",
    "Made with Love",
  ],
  authors: [
    {
      name: "Your Loving Boyfriend",
      url: "https://github.com/JPAVictoria",
    },
  ],
  creator: "Made with ❤️ for the most amazing girl",
  openGraph: {
    title: "Happy Valentine's Day, My Love ❤️",
    description:
      "A special surprise crafted just for you this Valentine's Day. You mean the world to me. 💕",
    url: "https://to-my-vey.vercel.app",
    siteName: "Valentine's Gift",
    images: [
      {
        url: "https://to-my-vey.vercel.app/memory6.jpg",
        width: 1200,
        height: 630,
        alt: "Valentine's Day Special - Made with Love",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
