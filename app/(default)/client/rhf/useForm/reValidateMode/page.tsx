'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'

export default function Page() {
  const reValidateModeOnBlur = useForm({
    reValidateMode: 'onBlur',
    defaultValues: {
      input: 'input',
    },
  })
  const reValidateModeOnChange = useForm({
    reValidateMode: 'onChange',
    defaultValues: {
      input: 'input',
    },
  })
  const reValidateModeOnSubmit = useForm({
    reValidateMode: 'onSubmit',
    defaultValues: {
      input: 'input',
    },
  })

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={reValidateModeOnBlur.handleSubmit(() => {})}>
        <Label htmlFor="input">reValidateMode-onBlur</Label>
        <Input {...reValidateModeOnBlur.register('input', { required: '必須です' })} />
        {reValidateModeOnBlur.formState.errors.input && (
          <p className="text-red-400">{reValidateModeOnBlur.formState.errors.input.message}</p>
        )}
        <Button>送信</Button>
      </form>
      <form onSubmit={reValidateModeOnChange.handleSubmit(() => {})}>
        <Label htmlFor="input">reValidateMode-onChange</Label>
        <Input {...reValidateModeOnChange.register('input', { required: '必須です' })} />
        {reValidateModeOnChange.formState.errors.input && (
          <p className="text-red-400">{reValidateModeOnChange.formState.errors.input.message}</p>
        )}
        <Button>送信</Button>
      </form>
      <form onSubmit={reValidateModeOnSubmit.handleSubmit(() => {})}>
        <Label htmlFor="input">reValidateMode-onSubmit</Label>
        <Input {...reValidateModeOnSubmit.register('input', { required: '必須です' })} />
        {reValidateModeOnSubmit.formState.errors.input && (
          <p className="text-red-400">{reValidateModeOnSubmit.formState.errors.input.message}</p>
        )}
        <Button>送信</Button>
      </form>
    </div>
  )
}
