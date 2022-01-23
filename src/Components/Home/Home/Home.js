import React from "react";
import Banner from "../Banner/Banner";
import BannerFoods from "../BannerFoods/BannerFoods";
import ClientReviews from "../ClientReviews/ClientReviews";
import Discount from "../Discount/Discount";
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import NewItems from "../NewItems/NewItems";
import SpecialItem from "../SpecialItem/SpecialItem";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerFoods></BannerFoods>
            <NewItems></NewItems>
            <SpecialItem></SpecialItem>
            <FeaturedItems></FeaturedItems>
            <Discount></Discount>
            <ClientReviews></ClientReviews>
        </div>
    );
};

export default Home;
