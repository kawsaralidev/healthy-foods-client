import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Badge, Button, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddToCartProduct from "../AddToCartProduct/AddToCartProduct";
import useAuth from "../Hooks/useAuth";
import "./AddToCart.css";

const cartPlus = <FontAwesomeIcon icon={faCartPlus} />;

function OffCanvasExample({ name, ...props }) {
    const { user } = useAuth();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [saveProducts, setSaveProducts] = useState([]);

    //fetch savedProduct API
    useEffect(() => {
        fetch("http://localhost:5000/usersProducts")
            .then((res) => res.json())
            .then((data) => setSaveProducts(data));
    }, [saveProducts]);

    const UsersProduct = saveProducts.filter((product) => product.email === user.email);

    return (
        <>
            <Nav.Link onClick={handleShow} className="nav_icon" href="#deets">
                {cartPlus}
                <Badge>{UsersProduct.length}</Badge>
            </Nav.Link>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Carts</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {UsersProduct.map((product) => (
                        <AddToCartProduct key={product._id} product={product}></AddToCartProduct>
                    ))}
                </Offcanvas.Body>
                <div className="cart_footer">
                    <Link to="/cart">
                        <Button className="btn_banner">My Orders</Button>
                    </Link>
                    {/* <Link to="/checkout">
                        <Button className="btn_banner">Checkout</Button>
                    </Link> */}
                </div>
            </Offcanvas>
        </>
    );
}

const AddToCart = () => {
    return (
        <>
            {["end"].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} />
            ))}
        </>
    );
};

export default AddToCart;
