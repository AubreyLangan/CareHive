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
import Activities3to5 from './Pages/Activities3to5';
import Activities6To8 from './Pages/Activities6to8';
import Activities9to12 from './Pages/Activities9to12';
import Activities13Plus from './Pages/Activities13Plus';
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
            <Route path='/activities/3-5' element={<Activities3to5 />} />
            <Route path='/activities/6-8' element={<Activities6To8 />} />
            <Route path='activities/9-12' element={<Activities9to12 />} />
            <Route path='activities/13plus' element={<Activities13Plus />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
