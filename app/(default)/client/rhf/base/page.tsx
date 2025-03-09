'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import type { FieldErrors } from 'react-hook-form'
import { useForm } from 'react-hook-form'

// フォームの値の型定義
interface IFormInput {
  firstName: string
  lastName: string
  age: number
}

export default function Page() {
  const [formState, setFormState] = useState<IFormInput>({
    firstName: '',
    lastName: '',
    age: 0,
  })
  const [_, setErrorsState] = useState<FieldErrors<IFormInput>>({})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    // フォームのvalueを初期化
    defaultValues: {
      lastName: 'やまだ',
      firstName: '太郎',
      age: 20,
    },
  })

  // バリデーション通過時の処理
  const onSubmitSuccess = (data: IFormInput) => {
    setFormState(data)
  }

  // バリデーションエラー時の処理
  const onSubmitError = (errors: FieldErrors<IFormInput>) => {
    setErrorsState(errors)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitSuccess, onSubmitError)} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="lastName">
            姓
            <Input
              id="lastName"
              // react-hook-formのregisterとコンポーネントの接続
              {...register('lastName', { pattern: { value: /^[あ-ん]+$/i, message: 'ひらがなで入力してください' } })}
            />
          </Label>
          {errors.lastName && <p className="text-red-400">{errors.lastName.message}</p>}
        </div>
        <div>
          <Label htmlFor="firstName">
            名
            <Input
              id="firstName"
              {...register('firstName', {
                required: { value: true, message: '名前は必須です' },
                maxLength: { value: 20, message: '20文字以内で入力してください' },
                validate: (input) => {
                  if (input === 'あああ') {
                    return 'あああは使えません'
                  }
                },
              })}
            />
          </Label>
          {errors.firstName && <p className="text-red-400">{errors.firstName.message}</p>}
        </div>
        <div>
          <Label htmlFor="age">
            年齢
            <Input
              type="number"
              id="age"
              {...register('age', {
                min: { value: 18, message: '18歳以上で入力してください' },
                max: { value: 99, message: '99歳以下で入力してください' },
              })}
            />
          </Label>
          {errors.age && <p className="text-red-400">{errors.age.message}</p>}
        </div>
        {/* submit時にhandleSubmitを実行してバリデーションを行う */}
        <Button type="submit">送信</Button>
      </form>
      <div className="mt-4 text-xl">formState: {JSON.stringify(formState)}</div>
    </div>
  )
}
