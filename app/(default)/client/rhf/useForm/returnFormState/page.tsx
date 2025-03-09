'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

type FormInputs = {
  name: string
  role: string
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default function Page() {
  const [disabledState, setDisabledState] = useState(false)
  const { register, handleSubmit, formState, reset } = useForm<FormInputs>({
    defaultValues: {
      name: 'taro',
      role: 'admin',
    },
    disabled: disabledState,
  })
  const {
    isDirty,
    dirtyFields,
    touchedFields,
    defaultValues,
    isSubmitted,
    isSubmitSuccessful,
    isSubmitting,
    isLoading,
    submitCount,
    isValid,
    isValidating,
    validatingFields,
    errors,
    disabled,
  } = formState

  const onSubmit = async (data: FormInputs) => {
    await sleep(3000)
    console.log(data)
  }
  useEffect(() => {
    console.log('useEffect')
  }, [formState])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('name', { required: 'エラー発生' })} />
        <Input
          {...register('role', {
            validate: async () => {
              await sleep(3000)
              return true
            },
          })}
        />
        <Button type="submit">送信</Button>
      </form>
      <label>
        非活性チェック
        <input type="checkbox" checked={disabledState} onChange={() => setDisabledState(!disabledState)} />
      </label>
      <Button onClick={() => reset({ name: '新名前', role: '新ロール' })}>reset(defaultValuesを更新)</Button>
      {/* defaultValuesと異なる：true */}
      <p>isDirty: {isDirty ? 'true' : 'false'}</p>
      {/* 変更されたフィールド */}
      <p>dirtyFields: {JSON.stringify(dirtyFields)}</p>
      {/* 1度でもタッチ(フォーカス)されたフィールド */}
      <p>touchedFields: {JSON.stringify(touchedFields)}</p>
      {/* デフォルト値 */}
      <p>defaultValues: {JSON.stringify(defaultValues)}</p>
      {/* 送信ボタンを1度でも押した：true */}
      <p>isSubmitted: {isSubmitted ? 'true' : 'false'}</p>
      {/* submit成功：true */}
      <p>isSubmitSuccessful: {isSubmitSuccessful ? 'true' : 'false'}</p>
      {/* onSubmit中：true */}
      <p>isSubmitting: {isSubmitting ? 'true' : 'false'}</p>
      {/* ローディング中：true */}
      <p>isLoading: {isLoading ? 'true' : 'false'}</p>
      {/* submit回数 */}
      <p>submitCount: {submitCount}</p>
      {/* バリデーションエラーなし：true（mode:onChangeでのみ動作する、非同期バリデーションがある場合、非同期のほうがtrueになるとisValidがtrueになるので注意） */}
      <p>isValid: {isValid ? 'true' : 'false'}</p>
      {/* 非同期のバリデーション中：true */}
      <p>isValidating: {isValidating ? 'true' : 'false'}</p>
      {/* 非同期バリデーション中のフィールド */}
      <p>validatingFields: {JSON.stringify(validatingFields)}</p>
      {/* バリデーションエラー */}
      <p>errors: {errors?.name?.message}</p>
      {/* 非活性チェック*/}
      <p>disabled: {disabled ? 'true' : 'false'}</p>
    </div>
  )
}
