import {Component} from 'react';
import {v4} from 'uuid';
import './App.sass';
import ColorList from "./components/ColorList/ColorList";
import AddColorForm from "./components/AddColorForm/AddColorForm";

export class App extends Component {

  state = {
    colors: [
      {
        id: '01sda3j-s98d-09asd-09asd8-09sad',
        title: 'ocean at dusk',
        color: '#00c4e2',
        rating: 3
      },
    ],
  }

  addColor = (title, color) => {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0,
      }
    ];
    this.setState({colors});
  }

  rateColor = (id, rating) => {
    const colors = this.state.colors.map(color =>
      (color.id !== id) ?
        color :
        {
          ...color,
          rating
        }
    )
    this.setState({colors});
  }

  removeColor = (id) => {
    const colors = this.state.colors.filter(
      color => color.id !== id
    )
    this.setState({colors});
  }

  render = () => {
    const { addColor, rateColor, removeColor } = this;
    const { colors } = this.state;
    return (
      <div className="app container mx-auto mt-12">
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
      </div>
    );
  }
}

export default App;


