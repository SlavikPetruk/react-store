import Cards from '../components/Cards/Cards';
import React from 'react';

function Favorite ({onAddToCart, items, onAddToFavorite}) {


    
    return (
        <div><h1>Favorite Headphones</h1>
        {items.map((item, index) => <Cards
                              key={index}
                              image={item.image} 
                              title={item.title} 
                              price={item.price} 
                              onFavorite={(obj) => onAddToFavorite(obj)}
                              onPlus={(obj) => onAddToCart(obj)} />)}
        </div>
    )
}  
export default Favorite;