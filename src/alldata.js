import userContext from "./context";
import {useContext,useState,useEffect} from 'react';
import axios from 'axios'
import {Table,Card} from 'react-bootstrap';
import del from './images/lavender.png';
import './App.css'

export default function AllData(){
    // const ctx = useContext(userContext);

    const[data,setData]=useState([]);
    const[trigger,setTrigger]=useState(false);
    const url='https://server-qh9g.onrender.com/data';

useEffect(()=>{
  async function fetchdata() {
    await axios.get(url).then((item) => {
     setData(item.data);
     console.log(data);
     setTrigger(false)
    })
}
fetchdata();
},[trigger])

    async function handleDelete(id){
      console.log(id);
      await axios.delete(`https://server-qh9g.onrender.com/delete/${id}`).then(setTrigger(true));
    }
   
    return(<>
        

         <div className="table-parent">
        <h2 style={{color:'red',textAlign:'center'}}>All Data</h2><br></br>
        <Card style={{border:"none"}}>
        <Table  bordered hover responsive  className=" custom-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th> 
          <th>Email</th>
          <th>Password</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((item,index)=>{
             
         return  <tr key={index} >
          <td>{item._id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.amount}</td>
          <td><button onClick={()=>handleDelete(item._id)} style={{backgroundColor:"red",border:"none"}}><img src={del} style={{width:"30px",height:"30px"}}/></button></td>
        </tr>
            })
        }
             
      </tbody>
    </Table>
    </Card>
    </div>   
    </>)
    }