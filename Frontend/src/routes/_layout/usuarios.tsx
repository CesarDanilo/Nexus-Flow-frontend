import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Plus, MoreHorizontal, Shield, User, Mail, CheckCircle2 } from 'lucide-react'
import { ModalUsuariosAdd } from '../../components/Common/ModalUsuariosAdd'

export const Route = createFileRoute('/_layout/usuarios')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Dados fictícios para visualização da tabela
  const usuarios = [
    { id: 1, nome: 'Admin Nexus', email: 'admin@nexusflow.com', role: 'Admin', status: 'Ativo' },
    { id: 2, nome: 'Lucas Silva', email: 'lucas@nexusflow.com', role: 'Operador', status: 'Ativo' },
    { id: 3, nome: 'Beatriz Amorim', email: 'beatriz@nexusflow.com', role: 'Operador', status: 'Inativo' },
  ]

  return (
    <div className="min-h-screen bg-[#09090b] p-8 text-zinc-100 font-['Inter',_sans-serif]">
      
      {/* Header com Botão de Adicionar */}
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Usuários</h1>
          <p className="text-zinc-500 text-sm italic">Gerencie quem tem acesso ao Nexus Flow</p>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded shadow-lg flex items-center gap-2 transition-all active:scale-95"
        >
          <Plus size={16} />
          Novo Usuário
        </button>
      </header>

      {/* Tabela Minimalista */}
      <div className="bg-[#121214] border border-zinc-800/60 rounded-lg overflow-hidden shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800/60 bg-zinc-900/30">
              <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-zinc-500">Usuário</th>
              <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-zinc-500">Nível</th>
              <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-zinc-500">Status</th>
              <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-zinc-500 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/40">
            {usuarios.map((user) => (
              <tr key={user.id} className="hover:bg-zinc-900/40 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 transition-colors">
                      <User size={14} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-200">{user.nome}</p>
                      <p className="text-[11px] text-zinc-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`flex items-center gap-1.5 text-[11px] font-medium ${user.role === 'Admin' ? 'text-blue-400' : 'text-zinc-400'}`}>
                    <Shield size={12} />
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                    user.status === 'Ativo' 
                    ? 'bg-green-500/10 border-green-500/20 text-green-500' 
                    : 'bg-zinc-800 border-zinc-700 text-zinc-500'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-zinc-600 hover:text-white transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chamada do Modal */}
      <ModalUsuariosAdd 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}