import React from 'react';
import styles from './Cards.module.scss';

function Cards({title, image, price, onPlus, onFavorite}) {

  const [isAdd, setIsAdd] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickAdd = () => {
      onPlus({title, image, price});
      setIsAdd(true)};
  
  const likeClick =() =>{
    onFavorite ({title, image, price});
    setIsFavorite(!isFavorite);
  }

 return (
    <div className={styles.card}>
    
    <div className={styles.like}>
      <img  alt="like"
            width={25}
            onClick={likeClick} 
            src={isFavorite ? "/images/like.png" : "/images/unlike.png"} />
    </div>
    
    <img alt="head1" src={image} width={180}/>
    <h5>{title}</h5>
    <div className="priceD">
      <div className={styles.div1}><span>Price:</span></div>
      <div className={styles.div2}><b>{price}  hrn</b></div>
      <div className={styles.div3}><img style={{color:"#9CC", cursor:"pointer", width:"30px"}}  //className={styles.addBox}
                          alt="add"
                          onClick={onPlus} 
                          onClick={onClickAdd} 
                          src={isAdd ? "/images/unbay.png" : "./images/buy.png"}/>
      </div>
    </div>
    </div>
 )
}
export default Cards;
