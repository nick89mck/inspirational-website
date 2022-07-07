

export const Quote = () => {

	const exampleQuote = {
		quote: 'Every rose has its thorn.',
		author: 'Bret Michaels',
		category: 'Famous'
	}

	return  (
		<div className="quote-container">
			<p className="quote">{exampleQuote.quote}</p>
			<p className="author">-{exampleQuote.author}</p>
		</div>
	)
		
}