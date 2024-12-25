import React from 'react';
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div>
            <section>
                <div className="carousel w-full md:h-[470px]">
                    <div id="slide1" className="h-60 md:h-auto carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co.com/23RB6RT/rocket-space-startup-creative-idea-cover-landing-page-web-site-vector-3482-8461.jpg"
                            alt="Creative Projects"
                            className="w-full object-cover"
                        />
                        <div className="absolute bottom-10 left-10 hidden md:block bg-black bg-opacity-50 text-white p-4 rounded-md">
                            <motion.h2
                            animate={{color: ['#ecff33', '#33ffe3']}}
                            transition={{duration: 2, repeat: Infinity}}
                            className="text-2xl font-bold">Start Up
                            </motion.h2>
                            <p>Support groundbreaking ideas and help creators bring them to life.</p>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co.com/rQbJRwV/75-E9110-D-4765-4-C25-9-B5-F-A76400-E38118-963x542.png"
                            alt="Empower Startups"
                            className="w-full object-cover"
                        />
                        <div className="absolute bottom-10 hidden md:block left-10 bg-black bg-opacity-50 text-white p-4 rounded-md">
                            <h2 className="text-2xl font-bold">Empower Startups</h2>
                            <p>Be a part of innovative journeys by contributing to startups.</p>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co.com/gS9Dc1g/premium-photo-1673177667569-e3321a8d8256.jpg"
                            alt="Support Personal Causes"
                            className="w-full object-cover"
                        />
                        <div className="absolute bottom-10 left-10 hidden md:block bg-black bg-opacity-50 text-white p-4 rounded-md">
                            <h2 className="text-2xl font-bold">Support Personal Causes</h2>
                            <p>Make a difference in someone's life by contributing to personal needs.</p>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                            alt="Join the Community"
                            className="w-full object-cover"
                        />
                        <div className="absolute bottom-10 left-10 hidden md:block bg-black bg-opacity-50 text-white p-4 rounded-md">
                            <h2 className="text-2xl font-bold">Join the Crowdfunding Community</h2>
                            <p>Collaborate, support, and grow together with Crowdcube.</p>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;