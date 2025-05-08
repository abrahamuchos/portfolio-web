import { useEffect } from "react";

import "../styles/contact-card.css";

/**
 *
 * @param {string} message
 * @param {number} [duration=5000] - Duration in milliseconds
 * @param {boolean} [isShow=false] - Whether the pill is shown
 * @param @param {function(boolean): void} setIsShow - Function to update the isShow state
 * @returns {JSX.Element|null}
 * @constructor
 */
export default function InfoPill({message, duration= 5000, isShow = false, setIsShow}) {

  useEffect(() => {
    if(!isShow) return;
    const timer = setTimeout(() => {
      setIsShow(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [isShow]);


  if(!isShow){
    return null;
  }

  return (
    <div className="fixed bottom-5 z-50 -translate-x-1/2 -translate-y-1/2 left-1/2">
      <div className="bg-very-dark-gray  text-white px-8 py-4 rounded-3xl shadow-lg">
        <span>{message}</span>
      </div>
    </div>
  );
}



