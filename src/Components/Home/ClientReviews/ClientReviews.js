import React, { useEffect, useState } from "react";
import ClientReview from "./ClientReview";

const ClientReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div style={{ backgroundColor: "rgb(240, 240, 240)" }}>
            <div className="container py-5">
                <div className="fs-1 my-5 ">
                    <span style={{ color: "red", borderBottom: "2px solid red" }}>Client </span>Reviews
                    <span style={{ color: "red" }}>...</span>
                </div>
                <div className="row">
                    {reviews.slice(0, 5).map((review) => (
                        <ClientReview key={review._id} review={review}></ClientReview>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientReviews;
