import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのvalues"
      description={
        <Description>
          外部の状態変更に反応してフォームの値を更新するオプション
          <br />
          サーバーデータやグローバル状態からフォーム値を更新する場合に便利
          <br />
          defaultValuesよりも優先され、変更があると自動的にフォームが更新される
          <br />
          resetOptionsと組み合わせて更新時の挙動をカスタマイズ可能
        </Description>
      }
      view={props.children}
    />
  )
}
