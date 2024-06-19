import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Tips from './Pages/Tips';
import Activities from './Pages/Activities';
import Community from './Pages/Community';
import Register from './Pages/Register';
import Activities0To2 from './Pages/Activities0to2';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/tips' element={<Tips />} />
            <Route path='/activities' element={<Activities />} />
            <Route path='/community' element={<Community />} />
            <Route path='/register' element={<Register />} />
            <Route path='/activities/0-2' element={<Activities0To2 />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
