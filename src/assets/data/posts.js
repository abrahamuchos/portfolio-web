/**
 * @typedef {Object} Post
 * @property {number} id - This is the unique identifier for the post and determine order of posts
 * @property {string} title
 * @property {string} subtitle
 * @property {string} description
 * @property {string} content -HTML content
 * @property {string} slug
 * @property {string} date
 * @property {string} header
 * @property {Array<{name: string, icon: string}>} stacks
 * @property {Array<{id: string, alt: string, src: string, [caption]: string }>} images
 */
import myFirstPost from "./posts/myFirstPost.js";
import suiteUPCM from "./posts/SuiteUPCM.js";


/**
 * Posts Array
 * @type Array<Post> posts
 */
export const posts = [
  {
    id: 1,
    title: "El Latido Silencioso de un Problema: La Historia Detrás de Suite UPCM",
    slug: "el-latido-silencioso-de-un-problema-la-historia-detras-de-suite-upcm",
    subtitle: suiteUPCM.subtitle,
    header: suiteUPCM.header,
    description: suiteUPCM.description,
    date: suiteUPCM.date,
    stacks: suiteUPCM.stacks,
    images: suiteUPCM.images,
    content: suiteUPCM.content
  },
  {
    id: 2,
    title: "My second post",
    slug: "my-second-post",
    subtitle: myFirstPost.subtitle,
    header: myFirstPost.header,
    description: myFirstPost.description,
    date: myFirstPost.date,
    stacks: myFirstPost.stacks,
    images: myFirstPost.images,
    content: myFirstPost.content
  },
  {
    id: 3,
    title: "My third post",
    subtitle: "This is my third post",
    description: "This is my third post",
    content: "This is my third post",
    slug: "my-third-post",
    date: "2021-01-01",
    header: '/src/assets/images/posts/image-post.png',
    images: myFirstPost.images,
    stacks: [
      {name: 'Laravel', icon: 'laravel-color-logo'},
      {name: 'Laravel', icon: 'laravel-color-logo'},
      {name: 'PostgreSQL', icon: 'react-color-logo'},
      {name: 'Bootstrap', icon: 'bootstrap-color-logo'},
      {name: 'SCSS', icon: 'sass-color-logo'},
      {name: 'Trello', icon: 'trello-color-logo'},
      {name: 'Git', icon: 'git-color-logo'},
    ],
  },
  {
    id: 4,
    title: "My fourth post",
    subtitle: "This is my fourth post",
    description: "This is my fourth post",
    content: "This is my fourth post",
    slug: "my-fourth-post",
    date: "2021-01-01",
    header: '/src/assets/images/posts/image-post.png',
    images: myFirstPost.images,
    stacks: [
      {name: 'Laravel', icon: 'laravel-color-logo'},
      {name: 'Laravel', icon: 'laravel-color-logo'},
      {name: 'PostgreSQL', icon: 'react-color-logo'},
      {name: 'Bootstrap', icon: 'bootstrap-color-logo'},
      {name: 'SCSS', icon: 'sass-color-logo'},
      {name: 'Trello', icon: 'trello-color-logo'},
      {name: 'Git', icon: 'git-color-logo'},
    ],
  },
  {
    id: 5,
    title: "My fifth post",
    subtitle: "This is my fifth post",
    description: "This is my fifth post",
    content: "This is my fifth post",
    slug: "my-fifth-post",
    date: "2021-01-01",
    header: '/src/assets/images/posts/image-post.png',
    images: myFirstPost.images,
    stacks: [
      {name: 'Laravel', icon: 'laravel-color-logo'},
      {name: 'Laravel', icon: 'laravel-color-logo'},
      {name: 'PostgreSQL', icon: 'react-color-logo'},
      {name: 'Bootstrap', icon: 'bootstrap-color-logo'},
      {name: 'SCSS', icon: 'sass-color-logo'},
      {name: 'Trello', icon: 'trello-color-logo'},
      {name: 'Git', icon: 'git-color-logo'},
    ],
  },
  {
    id: 6,
    title: "My sixth post",
    subtitle: "This is my sixth post",
    description: "This is my sixth post",
    content: "This is my sixth post",
    slug: "my-sixth-post",
    date: "2021-01-01",
    header: '/src/assets/images/posts/image-post.png',
    images: myFirstPost.images,
    stacks: [
      {name: 'Laravel', icon: 'laravel-color-logo'},
      {name: 'Laravel', icon: 'laravel-color-logo'},
      {name: 'PostgreSQL', icon: 'react-color-logo'},
      {name: 'Bootstrap', icon: 'bootstrap-color-logo'},
      {name: 'SCSS', icon: 'sass-color-logo'},
      {name: 'Trello', icon: 'trello-color-logo'},
      {name: 'Git', icon: 'git-color-logo'},
    ],
  },
  {
    id: 7,
    title: "My seventh post",
    subtitle: "This is my seventh post",
    description: "This is my seventh post",
    content: "This is my seventh post",
    slug: "my-seventh-post",
    date: "2021-01-01",
    header: '/src/assets/images/posts/image-post.png',
    images: myFirstPost.images,
    stacks: [
      {name: 'Laravel', icon: 'laravel-color-logo'},
      {name: 'Laravel', icon: 'laravel-color-logo'},
      {name: 'PostgreSQL', icon: 'react-color-logo'},
      {name: 'Bootstrap', icon: 'bootstrap-color-logo'},
      {name: 'SCSS', icon: 'sass-color-logo'},
      {name: 'Trello', icon: 'trello-color-logo'},
      {name: 'Git', icon: 'git-color-logo'},
    ],
  },
];