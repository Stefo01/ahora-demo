import classes from './FoodItemForms.module.css'
import Input from '../UI/Input';
import { useRef, useState } from 'react';

const FoodItemForm = (props) =>{
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);
    

    const sumbitHandler = event => {
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        

        if(enteredAmount.trim().lenght === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 10){
            
            setAmountIsValid(false);
            return;
        }
        
        props.onAddToCart(enteredAmountNumber);
    }

    return (
    <form className={classes.form} onSubmit={sumbitHandler}>
        <Input 
            ref={amountInputRef}
            label='Quantità:'
            input={{
            id: 'amount' + props.id,
            type: 'number',
            min: '0',
            max: '9',
            step: '1',
            defaultValue: '0',
        }}></Input>
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-10)</p>}
    </form>
    );
}

export default FoodItemForm;

// event.preventDefault(); prevent the reload of page by the browser