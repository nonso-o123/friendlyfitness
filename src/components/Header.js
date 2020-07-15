import React, { useState } from 'react'
import {
    Navbar, NavbarBrand, Nav, NavbarToggler,
    Collapse, NavItem, NavLink, Button
} from 'reactstrap'
export default function Header() {
    const [isNavOpen, setNavOpen] = useState(false)

    return (
        <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={() => setNavOpen(!isNavOpen)} />

                    <NavbarBrand className="mr-auto" href="/">
                        <img src="/assets/ff_logo.png" height="100" alt="logo" />
                    </NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <Button outline>Sign up</Button>
                            </NavItem>
                            <NavItem>
                                <Button outline>Sign in</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>

                </div>
            </Navbar>
        </>
    )
}
