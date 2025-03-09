import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのdelayError"
      description={
        <Description>
          エラーメッセージの表示を遅延させるオプション
          <br />
          数値（ミリ秒）で指定し、エラーが発生してから表示されるまでの遅延時間を設定
          <br />
          ユーザーが入力中にエラーメッセージが頻繁に表示されるのを防ぐのに役立つ
          <br />
          特にonChangeモードと組み合わせて使用すると効果的
        </Description>
      }
      view={props.children}
    />
  )
}
