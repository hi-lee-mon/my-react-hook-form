import Header from '@/components/layout/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <Header headerText="Next.js - Form" />
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}
