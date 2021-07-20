import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import styles from './css/Overlay.module.scss'

function Overlay ({offClickCart, onRemove, items=[]} ) {

    return (
    <div className={styles.overlay} >
        <div className={styles.drawer}>
          <div className={styles.titleDrawer}>
            <div><h2>Your Cart</h2></div>
            <div><CloseIcon className={styles.CloseIcon} onClick={offClickCart}/></div>
          </div>

      {items.length>0 ? 
        <div className={styles.items}>
          {items.map((obj) =>           
            (<div className={styles.cartItem}>
              <img alt={styles.cart} src={obj.image}/>
              <div>
                <p>{obj.title}</p>
                <b>{obj.price}</b>
              </div>
            <div><RemoveShoppingCartIcon onClick={() => onRemove(obj.id)} className={styles.removeBtn}/></div>
          </div>))}
        </div>
      : 
        <div className={styles.emptyCart}>
          <div><img src="/images/emptyCart.png" alt="logo" /></div>
          <div><h3>Empty Cart</h3></div>
        </div>
      }

        <div className={styles.summaryBlock}>
          <ul>
            <li>
              <span>Order Summary</span>
              <div></div>
              <b>10 000 hrn</b>
            </li>
            <li>
              <span>Shipping Discount</span>
              <div></div>
              <b>9 500 hrn</b>
            </li>
          </ul>
          <button><b>GO TO CHECKOUT</b></button>
        </div>

        </div>
    </div>
    )
}
export default Overlay;