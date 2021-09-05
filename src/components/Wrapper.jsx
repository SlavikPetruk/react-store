import React from 'react'
import Cart from './Cart'
import styles from './css/Cart.module.scss'

const Wrapper = ({offClickCart, onRemove, items=[], opened}) => {
    console.log(opened)
    return (
        <>

        <div className={`${styles.overlay} ${opened ? styles.overlayVissible : "" } `} onClick={offClickCart}>
            <div className={`${styles.drawer} ${opened ? styles.drawerVissible : "" } `}  onClick={(e) => e.stopPropagation()}>
                <Cart 
                      offClickCart={offClickCart}
                      onRemove={onRemove}
                      items={items}                                
                />
            </div>
        </div>
        </>
    )
}

export default Wrapper
