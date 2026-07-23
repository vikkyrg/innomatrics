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
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 bg-slate-900 border-r border-slate-800 text-slate-300 transition-transform duration-300 transform lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand/Logo Header */}
        <div className="flex items-center gap-2 h-20 px-6 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-white text-base tracking-wide block">Innomatrics</span>
            <span className="text-[10px] uppercase font-semibold text-blue-400 tracking-wider">Admin Panel</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
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
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 group ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/15'
                    : 'hover:bg-slate-800/60 hover:text-white text-slate-400'
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform duration-200 group-hover:scale-105 ${
                  isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                }`} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions Area */}
        <div className="p-4 border-t border-slate-800 space-y-1.5">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-800/60 hover:text-white transition-all duration-150 group"
          >
            <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-slate-300 group-hover:-translate-x-0.5 transition-transform" />
            Go to Main Site
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-950/20 hover:text-rose-300 transition-all duration-150 group"
          >
            <LogOut className="w-5 h-5 text-rose-500/80 group-hover:translate-x-0.5 transition-transform" />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
