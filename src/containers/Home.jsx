import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Search from "../components/Search.jsx";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItem from "../components/CarouselItem.jsx";
import useInitialState from "../hooks/useInitialState.js";

import '../assets/styles/App.scss'

const Home = ({ myList, trends, originals}) => {
    return(
        <>
            <Search/>
            {myList?.lenght > 0 && (
                <Categories title="Mi Lista">
                <Carousel>
                    {myList?.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>
            )}

            <Categories title="Tendencias">
                <Carousel>
                    {trends?.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {originals?.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>
        </>
    );
};

const mapStatetoProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.original
    };
};

export default connect(mapStatetoProps, null)(Home);