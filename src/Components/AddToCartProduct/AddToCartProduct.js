import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./AddToCartProduct.css";

const closeIcon = <FontAwesomeIcon icon={faTimes} />;

const AddToCartProduct = ({ product }) => {
    const { name, image, price, _id } = product;
    return (
        <div className="CartProduct-style d-flex justify-content-between align-items-center px-3">
            <div className="cart_img">
                <img src={image} alt="" />
            </div>
            <div className="cart_content">
                <h6>{name}</h6>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="price">${price}</span>
                    <span className="cancel_btn">{closeIcon}</span>
                </div>
            </div>
        </div>
    );
};

export default AddToCartProduct;
