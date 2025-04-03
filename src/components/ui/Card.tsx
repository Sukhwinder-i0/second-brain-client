import { AiOutlineDelete } from "solid-icons/ai";
import { FiShare2 } from "solid-icons/fi";
import { JSXElement, onMount } from "solid-js";
import { YoutubePost } from "../../Embedding/Youtube.jsx";

interface CardProps {
  mediaIcon: JSXElement;
  title: string;
}

const Card = (props: CardProps) => {
  return (
    <div class="w-2/7 border py-2 px-3 border-gray-200 rounded-lg">
      <div class="w-full flex items-center justify-between">
        <div class="flex text-gray-800 items-center">
          <span>{props.mediaIcon}</span>
          <span class="font-medium pl-4">{props.title}</span>
        </div>
        <div class="flex text-gray-500">
          <FiShare2 />
          <span class="pl-4">
            <AiOutlineDelete />
          </span>
        </div>
      </div>
      <div class="w-full pt-6 ">
        <YoutubePost shareLink={""} />
      </div>
    </div>
  );
};

export default Card;
