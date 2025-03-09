'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'

type FormValues = {
  email: string
}

export default function Page() {
  // delayErrorなし
  const formWithoutDelay = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  })

  // delayError: 500ms
  const formWithDelay500 = useForm<FormValues>({
    mode: 'onChange',
    delayError: 500,
    defaultValues: {
      email: '',
    },
  })

  // delayError: 2000ms
  const formWithDelay2000 = useForm<FormValues>({
    mode: 'onChange',
    delayError: 2000,
    defaultValues: {
      email: '',
    },
  })

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-2 text-lg font-medium">delayErrorなし</h3>
        <p className="mb-4 text-sm text-gray-500">エラーはすぐに表示されます</p>
        <form onSubmit={formWithoutDelay.handleSubmit(() => {})} className="space-y-2">
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              {...formWithoutDelay.register('email', {
                required: 'メールアドレスは必須です',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '有効なメールアドレスを入力してください',
                },
              })}
            />
            {formWithoutDelay.formState.errors.email && (
              <p className="text-red-400">{formWithoutDelay.formState.errors.email.message as string}</p>
            )}
          </div>
          <Button type="submit">送信</Button>
        </form>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-medium">delayError: 500ms</h3>
        <p className="mb-4 text-sm text-gray-500">エラーは500ミリ秒後に表示されます</p>
        <form onSubmit={formWithDelay500.handleSubmit(() => {})} className="space-y-2">
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              {...formWithDelay500.register('email', {
                required: 'メールアドレスは必須です',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '有効なメールアドレスを入力してください',
                },
              })}
            />
            {formWithDelay500.formState.errors.email && (
              <p className="text-red-400">{formWithDelay500.formState.errors.email.message as string}</p>
            )}
          </div>
          <Button type="submit">送信</Button>
        </form>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-medium">delayError: 2000ms</h3>
        <p className="mb-4 text-sm text-gray-500">エラーは2秒後に表示されます</p>
        <form onSubmit={formWithDelay2000.handleSubmit(() => {})} className="space-y-2">
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              {...formWithDelay2000.register('email', {
                required: 'メールアドレスは必須です',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '有効なメールアドレスを入力してください',
                },
              })}
            />
            {formWithDelay2000.formState.errors.email && (
              <p className="text-red-400">{formWithDelay2000.formState.errors.email.message as string}</p>
            )}
          </div>
          <Button type="submit">送信</Button>
        </form>
      </div>
    </div>
  )
}
