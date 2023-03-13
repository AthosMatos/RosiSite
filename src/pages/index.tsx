import Home from "./Home"
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from "react"
import Career from "./Career"
import Curriculum from "./Curriculum"
import Projects from "./Projects"
import { pageReducerTypes } from "../redux/pageReducer";
import {motion,Variants} from "framer-motion"

const Pages = () =>
{
    const pages = useSelector((state:pageReducerTypes) => state.pages)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <motion.div 
            transition={{duration:0.5}}
            initial={{ marginLeft:0 }}
            animate={{ marginLeft:(pages.currentPageIndex == 0) ? 0 : ((pages.currentPageIndex > 0) ? '-100vw' : '100vw')}}
            >
                <Home/>
            </motion.div>

            <motion.div 
            transition={{duration:0.5}}
            initial={{ marginLeft:'100vw' }}
            animate={{ marginLeft:(pages.currentPageIndex == 1) ? 0 : ((pages.currentPageIndex > 1) ? '-100vw' : '100vw')}}
            >
               <Career/>
            </motion.div>

            <motion.div 
            transition={{duration:0.5}}
            initial={{ marginLeft:'100vw' }}
            animate={{ marginLeft:(pages.currentPageIndex == 2) ? 0 : ((pages.currentPageIndex > 2) ? '-100vw' : '100vw')}}
            >
                <Curriculum/>
            </motion.div>
            
            <motion.div 
            transition={{duration:0.5}}
            initial={{ marginLeft:'100vw' }}
            animate={{ marginLeft:(pages.currentPageIndex == 3) ? 0 : ((pages.currentPageIndex > 3) ? '-100vw' : '100vw')}}
            >
                <Projects/>
            </motion.div>
           
        </div>
    )
}

export default Pages