'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'

type FormValues = {
  name: string
  email: string
  age: string
}

export default function Page() {
  // shouldFocusErrorをtrueに設定（デフォルト）
  const formWithFocus = useForm<FormValues>({
    shouldFocusError: true,
    defaultValues: {
      name: '',
      email: '',
      age: '',
    },
  })

  // shouldFocusErrorをfalseに設定
  const formWithoutFocus = useForm<FormValues>({
    shouldFocusError: false,
    defaultValues: {
      name: '',
      email: '',
      age: '',
    },
  })

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-2 text-lg font-medium">shouldFocusError: true（デフォルト）</h3>
        <p className="mb-4 text-sm text-gray-500">
          エラーが発生した場合、最初のエラーフィールドに自動的にフォーカスします
        </p>
        <form onSubmit={formWithFocus.handleSubmit(() => {})} className="space-y-2">
          <div>
            <Label htmlFor="name">名前</Label>
            <Input {...formWithFocus.register('name', { required: '名前は必須です' })} />
            {formWithFocus.formState.errors.name && (
              <p className="text-red-400">{formWithFocus.formState.errors.name.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              {...formWithFocus.register('email', {
                required: 'メールアドレスは必須です',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '有効なメールアドレスを入力してください',
                },
              })}
            />
            {formWithFocus.formState.errors.email && (
              <p className="text-red-400">{formWithFocus.formState.errors.email.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor="age">年齢</Label>
            <Input
              type="number"
              {...formWithFocus.register('age', {
                required: '年齢は必須です',
                min: {
                  value: 18,
                  message: '18歳以上である必要があります',
                },
              })}
            />
            {formWithFocus.formState.errors.age && (
              <p className="text-red-400">{formWithFocus.formState.errors.age.message as string}</p>
            )}
          </div>
          <Button type="submit">送信</Button>
        </form>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-medium">shouldFocusError: false</h3>
        <p className="mb-4 text-sm text-gray-500">エラーが発生しても、フィールドに自動的にフォーカスしません</p>
        <form onSubmit={formWithoutFocus.handleSubmit(() => {})} className="space-y-2">
          <div>
            <Label htmlFor="name">名前</Label>
            <Input {...formWithoutFocus.register('name', { required: '名前は必須です' })} />
            {formWithoutFocus.formState.errors.name && (
              <p className="text-red-400">{formWithoutFocus.formState.errors.name.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              {...formWithoutFocus.register('email', {
                required: 'メールアドレスは必須です',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '有効なメールアドレスを入力してください',
                },
              })}
            />
            {formWithoutFocus.formState.errors.email && (
              <p className="text-red-400">{formWithoutFocus.formState.errors.email.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor="age">年齢</Label>
            <Input
              type="number"
              {...formWithoutFocus.register('age', {
                required: '年齢は必須です',
                min: {
                  value: 18,
                  message: '18歳以上である必要があります',
                },
              })}
            />
            {formWithoutFocus.formState.errors.age && (
              <p className="text-red-400">{formWithoutFocus.formState.errors.age.message as string}</p>
            )}
          </div>
          <Button type="submit">送信</Button>
        </form>
      </div>
    </div>
  )
}
