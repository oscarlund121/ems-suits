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
