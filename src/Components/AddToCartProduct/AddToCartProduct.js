import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./AddToCartProduct.css";

const closeIcon = <FontAwesomeIcon icon={faTimes} />;

const AddToCartProduct = ({ product }) => {
    const [users, setUsers] = useState([]);
    const { name, image, price, _id } = product;

    // handle delete product from add to cart
    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure? you want to delete");
        if (proceed) {
            const url = `http://localhost:5000/usersProducts/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("delete successfully");
                        const remainingUser = users.filter((user) => user._id !== id);
                        console.log(remainingUser);
                        setUsers(remainingUser);
                    }
                });
        }
    };
    return (
        <div className="CartProduct-style d-flex justify-content-between align-items-center px-3">
            <div className="cart_img">
                <img src={image} alt="" />
            </div>
            <div className="cart_content">
                <h6>{name}</h6>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="price">${price}</span>
                    <span onClick={() => handleDelete(_id)}>{closeIcon}</span>
                </div>
            </div>
        </div>
    );
};

export default AddToCartProduct;
