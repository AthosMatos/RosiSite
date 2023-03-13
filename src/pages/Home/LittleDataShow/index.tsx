import Data from './Data';
import style from './style.module.css';     
import { IconType } from "react-icons"

interface IconT
{
    iconSize?:number
    icon:IconType
    text:string
}

interface SocialsProps
{
    dataName:string
    icons:IconT[]
}

const LittleDataShow = (props:SocialsProps) =>
{
    return(
        <div>
            <p 
            style={{
                fontSize: '1.8vw',
                fontWeight: '700',
            }}>
                {props.dataName}
            </p>
            <div className={style.LittleData}>
                {props.icons.map((icon,index) => 
                {
                    return(
                        <Data iconSize={icon.iconSize} Icon={icon.icon} text={icon.text}/>
                    )
                })
                }
            </div>
        </div>
       
    )
}

export default LittleDataShow