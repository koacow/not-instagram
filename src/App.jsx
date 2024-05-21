import './App.css';
import React, { useState } from 'react';
import Root from './pages/root/Root';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/sign-up/SignUp';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Profile from './pages/profile/Profile';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const appRouter = createBrowserRouter(createRoutesFromElements([
    <Route path="/" element={<Root isLoggedIn={isLoggedIn} />}>
      <Route index element={<Home />} />
      <Route path='/:profile' element={<Profile />} />
    </Route>,
    <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />,
    <Route path='sign-up' element={<SignUp isLoggedIn={isLoggedIn} />} /> 
  ]));
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  );
}
