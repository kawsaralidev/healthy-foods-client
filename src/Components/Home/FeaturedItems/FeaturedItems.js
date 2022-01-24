import React, { useEffect, useState } from "react";
import FeaturedItem from "../FeaturedItem/FeaturedItem";

const FeaturedItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/featured")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return (
        <div style={{ backgroundColor: "rgb(240, 240, 240)" }}>
            <div className="container py-4">
                <h1 className="my-5">
                    <span style={{ color: "red", borderBottom: "2px solid red" }}>Featured </span>Items
                    <span style={{ color: "red" }}>...</span>
                </h1>
                <div className="row">
                    {items.map((item) => (
                        <FeaturedItem key={item._id} item={item}></FeaturedItem>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedItems;
