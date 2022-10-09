import {useSelector,useDispatch} from 'react-redux'
import {destroy,addNote,search, selectNotes} from '../redux/notes/notesSlice'



function NoteList() {
    const dispatch = useDispatch();
    const allNotes = useSelector(selectNotes)
    // const filteredNotes = useSelector(search)
    // const handleDestroy = (id) => {
    //     if(window.confirm('Are you sure?')){
    //         dispatch(destroy(id))
    //     }
    // }
    const handleDestroy = (id) => {
        if(window.confirm("Are you sure for delete this delete?")) dispatch(destroy({id}))
    
    }
  return (
    <div className='note__list'>
        {allNotes.map((item) => {
            return(
        
            <div key={item.id} className='note' style={{backgroundColor: item.noteColor}}>
                <p>{item.note}</p>
                <button type="button" className="btn__delete" onClick={() => handleDestroy(item.id)}>X</button>
            </div>
         
            
            )
        })}
    </div>
  )
}

export default NoteList