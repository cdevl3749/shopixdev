
import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins(
  { subsets: ["latin"],
    weight: '400'
}
  );

export const metadata: Metadata = {
  title: "ShopiX Plateformes web sur mesure",
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
        
        </body>
    </html>
  );
}
