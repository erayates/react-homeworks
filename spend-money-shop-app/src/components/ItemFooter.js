import {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'

import {setItemPiece} from '../redux/shop/itemsSlice'

function ItemFooter({id}) {
  const [piece,setPiece] = useState(0)
  const dispatch = useDispatch()
  const handleInput = (e) => {
    setPiece(e.target.value)
  }

 
  

  return (
    <>
      <div className='item__footer'>
        {!piece ? <button type='button' className='btn btn__sell' disabled>Sell</button> : <button type='button' className='btn btn__sell'>Sell</button>}
        
        <input type="number" className='input__piece' min="0" onChange={handleInput}></input>
        <button type='button' className='btn btn__buy' onClick={() => dispatch(setItemPiece({id,piece}))}>Buy</button>
      </div>
    </>
    
  )
}

export default ItemFooter