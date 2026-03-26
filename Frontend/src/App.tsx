import { RouterProvider, createRouter } from '@tanstack/react-router'
// Importa a árvore que o TanStack Router gera sozinho
import { routeTree } from './routeTree.gen'

// Cria a instância do roteador
const router = createRouter({ routeTree })

// Registra o roteador para segurança de tipos (TypeScript)
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    // Provedor que espalha as rotas por toda a aplicação
    <RouterProvider router={router} />
  )
}

export default App