import { useDispatch, useSelector } from 'react-redux'
import style from '../../style.module.css'
import { motion } from 'framer-motion'
import { pageReducerTypes } from '../../../../redux/pageReducer'
import { cronogramaGlobalsType,updateSelectedCronograma } from '../cronogramaGlobals'
import { lightModeReducerTypes } from '../../../../redux/lightModeReducer'

interface CbuttonProps
{
    index: number
    color: string
    year?: string
}

const Cbutton = (props:CbuttonProps) =>
{
    const cronogramGlobals = useSelector((state:cronogramaGlobalsType) => state.globals)
    const dispatch = useDispatch()
    const theme = useSelector((state:lightModeReducerTypes) => state.lightMode)

    return (
        <div 
        className={style.horizontalSpacingChilds}	
        style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <motion.h1 
            animate={{
                opacity: (cronogramGlobals.currentSelected == props.index) ? 1 : 0.4,
            }}
            style={{
                fontSize: 'clamp(0.5rem, 1.4vw, 3rem)',
                fontFamily: 'Goldplay Bold',
                color: props.color,
            }}>{props.year? props.year : 'Year'}
            </motion.h1>

            <motion.div 
            onClick={() => dispatch(updateSelectedCronograma(props.index))}
            animate={{
                opacity: (cronogramGlobals.currentSelected == props.index) ? 1 : 0.4,
            }}
            whileHover={{scale: 1.05}}
            style={{
                width: '180px',
                height: '50px',
                backgroundColor: props.color,
                borderRadius: '0.8rem',
                cursor: 'pointer',
            }}/>

            <motion.div 
            animate={{
                scale: (cronogramGlobals.currentSelected == props.index) ? 1 : 0,
            
            }}
            style={{
                width: '6px',
                height: '50px',
                backgroundColor: props.color,
                borderRadius: '0.8rem',
                cursor: 'pointer',
            }}/>
        </div>
    )
}

export default Cbutton