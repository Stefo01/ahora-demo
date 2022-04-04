import { Fragment } from "react";
import AvailableFoods from "./AvailableMeals";
import FoodSummary from "./FoodSummary";


const Food = (props) => {
    const kindOfFood = [{
        name: 'Birre',
        id: 'M1',
        NumerItems: 10
    },
    {
        name: 'Primi',
        id: 'M2',
        NumerItems: 10
    },
    {
        name: 'Secondi',
        id: 'M3',
        NumerItems: 5
    },{
        name: 'Contorni',
        id: 'M4',
        NumerItems: 33
    }]

    return <Fragment>
        <FoodSummary kindOfFood={kindOfFood}></FoodSummary>
        <AvailableFoods onShowCart={props.onShowCart}></AvailableFoods>
    </Fragment>
}

export default Food;