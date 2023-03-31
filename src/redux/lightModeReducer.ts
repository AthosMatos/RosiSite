import { createSlice } from '@reduxjs/toolkit'
import colors from '../colors'

export interface lightModeReducerTypes 
{
    lightMode:{
        mode: string,
        backgroundColor: string,
        textColor: string,
        iconColor: string,
    }
}

export const lightModeReducer = createSlice({
    name: 'lightMode',
    initialState: {
        mode: 'light',
        backgroundColor: colors.softWhite,
        textColor: colors.textDark,
        iconColor: colors.textDark,
    },
    reducers: 
    {
        updateLightMode: (state, action) => 
        {
            state.mode = action.payload
            switch(action.payload)
            {
                case 'light':
                    state.backgroundColor = colors.softWhite
                    state.textColor = colors.textDark
                    state.iconColor = colors.textDark
                    break
                case 'dark':
                    state.backgroundColor = colors.darkBackground
                    state.textColor = colors.softWhite
                    state.iconColor = colors.softWhite
                    break
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const {updateLightMode} = lightModeReducer.actions

export default lightModeReducer.reducer