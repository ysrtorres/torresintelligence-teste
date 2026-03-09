import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, FileText } from 'lucide-react';
import { createPageUrl } from '../utils';

export default function TermsOfService() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <FileText className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Termos de Serviço
            </h1>
            <p className="text-gray-500">Última atualização: 20 de fevereiro de 2026</p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Descrição do Serviço</h2>
              <p className="text-gray-400 leading-relaxed">
                A Torres Intelligence fornece software que permite às empresas automatizar comunicações com clientes usando inteligência artificial e plataformas de mensagens como WhatsApp.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Uso do Serviço</h2>
              <p className="text-gray-400 leading-relaxed">
                Os clientes devem cumprir as leis aplicáveis e as políticas do WhatsApp Business da Meta.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Responsabilidades do Cliente</h2>
              <ul className="space-y-2 text-gray-400">
                <li>Fornecer informações comerciais precisas</li>
                <li>Obter consentimento do cliente antes de enviar mensagens</li>
                <li>Seguir as leis de privacidade aplicáveis</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Processamento de Dados</h2>
              <p className="text-gray-400 leading-relaxed">
                Os dados são processados apenas para fornecer os serviços contratados.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Disponibilidade do Serviço</h2>
              <p className="text-gray-400 leading-relaxed">
                Buscamos alta disponibilidade, mas não garantimos operação ininterrupta.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Limitação de Responsabilidade</h2>
              <p className="text-gray-400 leading-relaxed">
                O serviço é fornecido "como está" sem garantias.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Rescisão</h2>
              <p className="text-gray-400 leading-relaxed">
                O acesso pode ser suspenso se as políticas ou leis forem violadas.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Contato</h2>
              <a 
                href="mailto:ysrtores@gmail.com" 
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                ysrtores@gmail.com
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
                href="mailto:ysrtores@gmail.com" 
                className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
              >
                ysrtores@gmail.com
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}