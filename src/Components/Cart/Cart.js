import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const closeIcon = <FontAwesomeIcon icon={faTimes} />;
const Cart = ({ product }) => {
    console.log(product);
    const { _id, name, price, image } = product;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);

    // const quantityState = useSelector((state) => state.quantityChange);
    // console.log(quantityState);
    // const dispatch = useDispatch();

    const handleDeleteOrder = (id) => {
        const url = `http://localhost:5000/usersProducts/${id}`;

        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    alert("delete successfully");
                }
            })
            .finally(setShow(false));
    };
    return (
        <>
            <tr>
                <td className="d-flex align-items-center">
                    <img style={{ width: "50px", marginLeft: "15px" }} src={image} alt="" />
                    <span style={{ marginLeft: "15px", fontWeight: "600" }}>{name}</span>
                </td>
                <td>
                    <div style={{ position: "relative" }}>
                        <span style={{ position: "absolute", top: "50%", Left: "50%", transform: "translate(-50%, 80%)" }}>${price}</span>
                    </div>
                </td>
                <td>
                    <div style={{ position: "relative" }}>
                        <span style={{ position: "absolute", top: "50%", Left: "50%", transform: "translate(-50%, 80%)" }}>
                            <a href="#dfj" style={{ textDecoration: "none" }}>
                                <span>-</span>
                            </a>

                            <input style={{ width: "30px", textAlign: "center", border: "none" }} name="quantity" value={"quantityState"} />

                            <a href="#fkd" style={{ textDecoration: "none" }}>
                                <span>+</span>
                            </a>
                        </span>
                    </div>
                </td>
                <td>
                    <div style={{ position: "relative" }}>
                        <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, 80%)" }}>${price}</span>
                    </div>
                </td>
                <td>
                    <div style={{ position: "relative" }}>
                        <span
                            onClick={() => {
                                setShow(true);
                            }}
                            className="cancel_btn"
                            style={{ position: "absolute", top: "19px", left: "0" }}
                        >
                            {closeIcon}
                        </span>
                    </div>
                </td>
            </tr>
            {/* Confirmation alert */}
            <Modal show={show} onHide={handleClose}>
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        Confirmation
                    </h5>
                </div>
                <Modal.Body>Are you sure you want to delete this product from add to cart?</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            handleDeleteOrder(_id);
                        }}
                    >
                        Yes! Delete it
                    </Button>
                    <Button variant="primary" onClick={handleNoBtn}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Cart;
