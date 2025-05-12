import React from 'react';
import Hero from "../components/Hero.jsx";
import SeparatorCommand from "../components/SeparatorCommand.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Skills from "../components/Skills.jsx";
import SoftSkills from "../components/SoftSkills.jsx";
import Projects from "../components/Projects.jsx";
import ContactCard from "../components/ContactCard.jsx";

export default function Home() {
  return (
    <>
      <Hero/>

      <div className='relative my-10 lg:mt-0 lg:mb-14'>
        <SeparatorCommand>
          php artisan serve
        </SeparatorCommand>
      </div>

      <AboutUs id='about-me'/>

      <div className='relative my-10 lg:mb-12'>
        <SeparatorCommand>
          php artisan show:skills
        </SeparatorCommand>
      </div>

      <Skills id='skills'/>

      <div className='relative mb-10 lg:mb-12'>
        <SeparatorCommand>
          php artisan show:skills --softs
        </SeparatorCommand>
      </div>

      <SoftSkills/>

      <div className='relative my-10 lg:mb-12'>
        <SeparatorCommand>
          php artisan show:projects
        </SeparatorCommand>
      </div>

      <Projects/>

      <div className='relative my-10 lg:mb-12'>
        <SeparatorCommand>
          php artisan contact:list
        </SeparatorCommand>
      </div>

      <section id='contact' className='w-full mt-16 mb-20'>
        <ContactCard/>
      </section>

    </>
  );
}