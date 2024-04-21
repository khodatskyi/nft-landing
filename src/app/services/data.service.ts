import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  displayedCards: {
    img: string;
    title: string;
    category: string;
    status: string;
    price: number;
  }[] = [];
  step: number = 15;
  totalPages = 0;
  pageCollection: number[] = [1, 2, 3, 4];

  constructor() {}

  getTrendCollectionCards() {
    return this.trendCollectionCards;
  }

  getFeaturedCollection() {
    return this.featuredCollection;
  }

  getCreatorsCollection() {
    return this.creatorsCollection;
  }

  trendCollectionCards = [
    {
      img: 'https://images.pexels.com/photos/639086/pexels-photo-639086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Woman',
      price: 4.5,
      status: '',
      category: '',
    },
    {
      img: 'https://images.pexels.com/photos/1181181/pexels-photo-1181181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Flamingo',
      price: 5.5,
      status: '',
      category: '',
    },
    {
      img: 'https://images.pexels.com/photos/133081/pexels-photo-133081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Sakura',
      price: 6.7,
      status: '',
      category: '',
    },
    {
      img: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Parrots',
      price: 2.3,
      status: '',
      category: '',
    },
    {
      img: 'https://images.pexels.com/photos/547119/pexels-photo-547119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Lake',
      price: 8.5,
      status: '',
      category: '',
    },
    {
      img: 'https://images.pexels.com/photos/1631678/pexels-photo-1631678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Sunset',
      price: 5,
      status: '',
      category: '',
    },
    {
      img: 'https://images.pexels.com/photos/3046632/pexels-photo-3046632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Jellyfish',
      price: 5,
      status: '',
      category: '',
    },
    {
      img: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Woman Element',
      price: 5,
      status: '',
      category: '',
    },
  ];

  featuredCollection = [
    {
      img: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Nature in color',
      price: 8.9,
      likes: 120,
      description:
        'A vibrant digital masterpiece capturing the beauty of natural colors. Experience the power of NFT artistry with this art.',
      creator: 'Andrea Pierce',
      status: '',
      category: '',
    },
    {
      img: 'https://images.pexels.com/photos/18069371/pexels-photo-18069371/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-help-understand-ecosystems-and-identify-species-it-was-created-by-nidia-dias-as-part-of-the-visua.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Digital environment',
      price: 21.9,
      likes: 150,
      description:
        'Elevate your digital collection with these immersive pieces that transcend traditional boundaries, offering a unique fusion.',
      creator: 'Leona Herald',
      status: '',
      category: '',
    },
  ];

  creatorsCollection = [
    {
      img: [
        'https://images.unsplash.com/photo-1610910364020-405f4c9cf26a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1620509400919-a2ef8294f239?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1589051100134-01af4a8fb970?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      creator: 'Katherine 3D',
    },
    {
      img: [
        'https://plus.unsplash.com/premium_photo-1689843658573-b1c234d46842?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1599906823892-321f8347dfcd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1608923868510-d38b4fc81d60?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      creator: 'Nature Digital',
    },
    {
      img: [
        'https://images.unsplash.com/photo-1621626728473-b6acda2de67d?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1611492051094-a2393bc637aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1612455875645-26557dfbbd2c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      creator: 'Scenery arts',
    },
    {
      img: [
        'https://images.unsplash.com/photo-1619688136991-7be90847f19e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1613402214881-97127f2c22c2?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664366738049-350cea2c8792?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      creator: 'Lukas Walker',
    },
  ];

  valuesCardCollection = [
    {
      img: '../../../../assets/rocket2.png',
      title: 'Innovation',
      description:
        'Pioneering new ways to experience and interact with our NFT digital arts.',
    },
    {
      img: '../../../../assets/high-quality.png',
      title: 'Quality',
      description:
        'Curating only the finest NFt digital artworks for our products collection.',
    },
    {
      img: '../../../../assets/group.png',
      title: 'Community',
      description:
        'Building a supportive ecosystem for artists and collectors to thrive.',
    },
    {
      img: '../../../../assets/planting.png',
      title: 'Sustainability',
      description:
        'Committing to environment responsible NFT digital arts and blockchain practices.',
    },
  ];

  roadMapCardsCollection = [
    {
      title: 'Platform launch',
      month: 'January',
      year: '2022',
    },
    {
      title: 'Artist Partnership',
      month: 'August',
      year: '2022',
    },
    {
      title: 'AR Gallery Features',
      month: 'December',
      year: '2022',
    },
    {
      title: 'Annual Art Events',
      month: 'February',
      year: '2023',
    },
  ];

  teamProfilesCollection = [
    {
      name: 'Eva Chen',
      jobTitle: 'Founder & CEO',
      img: 'https://image.cdn2.seaart.ai/2023-11-05/21848614219291653/2aac5a27323a13bec3fad164978e148a80ca72d6_high.webp',
    },
    {
      name: 'Leo Martinez',
      jobTitle: 'Lead Creative',
      img: 'https://image.cdn2.seaart.ai/2024-04-02/co650qte878c73ee1950/cf95654628da6869bc23d3e573508d6133c71bee_high.webp',
    },
    {
      name: 'Maya Gupta',
      jobTitle: 'Head of relations',
      img: 'https://image.cdn2.seaart.ai/2023-10-30/21319123314178054/c15bf7455a56da4baf6b741f3c912e2c997b91a1_high.webp',
    },
    {
      name: 'Zoe Kimberly',
      jobTitle: 'Marketing director',
      img: 'https://image.cdn2.seaart.ai/2023-11-02/21538130901338117/d1c21e5d961b2d1fe1fc33a83d4bdc7cee842f14_high.webp',
    },
    {
      name: 'Ethan Jonson',
      jobTitle: 'Lead developer',
      img: 'https://image.cdn2.seaart.ai/2023-10-29/21224894771554309/74fd7bd192db30664b6f28c9f41066f429aaddec_high.webp',
    },
    {
      name: 'Carlos Rivera',
      jobTitle: 'Community manager',
      img: 'https://image.cdn2.seaart.ai/2024-04-05/co8524le878c73f65big/f8b30b96bf6b34564ce1063cf32b64b4279856ea_high.webp',
    },
  ];

  artWorksCollection = [
    {
      img: 'https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Serenity',
      category: 'nature',
      status: 'new',
      price: 1.2,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/pico-de-montanha-majestoso-em-paisagem-tranquila-de-inverno-gerada-por-ia_188544-15662.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Wilderness',
      category: 'nature',
      status: 'new',
      price: 1.5,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/bela-foto-aerea-de-uma-praia-com-colinas-ao-fundo-ao-por-do-sol_181624-24143.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Tranquility',
      category: 'nature',
      status: 'new',
      price: 1.43,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/a-beleza-da-natureza-refletida-nas-tranquilas-aguas-montanhosas-ia-generativa_188544-7867.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Oasis',
      category: 'nature',
      status: 'new',
      price: 1.11,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/por-do-sol-da-misurina_181624-34793.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Verdant',
      category: 'nature',
      status: 'new',
      price: 1.12,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/arvore-solitaria_181624-46361.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Majesty',
      category: 'nature',
      status: 'new',
      price: 1,
    },
    {
      img: 'https://img.freepik.com/fotos-premium/fundo-do-lago-de-montanha_853558-22037.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Solitude',
      category: 'nature',
      status: 'new',
      price: 1,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/rio-em-paisagem-de-montanhas-neblina_1204-511.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Enchantment',
      category: 'nature',
      status: 'new',
      price: 4,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/bela-natureza-paisagem-com-montanhas_23-2150705908.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Harmony',
      category: 'nature',
      status: 'new',
      price: 0.8,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/lago-nas-montanhas_1204-502.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Rivulet',
      category: 'nature',
      status: 'new',
      price: 1.88,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/foto-de-tirar-o-folego-de-belas-pedras-sob-a-agua-turquesa-de-um-lago-e-colinas-ao-fundo_181624-12847.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Splendor',
      category: 'nature',
      status: 'new',
      price: 1.4,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/cordilheira-majestosa-encontra-agua-azul-reflexiva-gerada-por-ia_188544-15024.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Canopy',
      category: 'nature',
      status: 'new',
      price: 0.5,
    },
    {
      img: 'https://img.freepik.com/fotos-premium/paisagem-cinematografica-lake-mountains-valleys-design-ilustracao-ai-gerada-para-criancas-ilustracao-de-historias-de-livros-contos-de-fadas-midia-social-instagram-facebook-banners-pintura-de-parede_467123-23800.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Eden',
      category: 'nature',
      status: 'new',
      price: 0.4,
    },
    {
      img: 'https://img.freepik.com/fotos-premium/vista-aerea-de-glen-etive-no-inverno-perto-de-glencoe-na-regiao-de-argyll-das-terras-altas-da-escocia-mostrando-neve-caindo-nas-montanhas-e-munros-generative-ai_1258-165446.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Bucolic',
      category: 'nature',
      status: 'new',
      price: 3.4,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/paisagem-natural-com-areia-preta-na-praia_23-2151380379.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Azure',
      category: 'nature',
      status: 'new',
      price: 2.4,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/montanhas-vestrahorn-ao-por-do-sol-em-stokksnes-islandia_335224-574.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Elysium',
      category: 'nature',
      status: 'new',
      price: 1.4,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/pico-da-montanha-nevada-sob-a-majestade-generativa-da-galaxia-estrelada-ai_188544-9650.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Foliage',
      category: 'nature',
      status: 'new',
      price: 1.48,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/planos-de-fundo-da-natureza-da-folha-ilustracao-do-padrao-do-design-do-pano-de-fundo-da-planta-abstrato-uma-ilustracao-de-papel-de-parede-da-natureza-verde-vibrante-generativa-ai_188544-12680.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Crest',
      category: 'nature',
      status: 'new',
      price: 1.41,
    },
    {
      img: 'https://img.freepik.com/fotos-premium/banco-vazio-na-montanha-fica-na-borda-do-lago-claro-da-montanha_124507-73570.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Ethereal',
      category: 'nature',
      status: 'new',
      price: 1.46,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/vista-aerea-de-glen-etive-no-inverno-perto-de-glencoe-na-regiao-de-argyll-das-terras-altas-da-escocia-s_1258-165471.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Pristine',
      category: 'nature',
      status: 'new',
      price: 1.42,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/paisagem-montanhosa-pico-majestoso-reflexao-tranquila-deslumbrante-por-do-sol-gerado-por-ia_188544-15518.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Radiance',
      category: 'nature',
      status: 'new',
      price: 1.4,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/bela-paisagem-natural-com-rio-e-vegetacao_23-2150705892.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Zenith',
      category: 'nature',
      status: 'old',
      price: 1.33,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/pinheiros-em-formacao-rochosa-perto-de-montanhas-sob-nuvens-cinzentas_395237-198.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Vistas',
      category: 'nature',
      status: 'old',
      price: 0.87,
    },
    {
      img: 'https://img.freepik.com/fotos-premium/panorama-plano-dos-desenhos-animados-da-bela-natureza-primavera-verao-prado-de-pastagens-verdes-com-flores-floresta-lago-azul-cenico-montanhas-no-fundo-do-horizonte-ilustracao-da-paisagem-do-lago-de-montanha_493343-34166.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Whispering',
      category: 'nature',
      status: 'old',
      price: 1.43,
    },
    {
      img: 'https://img.freepik.com/fotos-premium/bela-paisagem-fotografia-papel-de-parede-fundo-picos-lago-canyon-ceu-nuvens-brancas_1024980-62026.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Radiant',
      category: 'nature',
      status: 'old',
      price: 1.99,
    },
    {
      img: 'https://img.freepik.com/fotos-premium/vigilia-de-verao-colorida-do-lago-sem-escurecimento-clique-em-acao-judicial-dos-alpes-julianos-gerada-por-ia_581634-17078.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Sanctuary',
      category: 'nature',
      status: 'old',
      price: 0.93,
    },
    {
      img: 'https://img.freepik.com/fotos-premium/fundo-do-lago-de-montanha_853558-21937.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Cascade',
      category: 'nature',
      status: 'old',
      price: 0.63,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/cordilheira-de-paisagem-em-preto-e-branco-em-exibicao-ai-generativa_188544-12728.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Arcadia',
      category: 'nature',
      status: 'old',
      price: 1.54,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/monte-mont-blanc-coberto-de-neve-refletindo-na-agua-ao-anoitecer-em-chamonix-franca_181624-33408.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Luminescence',
      category: 'nature',
      status: 'old',
      price: 1.33,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/cordilheira-majestosa-reflete-cena-tranquila-na-agua-gerada-por-ia_188544-21541.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Panorama',
      category: 'nature',
      status: 'old',
      price: 1.81,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/belas-paisagens-montanhosas_23-2150787836.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Glimmer',
      category: 'nature',
      status: 'old',
      price: 0.77,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/o-majestoso-pico-da-montanha-reflete-o-tranquilo-por-do-sol-de-outono-gerado-pela-ia_188544-30815.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Tranquil',
      category: 'nature',
      status: 'old',
      price: 5.33,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/paisagem-montanhosa-com-mesa-de-prancha-de-madeira-ao-ar-livre-generativa-ai_188544-12607.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Symbiosis',
      category: 'nature',
      status: 'old',
      price: 0.2,
    },
    {
      img: 'https://img.freepik.com/fotos-premium/lago-de-montanha_1057389-38418.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Wilderness',
      category: 'nature',
      status: 'old',
      price: 2.63,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/praia-de-atuh-ao-nascer-do-sol-em-nusa-penida-bali-indonesia_335224-342.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Awe',
      category: 'nature',
      status: 'old',
      price: 5.33,
    },
    {
      img: 'https://img.freepik.com/fotos-premium/cena-tranquila-de-reflexao-de-montanha-ao-entardecer-generative-ai_974732-206.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Solace',
      category: 'nature',
      status: 'old',
      price: 3.33,
    },
    {
      img: 'https://img.freepik.com/fotos-premium/uma-montanha-azul-e-refletida-em-um-lago-com-montanhas-cobertas-de-neve_901748-3.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Enchanted',
      category: 'nature',
      status: 'old',
      price: 2.33,
    },
    {
      img: 'https://img.freepik.com/fotos-gratis/paisagem-natural-com-areia-preta-na-praia_23-2151380354.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Mirage',
      category: 'nature',
      status: 'old',
      price: 0.55,
    },
    {
      img: 'https://img.freepik.com/fotos-premium/fundo-do-lago-de-montanha_853558-45738.jpg?size=626&ext=jpg&ga=GA1.1.1901405476.1711371805&semt=ais',
      title: 'Sunrise',
      category: 'nature',
      status: 'old',
      price: 0.35,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2024-04-08/co9ngole878c73cnddf0/f1e6dd9b27a4269874608e5dae3945cecb24c40b_high.webp',
      title: 'Astro Purr',
      category: 'cat',
      status: 'old',
      price: 1.23,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-06-30/39938790010949/566dbc53a0edd63c94073a5c3d77e41fd2edd535_low.webp',
      title: 'Cosmo Cat',
      category: 'cat',
      status: 'old',
      price: 1.12,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-09-18/17499171746487301/1c439668d0cfa76d63d12dea9ab6925f5734bf10_low.webp',
      title: 'Space Paws',
      category: 'cat',
      status: 'old',
      price: 1.74,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2024-01-04/cmb2f35e878c73ejlch0/3177f45ac66a49cc9e2222a23d7bff5ae996cff1_high.webp',
      title: 'Future Whisker',
      category: 'cat',
      status: 'old',
      price: 1.73,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-07-25/48994788917317/29837befcc8dbed077673508a49b0586422104ba_low.webp',
      title: 'Galactic Tabby',
      category: 'cat',
      status: 'old',
      price: 0.99,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-09-19/17550780222434309/d7d390897b68b9d3062ce0d483f5bc74ed7fc98d_low.webp',
      title: 'Cyber Kitty',
      category: 'cat',
      status: 'old',
      price: 1.81,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-07-28/49887573405765/115a24af7cfb3af4d840cb39c631efd5b59453f5_low.webp',
      title: 'Astro Meow',
      category: 'cat',
      status: 'old',
      price: 1.44,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-09-30/18563818037713925/87f25ecb4541b7e8d8ace7dffd6a7f99d3f4af14_low.webp',
      title: 'Astro Cat',
      category: 'cat',
      status: 'old',
      price: 0.22,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-08-04/52253030051909/11fc01413e5394e73404bb68cbb423616362efaf_low.webp',
      title: 'Techno Claw',
      category: 'cat',
      status: 'old',
      price: 1.22,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-06-25/38132168446021/a808fb94fbca849fe0792df18d29080c2977bd41_low.webp',
      title: 'Robo Whiskers',
      category: 'cat',
      status: 'old',
      price: 1.33,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-09-03/16125907227911173/5fb48074a4adcb34e9c1dd9e4049577581297959_low.webp',
      title: 'Stellar Stalker',
      category: 'cat',
      status: 'new',
      price: 0.5,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-09-27/18272278350409733/74dbc06ccc437115d0877a70c2112a47ac495cf2_low.webp',
      title: 'Quantum Purr',
      category: 'cat',
      status: 'new',
      price: 1.55,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-11-20/23196415657310213/8601ab4b71b0b807ab2d4645d4df97d85c900062_low.webp',
      title: 'Nebula Ninja',
      category: 'cat',
      status: 'new',
      price: 0.34,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-06-04/30762028965957/ab60a6508e1a56c1e0126d58f8e3fd3ea00d5dbb_low.webp',
      title: 'Star Stride',
      category: 'cat',
      status: 'new',
      price: 0.33,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-09-01/15925005507424261/73376a91403dfd1f18ca55c06e49f4463bf8fc61_low.webp',
      title: 'Space Suit Paw',
      category: 'cat',
      status: 'new',
      price: 10.33,
    },
    {
      img: 'https://image.cdn2.seaart.ai/static/2ca062d79513a7fcdaeb92782d0da583/20230731/04e44acbb26f64236e0f114f277f253e_low.webp',
      title: 'Cosmo Cuddle',
      category: 'cat',
      status: 'new',
      price: 2.33,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-06-30/39944532287557/6e3b2024ebcc60462235a3b6e719930b8ab6269b_low.webp',
      title: 'Astro Pounce',
      category: 'cat',
      status: 'new',
      price: 1.45,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-05-26/27480914075717/3db1e5315641b78f27ff834c89dc92730c997bdf_low.webp',
      title: 'Techno Tail',
      category: 'cat',
      status: 'new',
      price: 1.34,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-07-18/46364742537285/a16a90a5a99c1d0b18951178785a21b4f13a66f6_low.webp',
      title: 'Galactic Glance',
      category: 'cat',
      status: 'new',
      price: 1.13,
    },
    {
      img: 'https://image.cdn2.seaart.ai/2023-08-29/15688782534713349/c3bb4d8685eb364e456015654efb68e5b5c61c18_low.webp',
      title: 'Cyber Leap',
      category: 'cat',
      status: 'new',
      price: 1.23,
    },
  ];

  membershipCollection = [
    {
      title: 'Silver',
      titleDescription: 'Lorem ipsum dolor sit amet. Assumenda, magnam enim.',
      priceForMonth: 29,
      priceForYear: 290,
      advantage1: 'Lorem ipsum dolor sit amet.',
      advantage2: 'Lorem ipsum dolor sit amet.',
      advantage3: 'Lorem ipsum dolor sit amet.',
      advantage4: 'Lorem ipsum dolor sit amet.',
      advantage5: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Gold',
      titleDescription:
        'Lorem ipsum dolor, voluptates harum. Sapiente magnam enim.',
      priceForMonth: 79,
      priceForYear: 790,
      advantage1: 'Lorem ipsum dolor sit amet.',
      advantage2: 'Lorem ipsum dolor sit amet.',
      advantage3: 'Lorem ipsum dolor sit amet.',
      advantage4: 'Lorem ipsum dolor sit amet.',
      advantage5: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Platinum',
      titleDescription:
        'Lorem. Assumenda, voluptates harum. Sapiente magnam enim.',
      priceForMonth: 199,
      priceForYear: 1990,
      advantage1: 'Lorem ipsum dolor sit amet.',
      advantage2: 'Lorem ipsum dolor sit amet.',
      advantage3: 'Lorem ipsum dolor sit amet.',
      advantage4: 'Lorem ipsum dolor sit amet.',
      advantage5: 'Lorem ipsum dolor sit amet.',
    },
  ];
}
