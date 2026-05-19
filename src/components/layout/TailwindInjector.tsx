import React, { FC } from 'react';

/**
 * Ensures system constraints map correctly for global Tailwind properties
 * used inside custom elements.
 */
export const TailwindInjector: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen text-text-primary bg-surface-base font-sans selection:bg-primary-500/30 selection:text-primary-100">
      {children}
    </div>
  );
};
