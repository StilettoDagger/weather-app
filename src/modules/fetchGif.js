export default async function fetchGif(query) {
	const resp = await fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=I1Pz6plZkjjtXpAQrthx5mZS9aP6Vdz5&s=${query.replace(/\s/g, "+")}&weirdness=1`
	);
	const gifData = await resp.json();
	return gifData.data.images.original.url;
}
