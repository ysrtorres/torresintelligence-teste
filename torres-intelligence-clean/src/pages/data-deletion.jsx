import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Trash2 } from 'lucide-react';
import { createPageUrl } from '../utils';

export default function DataDeletion() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-300">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar para o site</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <Trash2 className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-400">Direitos do Usuário</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Data Deletion Instructions
            </h1>
            <p className="text-gray-500">Última atualização: 20 de fevereiro de 2026</p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-10">
              <p className="text-gray-400 leading-relaxed">
                Torres Intelligence respects user privacy and provides a process for requesting data deletion.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Como Solicitar a Exclusão de Dados</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Se você deseja solicitar a exclusão de seus dados pessoais processados por meio de nossa plataforma, envie um e-mail com o assunto "Data Deletion Request" para:
              </p>
              <a 
                href="mailto:ysrtorres@gmail.com?subject=Data Deletion Request" 
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium"
              >
                <Mail className="w-5 h-5" />
                ysrtorres@gmail.com
              </a>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Informações Necessárias</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Por favor, inclua em sua solicitação:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>Seu nome</li>
                <li>Número de telefone usado nas conversas do WhatsApp</li>
                <li>Nome da empresa (se aplicável)</li>
                <li>Descrição da sua solicitação</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Processamento da Solicitação</h2>
              <p className="text-gray-400 leading-relaxed">
                Após recebermos a solicitação, verificaremos as informações e processaremos a exclusão dentro de um prazo razoável.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Alguns dados podem ser retidos se necessário para fins legais ou de conformidade.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Contato</h2>
              <a 
                href="mailto:ysrtorres@gmail.com" 
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                ysrtorres@gmail.com
              </a>
            </section>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-white font-semibold mb-1">Torres Intelligence</h3>
              <a 
                href="mailto:ysrtorres@gmail.com" 
                className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
              >
                ysrtorres@gmail.com
              </a>
            </div>
            <div className="flex gap-6 text-sm">
              <Link 
                to={createPageUrl('privacy-policy')}
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                Privacidade
              </Link>
              <Link 
                to={createPageUrl('terms-of-service')}
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                Termos de Uso
              </Link>
              <Link 
                to={createPageUrl('data-deletion')}
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                Exclusão de Dados
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}