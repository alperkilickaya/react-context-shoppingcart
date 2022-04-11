import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  //CartContext'e bağlantı yapıyoruz.
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    //CartContext'deki addItem'a gönderiyoruz. id, name ve price bir üst component olan AvailabeMeals'den geliyor.
    // amount ise alt component olan MealItemForm'den geliyor.
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
