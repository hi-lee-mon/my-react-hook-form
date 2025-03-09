import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのreturn_formState"
      description={
        <Description>
          登録したフォームの状態を取得するAPI
          <br />
          formState.isDirtyのような使いかただと再レンダリングされないので注意
          <br />
          分割代入すると再レンダリングされるようになる
          <br />
          useEffectで監視する場合は、依存配列にformStateを含める（formState.isDirtyだと監視できない）
        </Description>
      }
      view={props.children}
    />
  )
}
