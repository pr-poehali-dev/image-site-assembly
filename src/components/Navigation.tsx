import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Navigation() {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/logos', label: 'Логотипы', icon: 'Palette' },
    { path: '/brandbook', label: 'Брендбук', icon: 'BookOpen' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl">
      <div className="flex items-center gap-2">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
                ${isActive 
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg shadow-orange-500/50' 
                  : 'text-white/70 hover:text-white hover:bg-white/5'
                }
              `}
            >
              <Icon name={link.icon as any} size={18} />
              <span className="text-sm font-medium">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
