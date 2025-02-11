import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from "next/link"



const FAQS = () => {
    return ( 
        <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
          <div className=" p-10 md:p-4 md:px-20">
            <div className="text-3xl md:text-7xl font-bold text-black">
              Vous avez des questions ?
            </div>
            <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
              Obtenez des réponses.
            </div>
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Qui sommes-nous ?</AccordionTrigger>
      <AccordionContent>
        ShopiX est une agence de marketing à part entière spécialisée dans l&apos;image de marque, la conception de sites Web et le marketing numérique.
        Nous sommes spécialisés dans la création de solutions technologiques innovantes, 
        entièrement personnalisées, au service de clients issus de divers secteurs d&apos;activité. 
        Notre approche de travail nous permet de concevoir des solutions sur mesure, efficaces, performantes, 
        et offrant un retour sur investissement rapide et à haute valeur ajoutée.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Comment commencer ?</AccordionTrigger>
      <AccordionContent>
        Vous pouvez commencer par <Link href="/contact" className="text-emerald-600 hover:underline">nous contacter</Link>. Nous vous répondrons dans les 24 heures, via notre formulaire de contact.
      </AccordionContent>
    </AccordionItem>

      <AccordionItem value="item-4">
      <AccordionTrigger>
    Allez-vous maintenir mon site pour moi ?

        </AccordionTrigger>
      <AccordionContent>
        Une maintenance régulière est essentielle pour qu&apos;un site Web stabilise sa flexibilité et sa fiabilité. Une maintenance appropriée contribuera à garantir la sécurité de votre site Web, à attirer de nouveaux visiteurs, à augmenter le trafic et bien plus encore.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>
    Tarif ?
      </AccordionTrigger>
      <AccordionContent>
        Nous proposons des solutions sur mesure pour votre entreprise. <Link href="/pricing" className="text-emerald-600 hover:underline">Découvrez nos Plans tarifaires</Link>.
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-4">
      <AccordionTrigger>
    Support ?
        </AccordionTrigger>
      <AccordionContent>
        Nous offrons une assistance du lundi au vendredi à tous nos clients.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  
          </div>
        </div> );
}
 
export default FAQS;