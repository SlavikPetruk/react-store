import React from 'react'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import styles from './css/Cart.module.scss'
import Info from './info';
import axios from 'axios';
import { useCart } from '../hooks/useCart';

function Overlay ({offClickCart, onRemove, items=[]} ) {

  const [isOrderComplete, setIsOrderComplete] = React.useState(false)
  const [orderId, setOrderId] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const {cartItems, setCartItems, totalPrice} = useCart()
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)) // for mockapi delete from cart
 
  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios
            .post('https://60ecb1dca78dc700178adbfe.mockapi.io/complete',
              {items : cartItems})
     
      setIsOrderComplete(true)
      setOrderId(data.id)
      setCartItems([]) // clearing cart after complitede

       // await axios.put('https://60ecb1dca78dc700178adbfe.mockapi.io/cart', []) ...... for normal backend
       
      for (let i = 0; i < cartItems.length; i++) { // for mockapi delete from cart
        const item = cartItems[i];
        await axios.delete('https://60ecb1dca78dc700178adbfe.mockapi.io/cart/' + item.id)
        await delay(1000)
      }     // for mockapi delete from cart - end

    } catch (error) {
      alert('-----------------------DIDNT WORK------------------------')
    } 
    setIsLoading(false)
  }

    return (
      <>
          <div className={styles.titleDrawer}>
            <div><h2>Your Cart</h2></div>
            <div><CloseIcon className="CloseIcon"
                            onClick={offClickCart}/></div>
          </div>

      {items.length>0 ? 
        <div className={styles.items}>
          {items.map((obj) =>           
            (<div key={obj.id} className={styles.cartItem}>
              <img alt={styles.cart} src={obj.image}/>
              <div>
                <p>{obj.title}</p>
                <b>{obj.price}</b>
              </div>
            <div><RemoveShoppingCartIcon onClick={()=>onRemove(obj.id)}
                                                      className={styles.removeBtn}/></div>
          </div>))}
        </div>
      : 

        <div className={styles.emptyCart}>
          <Info 
              title={isOrderComplete ? "Order Complited" : "Empty Cart"} 
              description={isOrderComplete ? `Your order #${orderId} will be delivery to you` : "Add anything to cart"} 
              image={isOrderComplete ? "/images/order_completed.png" : "/images/emptyCart.png"} />
        </div>
      }

        {cartItems.length>0 ? <div className={styles.summaryBlock}>
          <ul>
            <li>
              <span>Order Summary</span>
              <div></div>
              <b>{totalPrice} hrn</b>
            </li>
            <li>
              <span>Shipping Discount</span>
              <div></div>
              <b>{Math.round(totalPrice/100*5)} hrn</b>
            </li>
          </ul>
          <button disabled={isLoading} onClick={onClickOrder}><b>GO TO CHECKOUT</b></button>
        </div> : '' }
    </>
    )
}
export default Overlay;