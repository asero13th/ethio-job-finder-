import React from 'react'
import Button from 'react-bootstrap/Button';
function SearchBar() {
  return (
    <div className='search-wrapper'>
        <div className='search-box'>
            <form className='search-card'>
                <input className='search-input' type='text' placeholder='job title or keyword'/>
                <Button className='lg custom-button' variant="outline-primary">Search</Button>{' '}
            </form>
        </div>
    </div>
  )
}

export default SearchBar