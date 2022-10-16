
import {useSelector} from 'react-redux'
import { firstSelectedItemID,receiptList} from '../redux/shop/itemsSlice'


function Receipt() {
  const firstSelectedItem = useSelector(firstSelectedItemID)
  const receipt = useSelector(receiptList)
  return (
    <div className='receipt'>
        <h1 className='receipt__title'>Your Receipt</h1>
        {firstSelectedItem && receipt.map((item) => {
          return(
            <p key={item.receiptID} className='receipt__item'>{item.itemName} <strong>{item.itemPiece}</strong> <strong>${item.totalPrice}</strong></p>
          )
        })}
        
    </div>
  )
}

export default Receipt