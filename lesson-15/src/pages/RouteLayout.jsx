import classes from "./RootLayout.module.css";
import {Outlet} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export function RouteLayout() {
	
	return (
		<>
		<MainNavigation className={classes.content}/>
			<main className={classes.content}>
				<Outlet/>
			</main>
		</>
	)
}
