import React, {useState} from 'react';
import axios from 'axios';
import Overlay from './components/Cart';
import Header from './components/Header';
import Home from './Pages/Home';
import Favorite from './Pages/Favorite';
import { Route } from 'react-router-dom';


function App() {
  const [cartItems, setCartItems] = useState([]);    //cart items
  const [cartOpen, setCartOpen] = useState(false);   //cart open
  const [items,setItems] = useState([]);             //conteiner items
  const [searchValue, setSearchValue] = useState(''); //searchBar
  const [isLoading, setIsLoadind] = useState(true);

  const onChangeSearchInput = (event) =>{
      setSearchValue(event.target.value);};

  const [favorite, setFavorite] = React.useState([]);
  const onAddToFavorite = async (obj) => {
  try  {if (favorite.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`https://60ecb1dca78dc700178adbfe.mockapi.io/favorites/${obj.id}`);
      // setFavorite((prev) => prev.filter((item) => item.id !== obj.id)); delete favorite from frontend
    } else {
      const {data} = await axios.post('https://60ecb1dca78dc700178adbfe.mockapi.io/favorites', obj);
      setFavorite ((prev) =>[...prev, data]);
       } 
      } 
    catch (error) {  
        alert('Not add to favorites') }
    };

  React.useEffect(()=>{
    async function fetchData () {

      // setIsLoadind(true); if many responce

      const cartResponce = await axios.get('https://60ecb1dca78dc700178adbfe.mockapi.io/cart');
      const favoriteResponce = await axios.get('https://60ecb1dca78dc700178adbfe.mockapi.io/favorites');
      const itemResponce = await axios.get('https://60ecb1dca78dc700178adbfe.mockapi.io/items');
    
      setIsLoadind(false); //finish loading data

    setCartItems(cartResponce.data);
    setFavorite(favoriteResponce.data);
    setItems(itemResponce.data);
    } 
      fetchData ();
  },[]);

const onAddToCart = (obj) => {
  if (cartItems.find((item) => Number(item.id) === Number(obj.id))){
  setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))}
  else {axios.post('https://60ecb1dca78dc700178adbfe.mockapi.io/cart',obj);
  setCartItems ((prev) =>[...prev,obj]);}
};

const onRemoveItem = (id) => {
  axios.delete(`https://60ecb1dca78dc700178adbfe.mockapi.io/cart/${id}`)
  setCartItems((prev) => prev.filter((itemd) => itemd.id !== id ));
};

  return (
    <div className={cartOpen ? "wrapper overflow-hidden" : "wrapper"}>
      {cartOpen && <Overlay items={cartItems}
                            offClickCart={() => setCartOpen(false)}
                            onRemove = {onRemoveItem} />}
       
        <Header onClickCart={() => setCartOpen(true)} />
      <Route exact path="/">
        <Home 
          searchValue={searchValue}
          cartItems={cartItems}
          onChangeSearchInput={onChangeSearchInput}
          setSearchValue={setSearchValue}
          onAddToFavorite={onAddToFavorite}
          items={items}
          isLoading={isLoading}
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
