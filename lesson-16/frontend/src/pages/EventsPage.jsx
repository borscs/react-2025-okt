import { useLoaderData } from 'react-router-dom';

import EventsList from "../components/EventsList";


export const EventsPage = () => {
	const data = useLoaderData();
	const events = data.events;
	
	return (
		<EventsList events={events}/>
	)
}



export async function eventsLoader(){
	const response = await fetch('http://localhost:8080/events');
	
	if(!response.ok) {
		throw new Response(JSON.stringify({message: 'Could not fetch events'}), {status: 500});
	}else {
		const data = await response.json();
		return data;
	}
}
