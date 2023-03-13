import { IconType } from "react-icons"
import colors from "../../../../colors"
import { motion } from "framer-motion"

interface SocialProps
{
    Icon: IconType,
    text: string,
    iconSize?: number,
}

const Data = (props:SocialProps) => 
{
    return (
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <motion.div 
            whileHover={{scale:1.1}}
            whileTap={{scale:0.97}}
            style={{
                display: 'flex',
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '1px 4px 8px rgba(0, 0, 0, 0.11)',
                borderRadius: '0.4rem',
                marginRight: '10px',
                width:props.iconSize ? `${2.6}vw` : '2.6vw',
                height:props.iconSize ? `${2.6}vw` : '2.6vw',
                cursor: 'pointer',
            }}>
                <props.Icon
                color={colors.textDark} 
                style={{
                    
                    width:props.iconSize ? `${props.iconSize * 1.6}vw` : '1.6vw',
                    height:props.iconSize ? `${props.iconSize * 1.6}vw` : '1.6vw',
                }}/>
            </motion.div>
            <p 
            style={{
                fontWeight:'400',
                userSelect: 'none',
            }}>{props.text}</p>
        </div>
    )
}

export default Data