import axios from 'axios';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Pending = ({ p }) => {
    const { _id, name, text } = p;
    const deleted = (event) => {
        event.preventDefault();
        const proceed = window.confirm("Are you sure to delete this post?");
        if (proceed) {
            axios.delete(`https://room-booking-system-server-side.onrender.com/pending/${_id}`)
                .then(res => {
                })

        }
    }
    const approve = (event) => {
        event.preventDefault();
        const posts = {
            name: name,
            text: text,
        }
        axios.post('https://room-booking-system-server-side.onrender.com/approved', posts)
            .then(res => {
            })
        axios.delete(`https://room-booking-system-server-side.onrender.com/pending/${_id}`)
            .then(res => {
                toast("Post has approved succesfully!!")
            })

    }
    return (
        <div id='cd' class="card bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{text}</p>
                <div class="card-actions justify-end">
                    <button onClick={approve} class="btn btn-success">Approve</button>
                    <button onClick={deleted} class="btn btn-error">Delete</button>
                </div>
            </div>
            <ToastContainer ></ToastContainer>

        </div>
    );
};

export default Pending;