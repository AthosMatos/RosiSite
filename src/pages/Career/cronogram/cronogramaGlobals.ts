import { createSlice } from '@reduxjs/toolkit'

export interface cronogramaGlobalsType {
    globals:{
        currentSelected: number
    }
}

export const cronogramaGlobals = createSlice({
    name: 'Globals',
    initialState: {
        currentSelected: -1,
    },
    reducers: 
    {
        updateSelected: (state, action) => 
        {
            state.currentSelected = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {updateSelected} = cronogramaGlobals.actions

export default cronogramaGlobals.reducer