import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import "./Checkout.css";

const Checkout = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [saveProducts, setSaveProducts] = useState([]);

    //fetch savedProduct API
    useEffect(() => {
        fetch("")
            .then((res) => res.json())
            .then((data) => setSaveProducts(data));
    }, [saveProducts]);

    //const UsersProduct = saveProducts.filter(product => product.email === user.email);

    // handle submit
    const onSubmit = (data) => {
        console.log(data);
        axios.post("", data).then((res) => {
            if (res.data.insertedId) {
                alert("Successful!!");
                reset();
            }
        });
    };
    return (
        <div style={{ backgroundColor: "rgb(240, 240, 240)" }} className="py-5 pt-4">
            <Container>
                <div className="section_title">
                    <h1 className="pb-5">
                        <span style={{ color: "red", borderBottom: "2px solid red" }}>Checkout</span>
                        <span style={{ color: "red" }}>...</span>
                    </h1>
                </div>
                <Row>
                    <Col md={8}>
                        <div className="checkout_form">
                            <div className="checkout_form_title mb-4">
                                <h2>Billing Address</h2>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="m-auto">
                                <label htmlFor="name">
                                    Full Name <span>*</span>
                                </label>
                                <input id="name" defaultValue={user.displayName} {...register("name", { required: true })} />

                                <label htmlFor="email">
                                    Email <span>*</span>
                                </label>
                                <input id="email" defaultValue={user.email} {...register("email", { required: true })} />

                                <label htmlFor="country">
                                    Country <span>*</span>
                                </label>
                                <input id="country" placeholder="Country" {...register("Country", { required: true })} />

                                <Row className="group_input">
                                    <Col md={6}>
                                        <label htmlFor="city">
                                            City <span>*</span>
                                        </label>
                                        <input id="city" placeholder="City" {...register("city", { required: true })} />
                                    </Col>

                                    <Col md={6} className="col-md-6">
                                        <label htmlFor="zipcode">
                                            Zip Code <span>*</span>
                                        </label>
                                        <input id="zipcode" placeholder="Zip Code" {...register("post", { required: true })} />
                                    </Col>
                                </Row>

                                <Row className="group_input">
                                    <Col md={6}>
                                        <label htmlFor="region">
                                            Region / State <span>*</span>
                                        </label>
                                        <input placeholder="Region / State" {...register("region")} />
                                    </Col>

                                    <Col md={6}>
                                        <label htmlFor="date">
                                            Choose Date <span>*</span>
                                        </label>
                                        <input type="date" placeholder="Choose Date" {...register("date", { required: true })} />
                                    </Col>
                                </Row>

                                <Button type="submit" className="btn_login">
                                    Place an Order
                                </Button>
                            </form>
                        </div>
                    </Col>
                    <Col md={4}>
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
                                <span>Total Amount</span>
                                <span>$00.00</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;
