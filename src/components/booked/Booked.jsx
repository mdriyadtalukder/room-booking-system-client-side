import React from 'react';

const Booked = ({b,c}) => {
    const {name,email,phone,room,place,house}=b;
    return (
        <tr>
            <th>{c}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{room}</td>
            <td>{place}</td>
            <td>{house}</td>
            
        </tr>
    );
};

export default Booked;