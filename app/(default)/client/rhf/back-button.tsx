'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <Button variant="secondary" onClick={() => router.back()}>
      戻る
    </Button>
  )
}
