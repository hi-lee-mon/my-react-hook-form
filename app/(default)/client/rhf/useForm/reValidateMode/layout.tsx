import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのreValidateMode"
      description={
        <Description>
          フォーム送信後のバリデーション戦略を設定するオプション
          <br />
          onChange: 値が変更される度に再バリデーション（デフォルト）
          <br />
          onBlur: フォーカスが外れた時に再バリデーション
          <br />
          onSubmit: 送信時のみ再バリデーション
        </Description>
      }
      view={props.children}
    />
  )
}
