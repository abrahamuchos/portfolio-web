import React from 'react';
import Hero from "../components/Hero.jsx";
import SeparatorCommand from "../components/SeparatorCommand.jsx";

export default function Home() {
  return (
    <>
      <Hero/>

      <div className='relative my-10 lg:mt-0 lg:mb-12'>
        <SeparatorCommand>
          php artisan serve
        </SeparatorCommand>
      </div>

      <section>
        <p className='mb-2.5'>Sobre mi</p>
        <h2 className='heading-2 mb-2.5'>Hola, soy Abraham.</h2>
        <p className="paragraph">
          Desarrollador Full-stack apasionado, con experiencia en el diseño e implementación de soluciones funcionales
          utilizando Laravel y React. Mi objetivo es colaborar en un equipo dinámico, aplicando metodologías ágiles para
          mantener y mejorar aplicaciones back-end con PHP y front-end con JavaScript. Soy un colaborador proactivo, con
          habilidades analíticas y de liderazgo, enfocado en implementar metodologías ágiles para entregar proyectos de
          alta calidad. Pretendo formar parte de un equipo innovador , con el objetivo de contribuir al desarrollo de
          software inteligente y escalable, con un enfoque en aplicaciones que utilicen inteligencia artificial.
        </p>
      </section>

      <div className='relative mt-10 lg:mb-12'>
        <SeparatorCommand>
          php artisan show:skills
        </SeparatorCommand>
      </div>

    </>
  );
}