import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';

const Nav =()=>{
    return(
        <div className="listnav">
            <ul>
            <li>
            <Link to='/login'>
            <p>Login</p>
            </Link>
            
            </li>
            <li>
            <Link to ='/Register'>
            <p>Register</p>
            </Link>
            </li>
            </ul>

            

        </div>
    )
}
export default Nav;