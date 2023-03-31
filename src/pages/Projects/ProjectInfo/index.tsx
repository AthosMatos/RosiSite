import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { lightModeReducerTypes } from '../../../redux/lightModeReducer'

interface ProjectInfoProps
{
    Title?:string,
    Description?:string,
}

const ProjectInfo = (props:ProjectInfoProps) =>
{
    const theme = useSelector((state:lightModeReducerTypes) => state.lightMode)
    
    return (
        <motion.div 
        layout = 'preserve-aspect'
        transition={{easings: 'easeInOut', duration: 0.2}}
        style={{
            display: 'flex',
            width: '460px',
            flexDirection: 'column',
            //border: 'solid 1px black',
        }}>
            <h1 style={{
                color: theme.textColor,
                fontSize: '2.4rem',
                fontFamily: 'Goldplay Bold',
            }}>{props.Title? props.Title : 'Title'}
            </h1>

            <p style={{
                color: theme.textColor,
                fontSize: '1.2rem',
                fontFamily: 'Goldplay Regular',
            }}>{props.Description? props.Description : 'Description'}
            </p>
        </motion.div>
    )
}

export default ProjectInfo