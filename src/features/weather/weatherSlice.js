import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import openWeatherMapApi from '../../api/openWeatherMap/';

export const getWeather = createAsyncThunk(
	'weather/getWeather',
	({ city, state }) => openWeatherMapApi.getWeather(city, state)
)

const weatherSlice = createSlice(
	{
		name: 'weather',
		initialState: {
			city: 'Indianapolis',
			state: 'Indiana',
			data: {},
			temperature: ''
		},
		reducers: {
			setCity: (state, action) => {
				state.city = action.payload;
			},
			setState: (state, action) => {
				state.state = action.payload;
			}
		},
		extraReducers: {
			[getWeather.fulfilled]: (state, action) => {
				state.data = action.payload.weatherData;
				state.temperature = action.payload.temperature;
			}
		}
	}
)

export const selectWeather = (state) => state.weather;
export const { setCity, setState } = weatherSlice.actions;
export default weatherSlice.reducer;