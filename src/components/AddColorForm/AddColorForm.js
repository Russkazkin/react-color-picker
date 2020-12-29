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
             placeholder="color title..."
             className="pl-4 h-8 bg-gray-200 w-full rounded-full focus:outline-none focus:shadow-outline text-sm"
             required />
      <input type="color" ref={color} required />
      <button>ADD</button>
    </form>
  );
}

export default AddColorForm;
