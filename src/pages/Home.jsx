import React from 'react';
import Hero from "../components/Hero.jsx";
import SeparatorCommand from "../components/SeparatorCommand.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Skills from "../components/Skills.jsx";
import SoftSkills from "../components/SoftSkills.jsx";

export default function Home() {
  return (
    <>
      <Hero/>

      <div className='relative my-10 lg:mt-0 lg:mb-14'>
        <SeparatorCommand>
          php artisan serve
        </SeparatorCommand>
      </div>

      <AboutUs/>

      <div className='relative my-10 lg:mb-12'>
        <SeparatorCommand>
          php artisan show:skills
        </SeparatorCommand>
      </div>

      <Skills/>

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

      <div className="mt-10">
        <div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consectetur corporis earum, error est
            eveniet ex minima modi odio officiis perspiciatis possimus praesentium quae reprehenderit rerum sit velit!
            Animi, voluptate?
          </div>
          <div>A accusamus ad adipisci autem corporis debitis delectus distinctio dolorem ea enim error facilis ipsam
            iusto labore modi non optio provident qui quibusdam quod repellendus sed suscipit temporibus, vero
            voluptate.
          </div>
          <div>Atque hic id ipsa, iste libero placeat provident sint? Amet, facere laborum nihil quos sit veniam!
            Architecto autem expedita facere illum impedit labore laborum, minima nemo, nulla sit totam vitae.
          </div>
          <div>Ad, explicabo facere illum perspiciatis quo voluptatem. Cupiditate ea eaque maiores pariatur possimus,
            provident rerum saepe tempora veritatis! Architecto asperiores at autem, consequatur dignissimos dolore
            libero minus pariatur provident ut.
          </div>
          <div>Aperiam at beatae ea eius fugiat officiis omnis, sapiente. Amet, blanditiis consectetur corporis cum
            deserunt ducimus earum fuga id inventore magni molestias nisi non nostrum, nulla pariatur, quibusdam saepe
            sed?
          </div>
        </div>
      </div>


    </>
  );
}