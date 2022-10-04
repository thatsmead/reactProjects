import imgTeam from "../assets/team.svg";
import classes from "./homepage.module.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <section className={classes.homepage}>
        <h1 className={classes.mainTitle}>
          What you need is <br />
          right here
        </h1>
        <Link to="/more-info">
          <button className={classes.discover}>DISCOVER MORE</button>
        </Link>
      </section>
      <img className={classes.team} alt="team" src={imgTeam} width="35%" />
    </div>
  );
}

export default Homepage;
