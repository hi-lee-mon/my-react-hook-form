'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'

export default function Page() {
  const form = useForm({
    defaultValues: {
      input: 'デフォルト値',
    },
  })

  const resetWithKeepValues = () => {
    form.reset(
      {
        input: '新しい値',
      },
      {
        keepValues: true,
      },
    )
  }

  const resetWithKeepErrors = () => {
    form.reset(
      {
        input: '',
      },
      {
        keepErrors: true,
      },
    )
  }

  const resetWithKeepDirty = () => {
    form.reset(
      {
        input: '新しい値',
      },
      {
        keepDirty: true,
      },
    )
  }

  const resetWithKeepIsSubmitted = () => {
    form.reset(
      {
        input: '新しい値',
      },
      {
        keepIsSubmitted: true,
      },
    )
  }

  const resetWithKeepTouched = () => {
    form.reset(
      {
        input: '新しい値',
      },
      {
        keepTouched: true,
      },
    )
  }

  const resetWithKeepDefaultValues = () => {
    form.reset(undefined, {
      keepDefaultValues: true,
    })
  }

  const resetToDefault = () => {
    form.reset()
  }

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={form.handleSubmit(() => {})}>
        <Label htmlFor="input">入力</Label>
        <Input {...form.register('input', { required: '必須です' })} />
        {form.formState.errors.input && <p className="text-red-400">{form.formState.errors.input.message}</p>}
        <p className="text-sm text-gray-500">
          isDirty: {form.formState.isDirty ? 'true' : 'false'}, isSubmitted:{' '}
          {form.formState.isSubmitted ? 'true' : 'false'}, isTouched:{' '}
          {form.formState.touchedFields.input ? 'true' : 'false'}
        </p>
        <Button type="submit">送信</Button>
      </form>

      <div className="flex flex-wrap gap-2">
        <Button onClick={resetWithKeepValues} variant="outline" size="sm">
          keepValues
        </Button>
        <Button onClick={resetWithKeepErrors} variant="outline" size="sm">
          keepErrors
        </Button>
        <Button onClick={resetWithKeepDirty} variant="outline" size="sm">
          keepDirty
        </Button>
        <Button onClick={resetWithKeepIsSubmitted} variant="outline" size="sm">
          keepIsSubmitted
        </Button>
        <Button onClick={resetWithKeepTouched} variant="outline" size="sm">
          keepTouched
        </Button>
        <Button onClick={resetWithKeepDefaultValues} variant="outline" size="sm">
          keepDefaultValues
        </Button>
        <Button onClick={resetToDefault} variant="outline" size="sm">
          デフォルトにリセット
        </Button>
      </div>
    </div>
  )
}
