import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './BrowseGamePlans.css';
import PlaceHolder from '../Assets/Photos/ImagePlaceholder.png';

function BrowseGamePlans() {
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
            <div className='practicePlanHeaders'>
                <h1>Most Downloaded</h1>
                <button className='seeAllButton'>See All</button>
            </div> 
            <div>
                <img src={PlaceHolder} alt="PlaceHolder" />
                <img src={PlaceHolder} alt="PlaceHolder" />
                <img src={PlaceHolder} alt="PlaceHolder" />
                <img src={PlaceHolder} alt="PlaceHolder" />
            </div>   
            <div className='practicePlanHeaders'>
                <h1>Practice Plans</h1>
                <button className='seeAllButton'>See All</button>
            </div> 
            <div>
                <img src={PlaceHolder} alt="PlaceHolder" />
                <img src={PlaceHolder} alt="PlaceHolder" />
                <img src={PlaceHolder} alt="PlaceHolder" />
                <img src={PlaceHolder} alt="PlaceHolder" />
            </div>
            <div className='practicePlanHeaders'>
                <h1>Pitching Charts</h1>
                <button className='seeAllButton'>See All</button>
            </div> 
            <div>
                <img src={PlaceHolder} alt="PlaceHolder" />
                <img src={PlaceHolder} alt="PlaceHolder" />
                <img src={PlaceHolder} alt="PlaceHolder" />
                <img src={PlaceHolder} alt="PlaceHolder" />
            </div> 
        </div>
    );
}

export default BrowseGamePlans;
