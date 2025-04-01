import { createSignal } from "solid-js"
import AddContentPop from "../components/AddContentPop.jsx"
import Header from "../components/Header.jsx"
import MainContent from "../components/MainContent.jsx"
import { SideBar } from "../components/Sidebar.jsx"
import { isModalOpen, togglePopup } from "../actions/togglePopup.jsx"

const Dashboard = () => {

  return (
    <div class="w-full h-screen flex">
      <AddContentPop isOpen={isModalOpen()} onClose={togglePopup} />
      <SideBar />
      <div class="flex-1 flex flex-col">
        <Header />
        <div class="flex-1 overflow-y-auto">
          <MainContent />
        </div>
      </div>
    </div>
  )
}

export default Dashboard