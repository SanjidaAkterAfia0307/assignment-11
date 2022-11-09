import React, { useEffect, useState } from 'react';
import banner4 from "../../img/banner4.jpg"
import banner2 from "../../img/banner2.jpg"
import banner3 from "../../img/banner3.jpg"
import offer from "../../img/offer.jpg"

import { Link} from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import { GiChefToque } from "react-icons/gi";
import useTitle from '../../Hooks/useTitle';


const Home = () => {
    useTitle("Home")
    const [services, setServices] = useState([])
    const count = 3;
    useEffect(() => {
        fetch(`http://localhost:5000/services?count=${count}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [count])
    console.log(services)
    return (
        <div className='w-4/5  mx-auto py-24'>
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

            <div className='text-center my-36 shadow-lg rounded-xl md:p-20 bg-zinc-900 text-white'>
                <div className='flex items-center justify-center'>
                    
                        <GiChefToque className="w-32 h-32 rounded-full text-red-400"></GiChefToque>
                    
                    <h2 className='text-5xl font-bold'>About Us</h2>
                </div>
                <div className='lg:w-1/2 md:mx-auto px-4 py-6 md:text-justify'>
                    <p className='text-xl font-medium '>This is the best website to have homemade foods in a good quality and quantity.My principal purpose is to make your food habit and health sound and prepare a family or friends gathering .That's why we always provide food packages.</p>
                </div>
            </div>

            <div className='my-16'>
                <div className='text-center my-10'>
                <h2 className='text-5xl font-bold'>Our Services</h2>
                </div>
                <div className='grid gap-10  lg:grid-cols-3'>
                    {
                        services.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                <div className='text-center my-16'>
                    <Link to={`/services`} className='text-xl font-semibold tx'>See All</Link>
                </div>
            </div>

        </div>
    );
};

export default Home;