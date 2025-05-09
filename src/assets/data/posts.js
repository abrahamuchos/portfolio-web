import myFirstPost from "./posts/myFirstPost.js";

/**
 * @typedef {Object} Post
 * @property {string} title
 * @property {string} subtitle
 * @property {string} description
 * @property {string} content -HTML content
 * @property {string} slug
 * @property {string} date
 * @property {string} header
 * @property {Array<{name: string, icon: string}>} stacks
 * @property {Array<string|null>} images
 */
/**
 *
 * @type Array<Post> posts
 */
export const posts = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim eros tincidunt nulla tincidunt laoreet.  ",
    slug: "my-first-post",
    subtitle: myFirstPost.subtitle,
    header: myFirstPost.header,
    description: myFirstPost.description,
    date: myFirstPost.date,
    stacks: myFirstPost.stacks,
    images: myFirstPost.images,
    content: myFirstPost.content
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim eros tincidunt nulla tincidunt laoreet. Sed dignissim eros tincidunt nulla tincidunt laoreet.",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim eros tincidunt nulla tincidunt laoreet. Sed dignissim eros tincidunt nulla tincidunt laoreet.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ac metus sed porttitor. Sed eu maximus ligula, ac molestie augue.",
    content: "This is my second post",
    slug: "my-second-post",
    date: "2021-01-01",
    header: '/src/assets/images/posts/image-post.png',
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
    title: "My third post",
    subtitle: "This is my third post",
    description: "This is my third post",
    content: "This is my third post",
    slug: "my-third-post",
    date: "2021-01-01",
    header: '/src/assets/images/posts/image-post.png',
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
    title: "My fourth post",
    subtitle: "This is my fourth post",
    description: "This is my fourth post",
    content: "This is my fourth post",
    slug: "my-fourth-post",
    date: "2021-01-01",
    header: '/src/assets/images/posts/image-post.png',
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
    title: "My fifth post",
    subtitle: "This is my fifth post",
    description: "This is my fifth post",
    content: "This is my fifth post",
    slug: "my-fifth-post",
    date: "2021-01-01",
    header: '/src/assets/images/posts/image-post.png',
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
    title: "My sixth post",
    subtitle: "This is my sixth post",
    description: "This is my sixth post",
    content: "This is my sixth post",
    slug: "my-sixth-post",
    date: "2021-01-01",
    header: '/src/assets/images/posts/image-post.png',
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
    title: "My seventh post",
    subtitle: "This is my seventh post",
    description: "This is my seventh post",
    content: "This is my seventh post",
    slug: "my-seventh-post",
    date: "2021-01-01",
    header: '/src/assets/images/posts/image-post.png',
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