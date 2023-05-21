import React from 'react';
import { Link } from 'react-router-dom';

const Room = ({ r }) => {
    const { _id, name, img, room1, room2, place, room, contact } = r
    return (
        <div class="card w-full bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <Link to={`/rooms/${_id}`}>
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </Link>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{place}</p>

                <Link to={`/rooms/${_id}`} class="card-actions w-full">
                    <button class="btn w-full btn-primary">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Room;