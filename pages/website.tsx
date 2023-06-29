
import React from 'react';
import Header from './components/Header';
import Website from './components/Website';

const WebsitePage: React.FC = () => {
  return (
    <div className=' bg-[#0E1129]'>
      <Header />
      <main className="relative h-[220vh] sm:h-[667px] bg-[#0E1129]">
        <Website />
      </main>
    </div>
  );
};

export default WebsitePage;