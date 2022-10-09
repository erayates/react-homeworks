import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addNote} from '../redux/notes/notesSlice'

function AddNote() {
    const [noteColor,setnoteColor] = useState('')
    const dispatch = useDispatch()
    const handleColor = (e) => {
      e.preventDefault()
      setnoteColor(getComputedStyle(e.currentTarget).backgroundColor)
    }
    const handleNote = (e) => {
      e.preventDefault()
      const note = e.currentTarget.value
      if(note === '' && noteColor === '') return
      dispatch(addNote({note}))
     }
  return (
      <div className='add__note'>
          <textarea className='text__note' placeholder='Enter your note...' onChange={handleNote}>
          </textarea>
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
          {/* <Footer/> */}
      </div>
  )
}

export default AddNote