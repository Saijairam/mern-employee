import React,{useState,useEffect} from 'react';
import {Link,useParams } from 'react-router-dom';

import axios from 'axios';
import './view.css';

const ViewEmployee = () => {
    const {id} = useParams();

    const [data,setdata] = useState({});
    const fetchData = async ()=>{
        await axios.get(` https://employees-mern.herokuapp.com/employee/view/${id}`).then((res)=>setdata(res.data));
    }
    useEffect(()=>{
       fetchData();
    },[])
  return (
    <div className='container view-container'>
      <div className='title'>
        <h4 className='text-center'>Employee Details Page</h4>
        <Link className='btn back-btn' to='/'>Back</Link>
      </div>
      
      <div className='details text-center'>
         <h5>First Name : <span className='sub-details'>{data.firstname}</span></h5>
         <h5>Last Name : <span className='sub-details'>{data.lastname}</span></h5>
         <h5>Token Id : <span className='sub-details'>{data.randomindex}</span></h5>
         <h5>Email : <span className='sub-details'>{data.email}</span></h5>
         <h5>Phone : <span className='sub-details'>{data.phone}</span></h5>
      </div>
    </div>
  )
}

export default ViewEmployee