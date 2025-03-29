const InputBox = (props: {placeholder: string, type:string}) => {
  return (
    <div >
        <input class="w-full font-medium border-2 border-gray-600 text-black rounded-lg p-2 mt-4" type={props.type} placeholder={props.placeholder} />
    </div>
  )
}

export default InputBox