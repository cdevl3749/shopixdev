"use client";

// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Très soucieux et à l'écoute du client, il vous proposera un service à la hauteur de vos exigences.",
    name: "Stephen C.",
    title: "Mons",
  },
  {
    quote:
      "Très satisfait de leur prestations, personnel très compétent, et pour nous surtout bien à l'écoute de nos besoin, je recommande sans soucis.",
    name: "William S.",
    title: "Bruxelles",
  },
  {
    quote: "ShopiX offre un service complet que l'on ne retrouve jamais dans son secteur d'activité. Nous sommes heureux et plus que satisfait de les avoir comme partenaires :)",
    name: "Dylan D.",
    title: "Vervier",
  },
  {
    quote:
      "Contente du résultat de la création de notre site professionnel, très réactif lors de question ou modification à apporter à celui-ci.",
    name: "Gisèle R.",
    title: "Namur",
  },
  {
    quote:
      "Travail très professionnel, je suis satisfait du travail accompli.",
    name: "Herman M.",
    title: "Liège",
  },
];
