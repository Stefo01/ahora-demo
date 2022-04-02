import CartIcon from "../Cart/CartIcon"

import classes from './HeaderCartButton.module.css'

import { useContext, useEffect, useState } from "react"
import CartContext from "../../store/cart-contex"

const HeaderCartButton = props => {

    const [butIsHilighted, setButtonHighlight] = useState(false);
    const  cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => { return curNumber + item.amount;}, 0);

    // to make bump
    const btnClasses = `${classes.button} ${butIsHilighted ? classes.bump : ''}`;

    useEffect(() => {
        if(cartCtx.items.length === 0){
            return;
        }
        setButtonHighlight(true);
        const timer = setTimeout(() => {
            setButtonHighlight(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }
    }, [items]);
    return(
        <button className={btnClasses} onClick={props.onClick1}>
            
            <span>Ordina ora</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;

/*
<span className='icon-HeaderCartButton'>
                <CartIcon></CartIcon>
            </span>

*/