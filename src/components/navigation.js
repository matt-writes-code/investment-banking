import React from 'react';
import { Navbar, Nav, Link } from "react-bootstrap";
import { Link as Goto } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import './navigation.css';

const Navigation = props => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="navigation">
                <Goto to="/"><Navbar.Brand>Investment Banking</Navbar.Brand></Goto>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Goto to="/financial-markets/">Financial Markets</Goto></Nav.Link>
                        <Nav.Link><Goto to="/corporate-banking/">Corporate Banking</Goto></Nav.Link>
                        <Nav.Link><Goto to="/regulations/">Regulations</Goto></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;