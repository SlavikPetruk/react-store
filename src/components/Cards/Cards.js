import React from 'react';
import styles from './Cards.module.scss';
import ContentLoader from "react-content-loader";
import AppContext from '../../hooks/context';

function Cards({
    id, title, image, price,
    onPlus, onFavorite, 
    loading = false,
    favorited = false}) {
      
  const {isItemAdded} = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
      onPlus({id, title, image, price})
      }
  
  const likeClick =() =>{
    onFavorite ({id, title, image, price});
    setIsFavorite(!isFavorite);
  }

 return (
  <div className={styles.card}>
    
{ loading
? 
 (<ContentLoader 
  speed={0}
  width={238}
  height={382}
  viewBox="0 0 238 382"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb">
  <rect x="0" y="0" rx="0" ry="0" width="180" height="210" /> 
  <rect x="0" y="220" rx="0" ry="0" width="180" height="20" /> 
  <rect x="0" y="245" rx="0" ry="0" width="100" height="20" /> 
  <rect x="0" y="280" rx="0" ry="0" width="60" height="20" /> 
  <rect x="0" y="305" rx="0" ry="0" width="74" height="20" /> 
  <rect x="129" y="273" rx="0" ry="0" width="50" height="50" />
</ContentLoader>)
:
(<>{onFavorite && <div className={styles.like}>
      <img  alt="like"
            width={25}
            onClick={likeClick} 
            src={isFavorite ? "/images/like.png" : "/images/unlike.png"} />
    </div>}
    
    <img alt="head1" src={image} width={180}/>
    <h5>{title}</h5>
    <div className={styles.priceD}>
      <div className={styles.div1}><span>Price:</span></div>
      <div className={styles.div2}><b>{price}  hrn</b></div>
      <div className={styles.div3}>{onPlus && <img style={{color:"#9CC", cursor:"pointer", width:"30px"}}  //className={styles.addBox}
                          alt="Plus"
                          onClick={onClickPlus} 
                          src={isItemAdded(id) ? "/images/unbay.png" : "./images/buy.png"}/>}
      </div>
    </div>
    </>)}
  </div>
 )
}
export default Cards;
