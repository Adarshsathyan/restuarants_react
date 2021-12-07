import React from 'react'
import {Navbar,Container,Nav,Form,FormControl,Button} from 'react-bootstrap'
function Header() {
    return (
        <div>
        <Navbar bg="light" expand="lg" fixed="top" >
  <Container >
    <Navbar.Brand href="#" className="fw-bold fs-4">Restuarant</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" >
      
      <Nav
        className="mx-auto my-2 my-lg-0 justify-content-center"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Foods</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header
