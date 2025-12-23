// ---- CARROSSEL ----

const clientsLogos = [
  "1-Senado.avif",
  "2-ANATEL.avif",
  "3-TEGRA.avif",
  "4-USP.avif",
  "5-UFRJ.avif",
  "6-TSE-CE.avif",
  "7-DETRAN.avif",
  "8-UNESP.avif",
  "9-CR-FONTES.avif",
  "10-MSM.avif",
];

function renderLogos() {
  const track = document.querySelector(".logos-track");
  if (!track) return;

  const logosHTML = clientsLogos
    .map((logo) => `<img src="img/clients/${logo}" alt="Logotipo do cliente">`)
    .join("");

  track.innerHTML = logosHTML + logosHTML;
}

renderLogos();

// ---- SOLUÇÕES ----

const cardsContainer = document.querySelector(".cards");

const solutionsData = [
  {
    type: "modulo",
    img: "img/OFProdutos1_orcamento-c.svg",
    alt: "Orçamento de Obras",
    description:
      "Orçamentos SINAPI confiáveis com os padrões de cálculo do software mais inteligente da Engenharia Civil. E, agora, com Cadernos Técnicos.",
    link: "#",
  },
  {
    type: "modulo",
    img: "img/OFProdutos1_bases-c.svg",
    alt: "Bases de Composições",
    description:
      "Amplie sua presença em obras pelo Brasil com mais de 20 bases oficiais e 87 mil composições. E, agora, com Cadernos Técnicos.",
    link: "#",
  },
  {
    type: "modulo",
    img: "img/OFProdutos1_ofcde-c.svg",
    alt: "OF CDE",
    description:
      "A ferramenta da OrçaFascio revoluciona o compartilhamento e a gestão de projetos de obras na nuvem.",
    link: "#",
  },
  {
    type: "plugin",
    img: "img/OFProdutos1_orcabimrevit-c.svg",
    alt: "OrçaBIM para Revit",
    description:
      "Simplifique e acelere processos com orçamentos em BIM 5D completos.",
    link: "#",
  },
  {
    type: "plugin",
    img: "img/OFProdutos1_ofeletrico-c.svg",
    alt: "OF Elétrico",
    description:
      "Elimine tarefas repetitivas e economize horas na elaboração de projetos elétricos no Revit.",
    link: "#",
  },
  {
    type: "plugin",
    img: "img/OFProdutos1_ofhidraulico-c.svg",
    alt: "OF Hidráulico",
    description:
      "Crie e documente projetos hidrossanitários com a simplicidade e agilidade de alguns cliques.",
    link: "#",
  },
];

const modulos = solutionsData.filter((item) => item.type === "modulo");
const plugins = solutionsData.filter((item) => item.type === "plugin");

function renderCards(listaDeDados, idDoAlvo) {
  const container = document.getElementById(idDoAlvo);
  let allCards = "";

  listaDeDados.forEach((item) => {
    allCards += `<article class="solution-card">
      <figure>
          <img
              src="${item.img}"
              alt="${item.alt}"
          />
      </figure>

      <p>${item.description}</p>

      <a href="${item.link}">Saiba mais</a>
  </article>`;
  });

  if (container) {
    container.innerHTML = allCards;
  }
}

renderCards(modulos, "container-modulos");
renderCards(plugins, "container-plugins");

// ---- BENEFÍCIOS ----

const benefitsData = [
  {
    icon: "fa-bolt",
    title: "Agilidade",
    text: "Reduza em até 80% o tempo gasto com elaboração de orçamentos e levantamentos.",
  },
  {
    icon: "fa-shield-halved",
    title: "Segurança jurídica",
    text: "Bases oficiais (SINAPI, SBC, SICRO) atualizadas mensalmente conforme a legislação.",
  },
  {
    icon: "fa-chart-line",
    title: "Controle total",
    text: "Acompanhe o cronograma físico-financeiro da sua obra em tempo real, de qualquer lugar.",
  },
];

function renderBenefits() {
  const container = document.getElementById("container-benefits");
  let html = "";

  benefitsData.forEach((item) => {
    html += `
    <div class="benefit-item">
    <i class="fa-solid ${item.icon}"></i>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
    </div>
    `;
  });
  container.innerHTML = html;
}

renderBenefits();
