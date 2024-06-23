import React from 'react'
import './App.css'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Home from './Home'
import About from './About'
import Users from './Users'

function App () {
  return (
    <div className='App'>
      <Router>
        <Navbar bg='primary' data-bs-theme='dark'>
          <Container>
            <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/users">Users</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
