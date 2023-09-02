import React, { useEffect, useState } from 'react'
import axios from "axios"

const CitySearch = () => {

    const [restaurants, setRestaurants] = useState([])
    const [resLoc, setResLoc] = useState([])
    const [locValue, setLocValue] = useState("")
    const [resName, setResName] = useState([])
    const [resValue, setResValue] = useState("")

    useEffect(() => {
        axios.get('https://zomato-backend-sm8l.onrender.com/location').then((res) => {
            setRestaurants(res.data)
        })
    }, [restaurants])
    const locationHandler = (e) => {
        setLocValue(e.target.value)
        let data = restaurants.filter((item) => {
            return item.locality.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setResLoc(data)
    }

    const searchHandler = (e) => {
        setResValue(e.target.value)
        let res = restaurants.filter((item) => {
            return item.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setResName(res)
    }


    return (
        <div className='restaurantForm'>
            <input type="search" placeholder='Please type a location' onChange={locationHandler} className='locationInput' />
            <input type="text" placeholder='Search for restaurants' className='restaurantInput' onChange={searchHandler} />
            {
                locValue &&
                <div className='loc_Data'>
                    {
                        resLoc.map((item, index) => {
                            return <p key={index}>{item.locality}</p>
                        })
                    }
                </div>
            }
            {
                resValue &&
                <div className='data'>
                    {resName.map((item, index) => {
                        return <div className='fullData' key={index}>
                            <img src={item.thumb} alt="jj" />
                            <div style={{ textAlign: "left" }}>
                                <h3>{item.name}</h3>
                                <p>{item.locality}</p>
                            </div>
                        </div>
                    })}
                </div>
            }
        </div>
    )
}

export default CitySearch