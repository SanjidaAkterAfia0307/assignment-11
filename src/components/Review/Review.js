import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const Review = ({ review }) => {
    console.log(review)
    const { name, service, photo, ratings, description } = review
    return (
        <div className='my-6'>
            <div className='flex mb-6  items-center'>
                <img className='w-12 h-12 border-2 border-white mr-3 shadow-md rounded-full' src={photo} alt="" />
                <div>
                    <h3 className='font-bold text-lg'>{name}</h3>
                    <div className='flex items-center'>
                        <p className='mr-2 font-semibold'>{ratings}</p>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStarHalfAlt className='text-yellow-400'></FaStarHalfAlt>
                    </div>
                </div>
            </div>
            <div>
                <p className=''>{description}</p>
            </div>

        </div>
    );
};

export default Review;