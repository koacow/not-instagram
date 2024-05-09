import './App.css';
import React, { useState } from 'react';
import Home from './Home';
import Login from './Login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </>
  );
}
