import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from '../features/goals/goalsSlice';
import imagesReducer from '../features/images/imagesSlice';
import quoteReducer from '../features/quotes/quoteSlice';
import weatherReducer from '../features/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    goals: goalsReducer,
    images: imagesReducer,
    quote: quoteReducer,
    weather: weatherReducer
  },
});
