import React from "react";
import { Button, Modal } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const cartPlus = <FontAwesomeIcon icon={faCartPlus} />;

const FeaturedItem = ({ item }) => {
    const { user } = useAuth();
    const { name, description, image, rating, price, _id } = item;
    const { email } = user;
    const featuredData = { name, description, image, rating, price, _id, email };

    const handleSaveProduct = () => {
        axios.post("http://localhost:5000/usersProducts", featuredData).then((res) => {
            if (res.data.insertedId) {
                alert("product added successfully!");
            }
        });
    };

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <div className="row">
                    <div className="col-lg-6">
                        <img className="w-75" src={image} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "tomato" }} id="contained-modal-title-vcenter gray">
                                {name}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>{description}</p>
                        </Modal.Body>
                        <Modal.Footer className="d-flex justify-content-between align-items-center px-4">
                            <h4 style={{ color: "green" }}>${price}</h4>
                            <Button className="btn_banner" onClick={handleSaveProduct}>
                                Shop Now
                            </Button>
                        </Modal.Footer>
                    </div>
                </div>
            </Modal>
        );
    }

    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className=" col-lg-6  col-sm-12">
            <div className="row rounded product-style col-sm-12 mb-4">
                <div className="col-lg-5">
                    <img className="w-100 pt-5" src={image} alt="" />
                </div>
                <div className="col-lg-7 py-3 text-start">
                    <h4 style={{ color: "gray" }}>{name}</h4>

                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                    ></Rating>
                    <p>{description.slice(0, 120)}</p>
                    <div className="d-flex justify-content-between fs-5 align-items-center pe-5 pb-1">
                        <del style={{ color: "red" }}>$75</del>
                        <span style={{ color: "green", paddingRight: "70px" }}>${price}</span>
                    </div>
                    <div>
                        <Link to={""}>
                            <Button onClick={handleSaveProduct} className="btn_new me-3">
                                {cartPlus} Shop
                            </Button>
                        </Link>
                        <Button onClick={() => setModalShow(true)} className="btn_new">
                            Details
                        </Button>
                        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;
