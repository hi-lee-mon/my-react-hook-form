import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのresetOptions"
      description={
        <Description>
          フォームのリセット時の挙動をカスタマイズするオプション
          <br />
          ※useFormの引数に渡すことで呼び出し時にオプションを渡さなくて良くなるが、説明のために下記のコードではreset時に指定する
          <br />
          keepValues: 現在の値を保持
          <br />
          keepErrors: エラー状態を保持
          <br />
          keepDirty: dirty状態を保持（フォームのフィールドが初期値から変更されたことを示す状態）
          <br />
          keepIsSubmitted:
          送信状態を保持（isSubmitted状態をリセット時に保持するかどうかを制御するオプションです。isSubmittedは、フォームが一度でも送信されたかどうかを示すブール値です。）
          <br />
          keepTouched:
          タッチ状態を保持（フォームのtouched状態をリセット時に保持するかどうかを制御するオプションです。touched状態は、ユーザーがフィールドにフォーカスしてからフォーカスを外したことを示します。）
          <br />
          keepDefaultValues:
          デフォルト値を保持（フォームのデフォルト値をリセット時に保持するかどうかを制御するオプションです。デフォルトでは、reset関数を呼び出すと、フォームのデフォルト値はリセットされ、新たに指定されたデフォルト値に置き換えられます。
          trueを指定すると、既存のデフォルト値が保持され、新たに指定されたデフォルト値に置き換えられません。フォームのデフォルト値を変更せずに、他の状態だけをリセットしたい場合に便利です。）
        </Description>
      }
      view={props.children}
    />
  )
}
