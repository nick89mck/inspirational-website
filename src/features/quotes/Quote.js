import { selectQuote } from "./quoteSlice"
import { useSelector } from "react-redux"

export const Quote = () => {
	const quote = useSelector(selectQuote)

	return  (
		<div className="quote-container">
			<p className="quote">{quote.quote}</p>
			<p className="author">{quote.author}</p>
		</div>
	)
		
}