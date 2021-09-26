import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import {moviesSlice} from '../features/movies/moviesSlice'

export function makeStore() {
  return configureStore({
    reducer: { movies: moviesSlice.reducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
