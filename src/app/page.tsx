"use client";

import Gallery from "@/components/Gallery";
import Sidebar from "@/components/Sidebar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import {
   ArrowUpRight,
   ChevronRight,
   Droplets,
   Mail,
   PhoneCall,
   Search,
   ShieldCheck,
   Star,
   Wrench,
   Zap
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const slideUp = {
   initial: { opacity: 0, y: 50 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true },
   transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

export default function Home() {
   const whatsappNumber = "5511993803195";

   // Estado do Formulário
   const [formData, setFormData] = useState({
      nome: "",
      whatsapp: "",
      mensagem: ""
   });

   // Função Profissional de Máscara de Telefone (DDD + Numero)
   const formatWhatsApp = (value: string) => {
      if (!value) return "";
      const numbers = value.replace(/\D/g, ""); // Remove tudo que não é número
      if (numbers.length <= 11) {
         return numbers
            .replace(/^(\d{2})(\d)/g, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .substring(0, 15); // Limite de caracteres para (XX) XXXXX-XXXX
      }
      return numbers.substring(0, 11);
   };

   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatWhatsApp(e.target.value);
      setFormData({ ...formData, whatsapp: formatted });
   };

   const handleSendForm = (e: React.FormEvent) => {
      e.preventDefault();

      // Sanitização final para a API (remove parênteses e traços)
      const cleanNumber = formData.whatsapp.replace(/\D/g, "");

      if (cleanNumber.length < 11) {
         alert("Por favor, insira o número completo com DDD.");
         return;
      }

      const texto = `*Solicitação de Orçamento - RA Manutenção*%0A%0A` +
         `*Nome:* ${formData.nome}%0A` +
         `*WhatsApp:* ${formData.whatsapp}%0A` +
         `*Problema:* ${formData.mensagem}`;

      window.open(`https://wa.me/${whatsappNumber}?text=${texto}`, "_blank");
   };

   return (
      <div className="flex min-h-[100dvh] md:min-h-screen bg-brand-dark overflow-x-hidden font-sans max-w-[100vw]">
         <div className="noise-bg"></div>
         <Sidebar />

         <main className="main-safe w-full max-w-[100vw] md:max-w-none md:w-[calc(100%-280px)] md:ml-[280px] relative z-10 overflow-x-hidden">
            {/* 1. HERO */}
            <section id="home" className="hero-section px-6 md:pl-0 md:pr-6 md:py-6 min-h-[100dvh] md:h-[100dvh] md:overflow-hidden flex items-center md:items-stretch pt-28 md:pt-6">
               <div className="grid lg:grid-cols-12 lg:grid-rows-[1fr_auto] gap-4 md:gap-6 w-full h-full">
                  <div className="lg:col-span-8 lg:row-span-1 bg-brand-surface border border-brand-border rounded-[3rem] p-8 md:p-10 xl:p-16 flex flex-col justify-center relative overflow-hidden group">
                     <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="flex items-center justify-center gap-4 text-brand-accent font-black uppercase tracking-[0.25em] text-sm md:text-base mb-6">
                           <div className="w-12 h-[2px] bg-brand-accent hidden md:block"></div> RA Manutenção de Sacadas <div className="w-12 h-[2px] bg-brand-accent hidden md:block"></div>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6 md:mb-8">
                           RA Manutenção de Sacadas <br />
                           <span className="text-brand-accent">Conserto e Vedação</span> em SP
                        </h1>
                        <p className="text-base md:text-xl text-zinc-200 font-medium mb-8 md:mb-10 max-w-3xl leading-relaxed">
                           Manutenção técnica especializada com foco em prevenção, vedações e integridade estrutural. Atendimento certificado para condomínios.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full md:w-auto">
                           <a href="#contato" aria-label="Solicitar orçamento para manutenção de sacadas" className="btn-primary group w-full sm:w-auto text-sm md:text-base py-4 md:py-5">
                              Solicitar Orçamento <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                           </a>
                           <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="Chamar RA Manutenção no WhatsApp" className="btn-outline group hover:border-brand-accent/50 border-white/10 w-full sm:w-auto text-sm md:text-base py-4 md:py-5">
                              Falar no WhatsApp <PhoneCall size={20} className="group-hover:scale-110 group-hover:rotate-3 transition-transform" />
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="lg:col-span-4 lg:row-span-1 relative rounded-[3rem] p-8 md:p-10 flex flex-col justify-between text-white shadow-2xl overflow-hidden group min-h-[300px] md:min-h-0">
                     <Image src="/images/hero-bg.png" alt="Manutenção de Sacadas e Vedação contra Chuva em SP - RA Manutenção" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw" className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 z-0" priority />
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/95 via-brand-accent/60 to-black/20 z-0 mix-blend-multiply"></div>
                     <div className="absolute inset-0 bg-brand-dark/20 z-0"></div>
                     <div className="relative z-10 mt-auto pt-8 border-t border-white/20">
                        <p className="text-lg font-medium text-white/95 italic drop-shadow-md">"Referência em manutenção técnica de alto padrão em toda a grande SP"</p>
                     </div>
                  </div>

                  <div className="lg:col-span-4 lg:row-start-2 bg-zinc-900 border border-zinc-800 rounded-[2rem] p-4 md:p-6 flex items-center gap-3 md:gap-4">
                     <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0 text-white">
                        <Zap size={20} />
                     </div>
                     <div>
                        <h2 className="text-white font-black text-base md:text-lg">Orçamento em até 24h</h2>
                        <p className="text-zinc-300 text-xs">Avaliação rápida, sem burocracia.</p>
                     </div>
                  </div>

                  <div className="lg:col-span-4 lg:row-start-2 bg-zinc-900 border border-zinc-800 rounded-[2rem] p-4 md:p-6 flex items-center gap-3 md:gap-4">
                     <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0 text-white">
                        <ShieldCheck size={20} />
                     </div>
                     <div>
                        <h2 className="text-white font-black text-base md:text-lg">Garantia Técnica</h2>
                        <p className="text-zinc-300 text-xs">Serviço segurado em contrato.</p>
                     </div>
                  </div>

                  <div className="lg:col-span-4 lg:row-start-2 bg-brand-surface border border-zinc-800 rounded-[2rem] p-4 md:p-6 flex items-center justify-center gap-4">
                     <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                           <div key={i} className="w-9 h-9 rounded-full border-2 border-brand-dark overflow-hidden bg-zinc-800">
                              <Image src={`https://i.pravatar.cc/150?u=${i}`} alt="Cliente satisfeito RA Manutenção" width={36} height={36} />
                           </div>
                        ))}
                     </div>
                     <div className="text-sm text-center">
                        <div className="text-white font-black">Satisfação Garantida</div>
                        <div className="text-zinc-300 text-xs">100% de Aprovação</div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 2. SERVICES */}
            <section id="servicos" className="px-6 md:pl-0 md:pr-6 py-16 md:py-24 w-full">
               <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                  <motion.div {...slideUp}>
                     <span className="text-brand-accent font-black uppercase tracking-widest text-xs mb-4 block">Especialidades</span>
                     <h2 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter">
                        Manutenção de Sacadas e <br /> <span className="text-zinc-700">Vedação Profissional</span>
                     </h2>
                  </motion.div>
                  <motion.p {...slideUp} className="max-w-md text-zinc-300 font-medium text-xl md:text-2xl leading-relaxed border-l-4 border-brand-accent pl-6 md:pl-8">
                     Soluções técnicas precisas para os problemas mais comuns em sacadas e fachadas.
                  </motion.p>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  {[
                     { icon: Wrench, title: "Manutenção Técnica", desc: "Ajuste de roldanas, nivelamento e lubrificação técnica para funcionamento suave." },
                     { icon: Droplets, title: "Impermeabilização", desc: "Proteção avançada contra infiltrações e corrosão estrutural das ferragens." },
                     { icon: Search, title: "Laudo e Inspeção", desc: "Mapeamento completo de patologias e emissão de ART/Laudos técnicos." }
                  ].map((service, idx) => (
                     <motion.div
                        key={idx}
                        {...slideUp}
                        transition={{ delay: idx * 0.1 }}
                        className="bento-card group hover:bg-brand-accent/5"
                     >
                        <div className="w-16 h-16 bg-zinc-800 rounded-[1.5rem] flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500">
                           <service.icon size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4">{service.title}</h3>
                        <p className="text-zinc-300 font-medium leading-relaxed mb-8">{service.desc}</p>
                        <a href={`https://wa.me/5511993803195`} target="_blank" rel="noopener noreferrer" aria-label="Consultar serviço de manutenção" className="flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                           Consultar <ArrowUpRight size={18} />
                        </a>
                     </motion.div>
                  ))}
               </div>
            </section>

            {/* 3. WHY CHOOSE US */}
            <section id="porque" className="px-6 md:pl-0 md:pr-6 py-16 md:py-24 w-full">
               <div className="bg-brand-surface rounded-[3rem] md:rounded-[4rem] border border-brand-border p-8 md:p-16 shadow-2xl w-full">
                  <div className="grid lg:grid-cols-2 gap-20 items-center">
                     <motion.div {...slideUp}>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-none">
                           Por que a RA é a <br /> <span className="text-brand-accent">referência em SP?</span>
                        </h2>
                        <div className="space-y-8">
                           {[
                              { title: "Mão de Obra Própria", desc: "Não terceirizamos. Nossa equipe é treinada rigorosamente." },
                              { title: "Segurança Certificada", desc: "Treinamento NR-35 (trabalho em altura) completo." },
                              { title: "Materiais Premium", desc: "Componentes de aço inox e polímeros de alta resistência." },
                              { title: "Há mais de 10 anos no mercado", desc: "Uma vida de compromisso com você" }
                           ].map((item, idx) => (
                              <div key={idx} className="flex gap-6 group">
                                 <div className="w-10 h-10 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center font-black shrink-0">
                                    {idx + 1}
                                 </div>
                                 <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-zinc-300 font-medium">{item.desc}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </motion.div>
                     <motion.div {...slideUp} className="relative mt-12 md:mt-0">
                        <div className="aspect-square rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl group relative">
                           <Image src="/images/gallery/5.jpeg" alt="Técnico especializado em Conserto de Sacadas de Vidro - RA Manutenção" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-10 bg-brand-accent p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-white shadow-2xl w-[90%] sm:max-w-[280px] md:max-w-xs md:w-auto">
                           <div className="flex gap-1 text-white mb-4">
                              <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                           </div>
                           <p className="font-bold text-base md:text-lg mb-2 text-white text-center italic">Excelência RA</p>
                           <p className="text-white/80 md:text-white/60 text-xs md:text-sm text-center">Garantia técnica superior em manutenção predial.</p>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </section>

            {/* 4. GALLERY */}
            <section id="galeria" className="px-6 md:pl-0 md:pr-6 py-16 md:py-24 w-full">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6">Manutenção de Sacadas Realizadas</h2>
                  <p className="text-xl md:text-2xl text-zinc-300 font-medium max-w-2xl mx-auto leading-relaxed">
                     Veja na prática o padrão de qualidade e a excelência técnica dos nossos serviços.
                  </p>
               </div>
               <Gallery />
            </section>

            {/* 5. CONTACT */}
            <section id="contato" className="px-6 md:pl-0 md:pr-6 pt-16 pb-32 md:py-24 w-full">
               <div className="bg-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-24 text-black flex flex-col md:flex-row gap-12 md:gap-20 items-center shadow-2xl w-full">
                  <div className="md:w-1/2">
                     <h2 className="text-3xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-8 md:mb-10">
                        Orçamento de Manutenção <br /> <span className="text-brand-accent">de Sacadas em 24h</span>
                     </h2>
                     <p className="text-xl md:text-2xl text-zinc-600 font-medium mb-10 md:mb-12 border-l-4 border-brand-accent pl-6 md:pl-8">
                        Preencha os dados e receba uma análise técnica preliminar em até 24 horas.
                     </p>
                     <div className="space-y-6">
                        <a href={`https://wa.me/5511993803195`} target="_blank" rel="noopener noreferrer" aria-label="Ligar para RA Manutenção" className="flex items-center gap-4 text-lg md:text-2xl font-medium hover:text-brand-accent transition-colors">
                           <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-zinc-100 rounded-2xl flex items-center justify-center"><PhoneCall size={20} className="md:w-6 md:h-6" /></div>
                           (11) 99380-3195
                        </a>
                        <a href="mailto:contato@ramanutencaodesacadas.com.br" aria-label="Enviar e-mail para RA Manutenção" className="flex items-center gap-3 md:gap-4 text-sm sm:text-lg md:text-xl font-medium hover:text-brand-accent transition-colors">
                           <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-zinc-100 rounded-2xl flex items-center justify-center"><Mail size={20} className="md:w-6 md:h-6" /></div>
                           <span className="break-all">contato@ramanutencaodesacadas.com.br</span>
                        </a>
                     </div>
                  </div>

                  <div className="w-full md:w-1/2 bg-zinc-100 p-6 md:p-16 rounded-[3rem] md:rounded-[3.5rem]">
                     <form onSubmit={handleSendForm} className="space-y-6">
                        <div className="space-y-2">
                           <label htmlFor="nome" className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Nome Completo</label>
                           <input
                              id="nome"
                              type="text"
                              placeholder="Seu nome"
                              required
                              value={formData.nome}
                              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                              className="w-full bg-white border-none px-6 py-4 md:py-5 rounded-2xl focus:ring-4 ring-brand-accent/10 outline-none font-bold placeholder:text-zinc-200"
                           />
                        </div>
                        <div className="space-y-2">
                           <label htmlFor="whatsapp" className="text-[10px] font-black uppercase tracking-widest text-zinc-600">WhatsApp (DDD + Número)</label>
                           <input
                              id="whatsapp"
                              type="tel"
                              placeholder="(11) 99999-9999"
                              required
                              value={formData.whatsapp}
                              onChange={handlePhoneChange}
                              className="w-full bg-white border-none px-6 py-4 md:py-5 rounded-2xl focus:ring-4 ring-brand-accent/10 outline-none font-bold placeholder:text-zinc-200"
                           />
                        </div>
                        <div className="space-y-2">
                           <label htmlFor="mensagem" className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Descrição do Problema</label>
                           <textarea
                              id="mensagem"
                              placeholder="Descreva o que precisa..."
                              required
                              value={formData.mensagem}
                              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                              className="w-full bg-white border-none px-6 py-4 md:py-5 rounded-2xl focus:ring-4 ring-brand-accent/10 outline-none font-bold h-32 md:h-40 resize-none placeholder:text-zinc-200"
                           ></textarea>
                        </div>
                        <button type="submit" aria-label="Enviar solicitação de orçamento" className="w-full bg-brand-dark text-white font-black py-6 rounded-2xl shadow-2xl hover:bg-black transition-all duration-300 hover:scale-[1.02] active:scale-95 text-lg uppercase tracking-widest">
                           Enviar Solicitação
                        </button>
                     </form>
                  </div>
               </div>
            </section>

            <footer className="py-20 text-center border-t border-brand-border">
               <div className="text-zinc-700 font-black text-xs uppercase tracking-[0.5em] mb-4 text-brand-accent">RA Manutenção de Sacadas</div>
               <p className="text-zinc-300 font-medium">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
               <p className="text-zinc-300 font-medium">
                  Desenvolvido por <a href="https://www.albinex.com.br/pt" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline decoration-brand-accent/30 hover:decoration-brand-accent transition-all">ALBINEX</a>
               </p>
            </footer>
         </main>

         <WhatsAppButton />
      </div>
   );
}
