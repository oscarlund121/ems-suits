import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Times New Roman er en system font, så vi kan definere den direkte
const timesNewRoman = {
  variable: "--font-times",
  style: { fontFamily: "'Times New Roman', serif" }
};

const helvetica = {
  variable: "--font-helvetica", 
  style: { fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }
};

export const metadata = {
  title: "EMS Dragt - Professionelle EMS Træningsdragter",
  description: "Professionelle EMS dragter til erhverv og private. Avanceret teknologi for optimal træning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body
        className={`${inter.variable} ${timesNewRoman.variable} ${helvetica.variable} antialiased font-times`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
