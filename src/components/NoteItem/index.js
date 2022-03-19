import {NoteUnOrder, NoteHeading, NoteParagraph} from './styledComponents'

const NoteItem = props => {
  const {noteItemDetails} = props
  const {note, title} = noteItemDetails
  return (
    <NoteUnOrder>
      <NoteHeading>{title}</NoteHeading>
      <NoteParagraph>{note}</NoteParagraph>
    </NoteUnOrder>
  )
}

export default NoteItem
