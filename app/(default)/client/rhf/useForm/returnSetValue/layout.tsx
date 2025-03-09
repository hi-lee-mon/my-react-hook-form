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
          setValueを呼び出しても再レンダリングはトリガーされない（dom上の見え方と裏で管理する値はちゃんと変わる）
          <br />
        </Description>
      }
      view={props.children}
    />
  )
}
