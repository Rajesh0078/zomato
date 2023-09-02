import React from 'react'
import Userdetails from '../../components/Userdetails';
import "./Home.css"
import CitySearch from '../../components/CitySearch';
import Meal from '../../components/meals/Meal';

const Home = () => {
    return (
        <>
            <div className='header'>
                <div className="user_details">
                    <Userdetails />
                </div>
                <div className="home_content">
                    <h2>e!</h2>
                    <p>Find the best restaurants, cafés, and bars</p>
                </div>
                <div className="search_content">
                    <CitySearch />
                </div>
            </div>
            <div className="meal_section">
                <Meal />
            </div>
        </>
    )
}

export default Home