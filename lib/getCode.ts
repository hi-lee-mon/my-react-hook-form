import fs from 'fs'
import { headers } from 'next/headers'
import path from 'path'
import type { BundledLanguage } from 'shikiji'
import { getHighlighter } from 'shikiji'

export async function getCode(lang: BundledLanguage) {
  const requestUrl = headers().get('x-url')

  // http://localhost:3000/client/rhf/tuto => ['http:', '', 'localhost:3000', 'client', 'rhf', 'tuto']
  const [_schema, _slash, _domain, ...reqPath] = requestUrl?.split('/') ?? []

  // ファイルのパスを指定
  const filePath = path.join(process.cwd(), `app/(default)/${reqPath.join('/')}/page.tsx`)

  // ファイルの内容を同期的に読み込む
  const codeString = fs.readFileSync(filePath, 'utf-8')

  const highlighter = await getHighlighter({
    themes: ['github-dark', 'min-light'],
    langs: ['javascript', 'tsx'],
  })

  const out = highlighter.codeToHtml(codeString, {
    lang,
    themes: {
      light: 'min-light',
      dark: 'github-dark',
    },
  })

  return out
}
