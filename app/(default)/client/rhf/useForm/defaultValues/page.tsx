'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function Page() {
  const staticDefaultValues = useForm({
    defaultValues: {
      input: '静的なデフォルト値',
    },
  })

  const asyncDefaultValues = useForm({
    defaultValues: async () => {
      // 非同期処理を模擬
      await new Promise((resolve) => setTimeout(resolve, 500))
      return {
        input: '非同期で取得したデフォルト値',
      }
    },
  })

  const noDefaultValues = useForm()

  // useEffectでリセット時にdefaultValuesを設定する例
  const resetWithDefaultValues = useForm()

  useEffect(() => {
    // コンポーネントマウント時にリセット
    resetWithDefaultValues.reset({
      input: 'リセットで設定したデフォルト値',
    })
  }, [resetWithDefaultValues])

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={staticDefaultValues.handleSubmit(() => {})}>
        <Label htmlFor="input">静的なdefaultValues</Label>
        <Input {...staticDefaultValues.register('input')} />
        <Button>送信</Button>
      </form>

      <form onSubmit={asyncDefaultValues.handleSubmit(() => {})}>
        <Label htmlFor="input">非同期のdefaultValues</Label>
        <Input {...asyncDefaultValues.register('input')} />
        <Button>送信</Button>
      </form>

      <form onSubmit={noDefaultValues.handleSubmit(() => {})}>
        <Label htmlFor="input">defaultValuesなし</Label>
        <Input {...noDefaultValues.register('input')} />
        <Button>送信</Button>
      </form>

      <form onSubmit={resetWithDefaultValues.handleSubmit(() => {})}>
        <Label htmlFor="input">resetでdefaultValues設定</Label>
        <Input {...resetWithDefaultValues.register('input')} />
        <Button>送信</Button>
      </form>
    </div>
  )
}
