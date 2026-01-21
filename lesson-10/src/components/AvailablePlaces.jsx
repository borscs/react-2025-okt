import Places from './Places.jsx';
import {useEffect, useState} from "react";
import Error from "./Error.jsx";
import {fetchAvailablePlaces} from "../http.js";
import {sortPlacesByDistance} from "../loc.js";

export default function AvailablePlaces({onSelectPlace}) {
	const [availableData, setAvailableData] = useState([]);
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState();
	
	useEffect(() => {
		async function fetchPlaces() {
			setIsFetching(true);
			try {
				const places =  await fetchAvailablePlaces();
				
				navigator.geolocation.getCurrentPosition((position) => {
					const sortedPlaces = sortPlacesByDistance(
						places,
						position.coords.latitude,
						position.coords.longitude
					);
					setAvailableData(sortedPlaces);
					setIsFetching(false);
				});
			} catch (error) {
				setError({
					message: error.message || 'Could not fetch places, please try again later.',
					
				});
			}
			setIsFetching(false);
		}
		
		fetchPlaces();
		// fetch('http://localhost:3000/places')
		// 	.then((response) => {
		// 		return response.json()
		// 	})
		// 	.then(data => {
		// 		setAvailableData(data.places);
		// 	}).catch(error => {
		// 		alert(error.message);
		// })
	}, []);
	
	if(error){
		return  <Error title="An error occurred!" message={error.message} onConfirm={()=>console.log("Are you sure?")}/>;
	}
	
	return (
		<Places
			title="Available Places"
			places={availableData}
			isLoading={isFetching}
			loadingText="Fetching place data..."
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}
