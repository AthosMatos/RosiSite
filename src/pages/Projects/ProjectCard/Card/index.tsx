import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import { ProjectsGlobalsType } from "../../ProjectsGlobals"
import { useEffect } from "react"
import { pageReducerTypes } from "../../../../redux/pageReducer"
import { lightModeReducerTypes } from "../../../../redux/lightModeReducer"

interface CardProps
{
    title:string,
    image:string,
    onClick?:() => void,
    index:number
}

const Card = (props:CardProps) =>
{
    const cronogramGlobals = useSelector((state:ProjectsGlobalsType) => state.ProjectsGlobals)
    const page = useSelector((state:pageReducerTypes) => state.pages)
    const theme = useSelector((state:lightModeReducerTypes) => state.lightMode)

    return (
        <motion.div
        onClick={props.onClick}
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            border: (cronogramGlobals.currentProject == props.index) ? `solid 2px ${page.currentColor}` : `solid 0px #fff`,
        }}
        exit={{opacity: 0}}
        whileHover={{
            scale: 1.05,
        }}
        whileTap={{
            scale: 0.95,
        }}
        style={{
            display: 'flex',
            width: '260px',
            height: '60px',
            background: 'rgba(200, 200, 200, 0.18)',
            borderRadius: '1.2rem',
            margin: '1.6rem 0.8rem',
            overflow: 'hidden',
            //boxShadow: '1px 4px 8px rgba(0, 0, 0, 0.11)',
            cursor: 'pointer',
        }}>
            <img style={{
                
                objectFit: 'cover',
                width: '34%',
                height: '100%',
            }}
            src={props.image}
            />
            
            {
                /*
                <div 
                style={{
                   
                    background: 'rgba(200, 200, 200, 0.18)',
                    
                    backdropFilter:' blur(2.8px)',
                    WebkitBackdropFilter: 'blur(8.9px)',
                    position: 'absolute',
                    width: '260px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '1.1rem',
                }}/>
                */
            }
                
            <div 
            style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
            }}>
                <p style={{
                    color: theme.textColor,
                    fontFamily: 'Goldplay SemiBold',
                    fontSize: '1.2rem',
                }}>{props.title}</p>
            </div>                
            
             
        </motion.div>
    )
}

export default Card