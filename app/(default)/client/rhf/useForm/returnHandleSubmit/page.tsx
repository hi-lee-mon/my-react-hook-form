'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import type { FieldErrors } from 'react-hook-form'
import { useForm } from 'react-hook-form'

type FormInputs = {
  name: string
  role: string
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default function Page() {
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      name: 'taro',
      role: 'admin',
    },
  })

  const onSubmit = async (data: FormInputs) => {
    try {
      await sleep(2000)
      console.log(data)
      throw new Error('エラー発生')
    } catch (error) {
      console.log('error=>', error)
    }
  }

  const onError = (errors: FieldErrors<FormInputs>) => {
    console.log('onError=>', errors)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Input {...register('name', { required: 'バリデーションエラー' })} />
        <Input {...register('role', { required: 'バリデーションエラー' })} />
        <Button type="submit">送信</Button>
      </form>
    </div>
  )
}
