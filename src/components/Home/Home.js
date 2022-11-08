import React from 'react';
import banner4 from "../../img/banner4.jpg"
import banner2 from "../../img/banner2.jpg"
import banner3 from "../../img/banner3.jpg"
import offer from "../../img/offer.jpg"
const Home = () => {
    return (
        <div className='w-4/5  mx-auto pt-24'>
            <div className=''>
                <div className="carousel w-full  ">
                    <div id="slide1" className="carousel-item relative w-full ">
                        <img src={banner4} className="w-full h-4/6 rounded-2xl" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={banner2} className="w-full h-4/6 rounded-2xl" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={banner3} className="w-full h-4/6 rounded-2xl" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='flex gap-10 flex-col md:flex-row mb-20'>
                <div>
                    <img src={offer} className="rounded-2xl" alt="" />
                </div>
                <div>
                    <h3 className='text-4xl font-bold pb-6 text-orange-500'>Get 50% off!</h3>
                    <p className='text-lg'>Today are offering 50% discount on the daily packages .If you don't wanna miss it just pick your phone and order a yuor choicable pack !</p>
                    <div className='my-16'>
                        <button className='btn bg-red-500 border-none '>Get The Offer</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;