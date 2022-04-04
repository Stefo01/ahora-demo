import classes from './addingComponent.module.css'
import Modal from '../UI/Modal';
import { Component, useState} from 'react';

const AddingComponent = (props) =>{
    const Caratteristiche = true;
    const components = false;
    const [number, setNumber] = useState(0)
    const removeNumberItem = () =>{
        if(number === 0)
            return;
        setNumber(number -1);
    }
    const addNumberItem = () => {
        if(number >= 30)
            return;
        setNumber(number +1);
    }

    // uno fra descrizione e contenuto non esisterà. Ora non visibili entrambi
    return (
        <Modal onClose={props.onClose}>
            <div>
                <h1>nomeProdotto</h1>
                <img className={classes.imageFood} src="https://www.scattidigusto.it/wp-content/uploads/2014/02/pizza-margherita-Sorbillo-960x960.jpg"></img>
                {Caratteristiche && 
                    <div>
                        <h3>Caratteristiche:</h3>
                        <p>
                            Descrizione prodotto
                        </p>
                        <h3>Richieste speciali:</h3>
                        <input type='text'></input>
                    </div>
                }
                {components &&
                    <div>
                        <h3>Contenuto:</h3>
                        <div>
                            <input type='checkbox'></input>
                            <label>parmigiano</label>
                        </div>
                        <div>
                            <input type='checkbox'></input>
                            <label>formaggio</label>
                        </div>
                        <div>
                            <input type='checkbox'></input>
                            <label>cipolla</label>
                        </div>
                    </div>
                }
            </div>
            <h3 className={classes.header}>Quantità:</h3>
            <div className={classes.total}>
                <button className={classes.quantifyButton} onClick={removeNumberItem}>-</button>
                <span className={classes.textInside}>{number}</span>
                <button className={classes.quantifyButton} onClick={addNumberItem}>+</button>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button} >Confirm</button>
            </div>
        </Modal>
    )

}

export default AddingComponent;