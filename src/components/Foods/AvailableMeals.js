import classes from './AvaliableMeals.module.css'
import Card from '../UI/Card';
import FoodItem from './FoodItem';
import { useContext } from 'react';
import CategoryContext from '../../store/category-context';


const AvailableFoods = (props) => {
  const categoryCtx = useContext(CategoryContext);


  const foodList = categoryCtx.filteredMenu.map(meal => (<FoodItem id={meal.id} key={meal.id} name={meal.name} description={meal.desc} price={meal.price} onShowCart={props.onShowCart}></FoodItem>));

  if (categoryCtx.selectedCategory === "") {
    return (
      <h3 style={{ textAlign: 'center', color: '#383838' }}>
        Scegli una categoria per iniziare
      </h3>
    )
  }
  return (
    <section className={classes.meals}>
      <Card>{foodList}</Card>
    </section>
  )
}
// u1 -> unordered list
export default AvailableFoods;