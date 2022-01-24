import React, { useEffect, useState } from "react";
import Shop from "./Shop";

const Shops = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/featured")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return (
        <div style={{ backgroundColor: "rgb(240, 240, 240)" }}>
            <div style={{ marginTop: "-50px", paddingBottom: "30px" }} className="container ">
                <div className="row">
                    {items.map((item) => (
                        <Shop key={item._id} item={item}></Shop>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shops;
