import React from 'react';
import { NavLink as Link } from 'react-router-dom'
import { Github, Instagram } from 'react-bootstrap-icons';

function Networks(props) {
    return(
        <div className='body'>
                <h1 className='main'>Networks</h1>
                <div className='text'>
                    <hr />
                    <p><strong>My personal networks:</strong></p>
                    <ul className='links'>
                        <li>
                            <a href="https://github.com/Xmitthie" target="_blank" rel='noreferrer'><Github size={60} /></a>
                        </li>
                        <li>
                            <a href="https://instagram.com/aisk_1x" target="_blank" rel='noreferrer'><Instagram size={60} /></a>
                        </li>
                    </ul>
                    <Link className='back' to="/">🍩</Link>
                    <hr />
                </div>
        </div>
    )
}

export default Networks;