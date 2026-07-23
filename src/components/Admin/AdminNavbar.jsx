import React from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, User, Bell } from 'lucide-react';

const AdminNavbar = ({ toggleSidebar }) => {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.startsWith('/admin/dashboard')) return 'Dashboard Overview';
    if (path.startsWith('/admin/blogs/new')) return 'Create Blog Post';
    if (path.startsWith('/admin/blogs/edit')) return 'Edit Blog Post';
    if (path.startsWith('/admin/blogs')) return 'Manage Blog Posts';
    return 'Admin Management';
  };

  const adminUser = JSON.parse(localStorage.getItem('innomatrics_admin_user') || '{"email": "admin@example.com", "role": "Administrator"}');

  return (
    <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 lg:px-8 relative z-30">
      {/* Left: Mobile Toggle & Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-all duration-150"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-lg lg:text-xl font-bold text-white tracking-wide">
          {getPageTitle()}
        </h1>
      </div>

      {/* Right: Notifications & Profile */}
      <div className="flex items-center gap-4">
        {/* Notifications Icon Mock */}
        <button className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-150 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-500" />
        </button>

        <div className="h-8 w-[1px] bg-slate-800 hidden sm:block" />

        {/* Profile Info */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <span className="text-xs font-semibold text-white block">Innomatrics Admin</span>
            <span className="text-[10px] text-slate-400 font-medium">{adminUser.role}</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
            <User className="w-5 h-5 text-blue-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
