import { Input } from "postcss";
import { BiRegularWindowClose } from "solid-icons/bi";
import { ImExit } from "solid-icons/im";
import InputBox from "./InputBox.jsx";
import { Button } from "./Button.jsx";

interface AddContentPopProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddContentPop = (props: AddContentPopProps) => {
    
  return (
    <>
      {props.isOpen && <div class="w-full h-screen flex justify-center items-center bg-slate-500 opacity-90 fixed inset-0 z-50" >
        <div class="w-1/5 bg-ghost-white rounded-md shadow-lg shadow-gray-900">
           <div class="w-full p-3 font-bold text-xl flex items-center justify-between shadow-lg  shadow-gray-500">
                <p class=" ">Add Content</p>
                <span class="text-red-700 text-2xl cursor-pointer" onClick={props.onClose}>
                    {<BiRegularWindowClose />}
                </span>
           </div>
           <div class="p-4">
           <InputBox type="text" placeholder="title" label="Title" />
           <InputBox type="text" placeholder="link" label="Url" />
           <InputBox type="text" placeholder="description" label="Description" />
           <span class="pt-4 flex w-full justify-center">
                <Button variant="primary" text="Submit" size="md"/>
            </span>
        </div>
        </div>
      </div>}
    </>
  );
};

export default AddContentPop;
