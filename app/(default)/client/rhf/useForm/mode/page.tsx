'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'

export default function Page() {
  const modeAll = useForm({
    mode: 'all',
    defaultValues: {
      input: 'input',
    },
  })
  const modeOnBlur = useForm({
    mode: 'onBlur',
    defaultValues: {
      input: 'input',
    },
  })
  const modeOnChange = useForm({
    mode: 'onChange',
    defaultValues: {
      input: 'input',
    },
  })
  const modeOnSubmit = useForm({
    mode: 'onSubmit',
    defaultValues: {
      input: 'input',
    },
  })
  const modeOnTouched = useForm({
    mode: 'onTouched',
    defaultValues: {
      input: 'input',
    },
  })

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={modeAll.handleSubmit(() => {})}>
        <Label htmlFor="input">mode-all</Label>
        <Input {...modeAll.register('input', { required: '必須です' })} />
        {modeAll.formState.errors.input && (
          <p className="text-red-400">{modeAll.formState.errors.input.message as string}</p>
        )}
        <Button>送信</Button>
      </form>
      <form onSubmit={modeOnBlur.handleSubmit(() => {})}>
        <Label htmlFor="input">mode-onBlur</Label>
        <Input {...modeOnBlur.register('input', { required: '必須です' })} />
        {modeOnBlur.formState.errors.input && (
          <p className="text-red-400">{modeOnBlur.formState.errors.input.message as string}</p>
        )}
        <Button>送信</Button>
      </form>
      <form onSubmit={modeOnChange.handleSubmit(() => {})}>
        <Label htmlFor="input">mode-onChange</Label>
        <Input {...modeOnChange.register('input', { required: '必須です' })} />
        {modeOnChange.formState.errors.input && (
          <p className="text-red-400">{modeOnChange.formState.errors.input.message as string}</p>
        )}
        <Button>送信</Button>
      </form>
      <form onSubmit={modeOnSubmit.handleSubmit(() => {})}>
        <Label htmlFor="input">mode-onSubmit</Label>
        <Input {...modeOnSubmit.register('input', { required: '必須です' })} />
        {modeOnSubmit.formState.errors.input && (
          <p className="text-red-400">{modeOnSubmit.formState.errors.input.message as string}</p>
        )}
        <Button>送信</Button>
      </form>
      <form onSubmit={modeOnTouched.handleSubmit(() => {})}>
        <Label htmlFor="input">mode-onTouched</Label>
        <Input {...modeOnTouched.register('input', { required: '必須です' })} />
        {modeOnTouched.formState.errors.input && (
          <p className="text-red-400">{modeOnTouched.formState.errors.input.message as string}</p>
        )}
        <Button>送信</Button>
      </form>
    </div>
  )
}
