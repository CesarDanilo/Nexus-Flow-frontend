import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Sidebar } from '../components/Common/Sidebar'

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div className="flex h-screen w-full">
      <Sidebar /> {/* Sua sidebar fixa */}
      <main className="flex-1 overflow-y-auto w-full">
        <Outlet /> {/* Aqui serão renderizadas as páginas da pasta _layout/ */}
      </main>
    </div>
  )
}