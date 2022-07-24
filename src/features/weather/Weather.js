import React, { useEffect } from "react"
import { getWeather } from "./weatherSlice"
import { useSelector, useDispatch } from "react-redux"

export const Weather = () => {
  const { data, temperature, city, state } = useSelector((state)=> state.weather)
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(getWeather({city, state}))
  }, [dispatch, city, state])	

	return (
		<div className="weather-container">
			<img 
				src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
				alt={data.description}
				height='100'
				width='100'
			/>
			<div className="weather-text">
				<h3>{temperature}°</h3>
				<h4>{city}, {state}</h4>
			</div>
			
		</div>
	)
}