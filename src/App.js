import React from 'react';
import axios from 'axios';
import Overlay from './components/Overlay';
import Header from './components/Header';
import Home from './Pages/Home';
import Favorite from './Pages/Favorite';

import { Route } from 'react-router-dom';


function App() {
  const [cartItems, setCartItems] = React.useState([]);    //cart items
  const [cartOpen, setCartOpen] = React.useState(false);   //cart open
  const [items,setItems] = React.useState([]);             //conteiner items
  const [searchValue, setSearchValue] = React.useState('') //searchBar

  const onChangeSearchInput = (event) =>{
      setSearchValue(event.target.value);};

  const [favorite, setFavorite] = React.useState([]);
  const onAddToFavorite = (obj) => {
      axios.post('https://60ecb1dca78dc700178adbfe.mockapi.io/favorites', obj);
      setFavorite ((prev) =>[...prev,obj]);
    };

  React.useEffect(()=>{
  axios.get('https://60ecb1dca78dc700178adbfe.mockapi.io/items').then((res)=>{
    setItems(res.data)})
  axios.get('https://60ecb1dca78dc700178adbfe.mockapi.io/cart').then((res)=>{
    setCartItems(res.data)})
  axios.get('https://60ecb1dca78dc700178adbfe.mockapi.io/favorites').then((res)=>{
    setFavorite(res.data)})
  },[]);

const onAddToCart = (obj) => {
  axios.post('https://60ecb1dca78dc700178adbfe.mockapi.io/cart',obj);
  setCartItems ((prev) =>[...prev,obj]);
};

const onRemoveItem = (id) => {
  axios.delete(`https://60ecb1dca78dc700178adbfe.mockapi.io/cart${id}`)
  setCartItems((prev) => prev.filter((itemd) => itemd.id !== id ));
};

  return (
    <div className="wrapper">
      {cartOpen && <Overlay items={cartItems}
                            offClickCart={() => setCartOpen(false)}
                            onRemove = {onRemoveItem} />}
        <Header onClickCart={() => setCartOpen(true)} />
      <Route exact path="/">
        <Home 
          searchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          setSearchValue={setSearchValue}
          onAddToFavorite={onAddToFavorite}
          items={items}
          onAddToCart={onAddToCart}/>
      </Route>
      <Route path="/favorite">
        <Favorite   items={favorite}
                    onAddToCart={onAddToCart}
                    onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
}

export default App;
