import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './MyAccount.css';
import practicePlanHolder from '../Assets/Photos/practicePlanHolder.png';

function MyAccount() {
    const navigate = useNavigate();
    const [alignment, setAlignment] = useState(
        useLocation().pathname === '/my-account' ? 'myAccount' : 'browseGamePlans'
    );

    function handleAlignment(event, newAlignment) {
        setAlignment(newAlignment);
        if (newAlignment === 'myAccount') {
            navigate('/my-account');
        } else {
            navigate('/browse-game-plans');
        }
    }

    return (
        <div>
            <div className='toggleContainer'>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                >
                    <ToggleButton value="myAccount">My Dashboard</ToggleButton>
                    <ToggleButton value="browseGamePlans">Browse</ToggleButton>
                    <ToggleButton value="createResource">Create Resource +</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className='practicePlanHeader'>
                <h1>Your Practice Plans</h1>
                <button className='seeAllButton'>See All</button>
            </div> 
            <div className='planContainer'>
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
            </div>   
            <div className='practicePlanHeader'>
                <h1>Your Hitting Charts</h1>
                <button className='seeAllButton'>See All</button>
            </div> 
            <div className='planContainer'>
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
            </div>
            <div className='practicePlanHeader'>
                <h1>Your Pitching Charts</h1>
                <button className='seeAllButton'>See All</button>
            </div> 
            <div className='planContainer'>
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
            </div>  
        </div>
    );
}

export default MyAccount;
