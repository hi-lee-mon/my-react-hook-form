'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import type { Control, RegisterOptions } from 'react-hook-form'
import { useController } from 'react-hook-form'

interface IFormInput {
  username: string
}

export default function Page() {
  const [formState, setFormState] = useState<IFormInput>({
    username: '',
  })
  const { control, handleSubmit } = useForm<IFormInput>({ defaultValues: { username: '' } })

  return (
    <div>
      <form onSubmit={handleSubmit((data) => setFormState(data))}>
        <div className="flex flex-col gap-2">
          <CustomInput name="username" rules={{ required: 'ユーザー名は必須です' }} control={control} />
          <Button type="submit">送信</Button>
        </div>
      </form>
      <p>ユーザー名: {formState.username}</p>
    </div>
  )
}

function CustomInput({
  name,
  rules,
  control,
}: {
  name: string
  rules?: RegisterOptions
  control: Control<any> // eslint-disable-line @typescript-eslint/no-explicit-any
}) {
  const { field, fieldState } = useController({ name, control, rules })

  if (field.value === '') {
    // ロジック
  }

  return (
    <div>
      <Label htmlFor="username">ユーザー名</Label>
      <Input {...field} id="username" />
      {fieldState.error && <p className="text-red-500">{fieldState.error.message}</p>}
    </div>
  )
}
