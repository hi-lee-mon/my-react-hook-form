'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
  name: string
  email: string
  newsletter?: boolean
  address?: {
    street?: string
    city?: string
  }
}

export default function Page() {
  const [showAddress, setShowAddress] = useState(false)
  const [showNewsletter, setShowNewsletter] = useState(false)

  // shouldUnregisterをtrueに設定
  const formWithUnregister = useForm<FormValues>({
    shouldUnregister: true,
    defaultValues: {
      name: '',
      email: '',
    },
  })

  // shouldUnregisterをfalseに設定（デフォルト）
  const formWithoutUnregister = useForm<FormValues>({
    shouldUnregister: false,
    defaultValues: {
      name: '',
      email: '',
      newsletter: false,
      address: {
        street: '',
        city: '',
      },
    },
  })

  const onSubmitWithUnregister = (data: FormValues) => {
    console.log('With Unregister:', data)
    alert(JSON.stringify(data, null, 2))
  }

  const onSubmitWithoutUnregister = (data: FormValues) => {
    console.log('Without Unregister:', data)
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-lg font-medium mb-2">shouldUnregister: true</h3>
        <p className="text-sm text-gray-500 mb-4">
          フィールドがアンマウントされると、そのフィールドの値はフォームから削除されます
        </p>
        <form onSubmit={formWithUnregister.handleSubmit(onSubmitWithUnregister)} className="space-y-2">
          <div>
            <Label htmlFor="name">名前</Label>
            <Input {...formWithUnregister.register('name', { required: '名前は必須です' })} />
            {formWithUnregister.formState.errors.name && (
              <p className="text-red-400">{formWithUnregister.formState.errors.name.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input {...formWithUnregister.register('email', { required: 'メールアドレスは必須です' })} />
            {formWithUnregister.formState.errors.email && (
              <p className="text-red-400">{formWithUnregister.formState.errors.email.message as string}</p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="showNewsletter1"
              checked={showNewsletter}
              onCheckedChange={(checked) => setShowNewsletter(checked as boolean)}
            />
            <Label htmlFor="showNewsletter1">ニュースレターオプションを表示</Label>
          </div>

          {showNewsletter && (
            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter1" {...formWithUnregister.register('newsletter')} />
              <Label htmlFor="newsletter1">ニュースレターを受け取る</Label>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <Checkbox
              id="showAddress1"
              checked={showAddress}
              onCheckedChange={(checked) => setShowAddress(checked as boolean)}
            />
            <Label htmlFor="showAddress1">住所フィールドを表示</Label>
          </div>

          {showAddress && (
            <div className="space-y-2 border p-4 rounded">
              <div>
                <Label htmlFor="street">住所</Label>
                <Input {...formWithUnregister.register('address.street')} />
              </div>
              <div>
                <Label htmlFor="city">市区町村</Label>
                <Input {...formWithUnregister.register('address.city')} />
              </div>
            </div>
          )}

          <Button type="submit">送信</Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => console.log('Current values:', formWithUnregister.getValues())}
          >
            現在の値を表示
          </Button>
        </form>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">shouldUnregister: false（デフォルト）</h3>
        <p className="text-sm text-gray-500 mb-4">
          フィールドがアンマウントされても、そのフィールドの値はフォームに残ります
        </p>
        <form onSubmit={formWithoutUnregister.handleSubmit(onSubmitWithoutUnregister)} className="space-y-2">
          <div>
            <Label htmlFor="name">名前</Label>
            <Input {...formWithoutUnregister.register('name', { required: '名前は必須です' })} />
            {formWithoutUnregister.formState.errors.name && (
              <p className="text-red-400">{formWithoutUnregister.formState.errors.name.message as string}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input {...formWithoutUnregister.register('email', { required: 'メールアドレスは必須です' })} />
            {formWithoutUnregister.formState.errors.email && (
              <p className="text-red-400">{formWithoutUnregister.formState.errors.email.message as string}</p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="showNewsletter2"
              checked={showNewsletter}
              onCheckedChange={(checked) => setShowNewsletter(checked as boolean)}
            />
            <Label htmlFor="showNewsletter2">ニュースレターオプションを表示</Label>
          </div>

          {showNewsletter && (
            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter2" {...formWithoutUnregister.register('newsletter')} />
              <Label htmlFor="newsletter2">ニュースレターを受け取る</Label>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <Checkbox
              id="showAddress2"
              checked={showAddress}
              onCheckedChange={(checked) => setShowAddress(checked as boolean)}
            />
            <Label htmlFor="showAddress2">住所フィールドを表示</Label>
          </div>

          {showAddress && (
            <div className="space-y-2 border p-4 rounded">
              <div>
                <Label htmlFor="street">住所</Label>
                <Input {...formWithoutUnregister.register('address.street')} />
              </div>
              <div>
                <Label htmlFor="city">市区町村</Label>
                <Input {...formWithoutUnregister.register('address.city')} />
              </div>
            </div>
          )}

          <Button type="submit">送信</Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => console.log('Current values:', formWithoutUnregister.getValues())}
          >
            現在の値を表示
          </Button>
        </form>
      </div>
    </div>
  )
}
