import { useSelector } from 'react-redux';
import { pageReducerTypes } from '../../redux/pageReducer';
import Cronogram from './cronogram';
import Images from './images';
import TextData from './TextData';
import colors from '../../colors';

const lorem = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac purus dignissim, sagittis nibh a, consequat eros. Phasellus porta convallis libero quis luctus. Vivamus vel ipsum eget eros tristique vestibulum id nec est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel sapien mauris. Donec porta, elit in vulputate congue, tellus tellus bibendum nisl, vel gravida magna elit 
s. Phasellus porta convallis libero quis luctus. Vivamus vel ipsum eget eros tristique vestibulum id nec est. Orci varius natoque penatibus et magnis dis parturient mo
`

const Career = () => 
{ 

    return (
        <div style={{
            display: 'flex',
            width: '100vw',
            height: '84vh',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        }}>
            <Cronogram 
            years={['2019','2020','2021','2022','2023']}
            />
         
            <TextData texts={[
                {text:lorem,title:'History1 Title' , color:colors.ultraPink},
                {text:lorem,title:'History2 Title' , color:colors.softOrange},
                {text:lorem,title:'History3 Title' , color:colors.softPurple},
                {text:lorem,title:'History4 Title' , color:colors.softBlue},
                {text:lorem,title:'History5 Title' , color:colors.softGreen},
            ]}
            />

            <Images
            images={[{
                image1:'data:image/jpeg;base64,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',
                image2:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Eo_circle_red_number-2.svg/2048px-Eo_circle_red_number-2.svg.png',
                image3:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Eo_circle_red_number-3.svg/1024px-Eo_circle_red_number-3.svg.png'
            }]}
            />
           
        </div>
    );
}

export default Career;