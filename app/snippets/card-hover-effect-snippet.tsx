import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
        title: "Website Design",
        description:
          "Nous créons des sites Web entièrement réactifs qui s'affichent parfaitement sur tous les appareils. Nos sites Web sont conçus pour convertir les visiteurs en clients.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
        title: "E-commerce Store",
        description:
          "Des petits magasins aux grands détaillants en ligne, nous avons l'expertise nécessaire pour créer un magasin qui vous aidera à développer votre entreprise.",
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
        title: "Authentication",
        description:
          "Solutions d'authentification sécurisées pour votre site Web ou votre application. Nous utilisons les dernières technologies pour protéger vos données.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
        title: "Social Media",
        description:
          "Nous offrons des services de gestion des réseaux sociaux et de création de publicités. Nous pouvons vous aider à développer votre présence sur les réseaux sociaux et à atteindre de nouveaux clients.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600" /></div>,
        title: "App Development",
        description:
          "Nous créons des applications mobiles sur mesure pour iOS et Android. Nos applications sont conçues pour être conviviales et performantes.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
        title: "Support",
        description:
          "Nous offrons une assistance à tous nos clients. Nous sommes là pour vous aider en cas de problème ou de question.",
    
      },
];
