

// Dados
const products = [{
  image: 'assets/products/propolis.png',
  title: "Própolis Verde 70",
  text: "Kit c/ 2 Própolis Verde 70 - Extrato 25% - 30ml - Apis Flora. O Própolis Verde 70 da Apis Flora é um extrato com 25% de própolis verde, reconhecido por suas propriedades antioxidantes, antibacterianas e anti-inflamatórias. Produzido a partir do alecrim-do-campo, planta brasileira rica em benefícios, ajuda a fortalecer o sistema imunológico e a prevenir infecções. Prático e concentrado, o frasco de 30ml é ideal para uso diário, podendo ser consumido em gotas diluídas em água ou diretamente.",
  benefits: [
    "Fortalece o sistema imunológico",
    "Possui propriedades anti-inflamatórias",
    "Rico em compostos bioativos",
    "Auxilia na proteção das vias respiratórias"
  ],
  amazonLink: "https://amzn.to/4em4PwZ",
  amazonLinkEU: "https://amzn.to/4fO5h8b"
},
{
  image: 'assets/products/nac.png',
  title: "Nac - N-Acetil L-Cisteína",
  text: "Vitafor - Nac - N-Acetil L-Cisteína - 60 Cápsulas - A N-Acetil L-Cisteína (NAC) é um potente antioxidante que ajuda a fortalecer o sistema imunológico, melhora a saúde pulmonar e promove a desintoxicação do organismo. Ideal para quem busca apoiar a função respiratória, proteger o fígado e aumentar os níveis de glutationa no corpo. Suplemento essencial para quem deseja mais vitalidade e bem-estar no dia a dia.",
  benefits: [
    "Potente antioxidante",
    "Suporte para saúde respiratória",
    "Auxilia na produção de glutationa",
    "Contribui para desintoxicação do organismo"
  ],
  amazonLink: "https://amzn.to/3C0hMiv",
  amazonLinkEU: "https://amzn.to/4fCv1Vl"
},
{
  image: 'assets/products/omega.png',
  title: "Omegafor Plus",
  text: "Vitafor - Omegafor Plus - 240 Cápsulas. Omegafor Plus é um suplemento alimentar rico em ácidos graxos essenciais Ômega-3, com uma fórmula que combina o óleo de peixe e vitamina E. Ele é indicado para apoiar a saúde cardiovascular, reduzir inflamações e melhorar a função cerebral. Com uma alta concentração de EPA e DHA, o Omegafor Plus contribui para o equilíbrio do colesterol, aumento da resistência do sistema imunológico e melhoria da saúde das articulações. Ideal para quem busca uma opção de suplementação para promover o bem-estar geral e melhorar a qualidade de vida.",
  benefits: [
    "Suporte à saúde cardiovascular",
    "Auxilia na função cerebral",
    "Anti-inflamatório natural",
    "Contribui para saúde das articulações"
  ],
  amazonLink: "https://amzn.to/40r0p4n",
  amazonLinkEU: "https://amzn.to/4eza2S2"
},
{
  image: 'assets/products/d3.png',
  title: "Vitamina D3 + K2",
  text: "Vitamina D3 10.000ui + vitamina K2(mk7) 120mcg com 120 cápsula. Vitamina D3 + K2 é um suplemento que combina as vitaminas D3 e K2, essenciais para a saúde óssea, imunológica e cardiovascular. A Vitamina D3 ajuda na absorção de cálcio e fósforo, fortalecendo os ossos e dentes, enquanto a Vitamina K2 auxilia na direção do cálcio para os ossos e dentes, prevenindo seu acúmulo nas artérias. Juntas, essas vitaminas promovem uma saúde óssea robusta, apoiam o sistema imunológico e contribuem para a saúde cardiovascular. Ideal para quem busca otimizar a absorção de cálcio e manter ossos e articulações saudáveis.",
  benefits: [
    "Fortalecimento ósseo",
    "Melhora do sistema imunológico",
    "Sinergia entre D3 e K2 para melhor absorção",
    "Suporte à saúde cardiovascular"
  ],
  amazonLink: "https://amzn.to/3NL5OvM",
  amazonLinkEU: "https://amzn.to/3YWyKpP"
},
{
  image: 'assets/products/magnesio.png',
  title: "Magnésio Glicinato, Quelato",
  text: "Magnésio Glicinato, Quelato, 350mg de magnésio elementar, 90 Cápsulas, Bigens (Unidade). Magnésio Glicinato Quelato é uma forma altamente biodisponível de magnésio, conhecido por sua excelente absorção no organismo. A combinação de magnésio com glicina (um aminoácido) permite uma assimilação mais eficiente e suave, sem causar os efeitos colaterais comuns, como diarreia, encontrados em outras formas de magnésio. Este suplemento é ideal para melhorar a saúde muscular, relaxar o sistema nervoso, e ajudar na regulação dos níveis de glicose no sangue. Além disso, é benéfico para a qualidade do sono, redução do estresse e alívio de cãibras musculares.",
  benefits: [
    "Alta biodisponibilidade",
    "Suporte ao sistema nervoso",
    "Auxilia na qualidade do sono",
    "Importante para saúde muscular"
  ],
  amazonLink: "https://amzn.to/4fpdv6j",
  amazonLinkEU: "https://amzn.to/4fJ2ygs"
},
{
  image: 'assets/products/vitac.png',
  title: "Vitamina C Pura 1000 mg",
  text: "3VS Nutrition Vitamina C Pura 1000 mg | 120 Cápsulas. Vitamina C Pura 1000 mg é um suplemento de alta concentração, ideal para fortalecer o sistema imunológico, combater radicais livres e melhorar a saúde da pele. A vitamina C é um poderoso antioxidante que também auxilia na absorção de ferro, contribui para a formação de colágeno e promove a saúde das articulações. Com 1000 mg por dose, oferece suporte ideal para aumentar a energia, reduzir o risco de infecções e melhorar a recuperação pós-treino. Ideal para quem busca otimizar a saúde geral e manter uma imunidade forte ao longo do ano.",
  benefits: [
    "Fortalece o sistema imunológico",
    "Potente antioxidante",
    "Auxilia na produção de colágeno",
    "Melhora a absorção de ferro"
  ],
  amazonLink: "https://amzn.to/3YsyEFY",
  amazonLinkEU: "https://amzn.to/4fv9b5X"
},
{
  image: 'assets/products/creatina.png',
  title: "Black Skull Creatine Turbo",
  text: "O Black Skull Creatine Turbo é um suplemento projetado para maximizar o desempenho físico, especialmente durante atividades de alta intensidade e curta duração. Composto por creatina de alta qualidade, ele auxilia no aumento de força, resistência e recuperação muscular. Cada dose oferece um suporte eficiente para quem busca melhorar a performance nos treinos e estimular o ganho de massa muscular. A embalagem de 300g oferece uma quantidade ideal para ciclos de uso prolongado, mantendo a energia e a potência muscular ao longo dos treinos mais intensos",
  benefits: [
    "Suplementação",
    "Para uma rotina saudável",
    "Mais força e resistência",
    "Promove maior volume muscular"
  ],
  amazonLink: "https://amzn.to/4e0FgRT",
  amazonLinkEU: "https://amzn.to/4gaKQmf"
},
{
  image: 'assets/products/whey.png',
  title: "Isolate Protein Fuse 1.8Kg",
  text: "Isolate Protein Fuse 1.8Kg Blend de Proteína Isolada Dark Lab (1,8kg, Baunilha) Isolate Protein Fuse 1.8kg é um suplemento proteico de alta qualidade, formulado com proteína isolada do soro de leite (whey protein isolate). Com alta concentração de proteína e baixo teor de carboidratos e gorduras, é ideal para quem busca um suplemento de rápida absorção para recuperação muscular, aumento de massa magra e suporte nutricional para treinos intensos. Cada porção oferece uma excelente fonte de aminoácidos essenciais, como os BCAAs, que ajudam na reparação e crescimento muscular. A embalagem de 1.8kg proporciona uma grande quantidade para quem treina regularmente, garantindo eficiência no seu plano alimentar e de treino.",
  benefits: [
    "Ganho de massa muscular",
    "Reparação e recuperação muscular",
    " Contém BCAA",
    "Contém Arginina"
  ],
  amazonLink: "https://amzn.to/4fnAUFn",
  amazonLinkEU: "https://amzn.to/48WCs7t"
},
{
  image: 'assets/products/zinco.png',
  title: "Zinco Quelato 60 Cáps",
  text: "Nutrends Revigoran Zinco Quelato 60 Cáps é um suplemento de alta absorção que fornece zinco na forma de quelato, uma forma de melhor biodisponibilidade, garantindo maior aproveitamento pelo organismo. O zinco é essencial para o funcionamento do sistema imunológico, além de auxiliar na saúde da pele, cabelo e unhas. Também desempenha um papel importante na síntese de proteínas e na recuperação muscular. Ideal para quem busca fortalecer a imunidade, melhorar a saúde da pele e otimizar os resultados de treinos e recuperação. Com 60 cápsulas, é uma opção prática e eficaz para suplementação diária.",
  benefits: [
    "Síntese de proteínas",
    "Cicatrização",
    "Imunidade",
    "Crescimento muscular",
    "Auxilio no equilíbrio hormonal"
  ],
  amazonLink: "https://amzn.to/40r2woP",
  amazonLinkEU: "https://amzn.to/3CuYbHt"
},
{
  image: 'assets/products/glutamina.png',
  title: "Glutamine Turbo 300G",
  text: "Glutamine Turbo 300G, Black Skull é um suplemento alimentar que fornece L-glutamina, um aminoácido essencial para a recuperação muscular e o fortalecimento do sistema imunológico. A glutamina é a principal fonte de energia para as células do sistema digestivo e é fundamental para a regeneração e reparação dos músculos após treinos intensos. Além disso, ela ajuda a prevenir o catabolismo muscular, melhora a recuperação e reduz a fadiga. A embalagem de 300g oferece uma dose concentrada para quem busca otimizar a performance nos treinos e acelerar a recuperação. Ideal para atletas e praticantes de atividades físicas intensas.",
  benefits: [
    "Auxilia no aumento da imunidade",
    "Melhoria de saúde e bem estar",
    "Ajuda a ter mais disposição no dia a dia",
    "Garante a integridade do tecido muscular e intestinal"
  ],
  amazonLink: "https://amzn.to/4fj8VGO",
  amazonLinkEU: "https://amzn.to/4evIEV7"
},
{
  image: 'assets/products/taurina.png',
  title: "Magnésio Taurina",
  text: "Maxx Taurato 120 cápsulas é um suplemento que combina magnésio com taurina, um aminoácido que possui diversas funções benéficas para o corpo. O magnésio é essencial para a função muscular, saúde óssea e equilíbrio de eletrólitos, enquanto a taurina atua no apoio ao sistema cardiovascular, no controle do estresse e na melhoria do desempenho físico. Juntos, esses dois componentes oferecem benefícios para o relaxamento muscular, redução de cãibras, controle de pressão arterial e melhora da função cardíaca. Ideal para quem busca um suplemento que promova o bem-estar geral e suporte ao sistema cardiovascular e muscular.",
  benefits: [
    "Auxilia no funcionamento neuromuscular",
    "Auxilia no processo de divisão celular",
    "Auxilia na formação de ossos e dentes",
    "Auxilia no metabolismo de proteínas, carboidratos e gorduras"
  ],
  amazonLink: "https://amzn.to/3BWma1J",
  amazonLinkEU: "https://amzn.to/4hQL1Vf"
},
{
  image: 'assets/products/treonato.png',
  title: "Magnesio Treonato 100% Puro",
  text: "Kit 3Un Magnesio Treonato 100% Puro 500mg 360Caps - Magnésio Treonato 100% Puro é uma forma de magnésio altamente biodisponível, especialmente formulada para promover benefícios para a saúde cerebral e cognitiva. O magnésio treonato é conhecido por sua capacidade de penetrar na barreira hematoencefálica, o que o torna particularmente eficaz para melhorar a função cerebral, memória e concentração. Além disso, ajuda a relaxar os músculos, reduzir o estresse e melhorar a qualidade do sono. Ideal para quem busca melhorar a saúde mental e cognitiva, ao mesmo tempo em que promove o relaxamento muscular e o bem-estar geral.",
  benefits: [
    "Melhora da Cognição",
    "Apoio à Memória e Aprendizado",
    "Foco Aprimorado"
  ],
  amazonLink: "https://amzn.to/4f2zsbB",
  amazonLinkEU: "https://amzn.to/40OOIVh"
},
{
  image: 'assets/products/coenzima.png',
  title: "Coenzima Q10",
  text: "Coenzima Q10 - 200mg 60 Capsulas Coq10 Ubiquinona Lauton Nutrition é um antioxidante natural encontrado nas células do corpo, essencial para a produção de energia e proteção contra danos celulares causados pelos radicais livres. Ela desempenha um papel crucial na saúde cardiovascular, ajudando a melhorar a circulação sanguínea e a função do coração. Além disso, a CoQ10 pode aumentar os níveis de energia, melhorar a recuperação muscular após exercícios intensos e reduzir sinais de envelhecimento, como a aparência de rugas e a flacidez da pele. Ideal para quem busca melhorar a saúde geral, aumentar a energia e proteger o coração.",
  benefits: [
    "Ajuda a deixar a pele bonita",
    "Previne os radicais livres",
    "Regenera o tecido cardiovascular",
    "Aumenta a energia e a força"
  ],
  amazonLink: "https://amzn.to/3NI8euT",
  amazonLinkEU: "https://amzn.to/4evIEV7"
},
{
  image: 'assets/products/selenio.png',
  title: "Selênio Quelato",
  text: "KIT 3x Selênio Quelato - 60 Cápsulas 400mg - Duom é um suplemento mineral que fornece selênio em forma de quelato, o que melhora sua absorção e biodisponibilidade no organismo. O selênio é um potente antioxidante que ajuda a proteger as células contra os danos causados pelos radicais livres e fortalece o sistema imunológico. Ele também contribui para a saúde da tireoide, melhora a função cognitiva e pode auxiliar na saúde cardiovascular. Além disso, o selênio é importante para a manutenção da saúde da pele, cabelo e unhas. Ideal para quem busca fortalecer o sistema imunológico e promover a saúde geral.",
  benefits: [
    "Fortalece o sistema imune",
    "É anti-inflamatório",
    "Ajuda no controle da tireoide e no equilíbrio do metabolismo",
    "É antioxidante e previne o envelhecimento"
  ],
  amazonLink: "https://amzn.to/4flJqF0",
  amazonLinkEU: "https://amzn.to/40Ob61f"
},
{
  image: 'assets/products/metifolato.png',
  title: "Metilfolato 400mcg",
  text: "Nutrestar Metilfolato 400mcg Metilcobalamina B12, B6, 60 Cápsulas Vegetais é a forma ativa do ácido fólico (vitamina B9), que desempenha um papel crucial na produção de células sanguíneas e na saúde do sistema nervoso. O metilfolato é facilmente absorvido pelo corpo e é fundamental para a síntese de DNA, além de ser essencial para o funcionamento do cérebro e a regulação dos níveis de homocisteína, o que pode ajudar a reduzir o risco de doenças cardiovasculares. Ideal para mulheres grávidas ou que planejam engravidar, pois auxilia na prevenção de defeitos no tubo neural do bebê. Também pode ser benéfico para pessoas que têm dificuldade em metabolizar o ácido fólico.",
  benefits: [
    "Melhora do Metabolismo Energético",
    "Saúde do Sistema Nervoso",
    "Prevenção da Anemia",
    "Apoio à Saúde Mental"
  ],
  amazonLink: "https://amzn.to/3YFP27j",
  amazonLinkEU: "https://amzn.to/4hUDwwp"
},
{
  image: 'assets/products/melatonina.png',
  title: "Melatonina + Triptofano",
  text: "Melatonina 120 Cápsulas + Triptofano, Magnésio, Vitaminas B3 e B9, Fortalvit é um suplemento que combina diversos nutrientes essenciais, projetado para promover a qualidade do sono e o bem-estar geral. Com duração estimada para quatro meses de uso, ele é formulado para atender a várias necessidades do organismo.",
  benefits: [
    "Melhora a qualidade do sono",
    "Redução do estresse e melhora do humor",
    "Suporte à saúde muscular e nervosa",
    "Estimula a energia e a função cognitiva"
  ],
  amazonLink: "https://amzn.to/40sRNdL",
  amazonLinkEU: "https://amzn.to/3CK2hLC"
},
{
  image: 'assets/products/pycnogenol.png',
  title: "Pycnogenol Pinus Pinaster 250mg",
  text: "Pycnogenol Pinus Pinaster 250mg (60 cápsulas) da Vita Vita é um suplemento feito a partir do extrato da casca do pinheiro marítimo francês (Pinus pinaster). Rico em compostos antioxidantes, como procianidinas, bioflavonoides e ácidos orgânicos, ele oferece uma variedade de benefícios para a saúde.",
  benefits: [
    "Ação antioxidante potente",
    "Melhora a saúde cardiovascular",
    "Suporte à pele e antienvelhecimento",
    "Redução de inflamações"
  ],
  amazonLink: "https://amzn.to/3Yskpkq",
  amazonLinkEU: "https://amzn.to/3BWma1J"
},
{
  image:"assets/products/creatina-mono.jpg",
  title: "Black Skull Creatine Pure Monohydrate",
  text: "Black Skull Creatine Pure Monohydrate é um suplemento alimentar que tem como principal objetivo melhorar o desempenho físico, aumentar a força e auxiliar na recuperação muscular. A creatina monohidratada é uma das substâncias mais estudadas e utilizadas no mundo da nutrição esportiva, reconhecida pela sua eficácia.",
  benefits: [
    "Aumento de força e potência muscular",
    "Hidratação celular",
    "Auxílio no ganho de massa magra",
    "Melhoria na recuperação muscular"
  ],
  amazonLink: "https://amzn.to/3ZfSdTq",
  amazonLinkEU: "https://amzn.to/40Upp4p"
},
{
  image: 'assets/products/colageno.png',
  title: "Colágeno tipo 2 40mg, ácido hialurônico, M.S.M., Cálcio, Biogens",
  text: "Suplemento especialmente desenvolvido para promover a saúde das articulações, ossos e tecidos conectivos, auxiliando na manutenção da mobilidade e no alívio de desconfortos articulares. Sua fórmula avançada combina nutrientes essenciais para regeneração e proteção das articulações, além de favorecer a hidratação dos tecidos e a preservação da saúde óssea. Ideal para quem busca maior qualidade de vida e suporte ao bem-estar físico.",
  benefits: [
    "Melhora da saúde articular",
    "Hidratação dos tecidos",
    "Fortalecimento dos ossos",
    "Redução de inflamações"
  ],
  amazonLink: "https://amzn.to/3ZnbwKM",
  amazonLinkEU: "https://amzn.to/3B9BdVL"
}
];
/*{
  image: 'assets/products/',
  title: "",
  text: "",
  benefits: [
    "",
    "",
    "",
    ""
  ],
  amazonLink: "",
  amazonLinkEU: ""
},*/

const testimonialData = [
  {
  image: 'assets/users/erika.png',
  text: "Comecei a me alimentar de forma mais saudável e a usar suplementos e já percebo uma diferença enorme! Tenho muito mais energia para o trabalho e para os exercícios, além de sentir minha pele e cabelo mais saudáveis. Foi uma mudança que impactou minha vida de forma positiva!",
  nome: "Erika Cristina"
},
{
  image: 'assets/users/carmen.png',
  text: "Desde que comecei com a suplementação e uma alimentação balanceada, percebo uma grande melhora nas articulações e na minha disposição. Sinto meu corpo mais forte e tenho mais ânimo para fazer coisas que antes evitava. Realmente, fez toda a diferença!",
  nome: "Carmen Lúcia"
},
{
  image: 'assets/users/lucia.png',
  text: "Com a nova alimentação e suplementação, consegui controlar melhor meu diabetes e reduzir o colesterol. Hoje, me sinto mais leve, com mais energia e menos preocupada com a saúde, o que me permite aproveitar mais os momentos com a família.",
  nome: "Lucia Helena"
},
{
  image: 'assets/users/lucas.png',
  text: "A mudança para uma rotina de alimentação saudável e suplementação me trouxe mais foco e disposição, tanto no trabalho quanto na vida pessoal. Estou com muito mais energia e consigo lidar com o dia a dia de forma leve. Me sinto muito mais disposto!",
  nome: "Lucas D'Aloia"
}];

// Utilitários
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// Funções de Produtos
function displayProducts() {
  const container = $('#products-section-bottom');
  if (!container) return console.error("Container de produtos não encontrado");

  const productsHTML = products.map((product, index) => `
        <div class="products-section-info" data-product-index="${index}">
            <div class="info-boxes-img-container">
                <div class="product-content">
                    <h2>${product.title}</h2>
                    <img src="${product.image}" alt="${product.title}" style="cursor: pointer" loading="lazy" />
                </div>
                <div class="button-container">
                    <button class="product-button">Ver Detalhes</button>
                </div>
            </div>
        </div>
    `).join('');

  container.innerHTML = productsHTML;

  // Event Delegation
  container.addEventListener('click', (e) => {
    const productCard = e.target.closest('.products-section-info');
    if (!productCard) return;

    if (e.target.matches('img, .product-button')) {
      openModal(Number(productCard.dataset.productIndex));
    }
  });
}

// Funções do Modal
function createModalContent(product) {
  return `
        <button class="modal-close" onclick="closeModal()">&times;</button>
        <div class="modal-product-content">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.title}" />
            </div>
            <div class="modal-product-info">
                <h2>${product.title}</h2>
                <p>${product.text}</p>
                <div class="modal-product-details">
                    <h3>Benefícios</h3>
                    <ul>
                        ${product.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
                <a href="${product.amazonLink}" target="_blank" rel="noopener noreferrer" class="amazon-button">
                    Compre Agora<img class= "flags" src="assets/icons/brasilFlag.png" alt="Brasil" />
                </a>
                <a href="${product.amazonLinkEU}" target="_blank" rel="noopener noreferrer" class="amazon-button">
                    Compre Agora <img class= "flags" src="assets/icons/euroFlag.webp" alt="Europa">
                </a>
                <p class="disclaimer-text" style="font-size: 0.8rem; color: #666; margin-top: 10px; text-align: center;">
                    * Os produtos, marcas e disponibilidade podem variar entre as regiões do Brasil e Europa.
                </p>
            </div>
        </div>
    `;
}

function openModal(index) {
  const modal = $('#product-modal');
  const product = products[index];
  if (!product || !modal) return;

  modal.querySelector('.modal-content').innerHTML = createModalContent(product);
  modal.style.display = "flex";
  requestAnimationFrame(() => modal.classList.add('modal-active'));

  // Add click event listener to close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = $('#product-modal');
  if (!modal) return;

  modal.classList.remove('modal-active');
  setTimeout(() => {
    modal.style.display = "none";
    // Remove event listener when modal is closed
    modal.removeEventListener('click', closeModal);
  }, 300);
}

// Update init function to include modal setup
function init() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }
}
// Menu Mobile
function setupMobileMenu() {
  const menuToggle = $('.menu-toggle');
  const mobileMenu = $('#mobileMenu');

  if (!menuToggle || !mobileMenu) return;

  function closeMenu() {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
  }

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu, {passive: true});
  });

  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });
}

// Smooth Scroll
function setupSmoothScroll() {
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = $(anchor.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, {passive: true});
  });
}

// Depoimentos
function createStars() {
  return `<div class="testimonial-stars">${'★'.repeat(5)}</div>`;
}

function displayTestimonials() {
  const container = $('#testimonial-cards-container');
  if (!container) return console.error("Container de depoimentos não encontrado");

  const testimonialsHTML = testimonialData.map((testimonial, index) => `
        <div class="testimonial-card" 
             data-aos="fade-up" 
             data-aos-delay="${index * 100}">
            <img src="${testimonial.image}" alt="foto do perfil" />
            <p>${testimonial.text}</p>
            ${createStars()}
            <h3>${testimonial.nome}</h3>
        </div>
    `).join('');

  container.innerHTML = testimonialsHTML;
}

// Vídeo Modal
function setupVideoModal() {
  const modal = $('#videoModal');
  const openBtn = $('#openVideoModal');
  const closeBtn = $('.modal-close');
  const videoIframe = modal?.querySelector('iframe');

  if (!modal || !openBtn || !closeBtn || !videoIframe) return;

  const videoUrl = videoIframe.src;

  function stopVideo() {
    videoIframe.src = '';
    modal.style.display = 'none';
  }

  openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    videoIframe.src = videoUrl;
  });

  closeBtn.addEventListener('click', stopVideo);

  window.addEventListener('click', (event) => {
    if (event.target === modal) stopVideo();
  });
}

function setupModalListeners() {
  const modal = $('#product-modal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
      if (e.target === modal) {
          closeModal();
      }
  });
}
// Inicialização
function init() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }

  setupMobileMenu();
  displayProducts();
  displayTestimonials();
  setupVideoModal();
  setupSmoothScroll();
  
}

// Event Listeners
document.addEventListener('DOMContentLoaded', init, {passive: true});

let darkModeIcons = document.querySelectorAll("#dark-mode-icon");

darkModeIcons.forEach(icon => {
    icon.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");
        
        darkModeIcons.forEach(icon => {
            if (document.body.classList.contains("dark-theme")) {
                icon.src = "assets/icons/sun.png";
            } else {
                icon.src = "assets/icons/moon.png";
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Modal de Política de Privacidade
    const privacyModalHTML = `
        <div id="privacy-modal" class="modal-overlay">
            <div class="modal-content">
                <span class="close-button" onclick="closePrivacyModal()">&times;</span>
                <h2>Política de Privacidade</h2>
                <div class="modal-body">
                    <p><strong>Última atualização: 05/11/2024</strong></p>
                    <p>Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações dos visitantes do nosso site.</p>
                    
                    <h3>Informações que Coletamos</h3>
                    <p>Não coletamos dados pessoais identificáveis de nossos visitantes. Não registramos informações pessoais como nome, e-mail ou número de telefone.</p>
                    
                    <h3>Uso de Cookies</h3>
                    <p>Nós usamos cookies para melhorar a experiência do usuário. Cookies são pequenos arquivos de texto armazenados no seu dispositivo que ajudam a lembrar suas preferências e melhorar a funcionalidade do site. Você pode optar por desativar os cookies nas configurações do seu navegador.</p>
                    
                    <h3>Links para Outros Sites</h3>
                    <p>Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade ou pelo conteúdo desses sites. Recomendamos que você revise as políticas de privacidade de qualquer site que você visitar.</p>
                    
                    <h3>Isenção de Responsabilidade</h3>
                    <p>Como afiliados da Amazon, fornecemos links para produtos disponíveis na Amazon. Não somos responsáveis pela compra, entrega ou suporte dos produtos comprados através de nossos links.</p>
                    
                    <h3>Alterações a Esta Política</h3>
                    <p>Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. Notificaremos os usuários sobre alterações significativas através de um aviso em nosso site.</p>
                    
                    <h3>Contato</h3>
                    <p>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: vitalurestore@gmail.com</p>
                </div>
            </div>
        </div>
    `;

    // Modal de Termos e Condições
    const termsModalHTML = `
        <div id="terms-modal" class="modal-overlay">
            <div class="modal-content">
                <span class="close-button" onclick="closeTermsModal()">&times;</span>
                <h2>Termos e Condições</h2>
                <div class="modal-body">
                    <p><strong>Última atualização: 05/11/2024</strong></p>
                    
                    <h3>1. Sobre Nosso Serviço</h3>
                    <p>A Vitalure é um site de afiliados que fornece informações sobre produtos e redireciona os visitantes para o site da Amazon para completar a compra. Não vendemos produtos diretamente e não somos responsáveis por questões relacionadas à compra, entrega ou suporte dos produtos mostrados no nosso site.</p>

                    <h3>2. Afiliados da Amazon</h3>
                    <p>Somos participantes do Programa de Associados da Amazon, um programa de afiliados que permite a geração de receita por meio de links para produtos da Amazon. Quando você clica em nossos links e realiza uma compra, podemos receber uma comissão sem nenhum custo adicional para você.</p>

                    <h3>3. Responsabilidade por Produtos e Compras</h3>
                    <p>Toda a compra realizada através dos nossos links de afiliados será processada diretamente pela Amazon. Nós não temos controle sobre os produtos oferecidos, preços, disponibilidade, prazos de entrega ou qualquer questão relacionada ao atendimento ao cliente da Amazon.</p>

                    <h3>4. Precisão das Informações</h3>
                    <p>Nos esforçamos para garantir que as informações exibidas em nossa página estejam corretas e atualizadas, mas não podemos garantir a exatidão completa de preços, disponibilidade ou características dos produtos.</p>

                    <h3>5. Contato</h3>
                    <p>Para quaisquer dúvidas sobre nossos Termos e Condições, entre em contato conosco em vitalurestore@gmail.com</p>
                </div>
            </div>
        </div>
    `;

    // Adicionar os modais ao body
    document.body.insertAdjacentHTML('beforeend', privacyModalHTML);
    document.body.insertAdjacentHTML('beforeend', termsModalHTML);

    // Adicionar estilos
    const styles = `
        <style>
            .modal-overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 9999;
                overflow-y: auto;
                padding: 20px;
            }

            .modal-content {
                background-color: #fff;
                margin: 20px auto;
                padding: 30px;
                width: 90%;
                max-width: 800px;
                border-radius: 8px;
                position: relative;
                max-height: 90vh;
                overflow-y: auto;
            }

            .modal-body {
                margin-top: 20px;
                color: #333;
                line-height: 1.6;
            }

            .modal-content h2 {
                color: #333;
                margin-bottom: 20px;
                font-size: 24px;
            }

            .modal-content h3 {
                color: #444;
                margin-top: 25px;
                margin-bottom: 15px;
                font-size: 20px;
            }

            .modal-content p {
                margin-bottom: 15px;
                color: #666;
                font-size: 16px;
            }

            .close-button {
                position: absolute;
                right: 20px;
                top: 20px;
                font-size: 28px;
                font-weight: bold;
                color: #666;
                cursor: pointer;
                border: none;
                background: none;
                padding: 0;
                line-height: 1;
            }

            .close-button:hover {
                color: #000;
            }

            @media (max-width: 768px) {
                .modal-content {
                    width: 95%;
                    padding: 20px;
                    margin: 10px auto;
                }
                
                .modal-content h2 {
                    font-size: 20px;
                }

                .modal-content h3 {
                    font-size: 18px;
                }

                .modal-content p {
                    font-size: 14px;
                }
            }
        </style>
    `;

    // Adicionar estilos ao head
    document.head.insertAdjacentHTML('beforeend', styles);
});

// Funções para controlar os modais
function openPrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closePrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function openTermsModal() {
    const modal = document.getElementById('terms-modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeTermsModal() {
    const modal = document.getElementById('terms-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Adicionar eventos para fechar os modais quando clicar fora
document.addEventListener('click', function(event) {
    const privacyModal = document.getElementById('privacy-modal');
    const termsModal = document.getElementById('terms-modal');
    
    if (event.target === privacyModal) {
        closePrivacyModal();
    }
    if (event.target === termsModal) {
        closeTermsModal();
    }
});
