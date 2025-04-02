import { JSXElement } from "solid-js"

type Variants = "primary" |"secondary"
interface ButtonProps {
    variant: Variants
    size: "sm" | 'md' |"lg"
    text: string
    startIcon?: JSXElement
    endIcon?: JSXElement
    onClick?: () => void
    onClose?:  () => void
    class?: string
}

const variantStyles = {
    primary: "bg-purple text-white hover:bg-indigo-800 transition-all hover:duration-300 hover:shadow-md hover:shadow-gray-500",
    secondary: "bg-light-purple text-purple hover:bg-purple-200 transition-all hover:duration-300 hover:shadow-md hover:shadow-gray-500"
}

const defaultStyles = "rounded-md"

const sizeSyles = {
    sm:  "py-1.5 px-3",
    md: "py-2 px-4",
    lg: "py-3 px-6"
}

export const Button = (props: ButtonProps) => {

  return (
    <span class={`
        ${variantStyles[props.variant]} 
        ${defaultStyles} 
        ${sizeSyles[props.size]} 
        ${props.class}
        inline-flex items-center gap-2 cursor-pointer 
    `} 
    onClick={props.onClick}
    >
        {props.startIcon && <span >{props.startIcon}</span>}
        {props.text}
        {props.endIcon && <span >{props.endIcon}</span>}
    </span>
  )

}
