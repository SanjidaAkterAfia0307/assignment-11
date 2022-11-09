import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    useTitle("Services")
    const services = useLoaderData()
    console.log(services)
    return (
        <div className='w-4/5  mx-auto pt-24 pb-60' >
            <div className='text-center my-10'>
                <h2 className='text-5xl font-bold'>Our Services</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-20'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;