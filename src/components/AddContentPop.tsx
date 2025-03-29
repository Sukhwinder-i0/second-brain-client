import { Input } from "postcss";
import { BiRegularWindowClose } from "solid-icons/bi";
import { ImExit } from "solid-icons/im";
import InputBox from "./InputBox.jsx";
import { Button } from "./Button.jsx";

interface AddContentPopProps {
  open: boolean;
  onClose: () => void;
}

const AddContentPop = ({ open, onClose }: AddContentPopProps) => {
    
  return (
    <>
      {open && <div class="w-full h-screen flex justify-center items-center bg-slate-500 opacity-90 fixed inset-0 z-50">
        <div class="p-5 w-1/5 bg-ghost-white rounded-md ">
           <div class="w-full font-bold text-xl flex items-center justify-between">
                <p class=" ">Add Content</p>
                <span class="text-red-700 text-2xl cursor-pointer" onClick={onClose}>
                    {<BiRegularWindowClose />}
                </span>
           </div>
           <div>
           <InputBox type="text" placeholder="Title" />
           <InputBox type="text" placeholder="Link" />
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
