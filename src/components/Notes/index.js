import {useState} from 'react'
import {v4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  AppContainer,
  AppHeading,
  InputContainer,
  Form,
  Input,
  List,
  InputTextarea,
  NoteButton,
  EmptyViewContainer,
  Image,
  EmptyHeading,
  EmptyParagraph,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setTextArea] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeTextArea = event => {
    setTextArea(event.target.value)
  }

  const addNotes = event => {
    event.preventDefault()
    const newNote = {
      id: v4(),
      title,
      note,
    }
    setNotesList(previousList => [...previousList, newNote])
    setTitle('')
    setTextArea('')
  }

  return (
    <AppContainer>
      <AppHeading>Notes</AppHeading>

      <InputContainer>
        <Form onSubmit={addNotes}>
          <Input
            type="text"
            onChange={onChangeTitle}
            placeholder="Title"
            value={title}
          />
          <InputTextarea
            type="text"
            onChange={onChangeTextArea}
            placeholder="Take a Note..."
            rows="10"
            value={note}
          />
          <NoteButton type="submit">Add</NoteButton>
        </Form>
      </InputContainer>
      {notesList.length === 0 ? (
        <EmptyViewContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyParagraph>Notes you add will appear here</EmptyParagraph>
        </EmptyViewContainer>
      ) : (
        <List>
          {notesList.map(each => (
            <NoteItem noteItemDetails={each} key={each.id} />
          ))}
        </List>
      )}
    </AppContainer>
  )
}

export default Notes
