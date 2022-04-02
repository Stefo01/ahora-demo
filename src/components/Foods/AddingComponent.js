import classes from './addingComponent.module.css'
import Modal from '../UI/Modal';

const AddingComponent = (props) =>{
    
    return (
        <Modal onClose={props.onClose}>
            <div className={classes.total}>
                <button className={classes.quantifyButton}>+</button>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Confirm</button>
            </div>
        </Modal>
    )

}

export default AddingComponent;