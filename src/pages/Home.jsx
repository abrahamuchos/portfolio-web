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
        <SeparatorCommand
          text='php artisan serve'
        />
      </div>

      <AboutUs id='about-me'/>

      <div className='relative my-10 lg:mb-12'>
        <SeparatorCommand
          text='php artisan show:skills'
        />
      </div>

      <Skills id='skills'/>

      <div className='relative mb-10 lg:mb-12'>
        <SeparatorCommand
          text='php artisan show:skills --softs'
        />
      </div>

      <SoftSkills/>

      <div className='relative my-10 lg:mb-12'>
        <SeparatorCommand
          text='php artisan show:projects'
        />
      </div>

      <Projects/>

      <div className='relative my-10 lg:mb-12'>
        <SeparatorCommand
          text='php artisan contact:list'
        />
      </div>

      <section id='contact' className='wrap w-full mt-16 mb-20'>
        <ContactCard/>
      </section>

    </>
  );
}