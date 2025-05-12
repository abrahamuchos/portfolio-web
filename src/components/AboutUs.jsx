import React from "react";

/**
 *
 * @param {string} id - Html section attribute
 * @returns {Element}
 * @constructor
 */
export default function AboutUs({id}) {

  return (
    <section id={id}>
      <p className='mb-2.5'>Sobre Mí</p>
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
  );
}



