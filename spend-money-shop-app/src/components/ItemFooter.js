import { render } from '@testing-library/react'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {addReceiptList, selectedItem, setItemPiece,setTotalMoney} from '../redux/shop/itemsSlice'

function ItemFooter({id}) {
  const [piece,setPiece] = useState(0)
  
  const dispatch = useDispatch()

  const handleInput = (e) => {
    setPiece(e.currentTarget.value)
  }

  const setItemAndReceipt = () => {
    if(piece !== 0){
      dispatch(setItemPiece({id,piece}))
      dispatch(selectedItem({id}))
      dispatch(addReceiptList({id,piece}))
      dispatch(setTotalMoney({id}))
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