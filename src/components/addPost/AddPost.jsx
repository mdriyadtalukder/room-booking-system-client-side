import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const AddPost = () => {
    const [user] = useAuthState(auth);
    const nam = useRef('')
    const post = (event) => {
        event.preventDefault();
        const posts = {
            name: user?.displayName,
            text: nam.current.value,
        }
        if (nam.current.value) {
            axios.post('https://room-booking-system-server-side.onrender.com/pending', posts)
                .then(res => {
                    toast('Post has added succesfully!!');
                    event.target.reset();
                })
        }
        else {
            toast('Something wrong!try again!!');

        }
    }
    return (
        <div id='p4' className=' h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>

            <form id='frm' onSubmit={post}>
                <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label for="comment" class="sr-only">Your comment</label>
                        <textarea ref={nam} id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
                    </div>
                    <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Add Post
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer ></ToastContainer>
        </div>
    );
};

export default AddPost;