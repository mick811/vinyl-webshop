import { createFileRoute } from '@tanstack/react-router'
import { assertAuthenticatedFn } from '@/lib/fn'

export const Route = createFileRoute('/_authed/profile')({
  component: RouteComponent,
  beforeLoad: async () => {
    assertAuthenticatedFn()
  }
})

function RouteComponent() {
  return <div>Hello "/profile"!</div>
}