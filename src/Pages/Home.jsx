import Cards from '../components/Cards/Cards'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import ImageSlader from '../components/ImageSlider';
import Item from '../components/Item';
import React from 'react';

function Home({
    searchValue,
    onChangeSearchInput,
    setSearchValue,
    items,
    onAddToCart,
    isLoading,
    onAddToFavorite}) {

    const [itemOpen, setItemOpen] = React.useState(false)
    const onItemOpen = () => { setItemOpen(true) }
    const onItemClose = () => { setItemOpen(false) }


    const renderItems = () => {
    const fiteredItems = items.filter((item2)=>item2.title.toLowerCase().includes(searchValue.toLowerCase()))
        
    return ( isLoading ? [...Array(8)] : fiteredItems)                
                .map((item, index) => <Cards
                                  onItemOpen={onItemOpen}
                                  key={index}
                                  {...item} 
                                  onFavorite={(obj) => onAddToFavorite(obj)}
                                  onPlus={(obj) => onAddToCart(obj)} 
                                  loading={isLoading}
                                   />)
    }
    
        return (
    <div className="content">
                <ImageSlader />
        <div style={{display: "flex", justifyContent:"space-between",color:"#fff", marginRight:"18px"}}>
              <div><h1 >{searchValue ? `Search Result: "${searchValue}"` : 'All Headphones'}</h1></div>
                  <div className="search-block">
                  <SearchIcon fontSize="large" style={{color:"#666"}} />
                  <input  onChange={onChangeSearchInput} 
                          value={searchValue} 
                          placeholder="Search ...">
                  </input>
                  {searchValue && <CloseIcon 
                                    onClick={ ()=>setSearchValue('')} 
                                    className="clear"/>}
              </div>
          </div>          
        {renderItems()}   
        <Item 
            itemOpen={itemOpen}
            onItemClose={onItemClose}
            // items={cartItems} 
            // onRemove = {onRemoveItem}
        />         
    </div>
    )
}
export default Home;