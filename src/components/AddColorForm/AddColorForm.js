import {useRef} from "react";

const AddColorForm = ({onNewColor = f => f}) => {
  const title = useRef(null);
  const color = useRef(null);
  const submit = e => {
    e.preventDefault();
    onNewColor(title.current.value, color.current.value);
    title.current.value = '';
    color.current.value = '#000000';
    title.current.focus();
  }
  return (
    <form onSubmit={submit} className="w-1/4">
      <input type="text"
             ref={title}
             placeholder="Color title..."
             className="pl-4 h-8 bg-gray-200 w-full rounded-full focus:outline-none focus:shadow-outline text-sm mb-3"
             required />
      <div className="flex">
        <div className="mr-3">Choose color</div>
        <input type="color" ref={color} required />
      </div>

      <button className="px-5 py-1 my-5 rounded-md bg-indigo-500 text-white">ADD</button>
    </form>
  );
}

export default AddColorForm;
