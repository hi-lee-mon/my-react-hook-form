'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Page() {
  // デフォルト値の状態を表示するための状態
  const [currentDefaultValues, setCurrentDefaultValues] = useState({
    input: 'デフォルト値',
  })

  const form = useForm({
    defaultValues: currentDefaultValues,
  })

  // 現在のフォーム状態を表示
  const showFormState = () => {
    console.log('現在の値:', form.getValues())
    console.log('現在のデフォルト値:', form.formState.defaultValues)
    alert(
      `現在の値: ${JSON.stringify(form.getValues())}\n` +
        `現在のデフォルト値: ${JSON.stringify(form.formState.defaultValues)}`,
    )
  }

  const resetWithKeepValues = () => {
    form.reset(
      {
        input: 'keepValues',
      },
      {
        keepValues: true,
      },
    )
  }

  const resetWithKeepErrors = () => {
    form.reset(
      {
        input: 'keepErrors',
      },
      {
        keepErrors: true,
      },
    )
  }

  const resetWithKeepDirty = () => {
    form.reset(
      {
        input: 'keepDirty',
      },
      {
        keepDirty: true,
      },
    )
  }

  const resetWithKeepIsSubmitted = () => {
    form.reset(
      {
        input: 'keepIsSubmitted',
      },
      {
        keepIsSubmitted: true,
      },
    )
  }

  const resetWithKeepTouched = () => {
    form.reset(
      {
        input: 'keepTouched',
      },
      {
        keepTouched: true,
      },
    )
  }

  // keepDefaultValuesのユースケース1:
  // 新しい値を指定せずにリセットし、元のデフォルト値を保持
  const resetWithKeepDefaultValues = () => {
    form.reset(undefined, {
      keepDefaultValues: true,
    })
    alert('フォームをリセットしましたが、デフォルト値は保持されています')
  }

  // keepDefaultValuesのユースケース2:
  // 新しい値を指定してリセットするが、デフォルト値は変更しない
  const resetWithNewValuesKeepDefaultValues = () => {
    form.reset(
      {
        input: '一時的な新しい値',
      },
      {
        keepDefaultValues: true,
      },
    )
    alert('フォームを新しい値でリセットしましたが、デフォルト値は元のままです')
  }

  // keepDefaultValuesのユースケース3:
  // 外部状態のデフォルト値を変更し、それをフォームにも反映する
  // （useFormのdefaultValuesに渡している状態を更新）
  const updateExternalDefaultValues = () => {
    const newDefaultValues = {
      input: `外部状態の新しいデフォルト値 ${new Date().toLocaleTimeString()}`,
    }
    setCurrentDefaultValues(newDefaultValues)

    // 外部状態を変更しただけでは自動的にフォームには反映されないので、
    // resetを呼び出して明示的に更新する
    form.reset(newDefaultValues)

    alert(`外部状態のデフォルト値を "${newDefaultValues.input}" に変更し、フォームにも反映しました`)
  }

  // keepDefaultValuesのユースケース4:
  // reset関数だけでデフォルト値を更新（keepDefaultValues: falseが暗黙的に設定される）
  const resetWithNewDefaultValues = () => {
    const newValue = `リセットで設定した新しい値 ${new Date().toLocaleTimeString()}`
    form.reset({
      input: newValue,
    })
    alert(`フォームをリセットし、デフォルト値も "${newValue}" に更新されました（keepDefaultValues: falseと同じ）`)
  }

  // keepDefaultValuesのユースケース5:
  // 明示的にkeepDefaultValues: falseを指定（上記と同じ動作）
  const resetWithExplicitKeepDefaultValuesFalse = () => {
    const newValue = `明示的にkeepDefaultValues: falseを指定 ${new Date().toLocaleTimeString()}`
    form.reset(
      {
        input: newValue,
      },
      {
        keepDefaultValues: false, // 明示的に指定（デフォルト値）
      },
    )
    alert(`フォームをリセットし、デフォルト値も "${newValue}" に更新されました（明示的にkeepDefaultValues: false）`)
  }

  // 完全に元のデフォルト値に戻す
  const resetToOriginalDefault = () => {
    const originalDefault = {
      input: 'デフォルト値',
    }
    setCurrentDefaultValues(originalDefault)
    form.reset(originalDefault)
    alert('元のデフォルト値に戻しました')
  }

  return (
    <div className="flex flex-col gap-4">
      <div className=" p-4 rounded-md mb-4">
        <h3 className="text-lg font-medium mb-2">現在のフォーム状態</h3>
        <p className="text-sm text-gray-700 mb-2">
          <strong>現在の値:</strong> {form.watch('input')}
        </p>
        <p className="text-sm text-gray-700 mb-2">
          <strong>現在のデフォルト値:</strong> {JSON.stringify(form.formState.defaultValues)}
        </p>
        <p className="text-sm text-gray-700">
          <strong>フォーム状態:</strong>
          isDirty: {form.formState.isDirty ? 'true' : 'false'}, isSubmitted:{' '}
          {form.formState.isSubmitted ? 'true' : 'false'}, isTouched:{' '}
          {form.formState.touchedFields.input ? 'true' : 'false'}
        </p>
      </div>

      <form onSubmit={form.handleSubmit(() => {})} className="border p-4 rounded-md">
        <Label htmlFor="input">入力</Label>
        <Input {...form.register('input', { required: '必須です' })} className="mb-2" />
        {form.formState.errors.input && (
          <p className="text-red-400 mb-2">{form.formState.errors.input.message as string}</p>
        )}
        <Button type="submit" className="mt-2">
          送信
        </Button>
      </form>

      <div className="border-t pt-4 mt-4">
        <h3 className="text-lg font-medium mb-2">基本的なリセットオプション</h3>
        <div className="flex flex-wrap gap-2 mb-4">
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
        </div>
      </div>

      <div className="border-t pt-4 mt-4">
        <h3 className="text-lg font-medium mb-2">keepDefaultValuesのユースケース</h3>
        <div className="flex flex-col gap-2 mb-4">
          <div className=" p-3 rounded-md">
            <h4 className="font-medium mb-2">デフォルト値を保持するパターン</h4>
            <div className="flex flex-wrap gap-2">
              <Button onClick={resetWithKeepDefaultValues} variant="outline" size="sm">
                リセットしてデフォルト値を保持
              </Button>
              <Button onClick={resetWithNewValuesKeepDefaultValues} variant="outline" size="sm">
                新しい値でリセットしてもデフォルト値を保持
              </Button>
            </div>
          </div>

          <div className=" p-3 rounded-md">
            <h4 className="font-medium mb-2">外部状態とフォームのデフォルト値を同期</h4>
            <div className="flex flex-wrap gap-2">
              <Button onClick={updateExternalDefaultValues} variant="outline" size="sm">
                外部状態のデフォルト値を変更してフォームに反映
              </Button>
            </div>
          </div>

          <div className=" p-3 rounded-md">
            <h4 className="font-medium mb-2">デフォルト値を更新するパターン</h4>
            <div className="flex flex-wrap gap-2">
              <Button onClick={resetWithNewDefaultValues} variant="outline" size="sm">
                新しいデフォルト値でリセット（暗黙的にkeepDefaultValues: false）
              </Button>
              <Button onClick={resetWithExplicitKeepDefaultValuesFalse} variant="outline" size="sm">
                明示的にkeepDefaultValues: falseを指定
              </Button>
            </div>
          </div>

          <div className=" p-3 rounded-md">
            <h4 className="font-medium mb-2">初期状態に戻す</h4>
            <div className="flex flex-wrap gap-2">
              <Button onClick={resetToOriginalDefault} variant="outline" size="sm">
                元のデフォルト値に戻す
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-4 mt-4">
        <Button onClick={showFormState} variant="secondary" size="sm">
          フォーム状態を詳細表示
        </Button>
      </div>
    </div>
  )
}
