import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import { useContext, useState } from 'react';
import CartContext from '../../store/cart-contex';
import CartItem from './CartItem';
import BusinessContext from '../../store/business-context';
import { db } from './../../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Oval } from "react-loader-spinner";


const Cart = props => {
    const cartCtx = useContext(CartContext);
    const businessCtx = useContext(BusinessContext);
    const [loading, setLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

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
        setLoading(true)
        const orderRef = collection(db, "businesses", businessCtx.id, "orders")
        await addDoc(orderRef, {
            items: cartCtx.items,
            table: businessCtx.table,
            completed: false,
            time: serverTimestamp()
        })
        cartCtx.clearCart()
        setLoading(false)
        setShowSuccessModal(true)

    }

    const onSuccessClose = () => {
        setShowSuccessModal(false)
        props.onClose()
    }

    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map(item => (<CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}></CartItem>))}</ul>;

    if (loading) {
        // show loading animation
        return (<Modal>
            <Oval className={classes.total} color="#DE5050" secondaryColor='#c15e5e' height={60} width={60} />
        </Modal>)
    }
    if (showSuccessModal) {
        // show success modal
        return (<Modal key="successModal" onClose={onSuccessClose}>
            <div>
                <h1 style={{ textAlign: 'center' }}>Il tuo ordine è stato inviato</h1>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onSuccessClose}>Ok</button>
            </div>
        </Modal>)
    }

    return (
        <Modal key="cartModal" onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Totale</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Chiudi</button>
                {hasItems && <button className={classes.button} onClick={onConfirm} disabled={loading}>Conferma</button>}
            </div>
        </Modal>
    )
}

export default Cart;