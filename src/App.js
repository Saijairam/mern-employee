import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './components/Home/Home';
import AddEmployee from './components/AddEmployee/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee/ViewEmployee';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addemployee' element={<AddEmployee/>}/>
      <Route path='/update-employee/:id' element={<UpdateEmployee/>}/>
      <Route path='/view-employee/:id' element={<ViewEmployee/>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
    
  );
}

export default App;
