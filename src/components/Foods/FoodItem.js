import classes from './FoodItem.module.css'
import { useContext, useState } from 'react';
import CartContext from '../../store/cart-contex';


const FoodItem = props => {
    const cartCtx = useContext(CartContext);
    const price = `€${props.price.toFixed(2)}`;
    const [appear, setAppear] = useState(false);
    const [number, setNumber] = useState(1);


    const removeNumberItem = () => {
        const num = number;
        if (num === 1)
            return;
        setNumber(num - 1);
    }
    const addNumberItem = () => {
        const num = number;
        if (num >= 99)
            return;
        setNumber(num + 1);
    }

    const AddToCartHandler = (quantity) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            quantity: quantity,
            price: props.price
        });
    }
    const AddItemNow = () => {
        const num = number;
        if (num > 0 && num <= 99)
            AddToCartHandler(num);
        setNumber(1);

        setAppear(false)
    }

    return (
        <div className={classes.meal2}>
            <div>
                <div className={classes.meal} onClick={() => setAppear(!appear)} >
                    <div>
                        <h3>{props.name}</h3>
                        <div className={classes.description}>{props.description}</div>
                        <div className={classes.price}>{price}</div>
                    </div>

                    <div className={classes.form}>
                        <span className="material-icons" style={{ color: 'gray' }}>
                            {appear ? "expand_less" : "expand_more"}
                        </span>

                    </div>
                </div>
                {appear && <div className={classes.meal}>
                    <div>
                        <img className={classes.imageFood} src="https://www.scattidigusto.it/wp-content/uploads/2014/02/pizza-margherita-Sorbillo-960x960.jpg"></img>
                    </div>
                    <div>
                        <button className={classes.quantifyButton} onClick={removeNumberItem}>-</button>
                        <span className={classes.textInside}>{number}</span>
                        <button className={classes.quantifyButton} onClick={addNumberItem}>+</button>
                        <div className={classes.form}>
                            <button onClick={AddItemNow}>Aggiungi</button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default FoodItem;