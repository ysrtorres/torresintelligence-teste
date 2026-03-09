import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Shield } from 'lucide-react';
import { createPageUrl } from '../utils';

export default function PrivacyPolicy() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Política de Privacidade
            </h1>
            <p className="text-gray-500">Última atualização: 20 de fevereiro de 2026</p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-10">
              <p className="text-gray-400 leading-relaxed">
                A Torres Intelligence fornece uma plataforma de comunicação baseada em inteligência artificial que ajuda empresas a automatizar interações com clientes por meio de plataformas de mensagens como WhatsApp.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Informações que Coletamos</h2>
              <ul className="space-y-2 text-gray-400">
                <li>Mensagens trocadas entre empresas e clientes</li>
                <li>Informações de contato compartilhadas durante conversas</li>
                <li>Dados de uso necessários para operar a plataforma</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Como Usamos as Informações</h2>
              <ul className="space-y-2 text-gray-400">
                <li>Fornecer serviços automatizados de mensagens</li>
                <li>Permitir suporte ao cliente e qualificação de leads</li>
                <li>Melhorar o desempenho e confiabilidade da plataforma</li>
              </ul>
              <p className="text-gray-400 mt-4 font-medium">
                Nós não vendemos dados pessoais.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Compartilhamento de Dados</h2>
              <p className="text-gray-400 leading-relaxed">
                Os dados podem ser processados através de provedores de infraestrutura confiáveis, incluindo Meta Platforms (WhatsApp), provedores de hospedagem em nuvem e serviços de automação necessários para operar a plataforma.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Retenção de Dados</h2>
              <p className="text-gray-400 leading-relaxed">
                Os dados são retidos apenas pelo tempo necessário para fornecer os serviços ou cumprir obrigações legais.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Direitos dos Usuários</h2>
              <p className="text-gray-400 leading-relaxed">
                Os usuários podem solicitar acesso ou exclusão de dados entrando em contato com:
              </p>
              <a 
                href="mailto:ysrtores@gmail.com" 
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-2"
              >
                <Mail className="w-4 h-4" />
                ysrtores@gmail.com
              </a>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Segurança de Dados</h2>
              <p className="text-gray-400 leading-relaxed">
                Aplicamos medidas técnicas e organizacionais razoáveis de segurança.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Alterações</h2>
              <p className="text-gray-400 leading-relaxed">
                Esta política pode ser atualizada periodicamente.
              </p>
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