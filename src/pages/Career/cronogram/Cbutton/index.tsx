import { useDispatch, useSelector } from 'react-redux'
import style from '../../style.module.css'
import { motion } from 'framer-motion'
import { pageReducerTypes } from '../../../../redux/pageReducer'
import { cronogramaGlobalsType,updateSelected } from '../cronogramaGlobals'

interface CbuttonProps
{
    index: number
    color: string
}

const Cbutton = (props:CbuttonProps) =>
{
    const page = useSelector((state:pageReducerTypes) => state.pages)
    const cronogramGlobals = useSelector((state:cronogramaGlobalsType) => state.globals)
    const dispatch = useDispatch()

    return (
        <div 
        className={style.horizontalSpacingChilds}	
        style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <motion.div 
            onClick={() => dispatch(updateSelected(props.index))}
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