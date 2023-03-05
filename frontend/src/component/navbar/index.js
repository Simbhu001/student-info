import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

export default function NavBar() {

    return (
        <div>
            <nav className="navbar navbar-light bg-primary p-3 d-flex align-center justify-content-space-between ">
                <span className="navbar-brand mb-0 h1 mx-5 text-white ">STUDENTS DATA INFO</span>
                <FaUserCircle size={'2rem'} className='mx-4   text-white ' />
            </nav>
        </div>
    )
}
