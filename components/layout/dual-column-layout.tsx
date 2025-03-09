import { getCode } from '@/lib/getCode'

export default async function DualColumnLayout({
  title,
  description,
  view,
}: {
  title: string
  description?: React.ReactNode
  view: React.ReactNode
}) {
  const code = await getCode('tsx')

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      {description}
      <div className="flex flex-row gap-4">
        <div className="w-1/2 rounded-lg border p-4">{view}</div>
        <div className="w-1/2 rounded-lg border" dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    </div>
  )
}
