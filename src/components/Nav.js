import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

const ScrollspyNavigation = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navExpanded) {
        setNavExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navExpanded]);

  const handleNavToggle = () => {
    setNavExpanded(!navExpanded);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={navExpanded}>
      <Navbar.Brand href="#home">Scrollspy Navigation</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" onClick={handleNavToggle} />
      <Navbar.Collapse id="navbar-nav">
        <Scrollspy
          items={['section1', 'section2', 'section3']}
          currentClassName="active"
          offset={-50}
        >
          <Nav className="ml-auto">
            <Nav.Link href="#section1">Section 1</Nav.Link>
            <Nav.Link href="#section2">Section 2</Nav.Link>
            <Nav.Link href="#section3">Section 3</Nav.Link>
          </Nav>
        </Scrollspy>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ScrollspyNavigation;
