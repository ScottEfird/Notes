import * as actions from '../actions/notes'
import { createUuid } from '../utils'
import * as colors from '../../style/colors'

// Pretend there is a magic API call here to fetch some notes 🚀
const preloadedNotes = [
  {
    id: 1,
    title: 'Title',
    body: 'words and stuff',
    color: colors.SELECTABLE_BLUE
  },
  {
    id: 2,
    title: 'Yellow!',
    body: 'Html?!!!!',
    color: colors.SELECTABLE_YELLOW
  },
  {
    id: 3,
    title: 'Title',
    body: 'words and stuff',
    color: colors.SELECTABLE_BLUE
  },
  {
    id: 4,
    title: 'Yellow!',
    body: 'Html?!!!!',
    color: colors.SELECTABLE_YELLOW
  },
  {
    id: 5,
    title: 'Title',
    body: 'words and stuff',
    color: colors.SELECTABLE_BLUE
  },
  {
    id: 6,
    title: 'Yellow!',
    body: 'Html?!!!!',
    color: colors.SELECTABLE_YELLOW
  },
  {
    id: 7,
    title: 'Yellow!',
    body: 'Html?!!!!',
    color: colors.SELECTABLE_YELLOW
  }
]
//
const initialState = {
  notes: preloadedNotes
}

const noteReducers = (state = initialState, action) => {
  switch (action.type) {
  case actions.ADD_NOTE: {
    const { title, color, body } = action.payload

    const newNote = {
      id: createUuid(),
      title,
      color,
      body
    }

    const notes = state.notes
    notes.push(newNote)

    return Object.assign({}, state, {notes})
  }
  default:
    return state
  }
}

export default noteReducers
