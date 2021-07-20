import Cards from '../components/Cards/Cards'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

function Home({searchValue,onChangeSearchInput,setSearchValue,items,onAddToCart,onAddToFavorite}) {
    return (
    <div className="content">
        <div style={{display: "flex", justifyContent:"space-between",color:"#fff", marginRight:"18px"}}>
              <div><h1 >{searchValue ? `Search Result: "${searchValue}"` : 'All Headphones'}</h1></div>
                  <div className="search-block">
                  <SearchIcon fontSize="large" style={{color:"#666"}} />
                  <input  onChange={onChangeSearchInput} 
                          value={searchValue} 
                          placeholder="Search ...">
                  </input>
                  {searchValue && <CloseIcon onClick={ ()=>setSearchValue('')} className="clear"/>}
              </div>
          </div>
          
          
          {items
            .filter((item2)=>item2.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => <Cards
                              key={index}
                              image={item.image} 
                              title={item.title} 
                              price={item.price} 
                              onFavorite={(obj) => onAddToFavorite(obj)}
                              onPlus={(obj) => onAddToCart(obj)} />)}      
        </div>
    )
}
export default Home;