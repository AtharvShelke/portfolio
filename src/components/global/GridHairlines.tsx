import React from 'react';

export const GridHairlines: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none z-[1] max-w-[1440px] mx-auto px-4 md:px-16"
    >
      <div className="w-full h-full grid grid-cols-6 md:grid-cols-12 gap-0 border-x border-[#202B3D]/30">
        {Array.from({ length: 11 }).map((_, i) => (
          <div 
            key={i} 
            className="h-full border-r border-[#202B3D]/30 hidden md:block" 
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i} 
            className="h-full border-r border-[#202B3D]/30 block md:hidden" 
          />
        ))}
      </div>
    </div>
  );
};
