import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { title, details, img, price, time, delivery, _id } = service
    return (
        <div className="card w-96 bg-zinc-900 text-white shadow-2xl  ">
            <figure className="px-10 pt-10"><PhotoProvider>
                <PhotoView src={img}>
                    
                <img src={img} className="rounded-2xl h-60 " alt="Shoes" />
                </PhotoView>
            </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-orange-400">{title}</h2>
                {
                    details.des.length > 100 ?
                        <div className='inline'>{details.des.slice(0, 100) + '...'} <Link to={`/services/${_id}`}>Read More</Link> </div>
                        :
                        details.des
                }
                
            </div>
        </div>
    );
};

export default ServiceCard;