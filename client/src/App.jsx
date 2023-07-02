import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={LandingPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
