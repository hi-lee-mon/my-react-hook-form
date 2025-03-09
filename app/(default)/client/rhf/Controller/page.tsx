'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

interface IFormInput {
  username: string
}

export default function Page() {
  const [formState, setFormState] = useState<IFormInput>({
    username: '',
  })
  // 1.基本的な使用方法と異なるのは"control"を受け取ることのみ
  const { control, handleSubmit } = useForm<IFormInput>({ defaultValues: { username: '' } })

  return (
    <div>
      <form onSubmit={handleSubmit((data) => setFormState(data))} className="flex flex-col gap-2">
        <Controller
          // 2.name属性はControllerコンポーネントに渡す
          name="username"
          // 3.useFormのcontrolを渡すことでカスタムコンポーネントと統合の準備をする
          control={control}
          // バリデーションルールを設定
          rules={{ required: 'ユーザー名は必須です' }}
          render={({ field, fieldState }) => (
            <div>
              <Label htmlFor="username">ユーザー名</Label>
              {/* 4.カスタムコンポーネントにfieldを渡すことでRHFと接続する */}
              <Input {...field} id="username" />
              {fieldState.error && <p className="text-red-500">{fieldState.error.message}</p>}
            </div>
          )}
        />
        <Button type="submit">送信</Button>
      </form>
      <p>ユーザー名: {formState.username}</p>
    </div>
  )
}
