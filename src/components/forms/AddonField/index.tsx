import clsx from "clsx"
import Addon from "./Addon"
import Input from "./Input"


type Props = {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
}

const twUtils = "flex items-stretch"

const AddonField = ({ children, className, as: Box = "span" }: Props) => {
  const classNames = clsx(
    twUtils,
    className,
  )

  return (
    <Box className={classNames}>
      {children}
    </Box>
  )
}

AddonField.Addon = Addon
AddonField.Input = Input


export default AddonField