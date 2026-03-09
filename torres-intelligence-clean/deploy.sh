#!/bin/bash

# ============================================
# Script de deploy para o GitHub
# Torres Intelligence — Landing Page
# ============================================

echo ""
echo "🚀 Torres Intelligence — Deploy para GitHub"
echo "============================================"
echo ""

# Pede o nome de usuário do GitHub
read -p "👤 Seu usuário do GitHub: " GITHUB_USER

# Nome do repositório
REPO_NAME="torres-intelligence"

echo ""
echo "📦 Inicializando repositório Git..."
git init
git add .
git commit -m "🚀 Initial commit - Torres Intelligence LP"
git branch -M main

echo ""
echo "🔗 Conectando ao GitHub..."
git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git

echo ""
echo "📤 Enviando para o GitHub..."
git push -u origin main

echo ""
echo "✅ Pronto! Repositório disponível em:"
echo "   https://github.com/$GITHUB_USER/$REPO_NAME"
echo ""
echo "🌐 Para hospedar na Vercel:"
echo "   1. Acesse https://vercel.com/new"
echo "   2. Importe o repositório '$REPO_NAME'"
echo "   3. Clique em Deploy — sem configs adicionais!"
echo ""
