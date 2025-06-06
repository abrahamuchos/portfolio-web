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
import myFirstPost from "./posts/myFirstPost.js";
import restaurantApi from "./posts/RestaurantTdd.js";

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
    title: "Restaurant API:  Explorando TDD en el Desarrollo Back-end",
    slug: "restaurant-api-explorando-tdd-en-el-desarrollo-back-end",
    subtitle: restaurantApi.subtitle,
    header: restaurantApi.header,
    description: restaurantApi.description,
    date: restaurantApi.date,
    stacks: restaurantApi.stacks,
    images: restaurantApi.images,
    content: restaurantApi.content
  },
  {
    id: 4,
    order: 4,
    title: "My fourth post",
    slug: "my-fourth-post",
    subtitle: myFirstPost.subtitle,
    header: myFirstPost.header,
    description: myFirstPost.description,
    date: myFirstPost.date,
    stacks: myFirstPost.stacks,
    images: myFirstPost.images,
    content: myFirstPost.content
  },
  {
    id: 5,
    order: 5,
    title: "My fifth post",
    slug: "my-fifth-post",
    subtitle: myFirstPost.subtitle,
    header: myFirstPost.header,
    description: myFirstPost.description,
    date: myFirstPost.date,
    stacks: myFirstPost.stacks,
    images: myFirstPost.images,
    content: myFirstPost.content
  },
  {
    id: 6,
    order: 6,
    title: "My sixth post",
    slug: "my-sixth-post",
    subtitle: myFirstPost.subtitle,
    header: myFirstPost.header,
    description: myFirstPost.description,
    date: myFirstPost.date,
    stacks: myFirstPost.stacks,
    images: myFirstPost.images,
    content: myFirstPost.content
  },
  {
    id: 7,
    order: 7,
    title: "My seventh post",
    slug: "my-seventh-post",
    subtitle: myFirstPost.subtitle,
    header: myFirstPost.header,
    description: myFirstPost.description,
    date: myFirstPost.date,
    stacks: myFirstPost.stacks,
    images: myFirstPost.images,
    content: myFirstPost.content
  },
  {
    id: 8,
    order: 8,
    title: "My eighth post",
    slug: "my-eighth-post",
    subtitle: myFirstPost.subtitle,
    header: myFirstPost.header,
    description: myFirstPost.description,
    date: myFirstPost.date,
    stacks: myFirstPost.stacks,
    images: myFirstPost.images,
    content: myFirstPost.content
  },
  {
    id: 9,
    order: 9,
    title: "My ninth post",
    slug: "my-ninth-post",
    subtitle: myFirstPost.subtitle,
    header: myFirstPost.header,
    description: myFirstPost.description,
    date: myFirstPost.date,
    stacks: myFirstPost.stacks,
    images: myFirstPost.images,
    content: myFirstPost.content
  },
];