import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
// reducer: It takes two arguments, the current state and the action object, and it returns the next state:
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //state.items array'i ile action.payload array'i birleştiriyoruz. ADD için action.payload item'ı içeriyor.
    // burada oluşan updatedItems item objelerini tutan bir array. [{id: 'm1', name: 'Sushi', price: 22.99, amount: 1},
    // id: 'm2', name: 'Schnitzel', price: 16.5, amount: 1},
    // {id: 'm1', name: 'Sushi', price: 22.99, amount: 1}]

    //action payload ile gelen item'in id'sini kullanarak state.items array'inde index'ini buluyoruz.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    // index sayesinde mevcut state'de yer alan ve tekrar gelen item'ı buluyoruz.
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    // eğer aynı item mevcutsa
    if (existingCartItem) {
      // state'de yer alan item'ın amount'ını arttırıp geri kalan propertilerini muhafaza ediyoruz.
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };
      // mevcut items'ın kopyasını oluşturuyoruz. Bu immutablility'i sağlıyor.
      updatedItems = [...state.items];
      // aynı item'ı yeni gelen ile override ediyoruz.
      updatedItems[existingCartItemIndex] = updatedItem;
      // eğer action payload'dan gelen yeni bir item ise
    } else {
      // yeni item'ı state'deki items'a ekliyoruz.
      updatedItems = state.items.concat(action.payload);
    }

    // her item gönderildiğinde updatedTotalAmount, context'te tutulan state.totalAmount'a eklenerek tekrar hesaplanır.
    // state.totalAmount initial olarak 0. Her item eklendiğinde bir önceki totalAmount'a eklenir ve bu değer
    // state'de saklanır. Bir sonraki item gönderildiğinde state'de saklanan son değer ile tekrar toplanır.
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    //reducer mevcut state'i aldı ve aşağıda yeni state'i döndü.

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  //initial state'i default olarak dön.
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    //action
    dispatchCartAction({
      type: "ADD",
      payload: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    //action
    dispatchCartAction({
      type: "REMOVE",
      payload: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
