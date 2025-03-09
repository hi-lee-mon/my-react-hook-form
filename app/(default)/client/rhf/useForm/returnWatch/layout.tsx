import Description from '@/components/description'
import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <DualColumnLayout
      title="useFormのreturn_setValue"
      description={
        <Description>
          値を更新
          <br />
        </Description>
      }
      view={props.children}
    />
  )
}
