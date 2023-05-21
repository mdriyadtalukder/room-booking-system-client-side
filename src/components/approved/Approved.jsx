import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../useAdmin/useAdmin';

const Approved = ({ a }) => {
    const [user] = useAuthState(auth);
    const [admin, load] = useAdmin(user);
    const { _id, name, text } = a;
    const deleted = (event) => {
        event.preventDefault();
        const proceed = window.confirm("Are you sure to delete this post?");
        if (proceed) {
            axios.delete(`https://room-booking-system-server-side.onrender.com/approved/${_id}`)
                .then(res => {
                })
        }
    }

    return (
        <>
            {
                !load ? <div id='cd' class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <p>{text}</p>
                        {
                            admin && <div class="card-actions justify-end">
                                <button onClick={deleted} class="btn btn-error">Delete</button>
                            </div>
                        }
                    </div>
                </div> :
                    <div className='flex h-screen justify-center items-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>
                        <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                            <div class="border-t-transparent border-solid animate-spin  rounded-full border-primary border-4 h-16 w-16"></div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Approved;