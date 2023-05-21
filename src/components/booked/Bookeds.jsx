import React, { useEffect, useState } from 'react';
import Booked from './Booked';

const Bookeds = () => {

    const [booked, setbooked] = useState([]);
    const [reload, setReload] = useState(true);

    let c = 1;
    useEffect(() => {
        fetch('https://room-booking-system-server-side.onrender.com/confirm')
            .then(res => res.json())
            .then(data => {
                setbooked(data);
                setReload(false)
            })
    }, [booked])
    return (
        <>
            {
                !reload ? <div class=" h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200  pt-10 ">
                    <table class="table w-full table-compact ">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No</th>
                                <th>Number Of Room</th>
                                <th>Place</th>
                                <th>House No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booked.map(b => <Booked key={b._id} b={b} c={c++}></Booked>)
                            }
                        </tbody>
                    </table>
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

export default Bookeds;