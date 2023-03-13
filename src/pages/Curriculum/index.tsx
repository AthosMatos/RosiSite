import { useState } from 'react';
import style from './style.module.css';
import {motion} from 'framer-motion';
import HeaderButton from '../../Header/PagesSwitcher/PagesSwitcherClicable';
import PagesSwitcher from '../../Header/PagesSwitcher';
import { useSelector } from 'react-redux';
import { pageReducerTypes } from '../../redux/pageReducer';

const Curriculum = () => 
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
            <h1>
                Curriculum
            </h1>
           
        </div>
    );
}

export default Curriculum;