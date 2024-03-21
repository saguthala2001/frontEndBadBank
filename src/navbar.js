import Nav from 'react-bootstrap/Nav';
import { Button,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar() {
  return (<>
    <Nav variant="pills" defaultActiveKey="/home" className='clo'>
   <Container className='container'>
    <div>
<h4 style={{color:"white"}}>Bad Bank</h4>
    </div>
    <div style={{display:"flex"}}>
    <Nav.Item>
        <Nav.Link href="#/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/create">Create</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/deposit">Deposit</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="#/withdraw">Withdraw</Nav.Link>
      </Nav.Item>  
      <Nav.Item>
      <Nav.Link href="#/alldata">Alldata</Nav.Link>
      </Nav.Item> 
      </div>
      </Container>
    </Nav>

    </>
  );
}
