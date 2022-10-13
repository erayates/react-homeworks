import React from 'react'

function Header() {
  const photo = "https://image.evoke.org/-/media/Images/Evoke/Contributors/BillGates/BillGates_Headshot.ashx?rev=e0ff333fd52a433a9f33fbd03797ad04&hash=E08025CD7B6E07214B21ED04F7251BD0"
  return (
    <div className='header'>
      <img src={photo} alt="Bill Gates Photo" className="header__photo" />
      <h3 className='header__title' >Spend Bill Gates Money</h3>
    </div>
  )
}

export default Header