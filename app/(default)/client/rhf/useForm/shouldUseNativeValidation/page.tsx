'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'

type FormValues = {
  name: string
  email: string
  age: string
  url: string
}

export default function Page() {
  // shouldUseNativeValidationをtrueに設定
  const formWithNativeValidation = useForm<FormValues>({
    shouldUseNativeValidation: true,
    defaultValues: {
      name: '',
      email: '',
      age: '',
      url: '',
    },
  })

  // shouldUseNativeValidationをfalseに設定（デフォルト）
  const formWithoutNativeValidation = useForm<FormValues>({
    shouldUseNativeValidation: false,
    defaultValues: {
      name: '',
      email: '',
      age: '',
      url: '',
    },
  })

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-2 text-lg font-medium">shouldUseNativeValidation: true</h3>
        <p className="mb-4 text-sm text-gray-500">
          ブラウザのネイティブバリデーションを使用します（フォーカスアウト時にブラウザのポップアップが表示されます）
        </p>
        <form onSubmit={formWithNativeValidation.handleSubmit(() => {})} className="space-y-2">
          <div>
            <Label htmlFor="name">名前</Label>
            <Input {...formWithNativeValidation.register('name', { required: '名前は必須です' })} />
            {formWithNativeValidation.formState.errors.name && (
              <p className="text-red-400">{formWithNativeValidation.formState.errors.name.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              type="email"
              {...formWithNativeValidation.register('email', {
                required: 'メールアドレスは必須です',
              })}
            />
            {formWithNativeValidation.formState.errors.email && (
              <p className="text-red-400">{formWithNativeValidation.formState.errors.email.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor="age">年齢（18歳以上）</Label>
            <Input
              type="number"
              min="18"
              {...formWithNativeValidation.register('age', {
                required: '年齢は必須です',
                min: {
                  value: 18,
                  message: '18歳以上である必要があります',
                },
              })}
            />
            {formWithNativeValidation.formState.errors.age && (
              <p className="text-red-400">{formWithNativeValidation.formState.errors.age.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor="url">ウェブサイト</Label>
            <Input
              type="url"
              {...formWithNativeValidation.register('url', {
                required: 'URLは必須です',
              })}
            />
            {formWithNativeValidation.formState.errors.url && (
              <p className="text-red-400">{formWithNativeValidation.formState.errors.url.message as string}</p>
            )}
          </div>
          <Button type="submit">送信</Button>
        </form>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-medium">shouldUseNativeValidation: false（デフォルト）</h3>
        <p className="mb-4 text-sm text-gray-500">
          React Hook Formのバリデーションのみを使用します（ブラウザのネイティブポップアップは表示されません）
        </p>
        <form onSubmit={formWithoutNativeValidation.handleSubmit(() => {})} className="space-y-2">
          <div>
            <Label htmlFor="name">名前</Label>
            <Input {...formWithoutNativeValidation.register('name', { required: '名前は必須です' })} />
            {formWithoutNativeValidation.formState.errors.name && (
              <p className="text-red-400">{formWithoutNativeValidation.formState.errors.name.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              type="email"
              {...formWithoutNativeValidation.register('email', {
                required: 'メールアドレスは必須です',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '有効なメールアドレスを入力してください',
                },
              })}
            />
            {formWithoutNativeValidation.formState.errors.email && (
              <p className="text-red-400">{formWithoutNativeValidation.formState.errors.email.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor="age">年齢（18歳以上）</Label>
            <Input
              type="number"
              {...formWithoutNativeValidation.register('age', {
                required: '年齢は必須です',
                min: {
                  value: 18,
                  message: '18歳以上である必要があります',
                },
              })}
            />
            {formWithoutNativeValidation.formState.errors.age && (
              <p className="text-red-400">{formWithoutNativeValidation.formState.errors.age.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor="url">ウェブサイト</Label>
            <Input
              type="url"
              {...formWithoutNativeValidation.register('url', {
                required: 'URLは必須です',
                pattern: {
                  value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                  message: '有効なURLを入力してください',
                },
              })}
            />
            {formWithoutNativeValidation.formState.errors.url && (
              <p className="text-red-400">{formWithoutNativeValidation.formState.errors.url.message as string}</p>
            )}
          </div>
          <Button type="submit">送信</Button>
        </form>
      </div>
    </div>
  )
}
