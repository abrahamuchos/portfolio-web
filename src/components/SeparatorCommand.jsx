import terminalIcon from "../assets/icons/terminal-icon.svg";
import TypingText from "./text-animation/TypingText.jsx";

/**
 *
 * @param {string} text - Command text
 * @returns {JSX.Element}
 * @constructor
 */
export default function SeparatorCommand({text}) {

  return (
    <div className='relative w-full wrap'>
      <div className="absolute line left-1/2 transform -translate-x-1/2 -translate-y-[8px]"></div>
      <div className='flex items-center justify-start'>
        <img src={terminalIcon} alt="Terminal Icon" className="inline-block mr-2" />
        <TypingText text={text} className='consola-1' duration={3} delay={1000} isCursor={false}/>
      </div>
      <div className="w-full absolute line left-1/2 transform -translate-x-1/2 translate-y-[8px]"></div>
    </div>
  );
}



