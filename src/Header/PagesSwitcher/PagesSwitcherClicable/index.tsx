import { motion } from 'framer-motion';
import { forwardRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageReducerTypes, updatePage } from '../../../redux/pageReducer';
import colors from '../../../colors';
import { lightModeReducerTypes } from '../../../redux/lightModeReducer';

interface PagesSwitcherClicableProps
{
    pageIndex:number
    pageName:string
    onClick?:()=>void
   
}
const PagesSwitcherClicable = forwardRef((props:PagesSwitcherClicableProps,ref:React.Ref<HTMLParagraphElement> | undefined) => 
{  
    const pages = useSelector((state:pageReducerTypes) => state.pages)
    const dispatch = useDispatch();
    const theme = useSelector((state:lightModeReducerTypes) => state.lightMode)
    
    return (
        <motion.p 
        transition={{duration: 0.1}}
        animate = {{
            color: props.pageIndex == pages.currentPageIndex ? pages.currentColor : theme.textColor,
            fontWeight: props.pageIndex == pages.currentPageIndex ? '800' : '400',
        }}
        ref={ref}
        onClick={()=>
        {
            dispatch(updatePage({index:props.pageIndex}))
        }}
        style = {{ 
            fontSize: 'clamp(0.4rem, 1.1vw, 1.2rem)',
            width: 'clamp(0.8rem, 7vw, 7.2rem)',
            userSelect: 'none',
            cursor: 'pointer',
           // border:'solid 1px red',
            textAlign: 'center',
        }} >{props.pageName}
        </motion.p> 
    );
})

export default PagesSwitcherClicable;