import React,{useContext} from 'react'
import './ExploreMenu.css'

import { StoreContext } from '../../context/storeContext'

const ExploreMenu = ({category,setCategory}) => {

    const {menu_list} = useContext(StoreContext);
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Indulge in our expertly curated menu, savor our signature dishes, and enjoy the inviting ambiance that makes us the perfect destination for any occasion.</p>
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
