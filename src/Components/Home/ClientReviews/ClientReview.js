import React from "react";

import Rating from "react-rating";

const ClientReview = ({ review }) => {
    const { rating, name, image, description } = review;
    return (
        <div className=" col-lg-4  col-sm-12">
            <div className="row   col-sm-12 mb-4">
                <img className="w-100 rounded pt-3" src={image} alt="" />

                <div className="  text-start">
                    <h4 style={{ color: "gray", paddingTop: "8px" }}>{name}</h4>
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                    ></Rating>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;
