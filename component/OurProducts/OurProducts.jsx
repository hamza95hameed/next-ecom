import Link from 'next/link'
import React from 'react'
import ProductCard from '@/component/ProductCard/ProductCard'

const OurProducts = () => {
    return (
        <div className="axil-product-area bg-color-white axil-section-gap">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="title-highlighter highlighter-primary"> <i className="far fa-shopping-basket"></i> Our Products</span>
                    <h2 className="title">Explore our Products</h2>
                </div>
                <div className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
                    <div className="slick-single-layout">
                        <div className="row row--15">
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img data-sal="zoom-out" data-sal-delay="200" data-sal-duration="800" loading="lazy" className="main-img" src="../images/product/electric/product-01.png" alt="Product Images" />
                                            <img className="hover-img" src="../images/product/electric/product-08.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option">
                                                    <Link href="single-product.html">
                                                        Add to Cart
                                                    </Link>
                                                </li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <div className="product-rating">
                                                <span className="icon">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span className="rating-number">(64)</span>
                                            </div>
                                            <h5 className="title"><Link href="single-product.html">Yantiti Leather & Canvas Bags</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img data-sal="zoom-out" data-sal-delay="300" data-sal-duration="800" loading="lazy" src="../images/product/electric/product-02.png" alt="Product Images" />
                                            <img className="hover-img" src="../images/product/electric/product-06.png" alt="Product Images" />
                                        </Link>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link href="single-product.html">Level 20 RGB Cherry</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                            <div className="color-variant-wrapper">
                                                <ul className="color-variant">
                                                    <li className="color-extra-01 active"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-02"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-03"><span><span className="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img data-sal="zoom-out" data-sal-delay="400" data-sal-duration="800" loading="lazy" src="../images/product/electric/product-03.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link href="single-product.html">Logitech Streamcam</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                            <div className="color-variant-wrapper">
                                                <ul className="color-variant">
                                                    <li className="color-extra-01 active"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-02"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-03"><span><span className="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img data-sal="zoom-out" data-sal-delay="500" data-sal-duration="800" loading="lazy" src="../images/product/electric/product-04.png" alt="Product Images" />
                                            <img className="hover-img" src="../images/product/electric/product-05.png" alt="Product Images" />
                                        </Link>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <div className="product-rating">
                                                <span className="icon">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span className="rating-number">(44)</span>
                                            </div>
                                            <h5 className="title"><Link href="single-product.html">3D™ wireless headset</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img data-sal="zoom-out" data-sal-delay="200" data-sal-duration="800" loading="lazy" src="../images/product/electric/product-05.png" alt="Product Images" />
                                            <img className="hover-img" src="../images/product/electric/product-04.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link href="single-product.html">Bass Meets Clarity</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                            <div className="color-variant-wrapper">
                                                <ul className="color-variant">
                                                    <li className="color-extra-01 active"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-02"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-03"><span><span className="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img data-sal="zoom-out" data-sal-delay="300" data-sal-duration="800" loading="lazy" src="../images/product/electric/product-06.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link href="single-product.html">Mice Logitech</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                            <div className="color-variant-wrapper">
                                                <ul className="color-variant">
                                                    <li className="color-extra-01 active"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-02"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-03"><span><span className="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img data-sal="zoom-out" data-sal-delay="400" data-sal-duration="800" loading="lazy" src="../images/product/electric/product-07.png" alt="Product Images" />
                                            <img className="hover-img" src="../images/product/electric/product-08.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <div className="product-rating">
                                                <span className="icon">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span className="rating-number">(64)</span>
                                            </div>
                                            <h5 className="title"><Link href="single-product.html">Zone Headphone</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img data-sal="zoom-out" data-sal-delay="500" data-sal-duration="800" loading="lazy" src="../images/product/electric/product-08.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link href="single-product.html">3D™ wireless headset</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                            <div className="color-variant-wrapper">
                                                <ul className="color-variant">
                                                    <li className="color-extra-01 active"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-02"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-03"><span><span className="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slick-single-layout">
                        <div className="row row--15">
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img src="../images/product/electric/product-01.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link href="single-product.html">Yantiti Leather & Canvas Bags</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img src="../images/product/electric/product-02.png" alt="Product Images" />
                                        </Link>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link href="single-product.html">3D™ wireless headset</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                            <div className="color-variant-wrapper">
                                                <ul className="color-variant">
                                                    <li className="color-extra-01 active"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-02"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-03"><span><span className="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img src="../images/product/electric/product-03.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link href="single-product.html">3D™ wireless headset</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                            <div className="color-variant-wrapper">
                                                <ul className="color-variant">
                                                    <li className="color-extra-01 active"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-02"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-03"><span><span className="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img src="../images/product/electric/product-04.png" alt="Product Images" />
                                        </Link>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link href="single-product.html">3D™ wireless headset</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img src="../images/product/electric/product-05.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link href="single-product.html">3D™ wireless headset</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                            <div className="color-variant-wrapper">
                                                <ul className="color-variant">
                                                    <li className="color-extra-01 active"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-02"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-03"><span><span className="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img src="../images/product/electric/product-06.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link href="single-product.html">3D™ wireless headset</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                            <div className="color-variant-wrapper">
                                                <ul className="color-variant">
                                                    <li className="color-extra-01 active"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-02"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-03"><span><span className="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img src="../images/product/electric/product-07.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link href="single-product.html">3D™ wireless headset</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                            <div className="color-variant-wrapper">
                                                <ul className="color-variant">
                                                    <li className="color-extra-01 active"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-02"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-03"><span><span className="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link href="single-product.html">
                                            <img src="../images/product/electric/product-08.png" alt="Product Images" />
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option"><Link href="single-product.html">Select Option</Link></li>
                                                <li className="wishlist"><Link href="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <h5 className="title"><Link href="single-product.html">3D™ wireless headset</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                            <div className="color-variant-wrapper">
                                                <ul className="color-variant">
                                                    <li className="color-extra-01 active"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-02"><span><span className="color"></span></span>
                                                    </li>
                                                    <li className="color-extra-03"><span><span className="color"></span></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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