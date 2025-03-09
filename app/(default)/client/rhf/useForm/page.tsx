import { Button } from '@/components/ui/button'
import { getDirectories } from '@/lib/getDirectories'
import Link from 'next/link'
import path from 'path'

export default function Page() {
  const folders = getDirectories(path.join(process.cwd(), 'app/(default)/client/rhf/useForm'))
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {folders.map((folder) => {
        return (
          <Button asChild variant="outline" key={folder}>
            <Link href={`/client/rhf/useForm/${folder}`}>{folder}</Link>
          </Button>
        )
      })}
    </div>
  )
}
