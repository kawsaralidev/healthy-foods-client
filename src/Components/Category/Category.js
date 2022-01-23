import React from "react";
import "./Category.css";
import { Col, Row } from "react-bootstrap";

const Category = () => {
    return (
        <div>
            <Row>
                <Col md={3}>
                    <div className="category_items">
                        <h3>Vegetables</h3>
                        <ul>
                            <li>
                                <a href="#">Carrot</a>
                            </li>
                            <li>
                                <a href="#">CouliFlower</a>
                            </li>
                            <li>
                                <a href="#">Eggplant</a>
                            </li>
                            <li>
                                <a href="#">Asparagus</a>
                            </li>
                            <li>
                                <a href="#">Broccoli</a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="category_items">
                        <h3>Sea Foods</h3>
                        <ul>
                            <li>
                                <a href="#">Shrimp</a>
                            </li>
                            <li>
                                <a href="#">Octopus</a>
                            </li>
                            <li>
                                <a href="#">Cary Fish</a>
                            </li>
                            <li>
                                <a href="#">Cockles</a>
                            </li>
                            <li>
                                <a href="#">Geoduck</a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="category_items">
                        <h3>Fast Foods</h3>
                        <ul>
                            <li>
                                <a href="#">Subway</a>
                            </li>
                            <li>
                                <a href="#">Burger</a>
                            </li>
                            <li>
                                <a href="#">Pizza</a>
                            </li>
                            <li>
                                <a href="#">Tocobell</a>
                            </li>
                            <li>
                                <a href="#">Starbucks</a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="category_items">
                        <h3>Fruits</h3>
                        <ul>
                            <li>
                                <a href="#">Apple</a>
                            </li>
                            <li>
                                <a href="#">Banana</a>
                            </li>
                            <li>
                                <a href="#">Orange</a>
                            </li>
                            <li>
                                <a href="#">Pineapple</a>
                            </li>
                            <li>
                                <a href="#">Strawberry</a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Category;
