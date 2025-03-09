import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'
import { getCode } from '@/lib/getCode'

export default async function Layout(props: { children: React.ReactNode }) {
  const code = await getCode('tsx')

  return (
    <DualColumnLayout
      title="useControllerによる統合"
      description={
        <Description>
          共通コンポーネントを作成する際に使用する
          <br />
          Controllerコンポーネントのpropsをカスタムコンポーネントのpropsとして、propsをそのままuseControllerに渡すだけで使用感はほぼ同じ
          <br />
          ControllerコンポーネントとuseControllerでできることは全く同じ
          <br />
          ロジックをjsxから取り除けるので、filed.valueが空だったら・・・という処理をjsxの外で書ける
        </Description>
      }
      view={props.children}
    />
  )
}
