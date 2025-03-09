import DualColumnLayout from '@/components/layout/dual-column-layout'

export default async function Layout(props: { children: React.ReactNode }) {
  return <DualColumnLayout title="useFormのmode" view={props.children} />
}
