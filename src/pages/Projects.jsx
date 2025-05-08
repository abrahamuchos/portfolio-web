import React from 'react';
import SeparatorCommand from "../components/SeparatorCommand.jsx";
import { posts } from "../assets/data/posts.js";
import Card from "../components/Card.jsx";
import ContactCard from "../components/ContactCard.jsx";

export default function Projects() {

  const firstPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <>
      <div className='relative mb-10 lg:mb-12'>
        <SeparatorCommand>
          php artisan project:list
        </SeparatorCommand>
      </div>

      <section className='mb-10'>
        <div className='w-full mb-5'>
          <Card
            variant='primary'
            title={firstPost.title}
            subtitle={firstPost.subtitle}
            description={firstPost.description}
            image={firstPost.header}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3">
          {remainingPosts.map((post, index) => (
            <Card
              key={index}
              variant='secondary'
              title={post.title}
              subtitle={post.subtitle}
              description={post.description}
              image={post.header}
            />
          ))}
        </div>

      </section>

      <div className='relative mb-10 lg:mb-12'>
        <SeparatorCommand>
          php artisan contact:list
        </SeparatorCommand>
      </div>

      <section className='w-full mt-16 mb-20'>
        <ContactCard/>
      </section>

    </>
  );
}