import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice =  createSlice({
    name:'notes',
    initialState:{
        items:[{
            id:'1',
            note: 'Learn React',
        },{
            id: '2',
            note: 'learn react 2'
        }],
        activeFilter: 'all'

    },
    reducers:{
        addNote: {
            reducer: (state,action) => {
                state.items.push(action.payload)
            },
            prepare: ({note}) => {
                return {
                    payload:{
                        id:nanoid(),
                        note
                    }
                }
            }
        },
        destroy: (state,action) => {
            const {id} = action.payload;
            const filtered = state.items.filter(item => item.id !== id)
            state.items = filtered
        },
        search: (state,action) => {
            const name = action.payload
            const filtered = state.items.filter(item => item.note === name)
            state.items = filtered
        }
    }
    
})


export const selectNotes = state => state.notes.items;
export const {addNote,destroy,search} = notesSlice.actions;
export default notesSlice.reducer;