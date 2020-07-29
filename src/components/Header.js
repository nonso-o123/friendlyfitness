import React, { useState } from 'react'
import {
    Navbar, NavbarBrand, Nav, NavbarToggler,
    Collapse, NavItem, NavLink, Button
} from 'reactstrap'
import { useAuth0 } from '@auth0/auth0-react'


export default function Header() {
    const [isNavOpen, setNavOpen] = useState(false)
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

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
                            <NavItem className="auth-profile">
                                {isAuthenticated ? (
                                    <>
                                        <Button outline
                                            onClick={() => logout()}
                                        >Sign out</Button>
                                        <div className="p-0  profile">
                                            <img src={user.picture} alt={user.name} width="30rem" className="rounded-circle thumbnail" />
                                            <h6 style={{ fontSize: "0.8rem" }}>{user.nickname}</h6>
                                        </div>

                                    </>
                                ) :
                                    <Button outline
                                        onClick={() => loginWithRedirect()}
                                    >Sign in</Button>}
                            </NavItem>
                        </Nav>
                    </Collapse>

                </div>
            </Navbar>
        </>
    )
}
