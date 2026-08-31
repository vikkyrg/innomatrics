import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NAv from '../Navbar/NAv';
import Footer from '../Footer/Footer';
import ChatSupport from '../common/Chat/ChatSupport';

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="App overflow-clip bg-secondary-50 min-h-screen flex flex-col">
      <NAv />
      <main className="w-full flex-grow relative">
        <Outlet />
      </main>
      <Footer />
      <ChatSupport />
    </div>
  );
};

export default MainLayout; 