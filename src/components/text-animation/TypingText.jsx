import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";

import Cursor from "./Cursor.jsx";

/**
 *
 * @param {string} [text='Text Here!']
 * @param {number} [delay=5000] - Delay in milliseconds
 * @param {boolean} [isCursor=true]
 * @param {string} className - Style to text
 * @param {number} [duration=5] - Duration in seconds
 * @returns {JSX.Element}
 * @constructor
 */
export default function TypingText({text = 'Text Here!', delay = 5000, isCursor = true, className, duration = 5}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    text.slice(0, latest)
  );

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const controls = animate(count, text.length, {
          type: "tween",
          duration: duration,
          ease: "easeInOut",
        });

        return controls.stop;
      }, delay);

      return () => clearTimeout(timeout);
    }

  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.span className={className}>{displayText}</motion.span>
      {isCursor ? <Cursor/> : ''}
    </div>
  );
}



