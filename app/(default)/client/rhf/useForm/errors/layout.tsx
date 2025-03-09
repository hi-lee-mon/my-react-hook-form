import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのerrors"
      description={
        <Description>
          外部から提供されたエラーをフォームに反映するオプション
          <br />
          サーバーサイドバリデーションのエラーをフォームに表示する場合に便利
          <br />
          外部エラーの状態変更に反応してフォームのエラー状態を更新する
          <br />
          setErrorメソッドの代わりに外部状態からエラーを管理できる
        </Description>
      }
      view={props.children}
    />
  )
}
