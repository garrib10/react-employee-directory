import React from 'react';
import Searchbox from '../Searchbox'

function Main({handleSearchChange}) {
  return (
      <div> 
        <Searchbox 
        handleSearchChange={handleSearchChange}
        />
      </div>
  )
}

export default Main