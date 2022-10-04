import classes from "./Card.module.css";

function Card(props) {
  return <div className={classes.littleCard}>{props.children}</div>;
}

export default Card;
