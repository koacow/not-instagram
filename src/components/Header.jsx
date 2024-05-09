import React, { useState } from 'react';
import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <p>[Logo goes here]</p>
            <form action="#">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </form>
            <p>Time spent on app today: [Time]</p>
        </div>
    );
}