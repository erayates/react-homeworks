import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {search} from '../redux/notes/notesSlice'

function Header() {
  const dispatch = useDispatch()
  const [searchInput,setSearchInput] = useState('')
  const handleSearch = (e) => {
    e.preventDefault()
    if(e.currentTargetValue !== ' '){
      setSearchInput(e.currentTarget.value)
    }
    dispatch(search({searchInput}))
  }
  return (
    <div className='header'>
      <h1 className='header__title'>Notes App</h1>
      <input type="search" placeholder="Search..." className='input__search' onChange={handleSearch}></input>
    </div>
  )
}

export default Header