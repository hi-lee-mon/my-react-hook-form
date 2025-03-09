'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'

type FormValues = {
  password: string
}

export default function Page() {
  // criteriaMode: "firstError"（デフォルト）
  const formFirstError = useForm<FormValues>({
    criteriaMode: 'firstError',
    defaultValues: {
      password: '',
    },
  })

  // criteriaMode: "all"
  const formAllErrors = useForm<FormValues>({
    criteriaMode: 'all',
    defaultValues: {
      password: '',
    },
  })

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-2 text-lg font-medium">criteriaMode: 'firstError'（デフォルト）</h3>
        <p className="mb-4 text-sm text-gray-500">最初のエラーメッセージのみが表示されます</p>
        <form onSubmit={formFirstError.handleSubmit(() => {})} className="space-y-2">
          <div>
            <Label htmlFor="password">パスワード</Label>
            <Input
              type="password"
              {...formFirstError.register('password', {
                required: 'パスワードは必須です',
                minLength: {
                  value: 8,
                  message: 'パスワードは8文字以上必要です',
                },
                pattern: {
                  value: /[A-Z]/,
                  message: 'パスワードには大文字を含める必要があります',
                },
                validate: {
                  hasNumber: (value) => /\d/.test(value) || 'パスワードには数字を含める必要があります',
                  hasSpecialChar: (value) =>
                    /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'パスワードには特殊文字を含める必要があります',
                },
              })}
            />
            {formFirstError.formState.errors.password && (
              <p className="text-red-400">{formFirstError.formState.errors.password.message as string}</p>
            )}
          </div>
          <Button type="submit">送信</Button>
        </form>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-medium">criteriaMode: 'all'</h3>
        <p className="mb-4 text-sm text-gray-500">すべてのエラーメッセージが表示されます</p>
        <form onSubmit={formAllErrors.handleSubmit(() => {})} className="space-y-2">
          <div>
            <Label htmlFor="password">パスワード</Label>
            <Input
              type="password"
              {...formAllErrors.register('password', {
                required: 'パスワードは必須です',
                minLength: {
                  value: 8,
                  message: 'パスワードは8文字以上必要です',
                },
                pattern: {
                  value: /[A-Z]/,
                  message: 'パスワードには大文字を含める必要があります',
                },
                validate: {
                  hasNumber: (value) => /\d/.test(value) || 'パスワードには数字を含める必要があります',
                  hasSpecialChar: (value) =>
                    /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'パスワードには特殊文字を含める必要があります',
                },
              })}
            />
            {formAllErrors.formState.errors.password?.types && (
              <div className="text-red-400">
                <ul className="list-disc pl-5">
                  {Object.values(formAllErrors.formState.errors.password.types).map((message, index) => (
                    <li key={index}>{message as string}</li>
                  ))}
                </ul>
              </div>
            )}
            {formAllErrors.formState.errors.password && !formAllErrors.formState.errors.password.types && (
              <p className="text-red-400">{formAllErrors.formState.errors.password.message as string}</p>
            )}
          </div>
          <Button type="submit">送信</Button>
        </form>
      </div>
    </div>
  )
}
