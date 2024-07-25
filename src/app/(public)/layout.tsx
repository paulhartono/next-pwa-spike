import { MainNav } from '@/components/main-nav'
import ReactQueryProvider from '@/provider/react-query-provider'

interface PublicLayoutProps {
  children: React.ReactNode
}

export default async function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
        </div>
      </header>
      <main className="flex-1 p-6">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </main>
    </div>
  )
}
