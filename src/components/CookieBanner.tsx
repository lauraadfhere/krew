"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "krew-cookie-consent";

const categories = [
  { label: "Nécessaires", on: true, locked: true },
  { label: "Fonctionnalité", on: false },
  { label: "Expérience", on: false },
  { label: "Mesure", on: false },
  { label: "Marketing", on: false },
];

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const save = (choice: "all" | "refused") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // storage unavailable: still hide the banner for this visit
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Gestion des cookies"
      className="fixed inset-x-0 bottom-0 top-auto z-[100] flex justify-center p-3 sm:inset-0 sm:items-center sm:bg-black/40 sm:p-6"
    >
      <div className="max-h-[92vh] w-full max-w-[760px] overflow-y-auto bg-white px-6 py-7 text-[13.5px] leading-[1.55] text-black shadow-[0_10px_40px_rgba(0,0,0,0.25)] sm:px-10 sm:py-9">
        <div className="mb-5 text-[28px] font-bold leading-none tracking-tight text-[#CC0000]">KREW</div>

        <p>
          Nous (KREW) ainsi que des tiers sélectionnés utilisons des cookies ou des technologies
          similaires pour des finalités <strong>fonctionnalité, expérience, mesure et «marketing (publicités
          personnalisées)»</strong> comme décrit dans la{" "}
          <a href="#" className="underline">politique relative aux cookies</a>.
        </p>
        <p className="mt-3">
          En ce qui concerne la publicité, des <a href="#" className="underline">tiers</a> sélectionnés et nous-mêmes
          pouvons utiliser <em>des données de géolocalisation précises</em>, et l’identification par analyse d’un
          terminal afin de <em>stocker et/ou accéder à des informations stockées sur un terminal</em> et de traiter
          des données personnelles comme vos données d’utilisation pour les{" "}
          <a href="#" className="underline">finalités publicitaires</a> suivantes : publicités et contenu
          personnalisés, mesure de performance des publicités et du contenu, études d’audience et développement de
          services.
        </p>
        <p className="mt-3">
          Vous pouvez librement donner, refuser ou retirer votre consentement à tout moment en accédant au panneau de
          préférences. Vos choix s’appliquent uniquement à ce domaine. Un refus de consentement peut entraîner
          l’indisponibilité des fonctionnalités connexes.
        </p>
        <p className="mt-3">
          Cliquez sur le bouton « Tout accepter » pour consentir. Cliquez sur le bouton « Refuser tout » pour continuer
          sans accepter.
        </p>

        <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3" aria-label="Catégories de cookies">
          {categories.map((c) => (
            <li key={c.label} className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className={`relative inline-block h-[22px] w-[40px] rounded-full ${
                  c.on ? "bg-[#9fe3cf]" : "bg-[#d9d9d9]"
                }`}
              >
                <span
                  className={`absolute top-[3px] h-4 w-4 rounded-full bg-white shadow ${
                    c.on ? "left-[21px]" : "left-[3px]"
                  }`}
                />
              </span>
              <span>{c.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <button type="button" className="px-4 py-2 font-bold text-black hover:underline">
            Préférences
          </button>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => save("refused")}
              className="px-5 py-2.5 font-bold text-black hover:underline"
            >
              Refuser tout
            </button>
            <button
              type="button"
              onClick={() => save("all")}
              className="rounded-full bg-black px-7 py-2.5 font-bold text-white transition-colors hover:bg-[#CC0000]"
            >
              Tout accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
