import { useSelector } from 'react-redux'
import style from '../style.module.css'
import { cronogramaGlobalsType } from '../cronogram/cronogramaGlobals'
import { motion } from 'framer-motion'

interface ImagesProps
{
    images: {image1:string,image2:string,image3:string}[]
}

const Images = (props:ImagesProps) =>
{
    const GlobalcurrSelected = useSelector((state:cronogramaGlobalsType) => state.globals.currentSelected)
 
    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div 
            style={{
                borderRadius: '0.8rem',
                marginRight: '1rem',
            }}
            >
                <img
                style={{
                    borderRadius: '0.8rem',
                    objectFit: 'cover',
                    width: '250px',
                    height: '400px',
                }}
                src={props.images[GlobalcurrSelected] ? props.images[GlobalcurrSelected].image1 : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png'} alt="img1"/>
            </div>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <img 
                style={{
                    borderRadius: '0.8rem',
                    marginBottom: '1rem',
                    objectFit: 'cover',
                    width: '140px',
                    height: '140px',
                   
                }}
                src={props.images[GlobalcurrSelected]?props.images[GlobalcurrSelected].image2:'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png'} alt="img1"/>
               
                <img 
                style={{
                    borderRadius: '0.8rem',
                    objectFit: 'cover',
                    width: '140px',
                    height: '245px',
                }}
                src={props.images[GlobalcurrSelected]?props.images[GlobalcurrSelected].image3: 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png'} alt="img1"/>
              
            </div>
        </div>
    )
}  

export default Images