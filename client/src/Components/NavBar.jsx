import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, Typography, MenuItem, Menu } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

function Navbar({ isLogged, handleLogout }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state variable
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) setIsLoggedIn(true);  // Use setIsLoggedIn instead of isLogged
  }, []);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  };

  function handleClose() {
    setAnchorEl(null);
  };

  function logout() {
    handleLogout();
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#025464' }}>
      <Toolbar>
        <Typography variant="h6" component={Link} sx={{ flexGrow: 1 }}>
          <Link to={isLoggedIn ? "/my-account" : "/"} className="gamePlanLink">Game Plan</Link>
        </Typography>
        <Button color="inherit" component={Link} to="/faq" sx={{ mr: 1 }}>
          FAQ
        </Button>
        {isLoggedIn ? (
          <div>
            <Button
              color="inherit"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              My Account
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
            <MenuItem onClick={handleClose} component={Link} to="/my-dashboard">My Dashboard</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <Button color="inherit" component={Link} to="/login" sx={{ mr: 1 }}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;