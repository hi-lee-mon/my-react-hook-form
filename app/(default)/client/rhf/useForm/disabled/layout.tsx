import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのdisabled"
      description={
        <Description>
          フォーム全体の無効化状態を制御するオプション
          <br />
          true: フォーム内のすべての入力フィールドを無効化
          <br />
          false: フォームを通常通り有効化（デフォルト）
          <br />
          読み取り専用モードや権限に基づいたフォーム制御に便利
        </Description>
      }
      view={props.children}
    />
  )
}
