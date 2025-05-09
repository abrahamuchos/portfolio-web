import React from "react";
import { useParams } from "react-router";

import { posts } from "../assets/data/posts.js";
import SeparatorCommand from "../components/SeparatorCommand.jsx";
import Stack from "../components/Stack.jsx";
import ContactCard from "../components/ContactCard.jsx";
import { ImageGallery } from "react-image-grid-gallery";
import ProjectControls from "../components/ProjectControls.jsx";


export default function ProjectDetail() {
  const {slug} = useParams();
  const post = posts.find((post) => post.slug === slug);


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
        <h1 className='heading-2 mb-8'>{post.title}</h1>
        <h2 className="heading-3">{post.description}</h2>
        <Stack stacks={post.stacks} className="mt-8"/>
        <div dangerouslySetInnerHTML={{__html: post.content}} className='mt-12'></div>
      </article>

      {/*Gallery*/}
      {post.images.length ?
        <section className='w-full mt-10'>
          <ImageGallery imagesInfoArray={post.images}/>
        </section>
        : null
      }
      {/*End Gallery*/}

      <ProjectControls className='mt-32 mb-16' postId={post.id}/>

      {/*Contact*/}
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



