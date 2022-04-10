import { Fragment, useContext } from 'react';
import classes from './FoodSummary.module.css'
import BusinessContext from '../../store/business-context';
import CategoryContext from '../../store/category-context';


const FoodSummary = (props) => {
    const businessCtx = useContext(BusinessContext);
    const categoryCtx = useContext(CategoryContext);

    return (
        <Fragment>
            <section className={classes.summary}>
                <h2>{businessCtx.name}</h2>
                <p>
                    Dai una occhiata al menù, scegli i tuoi piatti e cliccando il tasto "Ordina ora" potrai riceverli al più presto!
                </p>
            </section>
            <div className={classes.menuItems}>
                {businessCtx.categories.map(category => <h3 key={category.id} className={categoryCtx.isSelected(category.id) ? classes.menuItemsClicked : ""} onClick={() => categoryCtx.selectCategory(category.id)}>{category.name}</h3>)}
            </div>
        </Fragment>
    )
}

export default FoodSummary;