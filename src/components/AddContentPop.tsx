import { Input } from "postcss";
import { BiRegularWindowClose } from "solid-icons/bi";
import { ImExit } from "solid-icons/im";
import InputBox from "./ui/InputBox.jsx";
import { Button } from "./ui/Button.jsx";

interface AddContentPopProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddContentPop = (props: AddContentPopProps) => {
    
  return (
    <>
      {props.isOpen && <div class="w-full h-screen flex justify-center items-center bg-gray-600 opacity-95 fixed" >
        <div class="w-1/5 bg-ghost-white rounded-md shadow-lg shadow-black">
           <div class="w-full px-3 pt-4 pb-2 font-bold text-xl flex items-center justify-between shadow-gray-500">
                <p class="text-gray-700">Add Content</p>
                <span class="text-red-700 text-2xl cursor-pointer" onClick={props.onClose}>
                    {<BiRegularWindowClose />}
                </span>
           </div>
           <div class="px-4">
           <InputBox type="text" placeholder="title" label="Title" />
           <InputBox type="text" placeholder="link" label="Url" />
           <InputBox type="text" placeholder="description" label="Description" />
           <span class="py-4 flex w-full justify-center">
                <Button variant="primary" text="Submit" size="md"/>
            </span>
        </div>
        </div>
      </div>}
    </>
  );
};

export default AddContentPop;
