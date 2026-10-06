import { cn } from "cn"
import { SpinnerIcon } from '@phosphor-icons/react'

function Spinner({
  className,
  ...props
}) {
  return (
    <SpinnerIcon role="status" aria-label="Loading" className={cn("size-8 animate-spin", className)} {...props} />
  )
}

export { Spinner }
