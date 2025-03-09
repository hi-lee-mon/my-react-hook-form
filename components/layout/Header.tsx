import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Header({ headerText }: { headerText: string }) {
  return (
    <header className="flex h-16 items-center justify-between border-b p-4">
      <Button className="text-2xl font-bold" asChild variant="link">
        <Link href="/">{headerText}</Link>
      </Button>
      <ModeToggle />
    </header>
  )
}
