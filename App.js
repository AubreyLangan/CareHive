import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Tips from './Pages/Tips';
import Activities from './Pages/Activities';
import Community from './Pages/Community';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tips' element={<Tips />} />
            <Route path='/activities' element={<Activities />} />
            <Route path='/community' element={<Community />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
