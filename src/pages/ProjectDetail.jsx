import React from "react";
import { useParams } from "react-router";

import { posts } from "../assets/data/posts.js";
import SeparatorCommand from "../components/SeparatorCommand.jsx";
import Stack from "../components/Stack.jsx";
import ContactCard from "../components/ContactCard.jsx";
import ProjectControls from "../components/ProjectControls.jsx";
import ImageGallery from "../components/ImageGallery.jsx";


export default function ProjectDetail() {
  const {slug} = useParams();
  const post = posts.find((post) => post.slug === slug);
  console.log('Post >>', post)


  if (!post) {
    return <div>Project not found</div>;
  }


  return (
    <>
    <div className='relative mb-10 lg:mb-12'>
      <SeparatorCommand>
        php artisan project:list
      </SeparatorCommand>
    </div>

      <article>
        <h1 className='heading-2 mb-2.5'>{post.title}</h1>
        {/*<span className='mb-8'>{post.date ? `Fecha de desarrollo: ${post.date}` : ''}</span>*/}
        <p className='mb-8'>{post.date ?? ''}</p>
        <h2 className="heading-3">{post.description}</h2>

        <Stack stacks={post.stacks} className="mt-8 mb-10"/>

        <div dangerouslySetInnerHTML={{__html: post.content}} className='mt-12'></div>
        {/*<div className="relative w-full overflow-hidden pb-[56.25%] lg:w-[800px] lg:h-[450px] lg:mx-auto lg:pb-0">*/}
        {/*  <iframe*/}
        {/*    className="absolute top-0 left-0 w-full h-full"*/}
        {/*    src="https://www.youtube.com/embed/GQJVM0MzyK4?si=6jZNIiaJVQEfa-K7"*/}
        {/*    title="YouTube video player"*/}
        {/*    frameBorder="0"*/}
        {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
        {/*    referrerPolicy="strict-origin-when-cross-origin"*/}
        {/*    allowFullScreen*/}
        {/*  ></iframe>*/}
        {/*</div>*/}

      </article>

      {/*Gallery*/
      }
      {
        post.images.length ?
          <section className='w-full mt-10'>
            <ImageGallery images={post.images}/>
          </section>
          : null
      }
      {/*End Gallery*/
      }

      <ProjectControls className='mt-32 mb-16' postId={post.id}/>

      {/*Contact*/
      }
      <div className='relative my-10 lg:mb-12'>
        <SeparatorCommand>
          php artisan contact:list
        </SeparatorCommand>
      </div>

      <section className='w-full mt-16 mb-20'>
        <ContactCard/>
      </section>
      {/*End Contact*/}

    </>
  );
}



