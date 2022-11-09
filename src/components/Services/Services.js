import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div className='w-4/5  mx-auto py-24' >
            <div className='text-center my-10'>
                <h2 className='text-5xl font-bold'>Our Services</h2>
            </div>
            <div className='grid grid-cols-3 gap-20'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;