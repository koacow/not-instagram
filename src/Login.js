import React, { useState } from 'react';
import './Login.css';

const testEmail = 'admin@gmail.com';
const testPassword = 'shibboleth';

const Login = () => {
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
            window.location.href = './App';
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} id='login-form'>
                <div className='login-field'>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className='login-field'>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit" onSubmit={handleSubmit}>Login</button>
                <button onClick={() => window.location.href = '/signup'}>Sign Up</button>
            </form>
        </div>
    );
};

export default Login;