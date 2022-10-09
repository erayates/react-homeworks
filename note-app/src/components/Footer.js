import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addNote} from '../redux/notes/notesSlice'


function Footer(props) {
  // const dispatch = useDispatch()
  const handleColor = (e) => {
    e.preventDefault()
    setnoteColor(getComputedStyle(e.currentTarget).backgroundColor)
    console.log(props.note)
  }
  const handleNote = (e) => {
  e.preventDefault()
  if(props.note === '' && noteColor === '') return
  const note = props.note
  console.log("İşlem başarılı.")
  // dispatch(addNote({note}))

   }
  const [noteColor,setnoteColor] = useState('')

  return (
    <div className='footer'>
      <div>
        <button type='button' className='btn__colored' onClick={handleColor}></button>
        <button type='button' className='btn__colored' onClick={handleColor}></button>
        <button type='button' className='btn__colored' onClick={handleColor}></button>
        <button type='button' className='btn__colored' onClick={handleColor}></button>
        <button type='button' className='btn__colored' onClick={handleColor}></button>
      </div>
      <div>
        <button type='submit' className='btn__add' onClick={handleNote}>ADD</button>
      </div>
    </div>
  )
}

export default Footer