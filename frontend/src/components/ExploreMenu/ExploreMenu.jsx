import React,{useContext} from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import { StoreContext } from '../../context/storeContext'

const ExploreMenu = ({category,setCategory}) => {

    const {menu_list} = useContext(StoreContext);
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Add your favourite dishes to cart and enojy them they taste so good and are prepred very quickly gor ur conveniene</p>
         <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div  onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'> 
                        <img src={item.menu_image} className={category===item.menu_name?"active":""}  alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu