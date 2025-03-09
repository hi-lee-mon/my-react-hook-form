import { Button } from '@/components/ui/button'
import fs from 'fs'
import Link from 'next/link'
import path from 'path'

const getDirectories = (source: string) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory()) // ディレクトリのみ取得
    .map((dirent) => dirent.name)

export default async function Page() {
  const folders = getDirectories(path.join(process.cwd(), 'app/(default)/client/rhf'))
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">React Hook Form クライアント</h1>
      <div className="flex flex-col gap-2">
        {folders.map((folder) => {
          return (
            <Button asChild variant="outline" key={folder}>
              <Link href={`/client/rhf/${folder}`}>{folder}</Link>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
