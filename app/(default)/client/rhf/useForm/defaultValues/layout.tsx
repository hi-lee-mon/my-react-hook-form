import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのdefaultValues"
      description={
        <Description>
          フォームのデフォルト値を設定するオプション
          <br />
          オブジェクトまたは非同期関数で指定可能
          <br />
          フォーム全体のデフォルト値を一括で設定できる
          <br />
          undefinedは避け、空文字列や空配列を使用することを推奨
        </Description>
      }
      view={props.children}
    />
  )
}
