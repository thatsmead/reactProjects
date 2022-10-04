import classes from "./NotFound.module.css";
import Card from "../components/UI/Card";

function NotFound() {
  return (
    <Card>
      <h1 className={classes.errorTitle}>ERROR 404</h1>
      <h6 className={classes.errorMessage}>Page not found!</h6>
    </Card>
  );
}

export default NotFound;
