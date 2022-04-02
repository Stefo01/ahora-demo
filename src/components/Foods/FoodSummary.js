import { Fragment } from 'react';
import classes from './FoodSummary.module.css'


const FoodSummary = (props) => {

    const displayItems = (id) => {
        
    }

    return ( 
        <Fragment>
            <section className={classes.summary}>
            <h2>Harp Pub</h2>
            <p>
                Scegli ciò che vuoi ordinare e una volta finito clicca il tasto Ordina ora per riceverlo comodamente al tuo tavolo!
            </p>
            </section>
            <div className={classes.menuItems}>
                {props.kindOfFood.map(item => <h2 onClick={displayItems(item.id)}>{item.name}</h2>)}
            </div>
        </Fragment>
    )
}

export default FoodSummary;