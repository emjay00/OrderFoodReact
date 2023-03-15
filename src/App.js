import { useState } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/Cart-provider';

function App() {
  const [cartShown,setCartShown]=useState(false);

  const showCartHandler=()=>{
    setCartShown(true)
  }

  const hideCartHandler=()=>{
    setCartShown(false)
  }

  return (
    <CartProvider>
      {cartShown && <Cart onExit={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
