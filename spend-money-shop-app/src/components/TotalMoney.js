import React from 'react'
import {useSelector} from 'react-redux'
import { totalMoney } from '../redux/shop/itemsSlice'

function TotalMoney() {
  const allMoney = useSelector(totalMoney)
  return (
    <div className='totalMoney'>
      <p className='totalMoney__money'>${allMoney}</p>
    </div>
  )
}

export default TotalMoney