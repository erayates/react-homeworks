import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {selectedItem, setItemPiece} from '../redux/shop/itemsSlice'

function ItemFooter({id}) {
  const [piece,setPiece] = useState(0)
  
  const dispatch = useDispatch()

  const handleInput = (e) => {
    setPiece(e.target.value)
  }

  const setItemAndReceipt = () => {
    dispatch(setItemPiece({id,piece}))
    dispatch(selectedItem({id}))
  }

  return (
    <>
      <div className='item__footer'>
        {!piece ? <button type='button' className='btn btn__sell' disabled>Sell</button> : <button type='button' className='btn btn__sell'>Sell</button>}
        <input type="number" className='input__piece' min="0" onChange={handleInput}></input>
        <button type='button' className='btn btn__buy' onClick={setItemAndReceipt}>Buy</button>
      </div>
    </>
    
  )
}

export default ItemFooter