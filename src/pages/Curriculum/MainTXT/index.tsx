import { useSelector } from "react-redux"
import { lightModeReducerTypes } from "../../../redux/lightModeReducer"
import { pageReducerTypes } from "../../../redux/pageReducer"
import { AiFillMail } from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"

interface MainTXTProps
{
    name:string
    title:string
    email:string
    location:string
}

const MainTXT = (props:MainTXTProps) => 
{
    const page = useSelector((state:pageReducerTypes) => state.pages)
    const theme = useSelector((state:lightModeReducerTypes) => state.lightMode)

    return (
        <div style={{
            display: 'flex',
            height: 'fit-content',
            marginBottom: '30px',
        }}>
            <div
            style={{
                width: '8px',
                borderRadius: '10px',
                backgroundColor: page.currentColor,
                marginRight: '30px',
            }}
            />
            <div style={{
            lineHeight: '1',
            }}>
                <h1 style={{
                        color:  theme.textColor,
                        fontFamily: 'Goldplay Black',
                        fontSize: 'clamp(1rem, 3vw, 3rem)',
                }}>{props.name? props.name : 'Name'}
                </h1>
                <h1 style={{
                        color: page.currentColor,
                        fontFamily: 'Goldplay Bold',
                        fontSize: 'clamp(1rem, 2vw, 3rem)',
                }}>
                    {props.title? props.title : 'Title'}
                </h1>
                <div style={{
                    marginTop: '10px',  
                    lineHeight: '1.6',
                }}>
                    <div style={{
                            color: theme.textColor,
                            fontFamily: 'Goldplay SemiBold',
                            fontSize: 'clamp(0.4rem, 1.1vw, 2rem)',
                            alignItems: 'center',
                            display: 'flex',
                    }}>
                        <AiFillMail style={{marginRight:8}} size={24} color={page.currentColor}/>
                        {props.email? props.email : 'Email'}
                    </div>
                    <div style={{
                            color: theme.textColor,
                            fontFamily: 'Goldplay SemiBold',
                            fontSize: 'clamp(0.4rem, 1.1vw, 2rem)',
                            alignItems: 'center',
                            display: 'flex',
                    }}>
                        <MdLocationOn style={{marginRight:8}} size={24} color={page.currentColor}/>
                        {props.location? props.location : 'Location'}
                    </div>
                </div>
            </div>
        </div>
        )
}

export default MainTXT