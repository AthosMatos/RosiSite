import { useSelector } from "react-redux"
import { lightModeReducerTypes } from "../../redux/lightModeReducer"

const LanguageSwitch = () => 
{
    const theme = useSelector((state:lightModeReducerTypes) => state.lightMode)
    
    return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    }}>
        <p style={{
            color: theme.textColor,
            fontFamily: 'Goldplay ',
            fontSize: '1.1vw',
            fontWeight: '400',
            marginRight: '6px',
        }}>Language</p>
        <div style={{
            width:'2.4vw',
            height:'2.4vw',
            backgroundColor: 'purple',
            borderRadius: '100rem',
        }}/>
    </div>
    )
}

export default LanguageSwitch