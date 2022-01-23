import React from "react";
import "./NewItem.css";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const cartPlus = <FontAwesomeIcon icon={faCartPlus} />;

const NewItem = ({ items }) => {
    const { name, image, rating, price, description } = items;

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
                            <Button className="btn_banner" onClick={props.onHide}>
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
                            <Button onClick={() => setModalShow(true)} className="btn_new">
                                Details
                            </Button>
                            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewItem;
