import { useSelector } from "react-redux";
import { lightModeReducerTypes } from "../redux/lightModeReducer";
import { pageReducerTypes } from "../redux/pageReducer";

interface TextProps
{
    text:string
    fontSize?:number | string
    weigth?:'Light' | 'SemiBold' | 'Bold' | 'Black' | 'Regular'
    color?:'mainTextColor' | 'secondaryTextColor' 
    style?:React.CSSProperties
}

const Text = (props:TextProps) =>
{
    const theme = useSelector((state:lightModeReducerTypes) => state.lightMode)
    const page = useSelector((state:pageReducerTypes) => state.pages)

    return (
       
        <p style={Object.assign(
            {
                fontSize: props.fontSize? props.fontSize : 32,
                color: props.color === 'mainTextColor'? theme.textColor : props.color === 'secondaryTextColor'? page.currentColor : props.color,
                fontFamily: `Goldplay ${props.weigth? props.weigth : 'SemiBold'}`,
            },
            props.style
        )}>{props.text}</p>
       
    );
}

export default Text;