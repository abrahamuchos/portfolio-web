import React from 'react';
import Terminal from "../components/Terminal.jsx";

export default function Home() {
  return (<div>

    <div className="flex w-full items-center">
      <div className="w-1/2 h-[400px] flex flex-col justify-center">
        <h1 className='heading-1'>Lorem ipsum dolor</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur eligendi facilis magni
          nulla quidem, quis repellat, saepe temporibus totam velit veritatis voluptates? Minima, nulla omnis quaerat
          qui temporibus voluptate.</p>
      </div>

      <div className="w-1/2 flex justify-end">
        <Terminal>
          laravel new abrahamuchos-portfolio
        </Terminal>
      </div>

    </div>
  </div>);
}