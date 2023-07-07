// App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import CreateAccount from './Pages/CreateAccount';
import LoginPage from './Pages/LoginPage';
import MyAccount from './Pages/MyAccount';
import FAQ from './Pages/FAQ';
import NavBar from './Components/NavBar'; 
import BrowseGamePlans from './Pages/BrowseGamePlans';
import CreateNew from './Pages/CreatePlan'

function App() {
  const [isLogged, setIsLogged] = useState(false); 

  function handleLogin() {
    localStorage.setItem('user', 'true'); 
    setIsLogged(true);
  }
  
  function handleLogout() { 
    localStorage.removeItem('user'); 
    setIsLogged(false);
  }

  return (
    <BrowserRouter>
      <NavBar isLogged={isLogged} handleLogout={handleLogout} key={isLogged} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/browse-game-plans" element={<BrowseGamePlans />} />
        <Route path="/create-new" element={<CreateNew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
