"use client";

import Navbar from "@/components/navbar";

const Conditions = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-black/[0.96] bg-grid-white/[0.02]">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />
      <div className="container mx-auto px-4 py-12 text-white max-w-4xl overflow-y-auto">
        <h1 className="text-4xl font-bold mb-8">Politique de confidentialité</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">En vigueur depuis le : 25/05/18</h2>
          <p className="mb-4">
           Nous mettons un point d&apos;honneur à respecter la vie privée de nos utilisateurs et à traiter leurs données personnelles dans la plus stricte confidentialité et conformément à la législation en vigueur.
          </p>
        </section>

        <section className="mb-8">
          <p className="mb-4">
            La charte vie privée est destinée à vous informer, en toute transparence, au sujet des données que nous collectons, du but de leur collecte, de la manière dont nous les utilisons et des droits dont vous disposez concernant le traitement de vos données à caractère personnel.
          </p>
        </section>

        <section className="mb-8">
          <p className="mb-4">
            Si vous deviez avoir d&apos;autres questions, n&apos;hésitez pas à nous contacter à l&apos;adresse suivante : support@shopix.be
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. QUI EST LE RESPONSABLE DU TRAITEMENT DE VOS DONNÉES ?</h2>
          <p className="mb-4">
            ShopiX est le responsable du traitement de vos données personnelles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. QUELLES SONT LES DONNÉES QUE NOUS COLLECTONS ?</h2>
          <p className="mb-4">
            Vos données d&apos;identification (nom, prénom, titre de civilité, adresse e-mail, date de naissance et adresse de livraison),
            données bancaires (n° de carte bancaire, IBAN et BIC/SWIFT) et de facturation, l&apos;adresse IP qui vous est attribuée.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. DANS QUEL BUT COLLECTONS-NOUS VOS DONNEES ?</h2>
          <p className="mb-4">
            Nous collectons vos données principalement pour l&apos;envoi de notre newsletter, pouvoir traiter votre commande, améliorer notre service et, plus généralement, pour pouvoir communiquer facilement l&apos;un avec l&apos;autre. Enfin, vos données nous permettent également d&apos;améliorer et faciliter votre navigation sur notre site. Vos données nous permettent également d&apos;améliorer et de faciliter votre navigation sur notre site.
          </p>
        </section>

         <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. DE QUELLES FAÇONS COLLECTONS-NOUS VOS DONNÉES ?</h2>
          <p className="mb-4">
            La plupart de vos données nous sont communiquées par votre intervention active. C&apos;est le cas lorsque vous nous transmettez vos données d&apos;identification pour passer une commande. D&apos;autres données, telles que la date et l&apos;heure de votre accès à notre site, les pages que vous avez consultées ou vos données de localisation, sont collectées automatiquement, par le biais des serveurs consultés et des « cookies » placés sur notre site. 
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. VOS DONNÉES SONT-ELLES PROTÉGÉES ?</h2>
          <p className="mb-4">
            Nous mettons un point d&apos;honneur à respecter la vie privée de nos utilisateurs. Nous appliquons une politique de confidentialité stricte et prenons toutes les mesures adéquates afin que nos serveurs empêchent dans toute la mesure du possible toute fuite, destruction, perte, divulgation, usage, accès ou modification non autorisée de vos données.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Conditions;