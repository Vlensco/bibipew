import React from 'react';
import mascotImg from './penguin-mascot.png';

/**
 * Bibipew Mascot Component
 * Render imported PNG mascot image with cyan starburst backdrop
 */
export default function PenguinMascot({ pose = 'default', className = 'w-72 h-72', animated = true }) {
  return (
    <div className={`relative inline-block ${animated ? 'animate-float' : ''} ${className}`}>
      
      {/* Light Cyan Starburst Background */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full text-sky-100 -z-10 transform scale-110"
      >
        <path
          d="M100 0 L115 40 L155 15 L140 55 L185 50 L155 85 L200 100 L155 115 L185 150 L140 145 L155 185 L115 160 L100 200 L85 160 L45 185 L60 145 L15 150 L45 115 L0 100 L45 85 L15 50 L60 55 L45 15 L85 40 Z"
          fill="currentColor"
        />
      </svg>

      {/* Imported Mascot Image */}
      <img
        src={mascotImg}
        alt="Bibipew Penguin Mascot"
        className="w-full h-full object-contain drop-shadow-lg"
      />
    </div>
  );
}
