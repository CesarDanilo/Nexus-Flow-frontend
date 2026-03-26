import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, Package, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils" // Usando o utilitário padrão

export const Route = createFileRoute('/_layout/Dashboard/')({
  component: DashboardComponent,
})

function DashboardComponent() {
  const pedidos = [
    { cliente: "Maria Silva", itens: "3 itens", total: "R$ 399,60", status: "Pendente", color: "bg-yellow-500/10 text-yellow-500" },
    { cliente: "João Santos", itens: "1 itens", total: "R$ 299,90", status: "Entregue", color: "bg-emerald-500/10 text-emerald-500" },
    { cliente: "Ana Costa", itens: "5 itens", total: "R$ 889,60", status: "Não Pago", color: "bg-red-500/10 text-red-500" },
    { cliente: "Pedro Lima", itens: "2 itens", total: "R$ 609,80", status: "Pendente", color: "bg-yellow-500/10 text-yellow-500" },
  ]

  return (
    /* h-screen e w-full garantem que ocupe a tela toda ao lado do sidebar */
    <div className="flex-1 min-h-screen w-full p-16 space-y-8 bg-[#09090b] font-sans antialiased">
      
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
        <p className="text-zinc-500 text-sm">Visão geral do seu negócio</p>
      </div>

      {/* Stats Cards - Grid que se adapta à largura total */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <Card className="bg-[#111113] border-1 border-zinc-800 shadow-none transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] cursor-pointer group">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <div className="space-y-0.5">
              <p className="text-xs font-medium text-zinc-400">Total a Receber</p>
              <p className="text-[10px] text-zinc-500">Clientes</p>
            </div>
            {/* Adicionei 'group-hover' para o ícone brilhar junto com o card */}
            <div className="p-2 bg-blue-500/10 rounded-lg ">
              <DollarSign className="w-4 h-4 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500 tracking-tight">R$ 12.480,00</div>
          </CardContent>
        </Card>

        <Card className="bg-[#111113] border-1 border-zinc-800 shadow-none transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] cursor-pointer group">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <div className="space-y-0.5">
              <p className="text-xs font-medium text-zinc-400">Total de Lucro</p>
              <p className="text-[10px] text-zinc-500">Mês atual</p>
            </div>
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-500 tracking-tight">R$ 4.230,50</div>
          </CardContent>
        </Card>

        <Card className="bg-[#111113] border-1 border-zinc-800 shadow-none transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] cursor-pointer group">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <div className="space-y-0.5">
              <p className="text-xs font-medium text-zinc-400">Itens Pendentes</p>
              <p className="text-[10px] text-zinc-500">Pedir ao Fornecedor</p>
            </div>
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <Package className="w-4 h-4 text-yellow-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500 tracking-tight">17</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders Table */}
      <Card className="bg-[#111113] border-zinc-800 shadow-none">
        <CardHeader>
          <CardTitle className="text-sm font-semibold text-white">Pedidos Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="border-zinc-800/50">
              <TableRow className="hover:bg-transparent border-zinc-800/50">
                <TableHead className="text-xs text-zinc-500 uppercase tracking-wider">Cliente</TableHead>
                <TableHead className="text-xs text-zinc-500 uppercase tracking-wider">Itens</TableHead>
                <TableHead className="text-xs text-zinc-500 uppercase tracking-wider">Total</TableHead>
                <TableHead className="text-xs text-zinc-500 uppercase tracking-wider">Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pedidos.map((pedido, i) => (
                <TableRow key={i} className="border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                  <TableCell className="text-sm font-medium text-zinc-200">{pedido.cliente}</TableCell>
                  <TableCell className="text-sm text-zinc-400">{pedido.itens}</TableCell>
                  <TableCell className="text-sm text-zinc-400">{pedido.total}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={cn("text-[10px] border-none px-2 py-0.5 font-bold", pedido.color)}>
                      {pedido.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <ChevronRight className="w-4 h-4 text-zinc-600" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}