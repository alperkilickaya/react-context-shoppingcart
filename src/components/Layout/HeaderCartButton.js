import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);

  // header'da bulunan sepetteki ürün sayısı; 3 farklı ürün olabilir ama toplam ürün müktarı her üründen 3 adet alındı ise 9 olacak.
  // sepette kaç ürün olduğunu göstermek için. Aksi halde sepetteki ürün sayısıo 3 yerine 9 olur. bu logic henüz yazılmadı.
  const numberOfCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  /* const numberOfCartItems = cartCtx.items.length; */
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
