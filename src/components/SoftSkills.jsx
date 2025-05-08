export default function SoftSkills() {
  const skills = [
    {name: 'Trabajo en equipo'},
    {name: 'Adaptabilidad'},
    {name: 'Liderazgo'},
    {name: 'Comunicación asertiva'},
  ];


  return (
    <section>
      <h2 className='heading-3 !text-light-white'>
        Más allá de lo técnico: Habilidades esenciales para el  éxito
      </h2>

      <div className='flex flex-col justify-between mt-9 gap-10 md:flex-row md:gap-2'>
        {skills.map((skill, index) => (
          <div key={index} className='tabs'>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



