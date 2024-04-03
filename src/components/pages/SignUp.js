import { Button, FormControl, FormGroup, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function SignupForm() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSignup = () => {
        if (!name || !email || !password || password !== confirmPassword) {
            alert('Invalid or incomplete form data');
            return;
        }

        // Save user information in local storage
        const user = {
            name,
            email,
            password,
        };
        localStorage.setItem('user', JSON.stringify(user));

        // Navigate to sign-in page
        history.push('/');
    };

    return (
        <div className="signup-form" style={{ border: '5px solid #000080', borderRadius: '30px', padding: '20px', backgroundColor:'floralwhite'}}>
            <div className="form">
                <h1>Medical Management System</h1>
                <h2>Create an Account</h2>
                <FormGroup>
                    <FormControl>
                        <TextField
                            style={{ margin: '10px 0px' }}
                            type="text"
                            required
                            id="outlined-required"
                            label="Full Name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            style={{ margin: '10px 0px' }}
                            type="text"
                            required
                            id="outlined-required"
                            label="Email Address"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </FormControl>
                    <FormControl className="m">
                        <TextField
                            style={{ margin: '10px 0px' }}
                            type="password"
                            required
                            id="outlined-required"
                            label="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </FormControl>
                    <FormControl className="m">
                        <TextField
                            style={{ margin: '10px 0px' }}
                            type="password"
                            required
                            id="outlined-required"
                            label="Confirm Password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </FormControl>
                    <Button style={{ margin: '10px 0px' }} variant="contained" onClick={handleSignup}>
                        Sign Up
                    </Button>
                </FormGroup>
                <p>
                    Already have an account? <Link to="/signin">Sign In</Link>
                </p>
            </div>
        </div>
    );
}

export default SignupForm;
