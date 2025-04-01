import { JSXElement } from "solid-js";

interface SideBarItemProps {
  icon: JSXElement;
  text: string;
  onClick?: () => void;
}

const SidebarItem = (props: SideBarItemProps) => {
  return (
    <div class=" cursor-pointer font-semibold py-2 px-8 inline-flex items-center hover:bg-gray-200 active:bg-gray-300 rounded-sm w-48 transition-all duration-300">
        <div class="pr-2">{props.icon}</div>
        <div>{props.text}</div>
      
    </div>
  );
};

export default SidebarItem;
