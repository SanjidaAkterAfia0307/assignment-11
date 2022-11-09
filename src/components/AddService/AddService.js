import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    useTitle("Add Service")
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.chefName.value;
        const img = form.chefPhoto.value;
        const title = form.serviceName.value;
        const serviceImg = form.serviceImg.value;
        const price = form.servicePrice.value;
        const delivery = form.delivery.value;
        const time = form.time.value;
        const rating = form.rating.value;
        const des = form.des.value;
        const pack1 = form.pack1.value
        const pack2 = form.pack2.value
        const pack3 = form.pack3.value
        const service = {
            chef: {
                name,
                img
            },
            delivery,
            details: {
                des, pack1, pack2, pack3
            },
            img: serviceImg,
            price,
            rating, time,
            title
        }

        fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
                'content-type': "application/json",
                
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // window.location.reload()
                if (data.acknowledged) {
                    toast.success('Added successful', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });

                }
            })
    }
    return (
        <div className='pt-24 pb-56'>
            <h2 className='text-center text-4xl font-bold'>Update Review</h2>
            <form onSubmit={handleSubmit} className='lg:w-1/2 mx-auto shadow-2xl p-16'>
                <label className="label">
                    <span className="label-text">Chef's Name</span>
                </label>
                <textarea type="textarea" name='chefName' placeholder="Type here" className="input input-bordered w-full " ></textarea>


                <label className="label">
                    <span className="label-text">Chef's Photo</span>
                </label>
                <textarea type="textarea" name='chefPhoto' placeholder="Type here" className="input input-bordered w-full " ></textarea>

                <label className="label">
                    <span className="label-text">Service Name</span>
                </label>
                <textarea type="textarea" name='serviceName' placeholder="Type here" className="input input-bordered w-full " required ></textarea>

                <label className="label">
                    <span className="label-text">Service Image</span>
                </label>
                <textarea type="textarea" name='serviceImg' placeholder="Type here" className="input input-bordered w-full "  required></textarea>

                <label className="label">
                    <span className="label-text">Service Price</span>
                </label>
                <textarea type="textarea" name='servicePrice' placeholder="Type here" className="input input-bordered w-full " required></textarea>

                <label className="label">
                    <span className="label-text">Delivery Time</span>
                </label>
                <textarea type="textarea" name='delivery' placeholder="Type here" className="input input-bordered w-full " ></textarea>

                <label className="label">
                    <span className="label-text">Delivery Available</span>
                </label>
                <textarea type="textarea" name='time' placeholder="Type here" className="input input-bordered w-full " ></textarea>

                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
                <textarea type="textarea" name='rating' placeholder="Type here" className="input input-bordered w-full " required ></textarea>

                <label className="label">
                    <span className="label-text">Service Description</span>
                </label>
                <textarea type="textarea" name='des' placeholder="Type here" className="input input-bordered w-full " required></textarea>

                <label className="label">
                    <span className="label-text">Package 1</span>
                </label>
                <textarea type="textarea" name='pack1' placeholder="Type here" className="input input-bordered w-full " ></textarea>

                <label className="label">
                    <span className="label-text">Package 2</span>
                </label>
                <textarea type="textarea" name='pack2' placeholder="Type here" className="input input-bordered w-full " ></textarea>

                <label className="label">
                    <span className="label-text">Package 3</span>
                </label>
                <textarea type="textarea" name='pack3' placeholder="Type here" className="input input-bordered w-full " ></textarea>

                <button type="submit" className='btn'>Submit</button>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default AddService;