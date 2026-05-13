"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ImageIcon,
  LayoutGrid,
  Menu,
  Send,
  ShieldCheck,
  Wrench,
  X
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Início", href: "#home", icon: ShieldCheck },
  { label: "Sobre", href: "#servicos", icon: Wrench },
  { label: "Diferenciais", href: "#porque", icon: LayoutGrid },
  { label: "Serviços", href: "#galeria", icon: ImageIcon },
  { label: "Contato", href: "#contato", icon: Send }
];

export default function Sidebar() {
  const [active, setActive] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* MOBILE HEADER */}
      <header className="fixed top-0 left-0 w-full h-24 z-[110] md:hidden flex items-center justify-between px-6 bg-brand-dark/95 backdrop-blur-xl border-b border-white/5 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 shrink-0 rounded-[1rem] overflow-hidden shadow-lg border border-brand-accent/30 bg-brand-surface">
            <Image
              src="/images/brand/logo.jpeg"
              alt="Logo RA Manutenção"
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white font-black text-xs tracking-tighter leading-tight">
              RA MANUTENÇÃO
            </span>
            <span className="text-brand-accent text-[8px] tracking-[0.2em] font-black uppercase mt-0.5">
              DE SACADAS
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="bg-brand-accent w-12 h-12 shrink-0 rounded-[1rem] flex items-center justify-center text-black shadow-lg active:scale-95 transition-transform"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* SIDEBAR DESKTOP */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed left-0 top-0 h-screen w-[280px] z-[90] p-6 hidden md:flex flex-col"
      >
        <div className="bg-brand-surface/80 backdrop-blur-2xl border border-white/5 h-full w-full rounded-[2.5rem] flex flex-col p-8 shadow-glass relative">

          {/* LOGO */}
          <div className="mb-12 shrink-0">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-brand-accent/30">
                <Image
                  src="/images/brand/logo.jpeg"
                  alt="Logo RA Manutenção de Sacadas"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-white font-black text-xl tracking-tighter leading-tight">
                  RA MANUTENÇÃO
                </span>
                <span className="text-brand-accent text-xs tracking-[0.25em] font-black uppercase">
                  DE SACADAS
                </span>
              </div>
            </div>
          </div>

          {/* NAV (SCROLL AQUI) */}
          <nav className="flex-1 min-h-0 overflow-y-auto space-y-2 pr-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all relative group ${active === item.href
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-200"
                  }`}
              >
                {active === item.href && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/5 rounded-2xl border border-white/10"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6
                    }}
                  />
                )}

                <item.icon
                  size={20}
                  className={
                    active === item.href
                      ? "text-brand-accent"
                      : "group-hover:text-brand-accent/50"
                  }
                />

                <span className="font-bold text-sm uppercase tracking-wider relative z-10">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          {/* BADGE */}
          <div className="mt-4 mb-6 bg-brand-surface border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-inner shrink-0">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-accent/20 text-brand-accent mb-1">
              <ShieldCheck size={18} />
            </div>

            <div className="text-xs text-center">
              <div className="text-white font-black uppercase tracking-widest">
                +10 Anos
              </div>
              <div className="text-zinc-400 font-medium text-[10px] mt-1">
                Excelência Técnica
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto shrink-0">
            <a
              href="#contato"
              className="w-full bg-brand-accent hover:bg-brand-accent/90 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-xl shadow-brand-accent/20 active:scale-95 text-xs uppercase tracking-widest"
            >
              Orçamento <Send size={14} />
            </a>
          </div>
        </div>
      </motion.aside>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[80] bg-brand-dark/95 backdrop-blur-xl p-8 md:hidden"
          >
            <nav className="h-full flex flex-col justify-center space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActive(item.href);
                    setIsOpen(false);
                  }}
                  className="text-3xl font-black text-white flex items-center gap-6"
                >
                  <item.icon size={28} className="text-brand-accent" />
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}