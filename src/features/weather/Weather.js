import { selectWeather } from "./weatherSlice"
import { useSelector } from "react-redux"

export const Weather = () => {
   
  const weather = useSelector(selectWeather)
	const weatherInfo = weather.weather[0]

	return (
		<div className="weather">
			<h3>{weatherInfo.main}</h3>
			<h4>{weatherInfo.description}</h4>
		</div>
	)
}