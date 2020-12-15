import React from 'react';

function Searchbox({ handleSearchChange }) {
    return (
        <div className ="searchbox">
            <form className="form-inline">
                <input 
                className="form-control" 
                type="search" 
                placeholder="search"
                onChange={e => handleSearchChange(e)}
                >
            
                </input>

            </form>
        </div>
    )
}
 export default Searchbox