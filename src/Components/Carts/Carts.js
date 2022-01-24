import React, { useEffect, useState } from "react";
import { Button, Col, Container, Nav, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import useAuth from "../Hooks/useAuth";
import "./Carts.css";

const Carts = () => {
    const { user } = useAuth();
    const [cartProducts, setCartProducts] = useState([]);

    //fetch cartProducts API
    useEffect(() => {
        fetch("http://localhost:5000/usersProducts")
            .then((res) => res.json())
            .then((data) => setCartProducts(data));
    }, [cartProducts]);

    const UsersProduct = cartProducts.filter((product) => product.email === user.email);
    return (
        <div className="cart_container">
            <Container>
                <div className="section_title">
                    <h1 className="my-5">
                        <span style={{ color: "red", borderBottom: "2px solid red" }}>Cart </span>
                        <span style={{ color: "red" }}>...</span>
                    </h1>
                </div>
                <Row>
                    <Col xs md={8}>
                        <div className="cart_info">
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {UsersProduct.map((product) => (
                                        <Cart key={product._id} product={product}></Cart>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                    <Col xs md={4}>
                        <div className="order_summary">
                            <h4>Order Summary</h4>
                            <div className="sub_total">
                                <span>Sub-total</span>
                                <span>$00.00</span>
                            </div>
                            <div className="deliver">
                                <span>Delivery Charges</span>
                                <span>$00.00</span>
                            </div>
                            <div className="discount">
                                <span>Discount</span>
                                <span>$00.00</span>
                            </div>
                            <div className="total">
                                <span>Total Amout</span>
                                <span>$00.00</span>
                            </div>
                        </div>
                        <Nav.Link as={Link} to="/checkout">
                            <Button className="btn_banner mt-4">Checkout to Proced</Button>
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Carts;
