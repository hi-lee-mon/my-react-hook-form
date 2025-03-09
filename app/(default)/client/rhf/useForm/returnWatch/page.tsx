'use client'
import { Input } from '@/components/ui/input'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
  name: string
  age: number
}

let renderCount = 0

export default function Page() {
  renderCount++
  const { register, handleSubmit, watch } = useForm<FormValues>()
  const onSubmit = (data: FormValues) => console.log(data)

  // 配列で複数指定可能
  const name = watch('name', 'taro')
  console.log('name', name)

  useEffect(() => {
    const subscription = watch((value) => console.log(value))
    return () => {
      subscription.unsubscribe()
    }
  }, [watch])

  return (
    <div>
      <p>レンダリング回数：{renderCount}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('name')} />
      </form>
    </div>
  )
}
