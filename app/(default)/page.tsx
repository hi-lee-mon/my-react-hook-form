import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">ページ一覧</h1>
      <nav>
        <ul className="flex flex-col gap-2">
          <li>
            <Button asChild variant="outline">
              <Link href="/client/rhf">React Hook Form クライアント</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </>
  )
}
