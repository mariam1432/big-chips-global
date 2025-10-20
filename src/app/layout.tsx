import Navbar from "./components/Navbar";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./global.css";
import Footer from "./components/Footer";

// Configure your fonts
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

export const metadata = {
  title: "My App",
  description: "Welcome to my app",
};
