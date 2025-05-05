import React from "react";
import Card from "./Card.jsx";

import projectImg from '../assets/images/posts/image-post.png'

export default function Projects() {

  return (
    <section>
      <p className='mb-2.5'>Proyectos</p>
      <h2 className='heading-2 mb-10'>De la idea a la acción: mis proyectos destacados.</h2>

      <div className='w-full mb-5'>
        <Card
          variant='primary'
          title='Suite UPCM'
          subtitle='Laravel, React, Tailwindcss'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ac metus sed porttitor.  Sed eu maximus ligula, ac molestie augue. '
          image={projectImg}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3">
        <Card
          variant='secondary'
          title='Suite UPCM'
          subtitle='Laravel, React, Tailwindcss'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ac metus sed porttitor.  Sed eu maximus ligula, ac molestie augue. '
          image={projectImg}
        />
        <Card
          variant='secondary'
          title='Suite UPCM'
          subtitle='Laravel, React, Tailwindcss'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ac metus sed porttitor.  Sed eu maximus ligula, ac molestie augue. '
          image={projectImg}
        />
        <Card
          variant='secondary'
          title='Suite UPCM'
          subtitle='Laravel, React, Tailwindcss'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ac metus sed porttitor.  Sed eu maximus ligula, ac molestie augue. '
          image={projectImg}
        />
      </div>


    </section>
  );
}



