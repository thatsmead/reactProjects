import classes from "./contactInfo.module.css";
import imgOpen from "../assets/clock8.svg";
import imgClose from "../assets/clock4.svg";

function ContactInfo() {
  return (
    <div>
      <div className={classes.infos}>
        <img
          src={imgOpen}
          alt="opens at 8AM"
          height="65px"
          className={classes.clock}
        />
        <img
          src={imgClose}
          alt="closes at 4PM"
          height="65px"
          className={classes.clock}
        />
        <p>
          Monday to Friday <br />
          Saturday and Sunday CLOSED
        </p>
        <hr />
        <p> Some Street - Borough, CITY</p>
      </div>
      <div className={classes.mapOuter}>
        <div className={classes.gMapCanvas}>
          <iframe
            width="300"
            height="150"
            src="https://maps.google.com/maps?q=New%20York&t=&z=7&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
