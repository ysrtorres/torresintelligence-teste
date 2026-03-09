import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, MessageSquareOff, Brain, TrendingDown, AlertTriangle } from 'lucide-react';

const problems = [
  { icon: Clock, text: 'Leads demoram para ser respondidos' },
  { icon: Users, text: 'Equipe sobrecarregada' },
  { icon: MessageSquareOff, text: 'Falta de padrão no atendimento' },
  { icon: Brain, text: 'Oportunidades esquecidas' },
  { icon: TrendingDown, text: 'Baixa conversão por demora' }
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400">O Problema</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Você está perdendo vendas{' '}
            <span className="text-red-400">todos os dias.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-red-500/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                <problem.icon className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-gray-300 text-lg">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-red-500/20">
            <p className="text-xl md:text-2xl text-white font-medium">
              O cliente quer resposta <span className="text-red-400">agora</span>.{' '}
              <br className="hidden md:block" />
              Se você demora, ele compra do <span className="text-red-400">concorrente</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}