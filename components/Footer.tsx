// Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link href="/">
          <Image src="/logo/logo_footer.png" alt="Logo" width={50} height={50} className="mb-4" />
          </Link>
          <p>ShopiX - Optimisez votre activité.</p>
        </div>
        <div>
          <h3 className="font-bold mb-3">Conception</h3>
          <ul>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">Website Design</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">Graphic Design</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">Conception Web UX</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">Responsive</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Développement</h3>
          <ul>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">Développement web sur mesure</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">E-commerce Store</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">Test de logiciel</span>
              </Link>
            </li>
             <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">Refonte web sur mesure</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Accés Rapide</h3>
          <ul>
            <li>
              <Link href="/conditions">
                <span className="cursor-pointer hover:underline">Conditions générales</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:underline">Politique de confidentialité</span>
              </Link>
            </li>
            <li>
              <Link href="/book">
                <span className="cursor-pointer hover:underline">Réserver un appel</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="cursor-pointer hover:underline">Nous contacter</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-gray-700 mt-8">
        <p>&copy; {new Date().getFullYear()} ShopiX All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;