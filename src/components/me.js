import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import banner from '../assets/image3.gif';
import av from '../assets/cro.gif';

function Me(props) {

    return(
        <div className='card'>

            <div className='background'>
                <img src={banner} alt="Banner Profile"/>
            </div>

            <div className='avatar'>
                <img src={av} alt="Avatar Profile"/>
            </div>
            <div className='content'>
                <p className='description'>Hello, my name is Snokmode. I'm a 16 age and from Argetina</p>
            </div>
            <Link className='back' to="/">🍩</Link>
        </div>
        
    )
}

export default Me;