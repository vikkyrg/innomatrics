import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BookOpen, ArrowLeft, LogOut, ShieldAlert } from 'lucide-react';

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('innomatrics_admin_token');
    localStorage.removeItem('innomatrics_admin_user');
    navigate('/admin/login');
  };

  const navItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/admin/dashboard'
    },
    {
      label: 'Manage Blogs',
      icon: BookOpen,
      path: '/admin/blogs'
    }
  ];

  return (
    <>
      {/* Mobile Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-secondary-900/60 backdrop-blur-sm lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 bg-white border-r border-secondary-200 transition-transform duration-300 transform lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand/Logo Header */}
        <div className="flex items-center gap-4 h-20 px-6 border-b border-secondary-200 bg-primary-900 relative overflow-hidden">
          <div className="absolute top-[-50%] left-[-20%] w-[100px] h-[100px] bg-primary-400 blur-3xl opacity-20" />
          <div className="w-10 h-10 bg-primary-800 border border-primary-700 flex items-center justify-center text-primary-300 shadow-inner relative z-10">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="relative z-10">
            <span className="font-extrabold text-white text-base tracking-wide block">Innomatrics</span>
            <span className="text-[9px] uppercase font-bold text-primary-300 tracking-widest block mt-0.5">Admin Console</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto bg-white">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (item.path === '/admin/blogs' && location.pathname.startsWith('/admin/blogs/'));
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 1024) toggleSidebar();
                }}
                className={`flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-200 border ${
                  isActive
                    ? 'bg-primary-50 border-primary-200 text-primary-900'
                    : 'bg-white border-transparent text-secondary-500 hover:bg-secondary-50 hover:text-primary-800 hover:border-secondary-200'
                }`}
              >
                <Icon className={`w-4 h-4 transition-transform duration-200 ${
                  isActive ? 'text-primary-800' : 'text-secondary-400'
                }`} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions Area */}
        <div className="p-4 border-t border-secondary-200 space-y-2 bg-secondary-50">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-secondary-600 hover:bg-white hover:text-primary-800 border border-transparent hover:border-secondary-200 transition-all duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 text-secondary-400 group-hover:text-primary-800 group-hover:-translate-x-1 transition-transform" />
            Go to Main Site
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-red-600 hover:bg-white hover:text-red-700 border border-transparent hover:border-red-200 transition-all duration-200 group"
          >
            <LogOut className="w-4 h-4 text-red-400 group-hover:text-red-600 group-hover:translate-x-1 transition-transform" />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
