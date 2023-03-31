
import {useDispatch, useSelector} from 'react-redux'
import {motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { pageReducerTypes } from '../../redux/pageReducer'
import { lightModeReducerTypes, updateLightMode } from '../../redux/lightModeReducer' 

const LightModeSwitch = () =>
{
    const pages = useSelector((state:pageReducerTypes) => state.pages)
    const theme = useSelector((state:lightModeReducerTypes) => state.lightMode)

    const [isLightMode, setIsLightMode] = useState(theme.mode == 'light'? true : false)
    const dispatch = useDispatch();

    useEffect(()=>
    {
        setIsLightMode(theme.mode == 'light'? true : false)
    },[theme])

    useEffect(()=>
    {
      
        dispatch(updateLightMode(isLightMode? 'light' : 'dark'))
    },[isLightMode])

    return (
        <motion.div
        layout
        style={{
            width:'4vw',
            height:'2.4vw',
            backgroundColor: '#D7D7D7',
            borderRadius: '100rem', 
        }}>
            <motion.div
            layout
            onClick={() => 
            {
                localStorage.setItem('theme',!isLightMode? 'light' : 'dark')
                setIsLightMode(!isLightMode)
            }}
            animate={{
                marginLeft: isLightMode? 0 :'1.6vw',
                backgroundColor: pages.currentColor,
            }}
            style={{
                width:'2.4vw',
                height:'2.4vw',
                borderRadius: '100rem',
                cursor: 'pointer',
            }}
            />
        </motion.div>
    )
}

export default LightModeSwitch