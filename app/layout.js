import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { NextAuthProviders } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Company Management System",
  description: "Company Management System",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">  
        <body className={inter.className}>
            <NextAuthProviders>
                  {children}
            </NextAuthProviders>
            
        </body>
    </html>
  );
}
