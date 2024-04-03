import { Button, FormControl, FormGroup, TextField, Box } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function SignInForm() {
    const history = useHistory();
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [showBox, setShowBox] = useState(false); // Define showBox state

    const handleLoginIdChange = (e) => {
        setLoginId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            const user = JSON.parse(storedUser);

            if (loginId === user.email && password === user.password) {
                // Set authentication flag in local storage
                localStorage.setItem('authenticated', 'true');

                // Redirect to dashboard
                history.push('/dashboard');
            } else {
                setShowBox(true); // Set showBox to true on invalid login
                alert('Invalid username or password');
            }
        } else {
            setShowBox(true); // Set showBox to true if user not found
            alert('User not found. Please sign up first.');
        }
    };

    return (
        <div className="signin-form">
            <div className="form" style={{ border: '5px solid #000080', borderRadius: '20px', padding: '20px', backgroundColor: 'whitesmoke' }}>
                <h1>Medical Management System</h1>
                <h2>Please Sign In Now</h2>
                <FormGroup>
                    <FormControl>
                        <TextField
                            style={{ margin: '10px 50px' }}
                            type="text"
                            required
                            id="outlined-required"
                            label="Login Id"
                            value={loginId}
                            onChange={handleLoginIdChange}
                        />
                    </FormControl>
                    <FormControl className="m">
                        <TextField
                            style={{ margin: '10px 50px' }}
                            type="password"
                            required
                            id="outlined-required"
                            label="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </FormControl>
                    <Button style={{ margin: '5px 100px' }} variant="contained" onClick={handleLogin}>
                        Login Now
                    </Button>
                    <Button
                        style={{ margin: '5px 100px' }}
                        variant="contained"
                        color="info"
                        component={Link}
                        to="/signup"
                    >
                        Sign Up
                    </Button>
                </FormGroup>

                {showBox && (
                    <Box
                        style={{
                            marginTop: '20px',
                            backgroundColor: '#fff',
                            padding: '10px',
                            border: '2px solid #825559',
                            borderRadius: '8px',
                        }}
                    >
                        Invalid login credentials. Please try again.
                    </Box>
                )}
            </div>
        </div>
    );
}

export default SignInForm;
