import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ target, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // Animation duration in ms
    const startTime = performance.now();
    const startValue = 0;
    const endValue = target;

    const animateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * (endValue - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, target]);

  return (
    <p className="ff-number new-home-counter" ref={counterRef}>
      <span className={`counter ${isVisible ? 'animated fadeIn' : ''}`}>
        {count}
      </span>
      {suffix}
    </p>
  );
};

export default Counter;