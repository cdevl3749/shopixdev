"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Navbar from "@/components/navbar";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({
    name: false,
    email: false,
    service: false,
    message: false,
    terms: false,
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    // Check form validation
    const formData = new FormData(form.current);
    const errors = {
      name: !formData.get('user_name'),
      email: !formData.get('user_email'),
      service: !formData.get('user_service'),
      message: !formData.get('message'),
      terms: !formData.get('terms'),
    };

    setFormErrors(errors);

    // If any errors exist, don't submit
    if (Object.values(errors).some(error => error)) {
      return;
    }

    emailjs
      .sendForm(
        "service_3nkc35c",
        "template_bev84qf",
        form.current,
        "o3sNWIRA-SH7s2nsx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowConfirmation(true);
          form.current?.reset();
          // Hide confirmation message after 5 seconds
          setTimeout(() => setShowConfirmation(false), 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
     <div className=" w-full   md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />
      <div className="md:flex items-start justify-center md:py-20 px-6">
        <div className="">
          <div className="text-5xl font-medium  w-full md:w-2/3  pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contactez notre équipe commerciale
          </div>
          <div
            className="
              
              py-4
              text-gray-300
                    "
          >
            Parlons de la façon dont ShopiX peut aider votre équipe à mieux travailler.
          </div>

          <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 ">
                Une agence flexible pour l&apos;ensemble de votre entreprise pour partager des connaissances, expédier des projets et collaborer.
              </div>
            </div>

            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 ">
                Fonctionnalités d&apos;entreprise pour gérer en toute sécurité l&apos;accès et la sécurité des utilisateurs.
              </div>
            </div>

            <div className="flex gap-4  ">
              <div className=" font-normal pb-4 ">
                Un support dédié pour travailler avec vous sur votre configuration et vous aider à élaborer le meilleur plan pour votre entreprise.
              </div>
            </div>
          </div>
        </div>

        <StyledContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <label>Votre nom*</label>
            <input type="text" name="user_name" />
            {formErrors.name && <span className="text-red-500 text-sm">Ce champ est obligatoire</span>}
            
            <label>Email*</label>
            <input type="email" name="user_email" />
            {formErrors.email && <span className="text-red-500 text-sm">Ce champ est obligatoire</span>}
            
            <label>Services qui vous intéressent*</label>
            <select name="user_service" className="w-full h-[35px] px-2 rounded-[5px] border border-[#dcdcdc] text-black focus:border-[2px] focus:border-[rgba(0,206,158,1)] outline-none">
              <option value="website_design">Website Design</option>
              <option value="graphic_design">Graphic Design</option>
              <option value="web_ux">Conception Web UX</option>
              <option value="dev_app">App Development</option>
              <option value="shopify">E-commerce Store</option>
              <option value="refonte">Refonte de site web</option>
              <option value="test">Test de logiciel</option>
              <option value="social_media">Social Media</option>
              <option value="other">Autre</option>
            </select>
            {formErrors.service && <span className="text-red-500 text-sm">Ce champ est obligatoire</span>}
            
            <label>Message*</label>
            <textarea name="message" />
            {formErrors.message && <span className="text-red-500 text-sm">Ce champ est obligatoire</span>}
            
            <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                name="terms"
                className="w-4 h-4"
              />
              <label className="text-sm">J&apos;accepte les conditions générales*</label>
            </div>
            {formErrors.terms && <span className="text-red-500 text-sm">Vous devez accepter les conditions</span>}
            
            <input type="submit" value="Send" />
            {showConfirmation && (
              <div className="text-green-500 mt-4">
                Votre message a été envoyé avec succès!
              </div>
            )}
          </form>
        </StyledContactForm>
      </div>
    </div>
  );
};

const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    color: white;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      color: black;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      color: black;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      border: none;
    }
  }
`;

export default Contact;
     