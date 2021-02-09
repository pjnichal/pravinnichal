import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import  Logo  from '../../assets/brand.ico';
import "./mynavbarstyle.css"

export const MyNavbarcomp = () => {
    return (
        <>
        <Navbar fixed="top" collapseOnSelect expand="md"  variant="dark" bg='dark' sticky="top"   className="animate-navbar nav-theme justify-content-between" >
  <Navbar.Brand href="#home">
      <img className="logo" src={Logo} alt="Pravin Nichal" height='50'></img>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      {/*Paste Here */}
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </>
    );
}
{/*
<Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#project">Project</Nav.Link>
      <Nav.Link href="#education">Education</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    
    */}
