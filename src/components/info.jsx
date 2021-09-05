import React from 'react'
import AppContext from '../hooks/context'
import styles from './css/Cart.module.scss'


const Info = ({image, title, description}) => {
    
    const {setCartOpen} = React.useContext(AppContext)

    return (
        <>
            <div><h2>{title}</h2></div>
            <div> <img src={image} alt="Empty" />  </div>
            <div><h3>{description}</h3></div>
            <div><button className={styles.button_back} onClick={() => setCartOpen(false)} >Come to site...</button> </div>
        </>
    )
}

export default Info
