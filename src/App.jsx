import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/AnecdoteForm'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <Filter />
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App