import classes from './AvaliableMeals.module.css'
import Card from '../UI/Card';
import FoodItem from './FoodItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'é buono il sushi',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Piadina',
      description: 'Sempre ben farcita',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Hamburger',
      description: 'Come al MC',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Altro',
      description: 'Tocco di classe',
      price: 18.99,
    },
    {
      id: 'm5',
      name: 'Non so',
      description: 'Nessun allergene',
      price: 8.99,
    },
  ];

const AvailableFoods = (props) => {

    const foodList = DUMMY_MEALS.map(meal => (<FoodItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} onShowCart={props.onShowCart}></FoodItem>));

    return (
        <section className={classes.meals}>
            <Card>{foodList}</Card>
        </section>
    )
}
// u1 -> unordered list
export default AvailableFoods;