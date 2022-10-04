import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import classes from "./thingsList.module.css";

function ThingsList(props) {
  return (
    <>
      {props.things.map((thing) => (
        <Col className={classes.col} key={thing.id}>
          <h4 className={classes.thingsTitle}>{thing.title}</h4>
          <p className={classes.thingsSmallDescription}>
            {thing.text.substring(0, 150) + "..."}
          </p>
          <Link to={`/more-info/${thing.id}`}>
            <button className={classes.readMore}>Read More</button>
          </Link>
        </Col>
      ))}
    </>
  );
}

export default ThingsList;
