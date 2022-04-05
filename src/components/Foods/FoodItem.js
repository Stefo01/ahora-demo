import classes from './FoodItem.module.css'
import FoodItemForm from './FoodItemForms';
import { useContext, useState , useRef} from 'react';
import CartContext from '../../store/cart-contex';

const FoodItem = props => {
    const cartCtx = useContext(CartContext);
    const price = `€${props.price.toFixed(2)}`;
    const [appear, setAppear] = useState(false);
    const [disappear, setDisappear] = useState(true);
    const [number, setNumber] = useState(0);


    const removeNumberItem = () =>{
        const num = number;
        if(num === 0)
            return;
        setNumber(num -1);
    }
    const addNumberItem = () => {
        const num = number;
        if(num >= 9)
            return;
        setNumber(num +1);
    }

    const AddToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    const DescriptionAppear = () => {
        if(appear === true){
            setDisappear(true)
            setAppear(false)
        }
        else{
            setAppear(true)
            setDisappear(false)
        }
    }
    const AddItemNow = () => {
        const num = number;
        if(num >0 && num<=9)
            AddToCartHandler(num);
        setNumber(0);
        DescriptionAppear();
    }

    return (
    <div className={classes.meal2}>
        <div>
            <div className={classes.meal}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={classes.description}>{props.description}</div>
                    <div className={classes.price}>{price}</div>
                </div>
                <div className={classes.form}>
                    <button onClick={AddItemNow}>+ Add</button>
                </div>
            </div>
            {appear && <div>
                <button className={classes.B2} onClick={DescriptionAppear}><em></em></button>
            </div>}
            {disappear && <div>
                <button className={classes.B1} onClick={DescriptionAppear}><em></em></button>
            </div>}
        </div>
        {appear && <div className={classes.meal}>
                <div>
                    <img className={classes.imageFood} src="https://www.scattidigusto.it/wp-content/uploads/2014/02/pizza-margherita-Sorbillo-960x960.jpg"></img>
                </div>
                <div>
                    <h3>Quantità:</h3>
                    <button className={classes.quantifyButton} onClick={removeNumberItem}>-</button>
                    <span className={classes.textInside}>{number}</span>
                    <button className={classes.quantifyButton} onClick={addNumberItem}>+</button>
                </div>
        </div>}
    </div>
    );
};

export default FoodItem;