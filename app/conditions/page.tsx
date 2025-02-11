
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
      <div className="container mx-auto px-4 py-12 text-white max-w-4xl h-[calc(100vh-64px)] overflow-y-auto">
        <h1 className="text-4xl font-bold mb-8">Termes et conditions</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            En accédant et en utilisant ce site Web, vous acceptez d&apos;être lié par les termes et dispositions de cet accord.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Utiliser la licence</h2>
          <p className="mb-4">
            L&apos;autorisation est accordée de télécharger temporairement une copie du matériel (informations ou logiciels) sur ce site Web à des fins de visualisation transitoire.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Clause de non-responsabilité</h2>
          <p className="mb-4">
            Les éléments de ce site Web sont fournis &quot; tels quels &quot; ; base. Nous n&apos;offrons aucune garantie, expresse ou implicite, et déclinons et annulons par la présente toutes les autres garanties, y compris, sans limitation, les garanties ou conditions implicites de qualité marchande, d&apos;adéquation à un usage particulier ou de non-violation de la propriété intellectuelle ou autre violation des droits.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p className="mb-4">
            En aucun cas nous ou nos fournisseurs ne serons responsables de tout dommage (y compris, sans limitation, les dommages liés à la perte de données ou de profit, ou à l&apos;interruption des activités) découlant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser les éléments de ce site Web.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Conditions;