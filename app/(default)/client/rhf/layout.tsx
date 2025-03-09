import BackButton from '@/app/(default)/client/rhf/back-button'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto">
      <div className="mb-4 flex flex-row gap-2">
        <h1 className="text-2xl font-bold">React Hook Form クライアント</h1>
        <BackButton />
      </div>
      {children}
    </div>
  )
}
