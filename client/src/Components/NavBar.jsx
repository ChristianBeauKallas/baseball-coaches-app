import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#025464' }}>
            <Toolbar>
                <Typography variant="h6" component={Link} sx={{ flexGrow: 1 }}>
                    <Link to="/" className="gamePlanLink">Game Plan</Link>
                </Typography>
                <Button color="inherit" component={Link} to="/faq" sx={{ mr: 1 }}>
                FAQ
                </Button>
                <Button color="inherit" component={Link} to="/my-account" sx={{ mr: 1 }}>Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

