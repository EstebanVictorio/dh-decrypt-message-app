import clsx from "clsx";
import { forwardRef } from "react"

type Props = {
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const twUtils = "rounded-l-sm box-border"

const Input = forwardRef<HTMLInputElement, Props>(({ className = "", ...rest }: Props, ref) => {
  const classNames = clsx(
    twUtils,
    className,
  )

  return (
    <input {...rest} ref={ref} className={classNames} />
  );
})

export default Input