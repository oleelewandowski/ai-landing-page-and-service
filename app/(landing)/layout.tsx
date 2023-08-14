import React from 'react';

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => (
  <main className='h-full bg-[#111827] overflow-auto'>
    <div className='w-full h-full max-w-screen-xl mx-auto'> {children} </div>
  </main>
);

export default LandingLayout;
