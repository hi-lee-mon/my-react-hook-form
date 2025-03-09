import { getCode } from '@/lib/getCode'

export default async function Layout(props: { children: React.ReactNode }) {
  const codeString = getCode()
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">チュートリアル</h1>
      <div className="flex flex-row gap-4">
        <div className="w-1/2 border p-4">{props.children}</div>
        <pre className="w-1/2 border p-4">
          <code>{codeString}</code>
        </pre>
      </div>
    </div>
  )
}
