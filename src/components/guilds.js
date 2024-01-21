import React from 'react';
import guilds from './guilds.json';
import { NavLink as Link } from 'react-router-dom';
import { Discord } from 'react-bootstrap-icons';

function Guilds(props) {
    return(
        <div className='body'>
                <h1 className='main'>Guilds</h1>
                <div className='text'>
                    <hr />
                    {guilds.map((p) => {
                        return(
                    <ul className='guilds'>
                        <li>
                            <h3>{p.name}</h3>
                            <a href={p.url} target="_blank" rel='noreferrer'><Discord /></a>
                            <p>{p.info}</p>
                        </li>
                    </ul>
                        )
                    })}
                    <Link className='back' to="/">🍩</Link>
                    <hr />
                </div>
        </div>
    )
}

export default Guilds;