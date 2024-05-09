import React, { useState } from 'react';
import './Header.css';

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = ({target}) => {
        setSearchQuery(target.value);
    }
    const handleSearchSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='header'>
            <p id='logo'>[Logo goes here]</p>
            <form action="#" id='search-bar'>
                <input type="text" placeholder="Search..." onChange={handleSearchChange}/>
                <button type="submit" onSubmit={handleSearchSubmit}>Search</button>
            </form>
            <p id='time-tracker'>Time spent on app today: 1h 20mins</p>
        </div>
    );
}