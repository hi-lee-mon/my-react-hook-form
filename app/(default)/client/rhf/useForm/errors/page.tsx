'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
  name: string
  email: string
}

export default function Page() {
  const [externalErrors, setExternalErrors] = useState<Record<string, { type: string; message: string }>>({})

  // errorsオプションを使用したフォーム
  const formWithErrors = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
    },
    errors: externalErrors,
  })

  // 通常のフォーム
  const normalForm = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
    },
  })

  // 外部エラーを設定
  const setNameError = () => {
    setExternalErrors({
      ...externalErrors,
      name: {
        type: 'manual',
        message: '外部から設定された名前のエラー',
      },
    })
  }

  const setEmailError = () => {
    setExternalErrors({
      ...externalErrors,
      email: {
        type: 'manual',
        message: '外部から設定されたメールのエラー',
      },
    })
  }

  const clearErrors = () => {
    setExternalErrors({})
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-2 text-lg font-medium">errorsオプションを使用</h3>
        <p className="mb-4 text-sm text-gray-500">外部から設定されたエラーをフォームに反映します</p>
        <div className="mb-4 flex flex-wrap gap-2">
          <Button onClick={setNameError} variant="outline" size="sm">
            名前にエラーを設定
          </Button>
          <Button onClick={setEmailError} variant="outline" size="sm">
            メールにエラーを設定
          </Button>
          <Button onClick={clearErrors} variant="outline" size="sm">
            エラーをクリア
          </Button>
        </div>
        <form onSubmit={formWithErrors.handleSubmit(() => {})} className="space-y-2">
          <div>
            <Label htmlFor="name">名前</Label>
            <Input {...formWithErrors.register('name')} />
            {formWithErrors.formState.errors.name && (
              <p className="text-red-400">{formWithErrors.formState.errors.name.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input {...formWithErrors.register('email')} />
            {formWithErrors.formState.errors.email && (
              <p className="text-red-400">{formWithErrors.formState.errors.email.message as string}</p>
            )}
          </div>
          <Button type="submit">送信</Button>
        </form>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-medium">通常のフォーム（errorsオプションなし）</h3>
        <p className="mb-4 text-sm text-gray-500">通常のバリデーションエラーのみが表示されます</p>
        <form onSubmit={normalForm.handleSubmit(() => {})} className="space-y-2">
          <div>
            <Label htmlFor="name">名前</Label>
            <Input {...normalForm.register('name', { required: '名前は必須です' })} />
            {normalForm.formState.errors.name && (
              <p className="text-red-400">{normalForm.formState.errors.name.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              {...normalForm.register('email', {
                required: 'メールアドレスは必須です',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '有効なメールアドレスを入力してください',
                },
              })}
            />
            {normalForm.formState.errors.email && (
              <p className="text-red-400">{normalForm.formState.errors.email.message as string}</p>
            )}
          </div>
          <Button type="submit">送信</Button>
        </form>
      </div>
    </div>
  )
}
