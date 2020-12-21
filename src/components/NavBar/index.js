import React from 'react';
import Searchbox from '../Searchbox'


function NavBar({handleSearchChange}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Searchbox handleSearchChange={handleSearchChange} />
        </nav>
    )
}



export default NavBar;