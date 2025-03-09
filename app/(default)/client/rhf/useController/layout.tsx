import Description from '@/components/description'
import { getCode } from '@/lib/getCode'

export default async function Layout(props: { children: React.ReactNode }) {
  const code = await getCode('tsx')

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">useControllerによる統合</h1>
      <Description>
        共通コンポーネントを作成する際に使用する
        <br />
        Controllerコンポーネントのpropsをカスタムコンポーネントのpropsとして、propsをそのままuseControllerに渡すだけで使用感はほぼ同じ
        <br />
        ControllerコンポーネントとuseControllerでできることは全く同じ
        <br />
        ロジックをjsxから取り除けるので、filed.valueが空だったら・・・という処理をjsxの外で書ける
      </Description>
      <div className="flex flex-row gap-4">
        <div className="w-1/2 rounded-lg border p-4">{props.children}</div>
        <div className="w-1/2 rounded-lg border" dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    </div>
  )
}
