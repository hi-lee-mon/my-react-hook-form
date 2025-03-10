import { Button } from '@/components/ui/button'
import { getDirectories } from '@/lib/getDirectories'
import Link from 'next/link'
import path from 'path'

export default async function Page() {
  const folders = getDirectories(path.join(process.cwd(), 'app/(default)/client/rhf'))
  return (
    <div className="flex flex-col gap-2">
      {folders.map((folder) => {
        return (
          <Button asChild variant="outline" key={folder}>
            <Link href={`/client/rhf/${folder}`}>{folder}</Link>
          </Button>
        )
      })}
    </div>
  )
}
