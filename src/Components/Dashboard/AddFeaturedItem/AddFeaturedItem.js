import axios from "axios";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddFeaturedItem = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios
            .post("http://localhost:5000/featured", data)

            .then((res) => {
                if (res.data.insertedId) {
                    alert("added successfully");
                    reset();
                }
            });
    };
    return (
        <Container className="my-5 pt-4">
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <div className="login_form">
                        <div className="login_title mb-5">
                            <h3>Add Featured Product</h3>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="m-auto">
                            <label htmlFor="product">
                                Product Name<span>*</span>
                            </label>
                            <input placeholder="Enter new product name" id="product" {...register("name", { required: true })} />

                            <label htmlFor="img_link">
                                Image Link <span>*</span>
                            </label>
                            <input placeholder="Paste your image link" id="img_link" {...register("picture", { required: true })} />

                            <label htmlFor="condition">
                                Description<span>*</span>
                            </label>
                            <input placeholder="description" id="condition" {...register("description", { required: true })} />

                            <label htmlFor="battery">
                                Rating<span>*</span>
                            </label>
                            <input placeholder="rating" id="battery" {...register("rating", { required: true })} />

                            <label htmlFor="price">
                                Product Price<span>*</span>
                            </label>
                            <input id="price" placeholder="Product Price" {...register("price", { required: true })} />

                            <Button type="submit" className="btn_banner w-100 py-3 fw-bold">
                                Add Featured Product
                            </Button>
                        </form>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    );
};

export default AddFeaturedItem;
