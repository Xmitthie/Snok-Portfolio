import React from 'react';
import { NavLink as Link } from 'react-router-dom'; 
import err from '../assets/error.png'

function Error() {
    return(
        <div className='error'>
            <h1>Error 404</h1>
            <hr />
            <h2>¡Oh, no!<br />An unexpected error occurred</h2>
        <Link className='back' to='/'><span>🍩</span></Link>
        </div>
    )
}

export default Error;