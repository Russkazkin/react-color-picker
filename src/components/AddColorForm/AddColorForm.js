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
    <form onSubmit={submit}>
      <input type="text" ref={title} placeholder="color title..." required />
      <input type="color" ref={color} required />
      <button>ADD</button>
    </form>
  );
}

export default AddColorForm;
