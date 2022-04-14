import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  // cartCtx'den items'ı destructre ediyoruz. Bunu useEffect dependency olarak kullanacağız.
  // Yani context'deki items değiştiğinde animasyon çalıştıracağız.
  const { items } = cartCtx;

  // header'da bulunan sepetteki ürün sayısı; 3 farklı ürün olabilir ama toplam ürün müktarı her üründen 3 adet alındı ise 9 olacak.
  // sepette kaç ürün olduğunu göstermek için. Aksi halde sepetteki ürün sayısıo 3 yerine 9 olur. bu logic henüz yazılmadı.
  const numberOfCartItems = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  // cart butonunun css durumunu ayaladık. cart'a ürün eklemede buton için animasyon çalışır.
  // Bu durumu btnIsHighlighted state'i ile kontrol ediyoruz.
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : " "
  }`;

  useEffect(() => {
    //
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      // 300ms saniye sonra butonun animasyonu kaldırılır. Aksi halde animasyon bir defa çalışır.
      // Çünkü eklenen animasyon state'i sürekli kalır.
      setBtnIsHighlighted(false);
    }, 300);
    //buradaki cleanup hızlı eklemede effect'İn çalışmasını durdurur.
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
