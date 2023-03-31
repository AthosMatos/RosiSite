import {motion} from "framer-motion"

interface ProjectImgProps
{
    image:string,
}

const ProjectImg = (props:ProjectImgProps) =>
{
    return (
        <motion.div
        layout = 'preserve-aspect'
        transition={{easings: 'easeInOut', duration: 0.2}}
        style={{
            display: 'flex',
            width: '100px',
            borderRadius: '1.2rem',
            marginRight:'3.6rem',
            overflow: 'hidden',
        }}>
            <img src={props.image} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }}/>
        </motion.div>
    )
}

export default ProjectImg;