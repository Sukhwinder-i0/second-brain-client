import { TbBrain } from "solid-icons/tb"
import Logo from "./ui/Logo.jsx"
import SidebarItem from "./ui/SidebarItem.jsx"
import { BsHash, BsLink, BsLinkedin, BsMedium, BsReddit, BsTwitter, BsYoutube } from "solid-icons/bs"
import { IoDocument, IoDocumentTextOutline } from "solid-icons/io"
import { AiOutlineLink } from "solid-icons/ai"

export const SideBar = () => {
    return (
        <div class="w-1/6 h-screen shadow-lg shadow-gray-800">
            <Logo icon={<TbBrain />} text="Brainly" />
            
            <div class="flex flex-col items-start px-4 mt-8 h-5/12 justify-evenly">
                <SidebarItem icon={<span class="text-blue-500"><BsTwitter /></span>} text="Tweets"/>
                <SidebarItem icon={<span class="text-red-500"><BsYoutube /></span>} text="Videos"/>
                <SidebarItem icon={<span class="text-blue-700"><BsLinkedin /></span>} text="Linkedin"/>
                <SidebarItem icon={<span class="text-red-700"><BsReddit /></span>} text="Reddit"/>
                <SidebarItem icon={<span class="text-black"><BsMedium /></span>} text="Medium"/>
                <SidebarItem icon={<span class="text-gray-700"><IoDocumentTextOutline /></span>} text="Documents"/>
                <SidebarItem icon={<span class="text-gray-800"><AiOutlineLink /></span>} text="Links"/>
                <SidebarItem icon={<span class="text-gray-800"><BsHash /></span>} text="Tags"/>
            </div>
        </div>
    )
}