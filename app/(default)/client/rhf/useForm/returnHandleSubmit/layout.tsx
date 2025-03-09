import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのreturn_formState"
      description={
        <Description>
          preventDefaultやバリデーションを行い、結果をコールバック関数に渡す
          <br />
          引数のコールバック関数は非同期関数にすることができる
        </Description>
      }
      view={props.children}
    />
  )
}
