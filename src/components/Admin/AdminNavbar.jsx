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
    <header className="h-20 bg-white border-b border-secondary-200 flex items-center justify-between px-6 lg:px-8 relative z-30">
      {/* Left: Mobile Toggle & Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-secondary-500 hover:text-primary-800 hover:bg-secondary-50 focus:outline-none transition-all duration-150 border border-transparent hover:border-secondary-200"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-sm font-bold text-primary-900 tracking-widest uppercase">
          {getPageTitle()}
        </h1>
      </div>

      {/* Right: Notifications & Profile */}
      <div className="flex items-center gap-4">
        {/* Notifications Icon Mock */}
        <button className="p-2 text-secondary-400 hover:text-primary-800 transition-all duration-150 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary-600 border border-white" />
        </button>

        <div className="h-8 w-[1px] bg-secondary-200 hidden sm:block" />

        {/* Profile Info */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="hidden sm:block text-right">
            <span className="text-xs font-bold text-secondary-900 block group-hover:text-primary-800 transition-colors">Innomatrics Admin</span>
            <span className="text-[9px] text-secondary-500 font-bold uppercase tracking-widest">{adminUser.role}</span>
          </div>
          <div className="w-10 h-10 bg-secondary-50 border border-secondary-200 flex items-center justify-center text-primary-800 group-hover:border-primary-400 transition-colors">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
