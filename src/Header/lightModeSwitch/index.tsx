
import {useSelector} from 'react-redux'
import {motion } from 'framer-motion'
import { useState } from 'react'
import { pageReducerTypes } from '../../redux/pageReducer'

const LightModeSwitch = () =>
{
    const pages = useSelector((state:pageReducerTypes) => state.pages)
    const [isLightMode, setIsLightMode] = useState(true)

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
            onClick={() => setIsLightMode(!isLightMode)}
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