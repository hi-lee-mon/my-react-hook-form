'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
  name: string
  email: string
  message: string
}

export default function Page() {
  const [isDisabled, setIsDisabled] = useState(true)

  // disabledをtrueに設定
  const formDisabled = useForm<FormValues>({
    disabled: true,
    defaultValues: {
      name: 'ユーザー名',
      email: 'user@example.com',
      message: 'これはメッセージです',
    },
  })

  // disabledを動的に切り替え
  const formToggleDisabled = useForm<FormValues>({
    disabled: isDisabled,
    defaultValues: {
      name: 'ユーザー名',
      email: 'user@example.com',
      message: 'これはメッセージです',
    },
  })

  // disabledなし（デフォルト）
  const formEnabled = useForm<FormValues>({
    defaultValues: {
      name: 'ユーザー名',
      email: 'user@example.com',
      message: 'これはメッセージです',
    },
  })

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-2 text-lg font-medium">disabled: true</h3>
        <p className="mb-4 text-sm text-gray-500">フォーム全体が無効化されます</p>
        <form onSubmit={formDisabled.handleSubmit(() => {})} className="space-y-2">
          <div>
            <Label htmlFor="name">名前</Label>
            <Input {...formDisabled.register('name')} />
          </div>
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input {...formDisabled.register('email')} />
          </div>
          <div>
            <Label htmlFor="message">メッセージ</Label>
            <Input {...formDisabled.register('message')} />
          </div>
          <Button type="submit">送信</Button>
        </form>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-medium">動的に切り替え可能なdisabled</h3>
        <div className="mb-4 flex items-center space-x-2">
          <Switch id="toggle-disabled" checked={isDisabled} onCheckedChange={setIsDisabled} />
          <Label htmlFor="toggle-disabled">フォームを{isDisabled ? '無効化' : '有効化'}</Label>
        </div>
        <form onSubmit={formToggleDisabled.handleSubmit(() => {})} className="space-y-2">
          <div>
            <Label htmlFor="name">名前</Label>
            <Input {...formToggleDisabled.register('name')} />
          </div>
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input {...formToggleDisabled.register('email')} />
          </div>
          <div>
            <Label htmlFor="message">メッセージ</Label>
            <Input {...formToggleDisabled.register('message')} />
          </div>
          <Button type="submit">送信</Button>
        </form>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-medium">disabled: false（デフォルト）</h3>
        <p className="mb-4 text-sm text-gray-500">フォームは通常通り有効です</p>
        <form onSubmit={formEnabled.handleSubmit(() => {})} className="space-y-2">
          <div>
            <Label htmlFor="name">名前</Label>
            <Input {...formEnabled.register('name')} />
          </div>
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input {...formEnabled.register('email')} />
          </div>
          <div>
            <Label htmlFor="message">メッセージ</Label>
            <Input {...formEnabled.register('message')} />
          </div>
          <Button type="submit">送信</Button>
        </form>
      </div>
    </div>
  )
}
