import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import useTitle from '../../Hooks/useTitle';

const MyReviews = () => {
    useTitle("My Review")
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])

    const name = user?.displayName

    useEffect(() => {
        fetch(`https://assignment-11-server-rouge.vercel.app/reviews?name=${name}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
            })
    }, [name])



    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete it?")
        if (proceed) {
            fetch(`https://assignment-11-server-rouge.vercel.app/reviews/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        toast.success('Deleted successful', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                        const remain = myReviews.filter(review => review._id !== id)
                        setMyReviews(remain)
                    }
                })
        }

    }
    const handleUpdate = (id, e) => {
        const upValue = e.target.upReview.value

        fetch(`https://assignment-11-server-rouge.vercel.app/reviews/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ upValue })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Updated successful', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    const remain = myReviews.filter(review => review._id !== id)
                    const approve = myReviews.find(review => review._id === id)
                    approve.description = upValue;
                    const newMyReview = [approve, ...remain]
                    setMyReviews(newMyReview)
                }
            })


    }
    return (
        <div className='pt-24'>

            {
                myReviews.length > 0 ?
                    <div className="overflow-x-auto  w-full">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <td>

                                    </td>
                                    <th>Name</th>
                                    <th>Service</th>
                                    <th>Review</th>

                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    myReviews.map(review => <tr key={review._id}>
                                        <td>
                                            <label className='btn rounded-full' onClick={() => handleDelete(review._id)}>
                                                <FaTrashAlt className=''></FaTrashAlt>
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
                                            </label>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={review.photo} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{review.name}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {review.service}
                                        </td>
                                        <td>
                                            {review.description}
                                        </td>

                                        <th>
                                            <Modal review={review} handleUpdate={handleUpdate}></Modal>
                                        </th>
                                    </tr>)
                                }
                            </tbody>


                        </table>
                    </div>
                    :
                    <div className='w-screen flex justify-center items-center h-screen'>
                        <p className='text-4xl font-bold text-yellow-400'>No Reviews to show</p>
                    </div>
            }



        </div>
    );
};

export default MyReviews;