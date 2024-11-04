export const blogPosts = [
    {
      id: 1,
      title: 'NOSTR : Simple "Truc" de plus ou Revolution des Réseaux Sociaux ?',
      pubDate: '2024-08-14 11:59:28',
      link: 'https://medium.com/@0xkodit/nostr-simple-truc-de-plus-ou-r%C3%A9volution-des-r%C3%A9seaux-sociaux-de13cdfe22fc',
      image: 'nostr.jpeg',
      author: 'Kodit',
    },
    {
      id: 2,
      title: 'Détection de masques africains par Machine Learning : vers la préservation numérique du patrimoine',
      pubDate: '2024-07-20 10:30:00',
      link: 'https://medium.com/@0xkodit/d%C3%A9tection-de-masques-africains-par-machine-learning-vers-la-pr%C3%A9servation-num%C3%A9rique-du-patrimoine-8a9840efadd1',
      image: 'mask1.jpeg',
      author: 'Kodit',
    },
    {
      id: 3,
      title: 'Développeurs Ivoiriens face au Web3 : s’adapter ou disparaître',
      pubDate: '2024-06-15 14:45:00',
      link: 'https://medium.com/@0xkodit/d%C3%A9veloppeurs-ivoiriens-face-au-web3-sadapter-ou-dispara%C3%AEtre-a094b9be851e',
      image: 'ivoiro.jpeg',
      author: 'Kodit',
    },
    {
      id: 4,
      title: 'Leçons de fourmis pour des microservices intelligents',
      pubDate: '2024-05-01 09:15:00',
      link: 'https://medium.com/@0xkodit/le%C3%A7ons-de-fourmis-pour-des-microservices-intelligents-a0e8a15e9b98',
      image: 'ants_pic.jpeg',
      author: 'Kodit',
    },
    {
      id: 5,
      title: 'Trilemme Blockchain : État des Lieux et Perspectives',
      pubDate: '2024-04-10 16:20:00',
      link: 'https://medium.com/@0xkodit/trilemme-blockchain-%C3%A9tat-des-lieux-et-perspectives-2a2e1ad7d9f3',
      image: 'trilemne.jpeg',
      author: 'Kodit',
    },
    {
      id: 6,
      title: '5 Cas d’Utilisation d’Ethereum en Côte d’Ivoire',
      pubDate: '2024-03-25 11:30:00',
      link: 'https://medium.com/@0xkodit/5-cas-dutilisation-d-ethereum-en-c%C3%B4te-d-ivoire-8b50d519e854',
      image: 'image1.jpeg',
      author: 'Kodit',
    },
    {
      id: 7,
      title: 'L’IA et la Créativité: Explorer l’Intersection de l’Art et de la Technologie',
      pubDate: '2024-02-18 13:40:00',
      link: 'https://medium.com/@0xkodit/lia-et-la-cr%C3%A9ativit%C3%A9-explorer-l-intersection-de-l-art-et-de-la-technologie-a686f3af323d',
      image: 'image2.jpeg',
      author: 'Kodit',
    },
    {
      id: 8,
      title: 'Finance Décentralisée — Solana à l’école de la Nature',
      pubDate: '2024-01-30 15:20:00',
      link: 'https://medium.com/@0xkodit/finance-d%C3%A9centralis%C3%A9e-solana-%C3%A0-lecole-de-la-nature-e9d3d3ad3928',
      image: 'image3.jpeg',
      author: 'Kodit',
    },
    {
        id: 9,
        title: 'Démystifier l IA: Comprendre les bases et ses applications',
        pubDate: '2024-01-15 10:00:00',
        link: 'https://medium.com/@0xkodit/d%C3%A9mystifier-lia-comprendre-les-bases-et-ses-applications-fa6edb6c983b',
        image: 'image4.jpg',
        author: 'Kodit'
      }
  ];
  
  // Sort posts by date, most recent first
  export const getSortedPosts = () => {
    return [...blogPosts].sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  };