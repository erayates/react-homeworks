import React from 'react'
import AddNote from './AddNote'
import Header from './Header'
import NoteList from './NoteList'

function Content() {
  return (
    <>
      <Header/>
      <AddNote/>
      <NoteList/>
    </>
  )
}

export default Content