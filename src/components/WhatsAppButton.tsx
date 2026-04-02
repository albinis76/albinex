"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "5511993803195";
  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para manutenção de sacada com a RA Manutenção.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp size={32} className="group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
      </span>
    </a>
  );
}
