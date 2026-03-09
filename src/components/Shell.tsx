import { NavLink, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  Layers,
  CreditCard,
  Clock,
  UserCircle,
  Search,
  Bell,
  ChevronDown,
} from 'lucide-react';
import { resident } from '../data/demo';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/services', icon: Layers, label: 'Services', disabled: true },
  { to: '/payments', icon: CreditCard, label: 'My Payments', disabled: true },
  { to: '/history', icon: Clock, label: 'History' },
  { to: '/profile', icon: UserCircle, label: 'Profile', disabled: true },
];

export default function Shell() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top header */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-surface-200 bg-white px-6">
        <div className="flex items-center gap-3">
          {/* Kingston crest / brand mark */}
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-kingston-700 p-1">
            <img
              src="/kingston-logo.png"
              alt="City of Kingston"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <span className="text-[15px] font-semibold text-kingston-700">MyKingston</span>
            <span className="ml-1.5 text-xs text-surface-400">|</span>
            <span className="ml-1.5 text-xs text-surface-500">City Services Portal</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-400" />
            <input
              type="text"
              placeholder="Search services..."
              className="h-9 w-64 rounded-lg border border-surface-200 bg-surface-50 pl-9 pr-3 text-sm text-surface-700 outline-none transition-colors placeholder:text-surface-400 focus:border-kingston-300 focus:ring-2 focus:ring-kingston-100"
              readOnly
            />
          </div>

          {/* Notifications bell */}
          <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-surface-500 transition-colors hover:bg-surface-100">
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {/* User menu */}
          <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-surface-100">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-kingston-500 text-xs font-semibold text-white">
              {resident.avatar}
            </div>
            <span className="hidden text-sm font-medium text-surface-700 md:block">
              {resident.name}
            </span>
            <ChevronDown className="h-3.5 w-3.5 text-surface-400" />
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <nav className="hidden w-56 shrink-0 border-r border-surface-200 bg-white p-3 md:block">
          <ul className="flex flex-col gap-0.5">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.disabled ? (
                  <span className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-surface-400 cursor-default">
                    <item.icon className="h-[18px] w-[18px]" />
                    {item.label}
                  </span>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === '/dashboard'}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-kingston-50 text-kingston-600'
                          : 'text-surface-600 hover:bg-surface-50 hover:text-surface-900'
                      }`
                    }
                  >
                    <item.icon className="h-[18px] w-[18px]" />
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-lg border border-surface-200 bg-surface-50 p-3">
            <p className="text-xs font-medium text-surface-500">Need help?</p>
            <p className="mt-1 text-xs text-surface-400">
              Contact Kingston 311 for service inquiries.
            </p>
            <button className="mt-2 text-xs font-medium text-kingston-500 hover:text-kingston-600">
              Learn more
            </button>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
