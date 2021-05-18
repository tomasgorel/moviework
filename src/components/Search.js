import React from 'react'

function Search ({ handleInput, Search }) {
    return (
       <section className="searchbox-wrap">
           <input 
           type="text" 
           placeholder="search for a movie..." 
           className="searchbox" 
           onChange={handleInput}
           onKeyPress={Search} 
        />
       </section>
    )
}

export default Search
