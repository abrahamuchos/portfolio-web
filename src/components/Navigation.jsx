import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import hambuger from '../assets/icons/hamburger-icon.svg';
import equis from '../assets/icons/equis-icon.svg';
import { HashLink } from "react-router-hash-link";

export default function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    {name: 'Sobre Mi', path: '/', hash: '#about-me'},
    {name: 'Habilidades', path: '/', hash: '#skills'},
    {name: 'Proyectos', path: '/projects', hash: null},
    {name: 'Contacto', path: '/', hash: '#contact'},
  ];

  useEffect(() => {
    if(location.hash === ''){
      setIsMobileMenuOpen(false);
    }
  }, [location]);

  return (
    <nav className='mb-5'>
      <div className="w-full flex justify-between items-center px-0 py-5 lg:px-12 lg:py-6">
        <Link to="/">
          <span className='font-GameOver text-2xl text-light-white'>abrahamuchos</span>
        </Link>


        {/*Desktop Navigation*/}
        <div className="hidden space-x-2 w-1/3 text-base font-Instrument font-normal text-light-white
            lg:flex lg:justify-between lg:items-center">
          {links.map((link, i) => (
            <HashLink key={i} to={link.path + (link.hash ?? '')}>
              {link.name}
            </HashLink>
          ))}
        </div>
        {/*End Desktop Navigation*/}

        {/*Hamburger Icon*/}
        <div className='lg:hidden'>
          <img src={isMobileMenuOpen ? equis : hambuger} alt="hamburger icon" width={24} height={24}
               className='hover:cursor-pointer'
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
        {/*Hamburger Icon*/}
      </div>

      {/*Mobile Navigation*/}
      <div className={`lg:hidden w-full overflow-hidden transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'max-h-[100vh]' : 'max-h-0'}`
      }>
        <div
          className="flex flex-col space-y-6 justify-center items-center text-base font-Instrument font-normal text-light-white">
          {links.map((link, i) => (
            <HashLink key={i} to={link.path + (link.hash ?? '')}>
              {link.name}
            </HashLink>
          ))}
        </div>
      </div>
      {/*End Mobile Navigation*/}

    </nav>
  );
}



