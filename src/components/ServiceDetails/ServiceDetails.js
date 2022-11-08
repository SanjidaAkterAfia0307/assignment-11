import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, GiChefToque } from "react-icons/fa";

const ServiceDetails = () => {
    const service = useLoaderData()
    console.log(service)
    const { title, details, img, price, time, delivery, _id, rating, chef } = service
    return (

        <div className='w-4/5  mx-auto pt-24'>
            <div className='w-full lg:w-3/5 mb-20 lg:mb-0'>
                <h1 className='text-5xl mb-12 text-rose-600 font-bold'>Order Our our {title} ! </h1>

                <div className='flex flex-col md:flex-row  justify-between'>
                    <div className='flex mb-6  items-center'>
                        <img className='w-16 border-2 border-white mr-3 shadow-md h-16 rounded-full' src={chef.img} alt="" />
                        <div>
                            <h3 className='font-bold text-base text-red-500'>Chef</h3>
                            <h3 className='font-bold text-lg'>{chef.name}</h3>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <h3 className='font-bold  text-base text-red-500'>Price range</h3>
                        <h3 className='font-bold text-lg'>{price}</h3>
                    </div>

                    <div className='mb-6'>
                        <h3 className='font-bold text-base text-red-500'>Ratings</h3>
                        <div className='flex items-center'>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStar className='text-yellow-400'></FaStar>
                            <FaStarHalfAlt className='text-yellow-400'></FaStarHalfAlt>
                            <p className='ml-2 font-semibold'>{rating}</p>
                        </div>
                    </div>
                </div>

                <div className='py-24'>
                    <img className='rounded-2xl my-10' src={img} alt="" />
                    <h2 className='text-3xl font-semibold my-5 text-orange-500'>Food Overview</h2>
                    <p className='text-lg text-justify'>{details.des}</p>
                    <br />
                    <p className='text-xl font-semibold my-5 text-red-600'>Our Packages :</p>
                    <ol>
                        <li><span className='text-lg font-semibold my-5 '>Package 2 (for 2 person) :</span> {details.pack2}.</li>
                        <li><span className='text-lg font-semibold my-5 '>Package 3 (for 5 person) :</span> {details.pack3}.</li>
                        <li><span className='text-lg font-semibold my-5 '>Package 1 (for 3 person) :</span> {details.pack1}.</li>
                    </ol>
                </div>


            </div>
        </div>
    );
};

export default ServiceDetails;