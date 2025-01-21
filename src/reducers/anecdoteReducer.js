import { createSlice, current } from '@reduxjs/toolkit'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    voteIncrement(state, action) {
      const id = action.payload
      const voteToChange = state.find(v => v.id === id)
      const changedVote = {
        ...voteToChange,
        votes: voteToChange.votes + 1
      }
      console.log(current(state)) // Using current for more readability
      return state.map(vote => vote.id !== id ? vote : changedVote)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { createAnecdote, voteIncrement, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer

// Without using createSlice

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'NEW_ANECDOTE': 
//       return [...state, action.payload]
//     case 'VOTE': {
//       const id = action.payload.id
//       const voteToChange = state.find(v => v.id === id)
//       const changedVote = {
//         ...voteToChange,
//         votes: voteToChange.votes + 1
//       }
//       return state.map(vote => vote.id !== id ? vote : changedVote)
//     }
//   default: return state
//   }
// }

// export const createAnecdote = (content) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     payload: {
//       content,
//       id: getId(),
//       votes: 0
//     }
//   }
// }

// export const voteIncrement = (id) => {
//   return {
//     type: 'VOTE',
//     payload: { id }
//   }
// }

// export default reducer