import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのmode"
      description={
        <Description>
          フォーム送信前のバリデーション戦略を設定するオプション
          <br />
          onSubmit: 送信時のみバリデーション（デフォルト）
          <br />
          onBlur: フォーカスが外れた時にバリデーション
          <br />
          onChange: 値が変更される度にバリデーション
          <br />
          onTouched: 最初のblurイベント後、changeイベントでバリデーション
          <br />
          all: blurとchangeの両方のイベントでバリデーション
        </Description>
      }
      view={props.children}
    />
  )
}
