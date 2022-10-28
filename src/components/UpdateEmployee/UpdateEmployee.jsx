import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UpdateEmployee = () => {
   const {id} = useParams();
   const [user,setuser] = useState({});
   const navigate = useNavigate();

   useEffect(()=>{
         const fetchData = async ()=>{
         await axios.get(` https://employees-mern.herokuapp.com/employee/view/${id}`).then((res)=>setuser(res.data));
      
         }
         fetchData();
   },[]);
   // console.log(user);
   // console.log(user.firstname);
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

   const [new_firstname, setfirstname] = useState(user.firstname);
   const [new_lastname, setlastname] = useState(user.lastname);
   const [new_email, setemail] = useState(user.email);
   const [new_phone,setphone] = useState(user.phone);

   const handleSubmit = async (e)=>{
      // if(new_firstname === "" || lastname==="" || email==="" || phone===""){
      //    toast.error('Shoud not give empty fields',toastprops);
      //    navigate('/')
      // }
      e.preventDefault();
      const new_data = {new_firstname ,new_lastname ,new_email,new_phone}
      await axios.put(` https://employees-mern.herokuapp.com/employee/update/${id}`,new_data);
      toast.success('Updated Successfully',toastprops);
      navigate('/');
      // console.log({firstname,lastname,email,phone});
   }

   

  return (
   <div className='container form-container'>
      <h4 className='heading'>To update employees information</h4>
      <form className='form' onSubmit={handleSubmit}>
         <div className='mb-2'>
            <label htmlFor="firstname" className='form-label'>First Name</label>
            <input type="text" className="form-control" name='firstname' defaultValue={user.firstname}  onChange={(e)=>setfirstname(e.target.value)}  />
         </div>
         <div className='mb-2'>
            <label htmlFor="lastname" className='form-label'>Last Name</label>
            <input type="text" className="form-control" name='lastname'  defaultValue={user.lastname} onChange={(e)=>setlastname(e.target.value)}  />
         </div>
         <div className='mb-2'>
            <label htmlFor="phone" className='form-label'>Phone Number</label>
            <input type="text" className="form-control" name='phone' defaultValue={user.phone} onChange={(e)=>setphone(e.target.value)}  />
         </div>
         <div className='mb-3'>
            <label htmlFor="email" className='form-label'>Email Id</label>
            <input type="email" className="form-control" name='email' defaultValue={user.email} onChange={(e)=>setemail(e.target.value)} />
         </div>
         <button className='btn submit-btn' type="submit">Submit</button>
         {/* <ToastContainer/> */}
      </form>
   </div>
  )
}

export default UpdateEmployee