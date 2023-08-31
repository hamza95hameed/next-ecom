import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <Link href="#top" className="back-to-top" id="backto-top"><i className="fal fa-arrow-up"></i></Link>
            <header className="header axil-header header-style-1">
                <div className="header-top-campaign">
                    <div className="container position-relative">
                        <div className="campaign-content">
                            <p>Open Doors To A World Of Fashion <Link href="#">Discover More</Link></p>
                        </div>
                    </div>
                    <button className="remove-campaign"><i className="fal fa-times"></i></button>
                </div>
                <div className="axil-header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="header-top-dropdown">
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            English
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" href="#">English</Link></li>
                                            <li><Link className="dropdown-item" href="#">Arabic</Link></li>
                                            <li><Link className="dropdown-item" href="#">Spanish</Link></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            USD
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" href="#">USD</Link></li>
                                            <li><Link className="dropdown-item" href="#">AUD</Link></li>
                                            <li><Link className="dropdown-item" href="#">EUR</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="header-top-link">
                                    <ul className="quick-link">
                                        <li><Link href="#">Help</Link></li>
                                        <li><Link href="sign-up.html">Join Us</Link></li>
                                        <li><Link href="sign-in.html">Sign In</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="axil-sticky-placeholder"></div>
                <div className="axil-mainmenu">
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-brand">
                                <Link href="index.html" className="logo logo-dark">
                                    <img src="../images/logo/logo.png" alt="Site Logo" />
                                </Link>
                                <Link href="index.html" className="logo logo-light">
                                    <img src="../images/logo/logo-light.png" alt="Site Logo" />
                                </Link>
                            </div>
                            <div className="header-main-nav">
                                <nav className="mainmenu-nav">
                                    <button className="mobile-close-btn mobile-nav-toggler"><i className="fas fa-times"></i></button>
                                    <div className="mobile-nav-brand">
                                        <Link href="index.html" className="logo">
                                            <img src="../images/logo/logo.png" alt="Site Logo" />
                                        </Link>
                                    </div>
                                    <ul className="mainmenu">
                                        <li className="menu-item-has-children">
                                            <Link href="#">Home</Link>
                                            <ul className="axil-submenu">
                                                <li><Link href="index-1.html">Home - Electronics</Link></li>
                                                <li><Link href="index-2.html">Home - NFT</Link></li>
                                                <li><Link href="index-3.html">Home - Fashion</Link></li>
                                                <li><Link href="index-4.html">Home - Jewellery</Link></li>
                                                <li><Link href="index-5.html">Home - Furniture</Link></li>
                                                <li><Link href="index-6.html">Home - Multipurpose</Link></li>
                                                <li><Link href="https://new.axilthemes.com/demo/template/etrade-rtl/">RTL Version</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link href="#">Shop</Link>
                                            <ul className="axil-submenu">
                                                <li><Link href="shop-sidebar.html">Shop With Sidebar</Link></li>
                                                <li><Link href="shop.html">Shop no Sidebar</Link></li>
                                                <li><Link href="single-product.html">Product Variation 1</Link></li>
                                                <li><Link href="single-product-2.html">Product Variation 2</Link></li>
                                                <li><Link href="single-product-3.html">Product Variation 3</Link></li>
                                                <li><Link href="single-product-4.html">Product Variation 4</Link></li>
                                                <li><Link href="single-product-5.html">Product Variation 5</Link></li>
                                                <li><Link href="single-product-6.html">Product Variation 6</Link></li>
                                                <li><Link href="single-product-7.html">Product Variation 7</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link href="#">Pages</Link>
                                            <ul className="axil-submenu">
                                                <li><Link href="wishlist.html">Wishlist</Link></li>
                                                <li><Link href="cart.html">Cart</Link></li>
                                                <li><Link href="checkout.html">Checkout</Link></li>
                                                <li><Link href="my-account.html">Account</Link></li>
                                                <li><Link href="sign-up.html">Sign Up</Link></li>
                                                <li><Link href="sign-in.html">Sign In</Link></li>
                                                <li><Link href="forgot-password.html">Forgot Password</Link></li>
                                                <li><Link href="reset-password.html">Reset Password</Link></li>
                                                <li><Link href="privacy-policy.html">Privacy Policy</Link></li>
                                                <li><Link href="coming-soon.html">Coming Soon</Link></li>
                                                <li><Link href="404.html">404 Error</Link></li>
                                                <li><Link href="typography.html">Typography</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="about-us.html">About</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link href="#">Blog</Link>
                                            <ul className="axil-submenu">
                                                <li><Link href="blog.html">Blog List</Link></li>
                                                <li><Link href="blog-grid.html">Blog Grid</Link></li>
                                                <li><Link href="blog-details.html">Standard Post</Link></li>
                                                <li><Link href="blog-gallery.html">Gallery Post</Link></li>
                                                <li><Link href="blog-video.html">Video Post</Link></li>
                                                <li><Link href="blog-audio.html">Audio Post</Link></li>
                                                <li><Link href="blog-quote.html">Quote Post</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="contact.html">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-action">
                                <ul className="action-list">
                                    <li className="axil-search">
                                        <Link href="#" className="header-search-icon" title="Search">
                                            <i className="flaticon-magnifying-glass"></i>
                                        </Link>
                                    </li>
                                    <li className="wishlist">
                                        <Link href="wishlist.html">
                                            <i className="flaticon-heart"></i>
                                        </Link>
                                    </li>
                                    <li className="shopping-cart">
                                        <Link href="#" className="cart-dropdown-btn">
                                            <span className="cart-count">3</span>
                                            <i className="flaticon-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li className="my-account">
                                        <Link href="#">
                                            <i className="flaticon-person"></i>
                                        </Link>
                                        <div className="my-account-dropdown">
                                            <span className="title">QUICKLINKS</span>
                                            <ul>
                                                <li>
                                                    <Link href="my-account.html">My Account</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Initiate return</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Support</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Language</Link>
                                                </li>
                                            </ul>
                                            <div className="login-btn">
                                                <Link href="sign-in.html" className="axil-btn btn-bg-primary">Login</Link>
                                            </div>
                                            <div className="reg-footer text-center">No account yet? <Link href="sign-up.html" className="btn-link">REGISTER HERE.</Link></div>
                                        </div>
                                    </li>
                                    <li className="axil-mobile-toggle">
                                        <button className="menu-btn mobile-nav-toggler">
                                            <i className="flaticon-menu-2"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header