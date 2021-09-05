import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {Link} from 'react-router-dom';
import LoginForm from './LoginForm';
import React from 'react';
import { useCart } from '../hooks/useCart';


function Header (props) {
    const [log, setLog] = React.useState(false);
    const clickLogin = () => setLog(true)
    const {totalPrice} = useCart()

    return (
        <header>
          <div className={log ? "loginHidden" : "loginBlock"}>
              {log && <LoginForm 
                        closeLog = {() => setLog(false)}
                      />}
            </div>
        <div className="headerLeft">
          <Link to="/">
           <img src="https://images.discordapp.net/avatars/711610119410024519/80efbf2dbb04b6133acf823924f2b291.png?size=128" alt="logo" style={{borderRadius:"70px"}}/>
          </Link>
          <div className="headerInfo"> 
            <h2>HEADPHONES STORE</h2>
            <p>MEGA ONLINE SHOPPING</p>
          </div>
        </div>

        <div className="headerRight">
          <ul>
            <li>
              <ShoppingCartOutlinedIcon onClick={props.onClickCart}/>
              <span>{totalPrice}$</span>
            </li>
            <li>
              <Link to="/favorite">
                <FavoriteBorderIcon/>
              </Link>            
            </li>
            <li>
            <Link to="/orders">
              <AccountCircleOutlinedIcon onClick={clickLogin} />
            </Link> 
            </li>
          </ul>
        </div>

      </header>
    )
   }
   export default Header;
   