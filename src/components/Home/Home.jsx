import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import Table from '../Table/Table';

const Home = () => {
  return (
    <div>
        <div className='navbar-container'>
           <h1 className='navbar-brand ms-3'>Employee Management App</h1>
        </div>
        <div className='add-container'>
           <Link className='btn btn-primary add-btn' to='/addemployee'>Add Employee</Link>
        </div>
        <div className='table-container container'>
           <Table/>
        </div>
    </div>
  )
}

export default Home