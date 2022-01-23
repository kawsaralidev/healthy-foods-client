import React from "react";
import { Button } from "react-bootstrap";

const Discount = () => {
    return (
        <div style={{ backgroundColor: "rgb(160, 245, 193)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center text-start">
                        <div className="carousel_content">
                            <h1 style={{ color: "tomato" }}>Our Special Offer</h1>
                            <i className="py-2 fs-1" style={{ color: "green" }}>
                                For Vegetables
                            </i>
                            <p>
                                Vegetable, in the broadest sense, any kind of plant life or plant product, namely vegetable matter in
                                common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous
                                plants—roots, stems, leaves, flowers, fruit, or seeds.
                            </p>
                            <h2 style={{ color: "tomato", paddingBottom: "20px" }}>20 Days</h2>
                            <div>
                                <Button className="btn_banner">Shop Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="py-4">
                            <img className="w-100" src="https://i.ibb.co/mtrrRnB/vegetable.png" alt="First slide" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;
