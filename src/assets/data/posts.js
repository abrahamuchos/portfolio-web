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
    slug: "my-third-post",
    subtitle: myFirstPost.subtitle,
    header: myFirstPost.header,
    description: myFirstPost.description,
    date: myFirstPost.date,
    stacks: myFirstPost.stacks,
    images: myFirstPost.images,
    content: myFirstPost.content
  },
  {
    id: 4,
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