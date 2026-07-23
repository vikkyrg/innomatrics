import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AdminSidebar from '../Admin/AdminSidebar';
import AdminNavbar from '../Admin/AdminNavbar';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthenticated = !!localStorage.getItem('innomatrics_admin_token');

  // Guard routing - redirect to login if unauthenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans">
      {/* Sidebar navigation */}
      <AdminSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main workspace layout */}
      <div className="flex-1 flex flex-col lg:pl-64 min-h-screen">
        {/* Top Navbar */}
        <AdminNavbar toggleSidebar={toggleSidebar} />

        {/* Content body */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;