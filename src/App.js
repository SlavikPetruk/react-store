import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img src="https://images.discordapp.net/avatars/711610119410024519/80efbf2dbb04b6133acf823924f2b291.png?size=128" style={{borderRadius:"70px"}}/>
          <div className="headerInfo"> 
            <h3>React Store</h3>
            <p>MEGA ONLINE STORE</p>
          </div>
        </div>

        <div className="headerRight">
          <ul>
            <li>
              <ShoppingCartOutlinedIcon />
              <span>999$</span>
            </li>
            <li>
            <AccountCircleOutlinedIcon />
            </li>
          </ul>
        </div>

      </header>

      <div className="content">
        <h1>Всі наушники</h1>
          <div className="card">
            <img src="https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_256,w_256/v1605169519/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/8944859512862.png"/>
            <h5>AKG Y500 Wireless Headphone</h5>
            <div>
              <div>
                <span>Price:</span>
                <p><b>5 000 hrn</b></p>
              </div>
              <AddBoxOutlinedIcon style={{ color: "#fff", float:"right", cursor:"pointer"  }}/>
            </div>
          </div>
      


          <div className="card">
            <img src="https://iconarchive.com/download/i59556/3xhumed/tools-hardware-pack-4/Sennheiser-PXC-450-Headphones.ico"/>
            <h5>AKG Y500 Wireless Headphone</h5>
            <div>
              <div>
                <span>Price:</span>
                <p><b>5 000 hrn</b></p>
              </div>
              <AddBoxOutlinedIcon style={{ color: "#fff", float:"right", cursor:"pointer"  }}/>
            </div>
          </div>

      

          <div className="card">
            <img src="https://ru.seaicons.com/wp-content/uploads/2015/07/AKG-Headphone-icon.png"/>
            <h5>AKG Y500 Wireless Headphone</h5>
            <div>
              <div className="price">
                <span>Price:</span>
                <p><b>5 000 hrn</b></p>
              </div>
              <AddBoxOutlinedIcon style={{ color: "#fff", float:"right", cursor:"pointer" }}/>
            </div>
          </div>



          <div className="card">
            <img src="https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_256,w_256/v1605169519/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/8944859512862.png"/>
            <h5>AKG Y500 Wireless Headphone</h5>
            <div>
              <div>
                <span>Price:</span>
                <p><b>5 000 hrn</b></p>
              </div>
              <AddBoxOutlinedIcon style={{ color: "#fff", float:"right", cursor:"pointer"  }}/>
            </div>
          </div>
      
      </div>

    </div>
  );
}

export default App;
