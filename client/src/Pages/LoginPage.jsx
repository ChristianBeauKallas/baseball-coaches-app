import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Update this line
import NavBar from '../Components/NavBar';
import './LoginPage.css';
import { Button, TextField, Link } from '@mui/material';

function LoginPage () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // Get the navigate function
    const navigate = useNavigate(); // <-- Update this line

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Clear previous error
        setError(null);

        fetch('http://localhost:5001/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Login failed');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Redirect user to the my-account page
            navigate('/my-account'); // <-- Update this line
        })
        .catch(error => {
            console.error('Error:', error);
            setError('Login failed. Please check your username and password.');
        });
    }

    return (
        <div>
            <NavBar />
            <h1 className='loginTitle'>Account Log In</h1>
            <form onSubmit={handleSubmit} className='loginForm'>
                <TextField
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <Button type="submit" variant="contained">Submit</Button>
            </form>
            {error && <p>{error}</p>}
            <div className='resetDiv'>
                <p>
                <Link href="/reset-password">Reset Password</Link>
                </p>
                <p>
                <Link href="/create-account">Create Account Here</Link>
                </p>
            </div>
            
        </div>
    )
}

export default LoginPage;
