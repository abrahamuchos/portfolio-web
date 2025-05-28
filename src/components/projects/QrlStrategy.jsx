import React, { useRef } from "react";
import { motion, useInView } from "motion/react"
import Stack from "../Stack.jsx";
import ImageGallery from "../ImageGallery.jsx";
import ProjectControls from "../ProjectControls.jsx";
import VideoOnScroll from "../VideoOnScroll.jsx";


import { posts } from "../../assets/data/posts.js";
import contactUsMockup from '../../assets/images/projects/qrl-strategy/contact-us-macbook-fullscreen.png';
import roadmapMockup from '../../assets/images/projects/qrl-strategy/roadmap-macos-screen.png';
import videoHome from '../../assets/videos/projects/qrl-strategy/home-video.mp4';
import imgSafariScreen0 from '../../assets/images/projects/qrl-strategy/safari-max-screen-0.png';
import imgSafariScreen1 from '../../assets/images/projects/qrl-strategy/safari-max-screen-1.png';
import imgSafariScreen2 from '../../assets/images/projects/qrl-strategy/safari-max-screen-2.png';
import imgSafariScreen3 from '../../assets/images/projects/qrl-strategy/safari-max-screen-3.png';
import imgSafariScreen4 from '../../assets/images/projects/qrl-strategy/safari-max-screen-4.png';
import imgSafariScreen5 from '../../assets/images/projects/qrl-strategy/safari-max-screen-5.png';


export default function QrlStrategy() {
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true, amount: 1});
  const post = posts.find(post => post.id === 2);

  const stacks = [
    {name: 'React', icon: 'react-color-logo.png'},
    {name: 'Tailwindcss', icon: 'tailwindcss-color-logo.png'},
    {name: 'Vite Js', icon: 'Vitejs-color-logo.png'},
  ];

  const images = [
    {
      id: 1,
      alt: 'home-page',
      src: '/images/posts/qrl-strategy/gallery/home - desktop.png',
      thumbnail: '/images/posts/qrl-strategy/thumbnail/home - desktop_thumbnail_1024x640.jpg',
      width: 1440,
      height: 5312,
      caption: 'Home - QRL Strategy'
    },
    {
      id: 2,
      alt: 'home-mobile',
      src: '/images/posts/qrl-strategy/gallery/home - mobile.png',
      thumbnail: '/images/posts/qrl-strategy/thumbnail/Shot_thumbnail_1024x640.jpg',
      width: 425,
      height: 6332,
      caption: 'Home Mobile - El sitio web de QRL Strategy es responsive'
    },
    {
      id: 3,
      alt: 'menu-dropdown',
      src: '/images/posts/qrl-strategy/gallery/home - menu - desktop.png',
      thumbnail: '/images/posts/qrl-strategy/thumbnail/home - menu - desktop_thumbnail_1024x640.jpg',
      width: 1424,
      height: 809,
      caption: 'Menu con todas las vistas para los servicios de QRL Strategy'
    },
    {
      id: 4,
      alt: 'estrategia-sindical-image',
      src: '/images/posts/qrl-strategy/gallery/estrategia sindical - desktop.png',
      thumbnail: '/images/posts/qrl-strategy/thumbnail/estrategia sindical - desktop_thumbnail_1024x640.jpg',
      width: 1440,
      height: 7583,
      caption: 'Estrategia sindical, uno de los servicios de QRL Strategy'
    },
    {
      id: 5,
      alt: 'roadmap-servicios',
      src: '/images/posts/qrl-strategy/gallery/roadmap - desktop.png',
      thumbnail: '/images/posts/qrl-strategy/thumbnail/roadmap - desktop_thumbnail_1024x640.jpg',
      width: 1440,
      height: 4876,
      caption: 'Roadmap, uno de los servicios de QRL Strategy para potenciar a sus clientes'
    },
    {
      id: 6,
      alt: 'quienes-somos',
      src: '/images/posts/qrl-strategy/gallery/quienes - desktop.png',
      thumbnail: '/images/posts/qrl-strategy/thumbnail/quienes - desktop_thumbnail_1024x640.jpg',
      width: 1440,
      height: 4325,
      caption: 'Quienes somos, vista para conocer la vision y misión de QRL Strategy'
    },
    {
      id: 7,
      alt: 'contactanos',
      src: '/images/posts/qrl-strategy/gallery/contactanos - desktop.png',
      thumbnail: '/images/posts/qrl-strategy/thumbnail/contactanos - desktop_thumbnail_1024x640.jpg',
      width: 1440,
      height: 1691,
      caption: 'Formulario de contacto para atraer nuevos clientes para QRL Strategy'
    },
    {
      id: 8,
      alt: 'contactanos-mobile',
      src: '/images/posts/qrl-strategy/gallery/contactanos - mobile.png',
      thumbnail: '/images/posts/qrl-strategy/thumbnail/Shot2_thumbnail_1024x640.jpg',
      width: 425,
      height: 2140,
      caption: 'Formulario de contacto, también en versión mobile. Toda la web es responsive'
    },
  ];

  return (
    <>
      <article>
        <h1 className='heading-1 mb-2.5'>Mi Aventura con QRL Strategy</h1>
        <p className='mb-8'>2025</p>
        <h2 className="heading-3">
          Se abordó el desafío de crear la nueva presencia digital para QRL Strategy, una consultora especializada en
          derecho laboral. El proyecto implicó construir un sitio web moderno y funcional, brindando asesoría integral
          durante toda la fase de desarrollo (incluyendo UI/UX y mejores prácticas técnicas) para posicionarlos como
          referentes en su sector.
        </h2>

        <Stack stacks={stacks} className="mt-8 mb-10"/>

        <div>
          {/*Header and intro*/}
          <section>
            <img src="/images/posts/qrl-strategy/header/home-bg-compress.webp" alt="qrl-home-screen"
                 className='rounded-lg mb-8 w-full'/>
            <div className="content-center mt-10">
              <motion.p
                className='content-small post-paragraph text-center'
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false}}
                transition={{duration: 0.6, delay: 0.7, ease: "easeOut"}}
              >
                QRL Strategy, <span className="highlight">una consultora visionaria especializada en derecho laboral y
                gestión de conflictos</span>, se preparaba para su lanzamiento en 2025 con una propuesta de valor
                sólida.
                <br/>Fue entonces cuando me contactaron con un desafío emocionante: <span className="highlight">construir
              una nueva cara online</span> que estuviera a la altura de sus ambiciones.
              </motion.p>
            </div>
          </section>
          {/*End Header and intro*/}


          {/*El desafío*/}
          <section className='mt-32'>
            <h2 className="heading-2 mb-10">
              El Desafío.
            </h2>

            <div className="w-full relative h-[850px] overflow-hidden ">
              <motion.img
                src={imgSafariScreen1}
                alt="macbook-safari-screen-1"
                className='w-[320px] absolute top-[27%] left-1/2 -translate-x-full translate-y-full z-10'
                initial='initial'
                variants={{
                  initial: {transform: "translate(-100%, 100%)"},
                  animate: {transform: "translate(-190%, 100%)"}
                }}
                animate={isInView ? "animate" : "initial"}
                transition={{duration: 3.0, ease: [.01,.47, .99, .33]}}
              />
              <motion.img
                src={imgSafariScreen2}
                alt="macbook-safari-screen"
                className='w-[450px] absolute top-0 left-1/2 -translate-x-full translate-y-3/4 z-10'
                initial='initial'
                variants={{
                  initial: {transform: "translate(-100%, 80%)"},
                  animate: {transform: "translate(-116%, 40%)"}
                }}
                animate={isInView ? "animate" : "initial"}
                transition={{duration: 3.2, ease: [.01,.47, .99, .33]}}
              />
              <motion.img
                src={imgSafariScreen3}
                alt="macbook-safari-screen"
                className='w-[320px] absolute top-0 left-1/2 translate-x-[19%] translate-y-[150%] z-10'
                initial='initial'
                variants={{
                  initial: {transform: "translate(19%, 150%)"},
                  animate: {transform: "translate(25%, 35%)"}
                }}
                animate={isInView ? "animate" : "initial"}
                transition={{duration: 3.7, ease: [.01,.47, .99, .33]}}
              />
              <motion.img
                src={imgSafariScreen4}
                alt="macbook-safari-screen"
                className='w-[450px] absolute top-0 left-1/2 translate-x-[10%] translate-y-[100%] z-20'
                initial='initial'
                variants={{
                  initial: {transform: "translate(10%, 100%)"},
                  animate: {transform: "translate(60%, 75%)"}
                }}
                animate={isInView ? "animate" : "initial"}
                transition={{duration: 3.5, ease: [.01,.47, .99, .33]}}
              />
              <motion.img
                src={imgSafariScreen5}
                alt="macbook-safari-screen"
                className='w-[350px] absolute top-0 left-1/2 translate-x-[10%] translate-y-[245%] z-10'
                initial='initial'
                variants={{
                  initial: {transform: "translate(10%, 245%)"},
                  animate: {transform: "translate(100%, 245%)"}
                }}
                animate={isInView ? "animate" : "initial"}
                transition={{duration: 3.2, ease: [.01,.47, .99, .33]}}
              />
              <img
                ref={imgRef}
                src={imgSafariScreen0}
                alt="macbook-safari-screen"
                className='w-[600px] absolute top-0 left-1/2 -translate-x-1/2 translate-y-full z-40'
              />


            </div>


            <div className="content-left mt-8">
              <p className='content-medium post-paragraph'>
                Este emocionante reto venía acompañado de particularidades importantes. Parte fundamental de mi labor no
                solo se centró en la construcción técnica del sitio, sino también en <span className="highlight"> establecer
                una comunicación clara y efectiva</span>, educándolos sobre las mejores prácticas en desarrollo web y
                asesorándolos desde los principios fundamentales de la experiencia de usuario (UI/UX) para asegurar que
                el resultado final no solo fuera <span className="highlight">visualmente atractivo</span>, sino también
                <span className="highlight">funcional</span> y fácil de usar para su público objetivo.
              </p>
            </div>
          </section>
          {/*End El desafío*/}

          {/*La meta*/}
          <section className='mt-64'>
            <h2 className="heading-2 mb-10">
              La Meta.
            </h2>
            <div className="w-full flex justify-center">
              <img src={contactUsMockup} alt="img-text" className='w-[950px]'/>
            </div>
            <div className="content-center mt-5">
              <motion.p
                className='content-small post-paragraph text-center'
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false}}
                transition={{duration: 0.6, delay: 0.7, ease: "easeOut"}}
              >
                El objetivo era claro: <span className="highlight"> crear un sitio web atractivo </span> y funcional
                que
                no solo mostrará los servicios de QRL Strategy, sino que también la posicionará como un referente
                indiscutible en su sector. La misión era doble: <span className="highlight">captar la atención de potenciales clientes </span> (empresas
                y sindicatos en busca de soluciones estratégicas) y <span className="highlight">generar una confianza palpable </span> en
                su experiencia y profesionalismo.
              </motion.p>
            </div>

            <div className="mt-20">
              <h3 className='heading-3 mb-5'>Un Proceso Colaborativo y Detallado.</h3>
              <div className="content-left">
                <p className='content-medium post-paragraph'>
                  <span className="highlight">El equipo de diseño plasmó su creatividad en Figma</span>, creando
                  visualizaciones detalladas de cada vista tanto para la versión móvil como para la de escritorio. Este
                  enfoque 'vista por vista' no solo nos permitió evaluar minuciosamente cada aspecto del diseño desde
                  las etapas iniciales, sino que también facilitó la división del trabajo en tareas pequeñas y
                  manejables, permitiéndonos iterar y avanzar vista por vista de una manera similar a la <span
                  className="highlight">metodología Scrum</span>.
                </p>
              </div>
              <div className="flex justify-center mt-16 mb-7">
                <iframe width="800" height="450" style={{'border': '1px solid rgba(0, 0, 0, 0.1)'}}
                        src="https://embed.figma.com/design/tNNFCe6DGdLac49dEdozYS/QRL-Web---Client?node-id=0-1&embed-host=share"
                        allowFullScreen>
                </iframe>
              </div>
              <div className="content-left">
                <p className='content-medium post-paragraph'>
                  Cada propuesta era revisada en conjunto por el equipo de diseño y por mí, <span className="highlight">asegurando la coherencia visual</span> y
                  la viabilidad técnica. Posteriormente, estas visualizaciones eran presentadas al cliente en reuniones
                  donde yo actuaba como el punto de contacto principal. Este ciclo de <span className="highlight">presentación, verificación y feedback por parte del cliente</span> fue
                  crucial para alinear el diseño final con su visión y expectativas.
                </p>
              </div>
            </div>
          </section>
          {/*End La meta*/}

          {/*Mi Rol en la Travesía Digital.*/}
          <section className="mt-40">
            <h2 className="heading-2 mb-10 text-center">
              Mi Rol en la Travesía Digital.
            </h2>
            <div className="content-center mt-10">
              <motion.p
                className='w-[690px] post-paragraph text-center'
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false}}
                transition={{duration: 0.6, delay: 0.7, ease: "easeOut"}}
              >
                Como desarrollador web, asumí el rol de arquitecto digital de este proyecto. Mi principal
                responsabilidad fue la <span
                className="highlight"> creación de un sitio web responsive y dinámico</span>, construido sobre la
                robustez de <span className="highlight">React</span> y la flexibilidad de <span className="highlight">React Router</span>.
                Participé activamente en cada etapa del desarrollo, desde la concepción inicial hasta el último
                detalle
                de la implementación.
              </motion.p>
            </div>

            <div className="card tertiary mt-10">
              <img src={roadmapMockup} alt="mac-img"/>
            </div>

            <div className="mt-10">
              <h3 className='heading-3 mb-5'>Construyendo el Camino. Mis Contribuciones Clave.</h3>
              <div className="content-light-left">
                <div className="grid grid-cols-2 gap-x-32 gap-y-10">

                  <p className='post-paragraph-2'>
                    <span className="highlight">Entendiendo la Visión</span><br/>
                    Inicié el proyecto entendiendo la esencia de QRL Strategy a través de entrevistas con el cliente. Mi
                    objetivo principal era comprender a fondo sus necesidades, sus preferencias estéticas y la visión
                    que
                    tenían para su marca.
                  </p>

                  <p className='post-paragraph-2'>
                    <span className="highlight">Puente entre el Cliente y el Diseño</span><br/>
                    Inicié el proyecto entendiendo la esencia de QRL Strategy a través de entrevistas con el cliente. Mi
                    objetivo principal era comprender a fondo sus necesidades, sus preferencias estéticas y la visión
                    que
                    tenían para su marca.
                  </p>

                  <p className='post-paragraph-2'>
                    <span className="highlight">Inspiración y Dirección Creativa</span><br/>
                    Para asegurar que el diseño final estuviera alineado con la visión de QRL Strategy, investigué y
                    presenté referencias visuales que sirvieran de guía e inspiración para los diseñadores, obteniendo
                    así un feedback enriquecedor entre el equipo de diseño y el cliente.
                  </p>

                  <p className='post-paragraph-2'>
                    <span className="highlight">Análisis de Requisitos y Soluciones Técnicas</span><br/>
                    Paralelamente al proceso de diseño, me enfoqué en analizar los requisitos funcionales del sitio web
                    y diseñar las soluciones técnicas necesarias para garantizar un rendimiento óptimo y una experiencia
                    de usuario fluida.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className='heading-3 mb-5'>Atención al Detalle (Enfoque en el Desarrollo).</h3>
              <div className="content-light-left">
                <div className="grid grid-cols-2 gap-x-32 gap-y-10">

                  <p className='post-paragraph-2'>
                    <span className="highlight">Selección Tecnológica Estratégica</span><br/>
                    Opté por React como la base para la interfaz de usuario debido a su arquitectura basada en
                    componentes, su excelente rendimiento y su capacidad para escalar en un futuro. Complementariamente,
                    React Router se convirtió en la solución ideal para gestionar la navegación.
                  </p>

                  <p className='post-paragraph-2'>
                    <span className="highlight">Código Impecable</span><br/>
                    Una vez que el diseño estuvo definido, mi atención se centró en la implementación. Revisé
                    meticulosamente cada línea de código para garantizar su calidad, eficiencia y la ausencia de
                    errores.
                  </p>

                  <p className='post-paragraph-2'>
                    <span className="highlight">Experiencia Consistente</span><br/>
                    Aseguré que el sitio web se viera y funcionará de manera impecable tanto en mobile, tablet y
                    desktop.
                  </p>

                  <p className='post-paragraph-2'>
                    <span className="highlight">Toques de Magia</span><br/>
                    Implementé micro interacciones y animaciones sutiles para enriquecer la experiencia del usuario y
                    hacerla más memorable.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* End  Mi Rol en la travesía digital.*/}

          {/*  El Resultado */}
          <section className="mt-40">
            <div className="w-full flex justify-center">
              {/*<img src={videoTest} alt="img-video-screen" className='rounded-2xl w-[980px]'/>*/}
              {/*<video src={videoHome} autoPlay muted controls={false} loop className='rounded-2xl w-[980px]'></video>*/}
              <VideoOnScroll src={videoHome} className={'rounded-2xl w-[980px]'} />
            </div>

            <h2 className="heading-2 mt-12 mb-10 text-center">
              El Resultado.
            </h2>

            <div className="content-center mt-10">
              <motion.p
                className='w-[675px] post-paragraph text-center'
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: false}}
                transition={{duration: 0.6, delay: 0.7, ease: "easeOut"}}
              >
                Un <span className="highlight">sitio web moderno, intuitivo y visualmente atractivo</span> que sienta
                las bases para el exitoso lanzamiento de QRL Strategy en 2025. Esta plataforma digital no solo cumple
                con los objetivos iniciales de <span
                className="highlight">atraer nuevos clientes y posicionar la marca</span>,
                sino que también <span className="highlight">facilita la comunicación</span> y
                <span className="highlight"> genera la confianza</span> que una consultora de su calibre merece.
              </motion.p>
            </div>

            <div className="w-full justify-center flex mt-14 gap-10">
              <a href="https://qrl-web.onrender.com/" className="tabs">Live Demo</a>
              <a href="https://github.com/abrahamuchos/qrl-web/" className="tabs">GitHub Repositorio</a>
            </div>


          </section>
          {/*  End El Resultado */}
        </div>


        {/*Gallery*/}
        {
          images.length ?
            <section className='w-full mt-20'>
              <ImageGallery images={images}/>
            </section>
            : ''
        }
        {/*End Gallery*/}
      </article>

      <ProjectControls className='mt-32 mb-16' postId={post.id}/>

    </>
  );
}



