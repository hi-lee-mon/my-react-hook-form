import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Page() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">React Hook Form クライアント</h1>
      <Button asChild variant="outline">
        <Link href="/client/rhf/tuto">チュートリアル</Link>
      </Button>
    </div>
  )
}
