import React from 'react';
import { Navbar, Nav, Link } from "react-bootstrap";
import { Link as Goto } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import './navigation.css';

const Navigation = props => {
    return (
        <div>
            <Navbar expand="lg" className="navigation">
                <Goto to="/"><Navbar.Brand className="investment-banking"><div className="investment-banking">Investment Banking</div></Navbar.Brand></Goto>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Goto to="/financial-markets/"><div className="links">Financial Markets</div></Goto></Nav.Link>
                        <Nav.Link><Goto to="/corporate-banking/"><div className="links">Corporate Banking</div></Goto></Nav.Link>
                        <Nav.Link><Goto to="/regulations/"><div className="links">Regulations</div></Goto></Nav.Link>
                        <Nav.Link><Goto to="/market-abuse/"><div className="links">Market Abuse</div></Goto></Nav.Link>
                        <Nav.Link><Goto to="/organisations/"><div className="links">Organisations</div></Goto></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;
