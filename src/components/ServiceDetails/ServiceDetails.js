import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaUserAlt } from "react-icons/fa";
import Review from '../Review/Review';
import { AuthContext } from '../../Contexts/AuthProvider';
import AddReview from '../AddReview/AddReview';
import useTitle from '../../Hooks/useTitle';

const ServiceDetails = () => {
    const service = useLoaderData()
    // console.log(service)
    const { title, details, img, price, time, delivery, _id, rating, chef } = service
    useTitle(`${title}`)
     const [reviews,setReviews]=useState([])
     const [load,setLoad]=useState(true)
    useEffect(()=>{
        fetch(`https://assignment-11-server-sanjidaakterafia0307.vercel.app/reviews?service=${title}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[load,title])


    const {user}=useContext(AuthContext)

    return (

        <div className='w-4/5 lg:grid grid-cols-12 gap-20 mx-auto justify-center pt-24 pb-56'>
            <div className='w-full col-span-8  mb-20 lg:mb-0'>
                <h1 className='text-5xl mb-12 text-rose-600 font-bold'>Order our {title} ! </h1>

                <div className='flex flex-col md:flex-row  justify-between'>
                    <div className='flex mb-6  items-center'>{
                        chef.img?

                        <img className='w-16 border-2 border-white mr-3 shadow-md h-16 rounded-full' src={chef.img} alt="" />
                        :
                        <FaUserAlt className='w-16 border-2 border-white mr-3 shadow-md h-16 rounded-full'></FaUserAlt>
                    }
                        <div>
                            <h3 className='font-bold text-base text-red-500'>Chef</h3>
                            <h3 className='font-bold text-lg'>{chef.name? chef.name:"Not Found"}</h3>
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

                <div className='py-20'>
                    <img className='rounded-2xl mb-10' src={img} alt="" />
                    <h2 className='text-3xl font-semibold my-5 text-orange-500'>Food Overview</h2>
                    <p className='text-lg text-justify'>{details.des}</p>
                    <br />
                    <p className='text-xl font-semibold my-5 text-red-600'>Our Packages :</p>
                    <ol>
                        <li className='py-3'>{
                            details?.pack1 ? 
                            <div>{`Package 1 (for 3 person) :${details?.pack1}.`}</div>
                            :
                            <></>
                        }
                            </li>
                        <li className='py-3'>{
                            details?.pack2 ? 
                            <div>{`Package 2 (for 2 person) :${details?.pack2}.`}</div>
                            :
                            <></>
                        }
                            </li>
                        <li className='py-3'>{
                            details?.pack3 ? 
                            <div>{`Package 3 (for 5 person) :${details?.pack3}.`}</div>
                            :
                            <></>
                        }
                            </li>
                        
                    </ol>
                </div>


            </div>
            <div className="divider divider-horizontal "></div>
            <div className='col-span-3'>
                <h1 className='text-5xl text-center my-4'>Reviews</h1>
                {
                    reviews.map(review=> <Review key={review._id} review={review}></Review>)
                }
               <div>
                <Link  className='text-2xl  font-semibold'  >Add your review</Link>
                <div className='my-2 text-lg font-semibold'>

                {user?.email?
                   
                    // `${msg? msg: ""}`
                    <AddReview key={_id} setLoad={setLoad} load={load} service={title}></AddReview>
                    :
                    <p>Please <Link className='text-orange-400' to="/login">Log in</Link> first to add review!</p>
                }
                </div>
               </div>
            </div>
        </div>
    );
};

export default ServiceDetails;