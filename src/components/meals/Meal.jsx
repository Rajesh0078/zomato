import axios from 'axios'
import { Link } from "react-router-dom"
import React, { useContext, useEffect, useState } from 'react'
import "./meal.css"
import { store } from '../../App'

const Meal = () => {

    const [data, setData] = useState([])
    const { mealName, setMealName } = useContext(store)

    useEffect(() => {
        axios.get('https://zomato-backend-sm8l.onrender.com/meal').then((res) => setData(res.data))
    },)

    const mealHandler = (e) => {
        let parent = e.target.parentElement
        if (parent.className === "content") {
            setMealName(parent.childNodes[0].innerText)
        }
        else {
            let mealchild = parent.childNodes[1]
            setMealName(mealchild.childNodes[0].innerText)
        }
    }

    useEffect(() => {
        //axios.get(`http://localhost:8080/:${mealName}`).then((res) => console.log(res.data))
    }, [mealName])

    return (
        <div className='meal_container'>
            <h2>Quick Searches</h2>
            <p>Discover restaurants by type of meal</p>
            <div className="cards_container">
                {
                    data.map((item, index) => {
                        return <Link key={index} to={"/meal"}>
                            <div className='card' onClick={mealHandler}>
                                <img src={item.thumb} alt="haha" />
                                <div className='content'>
                                    <h2>{item.mealtype}</h2>
                                    <p>Start your day with exclusive breakfast options</p>
                                </div>
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Meal