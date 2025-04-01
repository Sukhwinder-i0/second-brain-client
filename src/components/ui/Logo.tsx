import { JSXElement } from "solid-js"

interface LogoProps {
    icon: JSXElement
    text: string
    onClick?: () => void
    class?: string
}

const Logo = (props: LogoProps) => {

  return (
    <span class={`
          inline-flex items-center font-bold text-2xl mt-4 pl-4 rounded-xl 
          ${props.class}
         `}>
        {props.icon && <span class="mr-2 text-purple text-4xl" >{props.icon}</span>}
        {props.text}
    </span>
  )
}

export default Logo