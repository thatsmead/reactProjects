import ContactForm from "../components/contactForm";
import ContactInfo from "../components/contactInfo";
import classes from "./contact.module.css";
import Card from "../components/UI/Card";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Contact() {
  return (
    <Card>
      <h1 className={classes.whereTitle}>Where you can find us</h1>
      <Container>
        <Row>
          <Col>
            <ContactInfo />
          </Col>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default Contact;
