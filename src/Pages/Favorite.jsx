import Cards from '../components/Cards/Cards';
import React from 'react';
import '../components/css/Favorite.scss';

function Favorite ({onAddToCart, items, onAddToFavorite}) {

    return (
        <div className="favorite"><h1>Favorite Headphones</h1>

        { items.length>0 ? 
        
            <div>        
                {items.map((item, index) => <Cards
                key={index}
                {...item}   //id={item.id}, image={item.image}, title={item.title}, price={item.price}     
                favorited={true}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)} />)}
            </div> 
        : 
            <div className="emptyFavorite">
                <img src="/images/emptyFavorite.png" alt="logo" />            
            </div>}

        </div>
    )
}  
export default Favorite;