import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './pageReducer'
import cronogramaGlobals from '../pages/Career/cronogram/cronogramaGlobals'

const reduxContext = configureStore({
  reducer: 
  {
    pages: pageReducer,
    globals: cronogramaGlobals,
  },
})

export default reduxContext