import React from 'react';

export const AppContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className="min-height-screen w-full bg-slate-950 flex justify-center items-start overflow-y-auto">
      <div className={`w-full min-h-screen mobile-view-container sm:max-w-md md:max-w-xl lg:max-w-4xl bg-slate-900 shadow-2xl min-h-screen border-x border-slate-800/60 flex flex-col relative ${className}`}>
        {children}
      </div>
    </div>
  );
};