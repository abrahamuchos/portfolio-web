import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Slider from "react-slick";

import Stack from "../Stack.jsx";
import ProjectControls from "../ProjectControls.jsx";
import { posts } from "../../assets/data/posts.js";

import iconLeft from "../../assets/icons/left-minimal-white.svg";
import iconRight from "../../assets/icons/right-minimal-white.svg";
import imgHeader from "../../assets/images/projects/diverxo/header/header-diverxo-1x-compress.png";
import imgProDisplayHome from "../../assets/images/projects/diverxo/content/pro-display-home.png";
import imgMacbookHome from "../../assets/images/projects/diverxo/content/macbook-home.png";
import imgIphoneHome from "../../assets/images/projects/diverxo/content/iphone-home.png";
import imgScreenShop from "../../assets/images/projects/diverxo/content/screen-shop.png";
import imgScreenProductDetail from "../../assets/images/projects/diverxo/content/screen-products-detail.png";
import imgScreenShopFilter from "../../assets/images/projects/diverxo/content/screen-shop-filter.png";
import imgScreenShoppingCart from "../../assets/images/projects/diverxo/content/screen-shoping-cart.png";
import imgScreenProductDetailShop from "../../assets/images/projects/diverxo/content/screen-product-detail-shop.png";
import imgMacbookIphoneLogin from "../../assets/images/projects/diverxo/content/macbook-iphone-login.png";
import imgMacbookAdminArtistEdit from "../../assets/images/projects/diverxo/content/macbook-admin-artis-edit.png";
import imgMacbookAdminAuction from "../../assets/images/projects/diverxo/content/macbook-admin-auction.png";
import imgMacbookAdminDashboard from "../../assets/images/projects/diverxo/content/macbook-admin-dashboard.png";
import imgMacbookAdminProducts from "../../assets/images/projects/diverxo/content/macbook-admin-products.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Diverxo() {
  const imgRef = useRef(null);
  let sliderRef = useRef(null);
  const [viewport, setViewport] = useState(/**@type{string}**/ 'xs');
  const isInView = useInView(imgRef, {once: true, amount: 1});
  const post = posts.find(post => post.id === 5);
  const stacks = [
    {name: 'Laravel', icon: 'laravel-color-logo.png'},
    {name: 'PostgreSQL', icon: 'postgres-color-logo.png'},
    {name: 'Bootstrap', icon: 'bootstrap-color-logo.png'},
    {name: 'SCSS', icon: 'sass-color-logo.png'},
    {name: 'Trello', icon: 'trello-color-logo.png'},
    {name: 'Git', icon: 'git-color-logo.png'},
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
   * Positions for the iPhone Screen image in different viewports
   * @type {{xl: {initial: {x: string, y: string}, animate: {x: string, y: string}}, md: {initial: {x: string, y: string}, animate: {x: string, y: string}}, sm: {initial: {x: string, y: string}, animate: {x: string, y: string}}, xs: {initial: {x: string, y: string}, animate: {x: string, y: string}}, lg: {initial: {x: string, y: string}, animate: {x: string, y: string}}}}
   */
  const iphonePositions = {
    xs: {
      initial: {x: "-200%", y: "145%"},
      animate: {x: "-230%", y: "145%"}
    },
    sm: {
      initial: {x: "-200%", y: "175%"},
      animate: {x: "-250%", y: "175%"}
    },
    md: {
      initial: {x: "-200%", y: "142%"},
      animate: {x: "-285%", y: "142%"}
    },
    lg: {
      initial: {x: "-200%", y: "165%"},
      animate: {x: "-310%", y: "165%"}
    },
    xl: {
      initial: {x: "-200%", y: "196%"},
      animate: {x: "-340%", y: "196%"}
    },
  };

  /**
   * Positions for the MacBook image in different screen sizes.
   * @type {{xl: {initial: {x: string, y: string}, animate: {x: string, y: string}}, md: {initial: {x: string, y: string}, animate: {x: string, y: string}}, sm: {initial: {x: string, y: string}, animate: {x: string, y: string}}, xs: {initial: {x: string, y: string}, animate: {x: string, y: string}}, lg: {initial: {x: string, y: string}, animate: {x: string, y: string}}}}
   */
  const macbookPositions = {
    xs: {
      initial: {x: "-10%", y: "122%"},
      animate: {x: "10%", y: "122%"}
    },
    sm: {
      initial: {x: "-10%", y: "116%"},
      animate: {x: "1%", y: "116%"}
    },
    md: {
      initial: {x: "-10%", y: "121%"},
      animate: {x: "3%", y: "121%"}
    },
    lg: {
      initial: {x: "-10%", y: "116%"},
      animate: {x: "6%", y: "116%"}
    },
    xl: {
      initial: {x: "-10%", y: "116%"},
      animate: {x: "10%", y: "116%"}
    },
  };

  /**
   * @type {import('framer-motion').Variants}
   */
  const iphoneVariants = {
    initial: iphonePositions[viewport]?.initial,
    animate: iphonePositions[viewport]?.animate,
  };

  /**
   * @type {import('framer-motion').Variants}
   */
  const macbookVariants = {
    initial: macbookPositions[viewport]?.initial,
    animate: macbookPositions[viewport]?.animate,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setViewport('xs');
      } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
        setViewport('sm');
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setViewport('md');
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setViewport('lg');
      } else {
        setViewport('xl');
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <h1 className='heading-1 mb-2.5'>Mercado del Arte en Venezuela</h1>
        <p className='mb-8'>2019</p>
        <h2 className="heading-3">
          Diverxo Art Gallery, un proyecto concebido para un cliente visionario del sector artístico, con el objetivo
          de
          revolucionar la forma en que los amantes del arte descubren y adquieren obras únicas. No se trataba solo de
          vender arte en línea, sino de construir un ecosistema digital completo que ofreciera una experiencia de
          usuario integral y enriquecedora, posicionándose como el destino predilecto para coleccionistas y
          entusiastas
          en el país.
        </h2>
        <Stack stacks={stacks} className="mt-8 mb-10"/>
      </section>

      <section className='wrap'>
        <img src={imgHeader} alt="code-restaurant-tdd-screen" className='rounded-lg mb-8 w-full'/>
        <div className="content-center mt-10">
          <motion.p
            className='w-full post-paragraph text-center md:w-[500px] lg:w-[603px]'
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{duration: 0.6, delay: 0.7, ease: "easeOut"}}
          >
            Diverxo Art Gallery es un innovador <span className="highlight">e-commerce</span> diseñado para
            revolucionar
            la forma en que los amantes del arte <span className="highlight">descubren</span> y <span
            className="highlight">adquieren</span> obras únicas.
          </motion.p>
        </div>
      </section>
      {/* End Header and intro*/}

      {/* Brief */}

      {/*Devices animation*/}
      <div className='w-full absolute left-0 right-0 h-[490px] overflow-hidden md:h-[600px] lg:h-[850px]'>
        <img
          ref={imgRef}
          src={imgProDisplayHome}
          alt="prodisplay-home"
          className='w-[290px] absolute z-5 max-w-none top-0 left-1/2 -translate-x-[58%] translate-y-1/2
            sm:w-[330px] md:w-[400px] lg:w-[490px] xl:w-[550px]'
        />
        <motion.img
          src={imgIphoneHome}
          alt="iphone-home"
          className='w-[65px] absolute z-10 top-0 left-1/2
            md:w-[90px] lg:w-[100px]'
          initial='initial'
          variants={iphoneVariants}
          animate={isInView ? "animate" : "initial"}
          transition={{duration: 3.0, ease: [0.17, 0.84, 0.44, 1]}}
        />
        <motion.img
          src={imgMacbookHome}
          alt="macbook-home"
          className='w-[230px] absolute z-10 top-0 left-1/2 -translate-x-[10%] translate-y-[116%]
            sm:w-[270px] md:w-[320px] lg:w-[400px] xl:w-[450px]'
          initial='initial'
          variants={macbookVariants}
          animate={isInView ? "animate" : "initial"}
          transition={{duration: 3.0, ease: [0.17, 0.84, 0.44, 1]}}
        />
      </div>
      {/*End Devices animation*/}

      <section className="wrap mt-[500px] md:mt-[640px] lg:mt-[800px]">
        <p className='content-small post-paragraph'>
          Esta plataforma no solo ofrece una amplia selección de arte, sino que también proporciona una <span
          className="highlight">experiencia de usuario</span> integral y enriquecedora. Desde la seguridad de la <span
          className="highlight">autenticación</span> y la personalización de perfiles hasta la exploración detallada
          de <span className="highlight">productos</span> por <span className="highlight">categoría</span>, <span
          className="highlight">artista</span> o <span className="highlight">características especiales</span>,
          Diverxo
          Art Gallery se posiciona como un <span className="highlight">destino predilecto para coleccionistas y entusiastas del arte</span>.
        </p>
      </section>
      {/* End Brief */}

      {/* Para los Ojos que Buscan y las Manos que Crean. */}
      <section className="wrap mt-32 lg:mt-36">
        <h2 className="heading-2 w-full mb-16">
          Para los Ojos que Buscan y las Manos que Crean.<br/>
          ¿Para quién es Diverxo Art Gallery?
        </h2>

        <div className="flex flex-col gap-10 md:flex-row md:items-center lg:gap-20">
          <div className="w-full md:w-1/2">
            <ul className='flex flex-col gap-2.5 post-paragraph md:gap-8'>
              <li>
                <span className='highlight'>Coleccionistas de arte</span><br/>
                Que buscan una plataforma segura y fácil de usar para adquirir obras de arte exclusivas.
              </li>
              <li>
                <span className='highlight'>Artistas</span><br/>
                Que desean exhibir y vender sus creaciones a un público global.
              </li>
              <li>
                <span className='highlight'>Amantes del arte</span><br/>
                Que disfrutan explorando y aprendiendo sobre diversas formas de expresión artística.
              </li>
              <li>
                <span className='highlight'>Personas que buscan piezas únicas</span><br/>
                Para decorar sus espacios o invertir en arte.
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 ">
            <img src={imgScreenShop} alt="screen-shop" className='w-full'/>
          </div>
        </div>

        {/* Card*/}
        <div className="mt-16">
          <div className="flex flex-col gap-y-10 items-stretch md:flex-row sm:gap-x-2.5 lg:gap-x-5">
            <div className="flex flex-col flex-grow w-full md:flex-row md:w-[60%] ">
              <img src={imgScreenProductDetail} alt="screen-product-detail" className='w-full rounded-2xl'/>
              <div className="w-full mt-5 md:hidden">
                <span className="highlight">Coleccionistas de arte</span><br/>
                Que buscan una plataforma segura y fácil de usar para adquirir obras de arte exclusivas.
              </div>
            </div>

            <div className="flex flex-col flex-grow w-full md:flex-row md:w-[40%]">
              <img src={imgScreenShopFilter} alt="screen-shop-filter" className='w-full rounded-2xl'/>
              <div className="w-full mt-5 md:hidden">
                <span className="highlight">Coleccionistas de arte</span><br/>
                Que buscan una plataforma segura y fácil de usar para adquirir obras de arte exclusivas.
              </div>
            </div>
          </div>
          {/*MD Legend*/}
          <div className="hidden flex-col gap-y-10 md:flex md:flex-row md:gap-x-2.5 lg:gap-x-5">
            <div className="w-[60%] post-paragraph-2 mt-5 pr-5 md:pr-[10%] lg:pr-[20%]">
              <span className="highlight">Coleccionistas de arte</span><br/>
              Que buscan una plataforma segura y fácil de usar para adquirir obras de arte exclusivas.
            </div>

            <div className="w-[40%] post-paragraph-2 mt-5 pr-0 lg:pr-10">
              <span className="highlight">Coleccionistas de arte2</span><br/>
              Que buscan una plataforma segura y fácil de usar para adquirir obras de arte exclusivas.
            </div>
          </div>
          {/*End MD Legend*/}
        </div>
        {/* End Card*/}

        {/* Multi Card*/}
        <div className="mt-16">
          <div className="flex flex-col gap-y-10 items-stretch md:flex-row sm:gap-x-2.5 lg:gap-x-5">
            <div className="flex flex-col flex-grow w-full md:flex-row md:w-[40%]">
              <img src={imgScreenProductDetailShop} alt="screen-shop-filter" className='w-full rounded-2xl'/>
              <div className="w-full mt-5 md:hidden">
                <span className="highlight">Coleccionistas de arte</span><br/>
                Que buscan una plataforma segura y fácil de usar para adquirir obras de arte exclusivas.
              </div>
            </div>

            <div className="flex flex-col flex-grow w-full md:flex-row md:w-[60%] ">
              <img src={imgScreenShoppingCart} alt="screen-product-detail" className='w-full rounded-2xl'/>
              <div className="w-full mt-5 md:hidden">
                <span className="highlight">Coleccionistas de arte</span><br/>
                Que buscan una plataforma segura y fácil de usar para adquirir obras de arte exclusivas.
              </div>
            </div>
          </div>

          {/*MD Legend*/}
          <div className="hidden flex-col gap-y-10 md:flex md:flex-row md:gap-x-2.5 lg:gap-x-5">
            <div className="w-[40%] post-paragraph-2 mt-5 pr-0 lg:pr-10">
              <span className="highlight">Coleccionistas de arte2</span><br/>
              Que buscan una plataforma segura y fácil de usar para adquirir obras de arte exclusivas.
            </div>
            <div className="w-[60%] post-paragraph-2 mt-5 pr-5 md:pr-[10%] lg:pr-[20%]">
              <span className="highlight">Coleccionistas de arte</span><br/>
              Que buscan una plataforma segura y fácil de usar para adquirir obras de arte exclusivas.
            </div>
          </div>
          {/*End MD Legend*/}
        </div>
        {/* End Multi Card*/}
      </section>
      {/* End Para los Ojos que Buscan y las Manos que Crean. */}


      <section className="mt-32">
        <h2 className="heading-2 w-full text-center mb-10 mb-16">
          El Arte Detrás del Arte:<br/>
          Mi Pincelada Full-Stack.
        </h2>

        <div className="flex flex-col gap-10 md:items-center md:justify-center md:flex-row xl:gap-20">
          <div className="w-full md:w-2/5 lg:w-1/2">
            <img src={imgMacbookIphoneLogin} alt="macbook-iphone-login"/>
          </div>


          <div className="w/1-2 px-2 md:w-3/5 lg:pr-12">
            <p className="post-paragraph lg:pl-10 xl:pl-24">
              Como desarrollador full-stack, mi participación en Diverxo Art Gallery abarcó tanto el desarrollo
              del <span className="highlight">backend</span> como del <span className="highlight">frontend</span>. Este
              proyecto representó un desafío estimulante debido a su
              <span className="highlight"> enfoque innovador</span> y la necesidad de
              <span className="highlight"> optimizar la carga de imágenes</span> sin comprometer la
              <span className="highlight"> calidad visual</span> de las obras de arte.
            </p>
          </div>
        </div>

      {/* Entre mis responsabilidades */}
        <div className="wrap mt-20 lg:mt-28">
          <h4 className='heading-3 mb-7'>Entre mis responsabilidades se incluyeron</h4>

          <div className="grid grid-cols-1 gap-5 sm:px-10 md:grid-cols-2 md:gap-10 lg:px-20 xl:px-32 lg:gap-x-52">
            <div className="post-paragraph-2">
              <span className="highlight">Autenticación y Autorización</span><br/>
              Implementación de un sistema de autenticación seguro y gestión de perfiles de usuario.
            </div>
            <div className="post-paragraph-2">
              <span className="highlight">Productos y Filtrado</span><br/>
              Desarrollo de un catálogo de productos robusto con funcionalidades de búsqueda y filtrado avanzadas.
            </div>
            <div className="post-paragraph-2">
              <span className="highlight">Pasarela de pagos</span><br/>
              Integración de la plataforma de pagos Stripe para transacciones seguras y eficientes.
            </div>
            <div className="post-paragraph-2">
              <span className="highlight">Optimización de imágenes</span><br/>
              Optimización del rendimiento de la plataforma para garantizar una experiencia de usuario fluida y rápida.
            </div>
            <div className="post-paragraph-2">
              <span className="highlight">Subastas y control</span><br/>
              Desarrollo de una sección de subastas, donde los usuarios pueden ofertar y el administrador puede gestionar las mismas.
            </div>
            <div className="post-paragraph-2">
              <span className="highlight">Administrador</span><br/>
              Creación de un panel de administración intuitivo para la gestión de productos, pedidos, subastas y análisis de datos.
            </div>
          </div>
        </div>
      {/* End Entre mis responsabilidades */}
      </section>

      {/* Card Carousel*/}
      <section className='mt-16'>
        <div className="slider-container">
          <Slider ref={slider => {
            sliderRef = slider
          }} {...carouselSettings} >

            <div className="px-1 lg:px-4">
              <div className="card tertiary ">
                <div className="h-[165px] px-8 pt-5 mb-5 sm:h-[100px] md:h-[120px] md:pl-12 md:pt-9 lg:pl-20">
                  <h4 className='post-paragraph highlight'>
                    Administrador.<br/>
                    Panel de control para centralizar los datos y controles mas importantes.
                  </h4>
                </div>

                <div className="flex justify-center">
                  <img src={imgMacbookAdminDashboard} alt="macbook-admin-dashboard"
                       className='w-[290px] sm:w-[415px] md:w-[550px] lg:w-[630px] xl:w-[800px]'/>
                </div>
              </div>
            </div>

            <div className="px-1 lg:px-4">
              <div className="card tertiary ">
                <div className="h-[165px] px-8 pt-5 mb-5 sm:h-[100px] md:h-[120px] md:pl-12 md:pt-9 lg:pl-20">
                  <h4 className='post-paragraph highlight'>
                    Productos.<br/>
                    Permite tener una visión completa de todos las piezas de arte disponible en la tienda.
                  </h4>
                </div>
                <div className="flex justify-end">
                  <img src={imgMacbookAdminProducts} alt="macbook-admin-products"
                       className='pl-8 w-[300px] sm:w-[415px] md:w-[570px] lg:w-[650px] xl:w-[820px]'/>
                </div>
              </div>
            </div>

            <div className="px-1 lg:px-4">
              <div className="card tertiary ">
                <div className="h-[165px] px-8 pt-5 mb-5 sm:h-[100px] md:h-[120px] md:pl-12 md:pt-9 lg:pl-20">
                  <h4 className='post-paragraph highlight'>
                    Subastas.<br/>
                    Mantiene el control de todas las piezas en subasta.
                  </h4>
                </div>

                <div className="flex justify-center">
                  <img src={imgMacbookAdminAuction} alt="macbook-admin-auction"
                       className='w-[290px] sm:w-[415px] md:w-[512px] lg:w-[580px] xl:w-[736px]'/>
                </div>
              </div>
            </div>

            <div className="px-1 lg:px-4">
              <div className="card tertiary ">
                <div className="h-[165px] px-8 pt-5 mb-5 sm:h-[100px] md:h-[120px] md:pl-12 md:pt-9 lg:pl-20">
                  <h4 className='post-paragraph highlight'>
                    Crea, edita y elimina.<br/>
                    Gestiona el contenido para categorías, artistas, productos, subastas y blog.
                  </h4>
                </div>
                <img src={imgMacbookAdminArtistEdit} alt="macbook-artist-edit"
                     className='pr-8 w-[300px] sm:w-[415px] md:w-[570px] lg:w-[650px] xl:w-[810px]'/>
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



