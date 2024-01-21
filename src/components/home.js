import React from 'react';
import av from '../assets/cro.gif';

function Home(props) {
    return(
        <div className='container'>
            <div className='av'>
                <img className="image" src={av} />
            </div>

            <h1>Snokmode</h1>
            <hr />
            <h2>🍡</h2>

            <div className='footer'>
                <a href="/@me" className='foot'><strong>Me</strong></a>
                <a href='/networks' className='foot'><strong>Networks</strong></a>
                <a href='/guilds' className='foot'><strong>Guilds</strong></a>
            </div>
        </div>

    )
}

export default Home;