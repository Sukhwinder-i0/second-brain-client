import { JSXElement } from "solid-js"

interface LogoProps {
    icon: JSXElement
    text: string
    onClick?: () => void
}

const Logo = (props: LogoProps) => {

  return (
    <span class="inline-flex items-center  font-bold px-4 py-2 text-2xl rounded-xl ">
        {props.icon && <span class="mr-2 text-purple text-4xl" >{props.icon}</span>}
        {props.text}
    </span>
  )
}

export default Logo