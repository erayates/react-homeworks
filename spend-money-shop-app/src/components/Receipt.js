import {useState} from 'react'
import {useSelector} from 'react-redux'
import { firstSelectedItemID, updatedItem } from '../redux/shop/itemsSlice'

function Receipt() {
  const item = useSelector(updatedItem)
  const firstSelectedItem = useSelector(firstSelectedItemID)

  return (
    <div className='receipt'>
        <h1 className='receipt__title'>Your Receipt</h1>
        {firstSelectedItem ? <p className='receipt__item'>{item.name} <strong>{item.piece}</strong> <strong>${item.price*item.piece}</strong></p> : ''}
        
    </div>
  )
}

export default Receipt