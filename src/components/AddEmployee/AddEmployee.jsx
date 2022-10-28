import React,{useState} from 'react';
import {ToastContainer , toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import './Addemployee.css';

import axios from 'axios';

const AddEmployee = () => {
    const navigate = useNavigate();
    const [firstname , setfirstname] = useState("");
    const [lastname , setlastname] = useState("");
    const [phone, setphone] = useState("");
    const [email,setemail] = useState("");

    const toastprops = {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
    }
    
    var randomindex = "";

    for(let i=0;i<5;i++){
        randomindex+=Math.floor(Math.random()*10);
    }
    
    
    const handleSubmit = async (e)=>{
        e.preventDefault();

        if(firstname==="" || lastname==="" || (phone==="" && phone.length!==10) || email===""){
            toast.error("Enter all details properly",toastprops)
        }else{
            console.log({firstname, lastname , phone , email , randomindex });
            const data = {firstname,lastname,randomindex,email,phone}
            await axios.post(' https://employees-mern.herokuapp.com/employee/add',data);
            navigate('/');
            toast.success("Added successfully",toastprops); 
        }     
 
    }


  return (
    <div className='container form-container'>
        <h4 className='heading'>To add new employees</h4>
        <form className='form' onSubmit={handleSubmit}>
           <div className='mb-2'>
              <label htmlFor="firstname" className='form-label'>First Name</label>
              <input type="text" className="form-control" name='firstname' onChange={(e)=>setfirstname(e.target.value)}  />
           </div>
           <div className='mb-2'>
              <label htmlFor="lastname" className='form-label'>Last Name</label>
              <input type="text" className="form-control" name='lastname' onChange={(e)=>setlastname(e.target.value)}  />
           </div>
           <div className='mb-2'>
              <label htmlFor="phone" className='form-label'>Phone Number</label>
              <input type="text" className="form-control" name='phone' onChange={(e)=>setphone(e.target.value)}  />
           </div>
           <div className='mb-3'>
              <label htmlFor="email" className='form-label'>Email Id</label>
              <input type="email" className="form-control" name='email' onChange={(e)=>setemail(e.target.value)} />
           </div>
           <button className='btn submit-btn' type="submit">Submit</button>
           {/* <ToastContainer/> */}
        </form>
    </div>
  )
}

export default AddEmployee