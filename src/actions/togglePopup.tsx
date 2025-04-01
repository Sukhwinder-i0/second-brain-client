import { createSignal } from "solid-js"

  
const [modalOpen, setModalOpen] = createSignal<boolean>(false)

export const togglePopup = () => setModalOpen((prev) => !prev)
export const isModalOpen = () => modalOpen()
