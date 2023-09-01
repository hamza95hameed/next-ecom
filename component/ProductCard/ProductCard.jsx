import Link from 'next/link'
import React from 'react'

const ProductCard = ({product}) => {
    return (
        <div className="axil-product product-style-one">
            <div className="thumbnail">
                <Link href="single-product.html">
                    <img data-sal="zoom-out" data-sal-delay="200" data-sal-duration="800" loading="lazy" className="main-img" src={`../images/product/electric/product-0${product}.png`} alt="Product Images" />
                    <img className="hover-img" src={`../images/product/electric/product-0${product}.png`} alt="Product Images" />
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
    )
}

export default ProductCard