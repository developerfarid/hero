import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Reviewly</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className={(props) => {
                            return `${props.isActive ? 'isActive mynav' : 'mynav'}`;
                        }} to="/">Home</NavLink>
                         <NavLink className={(props) => {
                            return `${props.isActive ? 'isActive mynav' : 'mynav'}`;
                        }} to="/review">Review</NavLink>
                        <NavLink className={(props) => {
                            return `${props.isActive ? 'isActive mynav' : 'mynav'}`;
                        }} to="/about">About</NavLink>
                        <NavLink className={(props) => {
                            return `${props.isActive ? 'isActive mynav' : 'mynav'}`;
                        }} to="/dashoard">Dashoard</NavLink>
                       
                        <NavLink className={(props) => {
                            return `${props.isActive ? 'isActive mynav' : 'mynav'}`;
                        }} to="/blog">Blog</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;