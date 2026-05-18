'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/5 rounded-full blur-[120px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo area */}
          <div className="mb-8 inline-flex items-center justify-center mb-10">
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-brand-accent/30 bg-brand-surface">
              <Image
                src="/images/brand/logo.jpeg"
                alt="Logo RA Manutenção"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-medium text-text-main mb-6 tracking-tight leading-tight">
            Página em <br />
            <span className="text-brand-accent italic">Manutenção</span>
          </h1>

          <p className="text-lg md:text-xl text-text-muted mb-6 font-sans max-w-md mx-auto leading-relaxed">
            Estamos aprimorando nossa plataforma para melhor atendê-lo. <br />
            <span className="font-semibold text-text-main/80">Voltaremos em breve!</span>
          </p>

          <div className="mt-16 pt-8 border-t border-white/5 opacity-50">
            <p className="text-sm text-text-muted font-sans tracking-wide">
              &copy; {new Date().getFullYear()} RA Manutenção de Sacadas. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Noise background for texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
