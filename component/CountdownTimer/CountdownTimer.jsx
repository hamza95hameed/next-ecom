"use client"
import React from 'react'
import Countdown from 'react-countdown';

const CountdownTimer = ({ date }) => {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return (
                <>
                    <div className="countdown-section">
                        <div>
                            <div className="countdown-number">00</div>
                            <div className="countdown-unit">Day</div>
                        </div>
                    </div>
                    <div className="countdown-section">
                        <div>
                            <div className="countdown-number">00</div>
                            <div className="countdown-unit">Hrs</div>
                        </div>
                    </div>
                    <div className="countdown-section">
                        <div>
                            <div className="countdown-number">00</div>
                            <div className="countdown-unit">Min</div>
                        </div>
                    </div>
                    <div className="countdown-section">
                        <div>
                            <div className="countdown-number">00</div>
                            <div className="countdown-unit">Sec</div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="countdown-section">
                        <div>
                            <div className="countdown-number">{days}</div>
                            <div className="countdown-unit">Day</div>
                        </div>
                    </div>
                    <div className="countdown-section">
                        <div>
                            <div className="countdown-number">{hours}</div>
                            <div className="countdown-unit">Hrs</div>
                        </div>
                    </div>
                    <div className="countdown-section">
                        <div>
                            <div className="countdown-number">{minutes}</div>
                            <div className="countdown-unit">Min</div>
                        </div>
                    </div>
                    <div className="countdown-section">
                        <div>
                            <div className="countdown-number">{seconds}</div>
                            <div className="countdown-unit">Sec</div>
                        </div>
                    </div>
                </>
            );
        }
    };


    return (
        <div className="axil-poster-countdown">
            <div className="container">
                <div className="poster-countdown-wrap bg-lighter">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="poster-countdown-content">
                                <div className="section-title-wrapper">
                                    <span className="title-highlighter highlighter-secondary"> <i className="fal fa-headphones-alt"></i> Don’t Miss!!</span>
                                    <h2 className="title">Enhance Your Music Experience</h2>
                                </div>
                                <div className="poster-countdown countdown mb--40">
                                    <Countdown date={date} renderer={renderer} suppressHydrationWarning={true} />
                                </div>
                                <a href="#" className="axil-btn btn-bg-primary">Check it Out!</a>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="poster-countdown-thumbnail">
                                <img src="../images/product/poster/poster-03.png" alt="Poster Product" />
                                <div className="music-singnal">
                                    <div className="item-circle circle-1"></div>
                                    <div className="item-circle circle-2"></div>
                                    <div className="item-circle circle-3"></div>
                                    <div className="item-circle circle-4"></div>
                                    <div className="item-circle circle-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountdownTimer