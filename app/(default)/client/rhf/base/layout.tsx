import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return <DualColumnLayout title="基本" view={props.children} />
}
