import { useSelector } from "react-redux"
import { lightModeReducerTypes } from "../redux/lightModeReducer"
import { pageReducerTypes } from "../redux/pageReducer"

interface LineProps
{
    width?:string
    height?:string
    style?:React.CSSProperties
    color?: 'mainTextColor' | 'secondaryTextColor'
}

const Line = (props:LineProps) =>
{
    const theme = useSelector((state:lightModeReducerTypes) => state.lightMode)
    const page = useSelector((state:pageReducerTypes) => state.pages)

    return (
        <div style={Object.assign(
            {
                width: props.width,
                height: props.height,
                backgroundColor: props.color === 'mainTextColor'? theme.textColor : props.color === 'secondaryTextColor'? page.currentColor : props.color,
                borderRadius: '1000rem',
            },
            props.style
        )}/>
    )
}

export default Line