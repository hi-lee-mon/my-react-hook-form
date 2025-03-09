'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Page() {
  const [externalValues, setExternalValues] = useState({
    input: '外部から更新された値',
  })

  const formWithValues = useForm({
    values: externalValues,
    defaultValues: {
      input: 'デフォルト値（valuesが優先されます）',
    },
  })

  const formWithoutValues = useForm({
    defaultValues: {
      input: 'デフォルト値のみ',
    },
  })

  const updateExternalValues = () => {
    setExternalValues({
      input: `外部から更新された値 ${new Date().toLocaleTimeString()}`,
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={updateExternalValues} variant="outline">
        外部値を更新
      </Button>

      <form onSubmit={formWithValues.handleSubmit(() => {})}>
        <Label htmlFor="input">valuesを使用</Label>
        <Input {...formWithValues.register('input')} />
        <p className="text-sm text-gray-500">現在の値: {formWithValues.watch('input')}</p>
        <Button>送信</Button>
      </form>

      <form onSubmit={formWithoutValues.handleSubmit(() => {})}>
        <Label htmlFor="input">valuesなし（defaultValuesのみ）</Label>
        <Input {...formWithoutValues.register('input')} />
        <p className="text-sm text-gray-500">現在の値: {formWithoutValues.watch('input')}</p>
        <Button>送信</Button>
      </form>
    </div>
  )
}
