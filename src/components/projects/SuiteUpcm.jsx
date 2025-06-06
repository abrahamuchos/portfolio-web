import React, { useRef } from "react";
import { motion } from "motion/react";
import Slider from "react-slick";

import ProjectControls from "../ProjectControls.jsx";
import Stack from "../Stack.jsx";
import ImageGallery from "../ImageGallery.jsx";

import { posts } from "../../assets/data/posts.js";
import { getGalleryImageURL } from "../../utils/image.js"

import iconLeft from "../../assets/icons/left-minimal-white.svg";
import iconRight from "../../assets/icons/right-minimal-white.svg";
import imgHeader from '../../assets/images/projects/suite-upcm/header/home-screen-with-bg-card-compress.webp'
import gifSeverance from '../../assets/images/projects/suite-upcm/content/severance.gif'
import imgDisplayScreen from '../../assets/images/projects/suite-upcm/content/pro-display-screen-pacientes.png'
import imgScreenProfilePatient from '../../assets/images/projects/suite-upcm/content/macos-screen-perfil-paciente.png'
import imgDiagnostic from '../../assets/images/projects/suite-upcm/content/screen-diagnostic.png'
import imgMacNewPatient from '../../assets/images/projects/suite-upcm/content/macbook-screen-nuevo-paciente-form.png'
import imgMacbookCalendar from '../../assets/images/projects/suite-upcm/content/macbook-screen-citas-calendario.png'
import imgSafariStatic from '../../assets/images/projects/suite-upcm/content/screen-estadisticas.png'
import imgSafariStatic1 from '../../assets/images/projects/suite-upcm/content/Safari-1.png'
import imgSafariStatic2 from '../../assets/images/projects/suite-upcm/content/Safari-2.png'
import imgSafariStatic3 from '../../assets/images/projects/suite-upcm/content/Safari-3.png'
import imgSafariStatic4 from '../../assets/images/projects/suite-upcm/content/Safari-4.png'
import imgSafariStatic5 from '../../assets/images/projects/suite-upcm/content/Safari-5.png'
import imgSafariStatic6 from '../../assets/images/projects/suite-upcm/content/Safari-6.png'
import imgSafariMedicalConsultation
  from '../../assets/images/projects/suite-upcm/content/safari-screen-consulta-medica-con-penientes.png'
import imgSafariMedicalConsultationCategories1
  from '../../assets/images/projects/suite-upcm/content/safari-screen-consulta-medica-categorias-1.png'
import imgSafariMedicalConsultationCategories2
  from '../../assets/images/projects/suite-upcm/content/safari-screen-consulta-medica-categorias-2.png'
import imgSafariTreatment from '../../assets/images/projects/suite-upcm/content/safari-consulta-medica-tratamientos.png'
import imgScreenTreatmentForm
  from '../../assets/images/projects/suite-upcm/content/screen-treatment-form-validation.png'
import imgScreenPhysicalExam from '../../assets/images/projects/suite-upcm/content/screen-examen-fisico.png'
import imgScreenBackground
  from '../../assets/images/projects/suite-upcm/content/screen-antecedentes-consulta-medica.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SuiteUpcm() {
  const post = posts.find(post => post.id === 1);
  let sliderRef = useRef(null);
  const images = [
    {
      id: 1,
      alt: 'login-image',
      src: getGalleryImageURL('suite-upcm', 'login-screen.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'login-screen_thumbnail_1024x640.jpg', true),
      width: 1440,
      height: 811,
      caption: 'Inicio de sesión'
    },
    {
      id: 2,
      alt: 'cita-crear',
      src: getGalleryImageURL('suite-upcm', 'Citas horario laboral (doctor) 2 - 1.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'Citas horario laboral (doctor) 2 - 1_thumbnail_1024x640.jpg', true),
      width: 1440,
      height: 835,
      caption: 'Agenda de citas medica para el rol Doctor(Md)'
    },
    {
      id: 3,
      alt: 'cita-crear',
      src: getGalleryImageURL('suite-upcm', 'Cita crear (doctor) 1 - 6.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'Cita crear (doctor) 1 - 6_thumbnail_1024x640.jpg', true),
      width: 1440,
      height: 835,
      caption: 'Crear una nueva cita medica'
    },
    {
      id: 4,
      alt: 'citas-unidad-medica',
      src: getGalleryImageURL('suite-upcm', 'home - Citas (medical unit) 1 - 1.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'home - Citas (medical unit) 1 - 1_thumbnail_1024x640.jpg', true),
      width: 1440,
      height: 960,
      caption: 'Lista de citas medicas para el rol Unidad Medica(UM).'
    },
    {
      id: 5,
      alt: 'perfil-paciente',
      src: getGalleryImageURL('suite-upcm', 'Paciente perfil paciente 1 - 1.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'Paciente perfil paciente 1 - 1_thumbnail_1024x640.jpg', true),
      width: 1440,
      height: 1872,
      caption: 'Perfil del paciente. Se puede visualizar sus diagnostico, tratamientos, citas, etc.'
    },
    {
      id: 6,
      alt: 'consulta-medica-1',
      src: getGalleryImageURL('suite-upcm', 'Consulta medica Home 1 - 1.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'Consulta medica Home 1 - 1_thumbnail_1024x640.jpg', true),
      width: 1440,
      height: 1735,
      caption: 'Consulta medica - Home (Página 1). Lista todas las categorias para realizar una consulta medica.'
    },
    {
      id: 7,
      alt: 'consulta-medica-2',
      src: getGalleryImageURL('suite-upcm', 'Consulta medica Home 1 - 2.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'Consulta medica Home 1 - 2_thumbnail_1024x640.jpg', true),
      width: 1440,
      height: 1049,
      caption: 'Consulta medica - Home (Página 2). Lista todas las categorias para realizar una consulta medica.'
    },
    {
      id: 8,
      alt: 'consulta-medica-antecedentes',
      src: getGalleryImageURL('suite-upcm', 'Consulta medica Antecedentes 1 - 3.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'Consulta medica Antecedentes 1 - 3_thumbnail_1024x640.jpg', true),
      width: 811,
      height: 4096,
      caption: 'Consulta medica - Antecedentes. Formulario para registrar antecedentes medicos.'
    },
    {
      id: 9,
      alt: 'consulta-medica-diagnosticos',
      src: getGalleryImageURL('suite-upcm', 'Consulta medica Diagnostico 1 - 1.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'Consulta medica Diagnostico 1 - 1_thumbnail_1024x640.jpg', true),
      width: 1261,
      height: 4096,
      caption: 'Consulta medica - Diagnósticos. Formulario para registrar los diagnósticos del paciente.'
    },
    {
      id: 10,
      alt: 'consulta-medica-tratamientos',
      src: getGalleryImageURL('suite-upcm', 'Consulta medica Tratamientos 1 - 1.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'Consulta medica Tratamientos 1 - 1_thumbnail_1024x640.jpg', true),
      width: 1440,
      height: 2412,
      caption: 'Consulta medica - Tratamientos. Formulario para registrar los tratamientos del paciente. El sistema cuenta con los tratamientos cargados junto con sus dosis diarias (min - max) asi como como su frecuencia'
    },
    {
      id: 11,
      alt: 'formulas-algoritmos',
      src: getGalleryImageURL('suite-upcm', 'Formulas y algoritmos home 1 - 1.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'Formulas y algoritmos home 1 - 1_thumbnail_1024x640.jpg', true),
      width: 1440,
      height: 1202,
      caption: 'Formulas y Algoritmos - Home . Lista todos las formulas y algoritmos diponibles en el sistema.'
    },
    {
      id: 12,
      alt: 'formulas-chad-vasc',
      src: getGalleryImageURL('suite-upcm', 'Formulas y algoritmos - chad score 1 - 2.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'Formulas y algoritmos - chad score 1 - 2_thumbnail_1024x640.jpg', true),
      width: 1440,
      height: 1092,
      caption: 'Formulas y Algoritmos - Chad Score. Formulario para calcular el Chad Score del paciente.'
    },
    {
      id: 13,
      alt: 'estadísticas',
      src: getGalleryImageURL('suite-upcm', 'Estadisticas home (medical unit) 1 - 1.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'Estadisticas home (medical unit) 1 - 1_thumbnail_1024x640.jpg', true),
      width: 1440,
      height: 957,
      caption: 'Estadísticas - Home. Lista todos las estadísticas disponibles en el sistema.'
    },
    {
      id: 14,
      alt: 'estadísticas-hta',
      src: getGalleryImageURL('suite-upcm', 'Estadisticas hta (medical unit) 1 - 1.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'Estadisticas hta (medical unit) 1 - 1_thumbnail_1024x640.jpg', true),
      width: 1440,
      height: 2455,
      caption: 'Estadísticas - HTA. Estadísticas y graficas de los pacientes con HTA. Filtros para edad, sexo, etc.'
    },
    {
      id: 15,
      alt: 'estadísticas-pacientes',
      src: getGalleryImageURL('suite-upcm', 'Estatisticas mis pacientes (doctor) 1 - 1.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'Estatisticas mis pacientes (doctor) 1 - 1_thumbnail_1024x640.jpg', true),
      width: 1440,
      height: 2345,
      caption: 'Estadísticas - Pacientes. Estadísticas y graficas del total de pacientes. Filtros para edad, sexo, etc.'
    },
    {
      id: 16,
      alt: 'usuario-perfil',
      src: getGalleryImageURL('suite-upcm', 'Mi perfil (doctor) 1 - 1.png'),
      thumbnail: getGalleryImageURL('suite-upcm', 'Mi perfil (doctor) 1 - 1_thumbnail_1024x640.jpg', true),
      width: 1440,
      height: 1727,
      caption: 'Configuración de usuario - Mi perfil '
    }
  ];

  const stacks = [
    {name: 'Laravel', icon: 'laravel-color-logo.png'},
    {name: 'React', icon: 'react-color-logo.png'},
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
      <section>
        <h1 className='heading-1 mb-2.5'>El Latido Silencioso de un Problema</h1>
        <p className='mb-8'>2024</p>
        <h2 className="heading-3">
          La Suite UPCM es un sistema de información integral que optimiza la gestión de pacientes cardiometabólicos,
          mejorando la atención médica especializada a través de la digitalización de procesos clave. Este proyecto
          representa un avance significativo en la eficiencia y calidad del cuidado cardiovascular.
        </h2>
        <Stack stacks={stacks} className="mt-8 mb-10"/>
      </section>

      <section>
        <img src={imgHeader} alt="suite-upcm-screen" className='rounded-lg mb-8 w-full'/>
        <div
          className="flex flex-col justify-center items-center gap-y-5 md:flex-row md:gap-x-10 md:justify-between md:items-center xl:gap-0">
          <div className='content-small post-paragraph'>
            Imagina el recorrido de un paciente con enfermedades cardiometabólicas como un <span className="highlight">pasillo blanco e infinito</span> —similar
            a los de la serie <span className="highlight">Severance</span>—. Un espacio aséptico donde cada puerta o
            sección podría representar un momento de su <span className="highlight">atención médica</span>: una
            consulta, un análisis, un ingreso. Sin embargo, en este pasillo interminable, estas puertas parecen
            idénticas, <span className="highlight">sin etiquetas claras</span> que indiquen si detrás se encuentra su
            historial de glucosa, su presión arterial o los resultados de su último electrocardiograma.
          </div>
          <img src={gifSeverance} alt="serverance" className='w-full  md:max-w-[300px] lg:max-w-[475px]'/>
        </div>
        <div className="content-center mt-10">
          <motion.p
            className='w-full post-paragraph text-center md:w-[590px] lg:w-[605px]'
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{duration: 0.6, delay: 0.7, ease: "easeOut"}}
          >
            La <span className="highlight">información vital</span> de cada paciente se pierde en la uniformidad de este
            laberinto blanco, dificultando ver la <span className="highlight">trayectoria completa</span> de su
            enfermedad y la conexión entre los diferentes eventos. Las citas se desvanecen en la monotonía de las
            paredes, sin un hilo conductor que permita a los profesionales tener una <span className="highlight">visión integral</span> y <span
            className="highlight">personalizada</span>.
          </motion.p>
        </div>
      </section>
      {/*End Header and intro*/}

      {/*¿Cuán crucial?*/}
      <section className='mt-32 lg:mt-36'>
        <div className='w-full flex flex-col items-center mb-10'>
          <img src={imgDisplayScreen} alt="display-screen" className='w-full md:w-[650px] xl:w-[750px] mb-12'/>

          <h2 className="heading-2 mb-10 text-center w-full  md:w-[650px] lg:w-[816px]">
            ¿Cuán crucial es la información del paciente para decisiones médicas oportunas?
          </h2>
        </div>

        <div className="content-left">
          <p className="content-medium post-paragraph">
            En cardiología, la <span className="highlight">gestión ágil</span> y <span
            className="highlight">precisa</span> de la información del paciente es crucial. Los retrasos o errores
            pueden tener graves consecuencias para pacientes cardiometabólicos. Este era el riesgo latente, el
            silencioso enemigo, que la <span className="highlight">Sociedad Interamericana de Cardiología</span> (SIAC)
            ya había detectado en sus Unidades de Prevención Cardiometabólica (UPCM), en este contexto la SIAC impulsada
            por su visión y la experiencia de profesionales como el Dr. Carlos Ponte, dio origen a <span
            className="highlight">Suite UPCM</span>.
          </p>
        </div>

        {/*Card Gestión de Pacientes*/}
        <div className="card tertiary my-16 pl-8 pt-5 md:pl-12 md:pt-9 lg:pl-20">
          <h4 className='post-paragraph highlight mb-5'>
            Gestión de Pacientes.<br/>
            Registro y actualización de datos personales.
          </h4>

          <div className="flex justify-end">
            <img src={imgScreenProfilePatient} alt="patient-profile"
                 className='w-[400px] md:w-[550px] lg:w-[620px] xl:w-[820px]'/>
          </div>
        </div>
        {/*Card Gestión de Pacientes*/}

        <div className="content-left mb-20">
          <p className="content-medium post-paragraph">
            Suite UPCM Permite una <span className="highlight">gestión de pacientes</span> fluida y centralizada, desde
            el registro hasta la actualización de sus datos. Ofrece una <span className="highlight">historia clínica integral</span> donde
            cada antecedente, tratamiento y resultado de examen se almacena de forma segura y accesible. Simplifica
            la <span className="highlight">agenda médica</span> con programación de citas. Elimina la letra ilegible y
            los errores con la <span className="highlight">prescripción electrónica</span>.
          </p>
        </div>

        {/* Two Cards Historial médico y Nuevo paciente*/}
        <div className="grid grid-col-1 gap-y-5 sm:grid-cols-2 sm:gap-x-2.5 md:gap-x-5 items-stretch">
          <div className="card tertiary flex flex-col">
            <div className="pl-8 pt-5 md:px-12 md:pt-9 lg:px-20 flex-grow">
              <h4 className="post-paragraph highlight">
                Mantén un histórico de cada paciente.
              </h4>
              <p className="post-paragraph">
                Seguimiento a cada una de los pacientes en categorías como, Diagnósticos, Tratamientos, entre otros.
              </p>
            </div>
            <div className="w-full mt-10 md:mt-20 self-end">
              <img src={imgDiagnostic} alt="diagnostic" className='w-full'/>
            </div>
          </div>

          <div className="card tertiary flex flex-col">
            <div className="pl-8 pt-5 md:px-12 md:pt-9 lg:px-20 flex-grow">
              <h4 className="post-paragraph highlight">
                Añade nuevos pacientes.
              </h4>
              <p className="post-paragraph">
                El primer paso para un historial cardiovascular completo y mejor atención.
              </p>
            </div>
            <div className="w-full mt-10 md:mt-20 self-end">
              <img src={imgMacNewPatient} alt="new-patient" className='w-full'/>
            </div>
          </div>
        </div>
        {/* End Two Cards Historial médico y Nuevo paciente*/}

        {/*Card Agenda médica*/}
        <div className="card tertiary my-16 pl-8 pt-5 md:pl-12 md:pt-9 lg:pl-20">
          <h4 className='post-paragraph highlight mb-5'>
            Agenda Médica.<br/>
            Programación de citas y envío de recordatorios.
          </h4>

          <div className="flex justify-center">
            <img src={imgMacbookCalendar} alt="calendar"
                 className='w-[600px] md:w-[550px] lg:w-[620px] xl:w-[820px]'/>
          </div>
        </div>
        {/*End Card Agenda médica*/}

      </section>
      {/*End ¿Cuán crucial?*/}

      {/*Estadísticas*/}
      {/*Mobile*/}
      <section className="absolute w-full h-[610px]  left-0 right-0 overflow-hidden lg:hidden">
        <img
          src={imgSafariStatic1}
          alt="safari1-estadistica"
          className='w-[280px] absolute top-0 left-1/2  translate-x-[1%] translate-y-[10%] z-10'
        />
        <img
          src={imgSafariStatic2}
          alt="safari2-estadistica"
          className='w-[280px] absolute top-0 left-1/2 translate-x-[55%] translate-y-[90%] z-20'
        />
        <img
          src={imgSafariStatic4}
          alt="safari4-estadistica"
          className='w-[280px] absolute top-0 left-1/2 translate-x-[5%] translate-y-[235%] z-20'
        />
        <img
          src={imgSafariStatic5}
          alt="safari5-estadistica"
          className='w-[280px] absolute top-0 left-1/2 -translate-x-[110%] translate-y-[220%] z-20'
        />
        <img
          src={imgSafariStatic6}
          alt="safari6-estadistica"
          className='w-[280px] absolute top-0 left-1/2 -translate-x-[150%] translate-y-[60%] z-20'
        />

        <img
          src={imgSafariStatic}
          alt="safari-estadistica"
          className='w-[310px] absolute left-1/2 -translate-x-1/2 translate-y-[100%] z-40'
        />
      </section>
      {/*End mobile*/}

      {/*Desktop (lg)*/}
      <section className='hidden lg:block absolute w-full h-[610px] mt-32 left-0 right-0 overflow-hidden overflow-y-visible lg:mt-40
         md:h-[700px] lg:h-[910px]'
      >
        <motion.img
          src={imgSafariStatic1}
          alt="safari1-estadistica"
          className='w-[280px] lg:w-[315px] absolute top-0 left-1/2  z-10'
          initial={{x: '30%', y: '10%'}}
          animate={{
            x: [0, 5, 0, -5, 0],
            y: [0, 5, 0, -5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.img
          src={imgSafariStatic2}
          alt="safari2-estadistica"
          className='w-[315px] absolute top-0 left-1/2 z-20'
          initial={{x: '90%', y: '90%'}}
          variants={{
            initial: {transform: "translate(90%, 90%)"},
            animate: {transform: "translate(91%, 95%)"}
          }}
          animate={"animate"}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.img
          src={imgSafariStatic3}
          alt="safari3-estadistica"
          className='w-[415px] absolute top-0 left-1/2 z-20'
          initial={{x: '80%', y: '170%'}}
          variants={{
            initial: {transform: "translate(80%, 170%)"},
            animate: {transform: "translate(81%, 172%)"}
          }}
          animate={"animate"}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.img
          src={imgSafariStatic4}
          alt="safari4-estadistica"
          className='w-[315px] absolute top-0 left-1/2 z-20'
          initial={{x: '35%', y: '335%'}}
          variants={{
            initial: {transform: "translate(35%, 335%)"},
            animate: {transform: "translate(35%, 337%)"}
          }}
          animate={"animate"}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.img
          src={imgSafariStatic5}
          alt="safari5-estadistica"
          className='w-[350px] absolute top-0 left-1/2 z-20'
          initial={{x: '-150%', y: '220%'}}
          variants={{
            initial: {transform: "translate(-150%, 220%)"},
            animate: {transform: "translate(-155%, 223%)"}
          }}
          animate={"animate"}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.img
          src={imgSafariStatic6}
          alt="safari6-estadistica"
          className='w-[380px] absolute top-0 left-1/2 z-20'
          initial={{x: '-150%', y: '60%'}}
          variants={{
            initial: {transform: "translate(-150%, 60%)"},
            animate: {transform: "translate(-152%, 62%)"}
          }}
          animate={"animate"}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />

        <img
          src={imgSafariStatic}
          alt="safari-estadistica"
          className='w-[280px] md:w-[400px] lg:w-[450px] absolute left-1/2 -translate-x-1/2 translate-y-[110%] z-40'
        />
      </section>
      {/*Desktop (lg)*/}

      <section className="mt-[730px] w-full lg:mt-[1200px] ">
        <div className="content-center">
          <motion.p
            className='content-small post-paragraph text-center'
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{duration: 0.6, delay: 0.7, ease: "easeOut"}}
          >
            Pero el impacto de Suite UPCM va más allá de la gestión individual de pacientes. A través de la <span
            className="highlight">recopilación y análisis de datos clínicos</span>, el sistema se convierte en una
            fuente invaluable de <span className="highlight">conocimiento médico</span>, impulsando la <span
            className="highlight">investigación en el campo de la cardiología</span>.
          </motion.p>
        </div>
      </section>
      {/*End Estadísticas*/}

      {/*Ritmo Ágil*/}
      <section className="w-full mt-40">
        <h2 className="heading-2 w-full mb-10 md:w-[560px]">
          El Ritmo Ágil del Desarrollo.<br/>
          Un Corazón latiendo en Sincronía.
        </h2>

        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5 lg:gap-x-10 xl:gap-x-32">
          <p className="w-full md:max-w-[550px] post-paragraph">
            Para abordar la complejidad de este desafío y asegurar una respuesta ágil a las necesidades cambiantes del
            proyecto, adoptamos la metodología <span className="highlight">Scrum</span>. Trabajamos en ciclos cortos de
            una semana, denominados sprints, lo que nos <span className="highlight">permitió validar rápidamente nuestras ideas y entregar valor</span> de
            forma continua.
          </p>
          <p className="w-full md:max-w-[550px] post-paragraph">
            Esta cadencia de trabajo fue posible gracias a un <span
            className="highlight">equipo multidisciplinario</span> donde la sinergia entre un programador front-end, un
            back-end y un diseñador gráfico. En cada paso, la invaluable retroalimentación del <span
            className="highlight">Dr. Carlos Ponte</span> actuó como una brújula, orientando el desarrollo para que la
            plataforma realmente respondiera a las <span className="highlight">expectativas y necesidades de los profesionales de la cardiología</span>.
          </p>
        </div>

        {/* Card Carousel*/}
        <div className="slider-container mt-16">
          <Slider ref={slider => {
            sliderRef = slider
          }} {...carouselSettings} >

            <div className="px-1 lg:px-4">
              <div className="card tertiary pl-8 pt-5 md:pl-12 md:pt-9 lg:pl-20">
                <h4 className='post-paragraph highlight mb-5 lg:mb-[32px]'>
                  Consulta Médica.<br/>
                  Permite almacenar, organizar y gestionar la información clave del historial médico.
                </h4>

                <div className="flex justify-center">
                  <img src={imgSafariMedicalConsultation} alt="calendar"
                       className='w-[600px] md:w-[590px] lg:w-[620px] xl:w-[867px]'/>
                </div>
              </div>
            </div>

            <div className="px-1 lg:px-4">
              <div className="card tertiary pl-8 pt-5 md:pl-12 md:pt-9 lg:pl-20">
                <h4 className='post-paragraph highlight mb-5 lg:mb-[40px]'>
                  Componentes fundamentales.<br/>
                  Secciones claras para facilitar su comprensión y optimizar la atención médica.
                </h4>

                <div className="flex justify-end">
                  <img src={imgSafariMedicalConsultationCategories1} alt="calendar"
                       className='w-[600px] md:w-[550px] lg:w-[620px] xl:w-[820px]'/>
                </div>
              </div>
            </div>

            <div className="px-1 lg:px-4">
              <div className="card tertiary pr-8 pt-5 md:pr-12 md:pt-9 lg:pr-20">
                <div className="flex flex-col items-start">
                  <h4 className='self-end post-paragraph highlight mb-5 text-end'>
                    Aún más componentes.<br/>
                    Una visión clara y <br className='min-[484px]:hidden'/> organizada de<br/> toda la consulta médica.
                  </h4>
                  <img src={imgSafariMedicalConsultationCategories2} alt="calendar"
                       className='self-start w-[600px] md:w-[550px] lg:w-[620px] xl:w-[820px]'/>
                </div>
              </div>
            </div>

          </Slider>
        </div>

        {/*Carousel Controls*/}
        <div className="flex justify-end gap-5">
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
        {/* End Card Carousel*/}


      </section>
      {/*End Ritmo Ágil*/}

      {/*Sumergiéndome*/}
      <section className="w-full mt-40">
        <h2 className="heading-2 w-full mb-10">
          Sumergiéndome en el Mundo de la Cardiología.<br/>
          El Arte de la Entrevista.
        </h2>

        <div className="grid grid-cols-1 gap-y-5 mb-20 md:grid-cols-2 md:gap-x-5 lg:gap-x-10 xl:gap-x-32">
          <p className="w-full md:max-w-[550px] post-paragraph">
            Mi rol como <span className="highlight">líder tecnológico</span> en el desarrollo de Suite UPCM fue un viaje
            lleno de retos y mucho <span className="highlight">aprendizaje</span>. Uno de los primeros y más
            significativos desafíos fue comprender a fondo <span className="highlight">el día a día de los profesionales
            de la medicina interna y la cardiología</span>. Cada médico tenía su propio flujo de trabajo, sus propios
            métodos para llevar a cabo una consulta.
          </p>
          <p className="w-full md:max-w-[550px] post-paragraph">
            Entrevistarme con ellos no fue solo una recopilación de información, sino un ejercicio de <span
            className="highlight">empatía</span> y <span className="highlight">escucha activa</span>. Necesitaba <span
            className="highlight">entender sus necesidades</span>, sus puntos débiles y cómo la tecnología podía
            realmente <span className="highlight">facilitar su labor</span>. Esta inmersión en su mundo fue fundamental
            para sentar las bases de Suite UPCM.
          </p>
        </div>

        {/* Two Cards Formularios y Ayuda a los cardiólogos*/}
        <div className="flex flex-col gap-y-10 items-stretch sm:flex-row sm:gap-x-2.5 lg:gap-x-5">
          <div className="w-full flex sm:w-1/2 lg:w-[60%]">
            <div className="card tertiary flex flex-col">
              <div className="pl-8 pt-5 sm:mb-7 md:px-12 md:pt-9 lg:px-20">
                <h4 className="post-paragraph highlight">
                  Formularios.
                </h4>
                <p className="post-paragraph">
                  Los campos necesarios para registrar toda la información importante del tratamiento de forma clara y
                  sin
                  que se olvide ningún detalle.
                </p>
              </div>
              <div className="w-full flex-grow flex items-end  mt-10 md:mt-20 lg:w-[619px]">
                <img src={imgSafariTreatment} alt="treatment-form" className='w-full'/>
              </div>
            </div>
          </div>

          <div className="w-full flex sm:w-1/2 lg:w-[40%]">
            <div className="card tertiary flex flex-col ">
              <div className="pl-8 pt-5 md:px-12 md:pt-9 lg:px-20">
                <h4 className="post-paragraph highlight">
                  Ayuda a los cardiólogos.
                </h4>
                <p className="post-paragraph">
                  Validaciones robustas en sus formularios para asegurar la integridad de la información ingresada.
                  Esto minimiza errores y optimiza el flujo de trabajo diario de los cardiólogos.
                </p>
              </div>
              <div className="w-full mt-10 flex-grow flex items-end md:mt-20">
                <img src={imgScreenTreatmentForm} alt="treatment-validation" className='w-full'/>
              </div>
            </div>
          </div>
        </div>
        {/* End Two Cards Formularios y Ayuda a los cardiólogos*/}
      </section>
      {/*End Sumergiéndome*/}

      {/*Desafíos en el desarrollo de Suite UPCM*/}
      <section className="mt-52">
        <div className="w-full flex flex-col items-center">
          <h2 className="w-full heading-2 text-center mb-20 md:w-[650px] lg:w-[816px]">
            ¿Desafíos en el desarrollo de Suite UPCM?<br/>
            Claro que sí.
          </h2>
          <div className="w-full md:w-[700px] lg:w-[701px]">
            <p className='post-paragraph text-center'>
              Mi rol como <span className="highlight">líder tecnológico</span> en el desarrollo de Suite UPCM fue un
              viaje
              lleno de <span className="highlight">retos</span> y mucho <span className="highlight">aprendizaje</span>.
              Cada etapa del proyecto presentó obstáculos que requerían soluciones creativas y una profunda
              <span className="highlight"> comprensión</span> tanto del mundo de la <span className="highlight">tecnología
            </span> como del apasionante campo de la <span className="highlight">cardiología</span>.
            </p>
          </div>
        </div>

        <div className="mt-12 mb-20">
          <h3 className='heading-3 mb-5'>
            Traduciendo la clínica a código. <br className='lg:hidden'/>
            Desde la arquitectura de la información hasta la interfaz.
          </h3>
          <div className="content-light-left">
            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-32 md:gap-y-10">

              <p className='post-paragraph-2'>
                <span className="highlight">La Arquitectura de la Información y la Base de Datos</span><br/>
                El reto fue diseñar una arquitectura de datos eficiente. Esto implicó detallar los tipos de datos
                (simples a complejos) y sus dependencias. Diseñar la base de datos fue exigente por la cantidad de
                información y relaciones. Se requirió planificación para asegurar escalabilidad y rendimiento a largo
                plazo.
              </p>

              <p className='post-paragraph-2'>
                <span className="highlight">Validación y Precisión como Pilares</span><br/>
                Crucial para el conocimiento médico cardiológico, la validación de datos era primordial. Implementamos
                doble validación: en el front-end para guiar al usuario y en el back-end para garantizar una data
                limpia. Esto aseguraba la integridad de la información ante errores o manipulaciones. Mi labor se centró
                en esta precisión desde el back-end.
              </p>

              <p className='post-paragraph-2'>
                <span className="highlight">El Diseño de Roles y Permisos desde la Base de Datos</span><br/>
                La seguridad y privacidad de la información era una preocupación primordial. Para abordar esto,
                diseñamos un sofisticado sistema de gestión de roles directamente en la base de datos. Creamos grupos
                como "Unidad Médica", "Doctores", "Asistentes Médicos" y "Administradores", definiendo permisos
                específicos para cada uno.
              </p>

              <p className='post-paragraph-2'>
                <span className="highlight">La Interfaz Intuitiva</span><br/>
                El reto fue crear una interfaz intuitiva para doctores, ejemplificado en la gestión de cambios de
                tratamiento donde el historial previo debía persistir. Lograr una representación clara y eficiente
                requirió múltiples discusiones y bocetos. Este proceso iterativo combinó la retroalimentación médica, la
                creatividad del diseño y la visión técnica. Finalmente, se alcanzó una solución que equilibró
                funcionalidad y usabilidad.
              </p>
            </div>
          </div>
        </div>

        {/*Two Cards*/}
        <div className="flex flex-col gap-y-10 items-stretch sm:flex-row sm:gap-x-2.5 lg:gap-x-5">
          <div className="w-full flex sm:w-1/2 lg:w-[40%]">
            <div className="card tertiary flex flex-col">
              <div className="pl-8 pt-5 sm:mb-7 md:px-12 md:pt-9 lg:px-20">
                <h4 className="post-paragraph highlight">
                  Interfaz de Usuario Intuitiva.
                </h4>
                <p className="post-paragraph">
                  Los formularios bien diseñados son intuitivos y fáciles de usar, lo que reduce la curva de aprendizaje
                  para los doctores y el personal.
                </p>
              </div>
              <div className="w-full flex-grow flex items-end  mt-10 md:mt-20 lg:w-[619px]">
                <img src={imgScreenBackground} alt="treatment-form" className='w-full'/>
              </div>
            </div>
          </div>

          <div className="w-full flex sm:w-1/2 lg:w-[60%]">
            <div className="card tertiary flex flex-col ">
              <div className="pl-8 pt-5 md:px-12 md:pt-9 lg:px-20">
                <h4 className="post-paragraph highlight">
                  Estructura y Organización.
                </h4>
                <p className="post-paragraph">
                  Los formularios proporcionan una estructura clara y organizada para la entrada de datos. Esto asegura
                  que la información se registre de manera consistente en todos los casos, facilitando su posterior
                  búsqueda, análisis y comprensión.
                </p>
              </div>
              <div className="w-full mt-10 flex-grow flex items-end justify-end md:mt-20">
                <img src={imgScreenPhysicalExam} alt="treatment-validation" className='w-full lg:w-[550px]'/>
              </div>
            </div>
          </div>
        </div>
        {/*End Two Cards*/}
      </section>
      {/*End Desafíos en el desarrollo de Suite UPCM*/}

      {/*Conclusion*/}
      <section className="my-60">
        <div className="flex  flex-col items-center">
          <motion.p
            className='post-paragraph text-center w-full lg:w-[731px]'
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{duration: 0.6, delay: 0.7, ease: "easeOut"}}
          >
            Como <span className="highlight">líder tecnológico</span> y desarrollador back-end, mi contribución a la
            Suite UPCM trascendió la programación individual. No solo enfrenté desafíos técnicos como el
            <span className="highlight">diseño de la base de datos</span> y la <span className="highlight">creación de la
            API</span>, sino que también fui parte de el <span className="highlight">diseño de la arquitectura</span>,
            <span className="highlight">guié a otros programadores</span>, aseguré el
            <span className="highlight">cumplimiento de los objetivos</span> y <span className="highlight">fomente la
            colaboración</span>. Esta experiencia de <span className="highlight">liderazgo</span>, sumada a la
            interacción
            directa con los doctores para <span className="highlight">comprender sus flujos de trabajo</span> y traducir
            sus necesidades en funcionalidades, <span className="highlight">amplió significativamente mi perspectiva
            profesional</span>.
          </motion.p>

          <div className="w-full flex justify-center mt-14">
            <a href="https://youtu.be/GQJVM0MzyK4" className="tabs w-auto">Tratamientos - Youtube</a>
          </div>
        </div>
      </section>
      {/*End Conclusion*/}

      {/*Gallery*/}
      {
        images.length ?
          <section className='w-full mt-20'>
            <ImageGallery images={images}/>
          </section>
          : ''
      }
      {/*End Gallery*/}

      <ProjectControls className='mt-32 mb-16' postId={post.id}/>
    </>
  );
}



