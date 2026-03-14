import {use, useActionState} from "react";
import {OpinionsContext} from '../store/opinions-context';
import Submit from "./Submit.jsx";


export function NewOpinion() {
	const {addOpinion} = use(OpinionsContext);
	
	async function shareOpinionAction(prevState, formData) {
		const body = formData.get('body');
		const userName = formData.get('userName');
		const title = formData.get('title');
		
		let errors = [];
		if (!userName) {
			errors.push('User name is required.');
		}
		if (!title) {
			errors.push('Title is required.');
		}
		if (!body) {
			errors.push('Opinion body is required.');
		}
		
		if (errors.length > 0) {
			return {
				errors,
				opinion: {userName, title, body},
			}
		}
		
		//TODO:  submit backend
		await addOpinion({userName, title, body});
		
		return {errors: null};
	}
	
	
	const [formState, formAction] = useActionState(shareOpinionAction, {
		errors: null,
	});
	
	return (
		<div id="new-opinion">
			<h2>Share your opinion!</h2>
			<form action={formAction}>
				<div className="control-row">
					<p className="control">
						<label htmlFor="userName">Your Name</label>
						<input type="text" id="userName" name="userName"
						       defaultValue={formState.opinion?.userName}/>
					</p>
					
					<p className="control">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" name="title" defaultValue={formState.opinion?.title}/>
					</p>
				</div>
				<p className="control">
					<label htmlFor="body">Your Opinion</label>
					<textarea id="body" name="body" rows={5} defaultValue={formState.options?.body}></textarea>
				</p>
				
				
				{formState.errors && (
					<ul className="errors">
						{formState.errors.map((error) => (
							<li key={error}>{error}</li>
						))}
					</ul>
				)}
				
				<Submit/>
			</form>
		</div>
	);
}
