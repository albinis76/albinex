'use client';

import { motion } from 'framer-motion';
import { Construction, Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-6 relative overflow-hidden">
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
          {/* Icon/Logo area */}
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-brand-surface border border-brand-border shadow-glass mb-10 overflow-hidden relative group">
            <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Construction className="w-10 h-10 text-brand-accent relative z-10" />
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-medium text-text-main mb-6 tracking-tight leading-tight">
            Página em <br />
            <span className="text-brand-accent italic">Manutenção</span>
          </h1>

          <p className="text-lg md:text-xl text-text-muted mb-12 font-sans max-w-md mx-auto leading-relaxed">
            Estamos aprimorando nossa plataforma para melhor atendê-lo. <br />
            <span className="font-semibold text-text-main/80">Voltaremos em breve!</span>
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <motion.a
              href="tel:+551199380xxxx"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-surface border border-brand-border p-6 rounded-2xl flex items-center justify-between group transition-colors hover:border-brand-accent/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs text-text-muted uppercase tracking-widest font-bold">Telefone / WhatsApp</span>
                  <p className="text-text-main font-display font-medium">(11) 99380-3195</p>
                </div>
              </div>
              <ArrowUpRight className="text-text-muted group-hover:text-brand-accent transition-colors" size={18} />
            </motion.a>

            <motion.a
              href="mailto:contato@xxxxxx.com.br"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-surface border border-brand-border p-6 rounded-2xl flex items-center justify-between group transition-colors hover:border-brand-accent/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs text-text-muted uppercase tracking-widest font-bold">Email</span>
                  <p className="text-text-main font-display font-medium">contato@ramanutencao...</p>
                </div>
              </div>
              <ArrowUpRight className="text-text-muted group-hover:text-brand-accent transition-colors" size={18} />
            </motion.a>
          </div>

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
