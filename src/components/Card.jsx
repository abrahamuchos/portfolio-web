import { Link } from "react-router";

/**
 *
 * @param {string} [variant='primary'] - The variant of the card. Can be 'primary' or 'secondary'.
 * @param {string} title - The title of the card.
 * @param {string} subtitle
 * @param {string} description
 * @param {string} image - The image of the card.
 * @param {string} link - The link of the card.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Card({variant = 'primary', title, subtitle, description, image, link}) {


  return (
    <>
      {variant === 'primary' ? (
          <div className='card primary'>
            <div className="card-content">
              <h3 className='card-title'>{title}</h3>
              <p className='card-subtitle'>{subtitle}</p>
              <p className='card-paragraph'>{description}</p>
              <Link to={link} className="btn-primary">Leer más</Link>
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
              <Link to={link} className="btn-primary">Leer más</Link>
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



