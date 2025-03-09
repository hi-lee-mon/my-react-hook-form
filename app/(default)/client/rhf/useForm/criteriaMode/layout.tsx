import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのcriteriaMode"
      description={
        <Description>
          バリデーションエラーの表示方法を設定するオプション
          <br />
          firstError: 最初のエラーのみ表示（デフォルト）
          <br />
          all: すべてのエラーを表示
          <br />
          複数のバリデーションルールがある場合に、エラーメッセージをどのように表示するかを制御する
        </Description>
      }
      view={props.children}
    />
  )
}
