import styles from './Star.module.sass';

const Star = ({selected = false, onClick = f => f}) => (
  <div className={(selected) ? styles.Star.selected : styles.Star}
       onClick={onClick}>
  </div>
);

export default Star;
