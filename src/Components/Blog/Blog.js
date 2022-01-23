import React from "react";

const Blog = ({ blog }) => {
    const { name, image, description, date } = blog;
    return (
        <div className=" col-lg-6  col-sm-12">
            <div className="row   col-sm-12 mb-5">
                <img className="w-100 rounded pt-3" src={image} alt="" />

                <div className="  text-start">
                    <div className="d-flex justify-content-between align-items-center">
                        <span style={{ color: "red", paddingTop: "8px", fontSize: "22px" }}>{name}</span>
                        <span>{date}</span>
                    </div>

                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
