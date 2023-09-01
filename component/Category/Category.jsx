"use client"
import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";


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

const Category = () => {
    var settings = {
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 7,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 1000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]
    };

    const categories = [
        'Phones',
        'Computers',
        'Accessories',
        'Laptops',
        'Monitors',
        'Networking',
        'PC Games',
        'Smartwatches',
        'Headphones',
        'Camera',
        'Video',
        'Sports',
    ]

    return (
        <div className="axil-categorie-area bg-color-white axil-section-gapcommon">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="title-highlighter highlighter-secondary"> <i className="far fa-tags"></i> Categories</span>
                    <h2 className="title">Browse by Category</h2>
                </div>

                <div className="categrie-product-activation slick-layout-wrapper--15 axil-slick-arrow  arrow-top-slide">
                    <Slider {...settings} className="slick-single-layout">
                        {categories.map((category, index) => (
                            <div className="categrie-product" data-sal="zoom-out" data-sal-delay="200" data-sal-duration="500" key={index}>
                                <Link href="#">
                                    <img className="img-fluid" src={`../images/product/categories/elec-${index % 3 == 0 ? index + 1 : index % 3}.png`} alt={category} />
                                    <h6 className="cat-title">{category}</h6>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Category