import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Cpu, Brain, Zap } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5561991795153?text=";

const plans = [
  {
    name: 'T.I. Core',
    icon: Cpu,
    description: 'Respostas automáticas inteligentes',
    features: [
      'Respostas automáticas 24/7',
      'Mensagens personalizadas',
      'Integração WhatsApp Business',
      'Painel de controle básico'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    popular: false
  },
  {
    name: 'T.I. Pulse',
    icon: Zap,
    description: 'Qualificação + Agendamento automático',
    features: [
      'Tudo do T.I. Core',
      'Qualificação de leads',
      'Agendamento automático',
      'Follow-up inteligente',
      'Relatórios de conversão'
    ],
    gradient: 'from-purple-500 to-pink-500',
    popular: true
  },
  {
    name: 'T.I. Neural',
    icon: Brain,
    description: 'Operação comercial completa automatizada',
    features: [
      'Tudo do T.I. Pulse',
      'IA conversacional avançada',
      'Integrações personalizadas',
      'Dashboard completo',
      'Suporte prioritário',
      'Consultoria estratégica'
    ],
    gradient: 'from-amber-500 to-orange-500',
    popular: false
  }
];

export default function PlansSection() {
  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-400">Nossos Planos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Escolha o Plano Ideal para{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Seu Negócio
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Soluções escaláveis que crescem junto com sua empresa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border ${
                plan.popular ? 'border-purple-500/30' : 'border-white/10'
              } hover:border-white/20 transition-all duration-300`}>
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} bg-opacity-20 flex items-center justify-center mb-6`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent mb-2`}>
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a 
                  href={`${WHATSAPP_URL}Olá! Tenho interesse no plano ${plan.name}.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    className={`w-full py-6 rounded-xl bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white font-medium transition-all duration-300`}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Quero esse plano
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}