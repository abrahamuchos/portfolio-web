import React from "react";
import { motion } from "motion/react";

import Stack from "../Stack.jsx";
import ProjectControls from "../ProjectControls.jsx";

import { posts } from "../../assets/data/posts.js";
import imgHeader from "../../assets/images/projects/restaurant-tdd/header/header-code-bg-compress.jpeg";
import imgMacDevices from "../../assets/images/projects/restaurant-tdd/content/mac-devices-screen-code.png";
import imgScreenCode from "../../assets/images/projects/restaurant-tdd/content/screens-code.png";


export default function RestaurantTdd() {
  const post = posts.find(post => post.id === 3);
  console.log(post);
  const stacks = [
    {name: 'Laravel', icon: 'laravel-color-logo.png'},
    {name: 'SQLite', icon: 'sqlite-color-logo.png'},
    {name: 'PHPUnit', icon: 'phpunit-color-logo.png'}, // Todo: agrega w-[56px] en la imagen
  ];

  return (
    <>
    {/*Header and intro*/}
      <section className='wrap'>
        <h1 className='heading-1 mb-2.5'>Explorando TDD en el Back-end</h1>
        <p className='mb-8'>2024</p>
        <h2 className="heading-3">
          API REST robusta utilizando Laravel, siguiendo la metodología de Test Driven Development (TDD).
          Esta API está diseñada para la gestión integral de restaurantes, permitiendo a los usuarios administrar múltiples
          establecimientos, agregar y organizar una variedad de platos, gestionar menús
          de forma dinámica y, además, generar códigos QR personalizados para facilitar el acceso a la información.
        </h2>
        <Stack stacks={stacks} className="mt-8 mb-10"/>
      </section>

      <section className='wrap'>
        <img src={imgHeader} alt="code-restaurant-tdd-screen" className='rounded-lg mb-8 w-full'/>
        <div className="content-center mt-10">
          <motion.p
            className='w-full post-paragraph text-center md:w-[700px] lg:w-[760px]'
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{duration: 0.6, delay: 0.7, ease: "easeOut"}}
          >
            En mi camino como <span className="highlight">desarrollador back-end</span>, creo firmemente en la
            importancia de la <span className="highlight">práctica constante</span> y la exploración de
            <span className="highlight"> nuevas metodologías</span>. Es por ello que emprendí un proyecto personal,
            una API REST para la gestión de restaurantes desarrollada con Laravel. Su valor reside en el
            <span className="highlight"> desafío autoimpuesto</span> de dominar la metodología
            <span className="highlight"> Test-Driven Development (TDD)</span> y en la oportunidad de compartir este
            aprendizaje con otros.
          </motion.p>
        </div>
      </section>
    {/*End Header and intro*/}

      {/*Construyendo con Propósito y Metodología.*/}
      <section className="wrap mt-40">
        <div className="w-full flex justify-center">
          <img src={imgMacDevices} alt='Mac devices' className='w-full md:w-[700px] lg:w-[900px]'/>
        </div>

        <div className="mt-20">
          <h2 className="heading-2 w-full mb-10">
            Construyendo con Propósito y Metodología.
          </h2>
          <div className="content-left">
            <p className="content-medium post-paragraph">
              El objetivo principal de esta iniciativa fue sumergirme de lleno en la filosofía de TDD. Para ello,
              concebí
              una <span className="highlight">API robusta</span> y funcional para la <span className="highlight">gestión integral de un restaurante</span>.
              Esta API permite digitalizar el <span className="highlight">menú</span>, generar códigos QR para facilitar
              el acceso, llevar un control detallado de los <span className="highlight">platos</span> y gestionar la
              autenticación de <span className="highlight">usuarios</span>. Mi rol principal fue como desarrollador
              back-end, utilizando la potencia y la flexibilidad del framework <span
              className="highlight">Laravel 11</span> para dar vida a esta solución.
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-end my-20">
        <img src={imgScreenCode} alt="scree-code" className='w-full md:w-[400px] lg:w-[650px]'/>
      </div>
      {/*End Construyendo con Propósito y Metodología.*/}

      {/*Un Cambio de Paradigma Revelador.*/}
      <section className="wrap">
        <h2 className="heading-2 w-full mb-10">
          Un Cambio de Paradigma Revelador.
        </h2>
        <div className="content-left mb-20">
          <p className="content-small post-paragraph">
            La adopción de TDD representó un cambio significativo en mi flujo de trabajo habitual. Inicialmente, la idea
            de escribir las pruebas antes de la implementación del código me generó una sensación de programar <span
            className="highlight">"al revés"</span>. Sin embargo, esta perspectiva pronto se transformó en una poderosa
            herramienta que me brindó una <span className="highlight">mayor confianza</span> en la <span
            className="highlight">calidad</span> y <span className="highlight">estabilidad</span> del código.
          </p>
        </div>
        {/*End Un Cambio de Paradigma Revelador.*/}
      </section>

      <section className="wrap mt-48 w-full">
        <div className="flex flex-col items-center">
          <h2 className="heading-2 text-center mb-10">
            Más Allá de la Zona de Confort.
          </h2>
          <div className="w-full md:w-[700px] lg:w-[701px]">
            <p className='post-paragraph text-center'>
              Mi principal motivación para embarcarme en este "ghost project" fue la búsqueda constante de <span
              className="highlight">crecimiento</span> y la necesidad de mantenerme actualizado con las últimas
              tendencias y <span className="highlight">metodologías de desarrollo</span>. Quería salir de mi zona de
              confort y experimentar de primera mano los beneficios de TDD, una práctica que había estudiado pero que
              anhelaba aplicar en un proyecto real. Esta iniciativa refleja mi espíritu
              <span className="highlight"> autodidacta</span> y mi compromiso con la
              <span className="highlight"> mejora continua</span> como profesional.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center mt-14 gap-10 md:flex-row">
            <a href="https://documenter.getpostman.com/view/6168326/2sAYQZGrZR" className="tabs w-[190px] md:w-auto">
              Documentación API - Postman
            </a>
            <a href="https://github.com/abrahamuchos/restaurant-tdd-api" className="tabs w-[190px] md:w-auto">
              GitHub Repositorio
            </a>
          </div>

        </div>


      </section>


      <ProjectControls className='mt-32 mb-16' postId={post.id}/>
    </>
  );
}



