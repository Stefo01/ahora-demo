import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li >
      <div><h2>{props.name}</h2></div>
      <div className={classes['cart-item']}>
        <div className={classes.price}>{price}</div>
        <div className={classes.amount}>x {props.quantity}</div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
