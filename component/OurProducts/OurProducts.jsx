"use client"
import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";
import ProductCard from '@/component/ProductCard/ProductCard'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <button className="slide-arrow next-arrow" onClick={onClick}><i className="fal fa-long-arrow-right"></i></button>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="slide-arrow prev-arrow" onClick={onClick}><i className="fal fa-long-arrow-left"></i></button>
    );
}

const OurProducts = () => {
    const products = [1,2,3,4,5,6,7,8];
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="axil-product-area bg-color-white axil-section-gap">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="title-highlighter highlighter-primary"> <i className="far fa-shopping-basket"></i> Our Products</span>
                    <h2 className="title">Explore our Products</h2>
                </div>
                <Slider {...settings} className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
                    <div className="slick-single-layout">
                        <div className="row row--15">
                            {products.map((product) => (
                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                    <ProductCard product={product}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="slick-single-layout">
                        <div className="row row--15">
                            {products.map((product) => (
                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                    <ProductCard product={product}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </Slider>
                <div className="row">
                    <div className="col-lg-12 text-center mt--20 mt_sm--0">
                        <Link href="shop.html" className="axil-btn btn-bg-lighter btn-load-more">View All Products</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts