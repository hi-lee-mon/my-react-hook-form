import { getCode } from '@/lib/getCode'

export default async function Layout(props: { children: React.ReactNode }) {
  const code = await getCode()

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">チュートリアル</h1>
      <div className="flex flex-row gap-4">
        <div className="w-1/2 border p-4">{props.children}</div>
        <div className="w-1/2 border" dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    </div>
  )
}
