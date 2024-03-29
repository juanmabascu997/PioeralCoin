import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../../img/icon.png'
import {Navbar, Button} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'

import './Nav.css'

const NavBars = ()=>{
  return <>
    <Navbar fixed="top" id='Nav'>
      <Container>
      <Navbar.Brand href="#main" id='brand'><img src={icon} id='icon'/> Pioeral</Navbar.Brand>
      
      <Nav className="me-auto ml-2">
        <Nav.Link href="#main">Home</Nav.Link>
        <Nav.Link href="#buy">Buy Coin</Nav.Link>
        <Nav.Link href="#about">About Coin</Nav.Link>
      </Nav>
      <Nav.Link href='#login'>Login</Nav.Link>
      <Button href='/wallet'>Sign up</Button>
      </Container>
    </Navbar>
    <br />
  </>
}

export default NavBars

// const Nav = styled.nav`

// `
