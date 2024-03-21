// import userContext from "./context";
// import {useContext, useState,useEffect} from 'react';
// import {Button,Form,Card} from 'react-bootstrap';
// import axios from 'axios';

// export default function Withdraw(){

    
//     const [withdraw,setWithdraw]=useState(0);
//     const[data,setData]=useState([])
//     var [total,setTotal]=useState();

//     useEffect(() => {
//         async function fetchdata() {
//             await axios.get('http://localhost:8080/data').then((item) => {
//              setData(item.data);
//              console.log(data);
//              let itemLength = item.data.length - 1;
//              setTotal(item.data[itemLength].amount);
//             })
//         }
//         fetchdata();
//     }, [total])

//     async function submitHandler(e){    
//         e.preventDefault();
       
//         if(isNaN(withdraw) || withdraw < 0){
//             alert("Please enter a valid amount....")
//         }
//         else if(withdraw > total){
//             alert("Insufficient account balance !!!")
//         }
//         else{
//             let dataId =data[data.length-1]._id;
            
//             await axios.put(`http://localhost:8080/update/${dataId}`,{amount:total-withdraw}).then( setTotal(total - withdraw)).then(alert(`amount ${withdraw} is deposited successfully !`));
//         }
//     }

//     function changeHandler(val,setter){
//         setter(val);
//        withdraw !== undefined ? document.querySelector(".create-btn").classList.remove("disabled") : document.querySelector(".create-btn").classList.add("disabled")  
//       }

// //  ctx.users[0].amount=total
//  return(<>
//  <div id='form-div'  style={{color:'red',textAlign:'center'}}>


   
    
//   <h1 id='with'>Withdraw</h1>
//     <Card style={{width:"30%",height:"300px",backgroundColor:"gray",padding:"60px",margin:"100px",textalign:"center", left:"390px",border:"solid 3px black"}}>
//         <Form className="form-inline" onSubmit={submitHandler}>  
//         <h3>Account Balance: {total}</h3> 
//         <Form.Group className="mb-3">
//             <Form.Control type="number" placeholder="Enter amount"  onChange={(e)=>changeHandler(Number(e.target.value),setWithdraw)}/>
//         </Form.Group>
//             <Button type='submit' className='create-btn' style={{backgroundColor:'lightgray' , color:'white', borderColor:'#9d75cf'}}>Withdraw</Button>
//     </Form>
//     </Card>
//     </div>
//     </>)
//     }






import { useState,useEffect} from 'react';
import {Button,Form,Card} from 'react-bootstrap';
import axios from 'axios';
// import Footer from "./footer";

export default function Withdraw(){

    
    const [withdraw,setWithdraw]=useState(0);
    const[data,setData]=useState([])
    var [total,setTotal]=useState();
    const[name,setName]=useState('');
    const[pass,setPass]=useState('');
    const [details, setDetails] = useState(false)
    let [id,setId]=useState()

    useEffect(() => {
        async function fetchdata() {
            await axios.get('https://server-qh9g.onrender.com/data').then((item) => {
             setData(item.data);
             console.log(data);
            
            })
        }
        fetchdata();
    }, [total])

    async function submitHandler(e){   
        console.log("Hi"); 
        e.preventDefault();
       
        if(isNaN(withdraw) || withdraw < 0){
            alert("Please enter a valid amount....")
        }
        else if(withdraw > total){
            alert("Insufficient account balance !!!")
        }
        else{
                
            await axios.put(`https://server-qh9g.onrender.com/update/${id}`,{amount:total-withdraw}).then( setTotal(total - withdraw)).then(alert(`amount ${withdraw} is withdrawn successfully !`));
        }
    }

    function changeHandler(val,setter){
        setter(val);
    //    withdraw !== undefined ? document.querySelector(".create-btn").classList.remove("disabled") : document.querySelector(".create-btn").classList.add("disabled")  
      }


      function userHandler(e){
        e.preventDefault()
       let currentUser = data.find((item)=>item.name === name && item.password === pass)
      
    if(currentUser){
        console.log(currentUser);
        setTotal(currentUser.amount);
        setId(currentUser._id)
        setDetails(true);
    }
    else{
        alert("Enter correct details")
    }
      
    
    }

//  ctx.users[0].amount=total
 return(<>
 {
    !details ?  <>
    <div id='form-div'>
        <>
            
        <Card style={{width:"30%",height:"300px",backgroundColor:"purple",padding:"60px",margin:"100px",textalign:"center", left:"390px",border:"solid 3px black"}}>
                <Form className="form-inline" onSubmit={userHandler}>
                    <h1>User Details</h1>
                    <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter userName" onChange={e=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Enter password" onChange={(e)=>setPass(e.target.value)}/>
        </Form.Group>
                   
                    <Button type='submit' className='btn' style={{ backgroundColor: '#9d75cf', color: 'white', borderColor: '#9d75cf' }} disabled={name ==='' || pass ===''}>Enter</Button>
                </Form>
            </Card> </>
    </div></>  : <>

    <div id='form-div'>
    <h3>Account Balance: {total}</h3> 
    <Card>
        <Form className="form-inline" onSubmit={submitHandler}>  
    <h1>Withdraw</h1>
        <Form.Group className="mb-3">
            <Form.Control type="number" placeholder="Enter amount"  onChange={(e)=>changeHandler(Number(e.target.value),setWithdraw)}/>
        </Form.Group>
            <Button type='submit' disabled={withdraw == undefined}>Withdraw</Button>
            {/* <button type='submit'>Withdraw</button> */}
    </Form>
    </Card>
    </div>
   
    </>
 }
  {/* <Footer  position="fixed"/> */}
    </>)
    }
