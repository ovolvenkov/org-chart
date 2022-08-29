import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/usersSlice'
import treeReducer from './reducers/treeSllice'

const rootReducer = combineReducers({userReducer, treeReducer})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];