import { createSlice } from "@reduxjs/toolkit";

const exampleQuote = {
		quote: '"Every rose has its thorn."',
		author: 'Bret Michaels',
		category: 'Famous'
	}


const quoteSlice = createSlice(
	{
		name: 'quote',
		initialState: exampleQuote,
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