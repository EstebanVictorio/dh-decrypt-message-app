import clsx from "clsx"

type Props =
  JSX.IntrinsicElements['button'] & {
    as?: React.ElementType
  }


const twUtils = "bg-slate-50 p-2 shadow-xl border border-gray-300 rounded-sm hover:text-white hover:bg-blue-400 hover:border-blue-400"

const BaseButton = ({ as: Box = "button" , children, className, ...rest }: Props) => {
  const classNames = clsx(
    twUtils,
    className,
  )

  return (
    <Box className={classNames} {...rest}>
      {children}
    </Box>
  )
}

export default BaseButton