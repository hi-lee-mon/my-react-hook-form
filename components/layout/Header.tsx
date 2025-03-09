import { ModeToggle } from '@/components/mode-toggle'

export default function Header({ headerText }: { headerText: string }) {
  return (
    <header className="flex h-16 items-center justify-between border-b p-4">
      <p className="text-2xl font-bold">{headerText}</p>
      <ModeToggle />
    </header>
  )
}
