import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Shield, BarChart3, HeadphonesIcon, Rocket, Award } from 'lucide-react';

const differentials = [
  {
    icon: Settings,
    title: 'Desenvolvimento Personalizado',
    description: 'Cada agente é construído sob medida para as necessidades específicas do seu negócio'
  },
  {
    icon: Shield,
    title: 'WhatsApp Oficial',
    description: 'Integração com a API oficial do WhatsApp Business para máxima confiabilidade'
  },
  {
    icon: BarChart3,
    title: 'Relatórios de Performance',
    description: 'Dashboards completos com métricas de conversão, tempo de resposta e satisfação'
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte Contínuo',
    description: 'Equipe dedicada para ajustes, otimizações e dúvidas sempre que precisar'
  },
  {
    icon: Rocket,
    title: 'Implantação Estruturada',
    description: 'Processo organizado de setup, testes e go-live para garantir sucesso'
  },
  {
    icon: Award,
    title: 'Garantia de Resultados',
    description: 'Comprometimento com a melhoria contínua da sua taxa de conversão'
  }
];

export default function DifferentialsSection() {
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
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-400">Diferenciais</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que escolher a{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Torres Intelligence?
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-blue-500/20 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}