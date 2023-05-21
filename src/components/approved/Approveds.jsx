import React, { useEffect, useState } from 'react';
import Approved from './Approved';

const Approveds = () => {
    const [approve, setApprove] = useState([]);
    const [reload, setReload] = useState(true);
    useEffect(() => {
        fetch('https://room-booking-system-server-side.onrender.com/approved')
            .then(res => res.json())
            .then(data => {
                setApprove(data);
                setReload(false);
            })
    }, [approve])
    return (
        <>
            {
                !reload ? <div className=' h-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200  pb-6' >
                    <h1 className='font-bold text-5xl pt-7 pb-7 text-center' >All Posts</h1>

                    <div className='grid grid-cols-1 gap-3' >
                        {
                            approve.map(a => <Approved key={a._id} a={a}></Approved>)
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

export default Approveds;