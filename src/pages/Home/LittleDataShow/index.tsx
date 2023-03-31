import { useSelector } from 'react-redux';
import Data from './Data';
import style from './style.module.css';     
import { IconType } from "react-icons"
import { lightModeReducerTypes } from '../../../redux/lightModeReducer';

interface IconT
{
    iconSize?:number
    icon:IconType
    text:string
}

interface SocialsProps
{
    dataName?:string
    icons:IconT[]
    onClick?:any[]
}

const LittleDataShow = (props:SocialsProps) =>
{
    const theme = useSelector((state:lightModeReducerTypes) => state.lightMode)
    
    return(
        <div>
            {props.dataName&&
                <p 
                style={{
                    color: theme.textColor,
                    fontSize: '1.8vw',
                    fontWeight: '700',
                }}>
                    {props.dataName}
                </p>
            }
            
            <div className={style.LittleData}>
                {props.icons.map((icon,index) => 
                {
                    return(
                        <Data 
                        onPress={props.onClick ? props.onClick[index] : undefined}
                        iconSize={icon.iconSize} 
                        Icon={icon.icon} 
                        text={icon.text}/>
                    )
                })
                }
            </div>
        </div>
    )
}

export default LittleDataShow