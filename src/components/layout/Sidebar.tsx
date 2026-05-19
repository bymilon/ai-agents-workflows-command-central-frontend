import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, GitMerge, LayoutDashboard, Settings, Box, Bot } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Sidebar() {
  const items = [
    { icon: LayoutDashboard, path: '/dashboard', label: 'Dashboard' },
    { icon: GitMerge, path: '/workflows', label: 'Workflows' },
    { icon: Bot, path: '/agents', label: 'Agents' },
    { icon: Box, path: '/memory', label: 'Memory' },
    { icon: Activity, path: '/traces', label: 'Observability' },
  ];

  return (
    <div className="w-[60px] h-full bg-[#04050A] border-r border-border-subtle flex flex-col items-center py-4 z-50">
      <div className="w-8 h-8 rounded-lg bg-surface-raised border border-border-default flex items-center justify-center mb-6 shrink-0 shadow-sm relative group cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-3.5 h-3.5 bg-primary-400 rotate-45 transform" />
      </div>
      
      <nav className="flex flex-col gap-1.5 flex-1 w-full px-2">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "w-10 h-10 mx-auto rounded-lg flex items-center justify-center transition-colors duration-150 group cursor-pointer relative",
              isActive 
                ? "bg-primary-500/10 text-primary-300 ring-1 ring-inset ring-primary-500/20"
                : "text-text-secondary hover:text-text-primary hover:bg-white/5"
            )}
            title={item.label}
          >
            <item.icon className="w-4 h-4 stroke-[2px]" />
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto px-2 w-full flex flex-col gap-2">
        <button className="w-10 h-10 mx-auto rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 flex items-center justify-center transition-colors">
          <Settings className="w-4 h-4 stroke-[2px]" />
        </button>
      </div>
    </div>
  );
}
