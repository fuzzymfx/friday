import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Avatar from '@mui/material/Avatar';
import a1 from '../assets/img/a1.jpeg'

var dark = false;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  dark = true;
}

export default function Header() {

  const [isDark, setIsDark] = React.useState(dark);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    event.matches ? setIsDark(true) : setIsDark(false);
  });


  if (isDark) {
    return (<>
      <Navbar className='navbar navbar-expand-lg navbar-dark py-4 px-4 cdin' expand="lg">
        <Container >
          <Nav >
            {/* <Avatar className="mx-2 d-none d-md-block" alt="" src={a1} /> */}
            <Navbar.Brand href="/">SQB</Navbar.Brand></Nav>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/tech">Tech</Nav.Link>
              <Nav.Link href="/team">Team</Nav.Link>
              <Nav.Link href="/team">Insights</Nav.Link>
              <Nav.Link href="/team">Career</Nav.Link>
            </Nav>
            <Nav>
              {/* <Nav.Link href="https://www.github.com/">Github</Nav.Link> */}
              <Nav.Link href="https://www.github.com/">Medium</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/">Linkedin</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>)
  }
  else {
    return (<>
      <Navbar className='navbar navbar-expand-lg py-4 px-4 cdin' expand="lg">
        <Container >
          <Nav >
            {/* <Avatar className="mx-2 d-none d-md-block" alt="" src={a1} /> */}
            <Navbar.Brand href="#">SQB</Navbar.Brand>
          </Nav>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/tech">Tech</Nav.Link>
              <Nav.Link href="/team">Team</Nav.Link>
              <Nav.Link href="/team">Insights</Nav.Link>
              <Nav.Link href="/team">Career</Nav.Link>
            </Nav>
            <Nav>
              {/* <Nav.Link href="https://www.github.com/">Github</Nav.Link> */}
              <Nav.Link href="https://www.github.com/">Medium</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/">Linkedin</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>)
  }
}
