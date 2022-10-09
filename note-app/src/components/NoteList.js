import {useSelector,useDispatch} from 'react-redux'
import {destroy,addNote,search} from '../redux/notes/notesSlice'



function NoteList() {
    // const dispatch = useDispatch();
    // const filteredNotes = useSelector(search)
    // const handleDestroy = (id) => {
    //     if(window.confirm('Are you sure?')){
    //         dispatch(destroy(id))
    //     }
    // }
  return (
    <div className='note__list'>
        <div className='note'>
            Note 1
        </div>
        <div className='note'>
            Note 1
        </div>
        <div className='note'>
            Note 1
        </div>
        <div className='note'>
            Note 1
        </div>
        <div className='note'>
            Note 1
        </div>
        <div className='note'>
            Note 1
        </div>
    </div>
  )
}

export default NoteList