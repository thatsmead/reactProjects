import imgFemale from "../assets/female.svg";
import imgMale from "../assets/male.svg";
import classes from "./about.module.css";
import Card from "../components/UI/Card";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function About() {
  return (
    <Card>
      <section>
        <h1 className={classes.whoTitle}>Who we are</h1>
        <p className={classes.whoDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      <section>
        <h1 className={classes.teamTitle}>Our team</h1>
        <Container className={classes.imgRow}>
          <Row>
            <Col>
              <img width="125px" alt="Team member" src={imgFemale} />
              <h5 className={classes.memberName}>Lily Hall</h5>
            </Col>
            <Col>
              <img width="125px" alt="Team member" src={imgMale} />
              <h5 className={classes.memberName}>Luke Scott</h5>
            </Col>
            <Col>
              <img width="125px" alt="Team member" src={imgFemale} />
              <h5 className={classes.memberName}>Emily Harper</h5>
            </Col>
          </Row>
        </Container>
      </section>
    </Card>
  );
}

export default About;
