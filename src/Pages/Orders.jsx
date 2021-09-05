import Cards from '../components/Cards/Cards';
import React from 'react';
import '../components/css/Favorite.scss';
import axios from 'axios';
import AppContext from '../hooks/context';

function Orders () {
    const {onAddToCart, onAddToFavorite} = React.useContext(AppContext)
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        (async () => {
            try {
                const {data} = await axios
                .get('https://60ecb1dca78dc700178adbfe.mockapi.io/complete')
        // console.log(data.map((obj) => obj.items).flat())                      version 1
        // console.log(data.reduce((prev, obj) => [...prev,...obj.items],[] ))   version 2
                setOrders(data.reduce((prev, obj) => [...prev,...obj.items],[] ))
                setIsLoading(false)
            } catch (error) {
                alert('---------ERROR------------')
                console.error(error )
            } 
        })()
    }, [])
    

    return (
        <div className="favorite"><h1>Your Orders</h1>

        { orders.length>0 ?        
            <div>        
                {( isLoading ? [...Array(orders.length)] : orders)
                    .map((item, index) => <Cards key={index} {...item}
                                                    loading={isLoading} />)}
            </div> 
        : 
            <div className="emptyFavorite">
                <img src="/images/emptyFavorite.png" alt="logo" />            
            </div>}

        </div>
    )
}  
export default Orders;