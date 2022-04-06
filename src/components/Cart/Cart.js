import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import { useContext } from 'react';
import CartContext from '../../store/cart-contex';
import CartItem from './CartItem';
import BusinessContext from '../../store/business-context';
import { db } from './../../firebaseConfig';
import { collection, addDoc, Timestamp, serverTimestamp } from 'firebase/firestore';


const Cart = props => {
    const cartCtx = useContext(CartContext);
    const businessCtx = useContext(BusinessContext);

    const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    };
    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, quantity: 1 })
    };

    const onConfirm = async () => {
        // console.log(cartCtx.items)
        const orderRef = collection(db, "businesses", businessCtx.id, "orders")
        await addDoc(orderRef, {
            items: cartCtx.items,
            table: businessCtx.table,
            completed: false,
            time: serverTimestamp()
        })
    }

    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map(item => (<CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}></CartItem>))}</ul>;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button} onClick={onConfirm}>Confirm</button>}
            </div>
        </Modal>
    )
}

export default Cart;