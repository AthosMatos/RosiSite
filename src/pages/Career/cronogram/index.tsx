import style from '../style.module.css'
import Cbutton from "./Cbutton"
import colors from "../../../colors"

interface CronogramProps
{
    years?: string[]
}

const Cronogram = (props:CronogramProps) =>
{
    return (
            <div
            className={style.VerticalSpacingChilds} 
            >
                <Cbutton year={props.years?props.years[0]:undefined} color={colors.ultraPink} index={0}/>
                <Cbutton year={props.years?props.years[1]:undefined} color={colors.softOrange} index={1}/>
                <Cbutton year={props.years?props.years[2]:undefined} color={colors.softPurple} index={2}/>
                <Cbutton year={props.years?props.years[3]:undefined} color={colors.softBlue}  index={3}/>
                <Cbutton year={props.years?props.years[4]:undefined} color={colors.softGreen} index={4}/>
            </div>
        
    )
}

export default Cronogram