import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, MessageCircle, Instagram, FileText, Shield, Trash2 } from 'lucide-react';
import { createPageUrl } from '../../utils';

const WHATSAPP_URL = "https://wa.me/55619917951513";
const INSTAGRAM_URL = "https://www.instagram.com/torresintelligence";

export default function Footer() {
  return (
    <footer className="bg-[#060608] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Torres Intelligence</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Transformamos o atendimento de empresas com Inteligência Artificial. 
              Automatize seu WhatsApp e venda mais, 24 horas por dia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <div className="space-y-3">
              <Link 
                to={createPageUrl('terms-of-service')}
                className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Termos de Uso</span>
              </Link>
              <Link 
                to={createPageUrl('privacy-policy')}
                className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>Política de Privacidade</span>
              </Link>
              <Link 
                to={createPageUrl('data-deletion')}
                className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Exclusão de Dados</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Torres Intelligence. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}