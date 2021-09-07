import React from 'react'
import style from './css/Item.module.scss'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';


const Item = ({onRemove, items=[], itemOpen, onItemClose}) => {
    return (
        <div className={itemOpen ? style.itemOverlay : style.itemOverlayHidden} 
                onClick={onItemClose}>
            <div className={style.Item} onClick={(e) => e.stopPropagation()}>
              
        {items.map((obj) =>           
            (<div key={obj.id} className={style.cartItem}>
                <img alt={style.cart} src={obj.image}/>
                    <div>
                    <p>{obj.title}</p>
                    <b>{obj.price}</b>
                    </div>
                <div><RemoveShoppingCartIcon onClick={()=>onRemove(obj.id)}
                                                    className={style.removeBtn}/></div>
            </div>))}
                             
            </div>
        </div>
    )
}

export default Item
