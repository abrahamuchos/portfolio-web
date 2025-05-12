import React from "react";
import Card from "./Card.jsx";

import { posts } from "../assets/data/posts.js";
import projectImg from '../assets/images/posts/image-post.png'

export default function Projects() {
  const firstPost = posts[0];
  const remainingPosts = posts.slice(1, 4);

  return (
    <section>
      <p className='mb-2.5'>Proyectos</p>
      <h2 className='heading-2 mb-10'>De la idea a la acción: mis proyectos destacados.</h2>

      <div className='w-full mb-5'>
        <Card
          variant='primary'
          title={firstPost.title}
          subtitle={firstPost.subtitle}
          description={firstPost.description}
          image={firstPost.header}
          link={`/projects/${firstPost.slug}`}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3">
        {remainingPosts.map(post => (
          <Card
            key={post.id}
            variant='secondary'
            title={post.title}
            subtitle={post.subtitle}
            description={post.description}
            image={post.header}
            link={`/projects/${post.slug}`}
          />
        ))}
      </div>


    </section>
  );
}



