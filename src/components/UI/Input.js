import React from "react";
import classes from "./Input.module.css";

// props olarak gönderdiğimiz ref'i burada argument olarak kullanıyoruz. Amaç asıl input elementine ulaşmak.
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      <p>{props.input.type}</p>
    </div>
  );
});

export default Input;
