import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { addNotification } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes"

const NewAnecdote = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(newAnecdote))
    dispatch(addNotification(`The anecdote - ${content} is saved`))
    setTimeout(() => {
      dispatch(addNotification(null))
    }, 5000)
  }

  return (
      <form onSubmit={addAnecdote}>
        <h2>create new</h2>
        <div>
          <input name="anecdote" />
        </div>
        <button type='submit'>create</button>
      </form>
  )
}

export default NewAnecdote