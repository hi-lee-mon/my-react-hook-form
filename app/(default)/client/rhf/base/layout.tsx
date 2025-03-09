import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="基本"
      description={
        <Description>
          register関数を使ったRHFとの接続、バリデーション、成功時の処理、エラー時の処理の説明
          <br />
          aria-invalidはおまじないとして書いておけばよさそう。errors.ageがあるときにユーザに対してその要素が無効であることを知らせることができる
        </Description>
      }
      view={props.children}
    />
  )
}
