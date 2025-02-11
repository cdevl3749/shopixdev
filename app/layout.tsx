import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';
// import Navbar from '@/components/navbar';
// import ScrollToTopButton from '@/components/ScrollToTopButton';




// import CookieConsentBanner from "@/components/CookieConsentBanner";


const font = Poppins(
  { subsets: ["latin"],
    weight: '400'
}
  );

export const metadata: Metadata = {
  title: "ShopiX Optimisez votre activité",
  description: "Créez, développez et faites évoluer votre entreprise",
  icons: {
    icon: '/favicon.ico',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      
      <body 
      
      suppressHydrationWarning={true}
      className={font.className}>
         <Analytics /> 
        {children}
        {/* <ScrollToTopButton /> */}
        {/* <CookieConsentBanner /> */}
        <Footer /> 
        </body>
    </html>
  );
}