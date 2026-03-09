import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Zap, UserCheck, Calendar, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Lead Chega',
    description: 'Cliente entra em contato pelo WhatsApp',
    color: 'blue'
  },
  {
    icon: Zap,
    number: '02',
    title: 'IA Responde',
    description: 'Resposta automática em menos de 3 segundos',
    color: 'purple'
  },
  {
    icon: UserCheck,
    number: '03',
    title: 'Qualificação',
    description: 'IA qualifica o cliente automaticamente',
    color: 'blue'
  },
  {
    icon: Calendar,
    number: '04',
    title: 'Agendamento',
    description: 'Agenda reunião ou encaminha para vendedor',
    color: 'purple'
  },
  {
    icon: BarChart3,
    number: '05',
    title: 'Relatórios',
    description: 'Gera métricas e insights de performance',
    color: 'blue'
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-400">Como Funciona</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Simples, Rápido e{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Eficiente
            </span>
          </h2>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50" />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${
                    step.color === 'blue' 
                      ? 'from-blue-500/20 to-blue-600/20 border-blue-500/30' 
                      : 'from-purple-500/20 to-purple-600/20 border-purple-500/30'
                  } border flex items-center justify-center mb-6`}>
                    <step.icon className={`w-8 h-8 ${step.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`} />
                  </div>

                  {/* Number */}
                  <span className={`text-sm font-mono ${step.color === 'blue' ? 'text-blue-400' : 'text-purple-400'} mb-2`}>
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 text-center">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute top-10 -right-2 z-20">
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                  step.color === 'blue' 
                    ? 'from-blue-500/20 to-blue-600/20 border-blue-500/30' 
                    : 'from-purple-500/20 to-purple-600/20 border-purple-500/30'
                } border flex items-center justify-center`}>
                  <step.icon className={`w-6 h-6 ${step.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`} />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-full bg-gradient-to-b from-white/20 to-transparent mt-2" />
                )}
              </div>
              <div className="flex-1 pb-6">
                <span className={`text-xs font-mono ${step.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`}>
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}