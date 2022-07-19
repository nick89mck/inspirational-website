const API_URL = `https://quotes.rest/qod?category=inspire`;

export const getQuote = async () => {
	const response = await fetch(API_URL);
	const json = await response.json();
	const quote = json.contents.quotes[0];
}