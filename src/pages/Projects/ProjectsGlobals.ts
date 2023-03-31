import { createSlice } from '@reduxjs/toolkit'

export interface ProjectsGlobalsType {
    ProjectsGlobals:{
        currentSelected: number
        currentProject: number
    }
}

export const ProjectsGlobals = createSlice({
    name: 'ProjectsGlobals',
    initialState: {
        currentSelected: 0,
        currentProject: 0,
    },
    reducers: 
    {
        updateSelectedProject: (state, action) => 
        {
            state.currentSelected = action.payload
        },
        updateCurrentProject: (state, action) =>
        {
            state.currentProject = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {updateSelectedProject,updateCurrentProject} = ProjectsGlobals.actions

export default ProjectsGlobals.reducer