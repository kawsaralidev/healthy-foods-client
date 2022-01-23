import React from "react";
import "./BannerFoods.css";
import { Button, Card } from "react-bootstrap";

const BannerFoods = () => {
    return (
        <div className="my-5 container">
            <div className="row gx-4">
                <div className="col-lg-3">
                    <Card className="banner-card">
                        <Card.Img variant="top" src="https://www.briancartercellars.com/assets/client/Image/Shrimp.png" />
                        <Card.Body>
                            <Card.Title>Sea Food</Card.Title>
                            <Button className="btn_banner mt-2" variant="primary">
                                Shop
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="banner-card">
                        <Card.Img variant="top" src="https://5.imimg.com/data5/YK/EM/MY-6466246/organic-golden-raisin-500x500.jpg" />
                        <Card.Body>
                            <Card.Title>Dry Food</Card.Title>
                            <Button className="btn_banner mt-2" variant="primary">
                                Shop
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="banner-card">
                        <Card.Img
                            variant="top"
                            src="https://domf5oio6qrcr.cloudfront.net/medialibrary/8371/bigstock-Hamburger-And-French-Fries-263887.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Fast Food</Card.Title>
                            <Button className="btn_banner mt-2" variant="primary">
                                Shop
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="banner-card">
                        <Card.Img variant="top" src="https://pixy.org/src/438/thumbs350/4386871.jpg" />
                        <Card.Body>
                            <Card.Title>Fruits </Card.Title>
                            <Button className="btn_banner mt-2" variant="primary">
                                Shop
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default BannerFoods;
