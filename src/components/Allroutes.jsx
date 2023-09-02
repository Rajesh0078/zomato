import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from '../pages/Login'
import Home from '../pages/home/Home'
import MealName from '../pages/mealPage/mealName'

const Allroutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/meal' element={<MealName />} />
        </Routes>
    )
}

export default Allroutes