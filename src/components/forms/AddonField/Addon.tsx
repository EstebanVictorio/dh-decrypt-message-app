import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface BaseProps {
  className?: string
  children: React.ReactNode
}

type Props =  BaseProps & ButtonHTMLAttributes<HTMLButtonElement>

const twUtils = "rounded-r-sm bg-blue-500 text-white h-full border border-blue-500 p-1"

const Addon = ({ children, className = "", type = "button", onClick, ...rest }: Props) => {
  const classNames = clsx(
    twUtils,
    className,
  )

  if(["submit","reset"].includes(type)) {
    return (
      <button {...rest} type={type} className={classNames}>
        {children}
      </button>
    );
  }

  if(type === "button" && onClick) {
    return (
      <button {...rest} className={classNames} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <span {...rest} className={classNames}>
      {children}
    </span>
  );
}

export default Addon