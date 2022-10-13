import React from 'react'

function ItemFooter() {
  return (
    <>
      <div className='item__footer'>
        <button type='button' className='btn btn__sell'>Sell</button>
        <input type="number" className='input__piece' min="0"></input>
        <button type='button' className='btn btn__buy'>Buy</button>
      </div>
    </>
    
  )
}

export default ItemFooter