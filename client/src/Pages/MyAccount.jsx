import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './MyAccount.css';
import practicePlanHolder from '../Assets/Photos/practicePlanHolder.png';

function MyAccount() {
    const navigate = useNavigate();
    const location = useLocation();
    const [alignment, setAlignment] = useState('myAccount');

    useEffect(() => {
        const path = location.pathname;
        if (path === '/my-account') {
            setAlignment('myAccount');
        } else if (path === '/browse-game-plans') {
            setAlignment('browseGamePlans');
        } else if (path === '/create-new') {
            setAlignment('createResource');
        }
    }, [location]);

    function handleAlignment(event, newAlignment) {
        setAlignment(newAlignment);
        if (newAlignment === 'myAccount') {
            navigate('/my-account');
        } else if (newAlignment === 'browseGamePlans') {
            navigate('/browse-game-plans');
        } else if (newAlignment === 'createResource') {
            navigate('/create-new');
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
