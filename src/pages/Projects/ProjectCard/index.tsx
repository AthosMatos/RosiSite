import { Grid } from '@mui/material';
import { ProjectProps } from '..';
import Card from './Card';
import { AnimatePresence, motion } from 'framer-motion';
import {IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface ProjectCardProps
{
    cards:ProjectProps[]
}

const ProjectCard = (props:ProjectCardProps) =>
{
    const rows = 5;

    function separateElement () 
    { 
        var separateElements = [];
        var multiElements = props.cards;
        
        for(var i = 0; i < multiElements.length; i+=rows) {
            var oneRow = [];
            oneRow.push(multiElements.slice(i, i+rows).map(item => {
            return (
                <Card
                index={item.index}
                onClick={item.onClick} 
                image={item.image}
                title={item.title}
                />
            )
          
        }))
        separateElements.push(oneRow.map(itm => {return <div>{itm}</div>}))
        }
        return separateElements;
    }

    return(
        <motion.div
        layout = 'preserve-aspect'
        transition={{
            easings: 'easeInOut', 
            duration: 0.2
        }}
        style={{
            marginLeft:'3.6rem',
            height: 'fit-content',
            width: 'clamp(20rem, 30vw, 40rem)',
            overflow: 'auto',
        }}> 
            <AnimatePresence>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridRowStart: 1,
                    gridRowEnd: 4,
                    gridColumnStart: 1,
                    gridColumnEnd: 4,
                }}>
                    {separateElement()}
                </div>
                
            </AnimatePresence>
        </motion.div>
)
}

export default ProjectCard;