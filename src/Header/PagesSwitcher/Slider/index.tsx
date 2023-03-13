import {motion} from 'framer-motion';
import { useSelector } from 'react-redux';
import { pageReducerTypes } from '../../../redux/pageReducer';

const Slider = () =>
{
    const page = useSelector((state:pageReducerTypes) => state.pages)

    return (
        <motion.div 
        transition={{duration: 0.1}}
        initial={{
            marginLeft:0,
            width: 0,
        }}
        animate={{
            marginLeft:`clamp(${page.currentPageIndex * 0.8}rem, ${page.currentPageIndex * 7}vw, ${page.currentPageIndex * 7.2}rem)`,
            width: 'clamp(0.8rem, 7vw, 7.2rem)',
            backgroundColor: page.currentColor,
        }}
        style={{
            
           
            height: '4px',
            backgroundColor: '#000000',
            borderRadius: '200rem',
        }}/>
    )
}

export default Slider