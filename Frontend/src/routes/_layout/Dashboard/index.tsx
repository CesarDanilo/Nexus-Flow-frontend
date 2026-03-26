import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/Dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/dashboard"!</div>
}
