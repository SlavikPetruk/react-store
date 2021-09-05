import React, {useState} from 'react';
import axios from 'axios';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Home from './Pages/Home';
import Favorite from './Pages/Favorite';
import { Route } from 'react-router-dom';
import AppContext from './hooks/context';
import Footer from './components/Footer';
import Orders from './Pages/Orders';
import Item from './components/Item';


function App() {
  const [cartItems, setCartItems] = useState([]);    //cart items
  const [cartOpen, setCartOpen] = useState(false);   //cart open
  const [items,setItems] = useState([]);             //conteiner items
  const [searchValue, setSearchValue] = useState('') //searchBar
  const [isLoading, setIsLoadind] = useState(true);

  const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value);};

  const [favorite, setFavorite] = React.useState([]);
  
  const onAddToFavorite = async (obj) => {
  try  {if (favorite.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`https://60ecb1dca78dc700178adbfe.mockapi.io/favorites/${obj.id}`);
      setFavorite(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
    } else {
      const {data} = await axios.post('https://60ecb1dca78dc700178adbfe.mockapi.io/favorites', obj);
      setFavorite ((prev) =>[...prev, data]);
       } 
      } 
    catch (error) {  
        alert('Not add to favorites') }
    };

  React.useEffect(() => {
    async function fetchData () {
      try {
        const cartResponce = await axios.get('https://60ecb1dca78dc700178adbfe.mockapi.io/cart');
        const favoriteResponce = await axios.get('https://60ecb1dca78dc700178adbfe.mockapi.io/favorites');
        const itemResponce = await axios.get('https://60ecb1dca78dc700178adbfe.mockapi.io/items');
      
        setIsLoadind(false); //finish loading data
        setCartItems(cartResponce.data);
        setFavorite(favoriteResponce.data);
        setItems(itemResponce.data);
      } catch (error) {
        alert('-------------Error in Responce.data---------------')
      }

    } 
      fetchData ();
  },[]);

const onAddToCart = async (obj) => {
  if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
    setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
    await axios.delete(`https://60ecb1dca78dc700178adbfe.mockapi.io/cart/${obj.id}`)
  }
  else {
    setCartItems ((prev) =>[...prev,obj])
    await axios.post('https://60ecb1dca78dc700178adbfe.mockapi.io/cart',obj)
  }
};

const onRemoveItem = (id) => {
  axios.delete(`https://60ecb1dca78dc700178adbfe.mockapi.io/cart/${id}`)
  setCartItems((prev) => prev.filter((itemd) => itemd.id !== id ));
};

const isItemAdded = (id) => {
  return cartItems.some((obj) => Number(obj.id) === Number(id))
}
  return (
    <AppContext.Provider value={{ items, cartItems, favorite, 
                                  isItemAdded, 
                                  onAddToFavorite, 
                                  setCartOpen,               
                                  setCartItems}}>
      <div className="wrapper">
              <Wrapper      items={cartItems}
                            opened={cartOpen}
                            offClickCart={() => setCartOpen(false)}
                            onRemove = {onRemoveItem} />
       
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
        <Favorite />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
      <Route path="/orders">
        <Item items={cartItems} onRemove = {onRemoveItem}/>
      </Route>
    </div>
    <Footer/>
    </AppContext.Provider>
    
  );
}

export default App;
