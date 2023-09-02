import React from 'react'
import { Link } from "react-router-dom"
import "../pages/home/Home.css"

const Userdetails = () => {
    return (
        <div>
            <Link to={"/login"} className='login'>Login</Link>
            <Link to={"/register"} className='account'>Create an account</Link>
        </div>
    )
}

export default Userdetails