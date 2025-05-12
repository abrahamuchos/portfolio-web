/**
 *
 * @param {Array<{name: string, icon: string}>} stacks
 * @param {string|null} className
 * @returns {JSX.Element}
 * @constructor
 */
export default function Stack({stacks, className}) {

  return (
    <div className={className}>
      <ul className='grid grid-cols-2 gap-5
        md:grid-cols-3
        lg:flex lg:flex-row lg:gap-8'
      >
        {stacks.map((stack, index) => (
          <li key={index} className='flex items-center gap-2 consola-1'>
            <img src={`/src/assets/images/logos/${stack.icon}`} alt={stack.name} className='w-4 h-4' />
            {stack.name}
          </li>
        ))}
      </ul>
    </div>
  );
}



