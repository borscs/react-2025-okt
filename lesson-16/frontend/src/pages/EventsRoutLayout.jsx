import EventsNavigation from "../components/EventsNavigation";
import {Outlet} from "react-router-dom";

export const EventsRoutLayout = () => {
	return (
		<>
			<EventsNavigation/>
			<Outlet/>
		</>
	)
}
