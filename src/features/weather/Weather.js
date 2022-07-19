import React, { useEffect } from "react"
import { selectWeather, getWeather } from "./weatherSlice"
import { useSelector, useDispatch } from "react-redux"

export const Weather = () => {
  const { data, temperature, city, state } = useSelector((state)=> state.weather)
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(getWeather({city, state}))
  }, [dispatch, city, state])	

	return (
		<div className="weather">
			<h3>{temperature}°</h3>
			<h4>{data.description}</h4>
		</div>
	)
}