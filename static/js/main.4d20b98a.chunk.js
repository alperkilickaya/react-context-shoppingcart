(this.webpackJsonpOrderApp=this.webpackJsonpOrderApp||[]).push([[0],[,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,,,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,,function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi"}},,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(14),c=n.n(a),i=(n(28),n(2)),r=n(1),s=n.n(r),o=n.p+"static/media/meals.2971f633.jpeg",l=n(12),d=n.n(l),m=n(0),u=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=n(9),b=n.n(j),p=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),x=function(e){var t=Object(r.useContext)(p);console.log(t);var n=t.items.reduce((function(e,t){return e+t.amount}),0);return Object(m.jsxs)("button",{className:b.a.button,onClick:e.onClick,children:[Object(m.jsx)("span",{className:b.a.icon,children:Object(m.jsx)(u,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:b.a.badge,children:n})]})},O=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("header",{className:d.a.header,children:[Object(m.jsx)("h1",{children:"ReactMeals"}),Object(m.jsx)(x,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:d.a["main-image"],children:Object(m.jsx)("img",{src:o,alt:"ReactMeals"})})]})},h=n(15),_=n.n(h),f=function(){return Object(m.jsxs)("section",{className:_.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),N=function(e){return Object(m.jsx)("div",{className:C.a.card,children:e.children})},y=n(10),g=n.n(y),A=n(6),w=n(17),I=n.n(w),M=s.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:I.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(A.a)({ref:t},e.input)),Object(m.jsx)("p",{children:e.input.type})]})})),k=n(18),F=n.n(k),H=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(m.jsxs)("form",{action:"",className:F.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>3?c(!1):e.onAddToCart(a)},children:[Object(m.jsx)(M,{ref:s,label:"Amount",input:{id:"amount"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!a&&Object(m.jsx)("p",{children:"Amount must be between 1 and 5"})]})},B=function(e){var t=Object(r.useContext)(p),n="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:g.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:g.a.description,children:e.description}),Object(m.jsx)("div",{className:g.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(H,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,price:e.price,amount:n})}})})]})},S=n(19),D=n.n(S),R=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],z=function(){var e=R.map((function(e){return Object(m.jsx)(B,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:D.a.meals,children:Object(m.jsx)(N,{children:Object(m.jsx)("ul",{children:e})})})},P=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsx)(z,{})]})},T=n(11),E=n.n(T),U=n(7),J=n.n(U),L=function(e){return Object(m.jsx)("div",{className:E.a.backdrop,onClick:e.onClose})},Q=function(e){return Object(m.jsx)("div",{className:E.a.modal,children:Object(m.jsx)("div",{className:E.a.content,children:e.children})})},V=document.getElementById("overlays"),Y=function(e){return Object(m.jsxs)(m.Fragment,{children:[J.a.createPortal(Object(m.jsx)(L,{onClose:e.onClose}),V),J.a.createPortal(Object(m.jsx)(Q,{children:e.children}),V)]})},q=n(3),X=n.n(q),Z=n(4),$=n.n(Z),G=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:$.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:$.a.summary,children:[Object(m.jsx)("span",{className:$.a.price,children:t}),Object(m.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:$.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=function(e){var t=Object(r.useContext)(p),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){},i=function(e){},s=Object(m.jsx)("ul",{className:X.a["cart-items"],children:t.items.map((function(e){return Object(m.jsx)(G,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(m.jsxs)(Y,{onClose:e.onClose,children:[s,Object(m.jsxs)("div",{className:X.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:n})]}),Object(m.jsxs)("div",{className:X.a.actions,children:[Object(m.jsx)("button",{className:X.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(m.jsx)("button",{className:X.a.button,children:"Order"})]})]})},W=n(20),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.items.findIndex((function(e){return e.id===t.payload.id})),c=e.items[a];if(c){var i=Object(A.a)(Object(A.a)({},c),{},{amount:c.amount+t.payload.amount});(n=Object(W.a)(e.items))[a]=i}else n=e.items.concat(t.payload);return{items:n,totalAmount:e.totalAmount+t.payload.price*t.payload.amount}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",payload:e})},removeItem:function(e){c({type:"REMOVE",payload:e})}};return Object(m.jsx)(p.Provider,{value:s,children:e.children})},ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(ne,{children:[n&&Object(m.jsx)(K,{onClose:function(){a(!1)}}),Object(m.jsx)(O,{onShowCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(P,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.4d20b98a.chunk.js.map