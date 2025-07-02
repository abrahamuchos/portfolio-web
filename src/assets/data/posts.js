/**
 * @typedef {Object} Post
 * @property {number} id - This is the unique identifier for the post and determine order of posts
 * @property {string} title
 * @property {string} subtitle
 * @property {string} description
 * @property {string} content -HTML content
 * @property {string} slug
 * @property {string} date
 * @property {{src: string, card: string, alt: string}} header
 * @property {Array<{name: string, icon: string}>} stacks
 * @property {Array<{id: number, alt: (string|null), src: string, thumbnail: string|null, width: number, height: number, [caption: string]}>} images
 */
import { getHeaderImageURL } from "../../utils/image.js";


/**
 * Posts Array
 * @type Array<Post> posts
 */
export const posts = [
  {
    id: 1,
    order: 1,
    title: "El Latido Silencioso de un Problema",
    slug: "el-latido-silencioso-de-un-problema",
    subtitle: 'Laravel, React y PostgreSQL',
    header: {
      src: getHeaderImageURL('suite-upcm', 'home-screen-with-bg-card-compress.webp'),
      card: getHeaderImageURL('suite-upcm', 'image-post_thumbnail_900x500.jpg', true),
      alt: 'Suite UPCM'
    },
    description: 'La Suite UPCM es un sistema de información integral que optimiza la gestión de pacientes cardiometabólicos, mejorando la atención médica especializada a través de la digitalización de procesos clave. Este proyecto representa un avance significativo en la eficiencia y calidad del cuidado cardiovascular.',
  },
  {
    id: 2,
    order: 2,
    title: "Mi Aventura con QRL Strategy",
    slug: "mi-aventura-con-qrl-strategy",
    subtitle: 'React, ViteJs, React Router y Tailwind CSS',
    header: {
      src: '/images/posts/qrl-strategy/header/home-bg-compress.webp',
      card: '/images/posts/qrl-strategy/header/home-bg_thumbnail_900x500.jpg',
      alt: 'QRL Strategy Web Site'
    },
    description: 'Crear la nueva presencia digital para startup QRL Strategy',
  },
  {
    id: 3,
    order: 3,
    title: "Explorando TDD en el Back-end",
    slug: "explorando-tdd-en-el-back-end",
    subtitle: "Api Rest Bajo la Metodología TDD en Laravel",
    header: {
      src: getHeaderImageURL('restaurant-tdd', 'header-code-bg-compress.jpeg'),
      card: getHeaderImageURL('restaurant-tdd', 'header-code-bg_thumbnail_900x500.jpg', true),
      alt: 'Restaurant TDD'
    },
    description: 'Esta API está diseñada para la gestión integral de restaurantes, permitiendo a los usuarios administrar múltiples\n' +
      'establecimientos, agregar y organizar una variedad de platos.',

  },
  {
    id: 4,
    order: 4,
    title: "Comgrafic su Presencia Digital",
    slug: "comgrafic-su-presencia-digital",
    subtitle: "Laravel, Blade, Bootstrap y MySql",
    header: {
      src: getHeaderImageURL('comgrafic', 'header-comgrafic-compress.png'),
      card: getHeaderImageURL('comgrafic', 'header-comgrafic_thumbnail_900x500.jpg', true),
      alt: 'Comgrafic Web'
    },
    description: 'Desarrollo completo de la nueva web para Comgrafic, empresa líder en impresión, con un robusto sistema multilenguaje y un diseño que refleja su identidad única.',

  },
  {
    id: 5,
    order: 5,
    title: "Mercado del Arte en Venezuela",
    slug: "mercado-del-arte-en-venezuela",
    subtitle: "Laravel, Blade, Bootstrap y Postgre",
    header: {
      src: getHeaderImageURL('diverxo', 'header-diverxo-1x-compress.webp'),
      card: getHeaderImageURL('diverxo', 'header-diverxo-1x_thumbnail_900x500.jpg', true),
      alt: 'Diverxo Art gallery'
    },
    description: 'En un mercado con una profunda riqueza cultural pero con una limitada presencia digital, nació una idea audaz: crear el primer e-commerce de arte en Venezuela. ',
  },
];