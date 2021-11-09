import { configureStore } from "@reduxjs/toolkit"
import { actressesReducer } from "modules/features/"

export const store = configureStore({
  reducer: {
    actresses: actressesReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// AppDispatchが定義できないエラー原因と対処法 https://stackoverflow.com/questions/67531937/redux-toolkit-dispatching-thunk-type-missing
export type AppDispatch = typeof store.dispatch
