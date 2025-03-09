import fs from 'fs'
import { headers } from 'next/headers'
import path from 'path'

export function getCode() {
  const requestUrl = headers().get('x-url')

  const [_1, _2, _3, ...reqPath] = requestUrl?.split('/') ?? []

  // ファイルのパスを指定
  const filePath = path.join(process.cwd(), `app/(default)/${reqPath.join('/')}/page.tsx`)

  // ファイルの内容を同期的に読み込む
  const codeString = fs.readFileSync(filePath, 'utf-8')

  return codeString
}
