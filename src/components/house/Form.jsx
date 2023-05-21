import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Form = () => {
    const { fid } = useParams();
    const rn = useRef('');
    const nam = useRef('');
    const eml = useRef('');
    const phn = useRef('');
    const [form, setForms] = useState([]);
    useEffect(() => {
        fetch(`https://room-booking-system-server-side.onrender.com/rooms/${fid}`)
            .then(res => res.json())
            .then(data => setForms(data))
    }, [form])

    const updates = (event) => {
        event.preventDefault();
        const rmn = form.room - parseInt(rn.current.value);
        const booking = {
            name: nam.current.value,
            email: eml.current.value,
            phone: phn.current.value,
            room: rn.current.value,
            place: form?.place,
            house: form?.hno,
        }
        const room = {
            name: form.name,
            img: form.img,
            room1: form.room1,
            room2: form.room2,
            place: form.place,
            room: rmn,
            contact: form.contact,
            hno: form.hno,
        }
        if (form.room >= rn.current.value) {
            fetch(`https://room-booking-system-server-side.onrender.com/rooms/${fid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(room),
            }, [form])
                .then(response => response.json())


                .then(data => {
                })
            axios.post('https://room-booking-system-server-side.onrender.com/confirm', booking)
                .then(res => {
                    toast('Booking has succesfully added!we will contact you soon!!');
                    event.target.reset();
                })
        }
        else {
            toast.error('Something wrong!!try again!');
        }

    }

    return (

        <div id='p3' className="container h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
            <form onSubmit={updates} id='forms' className='shadow-xl p-9 bg-base-100'>
                <h1 className=' text-center font-bold text-5xl pt-7 pb-7' >Write Your Information</h1>
                <div class="relative z-0 w-full mb-6 group">
                    <input ref={nam} type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input ref={eml} type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input ref={phn} type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input ref={rn} type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Number of room</label>
                    </div>
                </div>
                <div className='text-center'>
                    <button type="submit" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirm Booking</button>

                </div>
            </form>
            <ToastContainer ></ToastContainer>
        </div>

    );
};

export default Form;