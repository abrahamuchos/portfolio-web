import React, { useRef } from "react";
import { motion } from "motion/react";
import Slider from "react-slick";

import Stack from "../Stack.jsx";
import ProjectControls from "../ProjectControls.jsx";
import { posts } from "../../assets/data/posts.js";

import iconLeft from "../../assets/icons/left-minimal-white.svg";
import iconRight from "../../assets/icons/right-minimal-white.svg";
import imgHeader from "../../assets/images/projects/comgrafic/header/header-comgrafic-compress.png";
import imgMacHome from "../../assets/images/projects/comgrafic/content/mac-display-macbook-home.png";
import imgMacPrint from "../../assets/images/projects/comgrafic/content/Macbook - Services Print.png";
import imgMacContactUs from "../../assets/images/projects/comgrafic/content/MacBook - Contact Us.png";
import imgMacContactMaps from "../../assets/images/projects/comgrafic/content/Macbook - Contact us Maps.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Comgrafic() {
  let sliderRef = useRef(null);
  const post = posts.find(post => post.id === 4);
  const stacks = [
    {name: 'Laravel', icon: 'laravel-color-logo.png'},
    {name: 'MySQL', icon: 'mysql-color-logo.png'},
    {name: 'Bootstrap', icon: 'bootstrap-color-logo.png'},
    {name: 'SCSS', icon: 'sass-color-logo.png'},
    {name: 'Trello', icon: 'trello-color-logo.png'},
    {name: 'Slack', icon: 'slack-color-logo.png'},
  ];

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 1.01,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.01,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }


  /**
   * Handle prev to carousel
   */
  const handlePrev = () => {
    sliderRef.slickPrev();
  }

  /**
   * Handle next to carousel
   */
  const handleNext = () => {
    sliderRef.slickNext();
  }


  return (
    <>
      {/*Header and intro*/}
      <section className='wrap'>
        <h1 className='heading-1 mb-2.5'>Comgrafic su Presencia Digital</h1>
        <p className='mb-8'>2024</p>
        <h2 className="heading-3">
          Este proyecto consistió en la creación de la nueva página web para Comgrafic, una reconocida empresa de
          Barcelona con más de 35 años de trayectoria en servicios de preimpresión, impresión y encuadernación. La
          necesidad de una renovación surgió porque su sitio web anterior no reflejaba la totalidad de sus capacidades
          y
          presentaba limitaciones clave que obstaculizaban sus operaciones y comunicación con clientes.
        </h2>
        <Stack stacks={stacks} className="mt-8 mb-10"/>
      </section>

      <section className='wrap'>
        <img src={imgHeader} alt="header-comgrafic-web" className='rounded-lg mb-8 w-full'/>
        <div className="content-center mt-10">
          <motion.p
            className='w-full post-paragraph text-center md:w-[550px] lg:w-[570px]'
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{duration: 0.6, delay: 0.7, ease: "easeOut"}}
          >
            El principal problema a resolver era la <span className="highlight">obsolescencia</span> de la web
            existente, que <span className="highlight">no se adaptaba a las necesidades</span> actuales de Comgrafic.
            Su
            sitio web anterior no solo estaba desactualizado, sino que también limitaba su capacidad para mostrar todo
            su <span className="highlight">potencial</span> y <span
            className="highlight">comunicarse</span> eficazmente
            con sus clientes.
          </motion.p>
        </div>
      </section>
      {/*End Header and intro*/}

      {/*Desafíos y Objetivos*/}
      <section className='wrap mt-32'>
        <h2 className="heading-2 mb-10">
          Desafíos y Objetivos.<br/>
          A la orden del día.
        </h2>

        <div className='grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-32'>
          <p className='post-paragraph'>
            Un requisito fundamental era la integración de funcionalidades
            <span className="highlight"> multilenguaje</span>, permitiendo que el sitio estuviera disponible en
            <span className="highlight"> Español</span>,
            <span className="highlight"> Catalán</span>,<span className="highlight"> Francés</span> e
            <span className="highlight"> Inglés</span> para servir a su diversa base de clientes.
          </p>

          <p className='post-paragraph'>
            La empresa buscaba integrar un <span className="highlight">blog</span> para potenciar su estrategia de
            contenidos y reflejar de manera completa y moderna su extenso <span className="highlight">catálogo de servicios</span>.
            El objetivo era, por tanto, desarrollar una <span className="highlight">plataforma web robusta</span>,
            multilenguaje y que representara fielmente la identidad visual y la oferta de Comgrafic.
          </p>
        </div>

        <div className="flex justify-center mt-20">
          <img src={imgMacHome} alt="image-display-home"
               className='w-full md:max-w-[550px] lg:max-w-[850px] xl:max-w-[980px]'/>
        </div>
      </section>
      {/*End Desafíos y Objetivos*/}


      {/*Mi Rol y Contribuciones*/}
      <section className="wrap mt-36">
        <div className="flex flex-col items-center">
          <h2 className="heading-2 w-full text-center">
            Mi Rol y Contribuciones.
          </h2>

          <p className="content-medium post-paragraph text-center mt-8">
            Como <span className="highlight">desarrollador web</span> principal en este proyecto de cliente, mis
            responsabilidades abarcaron diversas áreas clave.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-16 md:gap-7 lg:grid-cols-3 lg:mt-20">
          <p className="post-paragraph text-left">
            <span className="highlight">Programación</span><br/>
            Fui responsable del completo desarrollo del sitio bajo el framework Laravel 5.8 junto al motor de
            plantillas Blade.
          </p>
          <p className="post-paragraph text-left">
            <span className="highlight">Arquitectura de Base de Datos</span><br/>
            Diseñé y gestioné la base de datos bajo el motor MySQL, incluyendo la migración necesaria de datos
            preexistentes.
          </p>
          <p className="post-paragraph text-left">
            <span className="highlight">Implementación Multilenguaje</span><br/>
            Desarrollé la arquitectura necesaria para soportar los cuatro idiomas requeridos, un componente crítico
            para el alcance global del cliente.
          </p>
          <p className="post-paragraph text-left">
            <span className="highlight">Comunicación con el Cliente</span><br/>
            Participé activamente en reuniones con el equipo de Comgrafic para entender sus necesidades, alinear el
            desarrollo con sus expectativas y asegurar que el producto final fuera exactamente lo que requerían.
          </p>
          <p className="post-paragraph text-left">
            <span className="highlight">Colaboración con Diseño</span><br/>
            Trabajé estrechamente con el equipo de diseño para asegurar que el desarrollo técnico se alineara
            perfectamente con la estética única y el branding particular de Comgrafic.
          </p>
        </div>
      </section>
      {/*End Mi Rol y Contribuciones*/}

      {/* Card Carousel*/}
      <section className='mt-16'>
        <div className="slider-container">
          <Slider ref={slider => {
            sliderRef = slider
          }} {...carouselSettings} >

            <div className="px-1 lg:px-4">
              <div className="card tertiary ">
                <div className="h-[132px] px-8 pt-5 mb-5 sm:h-[100px] md:pl-12 md:pt-9 lg:pl-20">
                  <h4 className='post-paragraph highlight'>
                    Servicios disponibles.<br/>
                    Permite mostrar todos los servicios que ofrece Comgrafic.
                  </h4>
                </div>

                <div className="flex justify-center">
                  <img src={imgMacPrint} alt="calendar"
                       className='w-[290px] sm:w-[415px] md:w-[550px] lg:w-[630px] xl:w-[847px]'/>
                </div>
              </div>
            </div>

            <div className="px-1 lg:px-4">
              <div className="card tertiary ">
                <div className="h-[132px] px-8 pt-5 mb-5 sm:h-[100px] md:pl-12 md:pt-9 lg:pl-20">
                  <h4 className='post-paragraph highlight'>
                    Contacto.<br/>
                    Permite a los posibles clientes contactar a Comgrafic.
                  </h4>
                </div>
                <div className="flex justify-end">
                  <img src={imgMacContactUs} alt="calendar"
                       className='pl-8 w-[300px] sm:w-[415px] md:w-[550px] lg:w-[620px] xl:w-[820px]'/>
                </div>
              </div>
            </div>

            <div className="px-1 lg:px-4">
              <div className="card tertiary ">
                <div className="h-[132px] px-8 pt-5 mb-5 sm:h-[100px] md:pl-12 md:pt-9 lg:pl-20">
                  <h4 className='post-paragraph highlight'>
                    Mapas, claro que sí.<br/>
                    También si nos desea visitar, le mostramos donde nos puede ubicar.
                  </h4>
                </div>
                <img src={imgMacContactMaps} alt="calendar"
                     className='pr-8 w-[300px] sm:w-[415px] md:w-[550px] lg:w-[620px] xl:w-[812px]'/>
              </div>
            </div>
          </Slider>
        </div>

        {/*Carousel Controls*/}
        <div className="wrap flex justify-end gap-5">
          <div className="carousel-controls p-2.5">
            <a onClick={handlePrev}>
              <img src={iconLeft} alt="left-icon" className='w-[20px] h-[20px] text-white'/>
            </a>
          </div>
          <div className="carousel-controls p-2.5">
            <a onClick={handleNext}>
              <img src={iconRight} alt="right-icon" className='w-[20px] h-[20px] text-white'/>
            </a>
          </div>
        </div>
        {/*End Carousel Controls*/}
      </section>
      {/* End Card Carousel*/}


      <ProjectControls className='mt-32 mb-16' postId={post.id}/>
    </>
  );
}



