import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    let navigate = useNavigate()
    const count = useSelector((state) => state.cart);
    console.log(count);

   

    function HandleAdmin() {
        const name = localStorage.getItem('name');
        if (name) {
            navigate('/admin');
        } else {
            navigate('/adminlogin');
        }
    }

   
        return (
            <nav className="colorlib-nav" role="navigation">
                <div className="top-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7 col-md-9">
                                <div id="colorlib-logo"><a href="index.html">Footwear</a></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 text-left menu-1">
                                <ul>
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li ><Link to="/products">All Products</Link></li>
                                    <li onClick={HandleAdmin}>Admin</li>
                                    <li className="cart"><Link to="/cart"><i className="icon-shopping-cart"></i> Cart [{count.length}]</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sale">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 offset-sm-2 text-center">
                                <div className="row">
                                    <div className="owl-carousel2">
                                        <div className="item carousel-item active">
                                            <div className="col">
                                                <h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
                                            </div>
                                        </div>
                                        <div className="item carousel-item">
                                            <div className="col">
                                                <h3><a href="#">Our biggest sale yet 50% off all summer shoes</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );

    }

