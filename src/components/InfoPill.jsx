import { useEffect, useState } from "react";

import "../styles/contact-card.css";

export default function InfoPill({message, duration= 5000, isShow = false}) {
  const [isVisible, setIsVisible] = useState(/**@type {boolean}*/isShow);

  useEffect(() => {
    if(!isShow) return;
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [isShow]);


  if(!isVisible){
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



