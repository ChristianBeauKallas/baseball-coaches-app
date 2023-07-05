import { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import './CreateAccount.css';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    teamName: '',
    role: '',
    email: '',
    username: '',
    password: '',
    phone: '',
  });

  const [isCreated, setIsCreated] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false); // New State for Snackbar
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requiredFields = ['firstName', 'lastName', 'teamName', 'role', 'email', 'username', 'password']; 
    const hasAllFields = requiredFields.every((field) => formData[field]);

    if (!hasAllFields) {
      // Handle missing fields error
      return;
    }

    // Set a default phone number if it's not provided
    const phoneNumber = formData.phone || '000-000-0000';
    const formDataWithDefaultPhone = {
      ...formData,
      phone: phoneNumber,
    };

    const response = await fetch('http://localhost:5001/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataWithDefaultPhone),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
      setIsCreated(true);
      setOpenSnackbar(true); // Open the Snackbar
      setTimeout(() => {
        navigate('/login');
      }, 4000);
    } else {
      setIsCreated(false);
    }
  };

  return (
    <div>

      <div className="createAccountTitle">
        <h1>Create Account</h1>
      </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <TextField name="firstName" label="First Name" variant="outlined" value={formData.firstName} onChange={handleChange} fullWidth />
        <TextField name="lastName" label="Last Name" variant="outlined" value={formData.lastName} onChange={handleChange} fullWidth />
        <TextField name="teamName" label="Team Name" variant="outlined" value={formData.teamName} onChange={handleChange} fullWidth />
        <FormControl fullWidth>
          <InputLabel id="roleLabel">Role</InputLabel>
          <Select
            name="role"
            labelId="role-label"
            value={formData.role}
            onChange={handleChange}
            variant="outlined"
            className={`customInput ${formData.role ? 'filled' : ''}`} 
          >
            <MenuItem value="Head Coach">Head Coach</MenuItem>
            <MenuItem value="Assistant Coach">Assistant Coach</MenuItem>
            <MenuItem value="Athletic Director">Athletic Director</MenuItem>
            <MenuItem value="Player">Player</MenuItem>
            <MenuItem value="Parent">Parent</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField name="email" label="Email" variant="outlined" value={formData.email} onChange={handleChange} fullWidth />  
        <TextField name="username" label="User Name" variant="outlined" value={formData.username} onChange={handleChange} fullWidth />
        <TextField name="password" label="Password" variant="outlined" value={formData.password} onChange={handleChange} fullWidth />
        <p className="passwordCriteria">
          *Must be at least 8 characters long & include 1 uppercase, 1 lower case, 1 number and 1 special character
        </p>
        <TextField name="phone" label="Phone" variant="outlined" value={formData.phone} onChange={handleChange} fullWidth />
        <Button type="submit" variant="contained" color="primary" className='submitButton'>Create Account</Button>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical:'center', horizontal: 'center'}}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Account Successfully Created. We're navigating you to login!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CreateAccount;
