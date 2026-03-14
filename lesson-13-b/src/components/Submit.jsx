import {use} from "react";
import {OpinionsContext} from "../store/opinions-context.jsx";


export default function () {
	const {pending} = use(OpinionsContext);
	
	return (
		<p className="actions">
			<button type="submit">Submit</button>
			{pending && <span>Submitting...</span>}
		</p>
	)
}
