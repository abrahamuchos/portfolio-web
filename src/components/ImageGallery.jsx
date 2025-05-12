/**
 * @typedef {Object} Image
 * @property {number} id
 * @property {string|null} alt
 * @property {string} [caption]
 * @property {string} src
 * @property {string} [thumbnail]
 * @property {number} width
 * @property {number} height
 */
import { Gallery, Item } from "react-photoswipe-gallery";
import 'photoswipe/dist/photoswipe.css'

/**
 *
 * @param {Array<Image>} images
 * @returns {JSX.Element}
 * @constructor
 */
export default function ImageGallery({images}) {
  const options = {
    arrowPrev: true,
    arrowNext: true,
    zoom: true,
    wheelToZoom: true,
    close: true,
    counter: false,
    bgOpacity: 0.9,
    padding: { top: 20, bottom: 40, left: 100, right: 100 },
  }

  return (
    <>
      <Gallery options={options} withCaption={true}>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {images.map((image) => (
            <Item
              key={image.id}
              original={image.src}
              thumbnail={image.thumbnail ?? image.src}
              width={image.width}
              height={image.height}
              alt={image.alt ?? 'image'}
              caption={image.caption}
            >
              {({ref, open}) => (
                <img
                  style={{cursor: 'pointer'}}
                  src={image.thumbnail ?? image.src}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
          ))
          }
        </div>
      </Gallery>


    </>
);
}



