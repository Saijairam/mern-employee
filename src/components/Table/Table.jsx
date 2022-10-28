import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Table = () => {

  const [data,setdata] = useState([]);

  const fetchData = async ()=>{
    await axios.get(' https://employees-mern.herokuapp.com/employee/view').then((res)=> setdata(res.data)).catch((err)=>console.log(err));
  }
  useEffect(()=>{
       fetchData();
  },[])

  const handleDelete = async (id)=>{
    await axios.delete(` https://employees-mern.herokuapp.com/employee/delete/${id}`);
    fetchData();
  }

  return (
    <div>
        <table className="table table-bordered table-hover table-container">
            <thead>
                <tr>
                <th scope="col">Employee First Name</th>
                <th scope="col">Employee Last Name</th>
                <th scope="col">Employee Email Id</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
              {
                data?.map((item)=>(
                <tr key={item._id}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td className='d-flex justify-content-evenly'>
                    <Link to={`/update-employee/${item._id}`} className='btn btn-info'>Update</Link>
                    {/* <Link to={`/delete-employee/${item._id}`} className='btn btn-danger'>Delete</Link> */}
                    <button className='btn btn-danger' onClick={()=>handleDelete(item._id)}>Delete</button>
                    <Link to={`/view-employee/${item._id}`} className='btn btn-success'>View</Link>
                  </td>
                </tr>
                ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table