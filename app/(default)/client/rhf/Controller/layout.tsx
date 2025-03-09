import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="UIライブラリと統合"
      description={
        <Description>
          シンプルなフォームを作成する際に使用する
          <br />
          ロジック（入力管理、状態管理、バリデーション、submit処理）とjsxを同じファイルに記載する
        </Description>
      }
      view={props.children}
    />
  )
}
