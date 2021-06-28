import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Search from "../components/Search.jsx";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItem from "../components/CarouselItem.jsx";
import Footer from "../components/Footer.jsx";
import useInitialState from "../hooks/useInitialState.js";
import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initalState';

const Home = () => {
    const initialState = useInitialState(API);
    return(
        <>
            <Search/>
            {initialState.myList?.lenght > 0 && (
                <Categories title="Mi Lista">
                <Carousel>
                    {initialState.myList?.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>
            )}

            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends?.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {initialState.originals?.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>
        </>
    )
};

export default Home;