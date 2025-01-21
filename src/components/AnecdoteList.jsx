import { useSelector, useDispatch } from 'react-redux'
import { voteIncrement } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { additionVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const listFilter = useSelector(state => state.filter)

  const dispatch = useDispatch()
  
  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteIncrement(id))
    const currentAnecdote = anecdotes.find(anecdote => anecdote.id === id)
    dispatch(additionVote(currentAnecdote))
    
    dispatch(setNotification(`You voted - '${currentAnecdote.content}' `, 5))

    // dispatch(addNotification(`You voted - '${currentAnecdote.content}' `))
    // setTimeout(() => {
    //   dispatch(addNotification(null))
    // }, 5000)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {[...anecdotes]
      .filter(anecdote => anecdote.content.toLowerCase().includes(listFilter.toLowerCase()))
      .sort((a, b) => b.votes - a.votes)
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
