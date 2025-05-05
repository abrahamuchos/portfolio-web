import React from 'react';

import phpLogo from '../assets/images/logos/php-logo.svg'
import jsLogo from '../assets/images/logos/js-logo.svg'
import tsLogo from '../assets/images/logos/typescript-logo.svg'
import laravelLogo from '../assets/images/logos/laravel-logo.svg'
import reactLogo from '../assets/images/logos/react-logo.svg'
import tailwindLogo from '../assets/images/logos/tailwindcss-logo.svg'
import bootstrapLogo from '../assets/images/logos/bootstrap-logo.svg'
import sassLogo from '../assets/images/logos/sass-logo.svg'
import postgreLogo from '../assets/images/logos/postgre-logo.svg'
import mySqlLogo from '../assets/images/logos/mysql-logo.svg'
import sqliteLogo from '../assets/images/logos/sqlite-logo.svg'
import trelloLogo from '../assets/images/logos/trello-logo.svg'
import slackLogo from '../assets/images/logos/slack-logo.svg'
import jiraLogo from '../assets/images/logos/jira-logo.svg'
import gitLogo from '../assets/images/logos/git-logo.svg'
import gitHubLogo from '../assets/images/logos/github-logo.svg'

export default function Skills() {

  const skills = [
    {name: 'PHP', subtitle: null, logo: phpLogo},
    {name: 'JavaScript', subtitle: null, logo: jsLogo},
    {name: 'TypeScript', subtitle: 'Aprendiendo...', logo: tsLogo},
    {name: 'Laravel', subtitle: null, logo: laravelLogo},
    {name: 'React', subtitle: null, logo: reactLogo},
    {name: 'Tailwind CSS', subtitle: null, logo: tailwindLogo},
    {name: 'Bootstrap', subtitle: null, logo: bootstrapLogo},
    {name: 'SASS', subtitle: null, logo: sassLogo},
    {name: 'PostgreSQL', subtitle: null, logo: postgreLogo},
    {name: 'MySQL', subtitle: null, logo: mySqlLogo},
    {name: 'SQLite', subtitle: null, logo: sqliteLogo},
    {name: 'Trello', subtitle: null, logo: trelloLogo},
    {name: 'Slack', subtitle: null, logo: slackLogo},
    {name: 'Jira', subtitle: null, logo: jiraLogo},
    {name: 'Git', subtitle: null, logo: gitLogo},
    {name: 'GitHub', subtitle: null, logo: gitHubLogo},
  ];


  return (
    <section className='relative'>
      <p className='mb-2.5'>Habilidades</p>
      <h2 className='heading-2 mb-10'>Mi caja de herramientas.</h2>

      <div className="absolute line left-1/2 transform -translate-x-1/2 z-10"></div>
      {/*Grid Skills*/}
      <div className="grid grid-cols-2 grid-rows-8 gap-0 relative
        md:grid-cols-4 md:grid-rows-4
        xl:grid-cols-8 xl:grid-rows-2 "
      >
        <div className="hidden xl:block absolute line left-1/2 transform -translate-x-1/2 top-1/2 z-10"></div>
        {skills.map((skill, index) => (
          <div key={index} className={`flex flex-col items-center justify-center p-5 lg:p-10  border-b 
            ${(skills.length - 1 === index || skills.length / 2 - 1 === index) ? 'xl:border-r-0' : 'xl:border-r'} 
            border-zinc-800 transition-colors hover:bg-zinc-900`
          }>
            <img src={skill.logo} alt={skill.name + ' logo'} className="w-14 h-14"/>
            <div className='min-h-[2.5em] mt-4 text-center font-Instrument text-white text-sm'>
              <p>{skill.name}</p>
              {skill.subtitle && <small className='text-[10px] '>{skill.subtitle}</small>}
            </div>
          </div>
        ))}
      </div>
      {/*End Grid Skills*/}
      <div className="mb-[8px]"></div>
    </section>
  );
}