import Color from "./Color/Color";

const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f }) => (
  <div className="color-list flex">
    {(colors.length === 0) ?
      <p>No Color Lister. (Add a Color)</p> :
      colors.map(color =>
        <Color key={color.id}
               {...color}
               onRate={(rating) => onRate(color.id, rating)}
               onRemove={() => onRemove(color.id)} />
      )
    }
  </div>
);
export default ColorList;
