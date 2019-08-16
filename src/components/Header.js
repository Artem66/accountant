import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Clock from './Clock/';

class Header extends Component {
  render () {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            {'2GR'}
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="/about/">О нас</Nav.Link>
              <Nav.Link href="#pricing">Цены</Nav.Link>
              <NavDropdown title="Нормативы" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Clock />
              <Nav.Link href="#deets">Войти</Nav.Link>
              <Nav.Link eventKey={ 2 } href="#memes">
                Регистрация
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>    
        </>  
    );
  }
}

export default Header;