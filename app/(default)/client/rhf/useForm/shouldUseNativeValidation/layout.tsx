import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのshouldUseNativeValidation"
      description={
        <Description>
          ブラウザのネイティブバリデーション機能を使用するかどうかを設定するオプション
          <br />
          true: ブラウザのネイティブバリデーション（ポップアップなど）を使用
          <br />
          false: React Hook Formのバリデーションのみを使用（デフォルト）
          <br />
          ブラウザ標準のバリデーションUIを活用したい場合に便利
        </Description>
      }
      view={props.children}
    />
  )
}
