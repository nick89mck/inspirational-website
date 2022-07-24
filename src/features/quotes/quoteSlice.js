import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quotesApi from '../../api/quotes'

export const getQuote = createAsyncThunk(
	'quote/getQuote',
	quotesApi.getQuote
);



const quoteSlice = createSlice(
	{
		name: 'quote',
		initialState: {
			quote: '',
			author: ''
		},
		reducers: {},
		extraReducers: {
			[getQuote.fulfilled]: (state, action) => {
				state.quote = action.payload.quote;
				state.author = action.payload.author;
			}
		}
	}
)

export const selectQuote = (state) => state.quote.quote;
export const selectAuthor = (state) => state.quote.author;

export default quoteSlice.reducer;