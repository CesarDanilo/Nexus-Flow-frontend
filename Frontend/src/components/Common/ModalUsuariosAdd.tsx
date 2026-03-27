import { X, UserPlus, ShieldCheck, Mail, Lock, User, AlertCircle } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ModalUsuariosAdd({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Inter',_sans-serif]">
      {/* Overlay (Fundo escuro) */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Conteúdo do Modal */}
      <div className="relative w-full max-w-4xl bg-[#121214] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header do Modal */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800/60 bg-zinc-900/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/10 rounded-lg text-blue-500">
              <UserPlus size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Adicionar Novo Usuário</h2>
              <p className="text-xs text-zinc-500">Preencha os dados abaixo para criar o acesso.</p>
            </div>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <form className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Lado Esquerdo: Inputs */}
          <div className="lg:col-span-3 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-400 text-inter">Nome completo</label>
                <input type="text" placeholder="Ex: João Silva" className="w-full bg-[#09090b] border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-600 transition-all placeholder:text-zinc-700" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-400">E-mail corporativo</label>
                <input type="email" placeholder="email@nexusflow.com" className="w-full bg-[#09090b] border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-600 transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-400">Senha</label>
                <input type="password" placeholder="••••••••" className="w-full bg-[#09090b] border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-600 transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-400">Confirmar senha</label>
                <input type="password" placeholder="••••••••" className="w-full bg-[#09090b] border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-600 transition-all" />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800/50">
              <button type="button" onClick={onClose} className="px-4 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-200 transition-colors">Cancelar</button>
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-6 py-2 rounded shadow-lg flex items-center gap-2 transition-all active:scale-95">
                Salvar Cadastro
              </button>
            </div>
          </div>


            {/* Lado Direito: Permissões */}
            <div className="lg:col-span-1 space-y-4">
            <div className="bg-[#09090b] p-4 rounded-lg border border-zinc-800 space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 flex items-center gap-2">
                <ShieldCheck size={12} /> Nível de Acesso
                </h3>
                
                <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer group">
                    <input type="radio" name="role" className="accent-blue-600 w-3 h-3" defaultChecked /> 
                    <span className="group-hover:text-white transition-colors">Admin</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer group">
                    <input type="radio" name="role" className="accent-blue-600 w-3 h-3" /> 
                    <span className="group-hover:text-white transition-colors">Operador</span>
                </label>
                </div>

                {/* Toggle Switch (Botão de Deslizar) */}
                <div className="pt-3 border-t border-zinc-800/50 flex items-center justify-between">
                <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-tighter">Status Ativo</span>
                
                <label className="relative inline-flex items-center cursor-pointer group">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-8 h-4 bg-zinc-800 rounded-full peer 
                    peer-checked:after:translate-x-full 
                    peer-checked:after:border-white 
                    after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                    after:bg-zinc-400 after:rounded-full after:h-3 after:w-3 
                    after:transition-all peer-checked:bg-blue-600">
                    </div>
                </label>
                </div>
            </div>
            
            <div className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-lg">
                <p className="text-[10px] text-blue-400/80 leading-relaxed italic text-center">
                Usuários ativos têm acesso imediato ao painel Nexus Flow.
                </p>
            </div>
            </div>
        </form>
      </div>
    </div>
  )
}