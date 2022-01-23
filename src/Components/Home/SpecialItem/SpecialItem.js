import React from "react";
import { Button } from "react-bootstrap";

const SpecialItem = () => {
    return (
        <div style={{ backgroundColor: "rgb(255, 247, 133)" }}>
            <div className="container">
                <div className="row py-5">
                    <div className=" col-lg-6">
                        <img className="w-100" src="https://i.ibb.co/93cs80C/png.png" alt="" />
                    </div>
                    <div className="col-lg-6  text-start">
                        <h2 style={{ color: "gray" }}>Fresh Foods For</h2>
                        <i style={{ color: "tomato", fontSize: "40px" }}>Healthy Lifestyle</i> <br />
                        <span style={{ color: "green", fontWeight: "600" }}>Price: $450</span>
                        <p style={{ color: "gray", paddingTop: "8px" }}>
                            Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and
                            does not contain genetically modified organisms Organic foods include fresh produce, as well as processed foods
                            such as crackers, drinks, and frozen meals.
                        </p>
                        <Button className="btn_banner" variant="primary">
                            Shop Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialItem;
