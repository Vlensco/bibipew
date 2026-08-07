import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Wrapper Component
 * Automatically fades in and slides up elements when scrolled into view
 */
export default function ScrollReveal({ children, delay = 0, className = '', animation = 'fade-up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    let timer;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer = setTimeout(() => {
              setIsVisible(true);
            }, 30);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    observer.observe(currentRef);

    // Immediate check for elements in initial viewport
    const rect = currentRef.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 30);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (timer) clearTimeout(timer);
    };
  }, []);

  let transformInitial = 'translate-y-10 opacity-0';
  let transformFinal = 'translate-y-0 opacity-100';

  if (animation === 'fade') {
    transformInitial = 'opacity-0';
    transformFinal = 'opacity-100';
  } else if (animation === 'scale') {
    transformInitial = 'opacity-0 scale-90';
    transformFinal = 'opacity-100 scale-100';
  }

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-600 ease-out will-change-transform ${
        isVisible ? transformFinal : transformInitial
      } ${className}`}
    >
      {children}
    </div>
  );
}
