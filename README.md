# Vitalure 🌿

Uma landing page moderna e responsiva para uma loja de suplementos naturais, focada em promover saúde e bem-estar através de produtos selecionados.

![Logo Vitalure](assets/imgs/Logo.png)

## 📋 Sumário
- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Dark Mode](#dark-mode)
- [Responsividade](#responsividade)
- [Performance e Acessibilidade](#performance-e-acessibilidade)
- [Contato](#contato)

## 🎯 Visão Geral

A Vitalure é uma plataforma que conecta pessoas interessadas em suplementação natural com produtos de qualidade. O site apresenta uma interface moderna e intuitiva, oferecendo informações detalhadas sobre suplementos e redirecionando os usuários para compras na Amazon.

## ⚡ Funcionalidades

- **Navegação Intuitiva**: Menu responsivo com seções claramente definidas
- **Catálogo de Produtos**: Exibição detalhada de suplementos com modais informativos
- **Links de Afiliado**: Integração com a Amazon para compras
- **Depoimentos**: Seção de feedback de clientes
- **Dark Mode**: Alternância entre temas claro e escuro
- **Contato WhatsApp**: Botão de contato direto
- **Redes Sociais**: Links para todas as plataformas sociais
- **Políticas e Termos**: Modais com informações legais

## 🛠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- AOS (Animate On Scroll)
- Responsividade Mobile-First
- SVG para ícones
- Local Storage para preferências do usuário

## 📁 Estrutura do Projeto

```
vitalure/
├── assets/
│   ├── icons/
│   ├── imgs/
│   └── products/
├── css/
│   └── styles.css
├── js/
│   ├── script.js
│   └── modal.js
└── index.html
```

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/vitalure.git
```

2. Navegue até o diretório do projeto:
```bash
cd vitalure
```

3. Abra o arquivo `index.html` em um servidor local ou diretamente no navegador.

## 🌓 Dark Mode

O projeto inclui um sistema de tema escuro que pode ser ativado através do toggle no cabeçalho. As preferências são salvas no localStorage do navegador.

### Implementação:
```javascript
const theme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', theme);
```

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- Desktop (> 1024px)
- Tablet (768px - 1024px)
- Mobile (< 768px)

Principais breakpoints:
```css
/* Tablet */
@media (max-width: 1000px) {
  /* ... */
}

/* Mobile */
@media (max-width: 800px) {
  /* ... */
}
```

## 🎯 Performance e Acessibilidade

- Imagens otimizadas
- Lazy loading implementado
- Animações suaves com AOS
- Cores com contraste adequado
- Navegação via teclado
- Tags semânticas HTML5

## 📧 Contato

- Email: vitalurestore@gmail.com
- Instagram: [@regina.almeida44](https://www.instagram.com/regina.almeida44)

## 📄 Licença

© 2024 Vitalure. Todos os direitos reservados.
