import { Link } from "react-router";
import { posts } from "../assets/data/posts.js";

import leftArrow from '../assets/icons/left.svg';
import rightArrow from '../assets/icons/right.svg';

/**
 *
 * @param {string} [className='']
 * @param {number} postId
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProjectControls({className = '', postId}) {

  const prevPost = postId > 1 ? posts[postId - 2] : null;
  const nextPost = posts.length - 1 > postId ? posts[postId] : null;

  return (
    <div className={`grid grid-cols-2 justify-between items-center ${className}`}>
      {prevPost === null ?
        <div></div>
        : <Link to={`/projects/${prevPost.slug}`} className='flex flex-row items-center gap-2.5'>
          <img src={leftArrow} alt="left-icon" className='w-6 h-6'/>
          <div className='w-1/2 lg:max-w-[350px] vertical-truncate-text'>
            <p className='heading-4'>Anterior</p>
            <h3 className='heading-4-light-white'>{prevPost.title}</h3>
          </div>
        </Link>
      }

      {nextPost === null ?
        <div></div>
        : <Link to={`/projects/${nextPost.slug}`} className='flex flex-row items-center justify-end gap-2.5'>
          <div className='w-1/2 lg:max-w-[350px] text-right vertical-truncate-text'>
            <p className='heading-4'>Siguiente</p>
            <h3 className='heading-4-light-white'>{nextPost.title}</h3>
          </div>
          <img src={rightArrow} alt="right-icon" className='w-6 h-6'/>
        </Link>
      }
    </div>
  );
}



