import { render } from '@testing-library/react'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {addReceiptList, firstSelectedItemID, selectedItem, setItemPiece,setTotalMoney, totalMoney, updatedItem} from '../redux/shop/itemsSlice'

function ItemFooter({id}) {
  const [piece,setPiece] = useState(0)
 
  const dispatch = useDispatch()
  const money = useSelector(totalMoney)
  const item = useSelector(firstSelectedItemID)


  const handleInput = (e) => {
    setPiece(e.currentTarget.value)
  }

  const boughtItem = useSelector(updatedItem)
  const setItemAndReceipt = () => {
    if(piece !== 0){
      dispatch(selectedItem({id}))
      dispatch(setItemPiece({id,piece}))
      dispatch(setTotalMoney({id}))
    
      if(boughtItem.price*boughtItem.piece < money){
        dispatch(addReceiptList({id,piece}))
      }
    }
  }

  return (
    <>
      <div className='item__footer'>
        {!piece ? <button type='button' className='btn btn__sell' disabled>Sell</button> : <button type='button' className='btn btn__sell'>Sell</button> }
        <input type="number" className='input__piece' min="0" value={piece} onChange={handleInput}></input>
        <button type='button' className='btn btn__buy' onClick={setItemAndReceipt}>Buy</button>
    </div>
    </>
    
  )
}

export default ItemFooter