import React from "react";
import { faSignOutAlt, faUser, faCartPlus, faThLarge, faEdit, faCog, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Dashboard.css";

const Dashboard = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={3} className="d-flex justify-content-center">
                        <div className="dashboard_left_box py-5 mt-4">
                            <div className="dashboard_items">
                                <NavLink to="/dashboard" className="btn_banner">
                                    <FontAwesomeIcon className="dash_icon" icon={faThLarge} />
                                    Dashboard
                                </NavLink>
                            </div>

                            <div className="dashboard_items">
                                <NavLink to="/dashboard/makeAdmin" className="btn_banner">
                                    <FontAwesomeIcon className="dash_icon" icon={faUserShield} />
                                    Make Admin
                                </NavLink>
                            </div>

                            <div className="dashboard_items">
                                <NavLink to="/dashboard/addNewItem" className="btn_banner">
                                    <FontAwesomeIcon className="dash_icon" icon={faCartPlus} />
                                    Add New Product
                                </NavLink>
                            </div>

                            <div className="dashboard_items">
                                <NavLink to="/dashboard/addBlogs" className="btn_banner">
                                    <FontAwesomeIcon className="dash_icon" icon={faEdit} />
                                    Write New Blog
                                </NavLink>
                            </div>

                            <div className="dashboard_items">
                                <NavLink to="/dashboard/addFeatured" className="btn_banner">
                                    <FontAwesomeIcon className="dash_icon" icon={faCartPlus} />
                                    Featured Products
                                </NavLink>
                            </div>

                            <div className="dashboard_items">
                                <NavLink to="/dashboard/addReview" className="btn_banner">
                                    <FontAwesomeIcon className="dash_icon" icon={faEdit} />
                                    Add Review
                                </NavLink>
                            </div>

                            <div className="user_info ">
                                <div className="user_name">
                                    <FontAwesomeIcon className="dash_icon" icon={faUser} />
                                    <span>{user.displayName && user.displayName}</span>
                                </div>

                                <div className="user_logout">
                                    <NavLink onClick={logOut} className="logout_btn" to="/home">
                                        <FontAwesomeIcon className="dash_icon" icon={faSignOutAlt} />
                                        Log Out
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={9}>
                        {/* dashboard all routes content */}
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;
