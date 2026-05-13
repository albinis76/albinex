"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const openLightbox = (img: string) => {
    setSelectedImg(img);
    if (!window.history.state?.lightbox) {
      window.history.pushState(
        { ...window.history.state, lightbox: true }, 
        '', 
        window.location.href
      );
    }
  };

  const closeLightbox = useCallback(() => {
    if (window.history.state?.lightbox) {
      window.history.back();
    } else {
      setSelectedImg(null);
    }
  }, []);

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (!e.state?.lightbox) {
        setSelectedImg(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Suporte à tecla Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (selectedImg) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImg, closeLightbox]);

  // Lista exata das 18 fotos (6x3 = 18)
  const images = [
    "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", 
    "9.jpeg", "10.jpeg", "11.jpeg", "13.jpeg", "14.jpeg", "16.jpeg", 
    "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg", "21.jpeg", "23.jpeg"
  ];

  return (
    <div className="relative">
      {/* Grade Rigorosa 6x3 em Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            onClick={() => openLightbox(img)}
            role="button"
            aria-label={`Ver imagem ampliada do projeto ${img}`}
            className="group relative aspect-square rounded-xl overflow-hidden bg-brand-surface cursor-pointer ring-1 ring-white/5 hover:ring-brand-accent/50 transition-all shadow-lg z-[105]"
          >
            <Image
              src={`/images/gallery/${img}`}
              alt={`Projeto RA Manutenção - ${img}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
            
            {/* Hover Overlay Sênior */}
            <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px] pointer-events-none">
               <ZoomIn className="text-white" size={24} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-brand-dark/98 backdrop-blur-2xl"
            onClick={closeLightbox}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Fechar visualização"
              className="absolute top-8 right-8 text-white/50 hover:text-white z-[210] p-3 bg-white/5 rounded-full border border-white/10"
              onClick={closeLightbox}
            >
              <X size={32} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full h-full max-w-6xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={`/images/gallery/${selectedImg}`}
                  alt="Visualização Fullscreen"
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-[10px] font-black uppercase tracking-[0.4em] pointer-events-none">
              ESC para fechar
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
