import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのshouldUnregister"
      description={
        <Description>
          フィールドがアンマウントされた時の挙動を制御するオプション
          <br />
          ※現在の値の確認はconsole.log（RHFは画面の表示と裏側で持つ状態の2つがあることを意識すること）
          <br />
          true: アンマウント時にフィールドの値を削除
          <br />
          false: アンマウント時もフィールドの値を保持（デフォルト）
          <br />
          条件付きレンダリングされるフィールドの値をどう扱うかを決定する
        </Description>
      }
      view={props.children}
    />
  )
}
