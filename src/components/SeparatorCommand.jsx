import terminalIcon from "../assets/icons/terminal-icon.svg";

export default function SeparatorCommand({children}) {

  return (
    <div className='relative w-full'>
      <div className="absolute line left-1/2 transform -translate-x-1/2 -translate-y-[8px]"></div>
      <div className='flex items-center justify-start'>
        <img src={terminalIcon} alt="Terminal Icon" className="inline-block mr-2" />
        <p className="consola-1">{children}</p>
      </div>
      <div className="w-full absolute line left-1/2 transform -translate-x-1/2 translate-y-[8px]"></div>
    </div>
  );
}



