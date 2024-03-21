// import userContext from "./context";
// import { useContext, useEffect, useState } from 'react';
// import { Button, Form, Card } from 'react-bootstrap';
// import axios from 'axios';
// // import Form from 'react-bootstrap/Form';
// import './App.css'

// export default function Deposit() {

//     const [deposit, setDeposit] = useState();
//     const [data, setData] = useState([])
//     var [total, setTotal] = useState();

//     useEffect(() => {
//         async function fetchdata() {
//             await axios.get('http://localhost:8080/data').then((item) => {
//                 setData(item.data);
//                 console.log(data);
//                 let itemLength = item.data.length - 1;
//                 setTotal(item.data[itemLength].amount);
//             })
//         }
//         fetchdata();
//     }, [total])

//     function changeHandler(val, setter) {
//         setter(val);
//         deposit !== undefined ? document.querySelector(".create-btn").classList.remove("disabled") : document.querySelector(".create-btn").classList.add("disabled")
//     }

//     async function submitHandler(e) {
//         e.preventDefault();

//         if (isNaN(deposit) || deposit < 0) {
//             alert("Please enter a valid amount....")
//         }
//         else {
//             let dataId = data[data.length - 1]._id;
//             await axios.put(`http://localhost:8080/update/${dataId}`, { amount: total + deposit }).then(setTotal(total + deposit)).then(alert(`amount ${deposit} is deposited successfully !`));

//         }
//     }

//     return (<>

//         <div id='form-div'>

//             <h1 id='Dep' style={{ color: 'red', textAlign: 'center' }}>Deposit</h1>



//             <>

//                 <Card style={{ width: "30%", height: "300px", backgroundColor: "gray", padding: "70px", margin: "100px", textalign: "center", left: "390px", border: "solid 5px black" }}>
//                     <Form className="form-inline" onSubmit={submitHandler}>
//                         <h3>Account Balance: {total} </h3>
                     
//                         <Form.Group className="mb-3">
//                             <Form.Control type="number" placeholder="Enter amount" onChange={(e) => changeHandler(Number(e.target.value), setDeposit)} />
//                         </Form.Group>
//                         <Button type='submit' className='create-btn disabled'>Deposit</Button>
//                     </Form>
//                 </Card> </>
//         </div>
//     </>)
// }



import userContext from "./context";
import { useContext, useEffect, useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import axios from 'axios';
// import Form from 'react-bootstrap/Form';
import './App.css'

// import Footer from "./footer";

export default function Deposit() {

    const [deposit, setDeposit] = useState();
    const [data, setData] = useState([])
    var [total, setTotal] = useState();
    const[name,setName]=useState('');
    const[pass,setPass]=useState('');
    const [details, setDetails] = useState(false);
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

    function changeHandler(val, setter) {
        setter(val);
        deposit !== undefined ? document.querySelector(".create-btn").classList.remove("disabled") : document.querySelector(".create-btn").classList.add("disabled")
    }

    async function submitHandler(e) {
        e.preventDefault();
// console.log(name);
        if (isNaN(deposit) || deposit < 0) {
            alert("Please enter a valid amount....")
        }
        else {
          
            await axios.put(`https://server-qh9g.onrender.com/update/${id}`, { amount: total + deposit }).then(setTotal(total + deposit)).then(alert(`amount ${deposit} is deposited successfully !`));

        }
    }

function userHandler(e){
    e.preventDefault()
   let currentUser = data.find((item)=>item.name === name && item.password === pass)
  console.log("currentUser",currentUser);
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


    return (<>

    {
        !details ?  <>
        <div id='form-div'>
            <>
                
            <Card style={{width:"30%",height:"300px",backgroundColor:"purple",padding:"70px",margin:"100px",textalign:"center", left:"390px",border:"solid 5px black"}}>
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
        </div>
        </> : <>
        <div id='form-div'>
            <>
                <h3>Account Balance: {total} </h3>
                <Card>
                    <Form className="form-inline" onSubmit={submitHandler}>
                        <h1>Deposit</h1>
                      
                        <Form.Group className="mb-3">
                            <Form.Control type="number" placeholder="Enter amount" onChange={(e) => changeHandler(Number(e.target.value), setDeposit)} />
                        </Form.Group>
                        <Button type='submit' className='create-btn disabled' style={{ backgroundColor: '#9d75cf', color: 'white', borderColor: '#9d75cf' }}>Deposit</Button>
                    </Form>
                </Card> </>
        </div>
        {/* <Footer  position="fixed"/> */}
        </>
    }
      
    </>)
}