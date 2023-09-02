import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { store } from '../../App'
import "./mealname.css"
import axios from 'axios'

const MealName = () => {
    const { mealName } = useContext(store);
    const [meals, setMeals] = useState([])
    const [page, setPage] = useState()

    useEffect(() => {
        axios.post("https://zomato-backend-sm8l.onrender.com/mealdata", {
            value: mealName,
            page: page
        }).then((res) => setMeals(res.data))

    }, [mealName, meals, page])

    const pageHandler = (e) => {
        setPage(e.target.innerHTML)
    }

    return (
        mealName &&
        <div>
            <header>
                <div className="logo">e!</div>
                <div className="auth">
                    <Link><span>Login</span></Link>
                    <Link><span className='new'>Create an account</span></Link>
                </div>
            </header>
            <div className="main">
                <h2>{mealName} Places in India</h2>
            </div>
            <div className="container">
                <div className="meal_filters">
                    <div className="filter">
                        <h3>Filters</h3>
                        <div className="location">
                            <p>Select Location</p>
                            <select name="select" id="dropdown">
                                <option value="" >select loacation</option>
                                <option value="Delhi" >delhi</option>
                                <option value="bangalore" >bangalore</option>
                                <option value="pune" >pune</option>
                                <option value="mumbai" >mumbai</option>
                                <option value="Chandigarh" >Chandigarh</option>
                                <option value="rajahmundry" >rajahmundry</option>
                                <option value="kakinada" >kakinada</option>
                            </select>
                        </div>
                        <div className="cuisine">
                            <p>Cuisine</p>
                            <form >
                                <div className="box">
                                    <input type="checkbox" name="North_Indian" id="north_indian" />
                                    <label htmlFor="north_indian">North Indian</label>
                                </div>
                                <div className="box">
                                    <input type="checkbox" name="South_Indian" id="south_indian" />
                                    <label htmlFor="south_indian">South Indian</label>
                                </div>
                                <div className="box">
                                    <input type="checkbox" name="chinese" id="chinese" />
                                    <label htmlFor="chinese">chinese</label>
                                </div>
                                <div className="box">
                                    <input type="checkbox" name="Fast_food" id="Fast_food" />
                                    <label htmlFor="Fast_food">Fast food</label>
                                </div>
                                <div className="box">
                                    <input type="checkbox" name="Street_food" id="Street_food" />
                                    <label htmlFor="Street_food">Street food</label>
                                </div>
                            </form>
                        </div>
                        <div className="cost">
                            <p>Cost for Two</p>
                            <form >
                                <div className="box">
                                    <input type="radio" name="North_Indian" id="cost-1" />
                                    <label htmlFor="cost-1">Less than ` 500</label>
                                </div>
                                <div className="box">
                                    <input type="radio" name="South_Indian" id="cost-2" />
                                    <label htmlFor="cost-2">` 500 to ` 1000</label>
                                </div>
                                <div className="box">
                                    <input type="radio" name="chinese" id="cost-3" />
                                    <label htmlFor="cost-3">` 1000 to ` 1500</label>
                                </div>
                                <div className="box">
                                    <input type="radio" name="Fast_food" id="cost-4" />
                                    <label htmlFor="cost-4">` 1500 to ` 2000</label>
                                </div>
                                <div className="box">
                                    <input type="radio" name="Street_food" id="cost-5" />
                                    <label htmlFor="cost-5">` 2000+</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="sort">
                        <h3>Sort</h3>
                        <div className="sorting">
                            <div className="box">
                                <input type="radio" name="Street_food" id="l_h" />
                                <label htmlFor="l_h">Price low to high</label>
                            </div>
                            <div className="box">
                                <input type="radio" name="Street_food" id="h_l" />
                                <label htmlFor="h_l">Price high to low</label>
                            </div>
                        </div>
                    </div>
                </div>
                {

                    meals.map((item, index) => {
                        return <div className={`card-${index + 1} card-x`} key={index}>
                            <div className="top">
                                <img src={item.thumb} alt="haha" />
                                <div className="content">
                                    <h2>{item.name}</h2>
                                    <h4>{item.city_name}</h4>
                                    <p>{item.address}</p>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="left">
                                    <p>cuisines :</p>
                                    <p>cost for two :</p>
                                </div>
                                <div className="right">
                                    <p>{item.Cuisine.map((e) => e.name)}</p>
                                    <p>$ {item.cost}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
                <div className="pagination">
                    <p onClick={pageHandler}>1</p>
                    <p onClick={pageHandler}>2</p>
                    <p onClick={pageHandler}>3</p>
                    <p onClick={pageHandler}>4</p>
                    <p onClick={pageHandler}>5</p>
                </div>
            </div>
        </div>
    )
}

export default MealName