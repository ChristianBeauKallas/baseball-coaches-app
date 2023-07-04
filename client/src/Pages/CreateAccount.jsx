import { useState } from 'react';
import NavBar from '../Components/NavBar';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import './CreateAccount.css';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    teamName: '',
    role: '',
    username: '',
    password: '',
    phone: '',
  });

  const [isCreated, setIsCreated] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requiredFields = ['firstName', 'lastName', 'teamName', 'role', 'username', 'password'];
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
      // If you want a delay before redirecting, you can use setTimeout
      setTimeout(() => {
        navigate('/my-account');
      }, 2000); // 2 seconds delay
    } else {
      setIsCreated(false);
    }
  };

  return (
    <div>
      <NavBar />
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
    className={`customInput ${formData.role ? 'filled' : ''}`} // update here
  >
    <MenuItem value="Head Coach">Head Coach</MenuItem>
    <MenuItem value="Assistant Coach">Assistant Coach</MenuItem>
    <MenuItem value="Athletic Director">Athletic Director</MenuItem>
    <MenuItem value="Player">Player</MenuItem>
    <MenuItem value="Parent">Parent</MenuItem>
    <MenuItem value="Other">Other</MenuItem>
  </Select>
</FormControl>

        <TextField name="username" label="User Name" variant="outlined" value={formData.username} onChange={handleChange} fullWidth />
        <TextField name="password" label="Password" variant="outlined" value={formData.password} onChange={handleChange} fullWidth />
        <p className="passwordCriteria">
        *Must be at least 8 characters long & include 1 uppercase, 1 lower case, 1 number and 1 special character
        </p>
        <TextField name="phone" label="Phone" variant="outlined" value={formData.phone} onChange={handleChange} fullWidth />
        <Button type="submit" variant="contained" color="primary" className='submitButton'>Create Account</Button>
      </form>
      {isCreated && <p>Account Created Successfully!</p>}
    </div>
  );
}

export default CreateAccount;
