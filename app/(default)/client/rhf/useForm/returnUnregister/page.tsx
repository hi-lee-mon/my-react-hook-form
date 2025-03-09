'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface IFormInputs {
  firstName: string
  lastName: string
  checkbox: boolean
}

export default function Page() {
  const { register, handleSubmit, watch, unregister } = useForm<IFormInputs>({
    defaultValues: {
      firstName: 'taro',
      lastName: 'yamada',
      checkbox: true,
    },
  })

  const checkbox = watch('checkbox')

  useEffect(() => {
    if (!checkbox) {
      // 配列で複数のフィールドを指定可能
      unregister(['lastName'], {
        keepDefaultValue: true,
      })
    }
  }, [checkbox, unregister])

  const onSubmit = (data: IFormInputs) => console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input {...register('firstName')} />
        {checkbox && <Input {...register('lastName')} />}
        <input type="checkbox" {...register('checkbox')} />
        <Button type="submit">console.log</Button>
      </form>
    </div>
  )
}
