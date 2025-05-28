import { useEffect, useRef, useState } from "react";

/**
 *
 * @param {string} src - source video
 * @param {string} className
 * @returns {JSX.Element}
 * @constructor
 */
export default function VideoOnScroll({src, className}) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(/**@type {boolean} **/ false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 1,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if(isVisible && videoRef.current){
       videoRef.current.play()
    }else if(!isVisible && videoRef.current){
        videoRef.current.pause()

    }
  }, [isVisible]);

  return (
    <>
      <video ref={videoRef} src={src} muted loop className={className}/>
    </>
  );
}



