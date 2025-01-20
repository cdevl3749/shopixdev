"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/image2.png",
    quote: "ShopiX nous a montré comment démarrer, quoi faire et comment le faire.",
    name: "Jason S.",
  },
  {
    image: "/images/shop-2.jpeg",
    quote:
      "Nous n'avions aucune idée de comment commencer, mais ShopiX nous a montré la voie. Et nous avons pu créer quelque chose d'extraordinaire.",
    name: "John P.",
  },

  {
    image: "/images/s-2.webp",
    quote:
      "L'équipe de ShopiX est incroyable. Ils nous ont aidé à créer une boutique époustouflante dont nous sommes fiers.",
    name: "Miguel M.",
  },
];

const ShopifyStores = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          ShopiX Stores <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
          Nous créons de superbes boutiques ShopiX conçues pour convertir.
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopiX store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
