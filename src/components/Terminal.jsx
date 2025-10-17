import TypingText from "./text-animation/TypingText.jsx";

import "../styles/terminal.css";

/**
 *
 * @param {string} [title="abraham@mac-os"]
 * @param {string} text
 * @returns {JSX.Element}
 * @constructor
 */
export default function Terminal({title = "abraham@mac-os", text}) {

  return (
    <div className='w-[389px] h-[202px] rounded-[10px] bg-[#282828] terminal-card'>

      {/*Title bar*/}
      <div className="bg-[#1E1E1E] w-full h-[28px] rounded-t-[10px] flex items-center px-2 terminal-title-bar">
        <div className='flex space-x-2'>
          <div className="w-3 h-3 bg-[#ED6A5F] rounded-full"></div>
          <div className="w-3 h-3 bg-[#F5BF4F] rounded-full"></div>
          <div className="w-3 h-3 bg-[#61C554] rounded-full"></div>
        </div>
        <div className='flex justify-center items-center m-auto'>
          <span className='font-Inter text-[13px] text-[rgba(235,235,245,0.6)]'>{title}</span>
          <div className="w-10"></div>
        </div>
      </div>
      {/*End Title bar*/}

      {/*Command Prompt*/}
      <div className="px-4">
        <TypingText text={text} className='consola-2 mt-5' delay={3000}/>
      </div>
      {/*End Command Prompt*/}
    </div>
  );
}
