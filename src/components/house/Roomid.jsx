import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Roomid = () => {
    const { rid } = useParams();
    const [booking, setBooking] = useState([]);
    const [reload, setReload] = useState(true);

    useEffect(() => {
        fetch(`https://room-booking-system-server-side.onrender.com/rooms/${rid}`)
            .then(res => res.json())
            .then(data => {
                setBooking(data);
                setReload(false)
            })
    }, [booking])
    return (
        <>
            {
                !reload ? <div className="container h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 ">
                    <h1 className=' text-center font-bold text-5xl pt-7 pb-7' >Details</h1>

                    <div id='p2' className="container ">
                        <div id='cardid' class="card lg:card-side bg-base-100  shadow-xl">
                            <div class="carousel w-96 h-full">
                                <div id="slide1" class="carousel-item relative w-full">
                                    <img src={booking?.img} class="w-full h-full" />
                                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide3" class="btn btn-circle">❮</a>
                                        <a href="#slide2" class="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" class="carousel-item relative w-full">
                                    <img src={booking?.room1} class="w-full" />
                                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" class="btn btn-circle">❮</a>
                                        <a href="#slide3" class="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide3" class="carousel-item relative w-full">
                                    <img src={booking?.room2} class="w-full" />
                                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide2" class="btn btn-circle">❮</a>
                                        <a href="#slide1" class="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <h2 class="card-title">{booking?.name}</h2>
                                <p>Place: {booking?.place}</p>
                                <p>House No: {booking?.hno}</p>
                                <p>Room Available: {booking?.room}</p>
                                <p>Contact No: {booking?.contact}</p>
                                <button disabled={booking?.room === 0} class="btn btn-primary"><Link to={`/form/${booking?._id}`} class="card-actions justify-end">Add Booking</Link></button>

                            </div>
                        </div>
                    </div>
                </div> : <div className='flex h-screen justify-center items-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>
                    <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                        <div class="border-t-transparent border-solid animate-spin  rounded-full border-primary border-4 h-16 w-16"></div>
                    </div>
                </div>
            }
        </>
    );
};

export default Roomid;