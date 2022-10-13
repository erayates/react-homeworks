import React from 'react'
import ItemFooter from './ItemFooter'

import {useSelector} from 'react-redux'
import { selectItems } from '../redux/shop/itemsSlice'

function ItemContent() {
    const allItems = useSelector(selectItems)
  return (
    <>
        {
            allItems.map((item) => {
                return(
                    <div key={item.id} className='item__content'>
                        <img src={item.img_url} alt={item.name}/>
                        <p className='item__title'><strong>{item.name}</strong> ${item.price}</p>
                        <ItemFooter id={item.id}/>
                    </div>
                )
            })
        }
       
      
      
    </>
  )
}

export default ItemContent