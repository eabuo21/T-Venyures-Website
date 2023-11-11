/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";

const NumberCounter = ({ start, end, duration, sign }) => {
  const [count, setCount] = useState(start);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    let startTime;
    const updateCount = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(1, elapsedTime / duration);
      setCount(Math.floor(start + progress * (end - start)));
      if (progress < 1) {
        animationFrameIdRef.current = requestAnimationFrame(updateCount);
      }
    };

    animationFrameIdRef.current = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [start, end, duration]);

  const formattedNumber = count.toLocaleString();

  return (
    <div>
      <p className="your-custom-class">{`${formattedNumber}${sign}`}</p>
    </div>
  );
};

export default NumberCounter;
