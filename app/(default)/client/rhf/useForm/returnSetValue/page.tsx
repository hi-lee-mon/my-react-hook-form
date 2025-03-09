'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
  yourDetails: {
    firstName: string
    lastName: string
  }
}
let renderCount = 0
export default function Page() {
  renderCount++
  const [nameValue, setNameValue] = useState('')
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, dirtyFields, touchedFields, isValid, errors },
  } = useForm<FormValues>({
    defaultValues: {
      yourDetails: {
        firstName: 'taro',
        lastName: 'yamada',
      },
    },
  })
  const onSubmit = (data: FormValues) => console.log(data)

  // ※！次のやり方での更新はパフォーマンスが悪いが、コードを読みやすくするために使用する！※
  const updateValue = {
    firstName: nameValue,
    lastName: nameValue,
  }

  return (
    <div>
      <p>レンダリング回数：{renderCount}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-10">
        <Input
          {...register('yourDetails.firstName', {
            maxLength: {
              value: 5,
              message: '5文字以下にしてください',
            },
          })}
        />
        <Input
          {...register('yourDetails.lastName', {
            maxLength: {
              value: 5,
              message: '5文字以下にしてください',
            },
          })}
        />
        <Button type="submit">送信</Button>
      </form>
      <Input value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
      {/* 次はパフォーマンスが悪いので1つずつ指定するのがおすすめ */}
      {/* <Button
        onClick={() =>
          setValue('yourDetails', {
            firstName: nameValue,
            lastName: nameValue,
          })
        }
      >
        setValue
      </Button> */}
      {/* 次のやり方が良い */}
      <Button
        onClick={() => {
          setValue('yourDetails.firstName', nameValue)
          setValue('yourDetails.lastName', nameValue)
        }}
      >
        setValue(shouldDirty)
      </Button>
      <Button onClick={() => setValue('yourDetails', updateValue, { shouldDirty: true })}>setValue(shouldDirty)</Button>
      <Button onClick={() => setValue('yourDetails', updateValue, { shouldTouch: true })}>setValue(shouldTouch)</Button>
      <Button onClick={() => setValue('yourDetails', updateValue, { shouldValidate: true })}>
        setValue(shouldValidate)
      </Button>
      {/* defaultValuesと異なる：true */}
      <p>isDirty: {isDirty ? 'true' : 'false'}</p>
      {/* 変更されたフィールド */}
      <p>dirtyFields: {JSON.stringify(dirtyFields)}</p>
      {/* 1度でもタッチ(フォーカス)されたフィールド */}
      <p>touchedFields: {JSON.stringify(touchedFields)}</p>
      {/* バリデーションエラーなし：true（mode:onChangeでのみ動作する、非同期バリデーションがある場合、非同期のほうがtrueになるとisValidがtrueになるので注意） */}
      <p>isValid: {isValid ? 'true' : 'false'}</p>
      {/* バリデーションエラー */}
      <p>firstName.errors: {errors?.yourDetails?.firstName?.message}</p>
      <p>lastName.errors: {errors?.yourDetails?.lastName?.message}</p>
    </div>
  )
}
