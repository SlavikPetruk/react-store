import React from 'react'
import style from './css/Item.module.scss'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';


const Item = ({onRemove, items=[]}) => {
    return (
        <div className={style.itemOverlay}>
            <div className={style.Item}>
              
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
