# OrçaFascio - Landing Page (Estudo de Caso)

Esta é uma landing page desenvolvida como projeto de estudo, focada em performance, arquitetura de código moderna e responsividade. O objetivo foi reconstruir a interface da plataforma **OrçaFascio**, aplicando conceitos de Front-end e lógica de programação.

- [Site atual](https://www.orcafascio.com/)
- [Site atualizado](https://leeo-pereira.github.io/orcafascio-remake/)


## 🚀 Tecnologias Utilizadas

* **HTML5** Semântico para melhor acessibilidade e SEO.
* **CSS3** utilizando:
    * **Nesting** (aninhamento nativo) para organização de código.
    * **CSS Grid & Flexbox** para layouts complexos e fluidos.
    * **CSS Masking** para efeitos visuais refinados.
* **JavaScript** para manipulação do DOM e renderização dinâmica.
* **Font Awesome** para iconografia profissional.


## 💡 Diferenciais Técnicos

### 1. Arquitetura de Dados (JS Dinâmico)
Em vez de um HTML estático e extenso, o conteúdo das seções **Soluções**, **Plugins** e **Benefícios** é gerenciado via JavaScript através de objetos e arrays.
* **Escalabilidade:** Novos produtos podem ser adicionados apenas alterando o banco de dados local (Array no JS).
* **Lógica de Filtros:** Utilização de métodos como `.filter()` e `.map()` para organizar e distribuir o conteúdo automaticamente em seus respectivos containers.

### 2. Carrossel de Logos Infinito
Implementação de um carrossel de clientes com efeito de rolagem infinita (Infinite Scroll) utilizando `@keyframes` e manipulação via JS para duplicação automática dos elementos, garantindo um loop visual sem interrupções.

### 3. Responsividade Inteligente
Uso de funções modernas do CSS Grid como `repeat(auto-fit, minmax(300px, 1fr))`. Isso permite que os cards se reorganizem sozinhos conforme a largura da tela, reduzindo drasticamente a necessidade de múltiplas Media Queries.

### 4. UI/UX Refinado
* **CTA Estratégico:** Substituição de formulários densos por banners de conversão direta (Boxed CTA) com gradientes e sombras suaves.
* **Efeitos Visuais:** Uso de `mask-image` com gradientes lineares para criar um efeito de fade-out nas bordas do slider de logos.


## 📈 Contexto do Projeto (ADS Journey)

Este projeto marca uma etapa importante na minha transição de carreira do **Jornalismo para Análise e Desenvolvimento de Sistemas**. Ele demonstra a capacidade de transformar requisitos de negócio em código limpo, modular e de fácil manutenção.


**Desenvolvido por Leonardo Pereira**

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)]([https://www.linkedin.com/in/seu-perfil](https://www.linkedin.com/in/leeopereira/))
