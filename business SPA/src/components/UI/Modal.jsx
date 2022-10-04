import React from "react";
import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClick} />
      <div className={classes.modal}>
        <div className={classes.content}>
          <p className={classes.message}>{props.message}</p>
          <div className={classes.actions}>
            <button className={classes.ok} onClick={props.onClick}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
