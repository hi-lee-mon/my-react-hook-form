import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのreturn_unregister"
      description={
        <Description>
          フォームからフィールドの登録を解除するメソッド
          <br />
          unregister後の再レンダリングでregisterしたフィールドが再度登録されるのでuseEffectを使用したregisterやUIのtoggleで使用する
          <br />
          単一または複数のフィールドを登録解除できる
          <br />
          登録解除後もフィールドの状態を保持するためのオプションも提供
          <br />
          登録解除されたフィールドは値や参照が削除され、バリデーションルールも削除される
        </Description>
      }
      view={props.children}
    />
  )
}
