import { Children, useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header';
import Food from './components/Foods/Foods';
import CartProvider from './store/CartProvider';
import AddingComponent from './components/Foods/AddingComponent';
import BusinessProvider from './store/BusinessProvider';



function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  const [cartIsShownAdd, setCartIsShownAdd] = useState(false);

  const showCartHandlerAdd = () => {
    setCartIsShownAdd(true);
  }

  const hideCartHandlerAdd = () => {
    setCartIsShownAdd(false);
  }

  return (
    <BusinessProvider>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
        <Header onShowCart={showCartHandler} ></Header>
        <main>
          <Food onShowCart={showCartHandlerAdd}></Food>
        </main>
        {cartIsShownAdd && <AddingComponent onClose={hideCartHandlerAdd} ></AddingComponent>}
      </CartProvider>
    </BusinessProvider>
  );
}

export default App;
