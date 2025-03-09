import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-4 flex flex-row gap-2">
        <h1 className="text-2xl font-bold">React Hook Form クライアント</h1>
        <Button asChild variant="secondary">
          <Link href="/client/rhf">戻る</Link>
        </Button>
      </div>
      {children}
    </div>
  )
}
