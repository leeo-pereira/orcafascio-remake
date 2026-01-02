# OrçaFascio — Landing Page  
### Estudo de Front-end com foco em UX e Produto

Este projeto é um **estudo de Front-end** baseado em um cenário real de SaaS B2B. O objetivo foi **reorganizar a homepage de uma plataforma de orçamentos**, priorizando clareza da proposta de valor, hierarquia visual e boa experiência do usuário, aplicando conceitos de HTML, CSS e JavaScript.

- 🔗 [Site de referência](https://www.orcafascio.com/)  
- 🔗 [Versão desenvolvida](https://leeo-pereira.github.io/orcafascio-remake/)

---

## 🎯 Problema & Objetivos

### Problemas identificados
- Excesso de informações no primeiro scroll  
- Proposta de valor pouco clara para novos usuários  
- Hierarquia visual que dificultava a leitura rápida  
- CTAs pouco destacados  

### Objetivos do projeto
- Tornar a proposta de valor mais clara logo no topo da página  
- Melhorar a escaneabilidade do conteúdo  
- Organizar as seções de acordo com prioridade de negócio  
- Garantir boa experiência em diferentes tamanhos de tela  

---

## 🚀 Tecnologias Utilizadas

- **HTML5 semântico**, com foco em acessibilidade e SEO  
- **CSS3**, utilizando:
  - Nesting nativo para melhor organização do código  
  - **CSS Grid e Flexbox** para layouts responsivos  
  - **CSS Masking** para efeitos visuais sutis  
- **JavaScript**, para manipulação do DOM e renderização dinâmica de conteúdo  
- **Font Awesome**, para iconografia  

---

## 🧩 Decisões de UX e Produto

- **Hero section simplificada**, com foco em uma mensagem principal e CTAs claros  
- **Substituição de formulários longos** por CTAs diretos (boxed CTA), reduzindo fricção  
- **Agrupamento visual de informações**, facilitando a leitura e compreensão dos benefícios  
- Organização das seções pensando na jornada do usuário:  
  *entendimento → prova social → ação*  

---

## ⚙️ Decisões Técnicas

### Conteúdo dinâmico com JavaScript
As seções de **Soluções**, **Plugins** e **Benefícios** são geradas dinamicamente a partir de arrays e objetos em JavaScript.

Isso permitiu:
- Código mais organizado e reutilizável  
- Facilidade para adicionar ou remover itens  
- Uso de métodos como `.map()` e `.filter()` para renderização automática  

---

### Responsividade
Uso de recursos modernos do CSS Grid, como:

```css
repeat(auto-fit, minmax(300px, 1fr))
