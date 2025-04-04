
import { Button } from "./ui/Button.jsx"
import { FiShare2 } from "solid-icons/fi"
import { AiOutlinePlus } from "solid-icons/ai"
import { togglePopup } from "../actions/togglePopup.jsx"

const Header = () => {
  return (
    <div class="bg-ghost-white pt-4 w-full flex justify-between p-6">
        <h2 class="font-bold text-3xl">All Notes</h2>
        <div class="gap-8 flex">
            <Button variant="primary" text="Add Content" size="md" onClick={togglePopup} startIcon={<AiOutlinePlus/>}/>
            <Button variant="secondary" text="Share Brain" size="md" startIcon={<FiShare2/>}/>
        </div>
    </div>
  )
}

export default Header