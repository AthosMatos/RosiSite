import { useSelector } from 'react-redux';
import { pageReducerTypes } from '../../redux/pageReducer';
import Cronogram from './cronogram';
import Images from './images';

const Career = () => 
{
    const page = useSelector((state:pageReducerTypes) => state.pages)

    return (
        <div style={{
            display: 'flex',
            width: '100vw',
            height: '84vh',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        }}>
            <Cronogram/>

            <div style={{
                width: 'clamp(20rem, 40vw, 40rem)',
                fontSize: 'clamp(0.6rem, 1.2vw, 1.6rem)',
                textJustify: 'auto',
            }}>
                <h1 style={{
                    color: page.currentColor,
                    fontWeight: 'bold',
                    fontSize: 'clamp(1.5rem, 5vw, 3.6rem)',
                   
                }}>
                    History Title
                </h1>
                <p style={{
                    fontSize: 'clamp(0.6rem, 1.0vw, 1.6rem)',
                    fontWeight: '400',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac purus dignissim, sagittis nibh a, consequat eros. Phasellus porta convallis libero quis luctus. Vivamus vel ipsum eget eros tristique vestibulum id nec est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel sapien mauris. Donec porta, elit in vulputate congue, tellus tellus bibendum nisl, vel gravida magna elit 
                s. Phasellus porta convallis libero quis luctus. Vivamus vel ipsum eget eros tristique vestibulum id nec est. Orci varius natoque penatibus et magnis dis parturient mo
                </p>

            </div>
            <Images/>
           
        </div>
    );
}

export default Career;