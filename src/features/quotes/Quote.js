import React, { useEffect } from "react"
import { selectQuote, selectAuthor, getQuote } from "./quoteSlice"
import { useSelector, useDispatch } from "react-redux"

export const Quote = () => {
	const quote = useSelector(selectQuote);
	const author = useSelector(selectAuthor);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getQuote())
	}, [dispatch])

	return  (
		<div className="quote-container">
			<p className="quote">{quote}</p>
			<p className="author">{author}</p>
		</div>
	)
		
}