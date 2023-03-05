import React from 'react'
import Footer from '../component/footer'
import NavBar from '../component/navbar'
import StudentTable from '../component/student'

export default function App() {
    return (
        <div className='bg-secondary'>
            <NavBar />
            <div className=' container'>
                <StudentTable />
            </div>
            <Footer />
        </div>
    )
}
