import { createSlice } from '@reduxjs/toolkit'
import colors from '../colors'

export interface pageReducerTypes 
{
    pages:{
        currentPage: number,
        currentColor: string,
        currentPageIndex: number,
    }
}
export interface payloadTypes 
{
    payload:{
        index: number,
       
    }
}
export const pageReducer = createSlice({
    name: 'pages',
    initialState: {
        currentPageIndex: 0,
        currentColor: colors.softRed,
        currentPage: 'Home',
        sliderPos:{L:0,W:0}
    },
    reducers: 
    {
        updatePage: (state, action:payloadTypes) => 
        {
            state.currentPageIndex = action.payload.index

            switch(action.payload.index)
            {
                case 0:
                    state.currentPage = 'Home'
                    state.currentColor = colors.softRed
                    break
                case 1:
                    state.currentPage = 'Career'
                    state.currentColor = colors.softGreen
                    break
                case 2:
                    state.currentPage = 'Curriculum'
                    state.currentColor = colors.softPurple
                    break
                case 3:
                    state.currentPage = 'Projects'
                    state.currentColor = colors.softPink
                    break
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const {updatePage} = pageReducer.actions

export default pageReducer.reducer