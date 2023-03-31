import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import store from '../../../redux/store';
import { pageReducerTypes } from '../../../redux/pageReducer';
import { cronogramaGlobalsType } from '../cronogram/cronogramaGlobals';
import { AnimatePresence, motion } from 'framer-motion';
import { lightModeReducerTypes } from '../../../redux/lightModeReducer';

interface TextDataProps
{
    texts: {title: string, text: string, color:string}[]
}

const TextData = (props:TextDataProps) =>
{
    const page = useSelector((state:pageReducerTypes) => state.pages)
    const GlobalcurrSelected = useSelector((state:cronogramaGlobalsType) => state.globals.currentSelected)
    const theme = useSelector((state:lightModeReducerTypes) => state.lightMode)

    return (
        <div style={{
            width: 'clamp(20rem, 30vw, 40rem)',
            fontSize: 'clamp(0.6rem, 1.2vw, 1.6rem)',
        }}>
            <AnimatePresence>
                <motion.h1
                layout
                initial={{opacity: 0,}}
                animate={{
                    opacity: 1, 
                    color: props.texts[GlobalcurrSelected]? props.texts[GlobalcurrSelected].color : 'black',
                }}
                exit={{opacity: 0,}}
                style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 'clamp(1.5rem, 5vw, 3.6rem)',
                    marginBottom: 'clamp(1.5rem, 4vh, 4rem)',  
                }}>
                    {props.texts[GlobalcurrSelected]&& props.texts[GlobalcurrSelected].title}
                </motion.h1>

                <motion.p 
                layout
                transition={{delay: 0.6}}
                initial={{opacity: 0,}}
                animate={{opacity: 1}}
                exit={{opacity: 0,}}
                style={{
                    color: theme.textColor,
                    textAlign: 'center',
                    fontSize: 'clamp(0.6rem, 1.0vw, 1.6rem)',
                    fontWeight: '400',
                }}>
                  {props.texts[GlobalcurrSelected]&& props.texts[GlobalcurrSelected].text}
                </motion.p>
            </AnimatePresence>
       

        </div>
    )
}

export default TextData;