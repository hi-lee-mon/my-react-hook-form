'use client'

import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'

export default function Page() {
  const _defaultValues = {
    defaultValues: {
      name: 'name',
      category: {
        product: '1',
      },
      itemList: [{ id: 0, name: 'item0' }],
    },
  }

  const { register, handleSubmit } = useForm()
  register('name')
  register('category.product')
  register('itemList.0')

  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Button variant="outline" type="submit">
          console.log
        </Button>
      </form>
    </div>
  )
}
