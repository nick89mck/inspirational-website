import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice(
	{
		name: 'quote',
		initialState: {},
		reducers: {
			getQuote: (state, action) => {
				// api call?
			}
		}
	}
)

export const selectQuote = (state) => state.quote;
export const { getQuote } = quoteSlice.actions;
export default quoteSlice.reducer;