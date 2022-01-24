import React from "react";
import "./Navbars.css";
import { Badge, Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons";
import Category from "../../Category/Category";
import useFirebase from "../../Hooks/useFirebase";
import AddToCart from "../../AddToCart/AddToCart";

const hardIcon = <FontAwesomeIcon icon={faHeart} />;
const barsIcon = <FontAwesomeIcon icon={faBars} />;

const Navbars = () => {
    const { user, logOut, admin } = useFirebase();
    console.log(user);

    return (
        <div>
            {/* top navbar */}
            <Navbar className="sticky-top" collapseOnSelect expand="lg" style={{ background: "rgb(255, 241, 235)" }}>
                <div className="container ">
                    <Navbar.Brand as={Link} className="fw-bold" to="/home">
                        Healthy-<span style={{ color: "red" }}>Foods</span>
                    </Navbar.Brand>
                    <Nav.Link className="account" as={Link} eventKey={2} to="/account">
                        <NavDropdown
                            style={{ marginLeft: "1rem", color: "green !important" }}
                            title="My Account"
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item style={{ color: "red" }}>{user.displayName}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/account"></NavDropdown.Item>
                            <NavDropdown.Item>
                                {user.email ? (
                                    <Button onClick={logOut} className="btn_banner">
                                        Log Out
                                    </Button>
                                ) : (
                                    <Link to="/login">
                                        <Button className="btn_banner" color="inherit">
                                            Login
                                        </Button>
                                    </Link>
                                )}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    style={{ borderRadius: "30px 0 0 30px", border: "1px solid #17d74a !important" }}
                                    className="search_input"
                                />
                                <Button className="search_btn" style={{ borderRadius: "0 30px 30px 0" }} variant="outline-success">
                                    Search
                                </Button>
                            </Form>
                        </Nav>
                        <Nav>
                            <Nav.Link className="nav_icon" as={Link} to="/checkout">
                                <small style={{ fontSize: "15px", fontWeight: "600" }}> Checkout</small>
                            </Nav.Link>
                            <Nav.Link className="nav_icon" href="#deets">
                                {hardIcon}
                                <Badge>7</Badge>
                            </Nav.Link>
                            <Nav.Link as={Link} className="nav_icon" to="">
                                <AddToCart></AddToCart>
                            </Nav.Link>
                            <Nav.Link as={Link} eventKey={2} to="carts">
                                <small style={{ fontSize: "15px", fontWeight: "600" }}> Total Price: $00.00</small>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

            <Navbar
                collapseOnSelect
                expand="lg"
                style={{ background: "white", padding: "20px 0 0", boxShadow: "0 10px 40px 0px rgb(0 0 0 / 15%)" }}
            >
                <Container>
                    <NavDropdown style={{ paddingBottom: "15px" }} title={(barsIcon, "All Shop")} id="navbars-dropdown">
                        <NavDropdown.Item id="navbars-item" as={Link} to="">
                            Vegetables
                        </NavDropdown.Item>
                        <NavDropdown.Item id="navbars-item" as={Link} to="">
                            Sea foods
                        </NavDropdown.Item>
                        <NavDropdown.Item id="navbars-item" as={Link} to="">
                            Dry foods
                        </NavDropdown.Item>
                        <NavDropdown.Item id="navbars-item" as={Link} to="">
                            Fast foods
                        </NavDropdown.Item>
                        <NavDropdown.Item id="navbars-item" as={Link} to="">
                            Fruits
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav style={{ paddingBottom: "15px" }} className="mx-auto ">
                            <Nav.Link className="main_nav-style" as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link className="main_nav-style" as={Link} to="/shop">
                                Shop
                            </Nav.Link>

                            <Nav.Link className="main_nav-style categoy_link" as={Link} to="/home">
                                Category
                                <div className="categoy_dropdown">
                                    <Category></Category>
                                </div>
                            </Nav.Link>
                            <Nav.Link className="main_nav-style" as={Link} to="/blog">
                                Blogs
                            </Nav.Link>

                            {admin ? (
                                <Nav.Link className="main_nav-style" as={Link} to="/dashboard">
                                    Dashboard
                                </Nav.Link>
                            ) : (
                                <Nav.Link className="main_nav-style" as={Link} to="/carts"></Nav.Link>
                            )}
                        </Nav>
                        <Nav className="nav-contact me-4 " style={{ marginBottom: "11px" }}>
                            {/* user */}
                            <div className="mx-4">
                                <p>Call us</p>
                                <span>+8801322334455</span>
                            </div>
                            <div>
                                <p>Email us</p>
                                <span>healthyfoods@gmail.com</span>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbars;
