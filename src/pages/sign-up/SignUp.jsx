import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = ({ isLoggedIn, setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstNameChange = ({ target }) => {
        setFirstName(target.value);
    };

    const handleLastNameChange = ({ target }) => {
        setLastName(target.value);
    };

    const handleEmailChange = ({ target }) => {
        setEmail(target.value);
    };

    const handlePasswordChange = ({ target }) => {
        setPassword(target.value);
    };

    const handlePassword2Change = ({ target }) => {
        setPassword2(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === password2) {
            setIsLoggedIn(true);
        } else {
            alert('Passwords do not match');
        }
    };

    if (isLoggedIn){
        return <Navigate to='/' />;
    }

    return (
        <div className='sign-up'>
            <h1>[Name Pending]</h1>
            <form onSubmit={handleSubmit} id='sign-up-form'>
                <div className='sign-up-field'>
                    <label>First Name</label>
                    <input type="text" value={firstName} placeholder='First Name' onChange={handleFirstNameChange} />
                </div>
                <div className='sign-up-field'>
                    <label>Last Name</label>
                    <input type="text" value={lastName} placeholder='Last Name' onChange={handleLastNameChange} />
                </div>
                <div className='sign-up-field'>
                    <label>Email:</label>
                    <input type="email" value={email} placeholder='example@provider.com' onChange={handleEmailChange} />
                </div>
                <div className='sign-up-field'>
                    <label>Password:</label>
                    <input type="password" value={password} placeholder='Password' onChange={handlePasswordChange} />
                </div>
                <div className='sign-up-field'>
                    <label>Re-enter Password:</label>
                    <input type="password" value={password} placeholder='Confirm Password' onChange={handlePassword2Change} />
                </div>
                <button type="submit" onSubmit={handleSubmit}>Create account</button>
                <section id='login-redirect'>
                    <p>Already have an account with us? <Link to='/login'>Login</Link></p>
                </section>
            </form>
        </div>
    );
};

export default SignUp;