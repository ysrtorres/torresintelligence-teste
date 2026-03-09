import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5561991795153?text=Olá! Quero falar com um especialista sobre automação com IA.";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400">Comece Agora</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Seu WhatsApp pode vender{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              enquanto você dorme.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Automatize hoje e pare de perder oportunidades. 
            Fale com nossos especialistas e descubra como transformar seu atendimento.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full md:w-auto">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 md:px-10 py-6 md:py-7 text-sm md:text-lg rounded-2xl shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105 group w-full md:w-auto"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 flex-shrink-0" />
                <span className="hidden md:inline">Falar com Especialista no WhatsApp</span>
                <span className="md:hidden">Falar com Especialista</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
            </a>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {[
              'Sem compromisso',
              'Resposta em minutos',
              'Consultoria gratuita'
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}