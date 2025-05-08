export default function Card({variant = 'primary', title, subtitle, description, image}) {


  return (
    <>
      {variant === 'primary' ? (
          <div className='card primary'>
            <div className="card-content">
              <h3 className='card-title'>{title}</h3>
              <p className='card-subtitle'>{subtitle}</p>
              <p className='card-paragraph'>{description}</p>
              <button className="btn-primary">Leer más</button>
            </div>
            <div className="card-img">
              <img src={image} alt={title}/>
            </div>
          </div>

        )
        : (
          <div className='card secondary'>
            <div className="card-content">
              <h3 className='card-title'>{title}</h3>
              <p className='card-subtitle'>{subtitle}</p>
              <p className='card-paragraph'>{description}</p>
              <button className="btn-primary">Leer más</button>
            </div>
            <div className="card-img">
              <img src={image} alt={title}/>
            </div>
          </div>
        )

      }
    </>

  );
}



