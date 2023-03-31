import { useDispatch, useSelector } from 'react-redux';
import { ProjectsGlobalsType, updateCurrentProject, updateSelectedProject } from './ProjectsGlobals';
import { useEffect, useState } from 'react';
import LittleDataShow from '../Home/LittleDataShow';
import { AiOutlineUser } from 'react-icons/ai';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import ProjectImg from './ProjectImg';
import ProjectInfo from './ProjectInfo';
import ProjectCard from './ProjectCard';

export interface ProjectProps
{
    index:number,
    title:string,
    image:string,
    text:string, 
    onClick:()=>void
}

export interface ProjectsProps
{
    Projects:ProjectProps[]
}


const Projects = () => 
{ 
    const Academic:ProjectsProps =
    {
        Projects:[
            {
                title:'Academic Project 1',
                image:'https://i.imgur.com/1Z1Z1Z1.png',    
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(0))},
                index:0
            },
            {
                title:'Academic Project 2',
                image:'https://i.imgur.com/2Z2Z2Z2.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(1))},
                index:1
            },
            {
                title:'Academic Project 3',
                image:'https://i.imgur.com/3Z3Z3Z3.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(2))},
                index:2
            },
        ],
    }

    const Personal:ProjectsProps = 
    {
        Projects:[
            {
                title:'Project 1',
                image:'https://i.imgur.com/1Z1Z1Z1.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.',
                onClick:() => {dispatch(updateCurrentProject(0))},
                index:0
            },
            {
                title:'Project 2',
                image:'https://i.imgur.com/2Z2Z2Z2.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(1))},
                index:1
            },
            {
                title:'Project 3',
                image:'https://i.imgur.com/3Z3Z3Z3.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(2))},
                index:2
            },
            {
                title:'Project 4',
                image:'https://i.imgur.com/4Z4Z4Z4.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(3))},
                index:3
            },
            {
                title:'Project 5',
                image:'https://i.imgur.com/5Z5Z5Z5.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(4))},
                index:4
            },
            {
                title:'Project 6',
                image:'https://i.imgur.com/6Z6Z6Z6.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(5))},
                index:5
            },
            {
                title:'Project 6',
                image:'https://i.imgur.com/6Z6Z6Z6.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(5))},
                index:5
            },
            {
                title:'Project 6',
                image:'https://i.imgur.com/6Z6Z6Z6.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(5))},
                index:5
            },
            {
                title:'Project 6',
                image:'https://i.imgur.com/6Z6Z6Z6.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(5))},
                index:5
            },
            {
                title:'Project 6',
                image:'https://i.imgur.com/6Z6Z6Z6.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(5))},
                index:5
            },
            {
                title:'Project 6',
                image:'https://i.imgur.com/6Z6Z6Z6.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(5))},
                index:5
            },
            {
                title:'Project 6',
                image:'https://i.imgur.com/6Z6Z6Z6.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(5))},
                index:5
            },
            {
                title:'Project 6',
                image:'https://i.imgur.com/6Z6Z6Z6.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(5))},
                index:5
            },
            {
                title:'Project 6',
                image:'https://i.imgur.com/6Z6Z6Z6.png',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nunc nisl eget nisl.'
                ,onClick:() => {dispatch(updateCurrentProject(5))},
                index:5
            },
        ],
    } 

    const cronogramGlobals = useSelector((state:ProjectsGlobalsType) => state.ProjectsGlobals)
    const [projectData,setProjectData] = useState<ProjectsProps>(Personal)
    
    const dispatch = useDispatch()

    useEffect(()=>
    {
        if(cronogramGlobals.currentSelected == 0)
        {
            setProjectData(Personal)
        }
        else setProjectData(Academic)
    
    },[cronogramGlobals])


    return (
        <div 
        style={{
            display: 'flex',
            width: '100vw',
            height: '84vh',
            alignItems: 'center',
            justifyContent: 'center',
            //border: '1px solid black',
        }}>
            
            <div 
            style={{
              
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
            }}>
                <LittleDataShow
                icons={[
                    {text:'Personal',icon:AiOutlineUser},
                    {text:'Academic',icon:AiOutlineUser},
                ]}
                onClick={[
                    () => 
                    {
                        dispatch(updateSelectedProject(0))
                        dispatch(updateCurrentProject(0))
                    },
                    () => 
                    {
                        dispatch(updateSelectedProject(1))
                        dispatch(updateCurrentProject(0))
                    },
                ]}
                />
            </div>
            
            <div 
            style={{
               
                flex: 5,
            }}
            >
                <AnimatePresence>
                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    style={{
                        display: 'flex',
                    }}>
                        <ProjectImg
                        image={projectData.Projects[cronogramGlobals.currentProject].image}
                        />
                        <ProjectInfo
                        Title={projectData.Projects[cronogramGlobals.currentProject].title}
                        Description={projectData.Projects[cronogramGlobals.currentProject].text}
                        />

                        
                        <ProjectCard 
                        cards={projectData.Projects}
                        />
                        
                       

                    </motion.div>
                   
                </AnimatePresence>
            </div>
        </div>  
    );
}

export default Projects;