import Home from './pages/Home';
import style from './App.module.css';
import Header from './Header';
import Pages from './pages';
import colors from './colors';
import { useDispatch, useSelector } from 'react-redux';
import { lightModeReducerTypes, updateLightMode } from './redux/lightModeReducer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

function App() {

  const theme = useSelector((state:lightModeReducerTypes) => state.lightMode)
  const dispatch = useDispatch()
  
  useEffect(()=>
  {
    const Localtheme = localStorage.getItem('theme')
    console.log(Localtheme)
    dispatch(updateLightMode(Localtheme? Localtheme : 'light'))
  },[])

  return (
    <motion.div 
    animate={{
      backgroundColor: theme.backgroundColor,
    }}
    style={{
      overflow: 'hidden',
      height: '100vh',
      width: '100vw',
      display: 'flex',
    }}>
      <div style=
      {{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        border:'1px solid #000000',
      }}>
        <Header/>
        <Pages/>
      </div>
    </motion.div>
  );
}
//<Pages/>
export default App;
