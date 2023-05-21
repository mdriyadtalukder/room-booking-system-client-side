import React, { useEffect, useState } from 'react';
import Banner from '../banner/Banner';
import Room from '../house/Room';

const Home = () => {
  const [room, setRoom] = useState([]);
  const [reload, setReload] = useState(true);
  useEffect(() => {
    fetch('https://room-booking-system-server-side.onrender.com/rooms')
      .then(res => res.json())
      .then(data => {
        setRoom(data);
        setReload(false)
      })
  }, [room])
  return (
    <>
      {
        !reload ? <div className='p1 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>
          <Banner></Banner>
          <div className='text-center'>
            <h1 className='font-bold text-5xl pt-7 pb-7' >Find Your Room For Rent</h1>

            <div className='grid grid-cols-4 gap-5' >
              {
                room.map(r => <Room key={r._id} r={r}></Room>)
              }
            </div>
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

export default Home;