import { BsTwitter } from "solid-icons/bs"
import Card from "./ui/Card.jsx"

const MainContent = () => {
  return (
    <div class="w-full h-full overflow-y-auto bg-ghost-white p-6">
      <div class="space-y-4 flex flex-wrap gap-16">
        <Card mediaIcon={<BsTwitter />} title="First Post" />
        <Card mediaIcon={<BsTwitter />} title="Second Post" />
      </div>
    </div>
  )
}

export default MainContent
