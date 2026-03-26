import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  FilePlus, 
  PackagePlus, 
  Settings 
} from 'lucide-react';
import { cn } from "@/lib/utils";

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, active: true },
  { name: 'Pedidos', icon: ShoppingCart, active: false },
  { name: 'Clientes', icon: Users, active: false },
  { name: 'Novo Pedido', icon: FilePlus, active: false },
  { name: 'Novo Produto', icon: PackagePlus, active: false },
];

export function Sidebar() {
  return (
    <aside className="flex flex-col w-64 h-screen bg-[#09090b] text-zinc-400 border-r border-zinc-800 font-sans antialiased">
      
      {/* Logo Section */}
      <div className="pt-6 px-6 pb-4">
        <h2 className="text-xl font-bold tracking-tight">
          <span className="text-blue-500">Nexus</span> <span className="text-white">Flow</span>
        </h2>
      </div>

      {/* Linha divisória sutil após o logo */}
      <div className="h-px bg-zinc-800/50 w-full mb-6" />

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
              item.active 
                ? "bg-[#111827] text-blue-500" 
                : "hover:bg-zinc-900 hover:text-zinc-100"
            )}
          >
            <item.icon className={cn("w-[18px] h-[18px]", item.active ? "text-blue-500" : "text-zinc-500 group-hover:text-zinc-100")} />
            <span className="text-[14px] font-medium">{item.name}</span>
          </a>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="px-4 py-6 border-t border-zinc-800 space-y-6">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-zinc-100 transition-all group"
        >
          <Settings className="w-[18px] h-[18px] text-zinc-500 group-hover:text-zinc-100" />
          <span className="text-[14px] font-medium">Configurações</span>
        </a>
        
        <div className="px-3">
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
            © 2026 Nexus Flow
          </p>
        </div>
      </div>
    </aside>
  );
}