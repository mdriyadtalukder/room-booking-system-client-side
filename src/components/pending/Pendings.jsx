import React, { useEffect, useState } from 'react';
import Pending from './Pending';

const Pendings = () => {
    const [pending, setPending] = useState([]);
    const [reload, setReload] = useState(true);
    useEffect(() => {
        fetch('https://room-booking-system-server-side.onrender.com/pending')
            .then(res => res.json())
            .then(data => {
                setPending(data)
                setReload(false)
            })
    }, [pending])
    return (
        <>
            {
                !reload ? <div className=' h-full bg-base-100 pb-6' >
                    <h1 className='font-bold text-5xl pt-7 pb-7 text-center' >Pending Posts</h1>

                    <div className='grid grid-cols-1 gap-3' >
                        {
                            pending.map(p => <Pending key={p._id} p={p}></Pending>)
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

export default Pendings;