import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "EMS Dragt - Professionelle EMS Træningsdragter",
  description: "Professionelle EMS dragter til erhverv og private. Avanceret teknologi for optimal træning.",
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicon/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png', 
        sizes: '512x512',
        url: '/favicon/android-chrome-512x512.png',
      }
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body
        className={`${inter.variable} ${lexend.variable} antialiased font-lexend`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
