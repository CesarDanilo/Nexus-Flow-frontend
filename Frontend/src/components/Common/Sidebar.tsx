import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  FilePlus, 
  PackagePlus, 
  Settings, 
  User
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Link } from '@tanstack/react-router'; // Importe o Link do TanStack

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, url: '/dashboard' },
  { name: 'Pedidos', icon: ShoppingCart, url: '/pedidos' },
  { name: 'Clientes', icon: Users, url: '/clientes' },
  { name: 'Usuários', icon: User, url: '/usuarios' }, // Note a URL correta
  { name: 'Novo Pedido', icon: FilePlus, url: '/novo-pedido' },
  { name: 'Novo Produto', icon: PackagePlus, url: '/novo-produto' },
];

export function Sidebar() {
  return (
    <aside className="flex flex-col w-64 h-screen bg-[#09090b] text-zinc-400 border-r border-zinc-800 font-sans antialiased">
      
      {/* Logo Section */}
      <div className="pt-6 px-6 pb-4">
        <h2 className="text-xl font-bold tracking-tight">
          <span className="text-blue-500 font-inter">Nexus</span> <span className="text-white">Flow</span>
        </h2>
      </div>

      <div className="h-px bg-zinc-800/50 w-full mb-6" />

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.url}
            // activeProps define o estilo quando a rota for IGUAL à do link
            activeProps={{
              className: "bg-[#111827] text-blue-500",
            }}
            // Classes padrão (inativas)
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group hover:bg-zinc-900 hover:text-zinc-100"
          >
            {/* Usamos uma função no children do Link para detectar se está ativo e mudar o ícone também */}
            {({ isActive }) => (
              <>
                <item.icon className={cn(
                  "w-[18px] h-[18px] transition-colors", 
                  isActive ? "text-blue-500" : "text-zinc-500 group-hover:text-zinc-100"
                )} />
                <span className="text-[14px] font-medium">{item.name}</span>
              </>
            )}
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="px-4 py-6 border-t border-zinc-800 space-y-4">
        <Link
          to="/configuracoes"
          activeProps={{ className: "bg-[#111827] text-blue-500" }}
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-zinc-100 transition-all group"
        >
          {({ isActive }) => (
            <>
              <Settings className={cn("w-[18px] h-[18px]", isActive ? "text-blue-500" : "text-zinc-500 group-hover:text-zinc-100")} />
              <span className="text-[14px] font-medium">Configurações</span>
            </>
          )}
        </Link>
        
        <div className="px-3 pt-2">
          <p className="text-[10px] text-zinc-700 uppercase tracking-[0.2em] font-bold">
            © 2026 Nexus Flow
          </p>
        </div>
      </div>
    </aside>
  );
}