import React from 'react'

function Header() {
  return (
    <div className='header'>
      <h1 className='header__title'>Notes App</h1>
      <input type="search" placeholder="Search..." className='input__search'></input>
    </div>
  )
}

export default Header