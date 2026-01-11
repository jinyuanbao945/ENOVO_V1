import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <circle cx="50" cy="50" r="48" fill="white" fillOpacity="0.01" />
      {/* Abstract representation of the Enovo swirl logo */}
      <path d="M50 10 A 40 40 0 0 1 90 50 L 75 50 A 25 25 0 0 0 50 25 Z" fill="#84cc16" />
      <path d="M90 50 A 40 40 0 0 1 50 90 L 50 75 A 25 25 0 0 0 75 50 Z" fill="#10b981" />
      <path d="M50 90 A 40 40 0 0 1 10 50 L 25 50 A 25 25 0 0 0 50 75 Z" fill="#0d9488" />
      <path d="M10 50 A 40 40 0 0 1 50 10 L 50 25 A 25 25 0 0 0 25 50 Z" fill="#166534" />
    </svg>
  );
};