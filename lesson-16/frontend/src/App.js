import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {eventsLoader, EventsPage} from "./pages/EventsPage";
import {HomePage} from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import NewEventPage,   {action as newEventAction } from "./pages/NewEventPage";
import RootPage from "./pages/RootPage";
import {EventsRoutLayout} from "./pages/EventsRoutLayout";
import {deleteEventAction, eventDetailLoader, EventDetailPage} from "./pages/EventDetailPage";
import {editEventAction, EditEventPage} from "./pages/EditEventPage";



const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'events',
				element: <EventsRoutLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
					{
						path: ':eventId',
						id: 'event-detail',
						loader: eventDetailLoader,
						children: [
							{
								index: true,
								element: <EventDetailPage />,
								action: deleteEventAction,
							},
							{ path: 'edit', element: <EditEventPage />, action: editEventAction},
						],
					},
					{ path: 'new', element: <NewEventPage />, action: newEventAction },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
