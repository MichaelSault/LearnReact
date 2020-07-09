import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({children}) => {
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    };

    //use 'Link to' instead of 'href' so that the session does not reload each time a link is clicked
    return (
        <div>
            <div>
                <h3 style = {style}><Link to = '/'>Home</Link></h3>
                <h3 style = {style}><Link to = '/jokes'>Jokes</Link></h3>
            </div>
            {children}
        </div>
    )
}

export default Header;