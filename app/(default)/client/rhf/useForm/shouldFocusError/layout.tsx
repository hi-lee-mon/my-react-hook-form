import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのshouldFocusError"
      description={
        <Description>
          エラー発生時の自動フォーカス機能を制御するオプション
          <br />
          true: エラーが発生した最初のフィールドに自動的にフォーカス（デフォルト）
          <br />
          false: エラー発生時に自動フォーカスしない
          <br />
          バリデーションエラー発生時のユーザー体験を向上させるための機能
        </Description>
      }
      view={props.children}
    />
  )
}
