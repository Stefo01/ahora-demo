import { Fragment, useContext } from 'react';
import classes from './FoodSummary.module.css'
import BusinessContext from '../../store/business-context';


const FoodSummary = (props) => {
    const businessCtx = useContext(BusinessContext);

    const displayItems = (id) => {

    }

    return (
        <Fragment>
            <section className={classes.summary}>
                <h2>{businessCtx.name}</h2>
                <p>
                    Scegli ciò che vuoi ordinare e una volta finito clicca il tasto Ordina ora per riceverlo comodamente al tuo tavolo!
                </p>
            </section>
            <div className={classes.menuItems}>
                {businessCtx.categories.map(category => <h2 key={category.id} onClick={() => displayItems(category.id)}>{category.name}</h2>)}
            </div>
        </Fragment>
    )
}

export default FoodSummary;