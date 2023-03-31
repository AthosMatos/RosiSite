import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './pageReducer'
import cronogramaGlobals from '../pages/Career/cronogram/cronogramaGlobals'
import ProjectsGlobals from '../pages/Projects/ProjectsGlobals'
import lightModeReducer from './lightModeReducer'

const reduxContext = configureStore({
  reducer: 
  {
    pages: pageReducer,
    globals: cronogramaGlobals,
    ProjectsGlobals:ProjectsGlobals,
    lightMode: lightModeReducer
  },
})

export default reduxContext