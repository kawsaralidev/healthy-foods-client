import React, { useEffect, useState } from "react";

import NewItem from "../NewItem/NewItem";

const NewItems = () => {
    const [newItem, setNewItem] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/newProducts")
            .then((res) => res.json())
            .then((data) => setNewItem(data));
    }, []);

    return (
        <div style={{ backgroundColor: "rgb(240, 240, 240)" }}>
            <div className="container py-5">
                <h1 className="my-5">
                    <span style={{ color: "red", borderBottom: "2px solid red" }}>Recently </span>New Items
                </h1>
                <div className="row ">
                    {newItem.slice(0, 8).map((items) => (
                        <NewItem key={items._id} items={items}></NewItem>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewItems;
