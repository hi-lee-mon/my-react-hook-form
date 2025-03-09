import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのreturn_register"
      description={
        <Description>
          registerに渡した文字列をkeyとしてプロパティを登録する
          <br />
        </Description>
      }
      view={props.children}
    />
  )
}
