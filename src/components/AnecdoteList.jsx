import { useSelector, useDispatch } from 'react-redux'
import { voteIncrement } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const listFilter = useSelector(state => state.filter)

  const dispatch = useDispatch()
  
  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteIncrement(id))
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
