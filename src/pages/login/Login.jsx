import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Login.css';
import SignUp from '../sign-up/SignUp';

const testEmail = 'admin@gmail.com';
const testPassword = 'shibboleth';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = ({ target }) => {
        setEmail(target.value);
    };

    const handlePasswordChange = ({ target }) => {
        setPassword(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === testEmail && password === testPassword) {
            setIsLoggedIn(true);
        } else {
            alert('Invalid email or password');
        }
    };

    if (isLoggedIn){
        return <Navigate to='/' />;
    }

    return (
        <div className='login'>
            <h1>[Name Pending]</h1>
            <form onSubmit={handleSubmit} id='login-form'>
                <div className='login-field'>
                    <label>Email:</label>
                    <input type="email" value={email} placeholder='example@provider.com' onChange={handleEmailChange} />
                </div>
                <div className='login-field'>
                    <label>Password:</label>
                    <input type="password" value={password} placeholder='Password' onChange={handlePasswordChange} />
                </div>
                <button type="submit" onSubmit={handleSubmit}>Login</button>
                <section id='sign-up-redirect'>
                    <p>Don't have an account with us? <Link to={'/sign-up'}>Sign Up</Link></p>
                </section>
            </form>
        </div>
    );
};

export default Login;