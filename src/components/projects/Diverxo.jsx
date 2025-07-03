import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

import Stack from "../Stack.jsx";

import { posts } from "../../assets/data/posts.js";
import imgHeader from "../../assets/images/projects/diverxo/header/header-diverxo-1x-compress.png";
import imgProDisplayHome from "../../assets/images/projects/diverxo/content/pro-display-home.png";
import imgMacbookHome from "../../assets/images/projects/diverxo/content/macbook-home.png";
import imgIphoneHome from "../../assets/images/projects/diverxo/content/iphone-home.png";

export default function Diverxo() {
  const imgRef = useRef(null);
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

  /**
   * Positions for the iPhone Screen image in different viewports
   * @type {{xl: {initial: {x: string, y: string}, animate: {x: string, y: string}}, md: {initial: {x: string, y: string}, animate: {x: string, y: string}}, sm: {initial: {x: string, y: string}, animate: {x: string, y: string}}, xs: {initial: {x: string, y: string}, animate: {x: string, y: string}}, lg: {initial: {x: string, y: string}, animate: {x: string, y: string}}}}
   */
  const iphonePositions = {
    xs: {
      initial: { x: "-200%", y: "145%" },
      animate: { x: "-230%", y: "145%" }
    },
    sm: {
      initial: { x: "-200%", y: "175%" },
      animate: { x: "-250%", y: "175%" }
    },
    md: {
      initial: { x: "-200%", y: "142%" },
      animate: { x: "-285%", y: "142%" }
    },
    lg: {
      initial: { x: "-200%", y: "165%" },
      animate: { x: "-310%", y: "165%" }
    },
    xl: {
      initial: { x: "-200%", y: "196%" },
      animate: { x: "-340%", y: "196%" }
    },
  };

  /**
   * Positions for the MacBook image in different screen sizes.
   * @type {{xl: {initial: {x: string, y: string}, animate: {x: string, y: string}}, md: {initial: {x: string, y: string}, animate: {x: string, y: string}}, sm: {initial: {x: string, y: string}, animate: {x: string, y: string}}, xs: {initial: {x: string, y: string}, animate: {x: string, y: string}}, lg: {initial: {x: string, y: string}, animate: {x: string, y: string}}}}
   */
  const macbookPositions = {
    xs: {
      initial: { x: "-10%", y: "122%" },
      animate: { x: "10%", y: "122%" }
    },
    sm: {
      initial: { x: "-10%", y: "116%" },
      animate: { x: "1%", y: "116%" }
    },
    md: {
      initial: { x: "-10%", y: "121%" },
      animate: { x: "3%", y: "121%" }
    },
    lg: {
      initial: { x: "-10%", y: "116%" },
      animate: { x: "6%", y: "116%" }
    },
    xl: {
      initial: { x: "-10%", y: "116%" },
      animate: { x: "10%", y: "116%" }
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
      if(window.innerWidth < 640){
        setViewport('xs');
      } else if(window.innerWidth >= 640 && window.innerWidth < 768){
        setViewport('sm');
      } else if(window.innerWidth >= 768 && window.innerWidth < 1024){
        setViewport('md');
      } else if(window.innerWidth >= 1024 && window.innerWidth < 1280){
        setViewport('lg');
      } else {
        setViewport('xl');
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/*Header and intro*/}
      <section className='wrap'>
        <h1 className='heading-1 mb-2.5'>Mercado del Arte en Venezuela</h1>
        <p className='mb-8'>2019</p>
        <h2 className="heading-3">
          Diverxo Art Gallery, un proyecto concebido para un cliente visionario del sector artístico, con el objetivo de
          revolucionar la forma en que los amantes del arte descubren y adquieren obras únicas. No se trataba solo de
          vender arte en línea, sino de construir un ecosistema digital completo que ofreciera una experiencia de
          usuario integral y enriquecedora, posicionándose como el destino predilecto para coleccionistas y entusiastas
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
            Diverxo Art Gallery es un innovador <span className="highlight">e-commerce</span> diseñado para revolucionar
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

      {/* End Brief */}

      <div className="w-full h-[600px] bg-blue-300 mt-[500px] md:mt-[640px] lg:mt-[850px]"></div>


    </>
  );
}



