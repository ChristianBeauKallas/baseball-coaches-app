import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './BrowseGamePlans.css';
import practicePlanHolder from '../Assets/Photos/practicePlanHolder.png';

function BrowseGamePlans() {
    const navigate = useNavigate();
    const location = useLocation();
    const [alignment, setAlignment] = useState('browseGamePlans');

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
            <div className='practicePlanHeaders'>
                <h1>Most Downloaded</h1>
                <button className='seeAllButton'>See All</button>
            </div> 
            <div>
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
            </div>   
            <div className='practicePlanHeaders'>
                <h1>Practice Plans</h1>
                <button className='seeAllButton'>See All</button>
            </div> 
            <div>
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
            </div>
            <div className='practicePlanHeaders'>
                <h1>Pitching Charts</h1>
                <button className='seeAllButton'>See All</button>
            </div> 
            <div>
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
                <img src={practicePlanHolder} alt="PlaceHolder" />
            </div> 
        </div>
    );
}

export default BrowseGamePlans;
