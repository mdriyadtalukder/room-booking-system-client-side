import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import useAdmin from '../useAdmin/useAdmin';
import img from '../../assets/icon.png'

const Navbar = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [admin, load] = useAdmin(user);
    const signout = () => {
        signOut(auth);
        navigate("/");


    }
    return (
        <div class="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400">
            <div class="flex-1">
                <Link to='/' class="w-10 rounded-full">
                    <img src={img} />
                </Link>
                <span className='navbar-start font-bold text-white text-xl ps-2'>Campus House</span>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <Link to='/'><li><a>Home</a></li></Link>
                    {user && <><Link to='/add'><li><a>Add Post</a></li></Link>
                        <Link to='/view'><li><a>View Posts</a></li></Link></>}
                    {
                        (user && admin) && <> <Link to='/pending'><li><a>Pending Posts</a></li></Link>
                            <Link to='/booked'><li><a>Booking Room</a></li></Link></>
                    }

                    {
                        user && <li className='text-white font-bold ml-2'><a>{user?.displayName}</a></li>
                    }
                    {
                        user ? <button onClick={signout} id='idd' class="btn bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 ml-2">Sign Out</button>
                            : <Link to='/login' id='idd' class="ml-2 btn  bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500">Log In</Link>

                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;