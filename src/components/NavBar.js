import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { signInWithGoogle } from '../firebase-config';



function NavBar() {
  return (
    <div className='fixed'>
        <Nav style={{background :"rgba(0,0,0,0.9)", height:"50px"}} className="justify-content-center fixed" activeKey="/">
        <Nav.Item>
          <Nav.Link style={{color:"white"}} href="/" className='active'> Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href= '/about' style={{color:"white"}} eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={signInWithGoogle} style={{color:"white"}} eventKey="link-2">join us </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default NavBar