import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const cartPlus = <FontAwesomeIcon icon={faCartPlus} />;

const Shop = ({ item }) => {
    const { name, image, rating, price } = item;
    return (
        <div className=" col-lg-3  col-sm-12 ">
            <div className=" mb-4  product-style ">
                <div>
                    <label>New</label>
                </div>
                <div>
                    <img className=" w-100" src={image} alt="" />
                    <p style={{ width: "200px", marginLeft: "28px" }}>
                        <hr />
                    </p>
                    <div className="pb-4">
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly
                        ></Rating>
                        <h5 style={{ color: "gray", marginTop: "10px" }}> {name}</h5>
                        <div
                            style={{ paddingRight: "30px", paddingLeft: "70px" }}
                            className="d-flex justify-content-between fs-5 align-items-center "
                        >
                            <del style={{ color: "red", paddingBottom: "12px" }}>$45</del>
                            <span style={{ color: "green", paddingBottom: "12px", paddingRight: "50px" }}>${price}</span>
                        </div>
                        <div>
                            <Link to={""}>
                                <Button className="btn_new me-3">{cartPlus} Shop</Button>
                            </Link>
                            <Button className="btn_new">Details</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
