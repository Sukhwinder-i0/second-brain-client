import { Input } from "postcss";
import { BiRegularWindowClose } from "solid-icons/bi";
import { ImExit } from "solid-icons/im";
import InputBox from "./ui/InputBox.jsx";
import { Button } from "./ui/Button.jsx";
import { createSignal } from "solid-js";

import { isModalOpen, togglePopup } from "../actions/togglePopup.jsx"
import { setTitle, setUrl } from "../hooks/common.js";
import { addContent } from "../services/addContent.js";

// interface AddContentPopProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

const AddContentPop = () => {
   

  return (
    <>
      {isModalOpen() && <div class="w-full h-screen flex justify-center items-center bg-gray-600 opacity-95 fixed" >
        <div class="w-1/5 bg-ghost-white rounded-md shadow-lg shadow-black">
           <div class="w-full px-3 pt-4 pb-2 font-bold text-xl flex items-center justify-between shadow-gray-500">
                <p class="text-gray-700">Add Content</p>
                <span class="text-red-700 text-2xl cursor-pointer" onClick={togglePopup}>
                    {<BiRegularWindowClose />}
                </span>
           </div>
           <div class="px-4">
           <InputBox 
              type="text" 
              placeholder="title" 
              label="Title" 
              onInput={setTitle}
           />
           <InputBox 
              type="text" 
              placeholder="link" 
              label="Url" 
              onInput={setUrl}
           />
           <span class="py-4 flex w-full justify-center">
                <Button 
                  variant="primary" 
                  text="Submit" 
                  size="md"
                  onClick={ () => {
                    addContent();
                    togglePopup()
                  }}
                />
            </span>
        </div>
        </div>
      </div>
      }
    </>
  );
};

export default AddContentPop;
