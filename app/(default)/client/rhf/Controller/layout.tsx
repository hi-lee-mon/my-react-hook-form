import Description from '@/components/description'
import { getCode } from '@/lib/getCode'

export default async function Layout(props: { children: React.ReactNode }) {
  const code = await getCode('tsx')

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">UIライブラリと統合</h1>
      <Description>
        シンプルなフォームを作成する際に使用する
        <br />
        ロジック（入力管理、状態管理、バリデーション、submit処理）とjsxを同じファイルに記載する
      </Description>
      <div className="flex flex-row gap-4">
        <div className="w-1/2 rounded-lg border p-4">{props.children}</div>
        <div className="w-1/2 rounded-lg border" dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    </div>
  )
}
