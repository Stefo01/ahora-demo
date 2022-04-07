import { Fragment } from "react";
import AvailableFoods from "./AvailableMeals";
import FoodSummary from "./FoodSummary";


const Food = (props) => {

    return <Fragment>
        <FoodSummary></FoodSummary>
        <AvailableFoods onShowCart={props.onShowCart}></AvailableFoods>
    </Fragment>
}

export default Food;