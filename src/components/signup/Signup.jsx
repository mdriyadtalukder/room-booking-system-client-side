import React, { useEffect, useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axios from 'axios';

const Signup = () => {
    const emailInput = useRef('');
    const nameInput = useRef('');
    const passwordInput = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    let errors;

    if (error || error1) {
        errors = <p className='text-danger block text-sm text-error font-bold text-center'>Find some errors! try again</p>
    }
    if (loading || updating) {
        return <div className='flex h-screen justify-center items-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>
            <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                <div class="border-t-transparent border-solid animate-spin  rounded-full border-primary border-4 h-16 w-16"></div>
            </div>
        </div>

    }
    if (user) {
        navigate('/');
    }

    const signup = async (event) => {
        event.preventDefault();
        const email = emailInput.current.value;
        const name = nameInput.current.value;
        const password = passwordInput.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        const users = {
            name: name,
            email: email,
        }
        axios.post('https://room-booking-system-server-side.onrender.com/users', users)
            .then(res => {
                console.log(res)
            })

    }

    return (
        <div className='flex h-screen justify-center items-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>
            <div class="bg-white shadow-lg rounded px-20 pt-16 pb-20 mb-12">
                <form onSubmit={signup}>
                    <div class="mb-4">
                        <label class=" text-gray-700 text-sm font-bold mb-2" for="name">
                            Name
                        </label>
                        <input ref={nameInput} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Name" />
                    </div>
                    <div class="mb-4">
                        <label class=" text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input ref={emailInput} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter Email" />
                    </div>
                    <div class="mb-6">
                        <label class=" text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input ref={passwordInput} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter Password" />
                    </div>
                    {errors}
                    <button id='idd' class="w-full btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 hover:from-pink-400 hover:via-purple-500 hover:to-indigo-500 mt-3.5 mb-3.5">Sign Up</button>
                </form>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Signup;