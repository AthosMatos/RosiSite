import style from '../style.module.css'
import Cbutton from "./Cbutton"
import colors from "../../../colors"

const Cronogram = () =>
{

    

    return (
       
            <div
            className={style.VerticalSpacingChilds} 
            >
                <Cbutton color={colors.ultraPink} index={0}/>
                <Cbutton color={colors.softOrange} index={1}/>
                <Cbutton color={colors.softPurple} index={2}/>
                <Cbutton color={colors.softBlue} index={3}/>
                <Cbutton color={colors.softGreen} index={4}/>
            </div>
        
    )
}

export default Cronogram