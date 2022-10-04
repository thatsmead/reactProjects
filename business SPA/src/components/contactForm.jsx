import { useRef, useState } from "react";
import classes from "./contactForm.module.css";
import Modal from "../components/UI/Modal";

function ContactForm() {
  const [message, setMessage] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredMessage = messageRef.current.value;

    const validName = enteredName.trim().length > 1;
    const validEmail = enteredEmail.includes("@");
    const validMessage = enteredMessage.trim().length > 8;

    if (validName && validEmail && validMessage) {
      setMessage(
        enteredName +
          " with email address " +
          enteredEmail +
          " sent you this message: " +
          enteredMessage
      );
    } else {
      setMessage("Please try again");
    }

    event.target.reset();
  }

  return (
    <div>
      {message && <Modal message={message} onClick={() => setMessage(null)} />}
      <div>
        <h4 className={classes.messageTitle}>Send us a message:</h4>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            ref={nameRef}
            className={classes.input1}
          />
          <br />
          <input
            type="email"
            placeholder="Your email"
            ref={emailRef}
            className={classes.input2}
          />
          <br />
          <textarea
            className={classes.input3}
            type="text"
            placeholder="Your message"
            ref={messageRef}
            rows="6"
          />
          <br />
          <div className={classes.buttonDiv}>
            <button className={classes.submitButton}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
