import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const AddReview = ({service,setLoad,load}) => {

    const {user}=useContext(AuthContext)

  const  handleAddReview=(e)=>{
    e.preventDefault()
        const review=e.target.review.value;
        const date=new Date(Date.now())
        const reviewObj={
            service,
            name:user?.displayName,
            photo:user?.photoURL,
            description:review,
            date
        }

        fetch(`https://assignment-11-server-sanjidaakterafia0307.vercel.app/reviews?service=${service}`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
               
            },
            body:JSON.stringify(reviewObj)
        })
        .then(res=>res.json())
        .then(data=>{
            setLoad(!load)
            e.target.reset()
        })
    }
    return (
        <div className=' '>
            <form onSubmit={handleAddReview} className="form-control  mx-auto">
                
                <textarea name='review' className="textarea  textarea-bordered h-24" placeholder="Review"></textarea>
                
                <button type="submit" className='btn  my-5'>
                    Add
                </button>
               
            </form>

        </div>
    );
};

export default AddReview;