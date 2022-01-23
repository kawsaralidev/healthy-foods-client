import React from "react";
import "./Banner.css";
import { Button, Carousel, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-banner">
            <Carousel>
                <Carousel.Item interval={2000}>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5 d-flex align-items-center text-start">
                            <div className="carousel_content">
                                <h2 className="fs-1 fw-bold">Good Food Good Healthy </h2>
                                <h1 className="fs-2 fw-bold">Free Home Delivery 24 Hours</h1>
                                <p>
                                    A food is a must for our body. It is very useful to build up and maintain sound body. Good food means
                                    the right kind of food for good body and good health. Good food gives us energy to work hard.
                                </p>
                                <div className="carousel_bottom mt-4 d-flex justify-content-between align-items-center me-5 pe-5">
                                    <span className="product_price fw-bold">Price: $199</span>
                                    <Nav.Link as={Link} to="/shop">
                                        <Button className="btn_banner">Shop Now</Button>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="py-4">
                                <img
                                    className="d-block  w-100"
                                    src="https://mironmahmud.com/greeny/assets/ltr/images/home/index/01.png"
                                    alt="First slide"
                                />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5 d-flex align-items-center text-start">
                            <div className="carousel_content">
                                <h2 className="fs-1 fw-bold">Good Food Good Healthy </h2>
                                <h1 className="fs-2 fw-bold">Free Home Delivery 24 Hours</h1>
                                <p>
                                    A food is a must for our body. It is very useful to build up and maintain sound body. Good food means
                                    the right kind of food for good body and good health. Good food gives us energy to work hard.
                                </p>
                                <div className=" mt-4 me-5 pe-5  d-flex justify-content-between align-items-center">
                                    <span className="product_price fw-bold">Price: $199</span>
                                    <Nav.Link as={Link} to="/shop">
                                        <Button className="btn_banner">Shop Now</Button>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="py-4">
                                <img
                                    className="d-block w-100"
                                    src="https://mironmahmud.com/greeny/assets/ltr/images/home/index/02.png"
                                    alt="First slide"
                                />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
