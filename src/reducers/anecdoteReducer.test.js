// npm install --save-dev jest @babel/preset-env @babel/preset-react eslint-plugin-jest
// Create file .babelrc and fill with particular content
// Expand package.json with new "scripts": {/... "test": "jest"}
// Add to .eslintrc.cjs - env: {/... "jest/globals": true}
// npm install --save-dev deep-freeze

import deepFreeze from "deep-freeze";
import anecdoteReducer from './anecdoteReducer'

describe('Anecdotes Reducer', () => {
  const initialState = [
    {
      content: 'First anecdote',
      id: 12345,
      votes: 0
    },
    {
      content: 'Second anecdote',
      id: 12344,
      votes: 0
    },
    {
      content: 'Third anecdote',
      id: 12343,
      votes: 0
    },
  ]

  test('Votes is incremented', () => {
    const action = {
      type: 'VOTE',
      payload: { id: 12345} 
    }
    const state = initialState

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
    expect(newState).toEqual(
      [
        {
          content: 'First anecdote',
          id: 12345,
          votes: 1
        },
        {
          content: 'Second anecdote',
          id: 12344,
          votes: 0
        },
        {
          content: 'Third anecdote',
          id: 12343,
          votes: 0
        },
      ]
    )
  })

  test('Can create new anecdote', () => {
    const action = {
      type: 'NEW_ANECDOTE',
      payload: {
        content: 'New test anecdote',
        id: 54321,
        votes: 0
      }
    }
    const state = initialState

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
    expect(newState).toEqual(
      [
        {
          content: 'First anecdote',
          id: 12345,
          votes: 0
        },
        {
          content: 'Second anecdote',
          id: 12344,
          votes: 0
        },
        {
          content: 'Third anecdote',
          id: 12343,
          votes: 0
        },
        {
          content: 'New test anecdote',
          id: 54321,
          votes: 0
        }
      ]
    )
  })
})