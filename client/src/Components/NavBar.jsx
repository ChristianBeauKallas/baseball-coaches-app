import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#27374D' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/">Game Plan</Link>
                </Typography>
                <Button color="inherit" component={Link} to="/faq" sx={{ mr: 1 }}>
                AQ
                </Button>
                <Button color="inherit">My Account</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

