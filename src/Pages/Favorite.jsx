import Cards from '../components/Cards/Cards';
import React from 'react';
import '../components/css/Favorite.scss';
import  AppContext  from '../hooks/context';

function Favorite () {
    const {favorite, onAddToFavorite} = React.useContext(AppContext)

    return (
        <div className="favorite"><h1>Favorite Headphones</h1>

        { favorite.length>0 ? 
        
            <div>        
                {favorite.map((item, index) => <Cards
                key={index}
                {...item}   //id={item.id}, image={item.image}, title={item.title}, price={item.price}     
                favorited={true}
                onFavorite={(obj) => onAddToFavorite(obj)}
                
                 />)}
            </div> 
        : 
            <div className="emptyFavorite">
                <img src="/images/emptyFavorite.png" alt="logo" />            
            </div>}

        </div>
    )
}  
export default Favorite;