'use client'

import { Button, MenuItem, Select, TextField } from '@mui/material'
import { useState } from 'react'

import type { SubmitHandler } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'

interface IFormInput {
  firstName: string
  iceCreamType: { label: string; value: string }
}

export default function Page() {
  const [formState, setFormState] = useState<IFormInput>({
    firstName: '',
    iceCreamType: { label: '', value: '' },
  })

  /**
   * 使いかたは基本と同じで、異なるのはControllerコンポーネントを使用することだけ
   */
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      iceCreamType: { label: '', value: '' },
    },
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setFormState(data)
  }
  const options = [
    { value: '1', label: 'Chocolate' },
    { value: '2', label: 'Strawberry' },
    { value: '3', label: 'Vanilla' },
  ]

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Controller name="firstName" control={control} render={({ field }) => <TextField {...field} label="名" />} />
        <Controller
          // name属性はControllerコンポーネントに渡す
          name="iceCreamType"
          control={control}
          render={({ field }) => {
            return (
              // renderの中でコンポーネントを呼び出してfieldを渡すだけ
              <Select {...field}>
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            )
          }}
        />
        <Button type="submit" variant="contained">
          送信
        </Button>
      </form>
      {/* 送信されるのはvalue属性のみ */}
      {JSON.stringify(formState)}
    </div>
  )
}
