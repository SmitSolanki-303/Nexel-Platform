import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import { ShoppingCart } from 'lucide-react'

export function OpenCartButton({
  className,
  quantity,
  ...rest
}: {
  className?: string
  quantity?: number
}) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className={clsx('p-2 relative hover:bg-accent', className)}
      {...rest}
    >
      <ShoppingCart className="h-5 w-5 text-neutral" />
      <span className="sr-only">Shopping cart</span>

      {quantity && quantity > 0 ? (
        <span className="absolute -top-1 -right-1 bg-primary text-surface text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {quantity > 99 ? '99+' : quantity}
        </span>
      ) : null}
    </Button>
  )
}
