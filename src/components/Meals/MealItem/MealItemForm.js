import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    //input'tan her zaman string olarak geliyor. number'a çevirdik.
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 3
    ) {
      setAmountIsValid(false);
      return;
    }
    // props'tan gelen onAddToCart'a enteredAmountNumber'ı verdik. context'i burada kullanamayız. Çünkü burada
    // meal item'in yalnız amount'u var ama bize id ve price gibi değerler de gerekiyor. Biz amount değerini
    // bir üst component'e göndermek istiyoruz. Diğer bilgiler üst component olan MealItem'da.
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form action="" className={classes.form} onSubmit={submitHandler}>
      <Input
        //custom component olduğun için amountInputRef'i props olarak gönderdik. asıl input elementi bu değil.
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Amount must be between 1 and 5</p>}
    </form>
  );
};

export default MealItemForm;
