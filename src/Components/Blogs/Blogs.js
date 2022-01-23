import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Blog from "../Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/addBlogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);
    return (
        <div style={{ backgroundColor: "rgb(240, 240, 240)" }}>
            <div className="blogs_container pt-5 pt-4">
                <Container>
                    <div className="section_title fs-1 mb-5">
                        <span style={{ color: "red", borderBottom: "2px solid red" }}>Our </span>Blogs
                        <span style={{ color: "red" }}>...</span>
                    </div>
                    <div className="row">
                        <Col xs md={3} sm={12}>
                            <div className="me-3">
                                <div className="recent_box">
                                    <h5>
                                        Recent <span style={{ color: "red" }}>Article</span>
                                    </h5>
                                </div>

                                {blogs.map((blog) => (
                                    <Row className="blog_card py-2 m-2">
                                        <Col xs={4} md={5} className="recent_img">
                                            <img style={{ height: "80px", width: "90px" }} src={blog.image} alt="" />
                                        </Col>
                                        <Col xs={8} md={7} className="recent_text">
                                            <h6>{blog.name}</h6>
                                            <span>{blog.date}</span>
                                        </Col>
                                    </Row>
                                ))}
                            </div>
                        </Col>

                        <Col xs md={9}>
                            <Row className="g-3">
                                {blogs.map((blog) => (
                                    <Blog blog={blog}></Blog>
                                ))}
                            </Row>
                        </Col>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Blogs;
